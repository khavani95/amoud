/**
 * Renders scripts/og-cover.html to public/brand/og-cover.png (1200×630).
 *
 * Requires Playwright and the Vazirmatn font installed on the machine:
 *   npm i -D playwright && npx playwright install chromium
 *   npm pack vazirmatn && install the TTFs into your font directory
 */
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { readFileSync, writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const html = readFileSync(resolve(here, "og-cover.html"), "utf8");

// Inline the logo so the page has no external requests.
const logo = readFileSync(
  resolve(here, "../public/brand/logo.png")
).toString("base64");
const page = html.replace(
  'src="../public/brand/logo.png"',
  `src="data:image/png;base64,${logo}"`
);

const dir = mkdtempSync(join(tmpdir(), "og-"));
const file = join(dir, "og.html");
writeFileSync(file, page);

const browser = await chromium.launch();
const p = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});
await p.goto(`file://${file}`);
await p.waitForTimeout(800);
await p.screenshot({ path: resolve(here, "../public/brand/og-cover.png") });
await browser.close();
console.log("wrote public/brand/og-cover.png");
