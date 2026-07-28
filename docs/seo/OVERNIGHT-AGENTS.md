# Overnight agent prompt pack — Bright Brand SEO industry programme

**This file is the handoff.** Copy each agent prompt into a separate Cursor Cloud Agent (or Background Agent) on branch `feature/seo-foundation`. Do not rely on a single chat staying open while you sleep: **chat sessions stop when you stop**. Cloud Agents / Automations are what run unattended.

**This programme is SEO industry + service pages. It is not a Shopify integration.** Shopify appears only as an existing partner logo on the site. Ignore Shopify unless a separate brief says otherwise.

---

## 0. Reality check: what you must do before you sleep

### Will this chat keep going overnight?

**No.** Closing the laptop, ending the session, or waiting for a reply does not create a loop. Nothing in this repo "auto-continues" SEO work while you are asleep unless you launch **Cloud Agents** (or a scheduled Automation) with the prompts below.

### What to do (checklist)

1. Commit and push the contract docs on `feature/seo-foundation` (at minimum: `SPEC.md`, `CONFIG.md`, `CLIENTS.md`, `data/SEGMENTS.md`, `FOUNDATION.md`, this file). Cloud Agents only see what is on the remote branch they check out.
2. Confirm Cloud Agents / background agents are enabled for your Cursor account ([Cloud Agents dashboard](https://cursor.com/dashboard?tab=cloud-agents)).
3. Optionally fill Alex blockers in §1 below (Manor numbers, sitemap export, medical policy verification). Agents will write gaps if missing; pages still build with anonymised/method proof.
4. Launch agents in this order:
   - **Optional Wave 0** (foundation gaps) — 1 agent, ~30–45 min — only if you want `proof-check.mjs` + `PipelineDiagram` before content.
   - **Wave 2A–2D in parallel** — 4 agents — after Wave 1 foundation is already merged on the branch (it is).
   - **Wave 3** — 1 agent — only after 2A–2D PRs are merged (or instruct it to wait / run on a branch that already contains all content files).
5. Each Cloud Agent: same repo, branch `feature/seo-foundation` (or one branch per agent that you merge in the morning). Prefer **one branch per parallel agent** to avoid collisions, then merge in the morning: `seo/wave-2a-construction`, `seo/wave-2b-travel`, `seo/wave-2c-procurement`, `seo/wave-2d-medical`.
6. In the morning: review PRs, read `docs/seo/gaps.md` and `docs/seo/qa-report.md`, then human-edit copy.

### How to see that it is running

- Cursor Cloud Agents dashboard shows running / completed agents.
- GitHub shows new commits / PRs on the agent branches.
- There is no "loop" indicator inside this chat. If you only leave this chat open with `/loop`, that only works while the local agent session stays alive and the machine stays awake — **not a reliable overnight strategy**.

### Parallel safety rule (from SPEC §11)

| Owner | May write |
|-------|-----------|
| Foundation / Wave 0 | `app/`, `components/`, `lib/seo/`, `content/types.ts`, `scripts/`, `docs/` |
| Vertical agent | **only** its listed `content/industries/*.ts` and `public/images/<area>/**` |
| Wave 3 interlink | `lib/seo/links.ts`, `app/sitemap.ts`, `app/robots.ts`, `redirects.json`, QA report |
| QA portion of Wave 3 | Writes report only; does not "fix" content |

Vertical agents that touch shared files will collide. The prompts below forbid that.

---

## 1. Alex blockers (do these if you can; otherwise agents gap them)

| Item | Why |
|------|-----|
| Push contract docs to remote | Agents cannot read uncommitted local-only files |
| Manor: real numbers + HubSpot tender stage names | Without them, fit-out money pages use method/anonymised proof only |
| Releaf: publishable non-patient metrics | Same |
| Confirm `CLIENTS.md` sign-off flags | Especially Anywhere Review schema wording (Anthony Landis) |
| Drop live sitemap + Search Console URL export; set paths in `CONFIG.md` | Wave 3 redirects cannot invent these |
| Medical: do not expect unattended full compliance copy | Wave 2D leaves VERIFY placeholders |

---

## 2. Contract files every agent must read first

In order:

1. `docs/seo/SPEC.md`
2. `docs/seo/CONFIG.md`
3. `docs/seo/data/SEGMENTS.md`
4. `docs/seo/CLIENTS.md`
5. `docs/seo/FOUNDATION.md`

These override the agent's own judgement on structure, voice, proof, and technical requirements.

### Red lines (all agents)

- Outreach lists ≠ clients. Never name, logo, or imply any company from `docs/seo/data/` outreach sources as a client.
- Only `CLIENTS.md` companies with `canName: true`.
- Never invent a number. Gap it.
- British English. No em dashes. No banned phrases (SPEC §6.2).
- No page without unique proof (named + signedOff, or anonymised, or method-only per SEGMENTS §5).
- Answer-first intros. First 150 words of a money page must fail the "swap vertical name" test.
- Server-rendered content only. Templates already exist; agents supply data.
- Windows / PowerShell: no `&&` chaining in scripts or shell instructions.

---

## 3. Optional Wave 0 — foundation follow-ups (1 agent)

Use only if you want missing SPEC items closed before content. Foundation routes/templates already exist.

### Prompt — Wave 0

```
You are the Bright Brand SEO foundation follow-up agent.

Read in full before writing anything:
  docs/seo/SPEC.md
  docs/seo/CONFIG.md
  docs/seo/FOUNDATION.md

Branch: feature/seo-foundation (or a short-lived chore/seo-foundation-gaps branch).

Wave 1 foundation already shipped. You are NOT writing marketing copy. You are NOT creating industry content files.

Deliver only what FOUNDATION.md lists as missing:

1. scripts/proof-check.mjs
   - Fail any page whose proof blocks are all signedOff:false AND anonymised:false.
   - Fail any page with fewer than three numeric claims.
   - Wire into scripts/seo-check.mjs and keep Windows-safe sequential spawn (no &&).
   - Ensure CI still runs npm run seo:check.

2. PipelineDiagram component under components/site/seo/
   - Match existing tokens in components/site/seo/* and MarketingPageShell.
   - Wire optionally into IndustryPillar if a simple stages prop can be passed without breaking existing pages.
   - If you cannot match the design system cleanly, stop and write the blocker to docs/seo/gaps.md instead of inventing styling.

3. Update docs/seo/FOUNDATION.md when done.

4. Run npm run seo:check and fix failures you introduced.

Do not touch content/industries/*.ts except _example if needed for a fixture.
Report: files changed, gates green/red, remaining gaps.
```

---

## 4. Wave 2 — content agents (launch in parallel)

Each owns exclusive paths. Fire 2A, 2B, 2C, 2D together once foundation is on the branch.

Shared opening (prepend to each Wave 2 prompt):

```
You are a Bright Brand SEO vertical content agent.

Read these in full before doing anything. They are the contract and override your judgement:
  docs/seo/SPEC.md
  docs/seo/CONFIG.md
  docs/seo/data/SEGMENTS.md
  docs/seo/CLIENTS.md
  docs/seo/FOUNDATION.md

Templates, routes, registry and QA scripts already exist. You supply content + images only.

HARD RULES:
- Touch ONLY the paths listed in your ownership block. Not app/, not components/, not registry, not nav, not sitemap, not other industries' files.
- Only companies in CLIENTS.md with canName:true may be named as clients.
- Never name any company from outreach lists under docs/seo/data/.
- Never invent a number. If CLIENTS.md does not have it, append a specific question to docs/seo/gaps.md and use anonymised composite or method description (SEGMENTS section 5).
- British English. Zero em dashes. Zero banned phrases from SPEC 6.2.
- Every money page: first 150 words must explain why THIS service is different in THIS segment. Swap test: replace the vertical name with "recruitment"; if it still reads fine, delete and rewrite or gap the page.
- Match depth of content/industries/_example.ts structure, and once 2A lands, match commercial-fit-out.ts depth without copying sentences (five-gram overlap >15% fails CI).
- Run npm run seo:check and fix everything before reporting.
- Report: URLs built, URLs dropped and why, and contents of docs/seo/gaps.md you added.
```

---

### Prompt — Wave 2A Construction (pilot)

```
[PASTE SHARED OPENING]

You own ONLY these paths:
  content/industries/construction.ts
  content/industries/commercial-fit-out.ts
  content/industries/residential-home-builders.ts
  public/images/construction/**

Build the Wave 1 page set in SEGMENTS section 4 / SPEC phase 1:

Pillars:
  /industries/construction/
  /industries/commercial-fit-out/
  /industries/residential-home-builders/

Money pages:
  /industries/commercial-fit-out/crm-implementation/
  /industries/commercial-fit-out/conversion-tracking-attribution/
  /industries/commercial-fit-out/linkedin-b2b-advertising/
  /industries/residential-home-builders/google-ads-management/
  /industries/residential-home-builders/call-tracking/
  /industries/residential-home-builders/landing-pages-cro/

(Service pillar /services/crm-implementation already exists via content/services.ts — do not rewrite shared service catalogue unless a factual error blocks you; prefer industry money pages.)

This is the pilot. Every other vertical will be copied from it, so the bar is:

- Commercial fit-out is tender-led. Decisive work happens BEFORE the tender is published: occupier and agent relationships, PQQ and framework inclusion, positioning with QS and project manager. Name real HubSpot and Salesforce objects, properties, pipeline configurations and stage names. Use tender stage names from CLIENTS.md. Specificity is the entire point.
- Residential is a different animal: per-development campaign structure, dynamic number insertion per development, reservation pipeline, part exchange and finance enquiries, showhome appointments. Do not let the two pages blur.
- Build the crossover link to procurement-supplier-management explicitly, with a sentence: we run acquisition for the contractors selling into procurement teams and for the software selling to those same teams. (Related industry slug may not exist yet — still add relatedIndustries entry with why; Wave 3 / later agents resolve mesh.)
- Only Manor Interior Solutions may be named, and only if canName is true in CLIENTS.md.
- Residential has no named client. Use route 2 or 3 from SEGMENTS section 5.

FAQs: pillars min 6, money pages min 5, unique sitewide.
Proof: min one block per page; min three numeric claims per page (method/anonymised ok if CLIENTS lacks numbers).
```

---

### Prompt — Wave 2B Travel

```
[PASTE SHARED OPENING]

You own ONLY these paths:
  content/industries/travel-tour-operators.ts
  content/industries/luxury-tailor-made-travel.ts
  content/industries/safari-expedition-operators.ts
  content/industries/cruise-operators.ts
  public/images/travel/**

Reference shape: content/industries/commercial-fit-out.ts if present, else _example.ts. Match depth and specificity. Match shape, never sentences. Five-gram overlap above 15% fails CI.

Source: SEGMENTS section 1, CLIENTS.md for Anywhere, SPEC 9.2.

Build:
  /industries/travel-tour-operators/  (pillar; Tier C segments get 2–3 sentences + link to nearest service, no dedicated pages)
  /industries/luxury-tailor-made-travel/
    money: call-tracking, conversion-tracking-attribution, google-ads-management
  /industries/safari-expedition-operators/
    money: conversion-tracking-attribution, reporting-dashboards
  /industries/cruise-operators/
    money: google-ads-management, call-tracking

Segment-specific rules:
- Conversion is phone-led across all four. Call tracking is the lead service story, not Google Ads. Write it that way.
- Optimise on booked revenue and margin, never on enquiries and never on gross booking value. Explain why GBV ROAS misleads a tailor-made operator: margin varies by itinerary, so the highest-revenue campaign is routinely the least profitable.
- Revenue recognises on departure, not booking. Deposit and balance schedules make conversion timing messy. Say how you handle it.
- Seasonality against departure windows, not calendar months. Costa Rica green vs dry is a worked example Bright Brand owns.
- Safari/expedition: 9–12 month lead times → attribution window 12 months or data is meaningless.
- Cruise: cabin inventory pressure, deposit schedules, mixed direct-checkout and phone models.

ABSOLUTE RULE on prior experience: "senior in-house experience across a major multi-brand tour operator group" only. Individual brands NEVER named in copy, metadata, alt text, or schema.

Anywhere testimonial: only place Review schema is permitted, and only if approvedForWebUse is true in CLIENTS.md. Use exact wording. Do not paraphrase.
Safari and cruise: no named client. Use SEGMENTS §5 route 2 or 3.
Parent field: luxury/safari/cruise parent travel-tour-operators where appropriate.
```

---

### Prompt — Wave 2C Procurement

```
[PASTE SHARED OPENING]

You own ONLY these paths:
  content/industries/procurement-supplier-management.ts
  public/images/procurement/**

Source: SPEC section 9.1, SEGMENTS section 3, CLIENTS.md for Canopy.
Read the existing Canopy treatment on the live homepage / lib/case-study-details.ts (slug canopy) and lib/site-data.ts quotes. Stay consistent. Do not contradict published claims.

Build:
  /industries/procurement-supplier-management/
  money pages:
    crm-implementation
    outbound-lead-generation
    linkedin-b2b-advertising
    conversion-tracking-attribution

Segment-specific rules:
- Buyer: Head of Procurement, Procurement Director, Head of Supply Chain, Category Manager. UK, US, EU, across commercial sectors.
- Search demand alone will not fill this pipeline. Honest story: outbound + LinkedIn + paid search as one measured system. Weight word count toward CRM and attribution pages, not ad management.
- Six to twelve month multi-stakeholder cycles. Offline conversion upload on closed revenue is the mechanism that makes paid media work. Explain at implementation level.
- Stage definitions must survive a year without drifting. Say how.
- Crossover links: commercial-fit-out and inbound travel DMCs / travel-tour-operators with the both-sides-of-the-procurement-table sentence. This must not be buried.
```

---

### Prompt — Wave 2D Medical (NOT fully unattended)

```
[PASTE SHARED OPENING]

CONSTRAINT THAT OVERRIDES EVERYTHING ELSE ON THIS VERTICAL:
Every compliance claim must be verified against the live policy documentation before you write it, and you must name the specific policy in the copy. You may not write any policy claim from training data. Not one.
Where you cannot verify against a live source, do not write the claim. Write:
  VERIFY: [claim] against [policy]
into docs/seo/gaps.md and leave a marked placeholder in the content file for Alex.

You own ONLY these paths:
  content/industries/medical-healthcare.ts
  content/industries/medical-cannabis-clinics.ts
  public/images/medical/**

Source: SPEC section 9.4, CLIENTS.md for Releaf.

Build:
  /industries/medical-healthcare/  (pillar)
  /industries/medical-cannabis-clinics/
    money: google-ads-management, conversion-tracking-attribution
  Prefer a "policy violations clinics commonly hit" section on the cannabis money page or pillar — every item named and sourced. Unsourced list = worse than no section.

Patient data section (mandatory):
- Identifiable patient data never goes to an ad platform
- Hashed first-party data only
- Special category health data under UK GDPR
- Consent mode and server-side tagging as the mechanism
- Releaf holds NHS patient records: anonymise at data level regardless of canName

Do NOT build cosmetic surgery or dental implant pages. Queue them in gaps.md.

Fetch live policy pages (Google Ads healthcare/medicines, ASA/CAP, MHRA) using network tools. Cite policy names in copy. If fetch fails, placeholder + VERIFY gap.
```

---

## 5. Wave 3 — interlink, technical, QA (1 agent, after Wave 2 merges)

Do **not** launch in parallel with Wave 2 if they share `app/sitemap.ts` / link files. Run after 2A–2D content is on the branch.

### Prompt — Wave 3

```
You are the Bright Brand SEO interlink + QA agent.

Read SPEC sections 5, 7 and 10, plus docs/seo/CONFIG.md, FOUNDATION.md, CLIENTS.md.

You own:
  lib/seo/links.ts          (create or extend — derived mesh from registry)
  app/sitemap.ts
  app/robots.ts
  redirects.json            (if redirect inputs exist)
  docs/seo/qa-report.md
  docs/seo/gaps.md          (append blockers only)
  scripts/proof-check.mjs   (if still missing — add and wire into seo:check)

1. Generate the full internal link mesh from the registry per SPEC section 5.
   Derived, never hard coded. Enforce four-to-twelve in-body links and anchor uniqueness at build time where practical.

2. Generate app/sitemap.ts from the registry, lastModified from git. Exclude _example.

3. Redirects. Read existingSitemapPath and searchConsoleExportPath from CONFIG.
   Map every existing URL to its destination. One hop maximum, no chains, no loops.
   Write a test that fails CI if any old URL does not resolve 301 to a 200.
   If either path is missing from CONFIG, do NOT guess. Write the blocker to gaps.md and skip redirects.

4. Orphan check: every registry page reachable from the homepage in three clicks or fewer. Fail the build otherwise.

5. Validate all JSON-LD. Assert Organization and WebSite appear exactly once sitewide.

Then run the full QA pass and write docs/seo/qa-report.md:

- Every gate in SPEC section 10, per page, pass or fail, with offending line or value for each failure.
- The ten worst five-gram overlap pairs with URLs.
- A scan for any company name on any page that is not in CLIENTS.md with canName true. Any hit is build-blocking. List them at the top of the report.
- Then read every page as a sceptical reader and answer, per page: could this have been written by someone who has never done this work? Flag every section where the answer is yes, quote it, and name the specific missing detail. Be harsh.

Write nothing to content/industries/*.ts. You audit; you do not "improve" copy by rewriting vertical files.
Run npm run seo:check. Report merge readiness.
```

---

## 6. Expected URL inventory after Wave 2 (approx.)

### Construction

- `/industries/construction/`
- `/industries/commercial-fit-out/`
- `/industries/commercial-fit-out/crm-implementation/`
- `/industries/commercial-fit-out/conversion-tracking-attribution/`
- `/industries/commercial-fit-out/linkedin-b2b-advertising/`
- `/industries/residential-home-builders/`
- `/industries/residential-home-builders/google-ads-management/`
- `/industries/residential-home-builders/call-tracking/`
- `/industries/residential-home-builders/landing-pages-cro/`

### Travel

- `/industries/travel-tour-operators/`
- `/industries/luxury-tailor-made-travel/` (+ 3 money pages)
- `/industries/safari-expedition-operators/` (+ 2 money pages)
- `/industries/cruise-operators/` (+ 2 money pages)

### Procurement

- `/industries/procurement-supplier-management/` (+ 4 money pages)

### Medical

- `/industries/medical-healthcare/`
- `/industries/medical-cannabis-clinics/` (+ 2 money pages; compliance placeholders allowed)

Plus existing `/services/*` pillars from catalogue.

Wave 3 pages (main-contractors, ski, legal, etc.) wait for proof or explicit Alex approval.

---

## 7. Morning review checklist for Alex

- [ ] All four Wave 2 agents completed / PRs open  
- [ ] `npm run seo:check` green on merged branch  
- [ ] Read `docs/seo/gaps.md` — answer VERIFY / number requests  
- [ ] Read `docs/seo/qa-report.md` — fix "generic" flags yourself or re-prompt one agent per file  
- [ ] Spot-check swap test on every money page intro  
- [ ] Confirm no outreach-list company names  
- [ ] Medical: resolve every VERIFY placeholder before publish  
- [ ] Redirect map still blocked? Drop sitemap + GSC export into CONFIG  

---

## 8. Segment context cheat sheet (for agents — already in SEGMENTS.md)

**Travel (~60% UK / 25% EU / 15% US):** luxury tailor-made (Anywhere shape), safari/expedition, cruise, ski, golf, villa/rental, homeworking agent networks, adventure/small-group, inbound DMCs; Tier C reference-only on pillar.

**Construction (almost entirely UK):** commercial fit-out (Manor), main contractors, housebuilders, architects, interior design studios, property developers, care homes, M&E; Tier C specialists reference-only.

**Differentiator:** Bright Brand markets to both sides of the procurement table (Canopy ↔ fit-out / main / M&E ↔ inbound travel DMCs).

---

## 9. Out of scope tonight

- Shopify store / theme / checkout work  
- Wave 3 vertical content (ski, care homes, legal money pages, etc.) unless proof arrives  
- Cosmetic surgery / dental implant pages  
- Filling the full 12×9 matrix  
- Naming outreach prospects  
- Rewriting the homepage  

---

## 10. One-liner you can paste into Cloud Agent UI

> Implement Bright Brand Wave 2 SEO content per `docs/seo/OVERNIGHT-AGENTS.md` section **[2A|2B|2C|2D|3]**. Read SPEC, CONFIG, SEGMENTS, CLIENTS, FOUNDATION first. Exclusive file ownership as documented. Run `npm run seo:check`. Leave gaps in `docs/seo/gaps.md`. Do not invent clients or numbers.
