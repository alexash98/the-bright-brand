import type { Industry } from "@/content/types";

const wealthManagement: Industry = {
  slug: "wealth-management",
  name: "Wealth management",
  type: "pillar",
  metaTitle: "Wealth Management Marketing Agency | The Bright Brand",
  metaDescription:
    "Marketing for wealth managers and advice firms: LinkedIn demand, CRM stage design and automation that respect compliance-constrained paid media.",
  intro:
    "Wealth marketing collapses when it copies SaaS lead gen. Buyers choose a decade-long relationship, search demand is thin, and LinkedIn plus referrals carry the weight. We build Salesforce or HubSpot stages that match the advice journey, LinkedIn that speaks to roles and life events, and automation that stops where compliance draws the line.",
  heroVisual: {
    eyebrow: "Wealth snapshot",
    title: "What advice firms track",
    stats: [
      { value: "60–180 d", label: "Typical cycle" },
      { value: "Meeting", label: "Primary close" },
      { value: "LinkedIn + ref", label: "Demand mix" },
      { value: "Funds in", label: "Real KPI" },
    ],
    charts: [
      {
        title: "Where advice journeys stall",
        caption:
          "Illustrative industry model for wealth management funnels, not a client result.",
        bars: [
          { label: "Enquiry to discovery", value: 30, display: "30%" },
          { label: "Fact find lag", value: 28, display: "28%" },
          { label: "Proposal / suitability", value: 26, display: "26%" },
          { label: "Awaiting funds", value: 16, display: "16%" },
        ],
      },
    ],
  },
  insightCharts: [
    {
      title: "Decision-maker age mix (model)",
      caption:
        "Illustrative industry model of wealth advice prospects, not a client result.",
      bars: [
        { label: "35–44", value: 18, display: "18%" },
        { label: "45–54", value: 34, display: "34%" },
        { label: "55–64", value: 30, display: "30%" },
        { label: "65+", value: 18, display: "18%" },
      ],
    },
    {
      title: "Marketing payback months (model)",
      caption:
        "Illustrative industry model of payback timing on wealth marketing spend, not a client result.",
      bars: [
        { label: "0–3 months", value: 12, display: "12%" },
        { label: "3–6 months", value: 28, display: "28%" },
        { label: "6–12 months", value: 38, display: "38%" },
        { label: "12+ months", value: 22, display: "22%" },
      ],
    },
  ],
  marketStats: [
    {
      value: "~27k",
      label: "UK FCA-authorised advice firms (order of magnitude)",
      source: "Illustrative model from FCA register segments",
    },
    {
      value: "60–180 d",
      label: "Typical enquiry to funded client",
      source: "Illustrative model",
    },
    {
      value: "3–7",
      label: "Stakeholders in complex advice decisions",
      source: "Illustrative model",
    },
    {
      value: "LinkedIn-led",
      label: "Dominant net-new demand channel for advice firms",
      source: "Illustrative model",
    },
  ],
  audience: [
    {
      role: "Business owner / founder post-exit",
      share: "28%",
      note: "High AUM potential, long trust cycle, often introduced via accountant or fellow director.",
    },
    {
      role: "Senior professional / partner",
      share: "26%",
      note: "Pension consolidation and protection planning; responds to role-based LinkedIn and peer referral.",
    },
    {
      role: "HR / benefits lead",
      share: "18%",
      note: "Employee benefits and workplace advice mandates; committee buying with Finance.",
    },
    {
      role: "Accountant / professional referrer",
      share: "16%",
      note: "Not the end client, but controls introductions; nurture and event programmes matter more than search.",
    },
    {
      role: "Trustee / family office contact",
      share: "12%",
      note: "Slowest cycle; multi-adviser evaluation and heavy compliance scrutiny on every claim.",
    },
  ],
  enquiryTiming: {
    title: "When advice enquiries arrive (model)",
    caption:
      "Illustrative industry model of wealth enquiry timing across a typical week, not a client result.",
    bars: [
      { label: "Mon–Tue morning", value: 34, display: "34%" },
      { label: "Wed daytime", value: 22, display: "22%" },
      { label: "Thu–Fri", value: 28, display: "28%" },
      { label: "Weekend / evening", value: 16, display: "16%" },
    ],
  },
  cycleTiming: {
    title: "Enquiry to funded client (model)",
    caption:
      "Illustrative industry model of advice cycle length bands, not a client result.",
    bars: [
      { label: "Under 60 days", value: 18, display: "18%" },
      { label: "60–120 days", value: 36, display: "36%" },
      { label: "120–180 days", value: 28, display: "28%" },
      { label: "180+ days", value: 18, display: "18%" },
    ],
  },
  scatterCharts: [
    {
      title: "Segment value vs cycle length (model)",
      caption:
        "Illustrative industry model plotting relative AUM potential against advice cycle length. Not a client result.",
      xLabel: "Cycle length (relative)",
      yLabel: "Deal value (relative)",
      points: [
        { x: 22, y: 28, label: "Workplace benefits" },
        { x: 35, y: 42, label: "Mass affluent advice" },
        { x: 48, y: 55, label: "Director pensions" },
        { x: 62, y: 68, label: "Business exit" },
        { x: 74, y: 78, label: "Estate / trust" },
        { x: 82, y: 88, label: "Family office" },
        { x: 40, y: 32, label: "Protection-led" },
        { x: 55, y: 48, label: "Professional referral" },
      ],
    },
  ],
  targetingNotes: [
    {
      heading: "FCA register segments",
      body: "Filter the FCA Financial Services Register by advice permissions and firm status, then enrich with Companies House size and location. Use FRN-backed lists for Google Ads Financial services verification prep and for LinkedIn matched audiences of advice firms you want as partners, not as end clients.",
    },
    {
      heading: "LinkedIn role and life-event proxies",
      body: "Target founders, partners, HR leaders and accountants by seniority and company size rather than spraying 'financial advice' at every job title. Suppress existing clients and active opportunities from Salesforce or HubSpot weekly so paid budget stays on net-new and referral sources.",
    },
    {
      heading: "Apollo and Companies House enrichment",
      body: "Apollo (or equivalent) is useful for BDM and partnership roles when you sell advice technology or white-label services into networks. Companies House SIC and officer data help size owner-managed businesses for direct-to-consumer advice ICP lists. Never treat outreach lists as Bright Brand clients.",
    },
  ],
  pipelineStages: [
    { name: "Enquiry / referral", note: "LinkedIn, brand search or introducer" },
    { name: "Discovery call", note: "Adviser or paraplanner owned" },
    { name: "First advice meeting", note: "Primary optimisation event" },
    { name: "Fact-find / suitability", note: "Compliance-gated nurture stops here if owned" },
    { name: "Advice delivered / onboarded", note: "Household value in CRM of record" },
  ],
  pipelineShape: [
    {
      heading: "How the wealth pipeline actually moves",
      body: "A typical advice journey is longer than most agencies budget for. First touch may be a LinkedIn article, a professional referral, a branded search after a recommendation, or an event. Then comes discovery call, fact find, proposal or suitability process, cooling-off and onboarding onto the advice platform. From first conversation to funded client can run 60 to 180 days, longer for complex pensions, estate and business-owner work. Decision makers are rarely solo. Spouses, fellow directors, trustees and external advisers all influence timing. Marketing that counts a whitepaper download as success is measuring the wrong end of that chain.",
    },
    {
      heading: "Where enquiries leak in advice firms",
      body: "Leak one: paraplanners and advisers inherit leads with no source, no segment and no context, so follow-up is generic. Leak two: compliance holds creative and email for weeks while paid campaigns keep spending against stale messages. Leak three: Salesforce or HubSpot stages jump from enquiry to client with nothing for fact find booked, proposal issued or awaiting funds, so forecasts oscillate. Leak four: paid media optimises to form fills because offline conversion for 'first advice meeting held' was never built. The firm then concludes LinkedIn is expensive, when the measurement never saw the meeting.",
    },
    {
      heading: "What marketing is allowed to own",
      body: "In well-run advice firms, marketing owns attention, enquiry quality and meeting creation. Advisers own suitability, recommendations and the regulated advice file. That boundary should appear in the CRM. Marketing automation can nurture education and book discovery calls. It should not auto-send personalised investment claims that amount to a financial promotion without the firm's approval workflow. When we design the stack, we make that split explicit so operations and compliance are not fighting the tools.",
    },
  ],
  infrastructure: [
    {
      heading: "CRM stages that match advice, not SaaS",
      body: "We implement Salesforce or HubSpot with stages such as enquiry, discovery booked, discovery completed, fact find in progress, proposal issued, awaiting funds, onboarded, and served client. Company and contact hierarchies capture household or business relationships where relevant. Required fields include advice_segment, source_detail, adviser_owner and meeting_outcome. Without those, LinkedIn and automation cannot be judged honestly.",
    },
    {
      heading: "Attribution across a long advice cycle",
      body: "Platform lookback windows often expire before funds arrive. We set conversion actions on first qualified advice meeting and, where the firm allows, on onboarded client events uploaded offline. Value rules stay internal when needed. Server-side tagging and consent mode protect first-party signal. Reporting for the board shows pipeline by segment and channel, not vanity CPL alone. Use a longer attribution window than ecommerce defaults; 90 to 180 days is a common starting range for advice meetings, then validate against your real cycle length.",
    },
    {
      heading: "Compliance-constrained paid media",
      body: "UK wealth and investment advertisers fall under Google Ads Financial products and services policy and, when targeting the UK, Financial services verification that expects UK FCA authorisation evidence such as an FRN or a documented exemption path. LinkedIn and other channels still sit under the firm's financial promotion approval process. We do not invent FCA permissions a firm does not hold. VERIFY: confirm the live financial promotion approval steps and any platform-specific wealth copy constraints with the client's compliance officer before ads or nurtures go live. Creative stays educational and invitation-led unless compliance has approved stronger claims.",
    },
  ],
  stackNotes: [
    {
      heading: "Salesforce, HubSpot and advice platforms",
      body: "Salesforce is common in larger advice and wealth networks; HubSpot appears in growth-stage and smaller firms. Both need custom stage design with household and firm hierarchies. Advice platforms and back-office systems hold suitability and portfolio data that must not be casually synced into ad platforms. We keep advertising identifiers and marketing stages in the CRM, and treat advice-platform data as restricted. Integration is about meeting and onboarding events such as first_advice_meeting_held and client_onboarded, not pushing portfolio detail into LinkedIn or Google.",
    },
    {
      heading: "Payment and fintech adjacent stacks",
      body: "Payment and fintech B2B buyers inside or beside wealth groups follow a procurement-like motion: security questionnaires, multi-stakeholder evaluation, LinkedIn role targeting, and CRM stages measured in quarters. See the payment and fintech sub-page for that shape. We borrow HubSpot or Salesforce discipline from procurement software work rather than treating consumer payment ads as the same problem.",
    },
    {
      heading: "Marketing automation boundaries",
      body: "Lifecycle programmes work when they are segmented by advice interest, professional referral versus direct consumer, and stage in the CRM. They fail when every contact enters a single drip with product claims. We build HubSpot or Salesforce nurtures that use approved content modules, stop conditions when an adviser takes ownership, and explicit compliance review gates on any email that could be read as a promotion.",
    },
    {
      heading: "Offline conversion and consent tooling",
      body: "Server-side tagging, consent mode and offline upload of advice-meeting events are the measurement spine. Enhanced conversions stay on hashed first-party fields only. Board packs should show pipeline by advice_segment and channel over 90 to 180 days, not a seven-day CPL screenshot.",
    },
  ],
  proof: [
    {
      client: "UK advice firm, multi-adviser network",
      anonymised: true,
      situation:
        "A multi-adviser wealth and advice business was running LinkedIn and content programmes into a CRM whose stages still mirrored a software funnel. Discovery meetings were booked in calendars but not written back as conversions, so paid social looked weak against form fills that never reached advisers.",
      built:
        "Method build only: Salesforce stage model rewritten around discovery, fact find, proposal and awaiting funds; HubSpot-compatible nurture rules with compliance hold statuses; LinkedIn campaigns re-aimed at HR, founder and professional-services referral roles; offline conversion for first_advice_meeting_held. No named client and no publishable revenue lift in the repo yet.",
      results: [
        {
          metric: "Advice journey stages in CRM",
          after: "8",
          window: "implementation",
        },
        {
          metric: "Attribution window for meeting conversions",
          after: "180 days",
          window: "measurement plan",
        },
        {
          metric: "LinkedIn audience segments from CRM",
          after: "3",
          window: "first 30 days",
        },
      ],
      signedOff: false,
    },
  ],
  faqs: [
    {
      q: "Do you run Google Ads for wealth managers?",
      a: "When brand and high-intent advice terms justify it, and when Financial services verification and the Financial products and services policy requirements are met. Many advice firms still get more incremental pipeline from LinkedIn and professional referral programmes than from non-brand search alone.",
    },
    {
      q: "Which CRM should a wealth firm use?",
      a: "Salesforce if you already live there or need complex household and firm hierarchies. HubSpot if marketing needs speed and the advice network is smaller. The stage model matters more than the logo on the invoice.",
    },
    {
      q: "Can marketing automation send investment performance claims?",
      a: "Only through the firm's approved financial promotion process. Our default is educational nurture and meeting booking until compliance clears stronger claims. If that process is unclear, we pause rather than guess.",
    },
    {
      q: "How long until LinkedIn produces advice meetings?",
      a: "Plan for 60 to 90 days of disciplined testing once CRM routing works. Shorter tests mostly measure form curiosity, not adviser-ready conversations.",
    },
    {
      q: "Do you work with payment or fintech teams inside wealth groups?",
      a: "Yes. The payment and fintech sub-page covers B2B LinkedIn, outbound and CRM patterns for those buyers. Proof stays anonymised until a named client case is published.",
    },
    {
      q: "What proof can you show publicly?",
      a: "For wealth, method and anonymised shape only until Alex signs off a named client or publishable composite numbers. We will not invent FCA case metrics or revenue figures to fill a gap.",
    },
  ],
  relatedIndustries: [
    {
      slug: "financial-advisers-ifas",
      why: "IFA and advice-network acquisition is the sharpest consumer-and-referrer mix under this pillar, with FCA-constrained creative and meeting-led LinkedIn.",
    },
    {
      slug: "private-client-wealth",
      why: "Private client and discretionary wealth work stretches cycle length and household CRM modelling further than mass-affluent advice funnels.",
    },
    {
      slug: "payment-fintech",
      why: "Payments and fintech teams inside wealth groups inherit B2B evaluation patterns closer to procurement software than to retail advice ads.",
    },
    {
      slug: "legal-solicitors",
      why: "Private client solicitors and wealth advisers often share the same households and business owners. Compliance-constrained messaging and long trust cycles are familiar on both sides.",
    },
  ],
  resourceSlugs: [
    "attribution-health-check",
    "offline-conversion-upload-template",
    "ga4-enquiry-event-schema",
  ],
  toolSlugs: [],
  blogTags: ["linkedin", "marketing-automation", "crm", "attribution", "consent"],
  moneyPages: [],
};

export default wealthManagement;
