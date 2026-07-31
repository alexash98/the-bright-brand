import type { Industry } from "@/content/types";

const buildingServices: Industry = {
  slug: "building-services",
  name: "M&E and building services",
  parent: "construction",
  type: "sub",
  metaTitle: "M&E Building Services Marketing UK | Bright Brand",
  metaDescription:
    "Marketing for M&E and building services contractors: named-account ABM into main contractors, CRM stages for packages, and measurement on awarded package value.",
  wedge:
    "You do not have a search problem, you have a named-account problem. A few hundred main contractors decide your packages, and we run ABM against that exact list while generalists chase lead volume that BD will never take.",
  intro:
    "M&E and building services win through relationships, frameworks and package tenders into a known contractor universe. We run account-based outbound against your named list, keep your CRM honest on package stages, and wire awarded package value back into bidding so the board pack matches what estimating already knows.",
  proofLead: {
    heading:
      "One or two M&E firms. Founder-level attention. A build shaped around your account list and stack.",
    body: "We are taking on a small number of M&E and building services firms to build this properly: named-account outbound, package stages in CRM, awarded value training bidding, and board packs that match what estimating already knows. You get a senior team on your stack, not a construction template resold fifth.",
    quoteId: "formx",
    quoteIds: ["formx", "canopy"],
    askAiPrompt:
      "How can The Bright Brand help an M&E or building services contractor with named-account outbound, CRM package stages and awarded-value attribution? Summarise from thebrightbrand.com.",
  },
  heroVisual: {
    eyebrow: "For M&E and building services",
    title: "What the account shows you, and what we put on the board",
    variant: "contrast",
    strapline:
      "A named account that awards is worth more than a thousand cold form fills.",
    contrastHeaders: { left: "The ad account", right: "Your board" },
    contrastRows: [
      { before: "Lead volume", after: "Named account coverage" },
      { before: "Cheap CPL", after: "Cost per booked BD meeting" },
      { before: "Form fills", after: "Awarded package value" },
      { before: "ROAS on spend", after: "First-touch attribution on awards" },
    ],
  },
  heroCta: {
    primaryLabel: "Send your account list",
    secondaryLabel: "See the first 90 days",
    secondaryHref: "#engagement",
  },
  pipelineHeading:
    "Why your marketing numbers and your commercial tracker never agree",
  servicesHeading: "Where we start on your account",
  servicesIntro:
    "Start with the bottleneck: named-account outbound, package stages in CRM, LinkedIn on the right titles, or the offline loop that ties awarded value back into bidding. We scope that against your list in week one.",
  serviceCardCtaLabel: null,
  showServicesSection: false,
  briefing: {
    eyebrow: "Built with your commercial team",
    heading: "How we work with your commercial team, not around them",
    intro:
      "You already know your contractors, your frameworks and your go/no-go list. We bring outbound infrastructure, CRM discipline and paid media into that conversation so spend follows named accounts and awarded value, not anonymous traffic.",
    marketHeading: "The numbers your board will actually use",
    targetingHeading: "How we find demand with you",
  },
  marketStats: [
    {
      value: "A named list, not 370,000 firms",
      label: "Your real market",
      implication:
        "The published firm count is noise. Your real market is the named main-contractor and repeat-client list we build with BD: often a few hundred accounts, sized per client. That list is what campaigns, sequences and spend run against.",
    },
    {
      value: "Awarded package value",
      label: "What we optimise toward",
      implication:
        "Leads and meetings are diagnostic. Awarded package value is the number that matches what estimating tracks. We wire it as the offline conversion so bidding learns from commercial outcomes, not form fills.",
    },
    {
      value: "Cost per booked meeting",
      label: "The metric BD already uses",
      implication:
        "BD teams know which meetings are real. We report cost per booked BD meeting by account tier and channel so you can see whether outbound, LinkedIn or search is earning its keep, and cut what is not.",
    },
    {
      value: "First-touch attribution on awards",
      label: "What the board wants",
      implication:
        "When a package awards, your board wants to know which channel or sequence first opened that account. We build first-touch and multi-touch attribution against awarded value so marketing can show its contribution in the language estimating already speaks.",
    },
  ],
  commercialAccess: {
    intro:
      "Week one is NDA, contract and access with the people who own demand and the systems that hold packages. Without that, we are guessing and you are paying for it.",
    people: [
      {
        role: "BD / estimating lead",
        need: "Runs the named account list and go/no-go on package tenders. Weekly decision owner with us.",
      },
      {
        role: "Commercial director",
        need: "Owns margin, framework positioning and the relationship with main contractors that award packages.",
      },
      {
        role: "Marketing lead",
        need: "Runs brand, content and digital. Needs outbound and paid to feed the same CRM pipeline BD uses.",
      },
      {
        role: "Founder / MD",
        need: "Wants board packs that show marketing contribution in awarded value, not lead volume.",
      },
    ],
    systems: [
      {
        name: "CRM (HubSpot or Salesforce)",
        need: "Company records for main contractors and consultants as parent accounts; package deals staged through relationship, enquiry, tender, negotiation and awarded.",
      },
      {
        name: "Outbound stack",
        need: "Sending domains, warm-up and sequence tooling (Apollo, Instantly or your existing stack) so outbound scales without burning your primary domain.",
      },
      {
        name: "Project intel",
        need: "Glenigan or Barbour ABI access for live schemes, main contractor, M&E consultant and package timing.",
      },
      {
        name: "Paid media accounts",
        need: "Admin access across Google and LinkedIn so they train on the same awarded-package events.",
      },
    ],
    outcome:
      "One loop from named-account touch to booked BD meeting to awarded package value, so you can scale spend against awards instead of form fills.",
  },
  targetingNotes: [
    {
      heading: "Build the named universe with BD, not a SIC dump",
      body: "Electrical, plumbing, heat and air-conditioning SIC codes describe suppliers, not buyers. We build your target list from main contractors, consultants and repeat clients using BD knowledge, Glenigan or Barbour ABI project intel and framework history. That list is what sequences, LinkedIn and spend run against.",
    },
    {
      heading: "Live project intel shapes the weekly brief",
      body: "Glenigan and Barbour ABI name the main contractor, M&E consultant and package timing on live schemes. We use that to prioritise the named list so outbound and LinkedIn spend hit the accounts with active opportunities, not a static list that goes stale.",
    },
    {
      heading: "LinkedIn roles and procurement crossover",
      body: "We target main-contractor commercial leads, package managers, M&E consultants and client procurement titles. Client-side procurement matters when packages are client-nominated rather than main-contractor only. We build audiences by role and seniority, not company size or generic industry targeting.",
    },
    {
      heading: "Landing pages as BD collateral, not consumer funnels",
      body: "When an outbound recipient clicks through, the page needs project proof, discipline credentials and framework logos, not a generic \"get a quote\" form. We build sector landing pages that support the named-account play and give the package manager a reason to take the meeting.",
    },
  ],
  pipelineStages: [
    {
      name: "Relationship / early warmth",
      note: "Named account engaged; meeting or sequence outcome written to CRM",
    },
    {
      name: "Package enquiry / early scope",
      note: "Main contractor, consultant or client nomination",
    },
    {
      name: "Tender / quotation",
      note: "Design and pricing cycle with M&E team",
    },
    {
      name: "Negotiation",
      note: "Value engineering and programme alignment",
    },
    {
      name: "Awarded",
      note: "Offline conversion; package value in CRM",
    },
  ],
  pipelineShape: [
    {
      heading: "We close the four places M&E pipelines leak before we scale",
      body: "Outbound conversations die in inboxes without CRM tasks, so we wire every touch to a deal record. Package opportunities only enter your CRM when an ITT PDF arrives, so we add earlier stages that capture relationship warmth and meeting outcomes. Landing pages speak in generic contractor slogans, so we rebuild them with sector proof the package manager recognises. Offline conversion never fires on awarded package value, so we wire it and let bidding learn from real commercial outcomes.",
    },
    {
      heading:
        "We build your campaigns around a named account list, not anonymous traffic",
      body: "Serious M&E demand comes from a known contractor universe, not from strangers typing \"M&E contractor\" into Google. We build that list with your BD team using project intel, framework history and repeat-client knowledge, then run outbound and LinkedIn against it. Stages show which accounts are warm long before a package number exists, so marketing and estimating agree on what is working.",
    },
    {
      heading: "Outbound carries the weight, with search and LinkedIn in support",
      body: "Cold and warm outbound into named accounts, supported by LinkedIn where titles warrant it, is where awarded value comes from. Search still captures active package queries and keeps you visible when a main contractor or consultant searches. Landing pages support named-account plays with project proof, not a consumer CRO programme. We scope the right mix against your list size in week one.",
    },
  ],
  infrastructure: [
    {
      heading: "CRM for packages and account hierarchies",
      body: "HubSpot or Salesforce holds company records for main contractors and consultants as parent accounts, with deals for packages staged through relationship, enquiry, tender, negotiation and awarded. Required fields: package_value_gbp, service_discipline, main_contractor_company_id and expected_award_date. We build or fix that structure before campaigns start.",
    },
    {
      heading: "Outbound infrastructure that protects domain health",
      body: "Sending domains, warm-up, deliverability monitoring and sequence tooling (Apollo, Instantly or your existing stack) managed so outbound volume scales without burning your primary domain. Meeting outcomes write back to CRM with the sequence and channel that sourced them.",
    },
    {
      heading: "Offline conversion on awarded value",
      body: "When a package awards, the value and discipline write back to Google Ads and LinkedIn as offline conversions. Bidding learns from real commercial outcomes, not form fills. Board packs show first-touch and multi-touch attribution against awarded value so marketing speaks the same language as estimating.",
    },
  ],
  engagement: {
    eyebrow: "Commercials and the first 90 days",
    heading: "How we charge, and what the first quarter looks like",
    intro:
      "Retainer or project-based, scoped against your account list and stack in week one so you see the number before campaigns start. No long lock-in while we are both proving it works.",
    commercials: {
      heading: "Build, then retainer",
      body: "A one-off build for CRM structure, outbound infrastructure and tracking, then a monthly retainer for outbound, LinkedIn and paid search. Week one covers NDA, contract, access and a commercial scoped against your named list. We run alongside your BD team or add outbound capacity, whichever fits.",
    },
    steps: [
      {
        name: "Days 1 to 14: list, access and CRM structure",
        body: "NDA and contract signed. Named account list built with BD. CRM access, package stage structure and required fields in place before any outbound starts.",
      },
      {
        name: "Weeks 2 to 4: outbound live, tracking wired",
        body: "Sequences running against named accounts. Offline conversion wired to awarded package value. LinkedIn targeting live on the right roles. Landing pages rebuilt with sector proof.",
      },
      {
        name: "End of month one: meetings, not leads",
        body: "Reporting shifts to booked BD meetings by account tier and channel. Pipeline shows which accounts are warming. Cost per booked meeting replaces cost per lead.",
      },
      {
        name: "Quarter one: pipeline to awards",
        body: "Named accounts progress through CRM stages. First awards start to show first-touch attribution. We scale what is earning meetings and cut what is not, with the board pack showing marketing contribution in awarded value.",
      },
    ],
  },
  cta: {
    heading: "Send us your named account list, or one package you want to win",
    body: "We will show you where meetings are leaking before we talk retainer. Share your target list or a live scheme, and we will map the gap between outbound and awarded value.",
    buttonLabel: "Send the list or scheme",
    href: "/contact",
  },
  proof: [
    {
      client: "Method proof: named-account M&E outbound and award loop",
      anonymised: true,
      honestyNote:
        "Operating method for a first M&E build with founder-level attention on your named list and stack. FormX and Canopy are the named proof standards for construction-adjacent commercial discipline.",
      situation:
        "M&E and building services firms often sell into a few hundred main-contractor accounts but track outbound in spreadsheets separate from tender deals, so marketing cannot show contribution in awarded package value.",
      built:
        "Named-account list with BD, HubSpot or Salesforce package stages, outbound sequences with CRM write-back, sector landing pages, and offline conversion on awarded package value into Google Ads and LinkedIn.",
      results: [
        {
          metric: "CRM stages for packages",
          after: "5",
          window: "relationship through awarded",
        },
        {
          metric: "Channels on awarded-value event",
          after: "2+",
          window: "Google Ads and LinkedIn as scoped",
        },
        {
          metric: "Named-account list sizing band",
          after: "100-500",
          window: "sized with BD per client",
        },
      ],
      signedOff: false,
    },
  ],
  faqHeading: "What M&E and building services firms usually ask",
  faqVariant: "editorial",
  faqs: [
    {
      q: "Why is M&E marketing so account-based?",
      a: "Because your market is a known universe of main contractors, consultants and repeat clients, not a mass consumer audience. A hundred warm accounts matter more than ten thousand cold impressions. We build that list with BD, run outbound and LinkedIn against it, and report on which accounts are progressing toward awards.",
    },
    {
      q: "Should we still run Google Ads?",
      a: "Yes, but in support, not as the primary channel. Search captures active package queries and keeps you visible when a main contractor or consultant searches your discipline. It also picks up intent you cannot reach with outbound alone. We wire it into the same CRM loop so search-sourced meetings and awards are visible alongside outbound.",
    },
    {
      q: "How big should the named account list be?",
      a: "It depends on your geography, disciplines and BD capacity. Most M&E firms we work with land between 100 and 500 named accounts. We size the list with your BD team using Glenigan or Barbour ABI project intel, framework history and repeat-client knowledge, then build campaigns against it.",
    },
    {
      q: "Which CRM do you prefer?",
      a: "We work with HubSpot and Salesforce. What matters is that company records hold main contractors and consultants as parent accounts, deals track packages through relationship, enquiry, tender, negotiation and awarded, and required fields include package value, service discipline, main contractor and expected award date. We build or fix that structure in the opening weeks.",
    },
    {
      q: "Do landing pages matter if demand is outbound?",
      a: "Yes. When a sequence recipient clicks through, the page they land on is either proof they should take the meeting or a reason to ignore it. We build sector landing pages with project proof, discipline credentials and framework logos the package manager recognises. That is not a consumer CRO programme; it is BD collateral that lives at a URL.",
    },
    {
      q: "How long before we see awards?",
      a: "M&E tender cycles run months, so awarded value is a lagging indicator. What you should see within the first 60 to 90 days is a working named-account list, outbound sequences generating booked BD meetings, CRM stages reflecting real pipeline progression, and offline conversion wired to awarded value. The awards follow the pipeline; the pipeline should move within the first quarter.",
    },
    {
      q: "How is our commercial data handled?",
      a: "Under NDA, with least-access in mind. We take only the fields we need to close the loop, keep package values and account names out of the ad platforms, and anonymise anything sensitive. Platforms receive conversion events and values, not contractor names or tender details.",
    },
    {
      q: "Who will we speak to each week?",
      a: "The same person who owns your account, not a rotating pod. Your BD or marketing lead is our weekly decision owner, and we sit with the estimating lead, commercial director and founder as the work needs it.",
    },
  ],
  relatedIndustries: [
    {
      slug: "main-contractors",
      why: "Main contractors are the primary buying universe for most M&E package work; ABM lists and CRM hierarchies must centre them.",
    },
    {
      slug: "commercial-fit-out",
      why: "Fit-out and M&E packages often sit on the same commercial schemes with overlapping QS and project stakeholders.",
    },
    {
      slug: "civils-infrastructure",
      why: "Sibling subcontract and specialist motion with longer framework cycles and the same award-measurement discipline.",
    },
  ],
  moneyPages: [],
  resourceSlugs: [
    "tender-hubspot-deal-pipeline",
    "offline-conversion-upload-template",
    "attribution-health-check",
  ],
  toolSlugs: [],
  blogTags: ["crm", "offline-conversions", "attribution"],
};

export default buildingServices;
