// Build-time importer for the 17 blog article bodies.
//
// The CSV slugs DO NOT match the live indexed slugs. Live slugs win. Mapping
// is done via an EXPLICIT hardcoded map (lib/posts/csv-slug-map.json), never
// by fuzzy title matching. The script fails loudly (non-zero exit) on any
// integrity problem so a broken import can never reach the build output.
//
// Usage:
//   node scripts/import-post-bodies.mjs --inspect            # list CSV rows
//   node scripts/import-post-bodies.mjs [--csv "<path>"]     # generate bodies
//
// Default CSV path is the client's Airtable export. Override with --csv.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import sanitizeHtml from "sanitize-html";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "..");

const DEFAULT_CSV_PATH =
  "D:/Locate Solicitors/Website Images/Optimised/Articles/Constructive Dismissal/new svg/Table 1-Grid view.csv";

const args = process.argv.slice(2);
const inspect = args.includes("--inspect");
const csvArgIndex = args.indexOf("--csv");
const csvPath = csvArgIndex !== -1 ? args[csvArgIndex + 1] : DEFAULT_CSV_PATH;

function die(message) {
  console.error(`\n[import-post-bodies] FAILED: ${message}\n`);
  process.exit(1);
}

// RFC 4180 CSV parser: handles quoted fields with embedded commas, newlines
// and escaped double quotes ("").
function parseCsv(text) {
  const rows = [];
  let field = "";
  let row = [];
  let inQuotes = false;
  let i = 0;

  while (i < text.length) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i += 1;
        continue;
      }
      field += c;
      i += 1;
      continue;
    }
    if (c === '"') {
      inQuotes = true;
      i += 1;
      continue;
    }
    if (c === ",") {
      row.push(field);
      field = "";
      i += 1;
      continue;
    }
    if (c === "\r") {
      i += 1;
      continue;
    }
    if (c === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
      i += 1;
      continue;
    }
    field += c;
    i += 1;
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

// Demote any <h1> in the body to <h2> so the template's post-title H1 stays
// the only H1 on the page. Runs before sanitisation.
function demoteH1(html) {
  return html
    .replace(/<h1(\s[^>]*)?>/gi, "<h2>")
    .replace(/<\/h1>/gi, "</h2>");
}

function sanitiseBody(html) {
  return sanitizeHtml(html, {
    allowedTags: [
      "h2", "h3", "h4", "h5", "h6",
      "p", "a", "ul", "ol", "li", "blockquote",
      "strong", "em", "b", "i", "u", "s",
      "br", "hr", "span", "figure", "figcaption",
      "table", "thead", "tbody", "tr", "th", "td",
      "img",
    ],
    allowedAttributes: {
      a: ["href", "title", "target", "rel"],
      img: ["src", "alt", "title", "width", "height"],
    },
    allowedSchemes: ["https", "http", "mailto"],
    transformTags: {
      a: (tagName, attribs) => ({
        tagName: "a",
        attribs: {
          ...attribs,
          rel: "noopener noreferrer",
        },
      }),
    },
    // Strip empty paragraphs left by the export.
    exclusiveFilter: (frame) =>
      frame.tag === "p" && !frame.text.trim() && !frame.mediaChildren.length,
  }).trim();
}

if (!existsSync(csvPath)) {
  die(`CSV not found at: ${csvPath}\nPass --csv "<path>" to override.`);
}

const raw = readFileSync(csvPath, "utf8");
const rows = parseCsv(raw);
if (rows.length < 2) {
  die("CSV has no data rows.");
}

const header = rows[0].map((h) => h.trim());
const idx = (name) => {
  const i = header.indexOf(name);
  if (i === -1) die(`CSV missing expected column: ${name}`);
  return i;
};
const iTitle = idx("Title");
const iSlug = idx("Slug");
const iContent = idx("Content 1");

const dataRows = rows
  .slice(1)
  .filter((r) => r.length > 1 && (r[iTitle]?.trim() || r[iSlug]?.trim()));

if (inspect) {
  console.log(`\nParsed ${dataRows.length} data rows from CSV:\n`);
  dataRows.forEach((r, n) => {
    const title = (r[iTitle] ?? "").trim();
    const slug = (r[iSlug] ?? "").trim();
    const bodyLen = (r[iContent] ?? "").length;
    console.log(`${String(n + 1).padStart(2, "0")}  slug="${slug}"`);
    console.log(`    title="${title}"`);
    console.log(`    bodyChars=${bodyLen}`);
  });
  process.exit(0);
}

// ---- Generation mode: requires the explicit slug map ----
const mapPath = resolve(REPO_ROOT, "lib/posts/csv-slug-map.json");
if (!existsSync(mapPath)) {
  die(`Slug map not found at lib/posts/csv-slug-map.json. Build it first.`);
}
const csvToLive = JSON.parse(readFileSync(mapPath, "utf8"));

// The 17 live slugs are the contract (from lib/posts). Read them from the
// data module so the two never drift.
const postsModulePath = resolve(REPO_ROOT, "lib/posts/index.ts");
const postsSource = readFileSync(postsModulePath, "utf8");
const liveSlugs = [...postsSource.matchAll(/slug:\s*"([^"]+)"/g)].map(
  (m) => m[1],
);
if (liveSlugs.length !== 17) {
  die(`Expected 17 live slugs in lib/posts/index.ts, found ${liveSlugs.length}.`);
}

const errors = [];
const bodiesByLive = new Map();
const candidateCounts = new Map(liveSlugs.map((s) => [s, 0]));

for (const r of dataRows) {
  const csvSlug = (r[iSlug] ?? "").trim();
  const live = csvToLive[csvSlug];
  if (!live) {
    errors.push(`Unmatched CSV row: csv slug "${csvSlug}" is not in the map.`);
    continue;
  }
  if (!candidateCounts.has(live)) {
    errors.push(`Map points csv "${csvSlug}" to unknown live slug "${live}".`);
    continue;
  }
  candidateCounts.set(live, candidateCounts.get(live) + 1);
  const rawBody = (r[iContent] ?? "").trim();
  if (!rawBody) {
    errors.push(`CSV row "${csvSlug}" has an empty Content 1 body.`);
    continue;
  }
  const clean = sanitiseBody(demoteH1(rawBody));
  if (!clean) {
    errors.push(`Body for "${csvSlug}" sanitised to empty.`);
    continue;
  }
  bodiesByLive.set(live, clean);
}

for (const [live, count] of candidateCounts) {
  if (count === 0) errors.push(`Live slug "${live}" received zero bodies.`);
  if (count > 1) errors.push(`Live slug "${live}" received ${count} candidate bodies.`);
}

if (bodiesByLive.size !== 17) {
  errors.push(`Final body count is ${bodiesByLive.size}, expected exactly 17.`);
}

if (errors.length) {
  die(`Integrity checks failed:\n  - ${errors.join("\n  - ")}`);
}

const ordered = liveSlugs
  .map((slug) => [slug, bodiesByLive.get(slug)])
  .sort((a, b) => a[0].localeCompare(b[0]));

const out = `// GENERATED FILE - do not edit by hand.
// Source: scripts/import-post-bodies.mjs (from the client CSV export).
// Bodies are sanitised HTML with any <h1> demoted to <h2> so the post
// template's title stays the only H1 on the page.

export const POST_BODIES: Record<string, string> = {
${ordered
  .map(([slug, body]) => `  ${JSON.stringify(slug)}: ${JSON.stringify(body)},`)
  .join("\n")}
};
`;

const outPath = resolve(REPO_ROOT, "lib/posts/bodies.generated.ts");
writeFileSync(outPath, out, "utf8");
console.log(
  `\n[import-post-bodies] OK: wrote ${bodiesByLive.size} bodies to lib/posts/bodies.generated.ts\n`,
);
