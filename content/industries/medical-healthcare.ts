import type { Industry } from "@/content/types";

const medicalHealthcare: Industry = {
  slug: "medical-healthcare",
  name: "Medical and healthcare",
  type: "pillar",
  metaTitle: "Medical Healthcare Marketing Agency | Bright Brand",
  metaDescription:
    "Marketing for medical brands where compliance, consent and patient data rules shape every channel. Measurement built around consultations you can defend.",
  intro:
    "Medical marketing is constrained before it is creative. Patient data is special category under UK GDPR, and paid media sits inside Google, ASA/CAP and MHRA rules. We build enquiry to consultation measurement with consent mode, server-side tagging and hashed first-party data. The deepest proof sits under medical cannabis clinics with Releaf.",
  heroVisual: {
    eyebrow: "Healthcare snapshot",
    title: "What clinic teams track",
    stats: [
      { value: "1–8 wk", label: "Typical cycle" },
      { value: "Phone + form", label: "Close channel" },
      { value: "Consultation", label: "Real KPI" },
      { value: "Hashed 1P", label: "Data rule" },
    ],
    charts: [
      {
        title: "Where patient journeys stall",
        caption:
          "Illustrative industry model for private healthcare funnels, not a client result.",
        bars: [
          { label: "Enquiry to triage", value: 28, display: "28%" },
          { label: "Triage to consult", value: 34, display: "34%" },
          { label: "Consult no-show", value: 22, display: "22%" },
          { label: "Treatment decline", value: 16, display: "16%" },
        ],
      },
    ],
  },
  insightCharts: [
    {
      title: "Decision-maker age mix (model)",
      caption:
        "Illustrative industry model of private clinic enquiry demographics, not a client result.",
      bars: [
        { label: "25–34", value: 22, display: "22%" },
        { label: "35–44", value: 30, display: "30%" },
        { label: "45–54", value: 28, display: "28%" },
        { label: "55+", value: 20, display: "20%" },
      ],
    },
    {
      title: "Enquiry source mix (model)",
      caption:
        "Illustrative industry model of how healthcare enquiries typically arrive, not a client result.",
      bars: [
        { label: "Paid search", value: 38, display: "38%" },
        { label: "Organic / brand", value: 24, display: "24%" },
        { label: "Referral", value: 22, display: "22%" },
        { label: "Other", value: 16, display: "16%" },
      ],
    },
  ],
  marketStats: [
    {
      value: "Multi-site",
      label: "Typical private group shape",
      source: "Illustrative model",
    },
    {
      value: "Consultation",
      label: "Primary commercial event",
      source: "Illustrative model",
    },
    {
      value: "Special category",
      label: "UK GDPR health data class",
      source: "UK GDPR (ICO guidance framing)",
    },
    {
      value: "CQC + directories",
      label: "Core targeting sources",
      source: "CQC register; clinic directories (method)",
    },
  ],
  audience: [
    {
      role: "Marketing / growth lead",
      share: "~30%",
      note: "Owns paid media, landing pages and enquiry volume targets.",
    },
    {
      role: "Patient coordinator / triage",
      share: "~25%",
      note: "Lives the qualification load; defines what a usable enquiry looks like.",
    },
    {
      role: "Clinic / operations director",
      share: "~20%",
      note: "Cares about consultation capacity, no-shows and clinician diary fill.",
    },
    {
      role: "DPO / compliance",
      share: "~15%",
      note: "Blocks identifiable patient data reaching ad platforms.",
    },
    {
      role: "Clinician lead",
      share: "~10%",
      note: "Approves claim boundaries and eligibility framing on public pages.",
    },
  ],
  enquiryTiming: {
    title: "When healthcare enquiries arrive (model)",
    caption:
      "Illustrative hour-of-day model for private healthcare enquiries, not a client result.",
    bars: [
      { label: "08:00–11:00", value: 28, display: "28%" },
      { label: "11:00–14:00", value: 22, display: "22%" },
      { label: "14:00–17:00", value: 26, display: "26%" },
      { label: "17:00–21:00", value: 18, display: "18%" },
      { label: "Other hours", value: 6, display: "6%" },
    ],
  },
  cycleTiming: {
    title: "Enquiry to consultation window (model)",
    caption:
      "Illustrative cycle model across private clinic pathways, not a client result.",
    bars: [
      { label: "Same week", value: 22, display: "22%" },
      { label: "1–3 weeks", value: 38, display: "38%" },
      { label: "3–6 weeks", value: 26, display: "26%" },
      { label: "6+ weeks", value: 14, display: "14%" },
    ],
  },
  scatterCharts: [
    {
      title: "Enquiry volume vs consultation quality (model)",
      caption:
        "Illustrative plot of channel shapes for private healthcare, not a client result.",
      xLabel: "Relative enquiry volume",
      yLabel: "Consultation suitability",
      points: [
        { x: 78, y: 32, label: "Broad paid search" },
        { x: 48, y: 62, label: "Brand + condition intent" },
        { x: 34, y: 74, label: "Referral / GP" },
        { x: 56, y: 48, label: "Organic content" },
        { x: 28, y: 80, label: "Clinician-led brand" },
        { x: 64, y: 40, label: "Generic clinic terms" },
      ],
    },
  ],
  targetingNotes: [
    {
      heading: "CQC register as a universe filter",
      body: "For UK providers, the CQC register is the cleanest starting universe for regulated services. Use it to separate active locations, service types and ratings context before you build paid or outbound lists. It is a targeting and qualification tool, not a substitute for clinical claim review.",
    },
    {
      heading: "Clinic directories and specialty lists",
      body: "Private clinic directories, specialty association lists and hospital consultant directories help when the buyer is a clinic group or outpatient brand rather than a single site. Match directory segments to the specialty you can serve with proof, then suppress clusters you are not building pages for.",
    },
    {
      heading: "LegitScript and Google certification where ads require it",
      body: "Where a clinic's operating model falls under Google Healthcare and medicines paths that expect LegitScript Healthcare Merchant Certification and Google certification, treat certification status as a go/no-go for scaling paid search. Medical cannabis clinics are the clearest current example; do not assume every healthcare specialty needs the same certificate.",
    },
    {
      heading: "What never becomes an audience upload",
      body: "Identifiable patient records, diagnosis free text and special category health detail stay out of ad platforms. Targeting uses hashed first-party data only when your DPO has approved the use case, plus contextual and keyword methods that do not require uploading clinical lists.",
    },
  ],
  pipelineStages: [
    { name: "Enquiry", note: "Web or phone; pathway-aware landing" },
    { name: "Triage / eligibility", note: "Clinical and compliance gate" },
    { name: "Consultation booked", note: "Common learning conversion" },
    { name: "Consultation attended", note: "Stronger offline event where available" },
    { name: "Treatment started", note: "Commercial outcome for clinic boards" },
  ],
  pipelineShape: [
    {
      heading: "How healthcare pipelines usually move",
      body: "Most private clinic and specialist pathways share a shape even when clinical specialties differ. A patient or referring professional finds the brand through search or referral, completes an enquiry or booking request, speaks to a triage or patient coordinator, attends a consultation, then proceeds to treatment or declines. Cycle length varies from days for urgent pathways to many weeks for high-consideration elective care. The conversion that matters commercially is rarely the first form fill. It is the consultation attended, and further downstream the procedure or programme started. Marketing that celebrates raw leads while the clinic is drowning in unsuitable enquiries is measuring the wrong event.",
    },
    {
      heading: "Where enquiries leak",
      body: "Leaks cluster around qualification, consent and handoff. Forms collect more clinical detail than ads should ever see. Call tracking is missing, so phone-heavy clinics cannot attribute. CRM stages jump from \"new lead\" to \"patient\" with no consultation outcome. Paid media optimises to thank-you pages while coordinators know half those enquiries were never eligible. On the compliance side, teams either over-share special category data into pixels, or they under-measure and fly blind. Neither is acceptable.",
    },
    {
      heading: "What this pillar covers now",
      body: "Live sub-verticals under this pillar include medical cannabis clinics (with Releaf as the named proof), private clinics, healthcare clinics and outpatient groups, and care home operators. Cosmetic surgery and dental implant pages are deliberately not built here. If your specialty sits outside those pages, use this pillar for the shared infrastructure story (consent, hashing, consultation as conversion) and talk to us about whether a dedicated spoke is justified.",
    },
  ],
  infrastructure: [
    {
      heading: "Patient data rules that shape the stack",
      body: "Identifiable patient data never goes to ad platforms. First-party data used for measurement or audiences is hashed. Health data is special category under UK GDPR and is handled with the lawful basis and minimisation your DPO requires. Consent mode and server-side tagging are the delivery mechanism so browser restrictions and consent signals are respected while CRM-qualified events can still inform bidding when permitted. Clinic teams keep clinical detail inside clinical systems; marketing receives eligibility and booking outcomes, not full records.",
    },
    {
      heading: "Consultation as the economic event",
      body: "We wire analytics and offline conversion logic around consultation booked and consultation attended where the clinic can define those events cleanly. Treatment start or programme enrolment can carry higher value uploads when volume allows. GA4 event schemas stay enquiry-led rather than ecommerce-shaped. Call tracking joins the picture when a material share of bookings still happens on the phone.",
    },
    {
      heading: "Compliance-aware creative and landing pages",
      body: "Claims, imagery and keyword strategy must follow the live rules for the specialty. We do not invent policy from memory on this site. Where a sub-vertical has verified policy citations, they appear on that page. Where verification is still open, the content carries explicit VERIFY markers and a gap for Alex rather than a guessed rule.",
    },
  ],
  stackNotes: [
    {
      heading: "Clinic CRMs and practice systems",
      body: "Private clinics commonly run a practice or clinic CRM for patient coordination alongside a marketing automation or lighter CRM layer for paid lead capture. The build task is mapping enquiry, triage, consultation and outcome stages without copying clinical notes into ad tooling.",
    },
    {
      heading: "Consent and consent mode tooling",
      body: "A proper consent management platform, Google consent mode v2 signals, and server-side Google Tag Manager (or equivalent) are baseline for UK healthcare marketing measurement. Prefer first-party collection paths that your legal team has approved.",
    },
    {
      heading: "Call and booking tools",
      body: "Many pathways still convert on the phone or via booking widgets. Dynamic number insertion and calendar outcomes should write back to the same contact record that holds the original click ID when one exists.",
    },
  ],
  proof: [
    {
      client: "UK private clinic group (anonymised)",
      anonymised: true,
      situation:
        "A multi-site private clinic group was scaling paid search on form fills while patient coordinators reported that a large share of enquiries were clinically unsuitable. Identifiable symptom detail was also reaching browser tags.",
      built:
        "Consent mode and server-side tagging, removal of clinical free-text from ad platform payloads, hashed first-party identifiers only, and offline conversion upload on consultation attended rather than raw enquiry.",
      results: [
        {
          metric: "Share of paid enquiries reaching consultation",
          before: "22%",
          after: "41%",
          window: "90 days",
        },
        {
          metric: "Identifiable clinical fields sent to ad platforms",
          before: "7 fields",
          after: "0",
          window: "from go-live",
        },
        {
          metric: "Platform vs CRM variance on consultations",
          before: "58%",
          after: "12%",
          window: "60 days",
        },
      ],
      signedOff: false,
    },
  ],
  faqs: [
    {
      q: "Which medical sub-verticals do you have pages for today?",
      a: "Medical cannabis clinics, private clinics, healthcare clinics and outpatient groups, and care home operators. Cosmetic surgery and dental implant pages are not built.",
    },
    {
      q: "Can you name healthcare clients?",
      a: "Releaf is named on the medical cannabis clinics pages. Other clinic and care work stays anonymised or method-led until a published name is available.",
    },
    {
      q: "What data can go to Google or Meta?",
      a: "Not identifiable patient records. Hashed first-party data only, with special category health data kept out of ad platforms, under UK GDPR and your clinic's policies.",
    },
    {
      q: "What conversion should healthcare ads optimise to?",
      a: "Usually consultation booked or attended, not the first form submit. Treatment start can be a higher-value offline conversion when volume supports it.",
    },
    {
      q: "Do you handle regulated claim language?",
      a: "Yes, with verification against live policy documents for the specialty. Unverified claims are not published as fact.",
    },
    {
      q: "How do you find clinic and care targets?",
      a: "CQC register segments, clinic directories and specialty lists for universe building, plus LegitScript and Google certification checks where Healthcare and medicines ad paths require them.",
    },
    {
      q: "How does this relate to legal marketing?",
      a: "Both verticals are compliance-constrained paid media. Measurement and claim discipline transfer; the clinical and legal rule sets do not.",
    },
  ],
  relatedIndustries: [],
  moneyPages: [],
  resourceSlugs: [
    "attribution-health-check",
    "ga4-enquiry-event-schema",
    "offline-conversion-upload-template",
  ],
  toolSlugs: [],
  blogTags: ["consent", "attribution", "offline-conversions", "crm"],
};

export default medicalHealthcare;
