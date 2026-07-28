import type { Industry } from "@/content/types";

const personalInjuryLaw: Industry = {
  slug: "personal-injury-law",
  name: "Personal injury law",
  parent: "legal-solicitors",
  type: "sub",
  metaTitle: "Personal Injury Marketing for Solicitors | Bright Brand",
  metaDescription:
    "Google Ads and call tracking for UK personal injury solicitors: high-CPC structure, phone-led intake, and conversions on qualified instructions.",
  intro:
    "Personal injury marketing lives under high CPC pressure and long litigated cycles. Most instructions still start on search and close on the phone. We structure Google and Microsoft by claim type, wire CallRail into Clio Grow, and optimise to qualified instructions, not every compensation form fill.",
  heroVisual: {
    eyebrow: "PI snapshot",
    title: "What personal injury teams track",
    stats: [
      { value: "2–18 mo", label: "Typical cycle" },
      { value: "Phone-led", label: "Close channel" },
      { value: "Qualified instruct", label: "Real KPI" },
      { value: "~£4.6bn", label: "Consumer segment" },
    ],
    charts: [
      {
        title: "Where PI enquiries stall",
        caption:
          "Illustrative industry model for personal injury funnels, not a client result.",
        bars: [
          { label: "No liability / low merit", value: 34, display: "34%" },
          { label: "Already instructed elsewhere", value: 18, display: "18%" },
          { label: "Limitation / evidence gap", value: 26, display: "26%" },
          { label: "Consult no-instruct", value: 22, display: "22%" },
        ],
      },
    ],
  },
  insightCharts: [
    {
      title: "Claim type enquiry mix (model)",
      caption:
        "Illustrative industry model of PI enquiry mix, not a client result.",
      bars: [
        { label: "RTA / road", value: 36, display: "36%" },
        { label: "Workplace", value: 22, display: "22%" },
        { label: "Public liability", value: 18, display: "18%" },
        { label: "Clinical / complex", value: 24, display: "24%" },
      ],
    },
    {
      title: "Phone versus form first touch (model)",
      caption:
        "Illustrative industry model of PI first-touch channel, not a client result.",
      bars: [
        { label: "Inbound call", value: 48, display: "48%" },
        { label: "Web form", value: 32, display: "32%" },
        { label: "Callback request", value: 12, display: "12%" },
        { label: "Referral warm handoff", value: 8, display: "8%" },
      ],
    },
  ],
  marketStats: [
    {
      value: "~£4.6bn",
      label: "PI / clinical negligence consumer segment",
      source: "UK Legal Services Market Report 2026 coverage",
    },
    {
      value: "~9,147",
      label: "SRA-regulated law firms (context)",
      source: "SRA Authorisation Annual Report 2023/24",
    },
    {
      value: "~51%",
      label: "Business/commercial share of legal services value (contrast)",
      source: "UK Legal Services Market Report 2026 coverage",
    },
  ],
  audience: [
    {
      role: "Injured claimant",
      share: "~70%",
      note: "High intent, often distressed; phone first; sensitive to claim language and speed of callback.",
    },
    {
      role: "Family member / carer",
      share: "~15%",
      note: "Researches on behalf of the injured person; needs plain-English next steps.",
    },
    {
      role: "PI practice lead / team leader",
      share: "~10%",
      note: "Owns panel capacity and rejects no-merit spam that burns fee-earner time.",
    },
    {
      role: "Intake / screening team",
      share: "~5%",
      note: "Runs scripts for liability, limitation and evidence before a fee earner is booked.",
    },
  ],
  enquiryTiming: {
    title: "When PI enquiries arrive (model)",
    caption:
      "Illustrative industry model for personal injury desks, not a client result.",
    bars: [
      { label: "Weekday daytime", value: 40, display: "40%" },
      { label: "Weekday evenings", value: 28, display: "28%" },
      { label: "Weekend", value: 20, display: "20%" },
      { label: "Late night", value: 12, display: "12%" },
    ],
  },
  cycleTiming: {
    title: "Enquiry to instruction (PI model)",
    caption:
      "Illustrative industry model of PI cycle length, not a client result.",
    bars: [
      { label: "Under 14 days", value: 28, display: "28%" },
      { label: "2–8 weeks", value: 34, display: "34%" },
      { label: "2–6 months", value: 24, display: "24%" },
      { label: "6+ months (complex)", value: 14, display: "14%" },
    ],
  },
  scatterCharts: [
    {
      title: "CPC pressure vs merit rate by theme (model)",
      caption:
        "Illustrative model of PI keyword families. Axes normalised 0–100, not a client result.",
      xLabel: "Relative CPC pressure",
      yLabel: "Screened merit rate",
      points: [
        { x: 88, y: 36, label: "No win no fee generic" },
        { x: 72, y: 48, label: "RTA solicitor" },
        { x: 65, y: 52, label: "Workplace injury" },
        { x: 58, y: 44, label: "Slip trip" },
        { x: 78, y: 62, label: "Clinical negligence" },
        { x: 40, y: 70, label: "Brand + office" },
      ],
    },
  ],
  targetingNotes: [
    {
      heading: "Google Ads claim-type architecture",
      body: "Split RTA, workplace, public liability and clinical or complex themes with their own budgets and negatives. Generic no win no fee terms need ruthless query review so they cannot empty the account. Brand and competitor sit apart. Microsoft Ads often captures older claimants Google reports alone will understate.",
    },
    {
      heading: "SRA publicity and claim language",
      body: "Keep ads and landing pages inside SRA publicity expectations: no guaranteed outcomes, no misleading fee claims, clear jurisdiction. VERIFY sensitive-category personalised advertising limits against live Google Ads Policy help before family-adjacent or injury creative launches.",
    },
    {
      heading: "Directories and competitive sets",
      body: "Law Society Find a Solicitor and SRA firm lists help validate who publicly offers personal injury in your catchment. Use them for auction and landing-page competitive checks, not as a bulk dialler list.",
    },
  ],
  pipelineStages: [
    { name: "Enquiry", note: "Search, phone or referral after incident" },
    { name: "Triage / merits", note: "Limitation, liability and funding route" },
    { name: "Consultation booked", note: "Primary offline conversion for bidding" },
    { name: "CFA / retainer signed", note: "Instruction; partner-approved outcome" },
    { name: "Matter open", note: "Clio Manage / LEAP is source of truth" },
  ],
  pipelineShape: [
    {
      heading: "From click to screened instruction",
      body: "A usable PI pipeline is enquiry (call or form), screening for liability, limitation and evidence, consultation or further investigation, then instruction and matter open. Litigated value may take months to become clear. Marketing that optimises to every compensation questionnaire will flood screening and train Google on no-merit traffic. Phone remains the commercial close channel for a large share of instructions.",
    },
    {
      heading: "Where PI accounts waste money",
      body: "Blending PI with conveyancing or employment in one non-brand budget is the firm-level failure. Inside PI, the failure is counting form fills equal to screened instructions, missing call tracking, and running generic no win no fee themes without claim-type structure. An anonymised composite of PI intake teams we have seen showed call-led enquiries contributing roughly half of instructions while receiving a minority of conversion credit when DNI was absent.",
    },
    {
      heading: "Long cycles and offline conversion",
      body: "Upload a screened qualified instruction or consultation event partners trust. Keep damages estimates internal if needed. Attribution windows must stretch beyond ecommerce defaults or late brand search will steal credit from the first high-intent click.",
    },
  ],
  infrastructure: [
    {
      heading: "CallRail into Clio Grow",
      body: "Dynamic numbers on PI landing pages write call recordings, duration and screening disposition into Clio Grow or HubSpot with gclid. Reception scripts capture claim_type, incident_date and already_instructed flags before a fee earner is booked.",
    },
    {
      heading: "Google and Microsoft under CPC pressure",
      body: "Campaigns follow claim type. Conversion actions such as legal_pi_screened_instruct train bidding. Server-side tagging and consent mode protect signal quality. Weekly query review is non-negotiable at these CPCs.",
    },
  ],
  stackNotes: [
    {
      heading: "Clio Grow screening stages",
      body: "Stages should mirror screening reality: new enquiry, screening in progress, consult booked, instructed, declined no merit. Required properties for claim_type and limitation_flag stop vanity volume looking like pipeline.",
    },
    {
      heading: "CallRail and Microsoft Ads",
      body: "CallRail pools per claim family where volume allows. Microsoft Ads gets the same offline qualified event as Google so Bing claimant traffic is not a blind channel. HubSpot can sit above Grow for marketing reporting if the firm already standardised on it.",
    },
    {
      heading: "LEAP matter open as secondary signal",
      body: "Where LEAP runs the matter, instruction confirmed in Grow or HubSpot remains the primary ad conversion; LEAP matter open can be a secondary learning event once IDs join cleanly.",
    },
  ],
  proof: [
    {
      client: "Multi-office PI intake team (anonymised)",
      anonymised: true,
      situation:
        "A multi-office personal injury team was paying legal CPCs into a single non-brand campaign and counting every web form, while roughly half of instructions started on the phone with no CRM credit.",
      built:
        "Claim-type Google and Microsoft structure, CallRail pools on PI landers, Clio Grow screened-instruction offline conversions, and negatives that contained generic no win no fee waste.",
      results: [
        {
          metric: "Phone instructions with recoverable click ID",
          before: "21%",
          after: "76%",
          window: "90 days",
        },
        {
          metric: "Cost per screened instruction",
          before: "£248",
          after: "£139",
          window: "90 days",
        },
        {
          metric: "No-merit forms reaching fee earners",
          before: "41%",
          after: "17%",
          window: "60 days",
        },
      ],
      signedOff: false,
    },
  ],
  faqs: [
    {
      q: "Why is personal injury harder than other legal Google Ads?",
      a: "CPCs are high, claim language is scrutinised, cycles are long, and phone still closes a large share. Weak structure gets expensive fast.",
    },
    {
      q: "What should ads optimise to?",
      a: "A screened qualified consultation or instruction after intake review. Raw compensation forms are a diagnostic, not a bidding target.",
    },
    {
      q: "Do you need call tracking for PI?",
      a: "Almost always. Without DNI and dispositions, the channel that creates instructions is invisible to Smart Bidding.",
    },
    {
      q: "Can PI share budget with conveyancing?",
      a: "Not in the same non-brand campaign. PI will either starve other practices or get polluted by cheaper form fills.",
    },
    {
      q: "How long is a sensible attribution window?",
      a: "Long enough for your mix of RTA and complex claims. Validate with closed instructions rather than copying a 30-day ecommerce default.",
    },
    {
      q: "Where does this sit in the site structure?",
      a: "Under the legal and solicitors pillar for navigation, with a flat URL for this practice page and its service spokes.",
    },
  ],
  relatedIndustries: [
    {
      slug: "legal-solicitors",
      why: "Parent pillar for multi-practice architecture and the named Britton & Time proof across Google, Microsoft and LinkedIn.",
    },
    {
      slug: "family-law",
      why: "Another consumer practice with sensitive claim language, phone-heavy intake and strict SRA publicity discipline.",
    },
    {
      slug: "commercial-insurance",
      why: "Injury and liability conversations often sit beside broker and insurer relationships on commercial claims.",
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

export default personalInjuryLaw;
