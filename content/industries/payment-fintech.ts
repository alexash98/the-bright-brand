import type { Industry } from "@/content/types";

const paymentFintech: Industry = {
  slug: "payment-fintech",
  name: "Payment and fintech",
  parent: "wealth-management",
  type: "sub",
  metaTitle: "Payment & Fintech B2B Marketing | Bright Brand",
  metaDescription:
    "B2B marketing for payment and fintech vendors: LinkedIn and outbound into multi-stakeholder evaluations, with HubSpot or Salesforce stages measured in quarters.",
  intro:
    "Payment and fintech B2B marketing is a procurement-shaped sale wearing a finance badge. Security questionnaires, legal review and multi-quarter evaluations kill SaaS demo funnels. We build LinkedIn and outbound against treasury, finance and product roles, CRM stages that survive security review, and attribution that waits for closed revenue rather than a whitepaper lead.",
  heroVisual: {
    eyebrow: "Fintech snapshot",
    title: "What payment vendors track",
    stats: [
      { value: "3–9 mo", label: "Typical cycle" },
      { value: "Outbound + LI", label: "Primary channels" },
      { value: "Closed ARR", label: "Real KPI" },
      { value: "Security gate", label: "Common stall" },
    ],
    charts: [
      {
        title: "Where fintech deals stall",
        caption:
          "Illustrative industry model for payment and fintech B2B sales, not a client result.",
        bars: [
          { label: "Security questionnaire", value: 34, display: "34%" },
          { label: "Multi-stakeholder review", value: 28, display: "28%" },
          { label: "Commercial negotiation", value: 22, display: "22%" },
          { label: "Legal / procurement", value: 16, display: "16%" },
        ],
      },
    ],
  },
  insightCharts: [
    {
      title: "Buying committee mix (model)",
      caption:
        "Illustrative industry model of payment and fintech buying roles, not a client result.",
      bars: [
        { label: "Finance / treasury", value: 30, display: "30%" },
        { label: "Product / payments lead", value: 26, display: "26%" },
        { label: "IT / security", value: 24, display: "24%" },
        { label: "Procurement / legal", value: 20, display: "20%" },
      ],
    },
    {
      title: "Marketing payback months (model)",
      caption:
        "Illustrative industry model of payback on fintech B2B spend, not a client result.",
      bars: [
        { label: "0–3 months", value: 10, display: "10%" },
        { label: "3–6 months", value: 26, display: "26%" },
        { label: "6–12 months", value: 40, display: "40%" },
        { label: "12+ months", value: 24, display: "24%" },
      ],
    },
  ],
  marketStats: [
    {
      value: "3–9 mo",
      label: "Typical B2B evaluation for payment tooling",
      source: "Illustrative model",
    },
    {
      value: "4–7",
      label: "Stakeholders before signature",
      source: "Illustrative model",
    },
    {
      value: "Thin search",
      label: "Category demand vs contract value",
      source: "Illustrative model",
    },
    {
      value: "Security-first",
      label: "Dominant late-stage gate",
      source: "Illustrative model",
    },
  ],
  audience: [
    {
      role: "Head of Payments / Treasury",
      share: "28%",
      note: "Owns vendor shortlist for rails, orchestration or treasury tooling.",
    },
    {
      role: "CFO / Finance Director",
      share: "22%",
      note: "Commercial and risk sign-off; cares about controls and ROI narrative.",
    },
    {
      role: "CISO / IT security",
      share: "20%",
      note: "Questionnaire and architecture veto; marketing must not oversell integrations.",
    },
    {
      role: "Product / engineering lead",
      share: "18%",
      note: "API quality and roadmap fit; engages with technical content more than brand ads.",
    },
    {
      role: "Procurement",
      share: "12%",
      note: "Runs RFP mechanics; same committee habits as supplier platform sales.",
    },
  ],
  enquiryTiming: {
    title: "When fintech conversations open (model)",
    caption:
      "Illustrative industry model of payment and fintech enquiry timing, not a client result.",
    bars: [
      { label: "Tue–Thu mornings", value: 42, display: "42%" },
      { label: "Mon / Fri", value: 24, display: "24%" },
      { label: "Afternoons", value: 24, display: "24%" },
      { label: "Events / spikes", value: 10, display: "10%" },
    ],
  },
  cycleTiming: {
    title: "First touch to closed revenue (model)",
    caption:
      "Illustrative industry model of payment fintech cycle bands, not a client result.",
    bars: [
      { label: "Under 3 months", value: 14, display: "14%" },
      { label: "3–6 months", value: 32, display: "32%" },
      { label: "6–9 months", value: 34, display: "34%" },
      { label: "9+ months", value: 20, display: "20%" },
    ],
  },
  scatterCharts: [
    {
      title: "ARR vs security friction (model)",
      caption:
        "Illustrative industry model for payment and fintech segments. Not a client result.",
      xLabel: "Security / legal friction (relative)",
      yLabel: "ARR opportunity (relative)",
      points: [
        { x: 25, y: 28, label: "SMB tooling" },
        { x: 40, y: 42, label: "Mid-market orchestration" },
        { x: 55, y: 58, label: "Treasury add-on" },
        { x: 68, y: 72, label: "Bank / regulated" },
        { x: 80, y: 85, label: "Enterprise rails" },
        { x: 48, y: 36, label: "API-first startup" },
        { x: 60, y: 64, label: "Wealth-adjacent pay" },
        { x: 72, y: 70, label: "Cross-border" },
      ],
    },
  ],
  targetingNotes: [
    {
      heading: "LinkedIn and Apollo for finance roles",
      body: "Target Heads of Payments, Treasury, Finance Directors and CISOs with firmographic filters. Apollo-style enrichment helps outbound sequences stay role-specific. Suppress customers and open opportunities from HubSpot or Salesforce weekly.",
    },
    {
      heading: "Companies House for mid-market ICP",
      body: "Size and SIC filters find finance-heavy mid-market buyers that will not appear on pure enterprise ABM lists. Useful for domain infrastructure and matched audiences.",
    },
    {
      heading: "FCA context without overclaiming",
      body: "If you are regulated or sell into regulated firms, keep permissions language accurate. Do not invent FRN claims in ads. VERIFY: confirm which Financial products and services policy lines apply to your exact offer before Google spend scales.",
    },
  ],
  pipelineStages: [
    { name: "Target account identified", note: "ICP fit; outbound or LinkedIn sourced" },
    { name: "Discovery / demo", note: "Sales-accepted meeting with economic buyer" },
    { name: "Technical / security review", note: "Common stall on regulated buyers" },
    { name: "Commercial negotiation", note: "Pricing, SLA and integration scope" },
    { name: "Closed-won ARR", note: "Offline conversion for LinkedIn and outbound" },
  ],
  pipelineShape: [
    {
      heading: "Procurement mechanics in a fintech wrapper",
      body: "Deals typically run target account researched, connected, meeting booked, technical deep-dive, security questionnaire, commercial proposal, legal, closed won or lost. Cycles of three to nine months are normal. Search demand is small relative to contract value. Outbound and LinkedIn must share messaging with paid search, or the brand contradicts itself in the same buying committee.",
    },
    {
      heading: "Where payment pipelines leak",
      body: "Security questionnaires stall without a CRM stage, so forecasts stay green while deals are dead. Demo forms train Google while sales only cares about security-passed opportunities. Outbound replies die in shared inboxes instead of HubSpot deal objects with click IDs intact.",
    },
    {
      heading: "Wealth-adjacent crossover",
      body: "When payment tooling sits beside wealth or advice groups, buyers still evaluate like procurement software customers, not like retail advice prospects. Borrow stage design and LinkedIn discipline from supplier management motions rather than copying consumer payment ads.",
    },
  ],
  infrastructure: [
    {
      heading: "CRM stages that include security",
      body: "HubSpot or Salesforce stages must include security_review and legal_review explicitly. Required properties: estimated_arr, erp_or_core_banking_context, security_status, buying_roles. Company hierarchies matter for group treasury versus subsidiary buyers.",
    },
    {
      heading: "Offline conversion on closed ARR",
      body: "Upload closed or committed ARR with original GCLID. Mid-funnel events such as security_passed can carry lower expected values so learning continues while enterprise deals are open. Lookbacks must respect multi-quarter cycles.",
    },
    {
      heading: "Blended board reporting",
      body: "Show spend, meetings, stage survival through security, and closed pipeline value in one view. Channel vanity metrics without security-pass rates will mislead the board.",
    },
  ],
  stackNotes: [
    {
      heading: "HubSpot or Salesforce as system of record",
      body: "Growth fintech vendors often run HubSpot; larger platforms lean Salesforce. Stage logic matters more than the logo. Avoid a second marketing-only CRM that sales ignores.",
    },
    {
      heading: "Buyer-side ERP and core systems",
      body: "Buyers judge fit against SAP, Microsoft Dynamics, core banking or existing payment stacks they will not rip out. Capture that context as company properties for messaging and segmentation.",
    },
    {
      heading: "Outbound infrastructure",
      body: "Authenticated domains, warm-up, sequenced tests and CRM suppression are mandatory at volume. LinkedIn connection and meeting outcomes must write back to the same deal object as email replies.",
    },
  ],
  proof: [
    {
      client: "UK B2B payments platform",
      anonymised: true,
      situation:
        "A B2B payments vendor was optimising LinkedIn and search to demo forms while sales only progressed opportunities that cleared security review. HubSpot stages skipped straight from meeting to proposal.",
      built:
        "Method build: HubSpot stages including security_review, LinkedIn and outbound aimed at treasury and payments titles, offline conversion plan for security_passed and closed_arr. Anonymised method proof only; no named client is published on this page.",
      results: [
        {
          metric: "CRM stages including security and legal",
          after: "8",
          window: "implementation",
        },
        {
          metric: "Outbound + LinkedIn ICP title groups",
          after: "4",
          window: "first 45 days",
        },
        {
          metric: "Attribution window for closed ARR",
          after: "270 days",
          window: "measurement plan",
        },
      ],
      signedOff: false,
    },
  ],
  faqs: [
    {
      q: "Is this the same as consumer payment marketing?",
      a: "No. This page is B2B evaluation into finance, treasury and product buyers. Consumer acquisition is a different problem.",
    },
    {
      q: "Why sit under wealth management?",
      a: "Many payment and fintech motions we see sit beside advice and wealth groups, and the CRM plus LinkedIn patterns transfer. The parent pillar is the wider map.",
    },
    {
      q: "Do you have a named fintech client?",
      a: "Not on this page. Proof stays anonymised method only until a published case is available.",
    },
    {
      q: "HubSpot or Salesforce?",
      a: "Whichever sales will update. Stages must include security and legal or forecasts are fiction.",
    },
    {
      q: "How long should attribution windows be?",
      a: "Plan for six to nine months, longer for bank-grade buyers. Stop uploading at demo request and Google never learns from revenue.",
    },
    {
      q: "Does procurement software experience help?",
      a: "Yes. Multi-stakeholder cycles, outbound at scale and offline conversion on closed ARR are the same discipline we use for supplier management platforms.",
    },
  ],
  relatedIndustries: [
    {
      slug: "wealth-management",
      why: "Parent pillar; payment tooling often sits beside advice and wealth technology stacks.",
    },
    {
      slug: "b2b-saas-and-platforms",
      why: "Evaluation length, security gates and LinkedIn-plus-outbound systems closely match supplier platform sales.",
    },
    {
      slug: "financial-advisers-ifas",
      why: "Adjacent regulated finance marketing with different buyer roles but shared compliance caution on claims.",
    },
  ],
  resourceSlugs: [
    "attribution-health-check",
    "offline-conversion-upload-template",
  ],
  toolSlugs: [],
  blogTags: ["linkedin", "outbound", "crm", "attribution"],
  moneyPages: [],
};

export default paymentFintech;
