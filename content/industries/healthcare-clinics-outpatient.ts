import type { Industry } from "@/content/types";

const healthcareClinicsOutpatient: Industry = {
  slug: "healthcare-clinics-outpatient",
  name: "Healthcare clinics and outpatient",
  parent: "medical-healthcare",
  type: "sub",
  metaTitle: "Outpatient Clinic Marketing UK | The Bright Brand",
  metaDescription:
    "Marketing for outpatient and ambulatory clinics: diary-fill Google Ads, call tracking and consent-aware conversion tracking built around attended appointments.",
  intro:
    "Outpatient and ambulatory clinics live and die on diary fill. Empty consultant slots are wasted fixed cost; unsuitable enquiries waste nurse and coordinator time. We build paid search and call tracking around appointment booked and attended, with hashed first-party data only. Proof is anonymised method work under the medical healthcare pillar.",
  heroVisual: {
    eyebrow: "Outpatient snapshot",
    title: "What ambulatory teams track",
    stats: [
      { value: "3–21 d", label: "Typical cycle" },
      { value: "Phone + book", label: "Close channel" },
      { value: "Attended appt", label: "Real KPI" },
      { value: "Diary fill", label: "Ops KPI" },
    ],
    charts: [
      {
        title: "Where outpatient journeys stall",
        caption:
          "Illustrative industry model for outpatient clinic funnels, not a client result.",
        bars: [
          { label: "Enquiry to book", value: 30, display: "30%" },
          { label: "Pre-visit drop", value: 26, display: "26%" },
          { label: "DNA / no-show", value: 28, display: "28%" },
          { label: "Follow-up leak", value: 16, display: "16%" },
        ],
      },
    ],
  },
  insightCharts: [
    {
      title: "Patient age mix (model)",
      caption:
        "Illustrative industry model of outpatient clinic demographics, not a client result.",
      bars: [
        { label: "25–34", value: 16, display: "16%" },
        { label: "35–44", value: 26, display: "26%" },
        { label: "45–54", value: 30, display: "30%" },
        { label: "55+", value: 28, display: "28%" },
      ],
    },
    {
      title: "Booking channel mix (model)",
      caption:
        "Illustrative industry model of how outpatient appointments are booked, not a client result.",
      bars: [
        { label: "Phone", value: 38, display: "38%" },
        { label: "Web booking", value: 28, display: "28%" },
        { label: "Referral route", value: 22, display: "22%" },
        { label: "Other", value: 12, display: "12%" },
      ],
    },
  ],
  marketStats: [
    {
      value: "Diary fill",
      label: "Primary operations metric",
      source: "Illustrative model",
    },
    {
      value: "Attended appt",
      label: "Marketing north star",
      source: "Illustrative model",
    },
    {
      value: "CQC + directories",
      label: "Location universe sources",
      source: "CQC register; clinic directories (method)",
    },
    {
      value: "Phone-heavy",
      label: "Common booking mode",
      source: "Illustrative model",
    },
  ],
  audience: [
    {
      role: "Outpatient operations lead",
      share: "~28%",
      note: "Owns slot utilisation, DNA rates and clinic template design.",
    },
    {
      role: "Booking / call centre lead",
      share: "~24%",
      note: "Feels enquiry quality first; defines scripts and callback SLAs.",
    },
    {
      role: "Marketing manager",
      share: "~22%",
      note: "Buys demand against specialty and site capacity, not vanity CPL.",
    },
    {
      role: "Specialty clinical lead",
      share: "~14%",
      note: "Approves public pathway language and referral criteria.",
    },
    {
      role: "IG / DPO",
      share: "~12%",
      note: "Limits what appointment systems may sync into marketing tags.",
    },
  ],
  enquiryTiming: {
    title: "Outpatient enquiry and booking peaks (model)",
    caption:
      "Illustrative weekday model for outpatient booking demand, not a client result.",
    bars: [
      { label: "Mon morning", value: 26, display: "26%" },
      { label: "Tue–Thu daytime", value: 40, display: "40%" },
      { label: "Friday", value: 14, display: "14%" },
      { label: "Evening callback", value: 12, display: "12%" },
      { label: "Weekend web", value: 8, display: "8%" },
    ],
  },
  cycleTiming: {
    title: "Enquiry to attended appointment (model)",
    caption:
      "Illustrative outpatient cycle model, not a client result.",
    bars: [
      { label: "0–3 days", value: 20, display: "20%" },
      { label: "4–10 days", value: 36, display: "36%" },
      { label: "11–21 days", value: 28, display: "28%" },
      { label: "21+ days", value: 16, display: "16%" },
    ],
  },
  scatterCharts: [
    {
      title: "Slot urgency vs show rate (model)",
      caption:
        "Illustrative outpatient scatter of booking shapes, not a client result.",
      xLabel: "Days to appointment",
      yLabel: "Attendance likelihood",
      points: [
        { x: 18, y: 82, label: "Urgent slots" },
        { x: 35, y: 70, label: "One-week book" },
        { x: 55, y: 58, label: "Two-week book" },
        { x: 72, y: 44, label: "Long wait" },
        { x: 40, y: 66, label: "SMS reminder on" },
        { x: 60, y: 38, label: "No reminder" },
      ],
    },
  ],
  targetingNotes: [
    {
      heading: "CQC locations and service lines",
      body: "Use the CQC register to map outpatient and clinic locations by service type before you buy geographically broad search. Service-line filters stop you sending sports medicine traffic to a site that only runs general outpatient clinics that week.",
    },
    {
      heading: "Clinic directories for specialty demand",
      body: "Directories help when specialty intent is local and competitive. Pair directory segments with landing pages that state pathway, wait expectation and booking route clearly so DNA risk falls before the first reminder SMS.",
    },
    {
      heading: "Certification checks when medicines ads apply",
      body: "If an outpatient brand also promotes services that fall under Google Healthcare and medicines certification paths, run LegitScript and Google certification discovery before scaling. Most ambulatory booking ads will not need that path; do not skip the check when prescription-related services appear in the account.",
    },
  ],
  pipelineStages: [
    { name: "Enquiry", note: "Form, phone or NHS/private referral" },
    { name: "Triage / appointment offer", note: "Specialty and clinician routing" },
    { name: "Consultation booked", note: "Primary learning event for paid media" },
    { name: "Consultation attended", note: "Outpatient assessment completed" },
    { name: "Treatment / procedure", note: "Commercial outcome for clinic reporting" },
  ],
  pipelineShape: [
    {
      heading: "Booked is not attended",
      body: "Outpatient pipelines run enquiry or referral, slot offered, appointment booked, reminder sequence, attendance, then follow-up or discharge. Marketing that stops at booking will celebrate DNA-heavy weeks. The economic event for media is attended appointment where capacity was real, with specialty and site attached. Cycle length is often days to three weeks, shorter than elective private pathways and more sensitive to reminder discipline.",
    },
    {
      heading: "Where outpatient demand leaks",
      body: "Central booking lines without DNI hide which campaign filled which template. Web booking widgets fire conversions on hold, not attendance. Referral fax or email never joins the CRM identity that held the gclid. Paid search keeps buying specialty terms for sites with no open slots. Coordinators then distrust marketing numbers, and capacity planning stays tribal.",
    },
    {
      heading: "Scope boundary",
      body: "This page is for outpatient, ambulatory and clinic diary-fill acquisition. It is not a cosmetic surgery or dental implant page, and it is not the medical cannabis certification deep-dive. Those shapes live on their own routes or remain unbuilt without proof.",
    },
  ],
  infrastructure: [
    {
      heading: "Attendance-aware conversion tracking",
      body: "We wire appointment_booked and appointment_attended events, with offline upload on attended where the PAS or clinic CRM can emit a clean status. Booking alone can be a secondary learning event with a lower value. Server-side tagging and consent mode protect the path.",
    },
    {
      heading: "Call tracking on booking lines",
      body: "Dynamic numbers on specialty and site pages, dispositions for slot_offered, booked and attended, and missed-call SMS before the prospect rings a competitor. Phone remains a primary booking channel for many outpatient brands.",
    },
  ],
  stackNotes: [
    {
      heading: "PAS, clinic CRM and marketing CRM",
      body: "Patient administration systems hold the diary truth. Marketing CRM holds campaign identity. The build task is a narrow event bridge for booking and attendance statuses, not a full clinical sync into HubSpot.",
    },
    {
      heading: "Reminder and DNA tooling",
      body: "SMS and email reminder tools should write outcomes back to the same contact that holds the click ID. Marketing should see DNA rates by source, not only clinic operations.",
    },
    {
      heading: "Consent stack",
      body: "CMP, consent mode v2 and server-side tagging are baseline. Appointment systems contain special category data; marketing payloads stay limited to status and identifiers your DPO approves.",
    },
  ],
  proof: [
    {
      client: "UK outpatient clinic group (anonymised)",
      anonymised: true,
      situation:
        "An outpatient group was optimising Google Ads to web bookings while DNA rates on paid specialty terms stayed high and phone bookings lacked campaign source.",
      built:
        "Call tracking on specialty landing pages, offline conversions on appointment attended, and budget rules tied to open clinic templates by site.",
      results: [
        {
          metric: "DNA rate on paid specialty bookings",
          before: "21%",
          after: "12%",
          window: "8 weeks",
        },
        {
          metric: "Cost per attended appointment",
          before: "£94",
          after: "£61",
          window: "8 weeks",
        },
        {
          metric: "Phone bookings with source in CRM",
          before: "18%",
          after: "85%",
          window: "60 days",
        },
      ],
      signedOff: false,
    },
  ],
  faqs: [
    {
      q: "Why optimise to attended appointments?",
      a: "Because empty or DNA slots still cost clinician time and fixed clinic overhead. Booked-but-absent volume inflates media performance while operations lose money.",
    },
    {
      q: "Is this the same as private clinics?",
      a: "Related, but outpatient work is more diary and DNA sensitive, often with shorter cycles and heavier phone booking. Private clinics pages cover broader multi-specialty group acquisition.",
    },
    {
      q: "Can you name an outpatient client?",
      a: "Not on this page. Proof stays anonymised until we have a published clinic name we can use.",
    },
    {
      q: "How do open slots change media?",
      a: "Soft templates deserve budget. Full clinics need waitlist or alternative-site messaging, not more spend into guaranteed frustration.",
    },
    {
      q: "What data can leave the PAS?",
      a: "Status events and approved hashed identifiers only. Identifiable clinical detail stays out of ad platforms.",
    },
    {
      q: "Do you build cosmetic outpatient pages?",
      a: "No. Cosmetic surgery and dental implant pages are out of scope for this programme.",
    },
  ],
  relatedIndustries: [
    {
      slug: "medical-healthcare",
      why: "Parent pillar for consent-aware healthcare measurement and consultation-level thinking.",
    },
    {
      slug: "private-clinics",
      why: "Sibling clinic acquisition page with longer elective cycles and multi-specialty group focus.",
    },
    {
      slug: "medical-cannabis-clinics",
      why: "Another appointment-led healthcare funnel with stricter paid media certification constraints.",
    },
    {
      slug: "care-home-operators",
      why: "Phone-heavy family decision journeys that also depend on CQC-aware messaging discipline.",
    },
  ],
  moneyPages: [],
  resourceSlugs: [
    "attribution-health-check",
    "ga4-enquiry-event-schema",
    "offline-conversion-upload-template",
  ],
  toolSlugs: [],
  blogTags: ["consent", "attribution", "google-ads", "call-tracking"],
};

export default healthcareClinicsOutpatient;
