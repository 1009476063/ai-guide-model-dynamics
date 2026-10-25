/*
 * Pull the 模型动态 articles' images off the upstream CDN and stage them for our
 * own R2 bucket.
 *
 * Why: every image in these 21 files is hot-linked from pic.yupi.icu, which
 * serves from the upstream owner's Tencent COS. That is exactly the dependency
 * this migration exists to remove (Q11: 图片全量下载 + 改写 URL), and it is also
 * the thing that would break the guide silently the day upstream changes
 * bucket policy. So the images move to us and the markdown points at us.
 *
 * Idempotent: finished objects stay in .image-cache and are skipped, so an
 * interrupted run resumes. Writes:
 *   .image-cache/guide/<file>     the bytes, keyed by our final object key
 *   .image-manifest.json          key/raws/files/bytes/contentType, drives upload
 *   .image-url-map.json           raw upstream URL (as it appears in markdown)
 *                                 -> our key, drives the markdown rewrite
 */
import { createHash } from 'node:crypto';
import { mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const SECTION = 'Vibe Coding 零基础教程/15 模型动态';
const CACHE = '.image-cache';
const DIR = 'guide';
/*
 * The upstream CDN answers 514 (its own "too many requests") at 8-way
 * concurrency: only 315 of 743 objects got through on the first try. Two
 * in flight with a retry ladder that backs off is slow but complete, and
 * because finished objects are cached the whole step is resumable.
 */
const CONCURRENCY = 2;
const ATTEMPTS = 6;
const BACKOFF_MS = 700;
const IMG_RE = /!\[[^\]]*\]\((https?:\/\/[^)\s]+)\)|<img[^>]+src="(https?:\/\/[^"]+)"/g;

function decodeFully(value) {
  let cur = value;
  for (let i = 0; i < 4; i += 1) {
    try {
      const next = decodeURIComponent(cur);
      if (next === cur) break;
      cur = next;
    } catch {
      break;
    }
  }
  return cur;
}

const EXT_BY_TYPE = {
  'image/png': '.png',
  'image/jpeg': '.jpg',
  'image/gif': '.gif',
  'image/webp': '.webp',
  'image/svg+xml': '.svg',
  'image/avif': '.avif',
};

/**
 * Upstream URL -> our object key.
 *
 * Upstream filenames are inconsistent: some raw, some percent-encoded, some
 * double-encoded (vibe%252520coding...). Re-encoding a decoded name turns every
 * '%' into '%25' and one 300-character name blew past the 255-byte filesystem
 * limit, so the key is derived the other way round: decode to the real name,
 * fold it to a short ASCII slug, and append a content-independent hash of the
 * original path so collisions and truncation are impossible to hit silently.
 */
function keyFor(url) {
  // Drop any query first: upstream appends ?imageSlim to ~47 of these, and
  // leaving it in made the "extension" read as `.png?imageslim`, which then
  // fell through to application/octet-stream on upload.
  const pathname = decodeFully(
    url.replace(/^https?:\/\/[^/]+/, '').split('?')[0],
  ).replace(/^\/+/, '');
  const segments = pathname.split('/');
  const base = segments.pop() || 'image';
  const stem = base.includes('.') ? base.slice(0, base.lastIndexOf('.')) : base;
  const slug = stem
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48)
    .replace(/-+$/g, '');
  const tag = createHash('sha1').update(pathname).digest('hex').slice(0, 10);
  return { key: `${DIR}/${(slug || 'img')}-${tag}`, original: base, pathname };
}

const files = (await readdir(SECTION)).filter((f) => f.endsWith('.md'));

// raw URL exactly as it appears in markdown -> files containing it
const refs = new Map();
for (const f of files) {
  const txt = await readFile(path.join(SECTION, f), 'utf8');
  for (const m of txt.matchAll(IMG_RE)) {
    const raw = (m[1] || m[2] || '').trim();
    if (!raw.startsWith('http')) continue;
    if (!refs.has(raw)) refs.set(raw, new Set());
    refs.get(raw).add(f);
  }
}

// our key -> everything that maps to it (several upstream spellings can collide)
const byKey = new Map();
for (const [raw, where] of refs) {
  const { key, original } = keyFor(raw);
  if (!byKey.has(key)) byKey.set(key, { key, original, raws: new Set(), files: new Set() });
  const entry = byKey.get(key);
  entry.raws.add(raw);
  for (const f of where) entry.files.add(f);
}

const targets = [...byKey.values()].sort((a, b) => a.key.localeCompare(b.key));
await mkdir(CACHE, { recursive: true });

let done = 0;
let downloaded = 0;
const failures = [];

/**
 * Fetch one object, retrying on the CDN's rate-limit answers.
 *
 * 514/429/503 are all "come back later" from this CDN rather than real misses,
 * so they are retried; a genuine 404 exhausts the ladder and is reported.
 */
async function fetchOne(entry) {
  const dest = path.join(CACHE, entry.key);
  if (existsSync(dest) && (await stat(dest)).size > 0) {
    entry.bytes = (await stat(dest)).size;
    done += 1;
    return;
  }
  const url = [...entry.raws][0];
  for (let attempt = 1; attempt <= ATTEMPTS; attempt += 1) {
    try {
      const res = await fetch(url, {
        headers: { 'user-agent': 'Mozilla/5.0', referer: 'https://ai.codefather.cn/' },
        signal: AbortSignal.timeout(90000),
      });
      if (!res.ok) {
        const err = new Error(`HTTP ${res.status}`);
        err.retryable = res.status === 514 || res.status === 429 || res.status >= 500;
        throw err;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length === 0) throw new Error('empty body');
      const type = (res.headers.get('content-type') || '').split(';')[0].trim().toLowerCase();
      entry.contentType = type || 'application/octet-stream';
      entry.extFromType = EXT_BY_TYPE[entry.contentType] || '';
      await mkdir(path.dirname(dest), { recursive: true });
      // write to a sibling then rename: an interrupted run never leaves a
      // truncated file that the resume check would happily accept as complete
      const tmp = dest + '.part';
      await writeFile(tmp, buf);
      const { rename } = await import('node:fs/promises');
      await rename(tmp, dest);
      entry.bytes = buf.length;
      downloaded += 1;
      done += 1;
      return;
    } catch (err) {
      const retryable = err?.retryable || /HTTP 51[0-9]|HTTP 429|HTTP 50[0-9]|timeout|ETIMEDOUT|socket/i.test(String(err?.message || err));
      if (attempt < ATTEMPTS && retryable) {
        const wait = BACKOFF_MS * attempt + Math.floor(Math.random() * 400);
        await new Promise((r) => setTimeout(r, wait));
        continue;
      }
      failures.push({ key: entry.key, url, error: String((err && err.message) || err), attempts: attempt });
      done += 1;
      return;
    }
  }
}

// simple worker pool: upstream is a CDN, 8 in flight keeps it happy and honest
let cursor = 0;
async function worker() {
  while (cursor < targets.length) {
    const i = cursor;
    cursor += 1;
    await fetchOne(targets[i]);
    if (done % 50 === 0) process.stdout.write(`  ${done}/${targets.length}\n`);
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));

const ok = targets.filter((e) => e.bytes);
for (const e of ok) {
  e.raws = [...e.raws];
  e.files = [...e.files];
  if (!e.contentType) {
    const guessed = path.extname(e.original).toLowerCase();
    e.contentType =
      { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp', '.svg': 'image/svg+xml' }[guessed] ||
      'application/octet-stream';
  }
}

const urlMap = {};
for (const e of ok) for (const raw of e.raws) urlMap[raw] = e.key;

await writeFile('.image-manifest.json', JSON.stringify(ok, null, 2));
await writeFile('.image-url-map.json', JSON.stringify(urlMap, null, 2));

const bytes = ok.reduce((n, e) => n + e.bytes, 0);
console.log(
  JSON.stringify(
    {
      markdownFiles: files.length,
      uniqueUpstreamUrls: refs.size,
      uniqueImages: ok.length,
      downloadedNow: downloaded,
      resumedFromCache: ok.length - downloaded,
      failed: failures.length,
      totalBytes: bytes,
      totalMB: +(bytes / 1048576).toFixed(1),
    },
    null,
    2,
  ),
);
if (failures.length) {
  console.log('failures:');
  for (const f of failures.slice(0, 12)) console.log('  ', f.key, '::', f.error);
}
