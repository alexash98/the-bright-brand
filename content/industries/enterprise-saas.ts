import type { Industry } from "@/content/types";

const enterpriseSaas: Industry = {
  slug: "enterprise-saas",
  name: "Enterprise SaaS",
  parent: "b2b-saas-and-platforms",
  type: "sub",
  metaTitle: "Enterprise SaaS Marketing Agency | The Bright Brand",
  metaDescription:
    "Performance marketing for enterprise SaaS companies. Closed ARR as the conversion, CRM stages that match committee-led buying, and board packs that show channel contribution in revenue. The Bright Brand.",
  heroH1: "Enterprise SaaS marketing agency",
  wedge:
    "You do not have an MQL problem, you have a committee and security-gate problem. Enterprise deals stall after the demo. We build CRM stages and channel reporting so your board sees closed ARR, not form fills.",
  intro:
    "Enterprise SaaS deals close through committees, stall in security review, and take three to twelve months from first touch to signed contract. We build CRM stages around that reality, run outbound and LinkedIn against ICP titles, and wire closed ARR back into bidding so your board sees channel contribution in revenue, not MQL volume.",
  proofLead: {
    heading:
      "One or two SaaS companies. Founder-level attention. A build shaped around your ICP and deal stages.",
    body: "We are taking on a small number of enterprise SaaS companies to build this properly: ICP-matched outbound, committee-aware CRM stages, closed ARR training bidding, and board packs that show marketing contribution in revenue. FormX cut cost per booked sales meeting by 83%. Over 25% of Canopy's enterprise pipeline comes through Bright Brand. You get a senior team on your stack, not a SaaS template resold fifth.",
    quoteId: "formx",
    quoteIds: ["formx", "canopy"],
    askAiPrompt:
      "How can The Bright Brand help an enterprise SaaS company with ICP-matched outbound, committee-aware CRM stages and closed ARR attribution? Summarise from thebrightbrand.com.",
  },
  heroVisual: {
    eyebrow: "For enterprise SaaS",
    title: "What the account shows you, and what we put on the board",
    variant: "contrast",
    strapline: "MQLs are noise. Closed ARR is the score.",
    contrastHeaders: { left: "The ad account", right: "Your board" },
    contrastRows: [
      { before: "MQL volume", after: "Qualified ICP-title meetings" },
      { before: "Cheap CPL", after: "Cost per sales-accepted opp" },
      { before: "Demo form fills", after: "Pipeline past security" },
      { before: "Campaign ROAS", after: "Closed ARR by channel" },
    ],
  },
  heroCta: {
    primaryLabel: "Send your ICP or account list",
    secondaryLabel: "See how the first 90 days work",
    secondaryHref: "#engagement",
  },
  pipelineHeading:
    "Why your marketing numbers and your commercial tracker never agree",
  servicesHeading: "Where we start on your account",
  servicesIntro:
    "Start with the bottleneck: ICP-matched outbound and LinkedIn, committee-aware CRM stages with security gates, or the offline loop that ties closed ARR back into bidding. We scope that against your ICP in week one.",
  serviceCardCtaLabel: null,
  briefing: {
    eyebrow: "Built with your growth team",
    heading: "How we work with your growth team, not around them",
    intro:
      "You already know your ICP, your product, and your deal stages. We bring outbound infrastructure, LinkedIn precision and CRM discipline into that motion so pipeline tracks from discovery to security review to closed ARR, and the board sees channel contribution in revenue.",
    marketHeading: "The numbers your board will actually use",
    targetingHeading: "How we find demand with you",
  },
  marketStats: [
    {
      value: "83% reduction in cost per booked sales meeting",
      label: "FormX published proof",
      implication:
        "FormX cut cost per booked sales meeting by 83% on the same budget by rebuilding the funnel, tightening targeting and optimising toward meetings, not form fills. That is what happens when bidding trains on the right conversion event.",
    },
    {
      value: "25%+ of enterprise pipeline sourced through Bright Brand",
      label: "Canopy published proof",
      implication:
        "Over 25% of Canopy's enterprise pipeline comes through Bright Brand, with active discussions at procurement director and senior leadership level across major UK and European businesses. That is what ICP-matched outbound and LinkedIn deliver at scale.",
    },
    {
      value: "Security and legal, not the demo",
      label: "Where deals actually stall",
      implication:
        "Most enterprise SaaS deals pass the demo easily. The stall is security questionnaires, IT review, legal sign-off and procurement process. If your CRM does not have those as explicit stages, your pipeline looks healthy while deals quietly die.",
    },
    {
      value: "Closed ARR by channel",
      label: "What the board wants",
      implication:
        "MQL volume and demo counts are diagnostic. Closed ARR is the number your board tracks. We wire it as the offline conversion so bidding learns from revenue. Board packs show pipeline past security review and closed ARR by channel with first-touch and multi-touch views.",
    },
  ],
  commercialAccess: {
    intro:
      "Week one is NDA, contract and access with the people who own demand and the systems that hold pipeline. Without that, we are guessing and you are paying for it.",
    people: [
      {
        role: "Head of growth / VP marketing",
        need: "Owns pipeline targets, channel mix and campaign budget. Weekly decision owner with us.",
      },
      {
        role: "Founder / CEO",
        need: "Sets ARR targets and go-to-market strategy. Wants board packs that show marketing contribution in closed revenue.",
      },
      {
        role: "Sales lead / AE team",
        need: "Works the opportunities we source. Feeds back on meeting quality, committee engagement and close rates.",
      },
      {
        role: "Product / solutions",
        need: "Shapes demo content, integration messaging and use-case proof for outbound and creative.",
      },
      {
        role: "RevOps / marketing ops",
        need: "Owns CRM hygiene, attribution setup and reporting infrastructure. Critical partner on the build.",
      },
    ],
    systems: [
      {
        name: "CRM (HubSpot or Salesforce)",
        need: "Committee-aware deal stages, ARR fields, champion and economic buyer roles, and offline conversion on closed ARR. Self-serve and enterprise as parallel pipelines where both exist.",
      },
      {
        name: "Outbound stack",
        need: "Sending domains, warm-up and sequence tooling against ICP titles, with write-back of replies and meetings into CRM.",
      },
      {
        name: "LinkedIn and list enrichment",
        need: "Sales Navigator title filters plus Apollo-style enrichment, with weekly sync and customer suppression.",
      },
      {
        name: "Paid media accounts",
        need: "Admin access across LinkedIn and Google so they train on qualified meetings and closed ARR, not MQL volume.",
      },
    ],
    outcome:
      "One loop from ICP-title touch to sales-accepted opportunity to security pass to closed ARR, so you can scale spend against revenue instead of MQL volume.",
  },
  targetingNotes: [
    {
      heading: "Outbound against ICP titles with product-proof messaging",
      body: "We build lists around the titles that feel the pain your product solves, filtered by company size, sector and tech stack. Apollo-style enrichment plus Sales Navigator filters beat broad job-function ads. We suppress CRM customers and open opportunities weekly.",
    },
    {
      heading: "LinkedIn with title-level precision",
      body: "We target the specific roles on the buying committee: the champion who feels the pain, the economic buyer who owns the budget, and the technical evaluator who gates security. Audiences match your CRM company list so spend stays on accounts your sales team can work.",
    },
    {
      heading: "Search captures active evaluation intent",
      body: "Enterprise software buyers do search when they are actively evaluating. Volume is lower than consumer categories but intent is high. We run Google Ads against those terms with tight negatives and landing pages that speak in product proof, not category labels.",
    },
    {
      heading: "ABM list hygiene keeps spend honest",
      body: "Enterprise title lists rot quickly with job changes. Weekly Sales Navigator and CRM syncs, sales rejection reasons fed into exclusions, and customer suppression keep LinkedIn and outbound spend on people who still buy and have not already said no.",
    },
  ],
  pipelineStages: [
    {
      name: "ICP account identified",
      note: "Target buyer with stack and budget fit",
    },
    {
      name: "Discovery / demo",
      note: "Sales-accepted meeting with multithread",
    },
    {
      name: "Security / legal review",
      note: "Common enterprise stall point",
    },
    {
      name: "Commercial / procurement",
      note: "Pricing, terms and sign-off",
    },
    {
      name: "Closed-won ARR",
      note: "Offline conversion for all channels",
    },
  ],
  pipelineShape: [
    {
      heading:
        "We build your CRM for committee-led deals, not a SaaS trial funnel",
      body: "Enterprise SaaS deals pass through discovery, demo, security review, legal and procurement before a contract signs. If your CRM only tracks demo booked and closed-won, you are blind to where deals stall and your forecast over-predicts. We add the stages that show committee engagement, security gate progress and commercial review so your pipeline reflects reality.",
    },
    {
      heading: "We split self-serve and enterprise so your forecast stays honest",
      body: "Product-led self-serve signups and six to twelve month enterprise deals are different objects. When they share one pipeline, forecasts lie and your AEs ignore the CRM. We build parallel pipelines with separate stages and separate conversion events so each motion reports honestly and bidding learns from the right signal.",
    },
    {
      heading: "We build creative around product proof, not category slogans",
      body: "Winning outbound messages name the integration, the workflow fit and the time saved. Generic digital transformation copy fails against technical buyers who already run established tools. We test messages in outbound first, find the proof points that earn replies, then promote them into LinkedIn and search creative.",
    },
  ],
  infrastructure: [
    {
      heading: "CRM stages for committee-led enterprise deals",
      body: "HubSpot or Salesforce with deal stages for discovery, demo, security review, legal, commercial and closed. Required fields: estimated_arr, champion_contact_id, economic_buyer_status, security_status and stage entry dates. Self-serve and enterprise run as parallel pipelines. Partner-sourced deals keep a visible attribution path.",
    },
    {
      heading: "Attribution across enterprise cycles",
      body: "Google click IDs and LinkedIn identifiers persist from first touch. Offline conversion uploads on qualified meeting, security passed and closed ARR. Attribution windows match the buying cycle: 90 days for mid-market, 180 days for enterprise. Board packs show pipeline and closed ARR by channel with first-touch and multi-touch views.",
    },
    {
      heading: "Outbound infrastructure that protects domain health",
      body: "Sending domains, warm-up, deliverability monitoring and sequence tooling managed so outbound scales without burning your primary domain. Meeting outcomes write back to CRM with the sequence and channel that sourced them.",
    },
  ],
  stackNotes: [
    {
      heading: "General enterprise SaaS, not procurement-only ICP",
      body: "This page covers HR tech, fintech, security, dev tools and vertical SaaS where the sale involves a committee and a security gate. Procurement and category sub-pages stay for Canopy-shaped motions. Here the ICP and messaging follow your product category; the ARR discipline stays the same.",
    },
    {
      heading: "Self-serve and enterprise as parallel conversion actions",
      body: "Product-led signups and six to twelve month enterprise deals cannot train the same Smart Bidding goal. Separate pipelines and conversion events keep forecasts honest and stop bidding treating a trial expand like a closed ARR win.",
    },
    {
      heading: "FormX and Canopy as dual proof standards",
      body: "FormX shows meeting-optimised paid acquisition discipline. Canopy shows ICP-matched outbound and LinkedIn into enterprise pipeline. Together they prove the measurement spine: sales-accepted opportunities early, closed ARR when revenue lands.",
    },
  ],
  engagement: {
    eyebrow: "Commercials and the first 90 days",
    heading: "How we charge, and what the first quarter looks like",
    intro:
      "Retainer or performance-shaped, scoped against your ICP and stack in week one so you see the number before campaigns start. No long lock-in while we are both proving it works.",
    commercials: {
      heading: "Build, then retainer",
      body: "A one-off build for CRM structure, outbound infrastructure and LinkedIn setup, then a monthly retainer for outbound, LinkedIn and paid search. Week one covers NDA, contract, access and a commercial scoped against your ICP and deal stages.",
    },
    steps: [
      {
        name: "Days 1 to 14: ICP, lists and CRM structure",
        body: "NDA and contract signed. ICP refined with your growth team. Target account list built and enriched. CRM stages added for discovery, demo, security review, proposal and closed. ARR fields and offline conversion scoped.",
      },
      {
        name: "Weeks 2 to 4: outbound and LinkedIn live",
        body: "Outbound sequences running against ICP titles. LinkedIn campaigns live with title-level targeting and company-size filters. Landing pages rebuilt with product proof and named client evidence.",
      },
      {
        name: "End of month one: meetings, not MQLs",
        body: "Reporting shifts to qualified meetings with ICP titles by channel. Sales-accepted opportunities replace MQL volume. Cost per qualified meeting becomes the weekly gate.",
      },
      {
        name: "Quarter one: pipeline to closed ARR",
        body: "Opportunities progress through CRM stages. Security and legal gate pass rates become visible. First closed ARR starts to show channel attribution. We scale what is earning qualified meetings and cut what is not.",
      },
    ],
  },
  cta: {
    heading: "Send us your ICP, or a target account list you want to crack",
    body: "We will show you where qualified meetings are leaking before we talk retainer. Share your ICP or a named account list, and we will map the gap between outbound and closed ARR.",
    buttonLabel: "Send the ICP or list",
    href: "/contact",
  },
  proof: [
    {
      client: "FormX",
      anonymised: false,
      situation:
        "FormX, a modular residential builder with a $4.5M pre-seed raise behind it, needed paid acquisition across Meta and Google that produced booked sales meetings sales would take, not inflated lead counts.",
      built:
        "Attribution audit on Meta and Google Ads, funnel rebuild, tighter targeting into booked meetings, with a path to broaden into Microsoft Ads, LinkedIn and email once measurement was trustworthy.",
      results: [
        {
          metric: "Cost per booked sales meeting",
          after: "-83%",
          window: "published engagement period",
        },
        {
          metric: "Pre-seed context",
          after: "$4.5M",
          window: "engagement start",
        },
        {
          metric: "Initial audit channels",
          after: "Meta and Google Ads",
          window: "engagement start",
        },
      ],
      signedOff: true,
    },
    {
      client: "Canopy",
      anonymised: false,
      situation:
        "Canopy needed conversations with procurement and supply chain leaders when search demand alone could not fill enterprise pipeline. LinkedIn and email had to share one HubSpot truth.",
      built:
        "Outbound and LinkedIn into procurement and supply chain titles, HubSpot integration with custom attribution, and continuous sales feedback on which roles and messages produced quality.",
      results: [
        {
          metric: "LinkedIn connection acceptance",
          after: "50%",
          window: "outbound programme",
        },
        {
          metric: "New leads",
          after: "60+ monthly",
          window: "steady state",
        },
        {
          metric: "Pipeline (potential ARR)",
          after: "£85,000",
          window: "first 30 days",
        },
        {
          metric: "Enterprise pipeline via Bright Brand",
          after: "25%+",
          window: "published client attribution",
        },
      ],
      signedOff: true,
    },
  ],
  faqHeading: "What enterprise SaaS teams usually ask",
  faqVariant: "editorial",
  faqs: [
    {
      q: "How is this different from the procurement and category pages?",
      a: "Those pages focus on selling into procurement teams specifically (Canopy's motion). This page covers any enterprise SaaS company: HR tech, fintech, security, dev tools, vertical SaaS, or any B2B platform where the sale involves a committee, a security gate and closed ARR as the goal. The CRM discipline and attribution approach are the same; the ICP and messaging differ.",
    },
    {
      q: "What conversion should enterprise SaaS ads optimise for?",
      a: "Closed ARR. MQLs and demo form fills are diagnostic. We wire closed ARR as the offline conversion so bidding learns from revenue. In the early months before deals close, we optimise to sales-accepted opportunities as an interim signal.",
    },
    {
      q: "How long are enterprise SaaS sales cycles?",
      a: "Typically three to twelve months from first touch to signed contract, depending on deal size, security requirements and procurement complexity. We configure attribution windows to match: 90 days for mid-market, 180 days for enterprise.",
    },
    {
      q: "Do you only work with HubSpot?",
      a: "No. We work with HubSpot and Salesforce. What matters is committee-aware deal stages, ARR fields, champion and economic buyer contact roles, and offline conversion firing on closed ARR. We build or fix that structure in the opening weeks.",
    },
    {
      q: "What about product-led growth?",
      a: "If you run a PLG motion alongside enterprise sales, we build parallel pipelines: one for self-serve conversion with shorter stages, one for enterprise with security and legal gates. Both feed one board pack. The two motions need separate conversion events so bidding learns from each independently.",
    },
    {
      q: "Can you show pipeline contribution, not just leads?",
      a: "That is the entire point. We wire closed ARR as the offline conversion, build first-touch and multi-touch attribution, and report pipeline past security review and closed ARR by channel. Board packs show marketing contribution in revenue, not MQL volume.",
    },
    {
      q: "How is our data handled?",
      a: "Under NDA, with least-access in mind. We take only the fields we need to close the loop, keep prospect names and company details out of the ad platforms, and anonymise anything sensitive. Platforms receive conversion events and values, not prospect data.",
    },
    {
      q: "Who will we speak to each week?",
      a: "The same person who owns your account, not a rotating pod. Your head of growth or VP marketing is our weekly decision owner, and we sit with your founder, sales lead and RevOps as the work needs it.",
    },
  ],
  relatedIndustries: [
    {
      slug: "consulting-firms",
      why: "Consulting firms with the same committee-led enterprise sale, practice-area CRM and signed engagement value.",
    },
    {
      slug: "supplier-management-platforms",
      why: "Platform vendor go-to-market with product-proof creative and security-gate CRM.",
    },
    {
      slug: "construction",
      why: "FormX proof point. Same attribution discipline, different buyer universe.",
    },
  ],
  resourceSlugs: [
    "offline-conversion-upload-template",
    "attribution-health-check",
    "ga4-enquiry-event-schema",
  ],
  toolSlugs: [],
  blogTags: ["linkedin", "outbound", "crm", "attribution"],
  moneyPages: [],
};

export default enterpriseSaas;
