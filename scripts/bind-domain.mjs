/*
 * Attach docs.models.1661688.xyz to the ai-guide Pages project via the API.
 *
 * wrangler 4.149 has no `pages domain` command, so this calls the Pages API
 * directly. The token comes from wrangler's own stored login and is never
 * printed; if the OAuth token lacks zones.write the script says so instead of
 * leaking anything.
 */
import { readFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

const PROJECT = 'ai-guide';
const DOMAIN = process.env.GUIDE_CUSTOM_DOMAIN || 'docs.models.1661688.xyz';
const ACCOUNT = process.env.CF_ACCOUNT || 'c05eebcbd0ee637bb8ebec06f1dd4578';

async function token() {
  const candidates = [
    path.join(os.homedir(), '.wrangler', 'config', 'default.toml'),
    path.join(os.homedir(), 'Library', 'Preferences', '.wrangler', 'config', 'default.toml'),
  ];
  for (const p of candidates) {
    try {
      const m = /oauth_token\s*=\s*"([^"]+)"/.exec(await readFile(p, 'utf8'));
      if (m) return m[1];
    } catch {}
  }
  throw new Error('no wrangler login found; run `wrangler login`');
}

const t = await token();
const api = async (path, init = {}) => {
  const res = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${t}`, 'Content-Type': 'application/json', ...(init.headers || {}) },
  });
  return res.json();
};

// 1. find the zone that owns the domain (1661688.xyz)
const zones = await api(`/zones?name=1661688.xyz`);
if (!zones.success || !zones.result?.length) {
  console.log('zone lookup failed:', JSON.stringify(zones.errors || zones).slice(0, 300));
  process.exit(1);
}
const zoneId = zones.result[0].id;
console.log('zone 1661688.xyz:', zoneId);

// 2. attach the custom domain to the Pages project
const add = await api(`/accounts/${ACCOUNT}/pages/projects/${PROJECT}/domains`, {
  method: 'POST',
  body: JSON.stringify({ name: DOMAIN }),
});
if (add.success) {
  console.log(`domain attached: ${DOMAIN}`);
  console.log('status:', JSON.stringify(add.result));
} else {
  const msg = JSON.stringify(add.errors || add).slice(0, 400);
  // "already exists" is fine
  if (/already/i.test(msg)) {
    console.log(`domain already attached: ${DOMAIN}`);
  } else {
    console.log('attach failed:', msg);
    process.exit(1);
  }
}

// 3. create the CNAME record pointing at the pages.dev host
const dns = await api(`/zones/${zoneId}/dns_records`, {
  method: 'POST',
  body: JSON.stringify({
    type: 'CNAME',
    name: 'docs.models',
    content: 'ai-guide-418.pages.dev',
    proxied: true,
    comment: 'model-dynamics guide (Cloudflare Pages)',
  }),
});
if (dns.success) {
  console.log('CNAME docs.models.1661688.xyz -> ai-guide-418.pages.dev created (proxied)');
} else if (/already exists|81053|81057/i.test(JSON.stringify(dns.errors || ''))) {
  console.log('CNAME already exists');
} else {
  console.log('CNAME failed:', JSON.stringify(dns.errors || dns).slice(0, 400));
}
