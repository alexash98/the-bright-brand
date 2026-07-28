import type { Industry } from "@/content/types";

const corporateCommercialLaw: Industry = {
  slug: "corporate-commercial-law",
  name: "Corporate and commercial law",
  parent: "legal-solicitors",
  type: "sub",
  metaTitle: "Corporate Law Marketing for Solicitors | Bright Brand",
  metaDescription:
    "LinkedIn and attribution for UK corporate and commercial solicitors: founder and FD buyers, long cycles, HubSpot and Clio engagement tracking.",
  intro:
    "Corporate and commercial law marketing is a B2B motion wearing a solicitor brand. Founders, FDs and in-house counsel buy after weeks of conversation, not after a midnight form. We run LinkedIn against named roles, keep Google for high-intent capture, and attribute to engagement letters rather than soft downloads.",
  heroVisual: {
    eyebrow: "Commercial snapshot",
    title: "What corporate desks track",
    stats: [
      { value: "4–20 wk", label: "Typical cycle" },
      { value: "Engagement letter", label: "Real KPI" },
      { value: "LinkedIn + brand", label: "Demand mix" },
      { value: "~51%", label: "Mkt value share*" },
    ],
    charts: [
      {
        title: "Where commercial enquiries stall",
        caption:
          "Illustrative industry model for corporate/commercial funnels, not a client result. *Business/commercial share of UK legal services value.",
        bars: [
          { label: "Not decision maker", value: 28, display: "28%" },
          { label: "Panel / incumbent counsel", value: 26, display: "26%" },
          { label: "Proposal no-instruct", value: 30, display: "30%" },
          { label: "Timing / budget slip", value: 16, display: "16%" },
        ],
      },
    ],
  },
  insightCharts: [
    {
      title: "Buyer roles (model)",
      caption:
        "Illustrative industry model of commercial law buyers, not a client result.",
      bars: [
        { label: "Founder / MD", value: 32, display: "32%" },
        { label: "FD / CFO", value: 26, display: "26%" },
        { label: "In-house counsel", value: 24, display: "24%" },
        { label: "Ops / commercial lead", value: 18, display: "18%" },
      ],
    },
    {
      title: "Matter family mix (model)",
      caption:
        "Illustrative industry model of corporate/commercial matter mix, not a client result.",
      bars: [
        { label: "Corporate / M&A support", value: 28, display: "28%" },
        { label: "Commercial contracts", value: 34, display: "34%" },
        { label: "Shareholder / disputes", value: 20, display: "20%" },
        { label: "Advisory retainer", value: 18, display: "18%" },
      ],
    },
  ],
  marketStats: [
    {
      value: "~51%",
      label: "Business/commercial share of legal services value",
      source: "UK Legal Services Market Report 2026 coverage",
    },
    {
      value: "~9,147",
      label: "SRA-regulated law firms (context)",
      source: "SRA Authorisation Annual Report 2023/24",
    },
    {
      value: "~177,841",
      label: "Practising solicitors (Jun 2026 series)",
      source: "SRA regulated population statistics",
    },
  ],
  audience: [
    {
      role: "Founder / managing director",
      share: "~30%",
      note: "Buys on trust and speed for deals and disputes; LinkedIn and referral heavy.",
    },
    {
      role: "Finance director / CFO",
      share: "~25%",
      note: "Cares about fee certainty, process and partner access; longer evaluation.",
    },
    {
      role: "In-house counsel",
      share: "~25%",
      note: "Instructs external counsel against panel rules; content must sound commercially literate.",
    },
    {
      role: "Corporate partner / BD lead",
      share: "~20%",
      note: "Internal marketing buyer; rejects ebook MQLs that never become scoping calls.",
    },
  ],
  enquiryTiming: {
    title: "When commercial enquiries arrive (model)",
    caption:
      "Illustrative industry model for corporate desks, not a client result.",
    bars: [
      { label: "Tue–Thu daytime", value: 48, display: "48%" },
      { label: "Monday planning", value: 22, display: "22%" },
      { label: "Friday", value: 18, display: "18%" },
      { label: "Evening / weekend", value: 12, display: "12%" },
    ],
  },
  cycleTiming: {
    title: "First touch to engagement letter (model)",
    caption:
      "Illustrative industry model of corporate cycle length, not a client result.",
    bars: [
      { label: "Under 4 weeks", value: 18, display: "18%" },
      { label: "4–10 weeks", value: 40, display: "40%" },
      { label: "10–20 weeks", value: 28, display: "28%" },
      { label: "20+ weeks", value: 14, display: "14%" },
    ],
  },
  scatterCharts: [
    {
      title: "Cycle length vs engagement value (model)",
      caption:
        "Illustrative model of commercial matter types. Axes normalised 0–100, not a client result.",
      xLabel: "Relative cycle length",
      yLabel: "Relative engagement value",
      points: [
        { x: 30, y: 35, label: "Contract review sprint" },
        { x: 45, y: 48, label: "Supplier dispute" },
        { x: 60, y: 62, label: "Shareholder issue" },
        { x: 75, y: 80, label: "Deal support" },
        { x: 55, y: 70, label: "Annual retainer" },
        { x: 85, y: 88, label: "Complex dispute" },
      ],
    },
  ],
  targetingNotes: [
    {
      heading: "LinkedIn role and account lists",
      body: "Build named account lists with BD where the firm has sector focus. Layer founder, FD, in-house counsel and commercial director titles. Matched audiences from HubSpot should enrol on proposal or engagement stages, not every webinar registrant.",
    },
    {
      heading: "Google for high-intent commercial capture",
      body: "Keep a disciplined search layer for commercial solicitor, contract dispute solicitor and brand terms. Volume is lower than consumer practices; structure still matters so PI CPCs cannot cannibalise this budget.",
    },
    {
      heading: "SRA firm and Companies House context",
      body: "SRA lists size the competitive set. Companies House and LinkedIn Sales Nav help BD validate account lists. Directories are research tools, not spray-and-pray email sources.",
    },
  ],
  pipelineStages: [
    { name: "Enquiry / referral", note: "BD intro, referral or inbound scope note" },
    { name: "Scoping call", note: "Fee earner qualifies matter and conflict" },
    { name: "Proposal / fee quote", note: "Fixed fee, hourly or retainer terms" },
    { name: "Engagement letter signed", note: "Primary offline conversion for ABM" },
    { name: "Matter open", note: "Practice system holds commercial truth" },
  ],
  pipelineShape: [
    {
      heading: "Conversation to engagement letter",
      body: "Corporate and commercial work usually runs first conversation, scoping, proposal or fee estimate, engagement letter, then matter open. Cycles measured in weeks are normal. Decision makers sit in companies, often with procurement or panel constraints. A marketing system that celebrates whitepaper downloads will never match the partner’s pipeline spreadsheet.",
    },
    {
      heading: "Where commercial marketing fails",
      body: "Using consumer legal CPL targets on B2B matters. LinkedIn forms without company size or matter type. Google campaigns blended with conveyancing. Attribution windows of thirty days that erase the LinkedIn conversation that opened a deal twelve weeks earlier.",
    },
    {
      heading: "What to optimise toward",
      body: "Qualified scoping call and engagement letter signed are the events partners defend. Matter open in Clio Manage or LEAP is the operational confirmation. Fee values often stay internal on public case studies.",
    },
  ],
  infrastructure: [
    {
      heading: "HubSpot opportunity stages for counsel sales",
      body: "Stages: conversation, scoping, proposal, engagement letter, matter open, closed lost. Required properties for sector, company_size_band, matter_family and partner_owner. gclid and LinkedIn click IDs persist through merges.",
    },
    {
      heading: "Long-window offline conversion",
      body: "Upload engagement letter signed (and optionally scoping completed) to Google and LinkedIn. Windows reflect weeks-to-months cycles. Weekly and monthly packs show stage movement, not only CPL.",
    },
  ],
  stackNotes: [
    {
      heading: "HubSpot as the BD system of record",
      body: "Corporate desks often live in HubSpot before Clio because the sale is relationship led. We keep HubSpot as the marketing and BD truth until engagement letter, then stamp the Clio or LEAP matter reference.",
    },
    {
      heading: "Clio Manage and LEAP after instruction",
      body: "Matter open should not wipe source fields. Source_campaign and first_touch_channel become read-only at engagement so fee earners updating matter status cannot erase attribution.",
    },
    {
      heading: "LinkedIn Campaign Manager discipline",
      body: "Separate thought-leadership reach from high-intent conversation ads. Frequency caps protect partner brands. Soft PDF campaigns never become the primary optimisation goal.",
    },
  ],
  proof: [
    {
      client: "Mid-market commercial practice (anonymised)",
      anonymised: true,
      situation:
        "A mid-market corporate and commercial team generated LinkedIn leads that partners ignored, while Google brand defence had no offline engagement-letter signal.",
      built:
        "HubSpot proposal and engagement stages, LinkedIn role targeting against a named account list, and offline conversion upload on engagement letter signed with Clio matter references stamped after instruction.",
      results: [
        {
          metric: "LinkedIn leads reaching scoping call",
          before: "11%",
          after: "34%",
          window: "two quarters",
        },
        {
          metric: "Engagement letters with first-touch channel",
          before: "29%",
          after: "77%",
          window: "two quarters",
        },
        {
          metric: "Attribution window in measurement plan",
          after: "120 days",
          window: "design",
        },
      ],
      signedOff: false,
    },
  ],
  faqs: [
    {
      q: "Is corporate law marketing the same as employment marketing?",
      a: "No. Employment mixes consumer claimants with HR buyers. Corporate and commercial is almost entirely role-based B2B with longer cycles.",
    },
    {
      q: "Should we still run Google Ads?",
      a: "Yes for brand and high-intent commercial queries, but expect LinkedIn and referral to carry more engagement letters.",
    },
    {
      q: "What conversion should ads use?",
      a: "Engagement letter signed, or qualified scoping completed as a secondary learning event.",
    },
    {
      q: "Do you need Clio if HubSpot runs BD?",
      a: "You need a matter system eventually. HubSpot can own pre-engagement stages if matter references write back after instruction.",
    },
    {
      q: "How big should the LinkedIn account list be?",
      a: "Often 150 to 400 named companies for a regional commercial practice. Larger usually means a fuzzy ICP.",
    },
    {
      q: "Where does this sit relative to the legal pillar?",
      a: "It is a practice sub-vertical under legal and solicitors, sharing firm infrastructure patterns with a different demand system.",
    },
  ],
  relatedIndustries: [
    {
      slug: "legal-solicitors",
      why: "Parent pillar for multi-practice paid media and Clio/HubSpot architecture across the firm.",
    },
    {
      slug: "employment-law",
      why: "Employer-side employment often sells to the same founders and HR leaders as commercial counsel.",
    },
    {
      slug: "b2b-saas-and-platforms",
      why: "Commercial contracts and supplier disputes sit next to procurement buyers that platforms like Canopy also target.",
    },
  ],
  resourceSlugs: [
    "attribution-health-check",
    "offline-conversion-upload-template",
    "tender-hubspot-deal-pipeline",
  ],
  toolSlugs: [],
  blogTags: ["legal", "linkedin", "crm", "attribution"],
  moneyPages: [],
};

export default corporateCommercialLaw;
