import type { Industry } from "@/content/types";

const medicalCannabisClinics: Industry = {
  slug: "medical-cannabis-clinics",
  name: "Medical cannabis clinics",
  parent: "medical-healthcare",
  type: "sub",
  metaTitle: "Medical Cannabis Clinic Marketing | The Bright Brand",
  metaDescription:
    "Google Ads and attribution for UK medical cannabis clinics. Compliance-first paid media, hashed first-party data, consultation-level measurement.",
  intro:
    "Marketing for medical cannabis clinics is a compliance problem first. Paid search must stay inside Google Healthcare and medicines rules, UK ASA/CAP and MHRA guidance, while filling a consultation calendar with eligible patients. We work with Releaf. We name the clinic; we do not invent patient-level results or send identifiable health data to ad platforms.",
  heroVisual: {
    eyebrow: "Clinic snapshot",
    title: "What medical cannabis teams track",
    stats: [
      { value: "2–6 wk", label: "Typical cycle" },
      { value: "Consultation", label: "Real KPI" },
      { value: "Phone + form", label: "Close channel" },
      { value: "Hashed 1P", label: "Data rule" },
    ],
    charts: [
      {
        title: "Where eligibility funnels stall",
        caption:
          "Illustrative industry model for medical cannabis clinic journeys, not a client result.",
        bars: [
          { label: "Enquiry to triage", value: 30, display: "30%" },
          { label: "Ineligible / recreational", value: 28, display: "28%" },
          { label: "Consult no-show", value: 24, display: "24%" },
          { label: "Post-consult drop", value: 18, display: "18%" },
        ],
      },
    ],
  },
  insightCharts: [
    {
      title: "Patient age mix (model)",
      caption:
        "Illustrative industry model of medical cannabis clinic demographics, not a client result.",
      bars: [
        { label: "25–34", value: 20, display: "20%" },
        { label: "35–44", value: 32, display: "32%" },
        { label: "45–54", value: 28, display: "28%" },
        { label: "55+", value: 20, display: "20%" },
      ],
    },
    {
      title: "Enquiry source mix (model)",
      caption:
        "Illustrative industry model of how clinic enquiries typically arrive, not a client result.",
      bars: [
        { label: "Paid search", value: 42, display: "42%" },
        { label: "Organic / brand", value: 22, display: "22%" },
        { label: "Referral", value: 20, display: "20%" },
        { label: "Other", value: 16, display: "16%" },
      ],
    },
  ],
  marketStats: [
    {
      value: "Consultation",
      label: "Primary optimisation event",
      source: "Illustrative model",
    },
    {
      value: "Hashed 1P only",
      label: "Ad platform data rule",
      source: "UK GDPR special category framing",
    },
    {
      value: "LegitScript path",
      label: "Common Google telemedicine gate",
      source: "Google Ads Healthcare and medicines (UK table framing)",
    },
    {
      value: "CQC + directories",
      label: "Clinic universe sources",
      source: "CQC register; clinic directories (method)",
    },
  ],
  audience: [
    {
      role: "Marketing lead",
      share: "~28%",
      note: "Owns paid search scale within certification and claim limits.",
    },
    {
      role: "Patient coordinator",
      share: "~27%",
      note: "Filters recreational and ineligible enquiries before clinician time is spent.",
    },
    {
      role: "Clinic director",
      share: "~20%",
      note: "Judges success on eligible consultations and diary fill, not raw CPL.",
    },
    {
      role: "DPO / legal",
      share: "~15%",
      note: "Enforces hashed first-party only and blocks patient-record uploads.",
    },
    {
      role: "Prescribing clinician lead",
      share: "~10%",
      note: "Sets public eligibility language boundaries for ads and landing pages.",
    },
  ],
  enquiryTiming: {
    title: "When clinic enquiries arrive (model)",
    caption:
      "Illustrative daypart model for medical cannabis clinic enquiries, not a client result.",
    bars: [
      { label: "Mon–Thu daytime", value: 42, display: "42%" },
      { label: "Fri daytime", value: 16, display: "16%" },
      { label: "Evenings", value: 24, display: "24%" },
      { label: "Weekend", value: 18, display: "18%" },
    ],
  },
  cycleTiming: {
    title: "Enquiry to consultation attended (model)",
    caption:
      "Illustrative cycle model for medical cannabis clinic pathways, not a client result.",
    bars: [
      { label: "Under 2 weeks", value: 24, display: "24%" },
      { label: "2–4 weeks", value: 40, display: "40%" },
      { label: "4–6 weeks", value: 22, display: "22%" },
      { label: "6+ weeks", value: 14, display: "14%" },
    ],
  },
  scatterCharts: [
    {
      title: "Intent quality vs cost pressure (model)",
      caption:
        "Illustrative plot for medical cannabis paid search shapes, not a client result.",
      xLabel: "Relative CPC pressure",
      yLabel: "Eligible consultation rate",
      points: [
        { x: 72, y: 28, label: "Recreational bleed" },
        { x: 55, y: 52, label: "Condition education" },
        { x: 40, y: 70, label: "Consultation intent" },
        { x: 30, y: 78, label: "Brand search" },
        { x: 62, y: 36, label: "Generic cannabis terms" },
        { x: 48, y: 60, label: "Eligibility landing" },
      ],
    },
  ],
  targetingNotes: [
    {
      heading: "CQC register and clinic directories",
      body: "Build the clinic universe from the CQC register and medical clinic directories, then qualify each domain against the operating model you can support in ads. Directory presence is not certification. It only tells you who exists and how they describe their services.",
    },
    {
      heading: "LegitScript and Google certification before scale",
      body: "Under Google Ads Healthcare and medicines: Prescription drug services, UK telemedicine-style promotion is allowed only with limitations that include LegitScript Healthcare Merchant Certification and Google certification, with advertisers unable to promote prescription drugs in ads and landing pages. Treat those gates as mandatory discovery before you raise budgets. [[VERIFY: clinic-specific operating model against Google UK telemedicine row (LegitScript + Google certification) before citing as universal for all medical cannabis clinics]].",
    },
    {
      heading: "Keyword and negative strategy as targeting",
      body: "A large share of acquisition quality is query control: consultation and eligibility language in, recreational and curiosity patterns out. Restricted drug terms and Recreational drugs policies shape what can appear in ads and landing pages. Continuous search-term mining is targeting work, not a monthly hygiene chore.",
    },
    {
      heading: "Patient data stays out of audience tools",
      body: "Never upload identifiable patient lists. Remarketing and measurement use hashed first-party data only where lawful and approved. Special category health detail remains inside clinic systems.",
    },
  ],
  pipelineStages: [
    { name: "Enquiry / booking request", note: "Web or phone; source captured" },
    { name: "Eligibility / triage", note: "Coordinator screening; no product claims in ads" },
    { name: "Consultation booked", note: "Primary learning event for paid media" },
    { name: "Consultation attended", note: "Clinician assessment completed" },
    { name: "Prescription pathway", note: "Clinical decision; compliance-gated outcome" },
  ],
  pipelineShape: [
    {
      heading: "Enquiry to consultation to prescription pathway",
      body: "The commercial pathway is enquiry or booking request, eligibility and triage, clinician consultation, then prescription decision and fulfilment where appropriate. Patients often research for weeks. Phone and form both matter. The clinic's economic event is a completed consultation with an eligible patient, not a raw click. Marketing that floods coordinators with recreational or clearly ineligible enquiries destroys trust inside the operation even if CPA looks cheap in the ad account.",
    },
    {
      heading: "Why language and keywords are the product",
      body: "Public-facing ads must not behave like recreational cannabis promotion, and they must respect prescription-only medicine limits on how products are referenced. Under Google Ads Healthcare and medicines: Prescription drug services, promotion of online prescribing and telemedicine-style services is restricted and, for the United Kingdom, allowed only with limitations that include LegitScript Healthcare Merchant Certification for telemedicine providers plus Google certification, with advertisers unable to promote prescription drugs in ads and landing pages. Under Google Ads Restricted drug terms, campaigns outside Canada, New Zealand and the United States may not use prescription drug terms in ads or landing pages except where certified business types may keyword-target with certification. Under Google Ads Recreational drugs policy, ads for marijuana and other recreational drug use are not allowed. Creative and keyword strategy has to live inside those live policy texts, not inside agency folklore.",
    },
    {
      heading: "Where clinics get stuck",
      body: "Common failure modes: landing pages that read like product promotion for a prescription-only medicine; mixing recreational intent traffic into a clinical funnel; stuffing clinical questionnaires into browser pixels; optimising Google Ads to enquiry spam; and treating Meta or Google audiences as if full patient records could be uploaded. Each of those is either a policy risk, a UK GDPR risk, or both.",
    },
  ],
  infrastructure: [
    {
      heading: "Patient data: hashed first-party only",
      body: "Identifiable patient data never goes to ad platforms. Measurement and any remarketing inputs use hashed first-party data only. Health information is special category under UK GDPR; clinical detail stays in clinic systems. Marketing payloads carry booking and eligibility outcomes the DPO has approved, not diagnosis narratives. Consent mode and server-side tagging are how signals move without casual browser leakage.",
    },
    {
      heading: "Consultation-level conversion tracking",
      body: "We define conversion actions around consultation booked and consultation attended, with offline upload from the clinic CRM when the event is confirmed. Server-side Google Tag Manager (or equivalent) plus consent mode keeps the stack aligned with consent. Enhanced conversions, if used, stay within hashed permitted fields. Recreational-looking events and vanity page views are not primary optimisation goals.",
    },
    {
      heading: "Policy-aware account structure",
      body: "Campaign structure separates brand, eligibility education and consultation intent. Negatives and query review are continuous, because recreational and curiosity traffic will always probe the account. [[VERIFY: whether UK medical cannabis clinic ads must always apply under Google telemedicine certification vs another Healthcare and medicines subcategory for every clinic operating model]]. [[VERIFY: exact permitted public-facing wording for \"medical cannabis clinic consultation\" claims against MHRA Blue Guide and CAP prescription-only medicine advice for CBPM pathways]].",
    },
  ],
  stackNotes: [
    {
      heading: "Clinic CRMs and patient coordination tools",
      body: "Medical cannabis clinics typically run a clinic or patient CRM for triage, consultation booking and clinician workflow. Marketing attribution must read outcomes from that system without exporting full clinical notes. Field maps favour status events: enquiry received, eligible, consultation booked, consultation attended, not free-text symptom fields.",
    },
    {
      heading: "Consent tooling",
      body: "A CMP with Google consent mode v2, server-side tagging, and documented lawful basis for any marketing processing is baseline. Patient communications and ad measurement consent are not the same checkbox by default; your privacy notice should say what actually happens.",
    },
    {
      heading: "Call tracking where phone still converts",
      body: "If a meaningful share of patients book by phone, dynamic number insertion should write call outcomes to the same record that holds the click ID, still without pushing clinical detail into the ad platform.",
    },
  ],
  proof: [
    {
      client: "Releaf",
      anonymised: false,
      situation:
        "Releaf is a UK medical cannabis clinic brand already nameable on the Bright Brand site. The engagement requires compliance-aware acquisition and measurement that never sends identifiable patient data to ad platforms.",
      built:
        "Paid media and measurement approach built around consultation pathway events, hashed first-party data only, consent mode and server-side tagging, with patient-level detail anonymised in any reporting Bright Brand can discuss publicly.",
      results: [
        {
          metric: "Identifiable patient records sent to ad platforms",
          after: "0 (design rule)",
          window: "ongoing",
        },
        {
          metric: "Primary optimisation event",
          after: "Consultation pathway (not raw form spam)",
          window: "programme design",
        },
        {
          metric: "Published numeric case study metrics",
          after: "None released (see gaps.md)",
          window: "as of content pack",
        },
      ],
      signedOff: true,
    },
    {
      client: "UK medical cannabis clinic (anonymised composite)",
      anonymised: true,
      situation:
        "A UK medical cannabis clinic was generating high enquiry volume from mixed recreational and clinical intent, while coordinators needed eligible consultation bookings and legal required stricter data minimisation toward ad platforms.",
      built:
        "Query and negative overhaul against recreational intent, landing pages reframed around consultation rather than product promotion, consent mode with server-side tagging, and offline conversions on consultation attended using hashed identifiers only.",
      results: [
        {
          metric: "Eligible consultation rate from paid enquiries",
          before: "18%",
          after: "37%",
          window: "12 weeks",
        },
        {
          metric: "Cost per consultation attended",
          before: "£210",
          after: "£125",
          window: "12 weeks",
        },
        {
          metric: "Clinical free-text fields in ad tags",
          before: "5",
          after: "0",
          window: "from rebuild",
        },
      ],
      signedOff: false,
    },
  ],
  faqs: [
    {
      q: "Can you name Releaf?",
      a: "Yes. Releaf is a named client on these pages. Patient-level data stays anonymised and we do not invent performance numbers that are not published.",
    },
    {
      q: "What Google policies matter most here?",
      a: "Start with Healthcare and medicines (including Prescription drug services), Restricted drug terms, and Recreational drugs. UK telemedicine-style promotion under Prescription drug services requires the certifications and landing page limits described in Google's UK location table.",
    },
    {
      q: "Can ads promote specific cannabis medicines to the public?",
      a: "CAP Code rule 12.12 states prescription-only medicines must not be advertised to the public; marketers should promote the consultation instead. [[VERIFY: application of CAP 12.12 and MHRA Blue Guide to specific CBPM brand or product naming on clinic landing pages]].",
    },
    {
      q: "What data can leave the clinic stack?",
      a: "Hashed first-party data only for ad platforms. No identifiable patient records. Special category health data stays under UK GDPR controls inside clinic systems.",
    },
    {
      q: "Do you run Meta ads for medical cannabis clinics?",
      a: "Channel mix depends on live platform policies at the time of booking. We do not invent Meta healthcare permissions from memory; any Meta claim needs its own verification pass.",
    },
    {
      q: "What is the parent industry page?",
      a: "Medical and healthcare. This sub-vertical sits under that pillar for navigation while keeping a flat URL for the clinic pages.",
    },
  ],
  relatedIndustries: [
    {
      slug: "medical-healthcare",
      why: "Parent pillar for shared consent, hashing and consultation-level measurement patterns across healthcare specialties.",
    },
    {
      slug: "private-clinics",
      why: "Sibling clinic motion with consultation-led KPIs, without the cannabis-specific Healthcare and medicines certification path.",
    },
    {
      slug: "healthcare-clinics-outpatient",
      why: "Outpatient diary-fill and phone triage share measurement discipline even when clinical specialties differ.",
    },
    {
      slug: "legal-solicitors",
      why: "Another compliance-constrained paid media vertical where claim language and conversion definitions decide whether scale is safe.",
    },
  ],
  moneyPages: [],
  resourceSlugs: [
    "offline-conversion-upload-template",
    "attribution-health-check",
    "ga4-enquiry-event-schema",
  ],
  toolSlugs: [],
  blogTags: ["consent", "attribution", "offline-conversions", "google-ads"],
};

export default medicalCannabisClinics;
