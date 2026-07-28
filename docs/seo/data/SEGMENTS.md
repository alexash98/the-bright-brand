# Bright Brand: segment taxonomy and page inventory

Commit to `docs/seo/data/SEGMENTS.md`. Read alongside `docs/seo/SPEC.md`.

Derived from the travel and construction outreach databases. Segments were inferred from company domains and are Alex's to correct. Counts are approximate.

---

## 0. RED LINE: what these lists are and are not

The source data is an outbound prospect database. It is the list of companies Bright Brand emails. It is **not** a client list, a case study list, or a partner list.

**No company appearing in the outreach database may be named, logo'd, referenced or implied as a Bright Brand client on any page, ever.** The only companies that may appear as clients are the five in `docs/seo/CLIENTS.md`, and only where `signedOff: true` / `canName: true`.

The lists also contain named individuals' work email addresses, which is personal data under UK GDPR. None of it goes near the public site, the repo's public assets, structured data, or an image. It stays in `docs/seo/data/` and out of the build.

What the lists are legitimately for: proving which sub-segments actually exist at scale, which is what determines the page inventory below. That is the entire value here, and it is a lot of value. Segmentation built from ~3,000 real companies beats segmentation built from guessing.

---

## 1. Travel: segment map

The list is roughly 60% UK, 25% EU (Netherlands, Germany, Denmark, Italy, Greece, Ireland dominant), 15% US. Fourteen distinct segments, not one "travel" market. Each has a different pipeline shape, which is exactly what the pages need to demonstrate.

### Tier A: build pillar plus three to four money pages

**A1. Luxury and tailor-made tour operators**  
Largest single cluster. Bespoke itinerary builders, £8k to £60k+ per booking, consultative sale, named travel designers, enquiry to booking measured in weeks. Conversion is phone and email, almost never checkout. This is Anywhere's shape and the segment where Bright Brand's proof is strongest. Pipeline: enquiry, qualification call, itinerary build, quote, revision cycle, deposit, balance. Revenue recognised on departure, not booking. Margin varies wildly by itinerary, so blended ROAS on gross booking value is actively misleading.

**A2. Safari and expedition specialists**  
Subset of A1 with harder seasonality and longer lead times, often 9 to 12 months out. Very high AOV, very low volume, tiny search demand, heavy reliance on repeat and referral. Attribution across a 12 month window or it is worthless.

**A3. Cruise specialists and cruise lines**  
Mixed model: some sell direct at checkout, most sell by phone. Cabin inventory pressure creates urgency campaigns. Groups and charters sit alongside FIT. Deposit and balance schedules make revenue timing messy.

### Tier B: build pillar plus two money pages

**B1. Ski and winter sports operators**  
Extreme seasonality, booking window compressed into roughly fourteen weeks, chalet and apartment inventory, group bookings. Budget shaping against the booking window rather than the calendar is the whole game.

**B2. Golf travel operators**  
Group-led, mostly male, mostly repeat, high value per group, strong seasonality by destination. Enquiry forms and phone.

**B3. Villa, chalet and holiday rental operators**  
Inventory-led rather than itinerary-led. Closer to ecommerce than the rest of travel but with enquiry fallback. Property-level landing pages at scale, which is a genuine technical SEO problem worth writing about.

**B4. Homeworking and independent agent networks**  
Structurally different: the network is the client, the agents are the sellers. Lead distribution, agent-level attribution, co-op marketing budgets, recruitment marketing as a second funnel alongside consumer acquisition. Almost nobody writes about this well.

**B5. Adventure, small group and expedition operators**  
Departure-date inventory, fill rates per departure, guaranteed departures, waitlists. Optimising to departure fill rather than to bookings.

**B6. Inbound operators and DMCs**  
B2B, not consumer. They sell to operators and agents, not travellers. This is a B2B pipeline wearing travel clothing, and it links naturally to the procurement and supplier management vertical.

### Tier C: reference on the travel pillar, no dedicated pages yet

Business travel and TMCs. School, sports, faith and group travel. Rail holidays. Coach and day tour operators. Travel technology vendors. Mass market operators and OTAs.

Each gets two or three sentences on the travel pillar and an internal link to the nearest relevant service page. Build dedicated pages only when a client lands.

---

## 2. Construction and built environment: segment map

Almost entirely UK. Eleven segments spanning the full supply chain, which matters because Bright Brand can credibly say it markets to and for both ends of it.

### Tier A: build pillar plus three to four money pages

**A1. Commercial fit-out and interiors contractors**  
The anchor segment. Manor Interior Solutions sits here. Cat A and Cat B office fit-out, retail, hospitality, healthcare fit-out. Tender-led, £500k to £15m contracts, and the commercially decisive work happens before the tender is published. Pipeline: relationship with occupier, agent, project manager and QS, then framework or PQQ inclusion, then ITT, then bid, then award. A CRM with a generic sales funnel cannot forecast this. Deal stages must map to the tender lifecycle.

**A2. Main contractors, commercial and regional**  
Larger, more frameworks, public sector procurement, social value scoring, more stakeholders. Same tender logic as A1, longer cycles, more of the pipeline is relationship and prequalification rather than lead generation. Paid media's job here is being visible to a very small named universe, not volume.

**A3. Housebuilders and residential developers**  
Completely different animal. Local search per development, plot reservations, showhome appointments, part exchange and finance enquiries, phone and form mixed. Campaign structure by development, dynamic number insertion per development, reservation pipeline in the CRM, landing page per site.

### Tier B: build pillar plus two money pages

**B1. Architects and design practices**  
Reputation and referral led. Almost no transactional search demand. Their marketing problem is authority and awards, and their commercial problem is converting a slow relational pipeline. LinkedIn and content, not paid search.

**B2. Interior design studios, residential and hospitality**  
High-value, taste-led, referral-heavy, Instagram and press-driven. Enquiry qualification is the bottleneck, not enquiry volume. A page about disqualifying bad-fit enquiries would land here.

**B3. Property developers and investors**  
Land, funding, planning, delivery, sales or letting. Marketing sits at the sales or letting end and at the investor end simultaneously. Two funnels, one brand.

**B4. Care home developers and operators**  
Present at real scale in the list and genuinely its own vertical. Two funnels: development and acquisition on one side, resident enquiries and family decision-making on the other. Resident acquisition is high-emotion, local, phone-heavy, and CQC-sensitive. Crosses over with medical and healthcare compliance work.

**B5. M&E and building services contractors**  
Subcontract tier. Sell to main contractors, so their pipeline is account-based against a known universe of maybe 400 companies. Pure ABM shape.

### Tier C: reference on the construction pillar

Specialist subcontractors (glazing, flooring, drylining, joinery, roofing, washrooms). QS, PM and building consultancies. Modular and offsite manufacturers. Kitchen, bathroom and furniture suppliers to trade. Property management and proptech. Development finance.

---

## 3. The crossover story, which is the differentiator

The two lists together prove something no competitor agency can claim:

- Canopy sells supplier management software to heads of procurement.
- Commercial fit-out contractors, main contractors and M&E subcontractors sell to those same procurement teams, through PQQ, framework and tender processes.
- Inbound operators and DMCs in travel sell to trade buyers, the same B2B shape again.

Bright Brand runs acquisition on both sides of the procurement table. Every construction and B2B pillar links to the procurement pillar with a sentence explaining this. It is the single most defensible claim on the site and it must not be buried.

---

## 4. Full page inventory

| Wave | Pillar / page | Money pages | Proof status |
|------|---------------|-------------|--------------|
| 1 | construction | pillar only, links down | anchor pillar |
| 1 | commercial-fit-out | crm-implementation, conversion-tracking-attribution, linkedin-b2b-advertising | Manor Interior Solutions |
| 1 | residential-home-builders | google-ads-management, call-tracking, landing-pages-cro | needs proof |
| 1 | /services/crm-implementation | service pillar | derived |
| 2 | travel-tour-operators | pillar | anchor pillar |
| 2 | luxury-tailor-made-travel | call-tracking, conversion-tracking-attribution, google-ads-management | Anywhere |
| 2 | safari-expedition-operators | conversion-tracking-attribution, reporting-dashboards | needs proof |
| 2 | cruise-operators | google-ads-management, call-tracking | needs proof |
| 2 | procurement-supplier-management | crm-implementation, outbound-lead-generation, linkedin-b2b-advertising, conversion-tracking-attribution | Canopy |
| 2 | medical-healthcare | pillar | anchor pillar |
| 2 | medical-cannabis-clinics | google-ads-management, conversion-tracking-attribution | Releaf |
| 3 | main-contractors | crm-implementation, linkedin-b2b-advertising | needs proof |
| 3 | architects-design-practices | linkedin-b2b-advertising, marketing-automation | needs proof |
| 3 | care-home-operators | google-ads-management, call-tracking | needs proof |
| 3 | ski-winter-sports-travel | google-ads-management, reporting-dashboards | needs proof |
| 3 | villa-holiday-rentals | landing-pages-cro, google-ads-management | needs proof |
| 3 | homeworking-agent-networks | crm-implementation, marketing-automation | needs proof |
| 3 | property-developers | pillar plus one | needs proof |
| 3 | legal-solicitors | google-ads-management, conversion-tracking-attribution | Britton and Time |
| 3 | remaining service pillars | nine total | derived |

Roughly 55 pages at full build. Wave 1 content is the construction pilot. Wave 2 is travel + procurement + medical. Everything in wave 3 waits for proof or for Alex to approve an anonymised composite.

---

## 5. Proof gap register

Bright Brand currently has named, nameable proof in four segments: commercial fit-out, luxury tailor-made travel, procurement software, medical cannabis clinics, plus legal. Everything else in the inventory is a proof gap.

Three ways to close a gap, in order of preference:

1. **A named client with sign-off and real numbers.** Best.
2. **An anonymised client by shape.** "A ski operator running fourteen chalets across three resorts" with real numbers, no name. Fine, and honest.
3. **A worked method with no client attached.** "Here is how we structure a per-development campaign and why" with no results claimed. Weakest but publishable, and vastly better than inventing a client.

What is never acceptable: a fabricated client, a fabricated number, a real company from the outreach list implied as a client, or a testimonial without an attributable human behind it.
