/*
 * Push the staged images to R2.
 *
 * Wrangler is the only thing here that talks to Cloudflare: it already holds the
 * login from `wrangler login`, so this script never reads, prints or signs with
 * a credential. The cost is process startup (~4s per object), which is why the
 * work is chunked and checkpointed rather than run as one long pass: a chunk can
 * be re-run safely after an interrupted call.
 *
 *   node scripts/upload-images-r2.mjs --count 120
 *
 * .upload-done.json records completed keys; a rerun skips them.
 */
import { execFile } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const BUCKET = process.env.R2_BUCKET || 'ai-guide-pic';
const WRANGLER = path.join(process.env.HOME || '', '.npm-global', 'bin', 'wrangler');
const DONE = '.upload-done.json';
const CONCURRENCY = 6;
/*
 * Public base of the bucket's r2.dev URL. Used only to confirm an object really
 * landed remotely: without `--remote` wrangler silently writes to its local
 * emulation and still prints "Upload complete", so a green exit code proves
 * nothing on its own.
 */
const PUBLIC_BASE = process.env.R2_PUBLIC_URL || 'https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev';

const argv = process.argv.slice(2);
const arg = (name, fallback) => {
  const i = argv.indexOf('--' + name);
  return i >= 0 ? argv[i + 1] : fallback;
};
const count = Number(arg('count', '120'));

const manifest = JSON.parse(await readFile('.image-manifest.json', 'utf8'));
const done = new Set(existsSync(DONE) ? JSON.parse(await readFile(DONE, 'utf8')) : []);

const pending = manifest.filter((e) => !done.has(e.key));
const batch = pending.slice(0, count);
console.log(`already uploaded: ${done.size} | pending: ${pending.length} | this batch: ${batch.length}`);

function put(entry) {
  return new Promise((resolve) => {
    execFile(
      WRANGLER,
      [
        'r2', 'object', 'put', `${BUCKET}/${entry.key}`,
        '--file', path.join('.image-cache', entry.key),
        '--content-type', entry.contentType,
        '--cache-control', 'public, max-age=31536000, immutable',
        // without this, wrangler writes to local emulation and reports success
        '--remote',
      ],
      { maxBuffer: 4 << 20, timeout: 180000 },
      (err, stdout, stderr) => {
        if (err) resolve({ ok: false, key: entry.key, error: (stderr || stdout || String(err)).slice(-200) });
        else if (/Resource location: local/.test(stdout)) resolve({ ok: false, key: entry.key, error: 'refused to write to local emulation' });
        else resolve({ ok: true, key: entry.key });
      },
    );
  });
}

let cursor = 0;
let failures = 0;
let finished = 0;
let verified = false;

async function worker() {
  while (cursor < batch.length) {
    const i = cursor;
    cursor += 1;
    const r = await put(batch[i]);
    finished += 1;
    if (r.ok) {
      done.add(r.key);
      // First success of the run: prove it is actually readable over HTTP
      // before we burn the remaining 700+ calls.
      if (!verified) {
        verified = true;
        try {
          const head = await fetch(`${PUBLIC_BASE}/${r.key}`, { method: 'HEAD', signal: AbortSignal.timeout(20000) });
          if (!head.ok) {
            failures += 1;
            console.log('NOT-VISIBLE', r.key, 'HTTP', head.status, '- aborting batch');
            cursor = batch.length;
            return;
          }
          console.log(`  verified first object over HTTP: ${r.key} (${head.headers.get('content-type')})`);
        } catch (err) {
          console.log('  could not verify over HTTP:', String(err && err.message || err));
        }
      }
    } else {
      failures += 1;
      console.log('FAIL', r.key, r.error);
    }
    if (finished % 20 === 0) {
      await writeFile(DONE, JSON.stringify([...done], null, 2));
      console.log(`  ${finished}/${batch.length} this batch (total uploaded ${done.size}/${manifest.length})`);
    }
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker));
await writeFile(DONE, JSON.stringify([...done], null, 2));

console.log(
  JSON.stringify(
    { batch: batch.length, failures, uploadedSoFar: done.size, of: manifest.length, remaining: manifest.length - done.size },
    null,
    2,
  ),
);
