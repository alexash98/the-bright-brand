import type { Industry } from "@/content/types";

const privateClientWealth: Industry = {
  slug: "private-client-wealth",
  name: "Private client wealth",
  parent: "wealth-management",
  type: "sub",
  metaTitle: "Private Client Wealth Marketing | Bright Brand",
  metaDescription:
    "Marketing for private client and discretionary wealth teams: household CRM, LinkedIn ABM, and long-cycle attribution to funded relationships.",
  intro:
    "Private client wealth marketing is a household sale, not a SaaS demo. Spouses, trustees and external counsel shape timing, and cycles often run past six months. We build Salesforce hierarchies for family relationships, LinkedIn against named professional networks, and attribution that waits for funds in rather than celebrating a whitepaper download.",
  heroVisual: {
    eyebrow: "Private client snapshot",
    title: "What discretionary teams track",
    stats: [
      { value: "90–240 d", label: "Typical cycle" },
      { value: "Relationship", label: "Close channel" },
      { value: "Funds in", label: "Real KPI" },
      { value: "Household CRM", label: "System need" },
    ],
    charts: [
      {
        title: "Where private client deals stall",
        caption:
          "Illustrative industry model for private client wealth funnels, not a client result.",
        bars: [
          { label: "Multi-party scheduling", value: 32, display: "32%" },
          { label: "Trust / legal review", value: 28, display: "28%" },
          { label: "Proposal iteration", value: 24, display: "24%" },
          { label: "Funding lag", value: 16, display: "16%" },
        ],
      },
    ],
  },
  insightCharts: [
    {
      title: "Decision influence mix (model)",
      caption:
        "Illustrative industry model of private client buying influence, not a client result.",
      bars: [
        { label: "Primary client", value: 34, display: "34%" },
        { label: "Spouse / family", value: 26, display: "26%" },
        { label: "Trustee / counsel", value: 22, display: "22%" },
        { label: "Accountant / other", value: 18, display: "18%" },
      ],
    },
    {
      title: "Marketing payback months (model)",
      caption:
        "Illustrative industry model of payback on private client marketing, not a client result.",
      bars: [
        { label: "0–6 months", value: 14, display: "14%" },
        { label: "6–12 months", value: 34, display: "34%" },
        { label: "12–18 months", value: 32, display: "32%" },
        { label: "18+ months", value: 20, display: "20%" },
      ],
    },
  ],
  marketStats: [
    {
      value: "90–240 d",
      label: "Typical first meeting to funded relationship",
      source: "Illustrative model",
    },
    {
      value: "3–6",
      label: "People influencing a complex mandate",
      source: "Illustrative model",
    },
    {
      value: "Low volume",
      label: "Search demand vs relationship value",
      source: "Illustrative model",
    },
    {
      value: "Referrer-led",
      label: "Dominant quality source for new mandates",
      source: "Illustrative model",
    },
  ],
  audience: [
    {
      role: "High-net-worth individual",
      share: "32%",
      note: "Primary mandate holder; responds to peer proof and discreet education, not loud performance ads.",
    },
    {
      role: "Spouse / family decision partner",
      share: "24%",
      note: "Often the scheduling bottleneck; CRM must model household, not a single lead.",
    },
    {
      role: "Trustee / family office contact",
      share: "20%",
      note: "Process-heavy evaluation; long security and suitability scrutiny.",
    },
    {
      role: "Private client solicitor",
      share: "14%",
      note: "Key referrer; needs professional nurture separate from consumer drips.",
    },
    {
      role: "Accountant / tax adviser",
      share: "10%",
      note: "Triggers around exits, inheritance and business sales.",
    },
  ],
  enquiryTiming: {
    title: "When private client conversations open (model)",
    caption:
      "Illustrative industry model of private client enquiry timing, not a client result.",
    bars: [
      { label: "Tue–Thu", value: 44, display: "44%" },
      { label: "Monday", value: 18, display: "18%" },
      { label: "Friday", value: 20, display: "20%" },
      { label: "Life-event spikes", value: 18, display: "18%" },
    ],
  },
  cycleTiming: {
    title: "First meeting to funds in (model)",
    caption:
      "Illustrative industry model of private client cycle bands, not a client result.",
    bars: [
      { label: "Under 90 days", value: 14, display: "14%" },
      { label: "90–180 days", value: 36, display: "36%" },
      { label: "180–240 days", value: 30, display: "30%" },
      { label: "240+ days", value: 20, display: "20%" },
    ],
  },
  scatterCharts: [
    {
      title: "Mandate value vs cycle length (model)",
      caption:
        "Illustrative industry model for private client segments. Not a client result.",
      xLabel: "Cycle length (relative)",
      yLabel: "Mandate value (relative)",
      points: [
        { x: 30, y: 35, label: "Liquid wealth" },
        { x: 45, y: 50, label: "Pension / SIPP" },
        { x: 60, y: 68, label: "Business exit" },
        { x: 72, y: 78, label: "Trust / estate" },
        { x: 82, y: 90, label: "Family office" },
        { x: 40, y: 42, label: "Solicitor intro" },
        { x: 55, y: 58, label: "Tax-triggered" },
        { x: 68, y: 70, label: "Cross-border" },
      ],
    },
  ],
  targetingNotes: [
    {
      heading: "Professional network lists",
      body: "Build named lists of private client solicitors, tax advisers and family office contacts from LinkedIn and Companies House officer data. Match to Salesforce accounts. This is ABM, not spray-and-pray lead gen.",
    },
    {
      heading: "FCA register for firm positioning",
      body: "Confirm permissions and FRN details for any paid financial promotions. Private client creative still sits under the firm's approval workflow even when Google verification is complete.",
    },
    {
      heading: "Apollo for partnership BD",
      body: "Use Apollo-style enrichment when you sell custody, platform or outsourcing services into wealth teams. Keep end-client prospecting on household CRM logic, not bulk B2B sequences.",
    },
  ],
  pipelineStages: [
    { name: "Enquiry / introduction", note: "Referral, event or inbound wealth query" },
    { name: "Discovery meeting", note: "Relationship partner qualifies household" },
    { name: "Wealth review / fact-find", note: "Compliance-gated suitability work" },
    { name: "Strategy agreed", note: "Investment mandate or service scope signed" },
    { name: "Assets onboarded", note: "Household value in CRM of record" },
  ],
  pipelineShape: [
    {
      heading: "Households, not leads",
      body: "Private client mandates move through introduction, exploratory meetings, multi-party fact find, proposal, legal or trustee review, then funding and onboarding. Decision makers are rarely solo. If the CRM stores one email as the opportunity, forecasting will lie and marketing will keep nurturing the wrong person.",
    },
    {
      heading: "Where private client pipelines leak",
      body: "Early solicitor introductions never become Salesforce households. Marketing automation treats a spouse as a new lead and embarrasses the relationship. Attribution windows expire before funds arrive, so LinkedIn looks expensive against a thank-you page that never should have been the KPI.",
    },
    {
      heading: "Demand is narrow by design",
      body: "Search volume is thin relative to mandate value. Paid search captures brand and selective intent. The heavier lift is relationship ABM: LinkedIn and events aimed at professional referrers and named households, with content that proves discretion and process rather than product theatre.",
    },
  ],
  infrastructure: [
    {
      heading: "Salesforce household hierarchies",
      body: "Model household, related individuals, solicitor firm and trustee entities on the company and contact graph. Stages: introduced, exploratory complete, fact find multi-party, proposal issued, legal review, awaiting funds, onboarded. Required properties include mandate_type, estimated_aum_band, referrer_firm and next_family_meeting_date.",
    },
    {
      heading: "Long-cycle attribution",
      body: "Store click IDs from first campaign touch. Offline upload on first_qualified_meeting and client_funded where the firm allows. Design for 180 to 240 day windows. Board reporting shows mandates by referrer channel, not blended CPL.",
    },
    {
      heading: "Compliance-constrained creative",
      body: "Financial promotions need firm approval. Educational and invitation-led creative is the default. VERIFY: confirm live approval steps and any platform-specific wealth copy constraints with compliance before campaigns launch.",
    },
  ],
  stackNotes: [
    {
      heading: "Salesforce as the private client spine",
      body: "Household objects, person accounts or custom relationship models are common. Marketing automation should enrol on household stage, not on a lone contact download. HubSpot can work for smaller boutiques if relationship fields are customised aggressively.",
    },
    {
      heading: "Advice and custody platforms",
      body: "Portfolio and custody systems stay outside ad platforms. Only stage events and hashed first-party fields move into measurement. Never sync holdings or suitability notes into LinkedIn matched audiences.",
    },
    {
      heading: "Referrer CRM hygiene",
      body: "Solicitor and accountant firms need their own account records with introduction_count and last_meaningful_touch. Without that, partnership marketing cannot be judged.",
    },
  ],
  proof: [
    {
      client: "UK private client wealth boutique",
      anonymised: true,
      situation:
        "A private client boutique was running LinkedIn thought leadership into a CRM that stored individuals without household links. Funds-in events never returned to ads, so channels were judged on webinar registrations.",
      built:
        "Method build: Salesforce household model, referrer firm objects, LinkedIn ABM against solicitor and tax-adviser lists, offline conversion planning for client_funded with a 240-day view. Anonymised method proof only.",
      results: [
        {
          metric: "Household relationship roles modelled",
          after: "4",
          window: "CRM build",
        },
        {
          metric: "Referrer accounts in ABM list",
          after: "180",
          window: "first quarter",
        },
        {
          metric: "Designed attribution window",
          after: "240 days",
          window: "measurement plan",
        },
      ],
      signedOff: false,
    },
  ],
  faqs: [
    {
      q: "How is private client different from IFA marketing?",
      a: "Longer cycles, household decision sets, heavier solicitor and trustee influence, and lower tolerance for loud product claims. Stage design and ABM matter more than search volume.",
    },
    {
      q: "Should we still run Google Ads?",
      a: "Yes for brand and selective intent, but expect LinkedIn and referrer programmes to carry more mandate value.",
    },
    {
      q: "Which CRM fits private client teams?",
      a: "Salesforce when household complexity is real. HubSpot only if you invest in custom relationship fields and stage discipline.",
    },
    {
      q: "Can we use client testimonials in ads?",
      a: "Only with compliance-approved wording and permissions. Many boutiques prefer process and team proof over named client theatre.",
    },
    {
      q: "What conversion should ads learn from?",
      a: "Qualified exploratory meetings near term; funded client events for learning and reporting when volume allows.",
    },
    {
      q: "How public is your proof?",
      a: "Anonymised method only until a private client brand case is published. We will not invent AUM figures.",
    },
  ],
  relatedIndustries: [
    {
      slug: "wealth-management",
      why: "Parent pillar covering advice, private client and payment-fintech adjacent motions.",
    },
    {
      slug: "financial-advisers-ifas",
      why: "Sibling advice motion with shorter cycles and stronger mass-affluent search mix.",
    },
    {
      slug: "legal-solicitors",
      why: "Private client solicitors are both referrers and parallel trusted advisers to the same households.",
    },
  ],
  resourceSlugs: [
    "attribution-health-check",
    "offline-conversion-upload-template",
  ],
  toolSlugs: [],
  blogTags: ["linkedin", "crm", "attribution", "marketing-automation"],
  moneyPages: [],
};

export default privateClientWealth;
