/**
 * Dedup gate: extract body text per SEO route, strip boilerplate (omitted from
 * the corpus builder), build five-gram sets, fail when pairwise Jaccard > 0.15.
 * Prints the worst ten pairs.
 */
import { buildSeoCorpus } from "./lib/seo-corpus.mjs";

const THRESHOLD = 0.15;

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/[^a-z0-9\s']/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function fiveGrams(text) {
  const tokens = normalize(text).split(" ").filter(Boolean);
  const grams = new Set();
  if (tokens.length < 5) return grams;
  for (let i = 0; i <= tokens.length - 5; i += 1) {
    grams.add(tokens.slice(i, i + 5).join(" "));
  }
  return grams;
}

function jaccard(a, b) {
  if (a.size === 0 && b.size === 0) return 0;
  let intersection = 0;
  for (const gram of a) {
    if (b.has(gram)) intersection += 1;
  }
  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

const pages = buildSeoCorpus().filter((page) => page.bodyText.trim().length > 0);

if (pages.length < 2) {
  console.log("[dedup-check] Fewer than two content pages. Nothing to compare.");
  process.exit(0);
}

const gramSets = pages.map((page) => ({
  route: page.route,
  grams: fiveGrams(page.bodyText),
}));

const pairs = [];
for (let i = 0; i < gramSets.length; i += 1) {
  for (let j = i + 1; j < gramSets.length; j += 1) {
    const score = jaccard(gramSets[i].grams, gramSets[j].grams);
    pairs.push({
      a: gramSets[i].route,
      b: gramSets[j].route,
      score,
    });
  }
}

pairs.sort((left, right) => right.score - left.score);
const worst = pairs.slice(0, 10);

console.log("[dedup-check] Worst ten five-gram Jaccard pairs:");
for (const pair of worst) {
  console.log(
    `  ${pair.score.toFixed(4)}  ${pair.a}  <->  ${pair.b}`,
  );
}

const failures = pairs.filter((pair) => pair.score > THRESHOLD);
if (failures.length > 0) {
  console.error(
    `\n[dedup-check] FAILED: ${failures.length} pair(s) above ${THRESHOLD}.`,
  );
  process.exit(1);
}

console.log(`\n[dedup-check] OK: all pairs at or below ${THRESHOLD}.`);
