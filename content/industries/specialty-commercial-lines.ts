import type { Industry } from "@/content/types";

const specialtyCommercialLines: Industry = {
  slug: "specialty-commercial-lines",
  name: "Specialty commercial lines",
  parent: "commercial-insurance",
  type: "sub",
  metaTitle: "Specialty Commercial Insurance Marketing | Bright Brand",
  metaDescription:
    "Marketing for specialty commercial lines: thin-volume search, longer quote cycles, call-led enquiry capture and bind-level attribution.",
  intro:
    "Specialty commercial lines cannot be run like SME package insurance. Keyword volume is thin, placements take longer, and a single wrong-appetite enquiry wastes specialist time. We build narrow search and landing paths around appetite, capture phone-led risks with call tracking, and measure quote and bind over windows long enough for complex submissions.",
  heroVisual: {
    eyebrow: "Specialty snapshot",
    title: "What specialty desks track",
    stats: [
      { value: "4–20 wk", label: "Typical cycle" },
      { value: "Phone + submission", label: "Close path" },
      { value: "Bound / declined", label: "Real KPI" },
      { value: "Appetite-first", label: "Campaign rule" },
    ],
    charts: [
      {
        title: "Where specialty placements stall",
        caption:
          "Illustrative industry model for specialty commercial lines, not a client result.",
        bars: [
          { label: "Appetite mismatch", value: 34, display: "34%" },
          { label: "Market submission lag", value: 28, display: "28%" },
          { label: "Quote negotiation", value: 22, display: "22%" },
          { label: "Bind documentation", value: 16, display: "16%" },
        ],
      },
    ],
  },
  insightCharts: [
    {
      title: "Buyer seniority mix (model)",
      caption:
        "Illustrative industry model of specialty insurance buyers, not a client result.",
      bars: [
        { label: "Risk / insurance manager", value: 32, display: "32%" },
        { label: "FD / director", value: 28, display: "28%" },
        { label: "Broker of record", value: 22, display: "22%" },
        { label: "Project / other", value: 18, display: "18%" },
      ],
    },
    {
      title: "Channel mix for specialty (model)",
      caption:
        "Illustrative industry model of specialty enquiry sources, not a client result.",
      bars: [
        { label: "Paid + brand search", value: 36, display: "36%" },
        { label: "Broker relationships", value: 28, display: "28%" },
        { label: "Referral / network", value: 20, display: "20%" },
        { label: "LinkedIn / other", value: 16, display: "16%" },
      ],
    },
  ],
  marketStats: [
    {
      value: "4–20 wk",
      label: "Typical complex placement cycle",
      source: "Illustrative model",
    },
    {
      value: "Thin volume",
      label: "Specialty keyword demand vs SME package",
      source: "Illustrative model",
    },
    {
      value: "High touch",
      label: "Specialist time per qualified risk",
      source: "Illustrative model",
    },
    {
      value: "Appetite-led",
      label: "Qualification rule before media scale",
      source: "Illustrative model",
    },
  ],
  audience: [
    {
      role: "Risk / insurance manager",
      share: "30%",
      note: "Owns complex placements; cares about wording, markets and claims handling, not price alone.",
    },
    {
      role: "Finance director",
      share: "26%",
      note: "Budget and broker panel decisions; longer evaluation on higher limits.",
    },
    {
      role: "Wholesale / retail broker",
      share: "24%",
      note: "Challenge and placement dynamics; marketing must respect distribution relationships.",
    },
    {
      role: "Project or contracts lead",
      share: "20%",
      note: "Construction and specialty project risks with sharp certificate deadlines.",
    },
  ],
  enquiryTiming: {
    title: "When specialty enquiries arrive (model)",
    caption:
      "Illustrative industry model of specialty enquiry timing, not a client result.",
    bars: [
      { label: "Tue–Thu daytime", value: 44, display: "44%" },
      { label: "Monday", value: 20, display: "20%" },
      { label: "Friday", value: 22, display: "22%" },
      { label: "Project spikes", value: 14, display: "14%" },
    ],
  },
  cycleTiming: {
    title: "Enquiry to bind (model)",
    caption:
      "Illustrative industry model of specialty cycle bands, not a client result.",
    bars: [
      { label: "Under 4 weeks", value: 12, display: "12%" },
      { label: "4–8 weeks", value: 30, display: "30%" },
      { label: "8–16 weeks", value: 36, display: "36%" },
      { label: "16+ weeks", value: 22, display: "22%" },
    ],
  },
  scatterCharts: [
    {
      title: "Complexity vs premium opportunity (model)",
      caption:
        "Illustrative industry model for specialty lines. Not a client result.",
      xLabel: "Placement complexity (relative)",
      yLabel: "Premium opportunity (relative)",
      points: [
        { x: 30, y: 35, label: "Niche PI" },
        { x: 42, y: 48, label: "Cyber mid-market" },
        { x: 55, y: 62, label: "Construction specialty" },
        { x: 68, y: 74, label: "Complex liability" },
        { x: 80, y: 88, label: "High-limit property" },
        { x: 48, y: 40, label: "Directors & officers" },
        { x: 60, y: 58, label: "Marine / cargo niche" },
        { x: 72, y: 70, label: "Political / contingency" },
      ],
    },
  ],
  targetingNotes: [
    {
      heading: "Appetite-first keyword and negative design",
      body: "Specialty search lives or dies on negatives and query review. Build from appetite notes, not from a generic business insurance list. Decline trades become negative themes before spend scales.",
    },
    {
      heading: "FCA register and distribution maps",
      body: "Use FCA intermediary data to understand retail versus wholesale paths. Do not invent authorisation language in ads. VERIFY: confirm which permissions cover the specialty classes you promote.",
    },
    {
      heading: "LinkedIn for risk manager roles",
      body: "For higher-limit and wholesale-influenced classes, LinkedIn role targeting against risk managers and FDs can support brand and thought leadership. It rarely replaces high-intent search capture.",
    },
  ],
  pipelineStages: [
    { name: "Enquiry / risk submission", note: "Complex class; appetite check first" },
    { name: "Underwriter referral", note: "Wholesale or MGA market cycle" },
    { name: "Terms / quote issued", note: "Limits, endorsements and premium" },
    { name: "Negotiation", note: "Broker and underwriter adjustment loop" },
    { name: "Policy bound", note: "Offline conversion; longer lookback window" },
  ],
  pipelineShape: [
    {
      heading: "Submission reality, not form theatre",
      body: "Specialty journeys run enquiry, appetite check, information request, market submission, quote, negotiation, bind or decline. Weeks to months are normal. Marketing that celebrates every form fill will drown underwriters and technicians in risks you will never place.",
    },
    {
      heading: "Where specialty pipelines leak",
      body: "Landing pages invite classes outside appetite. Phone submissions never hit the CRM. Attribution windows of thirty days erase binds that close in month four. Blended accounts let SME package volume steal budget from thin specialty terms that needed protection.",
    },
    {
      heading: "Phone is often the real form",
      body: "Complex buyers call. If call tracking is missing, your best specialty traffic looks invisible in Google Ads. Dynamic numbers on appetite-specific landing pages must write trade, class and gclid onto one enquiry record.",
    },
  ],
  infrastructure: [
    {
      heading: "Class and appetite fields",
      body: "CRM or broker system fields need class_of_business, appetite_fit, submission_status, quote_status, bind_status and decline_reason. Stages should expose information_requested and with_markets, not only enquiry and won.",
    },
    {
      heading: "Longer attribution windows",
      body: "Design 90 to 150 day views for specialty binds. Bid on qualified specialty enquiry or quote presented when bind volume is thin, and still upload binds for learning. Value rules stay internal when GWP is sensitive.",
    },
    {
      heading: "Policy-aware creative",
      body: "Stay inside Google Ads Financial products and services policy. Specialty claims about capacity or wording need compliance and underwriting sign-off. No invented market access language.",
    },
  ],
  stackNotes: [
    {
      heading: "Broker CRM plus specialty submission tools",
      body: "Submission trackers and binder portals often sit beside HubSpot or the broker management system. Marketing only needs commercially relevant stage events. Underwriting files stay out of ad audiences.",
    },
    {
      heading: "Call tracking as primary capture",
      body: "Pool numbers per specialty landing path. Whisper messages or CRM notes should capture class and limit band without dumping sensitive risk detail into Google.",
    },
    {
      heading: "Thin-volume campaign tactics",
      body: "Share budgets carefully, keep ad groups class-specific, use exact and phrase where volume allows, and protect brand. Performance Max is usually the wrong first move for specialty.",
    },
  ],
  proof: [
    {
      client: "UK specialty commercial desk",
      anonymised: true,
      situation:
        "A specialty desk shared budget with SME package campaigns. Thin specialty terms never gathered signal. Phone submissions were logged on paper pads, so paid search looked weak against the risks technicians actually wanted.",
      built:
        "Method build: appetite-led campaign and landing split, call tracking on specialty paths, CRM fields for class_of_business and appetite_fit, offline conversion for quote_presented and policy_bound with a 120-day view. Anonymised method proof only.",
      results: [
        {
          metric: "Specialty classes with dedicated landing paths",
          after: "4",
          window: "rebuild",
        },
        {
          metric: "Call enquiries written to CRM with class",
          after: "tracked",
          window: "implementation",
        },
        {
          metric: "Bind attribution window",
          after: "120 days",
          window: "measurement plan",
        },
      ],
      signedOff: false,
    },
  ],
  faqs: [
    {
      q: "How is specialty different from SME broker marketing?",
      a: "Thinner search volume, longer cycles, stricter appetite qualification and heavier phone-led submission behaviour. Blending with package intent usually starves specialty.",
    },
    {
      q: "Should we use broad match?",
      a: "Rarely at the start. Specialty accounts need tight query control until conversion quality is proven.",
    },
    {
      q: "What is the primary conversion?",
      a: "Qualified specialty enquiry or quote presented. Upload binds for learning even when bind volume is too low for primary bidding.",
    },
    {
      q: "Is LinkedIn useful?",
      a: "As support for risk-manager brand and content, yes. As the sole acquisition engine for specialty placements, rarely.",
    },
    {
      q: "Can you publish GWP results?",
      a: "Not without a signed-off client and approved figures. This page uses anonymised method proof only.",
    },
    {
      q: "How do decline reasons help media?",
      a: "They become negatives, landing clarifications and sales feedback loops so you stop buying risks you will never write.",
    },
  ],
  relatedIndustries: [
    {
      slug: "commercial-insurance",
      why: "Parent pillar for commercial insurance demand systems across broker and specialty desks.",
    },
    {
      slug: "insurance-brokers",
      why: "Sibling SME and multi-product broker motion with faster cycles and higher search volume.",
    },
    {
      slug: "construction",
      why: "Construction specialty and contract works risks are a recurring appetite cluster with phone-led urgency.",
    },
  ],
  resourceSlugs: [
    "attribution-health-check",
    "offline-conversion-upload-template",
    "negative-keyword-starter-lists",
  ],
  toolSlugs: [],
  blogTags: ["google-ads", "call-tracking", "attribution", "offline-conversions"],
  moneyPages: [],
};

export default specialtyCommercialLines;
