import type { Industry } from "@/content/types";

const commercialInsurance: Industry = {
  slug: "commercial-insurance",
  name: "Commercial insurance",
  type: "pillar",
  metaTitle: "Commercial Insurance Marketing Agency | Bright Brand",
  metaDescription:
    "Marketing for commercial insurance brokers: Google Ads and attribution built around quoted risks and bound policies, not anonymous form fills.",
  intro:
    "Commercial insurance marketing is not consumer cover with longer forms. Brokers win on specialist wording, sector knowledge and speed to quote. We build search, tracking and reporting around quoted and bound work, with Freedom Insurance as the named proof and the compliance constraints of UK financial services advertising, not anonymous form fills.",
  heroVisual: {
    eyebrow: "Broker snapshot",
    title: "What commercial brokers track",
    stats: [
      { value: "1–8 wk", label: "Typical cycle" },
      { value: "Phone + quote", label: "Close channel" },
      { value: "Bound policy", label: "Real KPI" },
      { value: "By trade", label: "Campaign unit" },
    ],
    charts: [
      {
        title: "Where broker pipelines stall",
        caption:
          "Illustrative industry model for commercial insurance funnels, not a client result.",
        bars: [
          { label: "Wrong-trade enquiry", value: 32, display: "32%" },
          { label: "Quote lag", value: 28, display: "28%" },
          { label: "Quote to bind", value: 26, display: "26%" },
          { label: "Renewal miss", value: 14, display: "14%" },
        ],
      },
    ],
  },
  insightCharts: [
    {
      title: "Decision-maker age mix (model)",
      caption:
        "Illustrative industry model of commercial insurance buyers, not a client result.",
      bars: [
        { label: "30–39", value: 22, display: "22%" },
        { label: "40–49", value: 34, display: "34%" },
        { label: "50–59", value: 28, display: "28%" },
        { label: "60+", value: 16, display: "16%" },
      ],
    },
    {
      title: "Enquiry source mix (model)",
      caption:
        "Illustrative industry model of how broker enquiries typically arrive, not a client result.",
      bars: [
        { label: "Paid search", value: 44, display: "44%" },
        { label: "Renewal book", value: 24, display: "24%" },
        { label: "Referral / broker", value: 18, display: "18%" },
        { label: "Other", value: 14, display: "14%" },
      ],
    },
  ],
  marketStats: [
    {
      value: "Thousands",
      label: "UK FCA-registered commercial insurance intermediaries (order)",
      source: "Illustrative model from FCA register segments",
    },
    {
      value: "1–8 wk",
      label: "Typical SME quote to bind",
      source: "Illustrative model",
    },
    {
      value: "8–20 wk",
      label: "Specialty / complex placement cycle",
      source: "Illustrative model",
    },
    {
      value: "Trade-led",
      label: "Share of contractor and PI intent in many UK books",
      source: "Illustrative model",
    },
  ],
  audience: [
    {
      role: "Company director / owner-manager",
      share: "34%",
      note: "Buys package or liability cover under time pressure; phone-led; intolerant of consumer-style journeys.",
    },
    {
      role: "Finance / operations manager",
      share: "24%",
      note: "Compares brokers on speed, wording and certificate turnaround; often owns renewal diary.",
    },
    {
      role: "Project / contracts manager",
      share: "22%",
      note: "Construction and contractor risks; seasonal spikes when work is won; certificate urgency.",
    },
    {
      role: "Risk / compliance lead",
      share: "12%",
      note: "Specialty and higher-limit placements; longer evaluation and market submission cycles.",
    },
    {
      role: "Broker of record / introducer",
      share: "8%",
      note: "Challenge and panel dynamics; marketing must not poison wholesale relationships.",
    },
  ],
  enquiryTiming: {
    title: "When commercial enquiries land (model)",
    caption:
      "Illustrative industry model of broker enquiry timing across a typical week, not a client result.",
    bars: [
      { label: "Mon–Tue morning", value: 38, display: "38%" },
      { label: "Midweek daytime", value: 30, display: "30%" },
      { label: "Thu–Fri", value: 22, display: "22%" },
      { label: "Out of hours", value: 10, display: "10%" },
    ],
  },
  cycleTiming: {
    title: "Enquiry to bind (model)",
    caption:
      "Illustrative industry model of commercial insurance cycle bands, not a client result.",
    bars: [
      { label: "Same week", value: 22, display: "22%" },
      { label: "1–4 weeks", value: 34, display: "34%" },
      { label: "4–8 weeks", value: 26, display: "26%" },
      { label: "8+ weeks", value: 18, display: "18%" },
    ],
  },
  scatterCharts: [
    {
      title: "Product line value vs cycle length (model)",
      caption:
        "Illustrative industry model plotting relative premium opportunity against placement cycle. Not a client result.",
      xLabel: "Cycle length (relative)",
      yLabel: "Premium opportunity (relative)",
      points: [
        { x: 18, y: 24, label: "SME package" },
        { x: 28, y: 38, label: "Contractors PL/EL" },
        { x: 42, y: 52, label: "Professional indemnity" },
        { x: 55, y: 48, label: "Commercial property" },
        { x: 68, y: 72, label: "Construction specialty" },
        { x: 78, y: 80, label: "Complex liability" },
        { x: 35, y: 30, label: "Cyber SME" },
        { x: 60, y: 58, label: "Fleet / motor trade" },
      ],
    },
  ],
  targetingNotes: [
    {
      heading: "FCA register and broker firm lists",
      body: "Segment the FCA register for insurance intermediaries and appointed representatives, then layer Companies House turnover and geography. Useful for partnership BD, competitor mapping and Google Ads Financial services verification ownership checks, not for inventing client logos.",
    },
    {
      heading: "LinkedIn and Apollo for BDM roles",
      body: "For broker growth teams selling into trades, target company directors and contracts managers by SIC and headcount. Apollo-style enrichment helps BDMs build renewal-challenge lists; LinkedIn works for specialty and wholesale relationship plays more than for commodity SME liability.",
    },
    {
      heading: "Google Ads trade and product keywords",
      body: "Structure search around product families and trade language (contractors' liability, PI for consultants, contract works) with aggressive personal-lines negatives. Landing pages must ask trade, limit band and renewal timing early enough to protect the desk.",
    },
  ],
  pipelineStages: [
    { name: "Enquiry", note: "Trade and product line captured" },
    { name: "Qualified / appetite fit", note: "Handler decline themes applied" },
    { name: "Quote presented", note: "Learning event for paid media" },
    { name: "Negotiation", note: "Broker and underwriter loop" },
    { name: "Policy bound", note: "Offline conversion; longer lookback on specialty" },
  ],
  pipelineShape: [
    {
      heading: "How broker pipeline actually works",
      body: "Most commercial broker journeys run enquiry, triage by trade and product, quote request to markets or binder, quote presented, negotiation, then bound and in-force. Cycle length can be same-week for straightforward SME liability and many weeks for complex property, construction or specialty placements. Renewal book work sits beside new business and needs different marketing logic. Decision makers vary: company directors, finance managers, project managers on construction sites, and sometimes brokers of record fighting a challenge. Marketing that only celebrates form volume will miss the quote-to-bind drop where the commercial truth lives.",
    },
    {
      heading: "Where enquiries leak",
      body: "Leak one: Google sends consumer or wrong-trade enquiries into a commercial desk. Leak two: phone quotes never hit the CRM with click IDs, so paid search under-reports. Leak three: every product shares one conversion action, so Smart Bidding chases the cheapest liability form while higher-value PI or construction risks starve. Leak four: renewal opportunities are invisible to marketing because the policy admin system never syncs renewals_due into HubSpot or the broker CRM. The board then cuts brand search to save money and wonders why inbound quality falls.",
    },
    {
      heading: "Crossover with construction and contracting",
      body: "A large share of commercial enquiry intent in the UK is trade and contractor led: public liability, employers' liability, contract works, plant, professional indemnity for consultants. That is why this pillar links to construction. The buyer language, seasonality around project wins, and the need for fast phone response look more like contractor acquisition than like retail insurance comparison. We structure campaigns and landing paths with those trades in mind rather than flattening everything into 'business insurance'.",
    },
  ],
  infrastructure: [
    {
      heading: "CRM fields brokers actually use",
      body: "Whether the firm runs Applied, Acturis, OpenGI adjacent processes, HubSpot, or a hybrid, marketing needs a working layer with trade, product_line, limit_band, renewal_date, quote_status and bind_status. Stages should read enquiry, qualified risk, quote requested, quote presented, bound, lost. If those fields live only in the broker management system, we sync or duplicate the commercially relevant events so ads and reporting can see them without exposing full underwriting files to ad platforms.",
    },
    {
      heading: "Attribution from click to bind",
      body: "The valuable events are qualified commercial enquiry, quote presented and bound policy. We implement server-side tagging where needed, call tracking on high-intent landing pages, and offline conversion upload for quote or bind events the firm agrees to share. Google Ads lookback windows must respect longer specialty cycles. Board reporting shows cost per qualified risk and cost per bind by product line, not a single blended CPL that hides specialty performance.",
    },
    {
      heading: "Financial services advertising constraints",
      body: "Insurance sits inside Google Ads Financial products and services policy. UK targeting also engages Financial services verification: advertisers need the appropriate UK FCA pathway, such as FRN-backed authorisation or an approved third-party or exemption route documented by Google. Landing pages need the disclosures that policy requires, including clear business identity and fee or status information where relevant. VERIFY: confirm the firm's exact FCA permissions and whether Bright Brand must be listed as an approved third party for the Google Ads account before spend scales. We will not invent authorisation language.",
    },
  ],
  stackNotes: [
    {
      heading: "Broker management systems versus marketing CRM",
      body: "Policy admin systems such as Applied, Acturis or OpenGI-adjacent processes are rarely friendly marketing databases. The practical pattern is HubSpot or another marketing CRM layer for campaigns, with bind and renewal events flowing back from the broker system on a scheduled job. We care about quote_id, bind_date, product_line and gross written premium bands for reporting. We do not push full schedule detail or personal sensitive risk data into Google Ads.",
    },
    {
      heading: "Product lines that need separate treatment",
      body: "SME packages, contractors' liability, professional indemnity, commercial property, cyber and specialty each deserve their own keyword groups, negatives and landing explanations. Blended 'business insurance' accounts train Google on the wrong trade mix. Where volume is thin, share a campaign but keep ad groups and conversion suffixes product-specific.",
    },
    {
      heading: "Call tracking on quote paths",
      body: "High-intent liability and PI buyers still call. Dynamic numbers on paid landing pages must write into the same enquiry record that holds gclid, trade and product_line, or Smart Bidding will under-learn your best traffic.",
    },
    {
      heading: "Specialty and wholesale tooling",
      body: "Specialty desks often run binder portals and market submission tools beside the CRM. Marketing only needs commercially relevant stage events (quote presented, bound, lost) and must not scrape underwriting files into ad audiences. See the specialty commercial lines sub-page for longer-cycle measurement.",
    },
  ],
  proof: [
    {
      client: "Freedom Insurance",
      anonymised: false,
      situation:
        "Freedom Insurance needed hands-on paid search ownership so return on ad spend was consistent, not sporadic. Managing Director Roland Gilliam's published feedback is that closer attention shifted the account from passive management to commercial care.",
      built:
        "Hands-on Google Ads ownership with product-aware structure, qualification discipline on commercial quote paths, and reporting judged on return on ad spend rather than vanity clicks. We do not invent GWP or bind-rate figures beyond what is published.",
      results: [
        {
          metric: "Product-line conversion actions configured",
          after: "2 (quote_presented, policy_bound)",
          window: "measurement plan",
        },
        {
          metric: "CRM required fields for paid enquiries",
          after: "6",
          window: "implementation",
        },
        {
          metric: "Campaign structure split by product family",
          after: "3 families",
          window: "account rebuild",
        },
      ],
      signedOff: true,
    },
  ],
  faqs: [
    {
      q: "Do you market personal lines as well as commercial?",
      a: "This pillar is commercial. Personal lines comparison behaviour and compliance packaging differ. If a mixed broker needs both, we separate accounts or campaign families so consumer intent cannot train commercial bidding.",
    },
    {
      q: "How do construction trades change the media plan?",
      a: "Contractor queries are project and compliance driven, often phone-led, with sharp seasonality when firms win work. Landing pages should speak to trade, CIS context where relevant, and certificate speed, not generic SME package copy.",
    },
    {
      q: "What conversion should Google optimise for?",
      a: "A qualified commercial enquiry at minimum, quote presented when volume allows, and bind uploaded offline for learning even if bind volume is too low for primary bidding. Form submit alone is not enough.",
    },
    {
      q: "Can you name insurance clients?",
      a: "Yes. Freedom Insurance is the named commercial insurance proof on this hub. We publish Roland Gilliam's testimonial and the operating method. We do not invent GWP or CPA figures that are not published.",
    },
    {
      q: "How long before attribution is trustworthy?",
      a: "Two to four weeks for click ID capture and quote event QA on an existing broker CRM. Bind-level learning needs a longer window because specialty cycles stretch past a default 30-day view.",
    },
    {
      q: "Do you handle FCA verification for Google Ads?",
      a: "We prepare the account and documentation checklist with the firm. The FCA permissions and registry details must come from the regulated entity. Agencies often need the approved third-party path if they operate the account.",
    },
  ],
  relatedIndustries: [
    {
      slug: "insurance-brokers",
      why: "Regional and national broker desks are the core buyer of this marketing system: product-split search, quote-to-bind attribution and FCA-aware ads.",
    },
    {
      slug: "specialty-commercial-lines",
      why: "Specialty and complex placements need longer attribution windows, thinner keyword volume and stricter appetite messaging than SME package work.",
    },
    {
      slug: "construction",
      why: "Contractors and consultants are a core commercial insurance buyer set. The same firms we market for in construction are often the enquiries brokers want more of, with phone-led, trade-specific intent.",
    },
    {
      slug: "legal-solicitors",
      why: "PI, litigation support and professional risk sit adjacent to legal marketing. High-intent search, compliance-constrained claims and long matter or policy cycles rhyme across both verticals.",
    },
  ],
  resourceSlugs: [
    "attribution-health-check",
    "offline-conversion-upload-template",
    "negative-keyword-starter-lists",
    "ga4-enquiry-event-schema",
  ],
  toolSlugs: [],
  blogTags: ["google-ads", "attribution", "offline-conversions", "crm", "call-tracking"],
  moneyPages: [],
};

export default commercialInsurance;
