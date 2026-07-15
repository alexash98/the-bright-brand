import { chromium } from "playwright";

const base = process.argv[2] ?? "http://localhost:3200";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

await page.goto(`${base}/`, { waitUntil: "networkidle" });

// Seed dataLayer if GTM bootstrap is slow/blocked in CI; the listener still
// pushes into whatever array exists.
await page.evaluate(() => {
  window.dataLayer = window.dataLayer || [];
});

const before = await page.evaluate(() =>
  (window.dataLayer || []).filter((e) => e && e.event === "page_view").length,
);

// Soft nav via client-side Link click (not a full reload).
await Promise.all([
  page.waitForURL("**/blog"),
  page.click('a[href="/blog"]'),
]);

// Give the route listener effect a tick after pathname updates.
await page.waitForTimeout(500);

const after = await page.evaluate(() => {
  const events = (window.dataLayer || []).filter(
    (e) => e && e.event === "page_view",
  );
  return {
    count: events.length,
    last: events[events.length - 1] ?? null,
  };
});

const gtmPresent = await page.evaluate(() => {
  const scripts = [...document.scripts].map((s) => s.src || s.id);
  return {
    bootstrapId: scripts.includes("gtm-bootstrap") || document.getElementById("gtm-bootstrap") != null,
    gtmSrc: [...document.scripts].some((s) =>
      (s.src || "").includes("googletagmanager.com/gtm.js"),
    ),
    odal: [...document.scripts].some((s) => (s.src || "").includes("odal.io/tracker.js")),
  };
});

console.log(JSON.stringify({ before, after, gtmPresent }, null, 2));

const softNavFired = after.count > before;
const ok =
  softNavFired &&
  after.last?.page_path === "/blog" &&
  (gtmPresent.bootstrapId || gtmPresent.gtmSrc);

await browser.close();
if (!ok) {
  console.error("FAIL: soft-nav page_view did not fire as expected");
  process.exit(1);
}
console.log("PASS: soft-nav page_view fired for /blog");
