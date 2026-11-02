#!/usr/bin/env node
/**
 * Pings IndexNow (Bing, Yandex, Seznam, Naver…) with every URL in the live
 * sitemap, so new or edited pages are recrawled within minutes instead of
 * days. Bing's index also feeds ChatGPT search and Copilot.
 *
 *   node scripts/indexnow.mjs            # all sitemap URLs
 *   node scripts/indexnow.mjs /blog/foo  # only the given paths
 *
 * The key file public/<KEY>.txt proves ownership; keep the two in sync.
 */
const HOST = "www.amoud-co.ir";
const KEY = "c4444e1bec2dc7f2496af49b5c8d701f";

async function sitemapUrls() {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
}

const paths = process.argv.slice(2);
const urlList = paths.length
  ? paths.map((p) => `https://${HOST}${p.startsWith("/") ? p : `/${p}`}`)
  : await sitemapUrls();

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`IndexNow: ${res.status} ${res.statusText} — ${urlList.length} URLs`);
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
