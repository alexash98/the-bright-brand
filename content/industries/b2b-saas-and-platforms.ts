import type { Industry } from "@/content/types";

const b2bSaasAndPlatforms: Industry = {
  slug: "b2b-saas-and-platforms",
  name: "B2B SaaS and consultants",
  type: "pillar",
  metaTitle: "B2B SaaS and Consultants Marketing Agency | Bright Brand",
  metaDescription:
    "Marketing for B2B SaaS companies and consultants: enterprise pipeline, procurement software, category tools and vertical SaaS, with closed ARR as the conversion.",
  heroH1: "B2B SaaS and consultants marketing agency",
  wedge:
    "You do not have an MQL problem, you have a closed-ARR problem. Search is thin, committees are large, and cycles run months. We build one pipeline across outbound, LinkedIn and paid search.",
  intro:
    "This hub covers marketing for B2B SaaS companies and consultants: enterprise pipeline, procurement software, category tools and adjacent vertical SaaS. Search is thin, committees are large, cycles run months to a year. We treat closed ARR as the conversion, not MQL volume, and build CRM stages that match how enterprise deals actually close. Canopy is the named proof.",
  proofLead: {
    heading:
      "Outbound, LinkedIn and paid search as one enterprise pipeline, not three reports.",
    body: "We build HubSpot stages, ARR fields and offline conversion so enterprise conversations land in one commercial number. Canopy is the named proof, with Doug McLean on the client side of that relationship. Open consulting firms, supplier platforms or enterprise SaaS below for the motion that matches how you sell.",
    quoteId: "canopy",
    quoteIds: ["canopy"],
    askAiPrompt:
      "How can The Bright Brand help a B2B SaaS company or consultant with LinkedIn, outbound and HubSpot so enterprise pipeline and ARR train acquisition? Summarise from thebrightbrand.com.",
  },
  heroVisual: {
    eyebrow: "For B2B SaaS and consultants",
    title: "What the account shows you, and what we put on the board",
    variant: "contrast",
    strapline: "MQLs look busy. Closed ARR is the score.",
    contrastHeaders: { left: "The ad account", right: "Your board" },
    contrastRows: [
      { before: "MQL volume", after: "Sales-accepted meetings" },
      { before: "Cheap CPL", after: "Cost per enterprise conversation" },
      { before: "Demo form fills", after: "Closed ARR" },
      { before: "30-day ROAS", after: "Pipeline across 6–12 month cycles" },
    ],
  },
  heroCta: {
    primaryLabel: "Send your ICP or account list",
    secondaryLabel: "See how the first 90 days work",
    secondaryHref: "#engagement",
  },
  pipelineHeading:
    "Why your channel reports and your CRM never tell the same story",
  servicesHeading: "Where we start on your account",
  servicesIntro:
    "Start with the bottleneck: HubSpot stage design, named-account outbound, LinkedIn into buying committees, or the offline loop that ties closed ARR back into bidding. Open the sector page that matches how you sell.",
  serviceCardCtaLabel: null,
  briefing: {
    eyebrow: "Built with your GTM team",
    heading: "How we work with your sales team, not around them",
    intro:
      "You already know your ICP, your champions and your stall points in security and legal. We bring outbound, LinkedIn and CRM discipline into that motion so pipeline and closed ARR sit in one number the board trusts.",
    marketHeading: "The numbers your board will actually use",
    targetingHeading: "How we find demand with you",
  },
  engagement: {
    eyebrow: "Commercials and the first 90 days",
    heading: "How we charge, and what the first quarter looks like",
    intro:
      "Retainer or project-based, scoped against your ICP and stack in week one so you see the number before campaigns start. No long lock-in while we are both proving it works.",
    commercials: {
      heading: "Build, then retainer",
      body: "A one-off build for CRM stages, outbound infrastructure and offline conversion, then a monthly retainer for outbound, LinkedIn and paid search. Week one covers NDA, contract, access and a commercial scoped against your named account list.",
    },
    steps: [
      {
        name: "Days 1 to 14: ICP, access and CRM structure",
        body: "NDA and contract signed. ICP and suppression lists agreed. HubSpot stages, ARR fields and offline conversion plan in place before outbound scales.",
      },
      {
        name: "Weeks 2 to 4: outbound and LinkedIn live",
        body: "Sequences and LinkedIn running against named titles. Paid search amplifies messaging that already wins in outbound. Meetings write back to the same deal object.",
      },
      {
        name: "End of month one: meetings, not MQLs",
        body: "Reporting shifts to sales-accepted meetings and stage survival. Cost per enterprise conversation replaces cost per lead.",
      },
      {
        name: "Quarter one: pipeline to closed ARR",
        body: "Open pipeline shows multi-touch reality. First closed ARR uploads train bidding. We scale what earns meetings that survive committee scrutiny.",
      },
    ],
  },
  marketStats: [
    {
      value: "6–12 mo",
      label: "Typical enterprise evaluation cycle",
      source: "Illustrative model (Canopy-shaped motion)",
    },
    {
      value: "UK / US / EU",
      label: "Common geographic coverage for supplier platforms",
      source: "Illustrative model",
    },
    {
      value: "4–8",
      label: "Stakeholders before signature",
      source: "Illustrative model",
    },
    {
      value: "Thin search",
      label: "Category keyword demand vs contract value",
      source: "Illustrative model",
    },
  ],
  audience: [
    {
      role: "Head of Procurement",
      share: "30%",
      note: "Owns supplier risk and onboarding outcomes; responds to peer proof and ERP coexistence, not generic SaaS slogans.",
    },
    {
      role: "Procurement Director",
      share: "22%",
      note: "Budget and vendor shortlist control; multi-quarter evaluation with Finance and Legal.",
    },
    {
      role: "Category Manager",
      share: "20%",
      note: "Day-to-day pain on supplier data quality; strong LinkedIn and outbound responder when messaging is specific.",
    },
    {
      role: "Head of Supply Chain",
      share: "16%",
      note: "Operational continuity and risk; often co-owns the business case with procurement.",
    },
    {
      role: "Finance / Risk / IT",
      share: "12%",
      note: "Security questionnaires, commercial terms and system integration veto power late in the cycle.",
    },
  ],
  enquiryTiming: {
    title: "When procurement conversations open (model)",
    caption:
      "Illustrative industry model of when Heads of Procurement engage outbound and LinkedIn, not a client result.",
    bars: [
      { label: "Tue–Thu mornings", value: 40, display: "40%" },
      { label: "Mon / Fri", value: 24, display: "24%" },
      { label: "Afternoons", value: 26, display: "26%" },
      { label: "Evenings", value: 10, display: "10%" },
    ],
  },
  cycleTiming: {
    title: "First touch to closed ARR (model)",
    caption:
      "Illustrative industry model of procurement software cycle bands, not a client result.",
    bars: [
      { label: "Under 3 months", value: 12, display: "12%" },
      { label: "3–6 months", value: 28, display: "28%" },
      { label: "6–12 months", value: 40, display: "40%" },
      { label: "12+ months", value: 20, display: "20%" },
    ],
  },
  scatterCharts: [
    {
      title: "ARR opportunity vs cycle length (model)",
      caption:
        "Illustrative industry model plotting relative ARR against evaluation length for supplier platforms. Not a client result.",
      xLabel: "Cycle length (relative)",
      yLabel: "ARR opportunity (relative)",
      points: [
        { x: 25, y: 30, label: "Mid-market SaaS buy" },
        { x: 40, y: 45, label: "Single-entity ERP" },
        { x: 55, y: 58, label: "Multi-site UK" },
        { x: 68, y: 72, label: "Group procurement" },
        { x: 80, y: 85, label: "Global roll-out" },
        { x: 48, y: 40, label: "Category pilot" },
        { x: 72, y: 65, label: "Risk / ESG add-on" },
        { x: 35, y: 28, label: "SMB tooling" },
      ],
    },
  ],
  targetingNotes: [
    {
      heading: "Apollo and LinkedIn for procurement titles",
      body: "Build ICP lists around Head of Procurement, Procurement Director, Head of Supply Chain and Category Manager across UK, US and EU. Apollo-style enrichment plus LinkedIn Sales Navigator role filters outperform broad job-function ads. Suppress customers and open opportunities from HubSpot every week.",
    },
    {
      heading: "Companies House for mid-market buyers",
      body: "Companies House size, SIC and officer data help size mid-market accounts that will not appear on enterprise ABM lists. Useful for outbound domains and for matching LinkedIn Company lists when CRM coverage is thin.",
    },
    {
      heading: "Canopy ICP sectors and fit-out crossover",
      body: "Canopy's published motion spans commercial sectors rather than one niche. On the other side of the table, commercial fit-out contractors sell into the same procurement buyers. Shared title lists and objection language make ABM sharper on both sides.",
    },
  ],
  pipelineStages: [
    { name: "Target account identified", note: "SIC, employee band, tech stack" },
    { name: "Multithreaded outreach", note: "Procurement + IT + finance roles" },
    { name: "Discovery / demo", note: "Sales-accepted meeting" },
    { name: "Security / legal review", note: "Long B2B stall point" },
    { name: "Closed-won ARR", note: "Offline conversion for LinkedIn and outbound" },
  ],
  pipelineShape: [
    {
      heading: "Who buys and how long it takes",
      body: "The buyer is rarely a lone marketer or IT lead. The decision sits with Head of Procurement, Procurement Director, Head of Supply Chain or Category Manager, often with Finance, Legal, Risk and IT in the room before a contract lands. Geography spans UK, US and EU, and the same playbook has to work across commercial sectors rather than one vertical niche. Addressable search demand is small relative to contract value. A Head of Procurement does not type a high-intent query every week. They respond when a peer introduction, a relevant LinkedIn message, or a sharp paid search result meets a live supplier-risk or compliance problem. Cycles of six to twelve months are normal. Anything that optimises only to a demo form inside a thirty-day window will misread the book.",
    },
    {
      heading: "Where the pipeline leaks",
      body: "Leaks show up in three places. First, outbound and LinkedIn conversations die in inboxes because nobody owns the handoff into HubSpot with clear next steps. Second, paid search and retargeting get judged on MQLs while sales only cares about meetings that survive procurement scrutiny. Third, stage definitions collapse under a long cycle: deals sit in a vague \"opportunity\" stage for nine months, forecasts become fiction, and Google Ads never sees the closed ARR that would have justified the early spend. The fix is not a louder campaign. It is one system where outbound volume, LinkedIn acceptance and paid search click IDs all land on the same deal object, with offline conversion upload when revenue closes.",
    },
    {
      heading: "Outbound, LinkedIn and paid as one system",
      body: "For supplier management platforms, cold email infrastructure at scale, LinkedIn connection and messaging sequences, and paid search must share targeting, messaging tests and attribution. On Canopy, that meant roughly 50,000 outreach messages a month, around 25 new campaigns a month, and a 50 percent LinkedIn connection acceptance rate into procurement and supply chain roles, feeding HubSpot rather than three separate spreadsheets. Paid search then amplifies the language that already wins in outbound, instead of inventing a parallel brand. The board should see one pipeline number, not three channel reports that disagree.",
    },
  ],
  infrastructure: [
    {
      heading: "HubSpot stages that survive six to twelve months",
      body: "Generic SaaS funnels fail here. We rebuild HubSpot deal stages around how procurement software actually sells: target account researched, connected or engaged, meeting booked, demo completed, commercial proposal, closed won or lost. Required properties include original source, latest traffic source, GCLID or LinkedIn click identifiers where available, estimated ARR, buying roles on the company record, and a clear owner. Company hierarchies matter when a group procurement function sits above brand-level buyers. The test of the build is simple: can sales still explain why a deal is in its stage nine months after first touch, and can marketing upload a closed-won conversion with the original click ID intact?",
    },
    {
      heading: "Offline conversion on closed revenue",
      body: "Form fills and demo requests are useful for volume. They are a poor primary conversion for bidding when the real outcome is annual recurring revenue months later. We configure Google Ads offline conversion import keyed to the original GCLID, with conversion value set to closed or committed ARR, and we keep uploading through the long cycle. Mid-funnel events such as qualified meeting or demo completed can carry lower expected values so the account still learns while revenue is in flight. The measurement plan names the conversion actions explicitly, for example canopy_qualified_meeting and canopy_closed_arr, so bidding never confuses a thank-you page with cash.",
    },
    {
      heading: "Blended reporting the board can read",
      body: "Procurement buyers care about pipeline and ARR, not click-through rate. We build reporting that shows spend, meetings, stage survival and closed pipeline value in one view, with channel contribution that respects multi-touch reality without pretending last-click is truth. For a platform selling into enterprises that already run SAP or Microsoft Dynamics for supplier data, the marketing dashboard has to speak the same commercial language as the product: risk reduction, onboarding speed and contract control, measured in pipeline pounds rather than vanity engagement.",
    },
  ],
  stackNotes: [
    {
      heading: "HubSpot as the system of record for marketing and sales",
      body: "Canopy and similar supplier management vendors typically run HubSpot for marketing automation, deal scripting and sales activity. Stage design, lifecycle properties (estimated_arr, buying_roles, erp_context) and offline conversion feeds are built there first. When sales already lives in HubSpot, we avoid a second CRM for marketing-only leads.",
    },
    {
      heading: "SAP and Microsoft Dynamics on the buyer side",
      body: "Procurement teams evaluating supplier management software often already operate inside SAP, Microsoft Dynamics or adjacent contract and onboarding tools. Messaging and proof points should acknowledge that stack, because the buyer is judging fit against systems they will not rip out. Product integrations (for example DocuSign alongside ERP) belong in the narrative; they are not a substitute for HubSpot discipline on your own side of the funnel.",
    },
    {
      heading: "Outreach and LinkedIn tooling",
      body: "High-volume cold email needs proper infrastructure: authenticated domains, warm-up, sequenced copy tests and suppression against CRM contacts. LinkedIn Sales Navigator or equivalent role targeting against Head of Procurement and Category Manager titles must write outcomes back to HubSpot, including connection accepted and meeting booked, so acceptance rates and pipeline can be read together.",
    },
    {
      heading: "Offline conversion naming for long cycles",
      body: "Name conversion actions explicitly, for example canopy_qualified_meeting and canopy_closed_arr, so bidding never confuses a thank-you page with cash. Keep uploading through close across six to twelve months, with staged expected values while deals are open.",
    },
  ],
  proof: [
    {
      client: "Canopy",
      anonymised: false,
      situation:
        "Canopy is a supplier management platform used by procurement teams worldwide. They needed a repeatable way to reach Heads of Procurement and supply chain leaders when search demand alone could not fill an enterprise pipeline, and they needed HubSpot attribution that tied outbound and LinkedIn activity to revenue.",
      built:
        "Email and LinkedIn outbound at scale, aggressive copy testing in the first thirty days, HubSpot integration with a custom attribution layer, and a feedback loop between campaign data and sales on lead quality. Outbound and LinkedIn were run as one acquisition system feeding the same CRM.",
      results: [
        {
          metric: "Pipeline (potential ARR)",
          after: "£85,000",
          window: "first 30 days",
        },
        {
          metric: "Annualised pipeline",
          after: "~£850,000",
          window: "based on users staying on current plans",
        },
        {
          metric: "LinkedIn connection acceptance",
          after: "50%",
          window: "outbound programme",
        },
        {
          metric: "Outreach volume",
          after: "~50,000 messages monthly",
          window: "steady state",
        },
        {
          metric: "New leads",
          after: "60+ monthly",
          window: "steady state",
        },
        {
          metric: "New campaigns",
          after: "25 monthly",
          window: "steady state",
        },
      ],
      signedOff: true,
    },
  ],
  faqHeading: "What B2B SaaS and consulting teams usually ask",
  faqVariant: "editorial",
  faqs: [
    {
      q: "Who is the real buyer for supplier management software?",
      a: "Usually Head of Procurement, Procurement Director, Head of Supply Chain or Category Manager, with Finance, Legal and IT in the committee before signature. Marketing that speaks only to a generic \"operations leader\" wastes spend.",
    },
    {
      q: "Why is paid search not enough on its own?",
      a: "Category search demand is small relative to deal size. Paid search works best as part of a system with outbound and LinkedIn, amplifying proven messaging rather than carrying the whole pipeline alone.",
    },
    {
      q: "How long should attribution windows be for procurement software?",
      a: "Plan for six to twelve months. If offline conversions stop at demo request, Google never learns from the closed ARR that justified the early clicks. Upload through close, with staged expected values while deals are open.",
    },
    {
      q: "What CRM stages do you recommend?",
      a: "Stages that match the sales motion: researched account, engaged, meeting booked, demo completed, commercial proposal, closed won or lost. Vague \"opportunity\" stages for nine months destroy forecast trust.",
    },
    {
      q: "How does Bright Brand sit on both sides of the procurement table?",
      a: "We run acquisition for platforms selling to procurement teams, and for commercial fit-out contractors and travel operators who sell into those same buyers through tenders and trade relationships. That crossover shapes how we write targeting and CRM models.",
    },
    {
      q: "Which numbers from Canopy can I cite?",
      a: "Published figures include £85,000 potential ARR pipeline in the first thirty days, around £850,000 annualised pipeline, 50 percent LinkedIn connection acceptance, roughly 50,000 outreach messages a month, 25 new campaigns a month and 60-plus new leads a month.",
    },
    {
      q: "Do you only work with HubSpot?",
      a: "HubSpot is the primary build for this vertical because that is where Canopy and similar vendors already run pipeline. Salesforce or Pipedrive can hold the same stage logic if that is the live system of record.",
    },
  ],
  relatedIndustries: [
    {
      slug: "consulting-firms",
      why: "Consulting firms selling into enterprise: practice-area pipelines, named-account BD and signed engagement value.",
    },
    {
      slug: "supplier-management-platforms",
      why: "Platform vendor go-to-market with product-proof creative, dual PQL and enterprise pipelines, and security-gate CRM.",
    },
    {
      slug: "enterprise-saas",
      why: "General-purpose enterprise SaaS page for companies outside the procurement sub-pages, with FormX and Canopy as proof points.",
    },
    {
      slug: "commercial-fit-out",
      why: "Commercial fit-out contractors sell into the same Heads of Procurement that supplier management platforms sell to. We run acquisition on both sides of that table.",
    },
    {
      slug: "construction",
      why: "Construction supply chains meet procurement software at PQQ, framework and supplier onboarding. FormX sits under construction with the same ARR discipline.",
    },
  ],
  moneyPages: [],
  resourceSlugs: [
    "offline-conversion-upload-template",
    "attribution-health-check",
    "ga4-enquiry-event-schema",
    "tender-hubspot-deal-pipeline",
  ],
  toolSlugs: [],
  blogTags: ["attribution", "offline-conversions", "linkedin", "crm"],
};

export default b2bSaasAndPlatforms;
