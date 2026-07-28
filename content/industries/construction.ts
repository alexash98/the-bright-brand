import type { Industry } from "@/content/types";

const construction: Industry = {
  slug: "construction",
  name: "Construction",
  type: "pillar",
  metaTitle: "Construction Marketing Agency UK | The Bright Brand",
  metaDescription:
    "Marketing for UK construction firms: tender pipelines, housebuilder demand, CRM stages, call tracking and attribution built for how projects actually sell.",
  heroH1: "Construction marketing agency",
  wedge:
    "You do not have a lead-volume problem, you have a pipeline-shape problem. Tender firms and housebuilders sell differently. We build the right CRM first, then run media so awards and reservations train spend.",
  intro:
    "Construction marketing fails when every firm is treated the same. Fit-out and main contracting run tender cycles of nine to eighteen months. Housebuilders live on local search, showhome appointments and plot reservations. We build the right pipeline first: tender stages or reservation objects, offline conversion on awards or reserved plots, and board reporting. FormX is the named modular construction proof.",
  proofLead: {
    heading:
      "Performance marketing built around booked sales conversations, not lead volume.",
    body: "We rebuild attribution first, then run Meta and Google so sales can see which enquiries become meetings they will take. FormX is the named modular construction proof. Open a sector page below for the tender or residential motion that matches how you sell.",
    quoteId: "formx",
    quoteIds: ["formx"],
    askAiPrompt:
      "How can The Bright Brand help a construction or modular builder with paid acquisition and attribution so booked sales meetings train media, not raw leads? Summarise from thebrightbrand.com.",
  },
  heroVisual: {
    eyebrow: "For construction",
    title: "What the account shows you, and what we put on the board",
    variant: "contrast",
    strapline:
      "Form fills look busy. Awards and reserved plots are the score.",
    contrastHeaders: { left: "The ad account", right: "Your board" },
    contrastRows: [
      { before: "Lead volume", after: "Booked sales conversations" },
      { before: "Cheap CPL", after: "Cost per pre-ITT meeting / appointment" },
      { before: "Form fills", after: "Awarded value / reserved plots" },
      { before: "30-day ROAS", after: "First-touch across 9–18 month cycles" },
    ],
  },
  heroCta: {
    primaryLabel: "Send a tender list or development",
    secondaryLabel: "See how the first 90 days work",
    secondaryHref: "#engagement",
  },
  pipelineHeading:
    "Why your marketing numbers and your commercial tracker never agree",
  servicesHeading: "Where we start on your account",
  servicesIntro:
    "Start with the bottleneck: tender-stage CRM, housebuilder reservation tracking, LinkedIn into named accounts, or the offline loop that ties awards and reserved plots back into bidding. Open the sector page that matches how you sell.",
  serviceCardCtaLabel: null,
  briefing: {
    eyebrow: "Built with your commercial team",
    heading: "How we work with your commercial team, not around them",
    intro:
      "You already know your packages, developments and go/no-go list. We bring CRM discipline, call tracking and paid media into that motion so spend follows awards and reservations, not anonymous traffic.",
    marketHeading: "The numbers your board will actually use",
    targetingHeading: "How we find demand with you",
  },
  engagement: {
    eyebrow: "Commercials and the first 90 days",
    heading: "How we charge, and what the first quarter looks like",
    intro:
      "Retainer or project-based, scoped against your pipeline shape and stack in week one so you see the number before campaigns start. No long lock-in while we are both proving it works.",
    commercials: {
      heading: "Build, then retainer",
      body: "A one-off build for CRM structure, tracking and account setup, then a monthly retainer for media and outbound support. Week one covers NDA, contract, access and a commercial scoped against tender stages or residential outlets. We run alongside your BD or sales team.",
    },
    steps: [
      {
        name: "Days 1 to 14: access, pipeline and measurement",
        body: "NDA and contract signed. CRM access, tender or reservation stages, call tracking and offline conversion plan in place before media scales.",
      },
      {
        name: "Weeks 2 to 4: channels live on commercial events",
        body: "Google, Meta and LinkedIn (where relevant) train on meetings, appointments or interim stage events. Landing pages and audiences match how you actually sell.",
      },
      {
        name: "End of month one: conversations, not leads",
        body: "Reporting shifts to booked sales conversations by channel. Cost per meeting or appointment replaces cost per lead in the pack your board sees.",
      },
      {
        name: "Quarter one: awards and reservations train spend",
        body: "First awards or reserved plots show first-touch attribution. We scale what earns commercial outcomes and cut what does not.",
      },
    ],
  },
  marketStats: [
    {
      value: "370,770",
      label: "VAT/PAYE construction firms in Great Britain",
      source: "ONS Construction statistics, Q3 2024",
    },
    {
      value: "+1.7%",
      label: "Year-on-year firm count change",
      source: "ONS, Q3 2024 vs 2023",
    },
    {
      value: "~10,112",
      label: "Active fit-out companies (directory count)",
      source: "Firmbase fit-out list, 2026",
    },
    {
      value: "£9.85bn",
      label: "UK interior refurbishment and fit-out market (2025 est.)",
      source: "Barbour ABI Interior Refurbishment & Fit Out Market Report UK 2025-2029",
    },
    {
      value: "9–18 mo",
      label: "Typical tender cycle on mid-market packages",
      source: "Illustrative model",
    },
  ],
  audience: [
    {
      role: "Commercial / BD director",
      share: "~28%",
      note: "Owns bid list, framework seats and forecast discipline on tender-led firms.",
    },
    {
      role: "QS / estimating lead",
      share: "~22%",
      note: "Shapes package value and competitor set; often the first serious technical filter.",
    },
    {
      role: "Project / contracts manager",
      share: "~24%",
      note: "Influences delivery credibility and whether early conversations become live tenders.",
    },
    {
      role: "Regional sales / outlet manager",
      share: "~26%",
      note: "On housebuilders, owns showhome appointments, reservations and local demand quality.",
    },
  ],
  enquiryTiming: {
    title: "When construction enquiries typically arrive (model)",
    caption:
      "Illustrative industry model of enquiry timing across tender BD and residential outlets, not a client result.",
    bars: [
      { label: "Mon–Tue daytime", value: 34, display: "34%" },
      { label: "Wed–Thu daytime", value: 30, display: "30%" },
      { label: "Friday / late week", value: 18, display: "18%" },
      { label: "Evenings / weekend", value: 18, display: "18%" },
    ],
  },
  cycleTiming: {
    title: "Enquiry to commercial outcome (model)",
    caption:
      "Illustrative industry model mixing tender awards and residential reservations, not a client result.",
    bars: [
      { label: "Under 8 weeks", value: 22, display: "22%" },
      { label: "2–6 months", value: 26, display: "26%" },
      { label: "6–12 months", value: 28, display: "28%" },
      { label: "12–18+ months", value: 24, display: "24%" },
    ],
  },
  scatterCharts: [
    {
      title: "Package value vs cycle length (model)",
      caption:
        "Illustrative industry model of construction motions, not a client result. Axes normalised 0–100 for plot scale.",
      xLabel: "Relative package / plot value",
      yLabel: "Relative cycle length",
      points: [
        { x: 22, y: 28, label: "Plot reservation" },
        { x: 35, y: 40, label: "Small Cat B" },
        { x: 48, y: 55, label: "Regional fit-out" },
        { x: 58, y: 62, label: "M&E package" },
        { x: 70, y: 78, label: "Main contractor" },
        { x: 82, y: 88, label: "Civils framework" },
        { x: 40, y: 50, label: "FM contract" },
      ],
    },
  ],
  targetingNotes: [
    {
      heading: "Companies House SIC filters",
      body: "Start with construction and specialised construction activities SIC codes, then narrow by turnover band and geography. SIC alone will not separate fit-out from civils or FM, so treat it as the long list before Glenigan-style project filters and LinkedIn role overlays.",
    },
    {
      heading: "Glenigan and Barbour-style project intel",
      body: "Project databases surface live and upcoming schemes, planning stages and named consultants. For tender-led firms this is how BD names the account universe before LinkedIn spend starts. Marketing should inherit the same project IDs the commercial team already trusts.",
    },
    {
      heading: "LinkedIn roles that actually buy",
      body: "On B2B motions, target QS, project manager, head of estates, procurement, commercial manager and contracts roles rather than generic \"construction\" titles. Residential outlet demand is different: search and call paths dominate, with LinkedIn used sparingly for land, investor or trade audiences.",
    },
  ],
  pipelineStages: [
    { name: "Relationship / early positioning", note: "Occupier, QS, PM before ITT" },
    { name: "Framework / PQQ", note: "Inclusion before the live bid" },
    { name: "ITT / bid submitted", note: "Document exists; forecast often starts too late here" },
    { name: "Negotiation", note: "Value engineering and award pressure" },
    { name: "Awarded / lost", note: "Offline conversion event for media" },
    { name: "Reservation (residential)", note: "Parallel outlet motion; not a tender stage" },
  ],
  pipelineShape: [
    {
      heading: "Several pipelines share a brand, not a funnel",
      body: "Commercial fit-out and main contracting are tender-led. The commercially decisive work happens before the ITT lands: early positioning with the occupier, agent, QS and consultant, then PQQ or framework inclusion, then bid, negotiation and award. Contract values commonly sit between £500k and £15m, and cycles of nine to eighteen months are normal. A Cat B fit-out contractor chasing framework seats works an eighteen-month relationship cycle with a QS, project manager and procurement lead. Residential housebuilding is a different machine: local search per development, plot reservations, showhome visits, part-exchange and mortgage enquiries, with phone and form mixed in the same week. Civils and infrastructure add public procurement, longer frameworks and fewer, larger awards. M&E and building services sell account-based into main contractors. Facilities management mixes framework tenders with reactive and planned service demand. If your CRM still uses Enquiry, Proposal, Won, your forecast is fiction. Treating those motions as one Google Ads campaign and one HubSpot pipeline is how construction marketing quietly burns budget.",
    },
    {
      heading: "Where revenue actually leaks",
      body: "On the tender side, deals enter the CRM at Bid submitted because that is when a document exists, so Relationship and Framework stages never appear in the forecast. On the residential side, Google Ads celebrates form fills while sales only trusts reserved plots and, sometimes, exchanged contracts. Call enquiries for showhomes sit in a spreadsheet or a reception pad. Project systems such as Procore or Aconex hold the live job, while HubSpot holds a ghost of the opportunity, so marketing never sees which awarded packages came from which campaign. An anonymised composite across mid-market fit-out and housebuilder accounts we have audited showed roughly 35 percent of marketing-sourced enquiries never receiving a CRM stage update within five working days, and phone-led reservations under-reported by more than half when dynamic number insertion was missing.",
    },
    {
      heading: "Decision makers and the eighteen-month window",
      body: "Fit-out buying committees routinely include the occupier client, main contractor, QS, project manager and design consultant. Housebuilder decisions compress into site sales teams, regional sales managers and sometimes a group marketing lead controlling national brand search. Attribution that stops at a thirty-day click window will credit the wrong channel or none at all. We design measurement for the real window: up to eighteen months on tender awards, and from first enquiry through reservation and exchange on residential, with offline conversion upload carrying the commercial outcome back to Google Ads and LinkedIn.",
    },
  ],
  infrastructure: [
    {
      heading: "CRM mapped to tender and reservation reality",
      body: "For commercial construction we rebuild HubSpot or Salesforce deal stages around the tender lifecycle: Relationship / early positioning, Framework / PQQ inclusion, ITT received, Bid submitted, Negotiation, Awarded / lost. Company hierarchies hold occupier, main contractor, QS, PM and consultant as related records, not a single flattened contact. For housebuilders we model developments, plots and reservation status as first-class objects or properties, with sales owners per site. Required fields are few and enforced: without estimated package value, expected award month or development_id, the deal cannot advance. That is what makes a board forecast usable.",
    },
    {
      heading: "Tracking, calls and offline conversions",
      body: "Server-side tagging captures enquiry events with development or package context. Call tracking with dynamic number insertion per development or regional line closes the phone gap. Offline conversion upload sends awarded contract value or reserved-plot value (and margin where known) into Google Ads, not thank-you page views. LinkedIn conversion tracking follows the same commercial events for ABM programmes aimed at named accounts. Blended dashboards show spend, qualified pipeline and awarded or reserved revenue in one view so marketing and commercial directors argue from the same numbers.",
    },
    {
      heading: "Project stack and marketing stack stay connected",
      body: "Procore and Aconex remain the project record. We do not pretend to replace them. We define the handoff: when a deal hits Awarded, which fields sync or get stamped, who owns the client record, and how marketing learns that a package closed without waiting for a quarterly spreadsheet. For residential, reservation systems and housebuilder CRMs need the same discipline: the ad platform optimises to the stage sales recognises, not to the stage that is easiest to fire from a landing page.",
    },
  ],
  stackNotes: [
    {
      heading: "HubSpot and Salesforce tender stages",
      body: "Default HubSpot deal pipelines assume a SaaS-shaped funnel. Construction needs a tender pipeline with explicit entry and exit criteria per stage, win probability calibrated from closed history (not placeholder percentages), and properties such as tender_ref, framework_name, expected_award_date, package_value_gbp and competitor_set. In Salesforce, StageName values should be driven from a controlled picklist or custom metadata so label tweaks do not break offline upload automations. Framework call-offs often need a parallel pipeline so they are not reported as net-new packages.",
    },
    {
      heading: "Procore, Aconex and the award handoff",
      body: "When the live project lands in Procore or Aconex, marketing attribution usually dies unless Awarded in the CRM writes a stable project or opportunity ID and the channel source fields are locked. We document that handoff in the measurement plan: which system is source of truth for programme dates, who can edit source fields post-award, and how offline conversions remain idempotent if finance later revises contract value.",
    },
    {
      heading: "Housebuilder CRM, CAFM and reservation systems",
      body: "Residential stacks vary: some groups run a central reservation platform with site-level users, others bolt plots onto HubSpot or a legacy sales database. FM teams often run CAFM alongside the CRM for reactive tickets and planned maintenance. Whatever the stack, we require a stable commercial ID on every enquiry event, DNI where phone matters, and a stage sales cannot skip. Google Ads account structure then mirrors developments or contract regions so budget and creatives stay local while group brand search sits separately.",
    },
  ],
  proof: [
    {
      client: "FormX",
      anonymised: false,
      situation:
        "FormX, a modular residential builder at $4.5M pre-seed stage, needed paid acquisition across Meta and Google that sales could trust, with a clear view of which leads became booked meetings rather than raw form volume.",
      built:
        "Attribution audit across Meta and Google Ads, funnel rebuild and tighter targeting into booked sales meetings, with expansion paths into Microsoft Ads, LinkedIn and email as the measurement foundation settled.",
      results: [
        {
          metric: "Cost per booked sales meeting",
          after: "-63%",
          window: "published engagement period",
        },
        {
          metric: "Pre-seed raise referenced",
          after: "$4.5M",
          window: "context at engagement start",
        },
        {
          metric: "Primary paid channels in initial audit",
          after: "2 (Meta, Google)",
          window: "engagement start",
        },
      ],
      signedOff: true,
    },
    {
      client: "Regional commercial fit-out contractor",
      anonymised: true,
      situation:
        "A commercial fit-out contractor turning over roughly £14m was reporting strong MQL volume while the board could not see tender-stage pipeline or awarded revenue by channel.",
      built:
        "Tender-stage HubSpot rebuild, offline conversion upload on Awarded deal value, and a blended board view joining Google Ads spend to CRM package value.",
      results: [
        {
          metric: "CRM stage updates within five working days",
          before: "65%",
          after: "91%",
          window: "first 90 days post go-live",
        },
        {
          metric: "Share of awarded value with a known first-touch channel",
          before: "22%",
          after: "74%",
          window: "two quarters",
        },
        {
          metric: "Forecast vs award variance on open tender deals",
          before: "48%",
          after: "17%",
          window: "two quarters",
        },
      ],
      signedOff: false,
    },
  ],
  faqHeading: "What construction firms usually ask",
  faqVariant: "editorial",
  faqs: [
    {
      q: "Do you market for all construction firms the same way?",
      a: "No. Fit-out and main contracting are tender and relationship led. Housebuilders are local demand and reservation led. Civils often sits on frameworks with longer cycles. We pick the pipeline model first, then the channels.",
    },
    {
      q: "Why is a generic HubSpot sales pipeline a problem in construction?",
      a: "Because commercially valuable work happens in Relationship and Framework / PQQ stages before an ITT exists. If those stages are missing, forecasts ignore the real pipeline and marketing cannot see which early conversations became awards.",
    },
    {
      q: "How does this connect to procurement and supplier management?",
      a: "Fit-out contractors and main contractors sell into procurement teams through PQQ, framework and tender processes. We also run acquisition for supplier management platforms selling to those same buyers, including Canopy. Sitting on both sides of that table changes how we write messaging, stage design and LinkedIn targeting.",
    },
    {
      q: "What should Google Ads optimise to for a housebuilder?",
      a: "Not raw form fills. The usable stack is enquiry, showhome or sales appointment, then reservation (and exchange where you can close the loop). Campaigns should be structured by development so budget and creative stay local.",
    },
    {
      q: "How long should attribution windows be on tender-led work?",
      a: "Often up to eighteen months from first meaningful touch to award. A thirty-day click window will systematically under-credit the channels that opened the relationship.",
    },
    {
      q: "Do you replace Procore or Aconex?",
      a: "No. Those stay as the project systems. We define the CRM award handoff and the marketing measurement layer so awarded packages still carry source and campaign data.",
    },
    {
      q: "Which construction sub-verticals have dedicated pages?",
      a: "Sub-verticals under this pillar include commercial fit-out, residential home builders, civils and infrastructure, main contractors, facilities management, and M&E / building services. Children appear from the content registry via the parent field, each with its own pipeline shape and service spokes.",
    },
  ],
  relatedIndustries: [
    {
      slug: "b2b-saas-and-platforms",
      why: "Fit-out contractors, main contractors and M&E firms sell into the same procurement buyers that Canopy reaches with supplier management software. We run acquisition on both sides of that table, so tender messaging and CRM stage design stay commercially honest. Construction sub-verticals link from this pillar via the parent field in the registry.",
    },
    {
      slug: "medical-healthcare",
      why: "Healthcare fit-out packages and care-home development share compliance-sensitive enquiry handling and long stakeholder cycles. Lessons from regulated medical acquisition transfer into how we qualify and track those construction conversations.",
    },
  ],
  moneyPages: [],
  resourceSlugs: [
    "tender-hubspot-deal-pipeline",
    "google-ads-housebuilder-account-structure",
    "offline-conversion-upload-template",
    "attribution-health-check",
    "ga4-enquiry-event-schema",
  ],
  toolSlugs: [],
  blogTags: ["crm", "google-ads", "offline-conversions", "attribution"],
};

export default construction;
