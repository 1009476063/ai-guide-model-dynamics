/*
 * Confirm every image the rewritten markdown now points at is actually served.
 *
 * Upload success is not the same as retrievability: an object can be written and
 * still 404 through the public URL, and an earlier batch here silently went to
 * wrangler's *local* emulation while reporting "Upload complete". So read the
 * URLs straight out of the markdown - what the reader will ask for - and check
 * each one answers 200 with an image content type.
 */
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const SECTION = 'Vibe Coding 零基础教程/15 模型动态';
const RE = /https:\/\/pub-[^\s)"']+/g;

const urls = new Set();
for (const f of (await readdir(SECTION)).filter((x) => x.endsWith('.md'))) {
  const txt = await readFile(path.join(SECTION, f), 'utf8');
  for (const m of txt.matchAll(RE)) urls.add(m[0]);
}

const list = [...urls].sort();
const bad = [];
let bytes = 0;
let cursor = 0;

async function worker() {
  while (cursor < list.length) {
    const i = cursor;
    cursor += 1;
    const u = list[i];
    try {
      const res = await fetch(u, { method: 'GET', signal: AbortSignal.timeout(30000) });
      const type = res.headers.get('content-type') || '';
      const len = Number(res.headers.get('content-length') || 0);
      if (!res.ok || !type.startsWith('image/')) bad.push({ url: u, status: res.status, type });
      else bytes += len;
    } catch (err) {
      bad.push({ url: u, status: 'ERR', type: String((err && err.message) || err) });
    }
  }
}
await Promise.all(Array.from({ length: 10 }, worker));

console.log(
  JSON.stringify(
    { checked: list.length, ok: list.length - bad.length, bad: bad.length, servedMB: +(bytes / 1048576).toFixed(1), firstFailures: bad.slice(0, 5) },
    null,
    2,
  ),
);
if (bad.length) process.exitCode = 1;
