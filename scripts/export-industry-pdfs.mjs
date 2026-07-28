/**
 * Export industry hub pages to PDF for offline review.
 *
 *   $env:BASE_URL="http://localhost:3001"
 *   npm run seo:pdfs
 */
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";

const root = process.cwd();
const baseUrl = (process.env.BASE_URL || "http://localhost:3001").replace(
  /\/$/,
  "",
);
const outDir = join(root, "docs/seo/page-pdfs");
const industriesDir = join(root, "content/industries");

function discoverPaths() {
  const paths = ["/industries"];
  const files = readdirSync(industriesDir).filter(
    (file) => file.endsWith(".ts") && !file.startsWith("_"),
  );

  for (const file of files) {
    const source = readFileSync(join(industriesDir, file), "utf8");
    const slugMatch = source.match(/slug:\s*["']([^"']+)["']/);
    if (!slugMatch) continue;
    const slug = slugMatch[1];
    paths.push(`/industries/${slug}`);

    const serviceMatches = [
      ...source.matchAll(/service:\s*["']([a-z0-9-]+)["']/g),
    ];
    for (const match of serviceMatches) {
      paths.push(`/industries/${slug}/${match[1]}`);
    }
  }

  return [...new Set(paths)];
}

const paths = discoverPaths();
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const index = [];

for (const path of paths) {
  const url = `${baseUrl}${path}`;
  const fileSafe = path.replace(/^\//, "").replace(/\//g, "__") || "industries";
  const filePath = join(outDir, `${fileSafe}.pdf`);
  console.log(`PDF ${url}`);
  try {
    const response = await page.goto(url, {
      waitUntil: "networkidle",
      timeout: 90_000,
    });
    if (!response || !response.ok()) {
      console.error(`  FAIL status ${response?.status() ?? "none"}`);
      index.push({ path, status: "fail", reason: `HTTP ${response?.status()}` });
      continue;
    }
    await page.pdf({
      path: filePath,
      format: "A4",
      printBackground: true,
      margin: { top: "16mm", bottom: "16mm", left: "12mm", right: "12mm" },
    });
    index.push({ path, status: "ok", file: `${fileSafe}.pdf` });
  } catch (error) {
    console.error(`  FAIL ${String(error)}`);
    index.push({ path, status: "fail", reason: String(error) });
  }
}

await browser.close();

writeFileSync(
  join(outDir, "index.json"),
  JSON.stringify(
    { baseUrl, generatedAt: new Date().toISOString(), pages: index },
    null,
    2,
  ),
);

const ok = index.filter((row) => row.status === "ok").length;
const fail = index.length - ok;
console.log(`\nDone: ${ok} PDFs, ${fail} failures. Output: ${outDir}`);
if (fail > 0) process.exit(1);
