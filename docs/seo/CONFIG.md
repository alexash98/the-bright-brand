# SEO build config

Single place for paths and constants that overnight agents must not invent.

## Site

| Key | Value |
|-----|-------|
| `productionDomain` | `https://www.thebrightbrand.com` |
| Canonical host | `www` (apex must 301 to www) |
| Site name | The Bright Brand |
| Title suffix (marketing) | ` \| The Bright Brand` |
| Title suffix (blog posts) | ` \| Bright Brand™` |
| Locale / spelling | British English |
| Primary KPI | Qualified enquiries from organic, tracked in Odal |

Source of truth in code: `lib/seo/site.ts` (`SITE_URL`, `SITE_NAME`, title suffixes).

## Design system (do not invent a second one)

| Key | Path |
|-----|------|
| Component library (site) | `components/site/` |
| SEO page templates | `components/site/seo/` |
| UI primitives | `components/ui/` (if present) |
| Brand tokens / Tailwind | `app/globals.css`, Tailwind theme in project config |
| Existing marketing chrome | `components/site/Header.tsx`, `Footer.tsx`, `MarketingHero.tsx` |

Extend `components/site/seo/*`. Match existing tokens, type scale, spacing and colour exactly. If you cannot find a token, stop and write the blocker to `docs/seo/gaps.md`.

## Content registry

| Key | Path |
|-----|------|
| Types | `content/types.ts` |
| Validation | `content/validate.ts` |
| Registry | `content/registry.ts` |
| Service catalogue | `content/services.ts` |
| Industry files | `content/industries/<slug>.ts` |
| Example fixture (excluded from sitemap) | `content/industries/_example.ts` |

## Routes already wired

```
/services/
/services/[service]/
/industries/
/industries/[industry]/
/industries/[industry]/[service]/
```

Under `app/(marketing)/`. Statically rendered via `generateStaticParams` + `generateMetadata`.

## Scripts and CI

| Script | npm | Notes |
|--------|-----|-------|
| Content lint | `npm run seo:lint` | Banned phrases, em dashes, US spellings, H1, links |
| Dedup | `npm run seo:dedup` | Five-gram Jaccard, fail above 0.15 |
| Full gate | `npm run seo:check` | Runs lint + dedup (Windows-safe, no `&&`) |
| Proof check | **MISSING** | Spec requires `scripts/proof-check.mjs`; wire into `seo:check` if still absent |

CI: `.github/workflows/ci.yml` runs `npm run seo:check`.

## Redirect / inventory inputs (Alex must supply)

| Key | Status |
|-----|--------|
| `existingSitemapPath` | **NOT SET** — do not invent. Write blocker to `docs/seo/gaps.md` |
| `searchConsoleExportPath` | **NOT SET** — do not invent. Write blocker to `docs/seo/gaps.md` |

When Alex drops exports, put them under `docs/seo/data/` (gitignored if they contain PII) and update the paths here before the Wave 3 redirect agent runs.

## Outreach data (private)

| Key | Path | Rule |
|-----|------|------|
| Segment taxonomy | `docs/seo/data/SEGMENTS.md` | Public contract; no company names from lists |
| Raw outreach CSVs / exports | `docs/seo/data/` (local only) | Never import into site build; never name companies from these files |

## Named clients contract

`docs/seo/CLIENTS.md` — only companies listed there with `canName: true` may appear as clients on public pages.

## Overnight prompt pack

`docs/seo/OVERNIGHT-AGENTS.md` — copy-paste prompts for Cloud Agents.
