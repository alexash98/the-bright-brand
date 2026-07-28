import type { Industry } from "@/content/types";

const residentialConveyancing: Industry = {
  slug: "residential-conveyancing",
  name: "Residential conveyancing",
  parent: "legal-solicitors",
  type: "sub",
  metaTitle: "Conveyancing Marketing for Solicitors | Bright Brand",
  metaDescription:
    "Marketing for UK residential conveyancing teams: quote-led Google Ads, instruction tracking in Clio/LEAP, and attribution through to exchange.",
  intro:
    "Residential conveyancing is the short-cycle, quote-driven practice that exposes blended legal ad accounts first. Buyers compare fees in days, not months. We build Google around instruction and exchange events, keep quote spam out of Smart Bidding, and report what partners can defend in a Monday matter review.",
  heroVisual: {
    eyebrow: "Conveyancing snapshot",
    title: "What conveyancing teams track",
    stats: [
      { value: "2–21 days", label: "Quote to instruct" },
      { value: "Instruction", label: "Near KPI" },
      { value: "Exchange", label: "Real KPI" },
      { value: "Fee quote", label: "First gate" },
    ],
    charts: [
      {
        title: "Where conveyancing quotes stall",
        caption:
          "Illustrative industry model for residential conveyancing, not a client result.",
        bars: [
          { label: "Fee shopping only", value: 36, display: "36%" },
          { label: "Sale fell through", value: 22, display: "22%" },
          { label: "Instructed elsewhere", value: 24, display: "24%" },
          { label: "Capacity / SLA miss", value: 18, display: "18%" },
        ],
      },
    ],
  },
  insightCharts: [
    {
      title: "Matter type mix (model)",
      caption:
        "Illustrative industry model of conveyancing matter mix, not a client result.",
      bars: [
        { label: "Purchase", value: 34, display: "34%" },
        { label: "Sale", value: 28, display: "28%" },
        { label: "Sale and purchase", value: 26, display: "26%" },
        { label: "Remortgage / transfer", value: 12, display: "12%" },
      ],
    },
    {
      title: "Quote source mix (model)",
      caption:
        "Illustrative industry model of conveyancing enquiry sources, not a client result.",
      bars: [
        { label: "Paid search", value: 44, display: "44%" },
        { label: "Estate agent referral", value: 28, display: "28%" },
        { label: "Organic / brand", value: 18, display: "18%" },
        { label: "Other", value: 10, display: "10%" },
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
      value: "Below ~9,000",
      label: "Firms by end-2025 (consolidation pressure)",
      source: "UK Legal Services Market Report 2026 coverage",
    },
    {
      value: "~177,841",
      label: "Practising solicitors (Jun 2026 series)",
      source: "SRA regulated population statistics",
    },
  ],
  audience: [
    {
      role: "Home mover (purchase / sale)",
      share: "~65%",
      note: "Compares fee quotes quickly; phone and form both matter; SLA on quote turnaround decides instruction.",
    },
    {
      role: "Estate agent / broker referrer",
      share: "~20%",
      note: "Sends panel work; marketing must not break referral relationships with clumsy retargeting.",
    },
    {
      role: "Conveyancing partner / team leader",
      share: "~10%",
      note: "Owns capacity and abort rates; hates quote volume that never instructs.",
    },
    {
      role: "Remortgage / transfer client",
      share: "~5%",
      note: "Lower fee, faster cycle; should not train the same bidding target as a chain purchase without a value model.",
    },
  ],
  enquiryTiming: {
    title: "When conveyancing quotes arrive (model)",
    caption:
      "Illustrative industry model for conveyancing desks, not a client result.",
    bars: [
      { label: "Mon–Tue", value: 36, display: "36%" },
      { label: "Wed–Thu", value: 30, display: "30%" },
      { label: "Friday", value: 18, display: "18%" },
      { label: "Weekend", value: 16, display: "16%" },
    ],
  },
  cycleTiming: {
    title: "Quote to exchange timing (model)",
    caption:
      "Illustrative industry model of conveyancing timing, not a client result.",
    bars: [
      { label: "Instruct in 7 days", value: 40, display: "40%" },
      { label: "Instruct in 8–21 days", value: 32, display: "32%" },
      { label: "Exchange 6–12 weeks", value: 18, display: "18%" },
      { label: "Abort / long chain", value: 10, display: "10%" },
    ],
  },
  scatterCharts: [
    {
      title: "Quote CPL vs instruction rate (model)",
      caption:
        "Illustrative model of conveyancing keyword families. Axes normalised 0–100, not a client result.",
      xLabel: "Relative cost per quote",
      yLabel: "Quote-to-instruct rate",
      points: [
        { x: 25, y: 22, label: "Cheap conveyancing generic" },
        { x: 40, y: 38, label: "Conveyancing solicitor + town" },
        { x: 55, y: 52, label: "Purchase conveyancing" },
        { x: 48, y: 58, label: "Sale and purchase" },
        { x: 35, y: 45, label: "Remortgage" },
        { x: 70, y: 72, label: "Brand + quote tool" },
      ],
    },
  ],
  targetingNotes: [
    {
      heading: "Google Ads quote intent themes",
      body: "Separate purchase, sale, sale-and-purchase and remortgage themes. Geo modifiers and office landing paths matter because movers search locally. Negatives must strip jobs, commercial property and DIY deed queries. Do not let PI or employment leftovers share this budget.",
    },
    {
      heading: "Estate agent panel dynamics",
      body: "Paid search should complement referral relationships, not spam the same movers with clumsy remarketing that angers panel partners. HubSpot lists for agents and clients need clear suppression rules.",
    },
    {
      heading: "Directory validation",
      body: "Law Society Find a Solicitor and SRA lists help check how competitors present conveyancing fees and offices in your towns. Use them for positioning checks, not bulk outreach.",
    },
  ],
  pipelineStages: [
    { name: "Enquiry / quote request", note: "Purchase, sale or remortgage captured" },
    { name: "Quote issued", note: "Fixed fee or scale quote delivered" },
    { name: "Instruction", note: "Client accepts terms; file opened" },
    { name: "Exchange", note: "Legally binding milestone where applicable" },
    { name: "Completion", note: "Commercial close; referral and review trigger" },
  ],
  pipelineShape: [
    {
      heading: "Quote, instruct, exchange",
      body: "The commercial path is quote request, fee quote issued, instruction confirmed, then matter progress to exchange and completion. Cycle to instruction can be days. Cycle to exchange is weeks and full of abort risk. If Google optimises to every quote form, you will win fee shoppers and lose the instructions that fill fee-earner capacity. Matter open in Clio Manage or LEAP is necessary but not sufficient; instruction confirmed is the marketing event that usually trains ads first.",
    },
    {
      heading: "Where conveyancing marketing leaks",
      body: "Quote tools without capacity checks. Shared legal budgets where conveyancing becomes the cheap form filler for the whole firm. Missing office routing so a Brighton quote lands on a London fee earner. Abort and fall-through never feeding back, so channels that create fragile chains look as good as channels that create exchanges.",
    },
    {
      heading: "Attribution through to exchange",
      body: "Keep gclid from quote through instruction. Upload instruction as the primary offline conversion; exchange can be a secondary value event when finance agrees. Abort reasons belong in CRM so board packs show quality, not only volume.",
    },
  ],
  infrastructure: [
    {
      heading: "Clio or LEAP instruction events",
      body: "Map HubSpot or website quote records to Clio Grow/Manage or LEAP matter references. Required properties: matter_type, office, property_postcode_outcode, quote_value_band and instruction_status. Offline upload fires on instruction confirmed.",
    },
    {
      heading: "Google structure that mirrors desks",
      body: "Campaigns by matter family and office geo where volume allows. Call tracking on quote pages if phone still converts a material share. Weekly packs show quote to instruct to exchange, not CPL alone.",
    },
  ],
  stackNotes: [
    {
      heading: "Clio Manage and quote tools",
      body: "Many conveyancing teams run a quote calculator into Clio Grow, then Manage on instruction. The join fails when the calculator thank-you page is the only conversion. We persist click IDs into the quote record and promote them on instruction.",
    },
    {
      heading: "LEAP-centred desks",
      body: "LEAP firms need the same instruction_status write-back into HubSpot or a lightweight marketing DB for offline upload. Fee-earner adoption of matter open timing decides whether exchange can ever become a bidding signal.",
    },
    {
      heading: "HubSpot capacity and SLA",
      body: "HubSpot workflows can alert when quote SLA breaches or when an office is at capacity. That is operational marketing infrastructure, not a soft nurture sequence for people who already instructed elsewhere.",
    },
  ],
  proof: [
    {
      client: "Regional conveyancing unit (anonymised)",
      anonymised: true,
      situation:
        "A regional conveyancing unit generated high quote volume from Google while partners judged success on instructions and exchanges that never appeared in the ad account.",
      built:
        "Matter-type campaign split, quote-to-instruction offline conversions into Google Ads, LEAP matter references joined to HubSpot quote IDs, and office-level landing paths.",
      results: [
        {
          metric: "Quote-to-instruct rate from paid search",
          before: "9%",
          after: "17%",
          window: "12 weeks",
        },
        {
          metric: "Instructions with recoverable gclid",
          before: "26%",
          after: "79%",
          window: "12 weeks",
        },
        {
          metric: "Cost per instruction",
          before: "£118",
          after: "£71",
          window: "12 weeks",
        },
      ],
      signedOff: false,
    },
  ],
  faqs: [
    {
      q: "Should we optimise Google Ads to quote requests?",
      a: "As a learning or diagnostic event maybe. Primary bidding should move to instruction confirmed as soon as volume allows.",
    },
    {
      q: "How do estate agent referrals fit paid search?",
      a: "Protect referral relationships with suppression and clear offer rules. Paid search captures movers who will not wait for a panel introduction.",
    },
    {
      q: "Do remortgage matters need separate campaigns?",
      a: "Yes when volume supports it. Fee and cycle differ from sale-and-purchase chains.",
    },
    {
      q: "Is LinkedIn useful for conveyancing?",
      a: "Rarely as a primary consumer channel. Agent relationship work is usually offline BD, not LinkedIn lead gen forms.",
    },
    {
      q: "Which practice system do you prefer?",
      a: "Clio and LEAP both work. The instruction event and ID join matter more than the logo.",
    },
    {
      q: "How does this page relate to legal solicitors?",
      a: "It is a practice sub-vertical under the legal and solicitors pillar, with flat URLs for the conveyancing hub and its service spokes.",
    },
  ],
  relatedIndustries: [
    {
      slug: "legal-solicitors",
      why: "Parent pillar for firm-wide practice architecture; conveyancing is usually the first desk that proves blended budgets are broken.",
    },
    {
      slug: "residential-home-builders",
      why: "New-home movers create conveyancing demand; housebuilder reservation timing and solicitor instruction timing often touch the same household.",
    },
    {
      slug: "wills-probate-law",
      why: "Sibling private client practice with longer cycles and different search language, useful when splitting consumer legal budgets.",
    },
  ],
  resourceSlugs: [
    "offline-conversion-upload-template",
    "ga4-enquiry-event-schema",
    "attribution-health-check",
  ],
  toolSlugs: [],
  blogTags: ["legal", "google-ads", "attribution", "crm"],
  moneyPages: [],
};

export default residentialConveyancing;
