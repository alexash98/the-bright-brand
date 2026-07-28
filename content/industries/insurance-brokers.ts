import type { Industry } from "@/content/types";

const insuranceBrokers: Industry = {
  slug: "insurance-brokers",
  name: "Insurance brokers",
  parent: "commercial-insurance",
  type: "sub",
  metaTitle: "Insurance Broker Marketing Agency | Bright Brand",
  metaDescription:
    "Marketing for commercial insurance brokers: Google Ads by product and trade, call tracking, and attribution from enquiry to quote and bind.",
  intro:
    "Commercial broker marketing collapses when every product shares one 'business insurance' campaign and one form conversion. Handlers want trade-fit risks they can quote. We rebuild search by product family, put call tracking on quote paths, and upload quote presented and policy bound so bidding learns from work you actually place.",
  heroVisual: {
    eyebrow: "Broker desk snapshot",
    title: "What commercial desks track",
    stats: [
      { value: "1–6 wk", label: "Typical SME cycle" },
      { value: "Phone + quote", label: "Close channel" },
      { value: "Bound policy", label: "Real KPI" },
      { value: "By product", label: "Campaign unit" },
    ],
    charts: [
      {
        title: "Where broker desks stall",
        caption:
          "Illustrative industry model for commercial broker funnels, not a client result.",
        bars: [
          { label: "Wrong-trade enquiry", value: 36, display: "36%" },
          { label: "Quote lag", value: 26, display: "26%" },
          { label: "Quote to bind", value: 24, display: "24%" },
          { label: "Renewal miss", value: 14, display: "14%" },
        ],
      },
    ],
  },
  insightCharts: [
    {
      title: "Buyer role mix (model)",
      caption:
        "Illustrative industry model of commercial broker buyers, not a client result.",
      bars: [
        { label: "Owner-director", value: 38, display: "38%" },
        { label: "Finance / ops", value: 28, display: "28%" },
        { label: "Contracts / PM", value: 20, display: "20%" },
        { label: "Other", value: 14, display: "14%" },
      ],
    },
    {
      title: "Enquiry source mix (model)",
      caption:
        "Illustrative industry model of broker enquiry sources, not a client result.",
      bars: [
        { label: "Paid search", value: 46, display: "46%" },
        { label: "Renewal book", value: 22, display: "22%" },
        { label: "Referral", value: 18, display: "18%" },
        { label: "Other", value: 14, display: "14%" },
      ],
    },
  ],
  marketStats: [
    {
      value: "FCA FRN",
      label: "Intermediary authorisation for UK ads verification",
      source: "Illustrative model / FCA register prep",
    },
    {
      value: "1–6 wk",
      label: "Typical SME liability quote to bind",
      source: "Illustrative model",
    },
    {
      value: "Phone-heavy",
      label: "Share of high-intent commercial enquiries",
      source: "Illustrative model",
    },
    {
      value: "Trade-split",
      label: "Campaign structure that protects specialty",
      source: "Illustrative model",
    },
  ],
  audience: [
    {
      role: "SME owner-director",
      share: "36%",
      note: "Needs certificates fast; intolerant of consumer comparison journeys.",
    },
    {
      role: "Finance manager",
      share: "26%",
      note: "Compares brokers on wording, service and renewal discipline.",
    },
    {
      role: "Contractor / contracts manager",
      share: "22%",
      note: "Project-driven liability and contract works; seasonal spikes.",
    },
    {
      role: "Professional services principal",
      share: "16%",
      note: "PI-led; higher consideration and clearer appetite boundaries.",
    },
  ],
  enquiryTiming: {
    title: "When broker enquiries land (model)",
    caption:
      "Illustrative industry model of commercial broker enquiry timing, not a client result.",
    bars: [
      { label: "Mon–Tue morning", value: 40, display: "40%" },
      { label: "Midweek", value: 28, display: "28%" },
      { label: "Thu–Fri", value: 22, display: "22%" },
      { label: "Out of hours", value: 10, display: "10%" },
    ],
  },
  cycleTiming: {
    title: "Enquiry to bind (model)",
    caption:
      "Illustrative industry model of broker cycle bands, not a client result.",
    bars: [
      { label: "Same week", value: 24, display: "24%" },
      { label: "1–3 weeks", value: 36, display: "36%" },
      { label: "3–6 weeks", value: 26, display: "26%" },
      { label: "6+ weeks", value: 14, display: "14%" },
    ],
  },
  scatterCharts: [
    {
      title: "Product family value vs speed (model)",
      caption:
        "Illustrative industry model for broker product lines. Not a client result.",
      xLabel: "Speed to quote (relative, faster left)",
      yLabel: "Premium opportunity (relative)",
      points: [
        { x: 20, y: 22, label: "SME package" },
        { x: 28, y: 40, label: "Contractors PL" },
        { x: 40, y: 55, label: "PI" },
        { x: 52, y: 48, label: "Property" },
        { x: 65, y: 70, label: "Construction" },
        { x: 35, y: 32, label: "Cyber SME" },
        { x: 58, y: 60, label: "Motor trade" },
        { x: 72, y: 78, label: "Complex liability" },
      ],
    },
  ],
  targetingNotes: [
    {
      heading: "FCA register for intermediary checks",
      body: "Confirm FRN and permissions before scaling Google Ads Financial services verification. Useful also for competitor and partner mapping. Outreach-list brands are never named as clients.",
    },
    {
      heading: "Google Ads trade keyword architecture",
      body: "Split contractors' liability, PI, commercial property and controlled SME package intent. Personal-lines negatives are non-negotiable. Landing pages ask trade, employees or turnover band, and renewal timing early.",
    },
    {
      heading: "LinkedIn and Apollo for broker BDMs",
      body: "For growth teams selling into trades, Apollo and LinkedIn help BDMs build director lists by SIC. Paid LinkedIn is usually secondary to search for commodity SME liability.",
    },
  ],
  pipelineStages: [
    { name: "Enquiry / appetite check", note: "Trade, sector and cover need captured" },
    { name: "Quote / terms presented", note: "Broker markets to underwriters" },
    { name: "Client review", note: "Comparison and cover adjustment" },
    { name: "Policy bound", note: "Primary offline conversion for search" },
    { name: "Renewal window", note: "Retention cycle; separate pipeline path" },
  ],
  pipelineShape: [
    {
      heading: "Desk reality from enquiry to bind",
      body: "Commercial broker journeys run enquiry, triage by trade and product, quote to markets or binder, quote presented, negotiation, bound. Same-week cycles exist for straightforward SME liability; complex risks take longer. Renewal book work needs different marketing logic from new business. Form volume without quote-to-bind visibility will always mislead the board.",
    },
    {
      heading: "Where broker desks leak",
      body: "Consumer or wrong-trade clicks hit the commercial queue. Phone quotes never meet the CRM with click IDs. Every product shares one conversion action, so Smart Bidding chases the cheapest liability form. Renewals never sync into HubSpot, so marketing cannot see the book.",
    },
    {
      heading: "Construction-trade crossover",
      body: "A large share of UK commercial intent is contractor-led. Landing paths should speak to trade, certificate speed and cover notes without inventing underwriting claims. That is why this sub links to construction.",
    },
  ],
  infrastructure: [
    {
      heading: "CRM fields handlers will use",
      body: "Whether you run Applied, Acturis, HubSpot or a hybrid, marketing needs trade, product_line, limit_band, renewal_date, quote_status and bind_status. Stages: enquiry, qualified risk, quote requested, quote presented, bound, lost.",
    },
    {
      heading: "Click to quote to bind",
      body: "Server-side tagging where needed, call tracking on high-intent pages, offline upload for quote_presented and policy_bound. Board packs show cost per qualified risk and cost per bind by product line.",
    },
    {
      heading: "Financial services advertising constraints",
      body: "Insurance sits inside Google Ads Financial products and services policy and UK Financial services verification. VERIFY: confirm the firm's FCA permissions and whether Bright Brand must be listed as an approved third party before spend scales.",
    },
  ],
  stackNotes: [
    {
      heading: "Broker management systems plus marketing CRM",
      body: "Policy admin is rarely a marketing database. Sync bind and renewal events into HubSpot or a warehouse layer. Upload quote_id, bind_date and product_line. Keep schedule detail out of ad platforms.",
    },
    {
      heading: "Call tracking on quote routes",
      body: "Dynamic numbers must write into the same enquiry record as gclid and trade. Otherwise Google under-learns phone-led commercial traffic.",
    },
    {
      heading: "Product-line conversion suffixes",
      body: "Even when budgets are shared, keep conversion action naming product-specific so PI and contractors' liability can be studied separately.",
    },
  ],
  proof: [
    {
      client: "UK regional commercial broker",
      anonymised: true,
      situation:
        "A regional commercial broker ran blended business-insurance Google Ads. Handlers reported consumer and wrong-trade waste. Bound policies could not be traced to campaigns.",
      built:
        "Method build: product-family campaigns for contractors' liability and PI, CRM fields for trade and quote_status, call tracking, offline conversion for quote_presented and policy_bound. Freedom Insurance is the named proof on the commercial insurance hub; this page keeps the operating method concrete without inventing GWP figures.",
      results: [
        {
          metric: "Product families with separate structure",
          after: "3",
          window: "account rebuild",
        },
        {
          metric: "Qualification fields on paid paths",
          after: "4",
          window: "build",
        },
        {
          metric: "Offline conversion events",
          after: "2",
          window: "measurement plan",
        },
      ],
      signedOff: false,
    },
  ],
  faqs: [
    {
      q: "Do you market personal lines too?",
      a: "This page is commercial. Mixed brokers should separate consumer intents so they cannot train commercial bidding.",
    },
    {
      q: "What should Google optimise for?",
      a: "Qualified commercial enquiry at minimum, quote presented when volume allows, bind uploaded for learning.",
    },
    {
      q: "How important is call tracking?",
      a: "Critical on liability and PI paths. Many commercial buyers still call.",
    },
    {
      q: "Can you name insurance clients?",
      a: "Yes. Freedom Insurance is the named commercial insurance proof on the parent hub. This page keeps method detail for broker desks without inventing GWP or CPA figures.",
    },
    {
      q: "How long until attribution is trustworthy?",
      a: "Two to four weeks for enquiry and quote QA. Bind-level confidence needs a longer specialty-aware window.",
    },
    {
      q: "Do you handle FCA verification?",
      a: "We prepare the checklist with the firm. Permissions and registry details come from the regulated entity.",
    },
  ],
  relatedIndustries: [
    {
      slug: "commercial-insurance",
      why: "Parent pillar for commercial insurance marketing systems across broker and specialty motions.",
    },
    {
      slug: "specialty-commercial-lines",
      why: "Longer-cycle specialty placements need different keyword thinness and attribution windows than SME broker desks.",
    },
    {
      slug: "construction",
      why: "Contractors are a core enquiry set for many UK commercial books; trade language and phone response matter.",
    },
  ],
  resourceSlugs: [
    "attribution-health-check",
    "offline-conversion-upload-template",
    "negative-keyword-starter-lists",
    "ga4-enquiry-event-schema",
  ],
  toolSlugs: [],
  blogTags: ["google-ads", "attribution", "call-tracking", "crm"],
  moneyPages: [],
};

export default insuranceBrokers;
