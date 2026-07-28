# The Bright Brand: industry and service page build spec

**Version 1.0. Commit this to the repo at `docs/seo/SPEC.md`. Every sub-agent reads this file in full before writing a single line.**

---

## 0. Read this before anything else

The obvious way to build this programme is to fan out twelve agents and generate a hundred pages in an afternoon. That is the exact pattern that got Locate Solicitors de-indexed: undifferentiated generated content plus structural change without redirects. Google's site reputation and scaled content abuse policies target precisely this shape of build.

Three rules follow from that, and they override everything else in this document:

1. **No page ships without unique proof.** A named client, a real number, a real platform detail (an actual HubSpot property, an actual Google Ads policy name, an actual field mapping). If an agent cannot source proof for a page, that page is not built. It goes back to Alex as a gap.
2. **The matrix is capped, not filled.** Twelve industries multiplied by nine services is 108 pages. We are not building 108 pages. We build roughly 40, chosen by where proof exists, and expand only when there is more proof.
3. **Every existing URL gets a 301.** No exceptions, checked in CI.

---

## 1. Objective

Rank for `[service] for [industry]` intent, where the searcher is a marketing lead, commercial director or founder in a specific vertical looking for an agency that already understands their pipeline shape. Secondary objective: give sales a page to send for every vertical conversation, which means these pages are as much sales collateral as they are ranking assets.

Primary KPI: qualified enquiries from organic, tracked in Odal. Not sessions.

---

## 2. Information architecture

Base path structure. Maximum depth three. No nesting of sub-verticals inside parent verticals in the URL, because that pushes service spokes to depth four and creates a combinatorial mess.

```
/services/                                   index
/services/[service]/                         service pillar
/industries/                                 index
/industries/[industry]/                      industry pillar
/industries/[industry]/[service]/            money page (industry x service)
/case-studies/[client]/                      proof asset
```

### Services

| Slug | Page title angle |
|---|---|
| `google-ads-management` | Paid search, including restricted verticals |
| `linkedin-b2b-advertising` | Paid social for long cycle B2B |
| `crm-implementation` | HubSpot, Salesforce, Pipedrive builds and migrations |
| `conversion-tracking-attribution` | Server side, offline conversions, Odal |
| `call-tracking` | Dynamic number insertion, call to CRM to ad platform loop |
| `landing-pages-cro` | Build, test, iterate |
| `marketing-automation` | Lifecycle, nurture, n8n workflows |
| `outbound-lead-generation` | Cold email infrastructure at scale |
| `reporting-dashboards` | Blended reporting, board level |

### Industries

Parent pillars marked P, sub-verticals marked S. Sub-verticals sit at the same URL depth and are grouped by the `parent` field in the data model, which drives nav and breadcrumbs only.

| Slug | Type | Parent | Anchor client |
|---|---|---|---|
| `procurement-supplier-management` | P | | Canopy |
| `travel-tour-operators` | P | | Anywhere |
| `construction` | P | | |
| `commercial-fit-out` | S | construction | Manor Interior Solutions |
| `residential-home-builders` | S | construction | |
| `civils-infrastructure` | S | construction | |
| `medical-healthcare` | P | | |
| `medical-cannabis-clinics` | S | medical-healthcare | Releaf |
| `cosmetic-surgery` | S | medical-healthcare | |
| `dental-implants` | S | medical-healthcare | |
| `legal-solicitors` | P | | Britton and Time |
| `recruitment` | P | | |
| `wealth-management` | P | | |
| `commercial-insurance` | P | | |
| `b2b-saas` | P | | |
| `ecommerce` | P | | |
| `energy` | P | | |

---

## 3. Page inventory and phasing

### Phase 1: pilot (one vertical, full depth)

**Construction.** Chosen as the pilot because it is the hardest structural case: a parent pillar plus three sub-verticals plus service spokes. If the template survives construction it survives everything. Also the vertical where the Canopy crossover story is strongest.

- `/industries/construction/`
- `/industries/commercial-fit-out/`
- `/industries/commercial-fit-out/crm-implementation/`
- `/industries/commercial-fit-out/conversion-tracking-attribution/`
- `/industries/residential-home-builders/`
- `/industries/residential-home-builders/google-ads-management/`
- `/industries/residential-home-builders/call-tracking/`
- `/services/crm-implementation/`

Eight pages. Nothing else gets built until Alex has signed these off and the template is frozen.

### Phase 2: fan out

Travel (Anywhere data ready), procurement and supplier management (Canopy), medical and healthcare plus medical cannabis clinics (Releaf). Three to five service spokes each, chosen by proof.

### Phase 3: remainder

Legal, recruitment, wealth management, commercial insurance, B2B SaaS, ecommerce, energy. Pillar first, spokes only where a client exists.

---

## 4. Page templates

### 4.1 Industry pillar (1,800 to 2,400 words)

Required sections in order. Section headings are indicative, agents write the actual copy.

1. **H1**: `[Industry] marketing agency` or `Marketing for [industry]`
2. **Opening 150 words**: the specific commercial problem in this vertical, written as though to someone who lives in it. No agency throat-clearing. Must be unique across the whole site.
3. **How the pipeline actually works in this vertical**: cycle length, decision makers, where enquiries come from, where they leak. Diagram if useful.
4. **What we do**: cards linking down to every service spoke built for this industry, plus the generic service pillar where no spoke exists.
5. **Proof**: named client, the situation, what was built, the numbers. Minimum one, ideally two.
6. **The infrastructure we build**: CRM, tracking, attribution, call tracking, reporting. This is the differentiator, not the ad management.
7. **Related verticals**: two or three sideways links with a sentence explaining the crossover, not a bare list.
8. **FAQs**: minimum six, unique to this vertical, sourced from real sales calls where possible.
9. **CTA**

### 4.2 Industry x service money page (1,200 to 1,800 words)

1. **H1**: `[Service] for [industry] companies`
2. **Opening 150 words**: why this service is different in this vertical specifically. If the agent cannot answer that in a way that would not apply to any other vertical, the page should not exist. Flag it and stop.
3. **The problem**: concrete, with the failure mode named.
4. **How we do it**: step through the actual build. Real tool names, real field names, real settings. This is where the page earns its ranking.
5. **Proof**: client scenario plus numbers.
6. **What you get**: deliverables, timeline, what we need from you.
7. **FAQs**: minimum five, unique.
8. **CTA**

Breadcrumb: Home > Industries > [Industry] > [Service].

### 4.3 Service pillar (1,600 to 2,200 words)

Same shape as the industry pillar but organised around the capability, with a section linking out to every industry variant that exists.

---

## 5. Internal linking model

The link mesh is **generated from the content registry, never hand written**. Hand written links rot the moment a slug changes.

Rules, enforced by `lib/seo/links.ts`:

- Every money page links up to its industry pillar and across to its service pillar. Both in the breadcrumb and once in body copy with a descriptive anchor.
- Every industry pillar links down to all of its money pages, and to its parent or child verticals.
- Every service pillar links to every industry variant of that service.
- Minimum four and maximum twelve contextual in-body internal links per page.
- Anchors are descriptive and varied. Never "click here", never the bare URL, never the same anchor text pointing at two different URLs anywhere on the site.
- First link to a URL on a page is the one that carries the anchor. Do not link the same URL three times in one page.
- Orphan check in CI: every page in the registry must be reachable from the homepage in three clicks or fewer.

Cross-vertical links worth building deliberately, because they reflect how the business actually works:

- `commercial-fit-out` ↔ `procurement-supplier-management`. Fit-out contractors are selling *into* procurement teams. Canopy sells *to* procurement teams. We sit on both sides of that table and that is a genuinely unusual thing to be able to say.
- `construction` ↔ `commercial-insurance`
- `medical-healthcare` ↔ `legal-solicitors` (both compliance-constrained paid media)
- `travel-tour-operators` ↔ `ecommerce` (booking value vs order value, margin-based ROAS)

---

## 6. Content rules

### 6.1 Anti-duplication gates

- Maximum 15% five-gram overlap between any two pages on the site, measured by the dedup script in section 10. CI fails above that.
- Boilerplate blocks (CTA, footer, team bio) are excluded from the measurement and must be identical, not spun.
- Every page carries: at least one named client scenario, at least three specific numbers, at least one platform-specific detail that could only be written by someone who has done the work.
- No two pages share an intro paragraph, an H1, a meta description or an FAQ.

### 6.2 Voice

British English. No em dashes anywhere. Direct, specific, unhedged. Written as though Alex or Ollie is on a call explaining it.

Banned phrases, checked in CI:

```
in today's digital landscape, unlock the power, take your business to the next level,
game changer, cutting edge, tailored solutions, bespoke solutions, holistic approach,
we pride ourselves, look no further, delve, leverage synergies, in the fast-paced world of,
navigate the complexities, at the end of the day, robust solution, seamless integration
```

### 6.3 Client naming

- Named with permission: Canopy, Anywhere, Manor Interior Solutions, Releaf, Britton and Time. **Confirm sign-off with Alex per client before any page goes live.**
- Alex's prior in-house tour operator experience is referenced as "senior in-house experience across a major multi-brand tour operator group". The individual brands are **not** named. This is a hard rule.
- Any client without sign-off is anonymised by shape, not by pretence: "a commercial fit-out contractor turning over £14m" is fine, an invented logo is not.

### 6.4 Regulated verticals

Medical, legal and financial pages: every compliance claim is verified against the live policy document at time of writing, and the agent cites the policy name in the copy. Do not write from memory. If the agent cannot verify, it writes the section as a question for Alex rather than guessing.

---

## 7. Technical SEO requirements

Every page, no exceptions:

- Next.js App Router. `generateStaticParams` plus `generateMetadata`. Statically rendered.
- Self-referencing canonical. Absolute URLs.
- Unique title (50 to 60 chars) and meta description (140 to 158 chars).
- One H1. Logical H2/H3 nesting, no skipped levels.
- JSON-LD:
  - `Organization` and `WebSite` in the root layout only
  - `Service` plus `BreadcrumbList` on every industry, service and money page
  - `FAQPage` where FAQs exist
  - `Review` or `AggregateRating` **only** where a genuine attributable testimonial exists (Tony at Anywhere qualifies). Never fabricate.
- Visible breadcrumbs matching the schema.
- `opengraph-image.tsx` per route segment, generated from page title and vertical.
- `sitemap.ts` generated from the content registry, not hand maintained. `lastModified` from git.
- Performance budget: LCP under 2.0s on mobile, CLS under 0.05, INP under 200ms. Content pages ship zero client-side JS beyond nav and analytics.
- Images: `next/image`, AVIF and WebP, explicit dimensions, descriptive alt text that is not keyword stuffed.
- **Redirects.** Before any route changes, an agent produces `redirects.json` mapping every existing live URL to its new destination, verified against the current sitemap and Search Console export. CI fails if any URL in the old sitemap returns anything other than 200 or 301.

---

## 8. Data model

Single source of truth. Everything else derives from it.

```ts
// content/types.ts

export type ServiceSlug =
  | 'google-ads-management'
  | 'linkedin-b2b-advertising'
  | 'crm-implementation'
  | 'conversion-tracking-attribution'
  | 'call-tracking'
  | 'landing-pages-cro'
  | 'marketing-automation'
  | 'outbound-lead-generation'
  | 'reporting-dashboards';

export interface Proof {
  client: string;
  anonymised: boolean;
  situation: string;
  built: string;
  results: { metric: string; before?: string; after: string; window: string }[];
  signedOff: boolean;      // page cannot build if false and anonymised is false
}

export interface Faq { q: string; a: string }

export interface Section { heading: string; body: string; }

export interface MoneyPage {
  service: ServiceSlug;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;            // must be unique sitewide
  sections: Section[];
  proof: Proof[];           // min 1
  faqs: Faq[];              // min 5
  relatedIndustries: string[];
}

export interface Industry {
  slug: string;
  name: string;
  parent?: string;          // for sub-verticals, drives nav only, not URL
  type: 'pillar' | 'sub';
  metaTitle: string;
  metaDescription: string;
  intro: string;
  pipelineShape: Section[];
  infrastructure: Section[];
  proof: Proof[];
  faqs: Faq[];              // min 6
  relatedIndustries: { slug: string; why: string }[];
  moneyPages: MoneyPage[];
}
```

One file per industry at `content/industries/<slug>.ts`, default-exporting an `Industry`. The registry globs that directory. **Nothing else is a shared write**, which is what makes parallel agents safe.

---

## 9. Vertical data packs

What each agent gets. Anything not listed here is a gap and must be requested from Alex, not invented.

### 9.1 Procurement and supplier management (Canopy)

- Canopy is a supplier management platform. Target buyer is Head of Procurement, Procurement Director, Head of Supply Chain, Category Manager.
- Geography: UK, US, EU. Coverage achieved across effectively every commercial sector.
- Pipeline shape: long multi-stakeholder cycles, small addressable search demand, high contract value. Demand capture alone will not fill a pipeline, so outbound plus LinkedIn plus paid search work as one system.
- What we actually do: CRM build so that stage definitions survive a six to twelve month cycle, offline conversion upload so Google learns from closed revenue rather than form fills, blended reporting so the board sees pipeline not clicks, cold email infrastructure at scale.
- Crossover angle: we run acquisition for the companies selling *into* procurement teams and for the platform selling *to* them. Use this. It is the single most defensible thing on the site.
- Reference the existing homepage treatment of Canopy for tone.

### 9.2 Travel and tour operators (Anywhere)

- Client: Anywhere. Testimonial from Tony, available and attributable, so `Review` schema applies here.
- Geography: UK, US and EU markets. Destination range from Costa Rica through to Italy.
- Prior in-house experience across a major multi-brand tour operator group, covering long haul, short haul and specialist destination brands. **Brands not named.**
- Pipeline shape: high consideration, long enquiry-to-booking windows, heavily phone-led conversion, strong seasonality (Costa Rica green season versus dry season is a worked example we own).
- What we actually do: call tracking because the booking happens on the phone, offline conversion upload on **booked revenue and margin**, not enquiries, ROAS measured on margin not gross booking value, seasonal budget shaping against departure windows rather than calendar months, CRM connected to the reservation system.
- Alex is sending the travel data pack. Do not build travel money pages until it lands.

### 9.3 Construction

**Commercial fit-out (Manor Interior Solutions)**

- Pipeline shape: tender-led. The commercially valuable work happens *before* the tender is published, in positioning with the client, the QS and the procurement team, and in getting onto PQQ and framework lists.
- What we actually do: HubSpot or Salesforce build with deal stages mapped to the actual tender lifecycle rather than a generic sales funnel, so forecasting means something. Contact and company hierarchies for main contractor, client, QS and consultant relationships. LinkedIn targeting by role against target accounts. Attribution across an eighteen month cycle.
- Crossover with Canopy: same table, opposite chairs. Link it explicitly.

**Residential and home builders**

- Pipeline shape: local search, plot reservations, showhome visits, finance enquiries, phone and form mixed.
- What we actually do: location-level campaign structure by development, call tracking with dynamic number insertion per development, CRM for reservation pipeline, landing pages per development with CRO testing.

**Civils and infrastructure**

- Thin on proof today. Pillar only until we have a client.

### 9.4 Medical and healthcare

**Medical cannabis clinics (Releaf)**

- The compliance navigation is the product. Google Ads healthcare and medicines policy, restricted drug terms, certification requirements, the line between prescription and recreational language, UK ASA and CAP rules, MHRA constraints.
- Patient data: never push identifiable patient data to ad platforms, hashed first-party data only, special category health data under UK GDPR handled accordingly, consent mode and server-side tagging as the mechanism.
- A "policy violations clinics commonly hit" section is a strong asset and should be built as its own page. **Every item verified against the live Google policy documentation at time of writing, with the policy named.** Do not write this from memory.

**Cosmetic surgery and dental implants**

- Before and after imagery rules, claim substantiation, high-value long-consideration enquiries, consultation booking as the conversion event, consultation-to-procedure rate as the real metric.

### 9.5 Everything else

Legal (Britton and Time), recruitment, wealth management, commercial insurance, B2B SaaS, ecommerce, energy. Pillar pages in phase 3. Money pages only where a client exists.

---

## 10. QA gates: definition of done

A page is done when all of the following pass. The QA agent runs these and nothing merges without a green result.

- [ ] Unique H1, title, meta description, intro paragraph
- [ ] Under 15% five-gram overlap with every other page
- [ ] Minimum one proof block with `signedOff: true` or `anonymised: true`
- [ ] Minimum three specific numbers
- [ ] Minimum five FAQs, unique sitewide
- [ ] Four to twelve contextual internal links, descriptive anchors, no duplicate anchor pointing to different URLs
- [ ] Reachable from homepage in three clicks
- [ ] Valid JSON-LD (`Service`, `BreadcrumbList`, `FAQPage` where applicable), passes Rich Results Test
- [ ] Zero banned phrases
- [ ] Zero em dashes
- [ ] British English spelling throughout
- [ ] Lighthouse mobile: performance 90+, LCP under 2.0s, CLS under 0.05
- [ ] Every old URL in the migration set returns 301 to a 200

Dedup script, `scripts/dedup-check.mjs`: extract body text per route, strip boilerplate blocks by data attribute, build five-gram sets, compute pairwise Jaccard, fail above 0.15, print the worst ten pairs.

---

## 11. File ownership map

Parallel agents collide when they write shared files. They do not collide here because ownership is exclusive.

| Owner | Writes |
|---|---|
| Foundation agent | `app/`, `components/`, `lib/seo/`, `content/types.ts`, `scripts/`, `docs/` |
| Vertical agent `<slug>` | `content/industries/<slug>.ts`, `public/images/<slug>/**` only |
| Interlink agent | `lib/seo/links.ts`, `app/sitemap.ts`, `app/robots.ts`, `redirects.json` |
| QA agent | Writes nothing. Reports only. |

No vertical agent touches `app/`, `components/`, the registry index, nav config or the sitemap. Nav, sitemap and the link mesh are all derived from `content/industries/*.ts` at build time via glob, so adding a vertical requires zero shared edits.

---

## 12. Open inputs needed from Alex

1. Production domain and current live sitemap export, plus a Search Console URL inventory for the redirect map.
2. Path to the existing design tokens and component library from the Framer to Next migration.
3. Construction data pack and travel data pack (flagged as incoming).
4. Written sign-off per named client: Canopy, Anywhere, Manor Interior Solutions, Releaf, Britton and Time.
5. Confirmation of the Anywhere testimonial wording and Tony's surname and role for `Review` schema.
