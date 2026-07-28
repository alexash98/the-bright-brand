# SEO foundation status

Wave 1 foundation is **already on branch `feature/seo-foundation`**. Overnight agents should **not** rebuild shared infrastructure. They supply content files and images, then Wave 3 wires mesh/sitemap/redirects/QA.

Read with: `docs/seo/SPEC.md`, `docs/seo/CONFIG.md`, `docs/seo/data/SEGMENTS.md`, `docs/seo/CLIENTS.md`.

---

## What exists today

### Data model

- `content/types.ts` — `ServiceSlug`, `Proof`, `Faq`, `Section`, `MoneyPage`, `Industry` (SPEC §8)
- `content/validate.ts` — zod validation; fail loud on malformed industry files
- `content/registry.ts` — globs `content/industries/*.ts`, exports:
  - `getAllIndustries()`
  - `getIndustry(slug)` / `getIndustryForRoute(slug)`
  - `getMoneyPage(industry, service)`
  - `getIndustriesForService(service)`
  - `getChildren(parentSlug)`
  - `getAllMoneyPageParams()`
  - example fixtures via `_*.ts` (`isExample`)
- `content/services.ts` — thin service catalogue for `/services/[service]` pillars
- `content/industries/_example.ts` — dummy vertical for template review; excluded from production listings/sitemap

### Routes (`app/(marketing)/`)

| Route | File |
|-------|------|
| `/services/` | `services/page.tsx` |
| `/services/[service]/` | `services/[service]/page.tsx` |
| `/industries/` | `industries/page.tsx` |
| `/industries/[industry]/` | `industries/[industry]/page.tsx` |
| `/industries/[industry]/[service]/` | `industries/[industry]/[service]/page.tsx` |

Each has `generateStaticParams`, `generateMetadata`, and segment `opengraph-image.tsx`. Canonicals use `SITE_URL` from `lib/seo/site.ts` (`https://www.thebrightbrand.com`).

### Components (`components/site/seo/`)

| Component | Role | Key props |
|-----------|------|-----------|
| `IndustryPillar` | Industry pillar template | `industry`, `serviceLinks`, `relatedLinks`, `childLinks?` |
| `MoneyPage` | Industry × service | `industry`, `moneyPage`, `service`, `relatedLinks` |
| `ServicePillar` | Service capability pillar | (see component file) |
| `Breadcrumbs` | Visible crumbs matching schema | `items: { name, href }[]` |
| `ProofBlock` | Client proof | proof fields from `Proof` |
| `FaqAccordion` | FAQs | faq list |
| `RelatedLinks` | Sideways / spoke links | link objects |
| `Cta` | End CTA (boilerplate; excluded from dedup) | none / shared |
| `MarketingPageShell` | Shared page chrome | `hero`, `afterContent`, children |
| `PipelineDiagram` | Stage strip on industry pillars | `stages`, optional eyebrow/title/caption |

Wired into `IndustryPillar` from hero / insight / cycle chart bars when present.

### Schema (`lib/seo/schema.ts`)

Builders for Organization, WebSite, Service, BreadcrumbList, FAQPage, Review. Review must throw if testimonial lacks attributable name and role. Organization + WebSite belong in root layout only.

### Helpers

- `lib/seo/industry-links.ts` — builds service / related / child / money related links from registry
- `lib/seo/metadata.ts`, `lib/seo/og.tsx`, `lib/seo/pages.ts`, `lib/seo/post-metadata.ts`, `lib/seo/site.ts`

### Scripts

| Script | Status |
|--------|--------|
| `scripts/content-lint.mjs` | Present → `npm run seo:lint` |
| `scripts/dedup-check.mjs` | Present → `npm run seo:dedup` |
| `scripts/seo-check.mjs` | Present → `npm run seo:check` (lint + dedup) |
| `scripts/proof-check.mjs` | Present → `npm run seo:proof`; wired into `npm run seo:check` |

CI runs `npm run seo:check` (PowerShell-safe sequential spawn, no `&&`).

### Sitemap / robots

`app/sitemap.ts` and `app/robots.ts` exist. Wave 3 agent regenerates sitemap from registry (exclude `_example`), lastModified from git, and completes link mesh / orphan / redirect work per SPEC §5, §7, §10.

---

## How a vertical agent adds an industry (worked example)

1. Read `SPEC.md`, `SEGMENTS.md`, `CLIENTS.md`, this file, and a reference industry file if one exists (e.g. `commercial-fit-out.ts` after Wave 2A).
2. Create **only**:
   - `content/industries/<slug>.ts` — default-export an `Industry` matching the filename slug
   - `public/images/<slug>/**` — images with real alt text, via `next/image` on templates already
3. Populate `moneyPages` only for services in the Wave inventory for that slug.
4. Touch **nothing** else: not `app/`, not `components/`, not `content/registry.ts`, not nav, not sitemap.
5. Run `npm run seo:check` and fix failures.
6. Report URLs built, URLs dropped + why, and `docs/seo/gaps.md` additions.

Registry glob picks up the new file automatically. Routes appear via `generateStaticParams`. Link mesh is derived later by Wave 3.

---

## Known gaps before overnight content

1. Real industry content now lives under `content/industries/` (see LOOP.md).
2. `docs/seo/gaps.md` is live; agents append VERIFY items there.
3. Foundation Wave 0 gaps for proof-check and PipelineDiagram are closed.
5. `existingSitemapPath` / `searchConsoleExportPath` unset in `CONFIG.md` — Wave 3 redirects blocked until Alex supplies exports.
6. Manor / Releaf have naming sign-off but no publishable numeric results in repo.
