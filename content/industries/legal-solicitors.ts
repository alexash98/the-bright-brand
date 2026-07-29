import type { Industry } from "@/content/types";

const legalSolicitors: Industry = {
  slug: "legal-solicitors",
  name: "Legal and solicitors",
  type: "pillar",
  metaTitle: "Legal Marketing Agency for Solicitors | Bright Brand",
  metaDescription:
    "Marketing for UK law firms that ties Google, Microsoft and LinkedIn spend to qualified matters, with Clio and HubSpot attribution built for practice areas.",
  intro:
    "Law firm marketing fails when every practice area is treated as the same lead machine. Employment, conveyancing and commercial work convert differently. We build Google, Microsoft and LinkedIn so partners see which practice areas create retained matters, not vanity enquiries. Britton & Time is the named proof, with Daniel Beech on the commercial side of that relationship.",
  heroVisual: {
    eyebrow: "Legal snapshot",
    title: "What solicitor firms track",
    stats: [
      { value: "1 day–6 mo", label: "Cycle range" },
      { value: "Phone + form", label: "Close channel" },
      { value: "Retained matter", label: "Real KPI" },
      { value: "By practice", label: "Budget unit" },
    ],
    charts: [
      {
        title: "Where legal enquiries stall",
        caption:
          "Illustrative industry model for UK solicitor funnels, not a client result.",
        bars: [
          { label: "Unqualified enquiry", value: 34, display: "34%" },
          { label: "Conflicts / triage", value: 22, display: "22%" },
          { label: "Consult no-instruct", value: 28, display: "28%" },
          { label: "Office mismatch", value: 16, display: "16%" },
        ],
      },
    ],
  },
  insightCharts: [
    {
      title: "Decision-maker age mix (model)",
      caption:
        "Illustrative industry model of legal enquiry demographics, not a client result.",
      bars: [
        { label: "25–34", value: 24, display: "24%" },
        { label: "35–44", value: 32, display: "32%" },
        { label: "45–54", value: 26, display: "26%" },
        { label: "55+", value: 18, display: "18%" },
      ],
    },
    {
      title: "Enquiry source mix (model)",
      caption:
        "Illustrative industry model of how solicitor enquiries typically arrive, not a client result.",
      bars: [
        { label: "Paid search", value: 40, display: "40%" },
        { label: "Organic / brand", value: 22, display: "22%" },
        { label: "Referral", value: 24, display: "24%" },
        { label: "LinkedIn / other", value: 14, display: "14%" },
      ],
    },
  ],
  marketStats: [
    {
      value: "~9,147",
      label: "SRA-regulated law firms (2023/24)",
      source: "SRA Authorisation Annual Report 2023/24",
    },
    {
      value: "Below ~9,000",
      label: "Firms by end-2025 (consolidation)",
      source: "UK Legal Services Market Report 2026 coverage",
    },
    {
      value: "~177,841",
      label: "Practising solicitors (Jun 2026 series)",
      source: "SRA regulated population statistics",
    },
    {
      value: "~51%",
      label: "Business/commercial share of legal services value",
      source: "UK Legal Services Market Report 2026 coverage",
    },
    {
      value: "~£4.6bn",
      label: "Personal injury / clinical negligence consumer segment",
      source: "UK Legal Services Market Report 2026 coverage",
    },
    {
      value: "~£3–4bn each",
      label: "Family and employment consumer segments",
      source: "UK Legal Services Market Report 2026 coverage",
    },
  ],
  audience: [
    {
      role: "Managing partner / equity partner",
      share: "~25%",
      note: "Owns P&L on practice contribution and will kill a channel that cannot show retained matters.",
    },
    {
      role: "Head of marketing / BD",
      share: "~30%",
      note: "Runs Google, Microsoft and LinkedIn day to day, needs practice-level reporting for partner packs.",
    },
    {
      role: "Operations / intake lead",
      share: "~20%",
      note: "Owns Clio Grow, conflicts triage and phone SLAs; blocks soft leads from reaching fee earners.",
    },
    {
      role: "Practice area lead (employment, PI, conveyancing)",
      share: "~15%",
      note: "Cares about instruction quality in their desk, not firm-wide blended CPL.",
    },
    {
      role: "Office managing partner (multi-site)",
      share: "~10%",
      note: "Needs office-level attribution so Brighton spend is not credited to Mayfair matters.",
    },
  ],
  enquiryTiming: {
    title: "When solicitor enquiries arrive (model)",
    caption:
      "Illustrative industry model of enquiry timing for UK solicitor firms, not a client result.",
    bars: [
      { label: "Mon–Tue daytime", value: 34, display: "34%" },
      { label: "Wed–Thu daytime", value: 28, display: "28%" },
      { label: "Evening / weekend", value: 22, display: "22%" },
      { label: "Friday wind-down", value: 16, display: "16%" },
    ],
  },
  cycleTiming: {
    title: "Enquiry to instruction cycle (model)",
    caption:
      "Illustrative industry model across mixed practice firms, not a client result.",
    bars: [
      { label: "Same week (conveyancing-heavy)", value: 22, display: "22%" },
      { label: "2–6 weeks", value: 34, display: "34%" },
      { label: "6–16 weeks", value: 28, display: "28%" },
      { label: "4–6+ months (litigation / corporate)", value: 16, display: "16%" },
    ],
  },
  scatterCharts: [
    {
      title: "Practice value vs cycle length (model)",
      caption:
        "Illustrative model plotting relative instruction value against cycle length. Axes are normalised 0–100, not a client result.",
      xLabel: "Relative cycle length",
      yLabel: "Relative instruction value",
      points: [
        { x: 18, y: 28, label: "Residential conveyancing" },
        { x: 32, y: 42, label: "Employment (claimant)" },
        { x: 38, y: 48, label: "Family / divorce" },
        { x: 55, y: 62, label: "Wills & probate" },
        { x: 72, y: 78, label: "Personal injury" },
        { x: 85, y: 88, label: "Corporate / commercial" },
      ],
    },
  ],
  targetingNotes: [
    {
      heading: "SRA firm lists and regulated population",
      body: "Start with the SRA register of authorised firms and the regulated population statistics when you need firm counts, entity type and practising status. Use them to size a geographic catchment, exclude unregulated lookalikes, and keep multi-office targeting honest. This is market sizing and exclusion hygiene, not a cold-email dump of every authorised entity in England and Wales.",
    },
    {
      heading: "Law Society Find a Solicitor",
      body: "Law Society Find a Solicitor remains useful for practice-area and location validation when building competitive sets or checking how a firm presents conveyancing, employment or private client work publicly. Treat it as a directory check alongside your own CRM and Google Ads auction insights, not as a guaranteed lead list.",
    },
    {
      heading: "Google Ads practice keywords",
      body: "Non-brand search is still the primary capture layer for consumer practices. Build themes per practice family (employment solicitor, conveyancing quote, personal injury claim, divorce solicitor, wills and probate) with separate budgets and negative lists so high-CPC PI terms cannot drain conveyancing or commercial spend. Brand and competitor sit apart. Microsoft Ads often deserves a parallel share for older, higher-intent demographics.",
    },
    {
      heading: "Clio, LEAP and HubSpot segments",
      body: "Inside the firm stack, Clio Grow and Clio Manage (or LEAP) hold practice_area, office and fee_earner properties that should drive audiences and offline conversion actions. HubSpot lists for remarketing and LinkedIn matched audiences should enrol on qualified consultation or instruction stages, never on every form fill. Role targeting on LinkedIn is reserved for employment, corporate and commercial buyers, not for distressed consumer queries.",
    },
  ],
  pipelineStages: [
    { name: "Enquiry", note: "Web, phone or referral into intake" },
    { name: "Conflicts / triage", note: "Fit for practice, office and fee earner" },
    { name: "Consultation booked", note: "Common learning event for paid media" },
    { name: "Instruction / retainer", note: "Commercially real outcome for partners" },
    { name: "Matter open", note: "Practice system (Clio Manage / LEAP) is source of truth" },
  ],
  pipelineShape: [
    {
      heading: "How the pipeline works across practice areas",
      body: "Consumer-facing practices such as personal injury, family, immigration and residential conveyancing are usually search-led. Someone has a problem today, they type a query, they call or fill a form within minutes. Cycle length can be days for a conveyancing instruction and many months for a litigated personal injury claim. Employment sits in the middle: urgent for the client, still a considered instruction for the firm. Corporate, commercial, dispute resolution and private client work behaves more like B2B. The first touch may be LinkedIn, a referral, or a branded search, and the matter may take weeks of partner conversations before an engagement letter is signed. Decision makers differ too. An HR director instructing employment counsel is not the same buyer as a home mover chasing a quote, and your CRM stages have to reflect that or forecasting is fiction.",
    },
    {
      heading: "Where enquiries leak in solicitor firms",
      body: "The first leak is qualification. Agencies celebrate cost per lead while fee earners quietly delete enquiries that were never a fit for the practice or the office. The second leak is the phone. High-intent legal traffic still converts on calls, and if those calls never hit Clio Grow or HubSpot with a gclid, the campaign that paid for them looks worthless. The third leak is practice-area blending. When employment, conveyancing and commercial sit in one campaign with shared budgets, Google learns the cheapest form fill, which is rarely the highest-value matter. Multi-office firms add a fourth leak: Brighton traffic attributed to Mayfair landing pages, or the reverse, so office-level P&L never matches the ads report.",
    },
    {
      heading: "What a retained matter actually looks like in data",
      body: "A usable legal pipeline usually runs enquiry, conflicts and triage, consultation or initial advice, instruction or retainer, then matter open in Clio Manage or the equivalent practice system. Marketing should not optimise to the first step alone. Offline conversion upload needs a later event the firm agrees is commercially real, typically a qualified consultation booked or an instruction confirmed, with practice area, office and fee earner attached as properties. Until that loop exists, every channel report is an argument rather than a measurement system.",
    },
  ],
  infrastructure: [
    {
      heading: "CRM and practice systems that actually connect",
      body: "Most firms we see run a split stack. HubSpot or a marketing CRM captures the enquiry. Clio Grow handles intake. Clio Manage runs the matter. Call recordings and reception logs live somewhere else again. The infrastructure job is to make those systems share a single enquiry identity, keep UTM and click IDs intact from the first touch, and write a qualified outcome back to Google Ads and Microsoft Ads. We map HubSpot deal or ticket stages to the intake reality of each practice, not a generic SaaS funnel, and we treat Clio matter open as a revenue-adjacent event even when NDA rules stop us publishing the value.",
    },
    {
      heading: "Attribution that survives partner scrutiny",
      body: "Legal attribution has to answer three questions in one dashboard: which practice area, which office, and which channel created the instruction. We build weekly and bi-monthly packs that reconcile ad spend to CRM outcomes, with conversion actions named by practice where volume allows, for example legal_employment_qualified_consult and legal_conveyancing_instruction. Server-side tagging and consent mode sit underneath so the measurement plan is not wiped out by browser restrictions. If a firm will not define what counts as qualified, we stop at the measurement plan rather than inventing a conversion the partners will not defend.",
    },
    {
      heading: "Paid media structured by how the firm sells",
      body: "Campaign architecture follows practice area and intent, not vanity keyword lists. Brand and competitor sit apart from non-brand. High-CPC personal injury and conveyancing terms get their own budgets and negative lists so they cannot cannibalise lower-volume commercial search. LinkedIn is reserved for practice areas where the buyer is a role, typically employment for HR leaders, corporate for founders and FDs, and commercial disputes for in-house counsel. Microsoft Ads often deserves its own share of legal budget because Bing still converts in older, higher-intent demographics that Google reports alone will miss.",
    },
  ],
  stackNotes: [
    {
      heading: "Clio Grow, Clio Manage and Clio Rail",
      body: "Clio Grow is usually the intake layer for consumer practices: web forms, phone dispositions and consultation booking land here before a matter exists. Clio Manage holds the matter once instructed, with practice_area, office, fee_earner and matter_status as the grain partners recognise. Clio Rail and custom scripts become necessary when HubSpot, Google Ads, Microsoft Ads and Clio must share one enquiry identity. We have built custom amalgamation across HubSpot, Clio Rail, Clio Grow and Clio Manage so partners see one weekly view of spend versus qualified pipeline rather than four exports that never match. Offline conversion upload should fire on a Grow or Manage stage partners will defend, not on every thank-you page.",
    },
    {
      heading: "LEAP as an alternative practice system",
      body: "Many mid-market UK firms run LEAP rather than Clio. The marketing job does not change: capture click IDs at enquiry, keep practice and office properties required, and emit a later qualified event for offline upload. LEAP matter open or retainer confirmed can play the same role as Clio Manage matter open if fee earners will update it. We map HubSpot deals or tickets to LEAP matter references so ad platforms and finance are not arguing from different exports.",
    },
    {
      heading: "HubSpot versus practice-area attribution",
      body: "HubSpot works well when marketing owns enquiry routing and partners want lifecycle reporting. It fails when every practice shares one pipeline with the same stage names. Employment needs stages for triage and ACAS or early conciliation context. Personal injury needs limitation and evidence checkpoints before instruction value is meaningful. Conveyancing needs instruction and exchange timing. Corporate needs proposal and engagement letter stages measured in weeks. We configure separate pipelines or heavily branched stage models per practice family, with required properties for office, practice_area, fee_earner and instruction_value_band even when exact revenue stays off the public case study.",
    },
    {
      heading: "CallRail and phone-led intake",
      body: "High-intent legal traffic still converts on calls. Dynamic numbers per practice or office, where volume justifies it, write call recordings and dispositions into HubSpot or Clio Grow with the same gclid that the form path keeps. A 60-second call duration goal alone is not a solicitor conversion. Reception or intake must mark qualified consultation booked or not suited before the event trains Smart Bidding.",
    },
    {
      heading: "Compliance-constrained creative and landing pages",
      body: "Google Ads does not publish a single UK-only legal services policy equivalent to its financial services rules, so firms remain responsible for SRA advertising and publicity rules plus Google Ads Editorial and restricted content requirements. VERIFY: confirm any live Google Ads personalised advertising limits that apply to family, divorce or other sensitive legal categories against current Ads Policy help pages before launch. In practice we keep claims substantiated, avoid guaranteed outcomes, and route high-risk practice copy through the firm's compliance contact before ads go live. Landing pages inherit the same discipline: clear practice scope, office location, and no success-rate theatre.",
    },
  ],
  proof: [
    {
      client: "Britton & Time",
      anonymised: false,
      situation:
        "Britton & Time is an award-winning law firm with offices in Mayfair and Brighton, working across around 10 practice areas for personal and business clients. Paid search was live, but the firm could not see which campaigns created real instructions. Daniel Beech, Founder & Operations Manager: \"The Bright Brand have helped us to do what other pay-per-click partners have promised but never been able to deliver: attribute leads to campaigns and pinpoint return on ad spend. In a heavily contested sector, they took the time to listen to us, understand our products, drive down CPCs and build common sense, achievable plans for growth.\"",
      built:
        "A custom attribution build joining HubSpot, Clio Rail, Clio Grow and Clio Manage into one reporting point, plus a rebuild of Google Ads and the addition of Microsoft Ads and LinkedIn. Campaigns now run across approximately 10 legal areas for both offices, with weekly and bi-monthly visibility on return for every pound spent. CPA and revenue figures stay under NDA and are not published.",
      results: [
        {
          metric: "Leads per month",
          after: "150+",
          window: "steady-state published performance",
        },
        {
          metric: "Practice areas in paid coverage",
          after: "~10",
          window: "ongoing engagement",
        },
        {
          metric: "New campaigns introduced in rebuild",
          after: "20+",
          window: "account restructure",
        },
        {
          metric: "Monthly impressions",
          after: "30,000+",
          window: "published case study period",
        },
      ],
      signedOff: true,
    },
  ],
  faqs: [
    {
      q: "Can you market every practice area the same way?",
      a: "No. Conveyancing and personal injury are usually search and phone heavy. Employment mixes search with HR-role LinkedIn. Corporate and commercial are longer cycles with fewer, higher-value instructions. Campaign structure, CRM stages and conversion events should follow those shapes, not a single firm-wide cost-per-lead target.",
    },
    {
      q: "Do you need Clio to work with a law firm?",
      a: "No, but you need an intake system and a matter system that can emit a qualified event. Clio Grow and Clio Manage are common. HubSpot alone can work for marketing-owned enquiry stages if fee earners will update instruction outcomes. The non-negotiable is a later conversion than the thank-you page.",
    },
    {
      q: "Why do you refuse to publish CPA for Britton & Time?",
      a: "The engagement is under NDA for CPA, revenue and other confidential metrics. Legal client confidentiality and firm policy limit what can appear on a public case study. We publish the operational proof that is approved: 150+ leads per month, roughly 10 practice areas, and the channel mix of Google, Microsoft and LinkedIn.",
    },
    {
      q: "How do multi-office firms avoid messy attribution?",
      a: "Separate landing paths and call tracking per office where volume justifies it, required CRM properties for office and practice area, and conversion actions that do not blend Brighton instructions into a Mayfair campaign. Shared brand campaigns are fine. Shared non-brand budgets across offices usually are not.",
    },
    {
      q: "Is LinkedIn worth it for solicitors?",
      a: "For consumer conveyancing, rarely as a primary channel. For employment, corporate, commercial and some private client work, yes, when the buyer is a named role and the firm can nurture a longer cycle. At Britton & Time, LinkedIn became an independent acquisition channel rather than a support act for Google.",
    },
    {
      q: "How do you handle SRA and advertising compliance?",
      a: "We draft within SRA publicity expectations and the firm's own compliance process: no misleading fee claims, no guaranteed outcomes, testimonials only where the firm approves them. Google Ads Editorial rules still apply. Where a Google policy line for a sensitive practice area cannot be verified from the live help document at write time, we flag it for counsel review rather than guessing.",
    },
    {
      q: "What does a typical first 30 days look like?",
      a: "Week one is account and CRM archaeology: conversion actions, Clio or HubSpot fields, call handling, practice-area volume. Weeks two and three are measurement and campaign surgery. Week four is the first pack that shows spend against qualified outcomes by practice, even if revenue values stay internal.",
    },
  ],
  relatedIndustries: [
    {
      slug: "medical-healthcare",
      why: "Both verticals run compliance-constrained paid media where the wrong claim language or the wrong conversion event can waste budget or create regulatory risk. The measurement discipline transfers even when the regulators differ.",
    },
    {
      slug: "commercial-insurance",
      why: "Brokers and solicitors often sit in the same commercial claim or risk conversation. High-intent search, phone-led intake and long tail matters look familiar once you leave consumer conveyancing behind.",
    },
  ],
  resourceSlugs: [
    "attribution-health-check",
    "offline-conversion-upload-template",
    "ga4-enquiry-event-schema",
    "negative-keyword-starter-lists",
  ],
  toolSlugs: [],
  blogTags: ["legal", "google-ads", "attribution", "offline-conversions", "crm", "linkedin"],
  moneyPages: [],
};

export default legalSolicitors;
