import assert from "node:assert/strict";

const base = process.argv[2] ?? "http://127.0.0.1:3001";
const response = await fetch(base);
assert.equal(response.status, 200);
const html = await response.text();
assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
assert.match(html, /<title>Ro &amp; Co \| Software &amp; Digital Product Studio<\/title>/);
assert.ok(!/House\s+of\s+Roan|House\s+of\s+Rowan/i.test(html), "Old display brand remains");
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, "Duplicate IDs");
for (const [, id] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(id), `Missing anchor: ${id}`);
const text = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");
assert.ok(!text.includes("rohianudec14@gmail.com"), "Email address visible in page text");
assert.match(html, /href="mailto:rohianudec14@gmail\.com"[^>]*>Email us/);
assert.match(html, /rel="canonical" href="https:\/\/theroandco\.com"/);
assert.match(html, /property="og:image"/);
assert.match(html, /name="twitter:card" content="summary_large_image"/);
const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
assert.equal(schema["@type"], "Organization");
assert.equal(schema.name, "Ro & Co");
assert.equal(schema.url, "https://theroandco.com");
assert.ok(!schema.aggregateRating && !schema.review);
for (const route of ["/robots.txt", "/sitemap.xml", "/icon.svg", "/opengraph-image"]) {
  const asset = await fetch(new URL(route, base));
  assert.equal(asset.status, 200, route);
  if (route === "/opengraph-image") {
    assert.match(asset.headers.get("content-type"), /image\/png/);
    const png = Buffer.from(await asset.arrayBuffer());
    assert.equal(png.readUInt32BE(16), 1200);
    assert.equal(png.readUInt32BE(20), 630);
  } else if (route === "/sitemap.xml") assert.match(await asset.text(), /https:\/\/theroandco\.com/);
}
assert.equal((await fetch(new URL("/not-a-real-page", base))).status, 404);
const assetUrls = new Set([...html.matchAll(/(?:href|src)="(\/_next\/static\/[^"?]+)[^"]*"/g)].map((match) => match[1]));
let bytes = 0;
for (const url of assetUrls) {
  const asset = await fetch(new URL(url, base));
  assert.equal(asset.status, 200, url);
  bytes += (await asset.arrayBuffer()).byteLength;
}
console.log(JSON.stringify({ status: "passed", anchorTargets: ids.length, staticAssets: assetUrls.size, uncompressedAssetBytes: bytes, robots: html.match(/name="robots" content="([^"]+)"/)?.[1] }, null, 2));
