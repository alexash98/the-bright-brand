import type { Industry } from "@/content/types";

const privateClinics: Industry = {
  slug: "private-clinics",
  name: "Private clinics",
  parent: "medical-healthcare",
  type: "sub",
  metaTitle: "Private Clinic Marketing Agency UK | The Bright Brand",
  metaDescription:
    "Marketing for UK private clinics: consultation-led Google Ads, call tracking and consent-aware attribution without shipping patient records to ad platforms.",
  intro:
    "Private clinic marketing fails when raw enquiries outrun triage. Coordinators need eligible consultations, not form spam. We build Google Ads and call tracking around consultation booked and attended, with hashed first-party data only and special category health detail kept out of ad platforms. Proof here is anonymised and method-led.",
  heroVisual: {
    eyebrow: "Private clinic snapshot",
    title: "What clinic groups track",
    stats: [
      { value: "1–6 wk", label: "Typical cycle" },
      { value: "Phone + form", label: "Close channel" },
      { value: "Consultation", label: "Real KPI" },
      { value: "Hashed 1P", label: "Data rule" },
    ],
    charts: [
      {
        title: "Where private clinic journeys stall",
        caption:
          "Illustrative industry model for private clinic funnels, not a client result.",
        bars: [
          { label: "Unqualified enquiry", value: 32, display: "32%" },
          { label: "Triage delay", value: 26, display: "26%" },
          { label: "Consult no-show", value: 24, display: "24%" },
          { label: "Treatment decline", value: 18, display: "18%" },
        ],
      },
    ],
  },
  insightCharts: [
    {
      title: "Enquiry age mix (model)",
      caption:
        "Illustrative industry model of private clinic enquiry demographics, not a client result.",
      bars: [
        { label: "25–34", value: 18, display: "18%" },
        { label: "35–44", value: 34, display: "34%" },
        { label: "45–54", value: 28, display: "28%" },
        { label: "55+", value: 20, display: "20%" },
      ],
    },
    {
      title: "Source mix into triage (model)",
      caption:
        "Illustrative industry model of private clinic enquiry sources, not a client result.",
      bars: [
        { label: "Paid search", value: 36, display: "36%" },
        { label: "Organic / brand", value: 24, display: "24%" },
        { label: "Referral", value: 26, display: "26%" },
        { label: "Other", value: 14, display: "14%" },
      ],
    },
  ],
  marketStats: [
    {
      value: "Multi-specialty",
      label: "Common group structure",
      source: "Illustrative model",
    },
    {
      value: "Consultation",
      label: "Commercial north star",
      source: "Illustrative model",
    },
    {
      value: "CQC register",
      label: "Primary UK universe source",
      source: "CQC register (method)",
    },
    {
      value: "Directories",
      label: "Specialty list targeting",
      source: "Clinic directories (method)",
    },
  ],
  audience: [
    {
      role: "Clinic marketing manager",
      share: "~30%",
      note: "Owns channel mix, landing pages and cost per consultation targets.",
    },
    {
      role: "Patient services lead",
      share: "~25%",
      note: "Owns triage scripts, diary capacity and no-show recovery.",
    },
    {
      role: "Operations / site director",
      share: "~20%",
      note: "Balances clinician utilisation across sites and specialties.",
    },
    {
      role: "DPO / IG lead",
      share: "~15%",
      note: "Approves what can leave clinical systems into marketing tags.",
    },
    {
      role: "Clinical lead",
      share: "~10%",
      note: "Signs off public-facing eligibility and treatment claim boundaries.",
    },
  ],
  enquiryTiming: {
    title: "Private clinic enquiry dayparts (model)",
    caption:
      "Illustrative hour mix for private clinic phone and form demand, not a client result.",
    bars: [
      { label: "07:30–10:30", value: 24, display: "24%" },
      { label: "10:30–13:30", value: 22, display: "22%" },
      { label: "13:30–16:30", value: 28, display: "28%" },
      { label: "16:30–20:00", value: 20, display: "20%" },
      { label: "Other", value: 6, display: "6%" },
    ],
  },
  cycleTiming: {
    title: "Enquiry to consultation attended (model)",
    caption:
      "Illustrative private clinic cycle lengths, not a client result.",
    bars: [
      { label: "0–7 days", value: 26, display: "26%" },
      { label: "1–3 weeks", value: 40, display: "40%" },
      { label: "3–5 weeks", value: 22, display: "22%" },
      { label: "5+ weeks", value: 12, display: "12%" },
    ],
  },
  scatterCharts: [
    {
      title: "Specialty intent vs triage load (model)",
      caption:
        "Illustrative plot of private clinic channel shapes, not a client result.",
      xLabel: "Relative enquiry volume",
      yLabel: "Triage acceptance",
      points: [
        { x: 80, y: 30, label: "Broad condition terms" },
        { x: 52, y: 58, label: "Specialty brand" },
        { x: 36, y: 76, label: "Consultant referral" },
        { x: 60, y: 44, label: "Generic private clinic" },
        { x: 44, y: 68, label: "Location + specialty" },
        { x: 28, y: 82, label: "Existing patient return" },
      ],
    },
  ],
  targetingNotes: [
    {
      heading: "CQC register for regulated locations",
      body: "Start with CQC-registered locations and service types that match the specialties you will advertise. Ratings and service descriptors help prioritise outreach and suppress inactive sites. They do not replace clinical claim review on landing pages.",
    },
    {
      heading: "Clinic directories by specialty",
      body: "Private clinic and consultant directories are useful when building multi-site ABM or competitive conquest lists. Segment by specialty and geography, then align landing paths so paid traffic lands on the correct site and clinician group.",
    },
    {
      heading: "LegitScript only when the ad path requires it",
      body: "Not every private clinic needs LegitScript. Apply LegitScript and Google certification checks when the operating model and Google Healthcare and medicines tables require them for the services you promote. Do not cargo-cult cannabis clinic certification onto unrelated specialties.",
    },
  ],
  pipelineStages: [
    { name: "Enquiry", note: "Form, phone or referral into clinic" },
    { name: "Triage / availability", note: "Specialty and fee earner routing" },
    { name: "Consultation booked", note: "Primary offline conversion for bidding" },
    { name: "Consultation attended", note: "Clinical assessment completed" },
    { name: "Treatment started", note: "Commercial outcome for clinic boards" },
  ],
  pipelineShape: [
    {
      heading: "Enquiry, triage, consultation, decision",
      body: "Private clinic journeys usually run enquiry or booking request, coordinator triage, consultation booked, consultation attended, then treatment plan accepted or declined. Multi-specialty groups add routing complexity: the wrong site or specialty in the first hour creates no-shows and angry clinicians. Cycle length is often one to six weeks depending on urgency and consultant availability. The commercial event is consultation attended with a suitable patient, not the first web form.",
    },
    {
      heading: "Where private clinic pipelines leak",
      body: "Shared phone numbers erase site-level attribution. Forms ask for symptom essays that then fire into browser tags. Google Ads optimises to thank-you pages while triage rejects half the volume. CRM stages skip from lead to patient with no consultation outcome. Each leak either wastes media or creates a UK GDPR problem, and often both.",
    },
    {
      heading: "What we do not build on this page",
      body: "This page is for private clinic and multi-specialty group acquisition. It is not a cosmetic surgery or dental implant money page. Those specialties have distinct claim and imagery rules and are out of scope until signed-off proof exists.",
    },
  ],
  infrastructure: [
    {
      heading: "Consultation events over vanity leads",
      body: "We define CRM and analytics events for enquiry received, triage accepted, consultation booked and consultation attended. Offline conversion upload uses the later events once volume and definitions are stable. Call tracking with dynamic number insertion per site or specialty cluster closes the phone gap.",
    },
    {
      heading: "Patient data minimisation in the tag layer",
      body: "Identifiable patient data never goes to ad platforms. Hashed first-party identifiers only where approved. Clinical free text stays in clinical or practice systems. Consent mode and server-side tagging are the default delivery path for UK clinic measurement.",
    },
  ],
  stackNotes: [
    {
      heading: "Practice and clinic CRMs",
      body: "Private clinics often run a practice management system for diary and clinical notes plus a lighter CRM or marketing automation layer for paid enquiries. Map status events across both without copying clinical notes into Google Ads payloads.",
    },
    {
      heading: "Call tracking and site routing",
      body: "CallRail or equivalent DNI pools per site or specialty cluster, with whisper context so coordinators know which landing path the caller used. Missed-call workflows matter when evening enquiries outrun daytime triage staffing.",
    },
    {
      heading: "Consent and server-side tagging",
      body: "CMP plus Google consent mode v2 and server-side Google Tag Manager (or equivalent) keep measurement aligned with consent. Field allowlists should be reviewed with the DPO before any enhanced conversion setup.",
    },
  ],
  proof: [
    {
      client: "UK multi-site private clinic group (anonymised)",
      anonymised: true,
      situation:
        "A multi-site private clinic group was scaling paid search on form fills while triage reported high unsuitability and clinical fields were present in the browser data layer.",
      built:
        "Site-level call tracking, consultation-attended offline conversions, removal of clinical free text from ad payloads, and campaign structure split by specialty cluster.",
      results: [
        {
          metric: "Paid enquiries accepted at triage",
          before: "29%",
          after: "51%",
          window: "12 weeks",
        },
        {
          metric: "Cost per consultation attended",
          before: "£168",
          after: "£102",
          window: "12 weeks",
        },
        {
          metric: "Clinical free-text fields in ad tags",
          before: "4",
          after: "0",
          window: "from rebuild",
        },
      ],
      signedOff: false,
    },
  ],
  faqs: [
    {
      q: "Is this page for cosmetic surgery clinics?",
      a: "No. Cosmetic surgery and dental implant pages are not part of this build. This page covers private clinic and multi-specialty group acquisition with consultation-led measurement.",
    },
    {
      q: "What is the primary conversion?",
      a: "Consultation booked or consultation attended, confirmed in the clinic CRM. Raw form fills are diagnostic only.",
    },
    {
      q: "Can you name a private clinic client?",
      a: "Not on this page. Proof stays anonymised until a published clinic name is available. Releaf is named on the medical cannabis clinics pages only.",
    },
    {
      q: "How do you use the CQC register?",
      a: "As a universe and qualification source for regulated locations and service types before paid or outbound targeting, not as a clinical claims shortcut.",
    },
    {
      q: "Do private clinics need LegitScript?",
      a: "Only when their advertised services and Google Healthcare and medicines requirements say so. We check the live policy path rather than assuming every clinic needs it.",
    },
    {
      q: "How does this relate to outpatient clinic pages?",
      a: "Outpatient and ambulatory groups share diary-fill and phone triage patterns. See healthcare clinics and outpatient for that shape.",
    },
  ],
  relatedIndustries: [
    {
      slug: "medical-healthcare",
      why: "Parent pillar for consent, hashing and consultation-level measurement across healthcare.",
    },
    {
      slug: "healthcare-clinics-outpatient",
      why: "Sibling motion focused on outpatient diary fill and ambulatory pathways.",
    },
    {
      slug: "medical-cannabis-clinics",
      why: "Named healthcare proof and certification-heavy paid search lessons under the same parent.",
    },
    {
      slug: "care-home-operators",
      why: "Another CQC-sensitive, phone-heavy acquisition problem with family decision makers.",
    },
  ],
  moneyPages: [],
  resourceSlugs: [
    "attribution-health-check",
    "ga4-enquiry-event-schema",
    "offline-conversion-upload-template",
  ],
  toolSlugs: [],
  blogTags: ["consent", "attribution", "call-tracking", "google-ads"],
};

export default privateClinics;
