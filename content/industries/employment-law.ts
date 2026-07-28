import type { Industry } from "@/content/types";

const employmentLaw: Industry = {
  slug: "employment-law",
  name: "Employment law",
  parent: "legal-solicitors",
  type: "sub",
  metaTitle: "Employment Law Marketing for Solicitors | Bright Brand",
  metaDescription:
    "Marketing for UK employment solicitors: Google and LinkedIn for claimants and HR buyers, Clio/HubSpot intake, and conversions on qualified consultations.",
  intro:
    "Employment law marketing serves two buyers at once. Employees search under deadline pressure. HR and people leaders buy counsel on LinkedIn and branded search. We split those motions, wire Clio Grow and HubSpot to ACAS-aware stages, and judge spend on qualified consultations, not blended legal CPL.",
  heroVisual: {
    eyebrow: "Employment snapshot",
    title: "What employment desks track",
    stats: [
      { value: "1–8 wk", label: "Typical cycle" },
      { value: "Consult booked", label: "Real KPI" },
      { value: "Search + LinkedIn", label: "Demand mix" },
      { value: "~£3–4bn", label: "Consumer segment" },
    ],
    charts: [
      {
        title: "Where employment enquiries stall",
        caption:
          "Illustrative industry model for employment solicitor funnels, not a client result.",
        bars: [
          { label: "Out of scope / tribunal time", value: 30, display: "30%" },
          { label: "Conflicts / capacity", value: 18, display: "18%" },
          { label: "Consult no-instruct", value: 32, display: "32%" },
          { label: "Employer vs claimant mix-up", value: 20, display: "20%" },
        ],
      },
    ],
  },
  insightCharts: [
    {
      title: "Buyer type mix (model)",
      caption:
        "Illustrative industry model of employment enquiry buyers, not a client result.",
      bars: [
        { label: "Employee / claimant", value: 58, display: "58%" },
        { label: "HR / people leader", value: 24, display: "24%" },
        { label: "Founder / SME owner", value: 12, display: "12%" },
        { label: "In-house counsel", value: 6, display: "6%" },
      ],
    },
    {
      title: "Channel mix that survives fee-earner review (model)",
      caption:
        "Illustrative industry model of employment instruction sources, not a client result.",
      bars: [
        { label: "Paid search", value: 38, display: "38%" },
        { label: "LinkedIn", value: 22, display: "22%" },
        { label: "Referral / panel", value: 26, display: "26%" },
        { label: "Organic / brand", value: 14, display: "14%" },
      ],
    },
  ],
  marketStats: [
    {
      value: "~£3–4bn",
      label: "Employment consumer legal segment",
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
      role: "Employee / claimant",
      share: "~55%",
      note: "Deadline-driven searcher; phone and evening forms; needs clear scope and next-step SLA.",
    },
    {
      role: "HR director / people leader",
      share: "~25%",
      note: "Buys ongoing counsel or a live dispute; LinkedIn and peer referral dominate first touch.",
    },
    {
      role: "SME founder / FD",
      share: "~12%",
      note: "Instructs on exits, contracts and disputes without a full HR function.",
    },
    {
      role: "Employment partner / practice lead",
      share: "~8%",
      note: "Internal buyer of marketing; rejects soft ebook leads that never become consultations.",
    },
  ],
  enquiryTiming: {
    title: "When employment enquiries arrive (model)",
    caption:
      "Illustrative industry model for employment desks, not a client result.",
    bars: [
      { label: "Weekday evenings", value: 30, display: "30%" },
      { label: "Mon–Wed daytime", value: 34, display: "34%" },
      { label: "Thu–Fri daytime", value: 22, display: "22%" },
      { label: "Weekend", value: 14, display: "14%" },
    ],
  },
  cycleTiming: {
    title: "Enquiry to instruction (employment model)",
    caption:
      "Illustrative industry model of employment cycle length, not a client result.",
    bars: [
      { label: "Under 7 days", value: 18, display: "18%" },
      { label: "1–3 weeks", value: 36, display: "36%" },
      { label: "3–8 weeks", value: 30, display: "30%" },
      { label: "8+ weeks (employer retainers)", value: 16, display: "16%" },
    ],
  },
  scatterCharts: [
    {
      title: "CPL vs consult close rate by motion (model)",
      caption:
        "Illustrative model of claimant search versus employer LinkedIn. Axes normalised 0–100, not a client result.",
      xLabel: "Relative cost per enquiry",
      yLabel: "Consult-to-instruct rate",
      points: [
        { x: 28, y: 42, label: "Unfair dismissal search" },
        { x: 35, y: 38, label: "Settlement agreement" },
        { x: 48, y: 55, label: "Discrimination claim" },
        { x: 62, y: 68, label: "HR LinkedIn (dispute)" },
        { x: 70, y: 72, label: "Employer retainer" },
        { x: 82, y: 45, label: "Soft content download" },
      ],
    },
  ],
  targetingNotes: [
    {
      heading: "Google Ads employment keyword families",
      body: "Separate claimant themes (unfair dismissal solicitor, settlement agreement solicitor, workplace discrimination) from employer themes (employment lawyer for employers, HR legal advice). Negatives must strip job-seeker and HR software queries. Brand and competitor stay apart so tribunal-deadline traffic does not compete with brand defence.",
    },
    {
      heading: "LinkedIn role targeting for HR buyers",
      body: "For employer-side work, target HR directors, people partners, heads of employee relations and founders in your geography. Matched audiences from HubSpot should enrol on qualified consultation or proposal stages, not every webinar registration. Claimant volume stays on search and call tracking.",
    },
    {
      heading: "SRA and Law Society practice checks",
      body: "Use SRA firm lists and Law Society Find a Solicitor to validate competitors who publicly list employment, and to keep multi-office geo targeting honest. Do not treat directories as a bulk outreach dump.",
    },
  ],
  pipelineStages: [
    { name: "Enquiry", note: "Claimant search/phone or employer referral" },
    { name: "Triage / conflicts", note: "Merits, limitation and buyer type split" },
    { name: "Consultation booked", note: "Claimant path; learning event for search" },
    { name: "Engagement proposed", note: "Employer retainer or claimant CFA terms" },
    { name: "Instruction / retainer", note: "Commercially real outcome for partners" },
  ],
  pipelineShape: [
    {
      heading: "Two pipelines, one practice brand",
      body: "Claimant work is search and phone led: enquiry, triage for limitation and merits, consultation, then instruction or decline. Employer work is role led: LinkedIn or referral, scoping call, proposal, engagement letter, then ongoing advisory or dispute matter. If both sit in one Google campaign and one HubSpot pipeline labelled Lead, Google will buy the cheapest form fill and partners will only see noise. ACAS early conciliation context and tribunal deadlines belong as CRM properties, not as footnotes in a spreadsheet.",
    },
    {
      heading: "Where employment desks leak budget",
      body: "The classic leak is blending claimant and employer keywords. The second is counting every questionnaire as a conversion while fee earners only want consultations with merits and capacity. The third is LinkedIn lead gen forms for soft PDFs that never reach Clio Grow. An anonymised composite of regional employment teams we have reviewed showed consult-to-instruct rates roughly doubling once offline conversion moved from form submit to consultation booked with a practice_area equals employment filter.",
    },
    {
      heading: "What a retained employment matter looks like in data",
      body: "Market the commercial event partners agree: qualified consultation booked for claimants, or engagement letter signed for employer retainers. Upload that event offline with office and buyer_type. Matter open in Clio Manage or LEAP can be a secondary learning signal. Public pages never invent fee values under NDA.",
    },
  ],
  infrastructure: [
    {
      heading: "Clio Grow and HubSpot with buyer_type",
      body: "Required properties: practice_area, buyer_type (claimant or employer), office, limitation_or_deadline_flag, and consultation_outcome. HubSpot routes claimant forms to intake SLAs measured in hours; employer leads go to BD with a longer nurture path. Click IDs survive both paths into Clio Grow.",
    },
    {
      heading: "Paid media split by motion",
      body: "Google and Microsoft capture claimant intent. LinkedIn captures HR and founder buyers. Conversion actions are named distinctly, for example legal_employment_claimant_consult and legal_employment_employer_engaged. Shared budgets across those actions teach the wrong auction.",
    },
  ],
  stackNotes: [
    {
      heading: "Clio Grow intake for claimant urgency",
      body: "Clio Grow should own evening and weekend claimant forms with SLA timers. Disposition codes for out of scope, conflicts and consult booked feed weekly partner packs. Soft website events stay secondary.",
    },
    {
      heading: "HubSpot for employer lifecycle",
      body: "Employer opportunities use proposal and engagement letter stages with company size and sector. LinkedIn lead gen forms map to the same required fields as the website. Offline upload enrols only after marketing qualification.",
    },
    {
      heading: "LEAP and CallRail where firms diverge",
      body: "LEAP firms need the same buyer_type and consultation_outcome fields on the matter path. CallRail (or equivalent DNI) on claimant landing pages writes phone dispositions into HubSpot or Grow with gclid intact. Google and Microsoft Ads then optimise to consult booked, not 60-second call noise.",
    },
  ],
  proof: [
    {
      client: "Regional employment practice (anonymised)",
      anonymised: true,
      situation:
        "A regional solicitor firm with a busy employment desk was blending claimant search with employer LinkedIn leads in one CRM pipeline, so partners could not see which motion created consultations.",
      built:
        "Separate Google and LinkedIn conversion actions, HubSpot buyer_type and ACAS-aware stages, Clio Grow consult booked as the primary offline event, and CallRail on claimant landing pages.",
      results: [
        {
          metric: "Consult-to-instruct rate on paid claimant enquiries",
          before: "11%",
          after: "23%",
          window: "12 weeks",
        },
        {
          metric: "Employer LinkedIn leads reaching proposal stage",
          before: "8%",
          after: "27%",
          window: "90 days",
        },
        {
          metric: "Enquiries with buyer_type populated at intake",
          before: "34%",
          after: "91%",
          window: "60 days",
        },
      ],
      signedOff: false,
    },
  ],
  faqs: [
    {
      q: "Should employment claimants and employers share one Google Ads campaign?",
      a: "No. Different intent, different negatives, different conversion events. Shared budgets usually starve the slower, higher-value employer motion.",
    },
    {
      q: "Is LinkedIn worth it for employment solicitors?",
      a: "Yes for HR, people leaders and founders buying counsel. It is rarely the primary channel for volume claimant work.",
    },
    {
      q: "What CRM stage should train Smart Bidding?",
      a: "Qualified consultation booked for claimants, or engagement letter signed for employer retainers. Form submit alone teaches the wrong queries.",
    },
    {
      q: "Do you need Clio Grow specifically?",
      a: "You need an intake system that can emit consultation outcomes. Clio Grow is common; LEAP or HubSpot-only intake can work if fee earners update stages.",
    },
    {
      q: "How do ACAS timelines affect marketing?",
      a: "Capture deadline context as a property and keep response SLAs tight on claimant forms. Do not invent legal advice in ads; route urgency into intake.",
    },
    {
      q: "How does this relate to the legal solicitors pillar?",
      a: "Employment sits under legal and solicitors for navigation. The pillar covers firm-wide architecture; this page is the employment motion in detail.",
    },
  ],
  relatedIndustries: [
    {
      slug: "legal-solicitors",
      why: "Parent pillar for firm-wide Clio, HubSpot and multi-practice Google architecture, with Britton & Time as the named proof.",
    },
    {
      slug: "corporate-commercial-law",
      why: "Employer-side employment work often sits beside commercial counsel for the same HR and founder buyers on LinkedIn.",
    },
    {
      slug: "personal-injury-law",
      why: "Sibling consumer practice with heavier CPC pressure and longer litigated cycles, useful as a contrast when splitting legal budgets.",
    },
  ],
  resourceSlugs: [
    "attribution-health-check",
    "offline-conversion-upload-template",
    "negative-keyword-starter-lists",
  ],
  toolSlugs: [],
  blogTags: ["legal", "linkedin", "google-ads", "attribution", "crm"],
  moneyPages: [],
};

export default employmentLaw;
