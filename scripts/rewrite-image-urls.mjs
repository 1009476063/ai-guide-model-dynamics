/*
 * Point the articles at our bucket instead of the upstream CDN.
 *
 * This is the step that actually severs the dependency: until the markdown
 * references our own URLs, the guide still renders the upstream owner's bucket
 * and dies the day they change policy. Keys keep no file extension (contentType
 * carries the type instead), so the map is a straight raw-URL -> public-URL
 * replacement and nothing has to be parsed back apart.
 *
 * Reads the url map written by migrate-images.mjs and the manifest for the
 * public base, then rewrites every occurrence inside the section.
 */
import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SECTION = 'Vibe Coding 零基础教程/15 模型动态';
const urlMap = JSON.parse(await readFile('.image-url-map.json', 'utf8'));
const publicBase = (process.env.R2_PUBLIC_URL || 'https://pub-5477160dc12c41ee929d51a2e2fa91a1.r2.dev').replace(/\/$/, '');

// longest raw first: some URLs are prefixes of others once the query is dropped
const entries = Object.entries(urlMap)
  .map(([raw, key]) => [raw, `${publicBase}/${key.split('/').map(encodeURIComponent).join('/')}`])
  .sort((a, b) => b[0].length - a[0].length);

const files = (await readdir(SECTION)).filter((f) => f.endsWith('.md'));
let totalReplacements = 0;
const perFile = {};

for (const f of files) {
  const file = path.join(SECTION, f);
  const before = await readFile(file, 'utf8');
  let text = before;
  let n = 0;
  for (const [raw, url] of entries) {
    if (!text.includes(raw)) continue;
    const parts = text.split(raw);
    n += parts.length - 1;
    text = parts.join(url);
  }
  if (text !== before) {
    await writeFile(file, text);
    perFile[f] = n;
    totalReplacements += n;
  }
}

const leftovers = [];
for (const f of files) {
  const txt = await readFile(path.join(SECTION, f), 'utf8');
  const hits = txt.match(/pic\.yupi\.icu/g);
  if (hits) leftovers.push([f, hits.length]);
}

console.log(
  JSON.stringify(
    {
      filesRewritten: Object.keys(perFile).length,
      totalReplacements,
      distinctUrlsAvailable: entries.length,
      leftoverUpstreamRefs: leftovers,
    },
    null,
    2,
  ),
);
if (leftovers.length) {
  console.error('refusing to finish: some articles still reference pic.yupi.icu');
  process.exitCode = 1;
}
