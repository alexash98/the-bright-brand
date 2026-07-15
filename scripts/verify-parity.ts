/*
 * verify-parity.ts — the go/no-go gate for the Framer -> Next migration.
 *
 * Usage:
 *   npx tsx scripts/verify-parity.ts <targetBaseUrl> [liveBaseUrl]
 *
 *   <targetBaseUrl>  the new site (Vercel preview URL, or http://localhost:3000
 *                    against `next start`).
 *   [liveBaseUrl]    defaults to https://www.thebrightbrand.com
 *
 * It pulls the LIVE Framer sitemap, then for every URL fetches BOTH live and
 * target and diffs: HTTP status | <title> | meta description | canonical | the
 * single <h1>. It also asserts the two legacy 301 redirects. Exits non-zero on
 * any failure.
 *
 * /404 and /marketing-audit are treated as EXPECTED TO DIFFER (both retired):
 * they are listed but never fail the run.
 */

const DEFAULT_LIVE = "https://www.thebrightbrand.com";
const UA =
  "Mozilla/5.0 (compatible; BrightBrandParityBot/1.0; +https://www.thebrightbrand.com)";

const EXPECTED_DIFFER = new Set<string>(["/404", "/marketing-audit"]);

const targetBase = (process.argv[2] ?? "").replace(/\/$/, "");
const liveBase = (process.argv[3] ?? DEFAULT_LIVE).replace(/\/$/, "");

if (!targetBase) {
  console.error(
    "Usage: npx tsx scripts/verify-parity.ts <targetBaseUrl> [liveBaseUrl]",
  );
  process.exit(2);
}

interface PageFields {
  status: number;
  title: string | null;
  description: string | null;
  canonical: string | null;
  h1Count: number;
  h1: string | null;
  error?: string;
}

function decodeEntities(input: string): string {
  return input
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0*39;/g, "'")
    .replace(/&#x27;/gi, "'")
    .replace(/&apos;/g, "'")
    .replace(/&pound;/g, "\u00a3")
    .replace(/&#0*163;/g, "\u00a3")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x2122;/gi, "\u2122")
    .replace(/&#8482;/g, "\u2122")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
}

function norm(value: string | null): string {
  if (value == null) return "";
  return decodeEntities(value).replace(/\s+/g, " ").trim();
}

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, "");
}

function extractTitle(html: string): string | null {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? norm(stripTags(m[1] ?? "")) : null;
}

function extractAttr(tag: string, attr: string): string | null {
  // Match on the actual opening delimiter so a literal apostrophe inside a
  // double-quoted value (e.g. content="Meta's ...") is not truncated.
  const dq = tag.match(new RegExp(`${attr}\\s*=\\s*"([^"]*)"`, "i"));
  if (dq) return dq[1] ?? null;
  const sq = tag.match(new RegExp(`${attr}\\s*=\\s*'([^']*)'`, "i"));
  return sq ? (sq[1] ?? null) : null;
}

function extractDescription(html: string): string | null {
  const tags = html.match(/<meta\b[^>]*>/gi) ?? [];
  for (const tag of tags) {
    const name = extractAttr(tag, "name");
    if (name && name.toLowerCase() === "description") {
      return norm(extractAttr(tag, "content"));
    }
  }
  return null;
}

function extractCanonical(html: string): string | null {
  const tags = html.match(/<link\b[^>]*>/gi) ?? [];
  for (const tag of tags) {
    const rel = extractAttr(tag, "rel");
    if (rel && rel.toLowerCase() === "canonical") {
      return normCanonical(extractAttr(tag, "href"));
    }
  }
  return null;
}

function normCanonical(href: string | null): string | null {
  if (!href) return null;
  try {
    const u = new URL(href);
    const path = u.pathname.replace(/\/$/, "") || "/";
    return `${u.protocol}//${u.host.toLowerCase()}${path}`;
  } catch {
    return href.replace(/\/$/, "");
  }
}

function extractH1(html: string): { count: number; first: string | null } {
  const matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  return {
    count: matches.length,
    first: matches.length ? norm(stripTags(matches[0]?.[1] ?? "")) : null,
  };
}

async function fetchPage(url: string): Promise<PageFields> {
  try {
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    const html = await res.text();
    const h1 = extractH1(html);
    return {
      status: res.status,
      title: extractTitle(html),
      description: extractDescription(html),
      canonical: extractCanonical(html),
      h1Count: h1.count,
      h1: h1.first,
    };
  } catch (err) {
    return {
      status: 0,
      title: null,
      description: null,
      canonical: null,
      h1Count: 0,
      h1: null,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

async function getLiveSitemapPaths(): Promise<string[]> {
  const res = await fetch(`${liveBase}/sitemap.xml`, {
    headers: { "User-Agent": UA },
  });
  if (!res.ok) {
    throw new Error(`Could not fetch live sitemap (${res.status}).`);
  }
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>([\s\S]*?)<\/loc>/gi)].map((m) =>
    (m[1] ?? "").trim(),
  );
  const paths = new Set<string>();
  for (const loc of locs) {
    try {
      const p = new URL(loc).pathname.replace(/\/$/, "") || "/";
      paths.add(p);
    } catch {
      /* ignore malformed loc */
    }
  }
  return [...paths].sort();
}

interface Row {
  path: string;
  ok: boolean;
  expectedDiffer: boolean;
  reasons: string[];
  live: PageFields;
  target: PageFields;
}

function comparePath(
  path: string,
  live: PageFields,
  target: PageFields,
): Row {
  const reasons: string[] = [];
  const expectedDiffer = EXPECTED_DIFFER.has(path);

  if (target.error) reasons.push(`target fetch error: ${target.error}`);
  if (target.status !== 200) reasons.push(`target status ${target.status} (expected 200)`);
  if (norm(live.title) !== norm(target.title)) reasons.push("title differs");
  if (norm(live.description) !== norm(target.description)) reasons.push("description differs");
  if ((live.canonical ?? "") !== (target.canonical ?? "")) reasons.push("canonical differs");
  if (target.h1Count !== 1) reasons.push(`target has ${target.h1Count} h1 (expected 1)`);

  const ok = expectedDiffer ? true : reasons.length === 0;
  return { path, ok, expectedDiffer, reasons, live, target };
}

async function assertRedirect(pathname: string): Promise<{ ok: boolean; detail: string }> {
  try {
    const res = await fetch(`${targetBase}${pathname}`, {
      method: "GET",
      redirect: "manual",
      headers: { "User-Agent": UA },
    });
    const location = res.headers.get("location") ?? "";
    let locPath = location;
    try {
      locPath = new URL(location, targetBase).pathname.replace(/\/$/, "") || "/";
    } catch {
      /* keep raw */
    }
    const ok = res.status === 301 && locPath === "/case-studies";
    return { ok, detail: `${res.status} -> ${locPath || "(none)"}` };
  } catch (err) {
    return { ok: false, detail: err instanceof Error ? err.message : String(err) };
  }
}

function pad(value: string, width: number): string {
  return value.length >= width ? value : value + " ".repeat(width - value.length);
}

async function main(): Promise<void> {
  console.log(`\nLIVE:   ${liveBase}`);
  console.log(`TARGET: ${targetBase}\n`);

  const paths = await getLiveSitemapPaths();
  console.log(`Pulled ${paths.length} URLs from the live sitemap.\n`);

  const rows: Row[] = [];
  for (const path of paths) {
    const [live, target] = await Promise.all([
      fetchPage(`${liveBase}${path}`),
      fetchPage(`${targetBase}${path}`),
    ]);
    rows.push(comparePath(path, live, target));
  }

  // Results table.
  console.log(pad("RESULT", 14) + pad("STATUS", 14) + "PATH");
  console.log("-".repeat(90));
  for (const row of rows) {
    const status = `${row.live.status}/${row.target.status}`;
    const label = row.expectedDiffer
      ? "DIFF (exp)"
      : row.ok
        ? "PASS"
        : "FAIL";
    console.log(pad(label, 14) + pad(status, 14) + row.path);
    if (!row.ok && !row.expectedDiffer) {
      for (const reason of row.reasons) console.log(`               - ${reason}`);
      console.log(`                 live  title: ${row.live.title ?? "(none)"}`);
      console.log(`                 tgt   title: ${row.target.title ?? "(none)"}`);
    }
  }

  console.log("\nRedirect assertions (target):");
  const redirectPaths = ["/portfolio", "/client-case-studies"];
  const redirectResults = [];
  for (const p of redirectPaths) {
    const r = await assertRedirect(p);
    redirectResults.push(r.ok);
    console.log(`  ${r.ok ? "PASS" : "FAIL"}  ${p}  ${r.detail}  (expect 301 -> /case-studies)`);
  }

  const contentFails = rows.filter((r) => !r.ok && !r.expectedDiffer);
  const redirectFails = redirectResults.filter((ok) => !ok).length;
  const expectedDiffers = rows.filter((r) => r.expectedDiffer);

  console.log("\nSUMMARY");
  console.log(`  URLs checked:        ${rows.length}`);
  console.log(`  Content failures:    ${contentFails.length}`);
  console.log(`  Redirect failures:   ${redirectFails}`);
  console.log(
    `  Expected-differ:     ${expectedDiffers.length} (${expectedDiffers.map((r) => r.path).join(", ") || "none"})`,
  );

  if (contentFails.length) {
    console.log(`\n  Failing URLs: ${contentFails.map((r) => r.path).join(", ")}`);
  }

  const totalFails = contentFails.length + redirectFails;
  console.log(`\n${totalFails === 0 ? "GO ✅" : `NO-GO ❌ (${totalFails} failure(s))`}\n`);
  process.exit(totalFails === 0 ? 0 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(2);
});
