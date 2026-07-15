// Static guard for the "exactly one H1 per page" rule.
//
// Pages compose section components, so the reliable signal we can check
// statically is: no single component file declares more than one <h1>, and
// the only files that declare an <h1> are the page-level hero/templates.
// Runtime crawl (Prompt 6) is the belt-and-braces check across composed pages.

import { readdirSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "..");
const ROOTS = ["app", "components"];

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (entry === "node_modules" || entry.startsWith(".")) continue;
      walk(full, files);
    } else if (full.endsWith(".tsx")) {
      files.push(full);
    }
  }
  return files;
}

const offenders = [];
const withH1 = [];

for (const root of ROOTS) {
  for (const file of walk(join(REPO_ROOT, root))) {
    const src = readFileSync(file, "utf8");
    const count = (src.match(/<h1[\s>]/g) ?? []).length;
    if (count > 0) {
      const rel = relative(REPO_ROOT, file).replace(/\\/g, "/");
      withH1.push({ rel, count });
      if (count > 1) offenders.push({ rel, count });
    }
  }
}

console.log("\nFiles declaring an <h1>:");
for (const { rel, count } of withH1.sort((a, b) => a.rel.localeCompare(b.rel))) {
  console.log(`  ${count}  ${rel}`);
}

if (offenders.length) {
  console.error("\n[check-h1] FAILED: file(s) declare more than one <h1>:");
  for (const { rel, count } of offenders) console.error(`  ${count}  ${rel}`);
  process.exit(1);
}

console.log("\n[check-h1] OK: no component declares more than one <h1>.\n");
