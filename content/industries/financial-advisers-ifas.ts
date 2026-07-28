import type { Industry } from "@/content/types";

const financialAdvisersIfas: Industry = {
  slug: "financial-advisers-ifas",
  name: "Financial advisers and IFAs",
  parent: "wealth-management",
  type: "sub",
  metaTitle: "IFA & Financial Adviser Marketing | Bright Brand",
  metaDescription:
    "Marketing for IFAs and advice networks: LinkedIn demand, CRM stages for discovery and fact find, and automation inside FCA promotion limits.",
  intro:
    "IFA and advice-network marketing fails when LinkedIn and content are judged on downloads instead of discovery meetings. We build Salesforce or HubSpot stages around fact find and proposal, LinkedIn aimed at owners and referrers, and automation that stops where FCA financial promotions begin.",
  heroVisual: {
    eyebrow: "IFA snapshot",
    title: "What advice networks track",
    stats: [
      { value: "45–120 d", label: "Typical cycle" },
      { value: "Discovery", label: "Primary close" },
      { value: "Referrer + LI", label: "Demand mix" },
      { value: "Funds in", label: "Real KPI" },
    ],
    charts: [
      {
        title: "Where IFA journeys stall",
        caption:
          "Illustrative industry model for IFA and advice-network funnels, not a client result.",
        bars: [
          { label: "Soft lead no meeting", value: 34, display: "34%" },
          { label: "Fact find lag", value: 26, display: "26%" },
          { label: "Proposal delay", value: 24, display: "24%" },
          { label: "Awaiting funds", value: 16, display: "16%" },
        ],
      },
    ],
  },
  insightCharts: [
    {
      title: "Prospect age mix (model)",
      caption:
        "Illustrative industry model of IFA prospect demographics, not a client result.",
      bars: [
        { label: "35–44", value: 22, display: "22%" },
        { label: "45–54", value: 36, display: "36%" },
        { label: "55–64", value: 28, display: "28%" },
        { label: "65+", value: 14, display: "14%" },
      ],
    },
    {
      title: "Enquiry source mix (model)",
      caption:
        "Illustrative industry model of how IFA enquiries typically arrive, not a client result.",
      bars: [
        { label: "Professional referral", value: 32, display: "32%" },
        { label: "LinkedIn / content", value: 30, display: "30%" },
        { label: "Brand search", value: 22, display: "22%" },
        { label: "Events / other", value: 16, display: "16%" },
      ],
    },
  ],
  marketStats: [
    {
      value: "FCA FRN",
      label: "Authorisation evidence expected for UK ads verification",
      source: "Illustrative model / FCA register prep",
    },
    {
      value: "45–120 d",
      label: "Typical discovery to funded client",
      source: "Illustrative model",
    },
    {
      value: "2–4",
      label: "Advisers often involved before onboarding",
      source: "Illustrative model",
    },
    {
      value: "Referrer-heavy",
      label: "Share of quality pipeline from accountants and peers",
      source: "Illustrative model",
    },
  ],
  audience: [
    {
      role: "Owner-managed business director",
      share: "30%",
      note: "Pension and protection needs; often arrives via accountant introduction.",
    },
    {
      role: "Mass-affluent professional",
      share: "28%",
      note: "Responds to LinkedIn education and local brand search after a recommendation.",
    },
    {
      role: "Accountant / referrer",
      share: "22%",
      note: "Controls introductions; needs stay-in-touch nurture, not product performance claims.",
    },
    {
      role: "HR / workplace contact",
      share: "12%",
      note: "Employee benefits advice mandates; slower committee buying.",
    },
    {
      role: "Existing client household",
      share: "8%",
      note: "Cross-sell and life-event triggers; suppress from cold LinkedIn.",
    },
  ],
  enquiryTiming: {
    title: "When IFA enquiries arrive (model)",
    caption:
      "Illustrative industry model of IFA enquiry timing, not a client result.",
    bars: [
      { label: "Tue–Thu daytime", value: 42, display: "42%" },
      { label: "Monday", value: 20, display: "20%" },
      { label: "Friday", value: 22, display: "22%" },
      { label: "Evening / weekend", value: 16, display: "16%" },
    ],
  },
  cycleTiming: {
    title: "Enquiry to funded client (model)",
    caption:
      "Illustrative industry model of IFA cycle bands, not a client result.",
    bars: [
      { label: "Under 45 days", value: 16, display: "16%" },
      { label: "45–90 days", value: 38, display: "38%" },
      { label: "90–120 days", value: 28, display: "28%" },
      { label: "120+ days", value: 18, display: "18%" },
    ],
  },
  scatterCharts: [
    {
      title: "Segment value vs adviser effort (model)",
      caption:
        "Illustrative industry model for IFA segments. Not a client result.",
      xLabel: "Cycle / effort (relative)",
      yLabel: "AUM potential (relative)",
      points: [
        { x: 20, y: 22, label: "Protection-led" },
        { x: 32, y: 38, label: "Workplace" },
        { x: 45, y: 50, label: "Pension consol." },
        { x: 58, y: 62, label: "Director advice" },
        { x: 70, y: 74, label: "Exit planning" },
        { x: 40, y: 34, label: "Referrer intro" },
        { x: 55, y: 48, label: "Local brand" },
        { x: 78, y: 80, label: "Complex tax" },
      ],
    },
  ],
  targetingNotes: [
    {
      heading: "FCA register for firm and permission checks",
      body: "Use the FCA Financial Services Register to confirm advice permissions and FRN details before scaling Google Ads Financial services verification. The same list supports partnership targeting when you sell services into advice networks.",
    },
    {
      heading: "LinkedIn for owners and referrers",
      body: "Prioritise company directors, partners and accountants in defined postcode or turnover bands. Suppress clients and open opportunities from Salesforce or HubSpot so advisers are not paid to re-acquire people they already serve.",
    },
    {
      heading: "Apollo and Companies House for network BD",
      body: "Apollo-style enrichment helps map BDM and paraplanning roles inside larger networks. Companies House size filters keep owner-managed ICP lists honest. Outreach prospects are never described as Bright Brand clients.",
    },
  ],
  pipelineStages: [
    { name: "Enquiry / referral", note: "Web, introducer or existing client referral" },
    { name: "Initial meeting booked", note: "Discovery call or face-to-face" },
    { name: "Fact-find / suitability", note: "Compliance-gated; nurture stops if not owned" },
    { name: "Recommendation delivered", note: "Advice issued; product selection complete" },
    { name: "Client onboarded", note: "AUM or policy in force; CRM of record" },
  ],
  pipelineShape: [
    {
      heading: "How IFA pipelines actually move",
      body: "A typical journey is referral or LinkedIn first touch, discovery call, fact find, proposal or suitability, then funds and onboarding onto the advice platform. Cycles of 45 to 120 days are common for straightforward pensions work; exits and trust work run longer. Marketing owns meeting creation and enquiry quality. Advisers own suitability. CRM stages that jump from enquiry to client hide the fact-find bottleneck where most value leaks.",
    },
    {
      heading: "Where advice networks leak",
      body: "Soft ebook leads never reach an adviser calendar. Compliance holds creative while paid social keeps spending. Referrer programmes have no HubSpot or Salesforce ownership, so introductions die in inboxes. Paid media optimises to form fills because first_advice_meeting_held was never uploaded offline.",
    },
    {
      heading: "What marketing may own",
      body: "Education, discovery booking and referrer nurture sit with marketing. Personalised investment claims sit behind the firm's financial promotion approval path. We design automation stop conditions when an adviser takes ownership so clients are not dripped mid-suitability.",
    },
  ],
  infrastructure: [
    {
      heading: "CRM stages for advice, not SaaS",
      body: "Implement Salesforce or HubSpot stages such as enquiry, discovery booked, discovery completed, fact find in progress, proposal issued, awaiting funds and onboarded. Required fields: advice_segment, source_detail, adviser_owner, meeting_outcome, referrer_firm.",
    },
    {
      heading: "Attribution across advice cycles",
      body: "Set conversion actions on first qualified advice meeting and, where allowed, onboarded client events. Use 90 to 180 day windows. Server-side tagging and consent mode protect first-party signal. Board packs show meetings by segment, not vanity CPL.",
    },
    {
      heading: "FCA-aware paid media",
      body: "UK wealth advertisers sit under Google Ads Financial products and services policy and Financial services verification expecting FRN-backed authorisation or a documented exemption path. VERIFY: confirm live financial promotion approval steps with the client's compliance officer before ads or nurtures go live.",
    },
  ],
  stackNotes: [
    {
      heading: "Salesforce and HubSpot in advice networks",
      body: "Larger networks lean Salesforce for household objects; growth IFAs often prefer HubSpot speed. Stage names must match adviser language. Click IDs survive merge rules or offline upload fails at funds-in.",
    },
    {
      heading: "Advice platforms stay restricted",
      body: "Suitability and portfolio systems must not sync holdings into LinkedIn or Google. Marketing integrations only move meeting and onboarding events the DPO has approved.",
    },
    {
      heading: "Automation with compliance holds",
      body: "HubSpot or Salesforce workflows use approved content modules, compliance_hold status, and exit rules when opportunity_owner is an adviser. No unchecked performance claims in drips.",
    },
  ],
  proof: [
    {
      client: "UK multi-adviser IFA network",
      anonymised: true,
      situation:
        "A multi-adviser IFA network was judging LinkedIn on form fills while advisers only valued discovery meetings. Fact-find stages were missing from HubSpot, so forecasts oscillated.",
      built:
        "Method build: HubSpot stages for discovery through awaiting funds, LinkedIn audiences for directors and accountant referrers, offline conversion on first_advice_meeting_held with a 180-day view. Anonymised method proof only; no publishable AUM lift in the repo.",
      results: [
        {
          metric: "Advice journey stages in CRM",
          after: "7",
          window: "implementation",
        },
        {
          metric: "LinkedIn ICP segments",
          after: "3",
          window: "first 30 days",
        },
        {
          metric: "Meeting attribution window",
          after: "180 days",
          window: "measurement plan",
        },
      ],
      signedOff: false,
    },
  ],
  faqs: [
    {
      q: "Is Google Ads worth it for IFAs?",
      a: "Brand and selective high-intent terms can work once Financial services verification is complete. Many networks still get more incremental meetings from LinkedIn and referrer programmes than from non-brand search alone.",
    },
    {
      q: "HubSpot or Salesforce for an IFA firm?",
      a: "Use the system advisers will update. HubSpot is faster for marketing-led networks; Salesforce wins when household objects already live there.",
    },
    {
      q: "Can automation send investment performance claims?",
      a: "Only through the firm's approved financial promotion process. Default nurture stays educational and meeting-led.",
    },
    {
      q: "How do you treat accountant referrers?",
      a: "As a separate lifecycle with stay-in-touch content, event invites and clear introduction logging in the CRM, not as end-client drips.",
    },
    {
      q: "What proof can you show publicly?",
      a: "Anonymised method proof only until a named advice client is published. We will not invent FCA case metrics.",
    },
    {
      q: "How long until LinkedIn produces meetings?",
      a: "Plan 60 to 90 days of disciplined testing once CRM routing works. Shorter tests mostly measure curiosity, not adviser-ready conversations.",
    },
  ],
  relatedIndustries: [
    {
      slug: "wealth-management",
      why: "Parent pillar for advice, private client and fintech-adjacent motions sharing compliance-constrained demand systems.",
    },
    {
      slug: "private-client-wealth",
      why: "Higher-AUM private client work shares referrer dynamics but stretches household CRM and cycle length further.",
    },
    {
      slug: "legal-solicitors",
      why: "Private client solicitors and IFAs often serve the same households; trust cycles and compliance tone transfer.",
    },
  ],
  resourceSlugs: [
    "attribution-health-check",
    "offline-conversion-upload-template",
    "ga4-enquiry-event-schema",
  ],
  toolSlugs: [],
  blogTags: ["linkedin", "marketing-automation", "crm", "attribution"],
  moneyPages: [],
};

export default financialAdvisersIfas;
