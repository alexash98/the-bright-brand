import { spawnSync } from "node:child_process";
import { join } from "node:path";

const root = process.cwd();
const steps = [
  "content-lint.mjs",
  "dedup-check.mjs",
  "proof-check.mjs",
  "check-market-intel.mjs",
];

let failed = false;

for (const step of steps) {
  console.log(`\n==> running ${step}`);
  const result = spawnSync(process.execPath, [join(root, "scripts", step)], {
    cwd: root,
    stdio: "inherit",
  });
  if (result.status !== 0) {
    failed = true;
  }
}

if (failed) {
  console.error("\n[seo:check] FAILED");
  process.exit(1);
}

console.log("\n[seo:check] OK");
