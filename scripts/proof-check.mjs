/**
 * Proof gates for industry pillars and money pages.
 * - Fail pages where every proof block is named (anonymised:false) and not signed off.
 * - Fail pages with fewer than three numeric claims across proof result fields.
 */
import { createJiti } from "jiti";
import { join } from "node:path";

const root = process.cwd();
const jiti = createJiti(join(root, "scripts/proof-check.mjs"), {
  interopDefault: true,
  alias: { "@": root },
});

const NUMERIC = /\d/;
const errors = [];

function claimHasNumber(text) {
  return typeof text === "string" && NUMERIC.test(text);
}

function countNumericClaims(proofs) {
  let count = 0;
  for (const proof of proofs) {
    for (const result of proof.results ?? []) {
      for (const field of [
        result.metric,
        result.before,
        result.after,
        result.window,
      ]) {
        if (claimHasNumber(field)) count += 1;
      }
    }
    // Method proofs often put concrete numbers in situation/built prose.
    if (claimHasNumber(proof.situation)) count += 1;
    if (claimHasNumber(proof.built)) count += 1;
  }
  return count;
}

function checkPage(route, proofs) {
  if (!Array.isArray(proofs) || proofs.length === 0) {
    errors.push(`${route}: missing proof blocks`);
    return;
  }

  const allNamedUnsigned = proofs.every(
    (proof) => proof.signedOff === false && proof.anonymised === false,
  );
  if (allNamedUnsigned) {
    errors.push(
      `${route}: all proof blocks are named clients without signedOff (anonymised:false and signedOff:false)`,
    );
  }

  const numericClaims = countNumericClaims(proofs);
  if (numericClaims < 3) {
    errors.push(
      `${route}: fewer than three numeric proof claims (${numericClaims})`,
    );
  }
}

const registry = jiti(join(root, "content/registry.ts"));
registry.resetRegistryCache();
const records = registry.getAllIndustryRecords({ includeExamples: false });

for (const record of records) {
  const industry = record.industry;
  checkPage(`/industries/${industry.slug}`, industry.proof);

  for (const moneyPage of industry.moneyPages ?? []) {
    checkPage(
      `/industries/${industry.slug}/${moneyPage.service}`,
      moneyPage.proof,
    );
  }
}

if (errors.length > 0) {
  console.error("[proof-check] FAILED:");
  for (const error of errors) {
    console.error(`  ${error}`);
  }
  process.exit(1);
}

console.log(
  `[proof-check] OK: ${records.length} industries and their money pages checked.`,
);
