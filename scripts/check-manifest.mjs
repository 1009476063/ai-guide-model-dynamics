/*
 * Sanity gate between the download step and the upload/rewrite step.
 *
 * The manifest drives uploads and the url-map drives the markdown rewrite, so
 * if they ever disagree (e.g. keyFor changed between runs) we would upload one
 * set of keys and link another. Fail loudly instead.
 */
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const manifest = JSON.parse(await readFile('.image-manifest.json', 'utf8'));
const urlMap = JSON.parse(await readFile('.image-url-map.json', 'utf8'));

const keys = new Set(manifest.map((e) => e.key));
if (keys.size !== manifest.length) throw new Error('duplicate keys in manifest');

const dangling = Object.entries(urlMap).filter(([, k]) => !keys.has(k));
if (dangling.length) throw new Error(`${dangling.length} url-map entries point at unknown keys, e.g. ${dangling[0][0]}`);

const manifestRaws = new Set();
for (const e of manifest) for (const r of e.raws) manifestRaws.add(r);
const mapRaws = new Set(Object.keys(urlMap));
const uncovered = [...manifestRaws].filter((r) => !mapRaws.has(r));
if (uncovered.length) throw new Error(`${uncovered.length} manifest URLs missing from url-map`);

const missing = manifest.filter((e) => !existsSync('.image-cache/' + e.key) || !e.bytes);
if (missing.length) throw new Error(`${missing.length} manifest entries have no cached bytes`);

const badType = manifest.filter((e) => !/^image\//.test(e.contentType));
const extless = manifest.filter((e) => e.key.includes('.'));

console.log(
  JSON.stringify(
    {
      objects: manifest.length,
      upstreamUrls: mapRaws.size,
      totalMB: +(manifest.reduce((n, e) => n + e.bytes, 0) / 1048576).toFixed(1),
      keyMaxLen: Math.max(...manifest.map((e) => e.key.length)),
      types: [...new Set(manifest.map((e) => e.contentType))].sort().join(' '),
      nonImageTypes: badType.length,
      keysWithDots: extless.length,
    },
    null,
    2,
  ),
);
