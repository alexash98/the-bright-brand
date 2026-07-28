import type { Industry } from "@/content/types";

const careHomeOperators: Industry = {
  slug: "care-home-operators",
  name: "Care home operators",
  parent: "medical-healthcare",
  type: "sub",
  metaTitle: "Care Home Marketing Agency UK | The Bright Brand",
  metaDescription:
    "Marketing for UK care home operators: local Google Ads, call tracking for family enquiries, and CQC-aware landing pages that convert tours and assessments.",
  intro:
    "Care home marketing is a family decision under stress. Relatives search locally, call for availability, then book a tour or assessment. We build per-home Google Ads, call tracking and CRM stages around qualified family conversations, with CQC-aware messaging. The page also crosses to care home development on the construction side. Proof is anonymised and method-led.",
  heroVisual: {
    eyebrow: "Care home snapshot",
    title: "What operator teams track",
    stats: [
      { value: "1–8 wk", label: "Typical cycle" },
      { value: "Phone", label: "Primary close" },
      { value: "Tour / assess", label: "Real KPI" },
      { value: "Per home", label: "Budget unit" },
    ],
    charts: [
      {
        title: "Where family journeys stall",
        caption:
          "Illustrative industry model for care home enquiry funnels, not a client result.",
        bars: [
          { label: "Enquiry to callback", value: 28, display: "28%" },
          { label: "Tour no-show", value: 24, display: "24%" },
          { label: "Funding delay", value: 30, display: "30%" },
          { label: "Competitor choose", value: 18, display: "18%" },
        ],
      },
    ],
  },
  insightCharts: [
    {
      title: "Family decision-maker mix (model)",
      caption:
        "Illustrative industry model of care home enquiry contacts, not a client result.",
      bars: [
        { label: "Adult child", value: 48, display: "48%" },
        { label: "Spouse / partner", value: 18, display: "18%" },
        { label: "Self / resident", value: 12, display: "12%" },
        { label: "Professional ref", value: 22, display: "22%" },
      ],
    },
    {
      title: "Enquiry source mix (model)",
      caption:
        "Illustrative industry model of care home enquiry sources, not a client result.",
      bars: [
        { label: "Paid search", value: 34, display: "34%" },
        { label: "Directories", value: 22, display: "22%" },
        { label: "Organic / brand", value: 20, display: "20%" },
        { label: "Referral / other", value: 24, display: "24%" },
      ],
    },
  ],
  marketStats: [
    {
      value: "Per home",
      label: "Natural budget and landing unit",
      source: "Illustrative model",
    },
    {
      value: "Phone-led",
      label: "Dominant family close path",
      source: "Illustrative model",
    },
    {
      value: "CQC register",
      label: "Core targeting universe",
      source: "CQC register (method)",
    },
    {
      value: "Two funnels",
      label: "Resident acquisition + development",
      source: "SEGMENTS care-home framing",
    },
  ],
  audience: [
    {
      role: "Home / regional manager",
      share: "~30%",
      note: "Owns occupancy, tour diary and local reputation response.",
    },
    {
      role: "Admissions / enquiry lead",
      share: "~25%",
      note: "Takes family calls, qualifies funding context and books tours.",
    },
    {
      role: "Group marketing",
      share: "~20%",
      note: "Runs paid search and brand across multiple homes.",
    },
    {
      role: "Quality / CQC lead",
      share: "~15%",
      note: "Guards public claims against inspection reality.",
    },
    {
      role: "Development / estates",
      share: "~10%",
      note: "Owns new-home pipelines that cross into construction demand.",
    },
  ],
  enquiryTiming: {
    title: "When family enquiries arrive (model)",
    caption:
      "Illustrative daypart model for care home family calls and forms, not a client result.",
    bars: [
      { label: "08:00–11:00", value: 30, display: "30%" },
      { label: "11:00–14:00", value: 22, display: "22%" },
      { label: "14:00–17:00", value: 26, display: "26%" },
      { label: "Evening", value: 16, display: "16%" },
      { label: "Weekend", value: 6, display: "6%" },
    ],
  },
  cycleTiming: {
    title: "Enquiry to tour or assessment (model)",
    caption:
      "Illustrative care home family cycle model, not a client result.",
    bars: [
      { label: "Same week", value: 28, display: "28%" },
      { label: "1–3 weeks", value: 36, display: "36%" },
      { label: "3–6 weeks", value: 22, display: "22%" },
      { label: "6+ weeks", value: 14, display: "14%" },
    ],
  },
  scatterCharts: [
    {
      title: "Local intent vs tour quality (model)",
      caption:
        "Illustrative care home channel plot, not a client result.",
      xLabel: "Relative enquiry volume",
      yLabel: "Tour show / quality",
      points: [
        { x: 82, y: 28, label: "National generic terms" },
        { x: 50, y: 64, label: "Town + care type" },
        { x: 34, y: 78, label: "Home brand search" },
        { x: 58, y: 46, label: "Directory spill" },
        { x: 40, y: 70, label: "Professional referral" },
        { x: 66, y: 36, label: "Broad dementia terms" },
      ],
    },
  ],
  targetingNotes: [
    {
      heading: "CQC register as the operator universe",
      body: "The CQC register is the primary list for active care homes, service types and locations. Use it to build per-home paid structures and to suppress closed or out-of-scope services. Public ratings language on ads and landing pages must match what inspectors and families can verify.",
    },
    {
      heading: "Directories and local catchment",
      body: "Care directories still send material enquiry volume. Treat them as a channel with UTM discipline, not as an untracked side door. Paid search geos should match realistic family travel time for that home, not a national radius that burns budget.",
    },
    {
      heading: "LegitScript is rarely the care-home gate",
      body: "Resident acquisition ads are not the same certification path as medical cannabis telemedicine. Still check Google restricted categories if you advertise adjacent clinical services. Do not paste LegitScript requirements onto standard care home occupancy campaigns without a live policy reason.",
    },
    {
      heading: "Development crossover lists",
      body: "When the group also develops new homes, construction and planning intelligence lists matter on the estates side. Resident marketing and development marketing must not share one CRM stage model or one Google Ads conversion definition.",
    },
  ],
  pipelineStages: [
    { name: "Family enquiry", note: "Phone, form or referral; care need captured" },
    { name: "Initial assessment call", note: "Coordinator qualifies fit and funding route" },
    { name: "Home tour / visit", note: "Primary offline conversion for local search" },
    { name: "Assessment / fee agreed", note: "Room type and weekly fee confirmed" },
    { name: "Admission", note: "Move-in date; occupancy reporting truth" },
  ],
  pipelineShape: [
    {
      heading: "Family enquiry to move-in",
      body: "The resident acquisition funnel is enquiry, callback, needs and funding conversation, tour or assessment booked, tour attended, offer, then move-in. Cycles compress in crisis admissions and stretch when funding or family consensus lags. Decision makers are often adult children under time pressure. Phone is the primary close path even when a form started the journey. Occupancy teams care about qualified tours and assessments, not brochure downloads.",
    },
    {
      heading: "Two funnels inside one brand",
      body: "Operators often also run a development and acquisition funnel for new homes: land, planning, build partners and launch occupancy. That side crosses into construction care home work. Mixing development B2B enquiries into family paid search conversion actions contaminates Smart Bidding and confuses the board pack. Separate stages, separate numbers, shared brand rules.",
    },
    {
      heading: "Where enquiries leak",
      body: "One group phone number for twenty homes. Landing pages that promise a rating the home does not hold. CRM stages that jump from lead to resident with no tour outcome. Call tracking absent on the highest-intent town terms. Families call twice, get inconsistent availability answers, and choose the competitor who called back in an hour.",
    },
  ],
  infrastructure: [
    {
      heading: "Per-home ads, numbers and landing pages",
      body: "Google Ads structure by home or tight cluster, dynamic number insertion per home, and landing pages with accurate service type, location and CQC-aware claims. Offline conversions fire on tour booked and tour attended where the admissions CRM can confirm them.",
    },
    {
      heading: "CRM stages admissions will use",
      body: "Enquiry, callback complete, tour booked, tour attended, assessment, offer, move-in / lost. Required properties include home_id, care_type, funding_context and lost_reason. Development opportunities sit on a separate pipeline.",
    },
  ],
  stackNotes: [
    {
      heading: "Admissions CRM and occupancy tools",
      body: "Groups use specialist care CRM or HubSpot customised for admissions. Marketing needs home_id and tour outcomes, not full care plans. Never push resident clinical detail into ad platforms.",
    },
    {
      heading: "Call tracking on family lines",
      body: "CallRail or equivalent pools per home, after-hours voicemail rules, and missed-call SMS. Whisper prompts can name the home so admissions staff are not guessing which landing page was used.",
    },
    {
      heading: "Construction stack on the development side",
      body: "New-home development may involve tender and contractor relationships closer to our construction pages. Keep those deals out of the family enquiry conversion feed.",
    },
  ],
  proof: [
    {
      client: "Regional UK care group (anonymised)",
      anonymised: true,
      situation:
        "A regional care group ran national generic search into a single phone queue while several homes needed occupancy and others were full.",
      built:
        "Per-home campaign structure, DNI pools, tour-attended offline conversions, and landing pages rewritten for accurate service type and locality.",
      results: [
        {
          metric: "Qualified tours from paid enquiries",
          before: "16%",
          after: "31%",
          window: "12 weeks",
        },
        {
          metric: "Cost per tour attended",
          before: "£142",
          after: "£88",
          window: "12 weeks",
        },
        {
          metric: "Calls matched to home_id in CRM",
          before: "21%",
          after: "90%",
          window: "60 days",
        },
      ],
      signedOff: false,
    },
  ],
  faqs: [
    {
      q: "Why structure Google Ads by home?",
      a: "Availability, care type, catchment and reputation differ by site. A national generic campaign fills the wrong queue and starves homes that need occupancy.",
    },
    {
      q: "What is the primary conversion?",
      a: "Tour or assessment booked and attended beat raw form fills. Move-in can be a later value upload when volume allows.",
    },
    {
      q: "How does CQC affect creative?",
      a: "Claims about quality and services must stay consistent with the public record families can check. We do not write rating theatre into ads.",
    },
    {
      q: "Do you also market care home development?",
      a: "Yes as a separate funnel. Development demand crosses into construction. It should not share family occupancy conversion actions.",
    },
    {
      q: "Can you name a care home client?",
      a: "Not on this page. Proof stays anonymised until we have a published operator case we can name.",
    },
    {
      q: "Is patient or resident data used in ads?",
      a: "Identifiable resident and health data never goes to ad platforms. Measurement uses approved hashed first-party fields and stage outcomes only.",
    },
  ],
  relatedIndustries: [
    {
      slug: "medical-healthcare",
      why: "Parent pillar for CQC-aware, consent-aware healthcare and care acquisition patterns.",
    },
    {
      slug: "construction",
      why: "Care home development and build partners sit on the construction side of the same operator groups.",
    },
    {
      slug: "residential-home-builders",
      why: "Local, phone-heavy, site-level demand systems share call tracking and landing page discipline with housebuilder outlets.",
    },
    {
      slug: "private-clinics",
      why: "Another regulated, phone-influenced enquiry journey where qualification beats raw lead volume.",
    },
  ],
  moneyPages: [],
  resourceSlugs: [
    "attribution-health-check",
    "ga4-enquiry-event-schema",
    "offline-conversion-upload-template",
  ],
  toolSlugs: [],
  blogTags: ["call-tracking", "google-ads", "consent", "attribution"],
};

export default careHomeOperators;
