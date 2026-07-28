import type { Industry } from "@/content/types";

const willsProbateLaw: Industry = {
  slug: "wills-probate-law",
  name: "Wills and probate law",
  parent: "legal-solicitors",
  type: "sub",
  metaTitle: "Wills & Probate Marketing for Solicitors | Bright Brand",
  metaDescription:
    "Google Ads and call tracking for UK wills and probate solicitors: older demographics, Microsoft capture, and conversions on instructions not brochure downloads.",
  intro:
    "Wills and probate marketing skews older, more considered and often phone led. Search intent splits between planning a will and administering an estate under time pressure. We separate those motions in Google and Microsoft, track calls properly, and optimise to instructions rather than guide downloads.",
  heroVisual: {
    eyebrow: "Private client snapshot",
    title: "What wills and probate teams track",
    stats: [
      { value: "1–16 wk", label: "Typical cycle" },
      { value: "Instruction", label: "Real KPI" },
      { value: "Phone + form", label: "Close mix" },
      { value: "55+ heavy", label: "Demo skew" },
    ],
    charts: [
      {
        title: "Where private client enquiries stall",
        caption:
          "Illustrative industry model for wills and probate funnels, not a client result.",
        bars: [
          { label: "Research only / not ready", value: 34, display: "34%" },
          { label: "Price shopping", value: 22, display: "22%" },
          { label: "DIY / online will tool", value: 20, display: "20%" },
          { label: "Consult no-instruct", value: 24, display: "24%" },
        ],
      },
    ],
  },
  insightCharts: [
    {
      title: "Enquiry age mix (model)",
      caption:
        "Illustrative industry model of wills and probate demographics, not a client result.",
      bars: [
        { label: "35–44", value: 14, display: "14%" },
        { label: "45–54", value: 24, display: "24%" },
        { label: "55–64", value: 32, display: "32%" },
        { label: "65+", value: 30, display: "30%" },
      ],
    },
    {
      title: "Will planning vs probate mix (model)",
      caption:
        "Illustrative industry model of private client enquiry mix, not a client result.",
      bars: [
        { label: "Will / LPA planning", value: 42, display: "42%" },
        { label: "Probate / estate admin", value: 38, display: "38%" },
        { label: "Trust / tax adjacent", value: 12, display: "12%" },
        { label: "Content only", value: 8, display: "8%" },
      ],
    },
  ],
  marketStats: [
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
    {
      value: "Below ~9,000",
      label: "Firms by end-2025 (consolidation)",
      source: "UK Legal Services Market Report 2026 coverage",
    },
  ],
  audience: [
    {
      role: "Will / LPA planner",
      share: "~40%",
      note: "Considered buyer; compares online tools; needs trust signals and clear next step.",
    },
    {
      role: "Executor / family administrator",
      share: "~35%",
      note: "Time pressure after a death; phone heavy; needs probate scope and fee clarity fast.",
    },
    {
      role: "Adult child arranging for parent",
      share: "~15%",
      note: "Researches on behalf of someone else; forms must capture who the client will be.",
    },
    {
      role: "Private client partner",
      share: "~10%",
      note: "Rejects DIY tyre-kickers and content downloaders that never book an appointment.",
    },
  ],
  enquiryTiming: {
    title: "When wills and probate enquiries arrive (model)",
    caption:
      "Illustrative industry model for private client desks, not a client result.",
    bars: [
      { label: "Weekday daytime", value: 46, display: "46%" },
      { label: "Weekday evenings", value: 24, display: "24%" },
      { label: "Weekend", value: 18, display: "18%" },
      { label: "Monday peak", value: 12, display: "12%" },
    ],
  },
  cycleTiming: {
    title: "Enquiry to instruction (private client model)",
    caption:
      "Illustrative industry model of wills and probate cycle length, not a client result.",
    bars: [
      { label: "Under 14 days (probate urgency)", value: 26, display: "26%" },
      { label: "2–6 weeks", value: 34, display: "34%" },
      { label: "6–16 weeks (planning)", value: 28, display: "28%" },
      { label: "16+ weeks", value: 12, display: "12%" },
    ],
  },
  scatterCharts: [
    {
      title: "Microsoft share vs age skew by theme (model)",
      caption:
        "Illustrative model of private client search themes. Axes normalised 0–100, not a client result.",
      xLabel: "Relative age skew (older)",
      yLabel: "Relative Microsoft capture value",
      points: [
        { x: 55, y: 48, label: "Will writing" },
        { x: 60, y: 52, label: "Lasting power of attorney" },
        { x: 75, y: 70, label: "Probate solicitor" },
        { x: 80, y: 72, label: "Estate administration" },
        { x: 45, y: 35, label: "Online will DIY" },
        { x: 70, y: 65, label: "Brand + office" },
      ],
    },
  ],
  targetingNotes: [
    {
      heading: "Google and Microsoft theme split",
      body: "Separate will and LPA planning from probate and estate administration. Negatives must strip DIY will builders, jobs and free template queries. Microsoft Ads often deserves a larger share than consumer legal averages because of the older demographic.",
    },
    {
      heading: "Law Society and SRA presentation checks",
      body: "Validate how competitors list wills, probate and private client work via Law Society Find a Solicitor and SRA firm context. Useful for local auction pressure, not for bulk email.",
    },
    {
      heading: "HubSpot nurture for planners",
      body: "Will planners who are not ready can enter careful email nurture. Probate urgency should not enter the same slow drip. Lists enrol on matter_family, not on every guide download.",
    },
  ],
  pipelineStages: [
    { name: "Enquiry", note: "Will planning or probate urgency captured" },
    { name: "Triage / matter type", note: "Estate planning vs probate speed route" },
    { name: "Consultation booked", note: "Will path; slower nurture acceptable" },
    { name: "Instruction / retainer", note: "Engagement letter or probate take-on" },
    { name: "Matter open", note: "Clio Manage / LEAP is source of truth" },
  ],
  pipelineShape: [
    {
      heading: "Planning versus administration are different funnels",
      body: "Will and LPA work is considered: enquiry, appointment, instruction, drafting. Probate and estate administration is often urgent: enquiry, fee clarity, instruction, then a longer matter. If both share one campaign and one conversion action, Google will prefer whichever form is cheaper, usually a will guide download that never becomes a file.",
    },
    {
      heading: "Where private client marketing leaks",
      body: "Brochure conversions. Ignoring Microsoft. Missing phone tracking for executors who will not complete long forms. Blending private client with high-CPC PI terms in a firm-wide account. An anonymised composite of private client desks showed Microsoft contributing a higher share of probate instructions than platform spend share until budgets were rebalanced.",
    },
    {
      heading: "Instruction as the marketing truth",
      body: "Upload will instruction or probate instruction confirmed. Appointment booked can be secondary. DIY comparison shoppers should be filtered before fee earners are booked.",
    },
  ],
  infrastructure: [
    {
      heading: "Clio or LEAP with matter_family",
      body: "Required properties: matter_family (wills, LPA, probate), client_role (planner, executor, arranger), office and instruction_status. Click IDs persist from form and call paths.",
    },
    {
      heading: "Google plus Microsoft plus calls",
      body: "Search structure mirrors matter_family. CallRail on probate landers. Offline conversions shared across Google and Microsoft. Weekly packs show instruction volume by family, not blended private client CPL.",
    },
  ],
  stackNotes: [
    {
      heading: "Microsoft Ads as a first-class channel",
      body: "Older executors and planners still convert on Bing. We give Microsoft its own budget and the same instruction conversion event rather than treating it as a 10 percent afterthought.",
    },
    {
      heading: "Clio Grow appointments and LEAP files",
      body: "Grow or HubSpot can own appointment booked; Manage or LEAP confirms instruction. The join must survive the handoff or offline upload dies.",
    },
    {
      heading: "CallRail on probate pages",
      body: "Executors call. DNI with dispositions for instruction started, callback needed and DIY or unsuitable keeps Smart Bidding honest.",
    },
  ],
  proof: [
    {
      client: "Private client unit (anonymised)",
      anonymised: true,
      situation:
        "A private client unit ran wills and probate in one Google campaign optimised to guide downloads, while probate instructions arrived largely by phone and Microsoft was underfunded.",
      built:
        "Matter-family search split across Google and Microsoft, CallRail on probate landers, offline conversion on instruction confirmed, and HubSpot nurture only for will planners marked not ready.",
      results: [
        {
          metric: "Instruction rate from paid enquiries",
          before: "8%",
          after: "15%",
          window: "12 weeks",
        },
        {
          metric: "Probate instructions with call attribution",
          before: "22%",
          after: "74%",
          window: "12 weeks",
        },
        {
          metric: "Microsoft share of private client ad budget",
          before: "6%",
          after: "22%",
          window: "rebalance",
        },
      ],
      signedOff: false,
    },
  ],
  faqs: [
    {
      q: "Should wills and probate share one Google campaign?",
      a: "Not when volume allows a split. Planning and estate administration convert on different timelines and phone behaviours.",
    },
    {
      q: "Is Microsoft Ads worth it here?",
      a: "Often yes. The demographic skew makes Bing more important than in many younger legal practices.",
    },
    {
      q: "What is the primary conversion?",
      a: "Instruction confirmed. Appointment booked can be secondary while volume builds.",
    },
    {
      q: "How do you handle DIY will shoppers?",
      a: "Negatives, form questions and intake dispositions. Do not let guide downloads train bidding.",
    },
    {
      q: "Do you use LinkedIn for wills and probate?",
      a: "Rarely as a primary consumer channel. Professional introducer work is usually relationship BD.",
    },
    {
      q: "How does this relate to the legal solicitors pillar?",
      a: "It is a practice sub-vertical under legal and solicitors with flat URLs for the hub and service spokes.",
    },
  ],
  relatedIndustries: [
    {
      slug: "legal-solicitors",
      why: "Parent pillar for firm-wide practice architecture and multi-channel attribution patterns.",
    },
    {
      slug: "family-law",
      why: "Sibling private client practice with overlapping life-event sensitivity and phone-led intake discipline.",
    },
    {
      slug: "wealth-management",
      why: "Will, trust and estate conversations sometimes sit beside adviser relationships; measurement discipline transfers even when regulators differ.",
    },
  ],
  resourceSlugs: [
    "negative-keyword-starter-lists",
    "offline-conversion-upload-template",
    "ga4-enquiry-event-schema",
  ],
  toolSlugs: [],
  blogTags: ["legal", "google-ads", "call-tracking", "attribution"],
  moneyPages: [],
};

export default willsProbateLaw;
