# Named clients contract

**Only companies in this file may appear as Bright Brand clients on industry / money pages.**  
Outreach prospects in `docs/seo/data/` are never clients. Naming one is a misrepresentation.

Alex owns final `signedOff` / `canName` / `approvedForWebUse`. Values below mirror what is already published on the live site and in `lib/case-study-details.ts` / `lib/site-data.ts`. If a number is not listed here, agents must not invent it: write a gap to `docs/seo/gaps.md` and use anonymised composite or method-only proof (SEGMENTS section 5).

---

## Anywhere.com (luxury / tailor-made travel)

```yaml
slug: anywhere
canName: true
signedOff: true          # numbers already on live case study — Alex to reconfirm before new pages ship
segment: luxury-tailor-made-travel
parent: travel-tour-operators
displayName: Anywhere.com
```

### Attributable testimonial (Review schema — only if approvedForWebUse)

```yaml
approvedForWebUse: true  # already on live Services quotes — Alex to reconfirm
author: Anthony Landis
role: President, Director
exactWording: >
  The Bright Brand aren't a typical marketing agency. They understand the
  mechanics of travel and optimise towards higher lifetime value and a more
  premium client base through sharp age-demographic targeting and audience
  building, all aligned to our commercial data and implemented by their team.
  We've seen quicker bookings and a stronger bottom line as a result.
```

Use the exact wording. Do not paraphrase. This is the only place Review schema is permitted on the new industry programme until Alex adds another.

### Numbers agents may cite (from published case study)

| Metric | Value | Notes |
|--------|-------|-------|
| Wasted ad spend recovered | $300K | Google Ads, previous agency hole |
| Meta CPA | -50% | |
| Revenue | $6M → $10M | +67% YoY (case study body). Testimonial is qualitative (LTV, premium base, quicker bookings); do not invent a percentage from the quote |
| Founder / data contact | Anthony Landis | Metabase-heavy attribution; match him at data level |

### Pipeline shape (for copy, not invented proof)

Phone-led, high consideration, enquiry → qualification → itinerary → quote → deposit → balance. Revenue on departure. Optimise on booked revenue and margin, never gross booking value ROAS. Seasonal budget vs departure windows (Costa Rica green vs dry is an owned worked example).

### Hard rule

Alex's in-house background: **"senior in-house experience across a major multi-brand tour operator group"** only. Individual brands never named, hinted, or used in alt/schema/metadata.

---

## Canopy (procurement / supplier management)

```yaml
slug: canopy
canName: true
signedOff: true
segment: procurement-supplier-management
displayName: Canopy
```

### Attributable quote (homepage / services treatment — stay consistent)

```yaml
approvedForWebUse: true
author: Doug McLean
role: Founder & Director
exactWording: >
  Bright Brand send us enterprise clients every week — qualified, engaged, and
  ready for a proper conversation. It is one of the steadiest pipelines we have,
  and they feel like part of the team.
```

Note: the Canopy quote currently contains an em dash in source data. New industry page body copy must still obey SPEC 6.2 (zero em dashes). Prefer citing case-study numbers in body; if you surface the quote, either use a SPEC-compliant presentation path that already exists on the site, or ask Alex via gaps.md before pasting into a new content file.

### Numbers agents may cite

| Metric | Value |
|--------|-------|
| Pipeline in first 30 days | £85,000 potential ARR |
| Annualised pipeline | ~£850,000 |
| LinkedIn connection acceptance | 50% |
| Outreach volume (case study) | ~50,000 messages monthly |
| New campaigns monthly (case study) | 25 |
| New leads monthly (case study hero) | 60+ |

### Buyer / shape

Head of Procurement, Procurement Director, Head of Supply Chain, Category Manager. UK / US / EU. Long multi-stakeholder cycles (6–12 months). Outbound + LinkedIn + paid search as one system. Offline conversion upload on closed revenue. HubSpot CRM. Crossover: fit-out contractors sell *into* the same procurement teams Canopy sells *to*.

Stay consistent with live homepage / case study tone. Do not contradict published claims.

---

## Manor Interior Solutions — DO NOT NAME on industry hubs

```yaml
slug: manor-interior-solutions
canName: false
signedOff: false
segment: commercial-fit-out
displayName: Manor Interior Solutions
```

Alex instruction (24 Jul 2026): do **not** mention Manor on industry / money pages. Use FormX on construction/residential where relevant, anonymised fit-out composites for tender CRM proof, and Canopy for the procurement crossover story.

Tender stage names remain fine as method language (not tied to Manor):

1. Relationship / early positioning  
2. Framework / PQQ inclusion  
3. ITT received  
4. Bid submitted  
5. Negotiation  
6. Awarded / lost

---

## Releaf (medical cannabis clinics)

```yaml
slug: releaf
canName: true
signedOff: true          # naming/logo already on site
segment: medical-cannabis-clinics
parent: medical-healthcare
displayName: Releaf
```

### Numbers

**No published numeric case study in the repo.** Do not invent results.

```yaml
resultsSignedOff: false
anonymisePatientDataAlways: true
```

Even if `canName` is true, every reference that touches patient-level data is anonymised at the data level. Identifiable patient data never goes to ad platforms. Hashed first-party only. Special category health data under UK GDPR.

### Compliance

Every policy claim must be verified against the **live** policy document at write time, and the specific policy must be named in the copy. Training-data claims are forbidden. Unverified claims → `docs/seo/gaps.md` as `VERIFY: [claim] against [policy]` plus a marked placeholder in the content file.

Scope: Google Ads healthcare and medicines policy + certification; prescription vs recreational language; UK ASA/CAP; MHRA; common policy violations (sourced only).

Do not build cosmetic surgery or dental implant pages in Wave 2.

---

## Britton and Time (legal) — Wave 3

```yaml
slug: britton-and-time
canName: true
signedOff: true
segment: legal-solicitors
displayName: Britton & Time
```

### Quote

```yaml
approvedForWebUse: true
author: Daniel Beech
role: Founder & Operations Manager
exactWording: >
  Bright Brand tied our ad spend to revenue properly for the first time. They
  manage our paid advertising across Google, Microsoft and LinkedIn with real
  discipline, and we finally know what every pound is doing.
```

### Numbers agents may cite

| Metric | Value | Notes |
|--------|-------|-------|
| Leads per month | 150+ | Published |
| Practice areas | ~10 | |
| Channels | Google, Microsoft, LinkedIn | |
| CPA / revenue | NDA — do not invent or estimate | |

---

## FormX (modular / residential construction adjacent)

```yaml
slug: formx
canName: true
signedOff: true          # Alex requested FormX on industry hubs (24 Jul 2026)
segment: residential-home-builders
parent: construction
displayName: FormX
```

### Numbers agents may cite (published case study framing)

| Metric | Value | Notes |
|--------|-------|-------|
| Pre-seed raise referenced | $4.5M | Context only |
| CPA on booked sales meetings | -83% | From published quote (Shay Hasson) |
| Engagement stage | Early / attribution audit | Do not invent closed revenue |

### Quote

```yaml
approvedForWebUse: true
author: Shay Hasson
role: Co-Founder FormX. Serial Entrepreneur
exactWording: >
  We've been with Bright Brand for a while now, and it still feels like they're
  in the business with us. They rebuilt the funnel, tightened the targeting,
  and cut our cost per booked sales meeting by 83%. Same budget, far more of
  the right conversations.
```

---

## Freedom Insurance (commercial insurance)

```yaml
slug: freedom-insurance
canName: true
signedOff: true          # Alex requested Freedom on commercial insurance hubs (27 Jul 2026)
segment: commercial-insurance
displayName: Freedom Insurance
```

### Quote (homepage / services treatment — stay consistent)

```yaml
approvedForWebUse: true
author: Roland Gilliam
role: Managing Director, Freedom Insurance
exactWording: >
  Since the team started really getting hands-on with our account, we've seen a
  genuine shift. It's the difference between someone managing your account and
  someone actually caring about it - that closer attention has meant we're now
  seeing a solid return on our ad spend, something we hadn't consistently had
  before.
```

### Numbers

**No published numeric case study table in the repo.** Do not invent GWP, CPA or bind-rate figures. Cite the published testimonial and describe method. Implementation metrics (campaign families, CRM fields, conversion actions) are fine as method proof.

---

## Explicitly NOT nameable as clients on industry pages

Logos or case studies may exist elsewhere on the site, but they are **out of scope** for industry hubs unless Alex adds them here:

- Enexus Energy, Menzies Law, Heat from the Spire, and any outreach-list company.

If an agent needs a second proof block and no named client fits: anonymised shape or method-only (SEGMENTS §5).

---

## Sign-off checklist for Alex before publish

- [ ] Confirm `canName` / `signedOff` / `approvedForWebUse` above still correct  
- [ ] Manor: supply any real numbers + tender stage names from live HubSpot if available  
- [ ] Releaf: supply any publishable non-patient metrics; confirm NHS patient-records handling language  
- [ ] Anywhere: confirm Anthony Landis wording for Review schema (note SPEC historically said "Tony"; live site uses Anthony Landis)  
- [ ] Drop sitemap + Search Console export paths into `CONFIG.md` for Wave 3 redirects  
