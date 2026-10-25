#!/bin/bash
# VuePress 1.9 -> webpack 4 -> MD4 hash, which OpenSSL 3 (Node 17+) removed.
# Without the legacy provider the build dies with
# "error:0308010C:digital envelope routines::unsupported" (measured: exit 1
# without the flag, 23 pages with it). CI must set this too.
set -eu
cd "$(dirname "$0")/.."
export NODE_OPTIONS=--openssl-legacy-provider
# canonical / sitemap / feed take their host from here (see .vuepress/config.ts)
export GUIDE_BASE_URL="${GUIDE_BASE_URL:-https://ai-guide-418.pages.dev}"
npm run docs:build 2>&1 | tee /tmp/guide-build.log | grep -Ei 'No matching page|generated static|error' | sort | uniq -c
test -s .vuepress/dist/index.html
echo "dist pages: $(find .vuepress/dist -name index.html | wc -l | tr -d ' ')"
