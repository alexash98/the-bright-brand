import type { Industry } from "@/content/types";

const familyLaw: Industry = {
  slug: "family-law",
  name: "Family law",
  parent: "legal-solicitors",
  type: "sub",
  metaTitle: "Family Law Marketing for Solicitors | Bright Brand",
  metaDescription:
    "Call tracking and attribution for UK family law solicitors: sensitive Google capture, phone-led intake, and conversions on qualified consultations.",
  intro:
    "Family law marketing is high intent, emotionally charged and phone heavy. Divorce, children and financial remedy enquiries do not behave like conveyancing quotes. We keep claim language inside SRA rules, wire CallRail into Clio Grow, and judge channels on qualified consultations rather than every late-night form.",
  heroVisual: {
    eyebrow: "Family snapshot",
    title: "What family desks track",
    stats: [
      { value: "1–12 wk", label: "Typical cycle" },
      { value: "Phone-led", label: "Close channel" },
      { value: "Consult booked", label: "Real KPI" },
      { value: "~£3–4bn", label: "Consumer segment" },
    ],
    charts: [
      {
        title: "Where family enquiries stall",
        caption:
          "Illustrative industry model for family law funnels, not a client result.",
        bars: [
          { label: "Not ready / researching", value: 30, display: "30%" },
          { label: "Conflicts / capacity", value: 16, display: "16%" },
          { label: "Fee / legal aid mismatch", value: 28, display: "28%" },
          { label: "Consult no-instruct", value: 26, display: "26%" },
        ],
      },
    ],
  },
  insightCharts: [
    {
      title: "Matter theme mix (model)",
      caption:
        "Illustrative industry model of family enquiry themes, not a client result.",
      bars: [
        { label: "Divorce / separation", value: 38, display: "38%" },
        { label: "Children matters", value: 26, display: "26%" },
        { label: "Financial remedy", value: 22, display: "22%" },
        { label: "Other private family", value: 14, display: "14%" },
      ],
    },
    {
      title: "First touch channel (model)",
      caption:
        "Illustrative industry model of family law first touch, not a client result.",
      bars: [
        { label: "Inbound call", value: 46, display: "46%" },
        { label: "Web form", value: 34, display: "34%" },
        { label: "Callback / chat", value: 12, display: "12%" },
        { label: "Referral", value: 8, display: "8%" },
      ],
    },
  ],
  marketStats: [
    {
      value: "~£3–4bn",
      label: "Family consumer legal segment",
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
      role: "Separating spouse / partner",
      share: "~55%",
      note: "Often searching outside work hours; needs discreet, clear next steps and fast callback.",
    },
    {
      role: "Parent in children matter",
      share: "~25%",
      note: "Urgent and sensitive; phone preferred; landing pages must state children scope without drama.",
    },
    {
      role: "Family practice lead",
      share: "~12%",
      note: "Owns capacity and conflicts; rejects tyre-kickers and unsuitable fee expectations early.",
    },
    {
      role: "Intake / receptionist",
      share: "~8%",
      note: "Runs screening for urgency, conflicts and private versus legal aid pathways.",
    },
  ],
  enquiryTiming: {
    title: "When family enquiries arrive (model)",
    caption:
      "Illustrative industry model for family desks, not a client result.",
    bars: [
      { label: "Weekday evenings", value: 32, display: "32%" },
      { label: "Weekday daytime", value: 30, display: "30%" },
      { label: "Weekend", value: 24, display: "24%" },
      { label: "Early morning", value: 14, display: "14%" },
    ],
  },
  cycleTiming: {
    title: "Enquiry to instruction (family model)",
    caption:
      "Illustrative industry model of family cycle length, not a client result.",
    bars: [
      { label: "Under 7 days", value: 22, display: "22%" },
      { label: "1–4 weeks", value: 36, display: "36%" },
      { label: "4–12 weeks", value: 28, display: "28%" },
      { label: "12+ weeks", value: 14, display: "14%" },
    ],
  },
  scatterCharts: [
    {
      title: "Sensitivity vs phone close share (model)",
      caption:
        "Illustrative model of family themes. Axes normalised 0–100, not a client result.",
      xLabel: "Creative / policy sensitivity",
      yLabel: "Share closing on phone",
      points: [
        { x: 70, y: 62, label: "Divorce solicitor" },
        { x: 85, y: 70, label: "Children matters" },
        { x: 65, y: 55, label: "Financial remedy" },
        { x: 50, y: 48, label: "Separation agreement" },
        { x: 40, y: 40, label: "Brand search" },
        { x: 90, y: 72, label: "Emergency / protective" },
      ],
    },
  ],
  targetingNotes: [
    {
      heading: "Google themes with compliance first",
      body: "Split divorce, children and financial remedy themes. Keep copy substantiated and free of guaranteed outcomes. VERIFY live Google Ads personalised advertising limits for sensitive legal categories against current Ads Policy help before launch. Brand defence stays separate.",
    },
    {
      heading: "Phone capture over soft remarketing theatre",
      body: "Family enquirers often prefer a call. CallRail on practice landers matters more than aggressive remarketing that feels intrusive. Suppression and frequency caps protect people in vulnerable moments.",
    },
    {
      heading: "Directory and competitor checks",
      body: "Law Society Find a Solicitor and SRA lists help validate who markets family work in your towns. Use them for positioning and auction insight, not cold outreach dumps.",
    },
  ],
  pipelineStages: [
    { name: "Enquiry", note: "Web, phone or referral; matter type captured" },
    { name: "Conflicts / triage", note: "Divorce, children or finance routing" },
    { name: "Consultation booked", note: "Primary learning event for paid search" },
    { name: "Instruction / retainer", note: "Commercially real outcome for partners" },
    { name: "Matter open", note: "Practice system holds fee earner truth" },
  ],
  pipelineShape: [
    {
      heading: "Sensitive enquiry to consultation",
      body: "The path is enquiry, conflicts and suitability screening, consultation, then instruction. Many people research for weeks before they are ready. Fee expectations and legal aid eligibility must be handled early or fee earners burn hours on unsuitable matters. Phone remains a primary close channel; forms that promise a PDF and nothing else under-serve this practice.",
    },
    {
      heading: "Where family marketing leaks trust",
      body: "Over-claiming in ads. Counting every form as a conversion. Missing evening call tracking. Blending family with PI or conveyancing budgets so Smart Bidding chases the cheapest fill. An anonymised composite of family intake teams showed evening and weekend calls creating a disproportionate share of consultations while receiving little conversion credit without DNI.",
    },
    {
      heading: "Measurement that partners will defend",
      body: "Qualified consultation booked after screening is the usual primary event. Instruction confirmed can follow. Special category personal details never go to ad platforms; only status events and hashed first-party fields the firm’s privacy notice allows.",
    },
  ],
  infrastructure: [
    {
      heading: "CallRail and Clio Grow for discreet intake",
      body: "Dynamic numbers on family landers write dispositions into Grow or HubSpot: consult booked, not ready, conflicts, fee mismatch. Scripts avoid dumping sensitive narrative into ad platform fields.",
    },
    {
      heading: "Attribution without voyeuristic data",
      body: "Offline upload sends consultation booked or instruction confirmed. Matter detail stays in the practice system. Consent mode and server-side tagging protect capture quality.",
    },
  ],
  stackNotes: [
    {
      heading: "Clio Grow screening codes",
      body: "Family needs disposition codes that match real screening, including not ready. Soft lead status should not train Google. Required properties: matter_theme, urgency_band, office.",
    },
    {
      heading: "CallRail first, HubSpot second",
      body: "Phone is the spine. HubSpot can own nurture for not-ready enquirers with careful frequency. LEAP firms still need the same consult-booked event for offline upload.",
    },
    {
      heading: "Microsoft Ads for quieter demographics",
      body: "Bing often deserves budget for older family clients. Use the same qualified consultation conversion as Google so the channel is not judged only on form fills.",
    },
  ],
  proof: [
    {
      client: "Regional family practice (anonymised)",
      anonymised: true,
      situation:
        "A regional family team generated strong evening call volume that never entered Clio Grow with campaign credit, while Google optimised to daytime web forms with weak consult rates.",
      built:
        "CallRail on divorce and children landers, consult-booked offline conversions, HubSpot not-ready nurture with strict caps, and claim language rewritten through compliance review.",
      results: [
        {
          metric: "Consultations with campaign credit from calls",
          before: "24%",
          after: "78%",
          window: "10 weeks",
        },
        {
          metric: "Cost per qualified consultation",
          before: "£175",
          after: "£102",
          window: "10 weeks",
        },
        {
          metric: "Not-ready forms pushed to fee earners",
          before: "38%",
          after: "12%",
          window: "60 days",
        },
      ],
      signedOff: false,
    },
  ],
  faqs: [
    {
      q: "Why is family law advertising so constrained?",
      a: "SRA publicity rules, sensitive personal situations and Google policy limits on personalised advertising in some categories. Verify live policy text before launch.",
    },
    {
      q: "Do you need call tracking?",
      a: "Usually yes. A large share of consultations still start on the phone, especially evenings and weekends.",
    },
    {
      q: "What should ads optimise to?",
      a: "Qualified consultation booked after screening. Raw forms are diagnostic only.",
    },
    {
      q: "Can family share a Google budget with conveyancing?",
      a: "Not in the same non-brand campaign. Intent, CPC and cycle length differ.",
    },
    {
      q: "How do you handle not-ready enquirers?",
      a: "CRM status, careful nurture, and suppression from aggressive remarketing. Do not force them onto fee-earner diaries.",
    },
    {
      q: "Where does this sit in the industry tree?",
      a: "Under legal and solicitors as a practice sub-vertical with flat URLs for the hub and service spokes.",
    },
  ],
  relatedIndustries: [
    {
      slug: "legal-solicitors",
      why: "Parent pillar for firm-wide compliance-aware paid media and Clio/HubSpot architecture.",
    },
    {
      slug: "wills-probate-law",
      why: "Sibling private client practice; life events sometimes connect family and probate conversations carefully and separately.",
    },
    {
      slug: "personal-injury-law",
      why: "Another phone-heavy consumer practice where call tracking and screened conversions decide whether high CPCs are worth it.",
    },
  ],
  resourceSlugs: [
    "offline-conversion-upload-template",
    "ga4-enquiry-event-schema",
    "attribution-health-check",
  ],
  toolSlugs: [],
  blogTags: ["legal", "call-tracking", "attribution", "google-ads"],
  moneyPages: [],
};

export default familyLaw;
