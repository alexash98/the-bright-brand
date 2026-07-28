import { readdirSync } from "node:fs";
import { join } from "node:path";
import { createJiti } from "jiti";

const root = process.cwd();
const dir = join(root, "content/industries");
const jiti = createJiti(join(root, "scripts/check-market-intel.mjs"), {
  interopDefault: true,
  alias: { "@": root },
});

/** Keep vertical hubs sharp: cited stats + targeting + stages. Charts are optional junk. */
const required = ["marketStats", "targetingNotes", "pipelineStages"];

/** Construction verticals rewritten to the sharp template: no illustrative marketStats. */
const noIllustrativeSlugs = new Set([
  "commercial-fit-out",
  "civils-infrastructure",
  "building-services",
  "building-services-me",
]);

let missingAny = false;
let illustrativeAny = false;

for (const file of readdirSync(dir)
  .filter((f) => f.endsWith(".ts") && !f.startsWith("_"))
  .sort()) {
  const mod = jiti(join(dir, file));
  const industry = mod.default ?? mod;
  const missing = required.filter((key) => {
    const value = industry[key];
    if (value == null) return true;
    if (Array.isArray(value) && value.length === 0) return true;
    return false;
  });
  if (missing.length) {
    missingAny = true;
    console.log(`${file}: missing ${missing.join(", ")}`);
  }

  if (noIllustrativeSlugs.has(industry.slug)) {
    const illustrative = (industry.marketStats ?? []).filter((stat) =>
      String(stat.source ?? "")
        .toLowerCase()
        .includes("illustrative"),
    );
    if (illustrative.length) {
      illustrativeAny = true;
      console.log(
        `${file}: illustrative marketStats still present (${illustrative
          .map((s) => s.label)
          .join("; ")})`,
      );
    }
  }
}

if (!missingAny && !illustrativeAny) {
  console.log(
    "All industry files have required market intel; sharp verticals have no illustrative marketStats.",
  );
}
process.exit(missingAny || illustrativeAny ? 1 : 0);
