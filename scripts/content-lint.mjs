/**
 * Content lint for SEO foundation routes and industry source files.
 * Fails on banned phrases, em dashes, US spellings, heading issues,
 * internal-link budget breaches, and duplicate anchors to different URLs.
 */
import { readFileSync } from "node:fs";
import {
  buildSeoCorpus,
  listIndustrySourceFiles,
} from "./lib/seo-corpus.mjs";

const BANNED_PHRASES = [
  "in today's digital landscape",
  "unlock the power",
  "take your business to the next level",
  "game changer",
  "cutting edge",
  "tailored solutions",
  "bespoke solutions",
  "holistic approach",
  "we pride ourselves",
  "look no further",
  "delve",
  "leverage synergies",
  "in the fast-paced world of",
  "navigate the complexities",
  "at the end of the day",
  "robust solution",
  "seamless integration",
];

// Common US spellings that should be British on this site.
const US_SPELLINGS = [
  /\boptimiz(e|es|ed|ing|ation)\b/gi,
  /\bpersonaliz(e|es|ed|ing|ation)\b/gi,
  /\bbehavior(s|al)?\b/gi,
  /\bfavor(ite|s|able|ably)?\b/gi,
  /\bhonor(s|ed|ing|able)?\b/gi,
  /\bcolor(s|ed|ing)?\b/gi,
  /\bcenter(ed|ing|s)?\b/gi,
  /\bdefense(s)?\b/gi,
  /\blicense(s|d)\b/gi,
  /\bmodeling\b/gi,
  /\bmodeled\b/gi,
  /\btraveling\b/gi,
  /\btraveled\b/gi,
  /\bprograms?\b/gi,
  /\banalyze[sd]?\b/gi,
  /\banalyzing\b/gi,
];

const errors = [];

function addError(message) {
  errors.push(message);
}

function scanText(label, text) {
  if (text.includes("\u2014") || text.includes("—")) {
    addError(`${label}: contains an em dash`);
  }

  const lower = text.toLowerCase();
  for (const phrase of BANNED_PHRASES) {
    if (lower.includes(phrase)) {
      addError(`${label}: banned phrase "${phrase}"`);
    }
  }

  for (const pattern of US_SPELLINGS) {
    pattern.lastIndex = 0;
    const match = pattern.exec(text);
    if (match) {
      // Allow "program" when it is clearly software (rare in our copy).
      if (/^programs?$/i.test(match[0]) && /computer|software|tv/i.test(text)) {
        continue;
      }
      addError(`${label}: US spelling "${match[0]}" (use British English)`);
    }
  }
}

function lintHeadings(page) {
  const h1s = page.headings.filter((heading) => heading.level === 1);
  if (h1s.length === 0) {
    addError(`${page.route}: missing H1`);
  }
  if (h1s.length > 1) {
    addError(`${page.route}: more than one H1 (${h1s.length})`);
  }

  let previous = 0;
  for (const heading of page.headings) {
    if (previous > 0 && heading.level > previous + 1) {
      addError(
        `${page.route}: skipped heading level from H${previous} to H${heading.level} ("${heading.text}")`,
      );
    }
    previous = heading.level;
  }
}

function lintLinks(page) {
  // Index pages are navigational listings and sit outside the 4-12 body budget.
  if (page.kind === "index") return;

  const uniqueHrefs = [...new Set(page.links.map((link) => link.href))];
  if (uniqueHrefs.length < 4) {
    addError(
      `${page.route}: under four internal links (${uniqueHrefs.length})`,
    );
  }
  if (uniqueHrefs.length > 12) {
    addError(
      `${page.route}: over twelve internal links (${uniqueHrefs.length})`,
    );
  }

  const anchorMap = new Map();
  for (const link of page.links) {
    const key = link.anchor.trim().toLowerCase();
    const existing = anchorMap.get(key);
    if (existing && existing !== link.href) {
      addError(
        `${page.route}: duplicate anchor "${link.anchor}" points at ${existing} and ${link.href}`,
      );
    } else {
      anchorMap.set(key, link.href);
    }
  }
}

// Source files: catch banned phrases / em dashes / US spelling before render.
for (const filePath of listIndustrySourceFiles()) {
  const text = readFileSync(filePath, "utf8");
  scanText(filePath.replace(`${process.cwd()}\\`, "").replace(`${process.cwd()}/`, ""), text);
}

const cataloguePath = "content/services.ts";
scanText(cataloguePath, readFileSync(cataloguePath, "utf8"));

const pages = buildSeoCorpus();
for (const page of pages) {
  scanText(page.route, `${page.h1.join(" ")}\n${page.bodyText}`);
  lintHeadings(page);
  lintLinks(page);
}

// Sitewide: same anchor text must not point at different URLs.
const globalAnchors = new Map();
for (const page of pages) {
  for (const link of page.links) {
    const key = link.anchor.trim().toLowerCase();
    const existing = globalAnchors.get(key);
    if (existing && existing !== link.href) {
      addError(
        `sitewide: anchor "${link.anchor}" points at ${existing} and ${link.href}`,
      );
    } else {
      globalAnchors.set(key, link.href);
    }
  }
}

if (errors.length > 0) {
  console.error(`[content-lint] FAILED with ${errors.length} issue(s):\n`);
  for (const error of errors) {
    console.error(`  - ${error}`);
  }
  process.exit(1);
}

console.log(`[content-lint] OK: ${pages.length} SEO routes checked.`);
