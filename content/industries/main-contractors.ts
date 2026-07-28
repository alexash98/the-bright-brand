import type { Industry } from "@/content/types";

const mainContractors: Industry = {
  slug: "main-contractors",
  name: "Main contractors",
  parent: "construction",
  type: "sub",
  metaTitle: "Main Contractor Marketing Agency UK | Bright Brand",
  metaDescription:
    "Marketing for main contractors: tender-stage CRM, LinkedIn ABM against named accounts, framework visibility and attribution across long public and private cycles.",
  wedge:
    "You do not have a lead-volume problem, you have a named-universe problem. Frameworks, public procurement and multi-stakeholder bids mean paid media's job is visibility to the right client, consultant and procurement seats. We build that list with your commercial team and prove contribution in awarded programme value.",
  intro:
    "Main contracting is a named-universe game: frameworks, public procurement and multi-stakeholder bids, not lead volume. We build your CRM around the tender lifecycle, run LinkedIn against named accounts, and wire awarded programme value back into bidding so the board pack matches what your commercial team already forecasts.",
  proofLead: {
    heading:
      "One or two main contractors. Founder-level attention. A build shaped around your named universe.",
    body: "We are taking on a small number of regional and mid-market main contractors to build this properly: tender-stage CRM with multi-stakeholder hierarchies, awarded value training bidding, named-account outbound timed to framework windows, and board packs that match what your commercial team already forecasts. You get a senior team on your stack, not a construction template resold fifth.",
    quoteId: "formx",
    quoteIds: ["formx", "canopy"],
    askAiPrompt:
      "How can The Bright Brand help a regional or mid-market main contractor with tender-stage CRM, named-account LinkedIn and awarded programme value attribution? Summarise from thebrightbrand.com.",
  },
  heroVisual: {
    eyebrow: "For main contractors",
    title: "What the account shows you, and what we put on the board",
    variant: "contrast",
    strapline:
      "150 to 400 named accounts. Visibility to the right seats is the whole job.",
    contrastHeaders: { left: "The ad account", right: "Your board" },
    contrastRows: [
      {
        before: "Lead volume",
        after: "Named client and consultant coverage",
      },
      { before: "Cheap CPL", after: "Cost per preconstruction meeting" },
      { before: "Form fills", after: "Awarded programme value" },
      {
        before: "30-day ROAS",
        after: "First-touch on 12-18 month awards",
      },
    ],
  },
  heroCta: {
    primaryLabel: "Send your named account list or a target framework",
    secondaryLabel: "See how the first 90 days work",
    secondaryHref: "#engagement",
  },
  pipelineHeading:
    "Why your marketing numbers and your commercial tracker never agree",
  servicesHeading: "Where we start on your account",
  servicesIntro:
    "Start with the bottleneck: tender-stage CRM with multi-stakeholder hierarchies, named-account outbound timed to framework windows, LinkedIn on procurement and QS titles, or the offline loop that ties awarded programme value back into bidding. We scope that against your named universe in week one.",
  serviceCardCtaLabel: null,
  briefing: {
    eyebrow: "Built with your commercial team",
    heading: "How we work with your commercial team, not around them",
    intro:
      "You already know your clients, your frameworks and your go/no-go list. We bring outbound infrastructure, CRM discipline and paid media into that conversation so spend follows named accounts and awarded programme value, not anonymous traffic.",
    marketHeading: "The numbers your board will actually use",
    targetingHeading: "How we find demand with you",
  },
  marketStats: [
    {
      value: "150 to 400 named accounts, not 370,000 firms",
      label: "Your real market",
      implication:
        "The published firm count is noise. Your real market is the clients, consultants, QS firms and procurement seats that let the programmes you can win. We build that named list with your commercial team and run campaigns against it.",
    },
    {
      value: "Awarded programme value",
      label: "What we optimise toward",
      implication:
        "Leads and meetings are diagnostic. Awarded programme value is the number that matches what your commercial and bid team tracks. We wire it as the offline conversion so bidding learns from real outcomes across 12 to 18 month cycles.",
    },
    {
      value: "Miss the framework, miss years of call-offs",
      label: "Why frameworks shape everything",
      implication:
        "Framework entry windows open on fixed cycles. If you are not positioned with the right clients and consultants before the PQQ closes, you are locked out for the duration. We track framework calendars and shape outbound and LinkedIn timing around them.",
    },
    {
      value: "First-touch attribution on awards",
      label: "What the board wants",
      implication:
        "When a programme awards, your board wants to know which channel or sequence first opened that client or consultant relationship. We build first-touch and multi-touch attribution against awarded value so marketing speaks the same language as your commercial team.",
    },
  ],
  commercialAccess: {
    intro:
      "Week one is NDA, contract and access with the people who own demand and the systems that hold frameworks and tenders. Without that, we are guessing and you are paying for it.",
    people: [
      {
        role: "Commercial / bid director",
        need: "Owns framework strategy, bid list and which sectors the firm will chase. Weekly decision owner with us.",
      },
      {
        role: "Managing / regional director",
        need: "Sets appetite for public vs private work and social value commitments. Signs off what counts as a real win.",
      },
      {
        role: "Preconstruction / estimating lead",
        need: "Filters go/no-go and shapes programme value before ITT documents exist. We need their awarded values in CRM.",
      },
      {
        role: "Founder / MD",
        need: "Wants board packs that show marketing contribution in awarded programme value, not lead volume.",
      },
    ],
    systems: [
      {
        name: "CRM (HubSpot or Salesforce)",
        need: "Company records for clients, consultants, QS firms and procurement contacts as linked hierarchies; deals staged through relationship, framework, ITT, bid, negotiation and awarded.",
      },
      {
        name: "Outbound stack",
        need: "Sending domains, warm-up and sequence tooling timed to framework entry calendars so outbound scales without burning your primary domain.",
      },
      {
        name: "Project and framework intel",
        need: "Glenigan, Barbour ABI or Tussell access for live schemes, planning stages and framework renewal calendars.",
      },
      {
        name: "Paid media accounts",
        need: "Admin access across Google and LinkedIn so they train on the same awarded-programme events.",
      },
    ],
    outcome:
      "One loop from named-account touch to preconstruction meeting to awarded programme value, so you can scale spend against awards instead of PDF downloads.",
  },
  targetingNotes: [
    {
      heading: "Build the named universe with your commercial team",
      body: "Construction SIC codes describe your discipline, not your buyers. We build the target list from clients, consultants, QS firms and procurement functions using your commercial team's knowledge, Glenigan or Barbour ABI project intel and framework history. That list is what sequences, LinkedIn and spend run against.",
    },
    {
      heading: "Live project intel and framework calendars shape the brief",
      body: "Glenigan, Barbour ABI and Tussell name live and upcoming schemes, planning stages, clients and consultants. We use that alongside framework renewal calendars to prioritise the named list so outbound hits accounts with active opportunities or approaching PQQ windows.",
    },
    {
      heading: "Procurement, estates and QS titles on LinkedIn",
      body: "We target procurement directors, estates leads, programme managers, QS and project director titles at your named clients and consultants. Those are the seats on the buying committee. We build audiences by role and seniority, not company size.",
    },
    {
      heading: "Landing pages as bid-support collateral",
      body: "When an outbound recipient clicks through, the page needs sector proof, framework credentials, social value evidence and named project case studies, not a generic enquiry form. We build landing pages that support the named-account play and give the procurement buyer a reason to shortlist you.",
    },
  ],
  pipelineStages: [
    {
      name: "Relationship / early positioning",
      note: "Client, consultant, QS and procurement warmth before a tender reference exists",
    },
    {
      name: "Framework / PQQ",
      note: "Framework seat or approved bidder status before priced work appears",
    },
    {
      name: "ITT received",
      note: "Programme scoped; bid team mobilised",
    },
    {
      name: "Bid submitted",
      note: "Documented submission; value and award month required",
    },
    {
      name: "Negotiation",
      note: "Value engineering, social value and final terms",
    },
    {
      name: "Awarded",
      note: "Offline conversion on awarded programme value; Procore or Aconex take the live job without wiping source fields",
    },
  ],
  pipelineShape: [
    {
      heading:
        "We build your CRM around frameworks and stakeholders, not a flat lead funnel",
      body: "Main contracting uses the same tender logic as fit-out and civils, with longer cycles and more of the pipeline in relationship and prequalification. Public sector work adds social value scoring and portal process. Buying committees mix client, procurement, consultant, QS and sometimes political or board sponsors. We add relationship and framework stages to your CRM and model company hierarchies across all five roles so your forecast reflects where the commercially decisive work actually happens.",
    },
    {
      heading: "We close the places your pipeline leaks before we scale",
      body: "Framework seats sit outside your CRM. Early conversations never get a deal record. Marketing chases broad contractor keywords while your BD team already knows the 200 accounts that matter. LinkedIn lead forms dump unqualified downloads into the pipeline. Offline conversion never fires on awarded value, so ads cannot learn which programmes opened real work. We audit and wire all of this in the opening weeks.",
    },
    {
      heading:
        "We judge media on pipeline movement over quarters, not weekly lead volume",
      body: "Volume metrics will always make a good main-contractor programme look quiet. Your named universe is 150 to 400 accounts, not a mass market. The job is account penetration, preconstruction meetings and stage advances on named accounts, with search capturing active tender intent in support. We judge LinkedIn and outbound on pipeline movement over quarters, not on cost per PDF download.",
    },
  ],
  infrastructure: [
    {
      heading: "CRM with tender stages and multi-stakeholder hierarchies",
      body: "HubSpot or Salesforce stages map from relationship and early positioning through to awarded or lost, with framework call-offs on a parallel path. Company associations hold client, consultant, QS, procurement and political or board sponsor contacts on the same programme. Required fields: programme_value_gbp, framework_name, tender_ref and expected_award_date. We build or fix that structure before campaigns start.",
    },
    {
      heading: "Outbound infrastructure timed to framework windows",
      body: "Sending domains, warm-up, deliverability monitoring and sequence tooling managed so outbound scales without burning your primary domain. Sequences are timed to framework entry calendars so you reach the right accounts before PQQ windows close. Meeting outcomes write back to CRM with the channel that sourced them.",
    },
    {
      heading: "Offline conversion on awarded programme value",
      body: "When a programme awards, the value writes back to Google Ads and LinkedIn as an offline conversion. LinkedIn click identifiers and Google click IDs persist from first touch. Board packs show first-touch and multi-touch attribution against awarded value so marketing speaks the same language as your commercial and bid team. Procore or Aconex take the live job after award without wiping source fields.",
    },
  ],
  stackNotes: [
    {
      heading: "Named universe of 150 to 400 accounts, not a job-title spray",
      body: "Regional and mid-market main contractors win from a known client, consultant and procurement set. We size that list with your commercial team using framework history and Glenigan or Barbour ABI scheme intel, then match LinkedIn company lists to CRM weekly so ABM reporting and bid reviews share one account truth.",
    },
    {
      heading: "Social value and portal process on public programmes",
      body: "Public sector work adds social value scoring and portal process that private Cat B packages do not. Landing pages and sequences need framework credentials and social value evidence the procurement buyer recognises, and CRM stages must capture prequalification work months before an ITT PDF arrives.",
    },
    {
      heading: "Political and board sponsors on the buying committee",
      body: "Some programmes include political or board sponsors alongside procurement, client and QS. Multi-stakeholder company hierarchies must hold those contacts on the same deal so first-touch attribution can name which relationship opened the programme, not only which PDF was downloaded.",
    },
  ],
  engagement: {
    eyebrow: "Commercials and the first 90 days",
    heading: "How we charge, and what the first quarter looks like",
    intro:
      "Retainer or project-based, scoped against your named universe and stack in week one so you see the number before campaigns start. No long lock-in while we are both proving it works.",
    commercials: {
      heading: "Build, then retainer",
      body: "A one-off build for CRM structure, outbound infrastructure and tracking, then a monthly retainer for outbound, LinkedIn and paid search support. Week one covers NDA, contract, access and a commercial scoped against your named accounts and framework calendar. We run alongside your BD team or add capacity, whichever fits.",
    },
    steps: [
      {
        name: "Days 1 to 14: named universe, access and CRM structure",
        body: "NDA and contract signed. Named client, consultant and procurement account list built with your commercial team. CRM access, tender stage structure and multi-stakeholder company hierarchies in place before outbound starts.",
      },
      {
        name: "Weeks 2 to 4: outbound live, tracking wired",
        body: "Sequences running against named accounts timed to framework windows. Offline conversion wired to awarded programme value. LinkedIn targeting live on procurement, estates, programme and QS titles. Landing pages rebuilt with sector, framework and social value proof.",
      },
      {
        name: "End of month one: meetings, not leads",
        body: "Reporting shifts to booked preconstruction meetings by account tier and channel. Pipeline shows which clients and consultants are progressing. Cost per preconstruction meeting replaces cost per lead.",
      },
      {
        name: "Quarter one: pipeline to awards",
        body: "Named accounts progress through CRM stages. First awards start to show first-touch attribution. We scale what is earning meetings and cut what is not, with the board pack showing marketing contribution in awarded programme value.",
      },
    ],
  },
  cta: {
    heading: "Send us your named account list, or one framework you want to win",
    body: "We will show you where preconstruction meetings are leaking before we talk retainer. Share your target list or a live framework, and we will map the gap between outbound and awarded value.",
    buttonLabel: "Send the list or framework",
    href: "/contact",
  },
  proof: [
    {
      client: "Method proof: named-universe main contractor award loop",
      anonymised: true,
      honestyNote:
        "Operating method for a first main-contractor build with founder-level attention on your named universe and framework calendar. FormX and Canopy are the named proof standards for construction-adjacent commercial discipline.",
      situation:
        "Regional and mid-market main contractors often hold framework seats and multi-stakeholder relationships on paper, but marketing and BD use different account lists and stage names, so contribution in awarded programme value across 12 to 18 month cycles never reaches the board pack.",
      built:
        "Named client, consultant and procurement list of 150 to 400 accounts with your commercial team, HubSpot or Salesforce tender stages with multi-stakeholder hierarchies, outbound timed to framework windows, LinkedIn on procurement and QS titles, and offline conversion on awarded programme value.",
      results: [
        {
          metric: "Named-account universe sizing band",
          after: "150-400",
          window: "sized with commercial team per firm",
        },
        {
          metric: "CRM stages for frameworks and tenders",
          after: "6",
          window: "relationship through awarded",
        },
        {
          metric: "Stakeholder roles on programme hierarchies",
          after: "5",
          window: "client through board or political sponsor",
        },
      ],
      signedOff: false,
    },
  ],
  faqHeading: "What main contractors usually ask",
  faqVariant: "editorial",
  faqs: [
    {
      q: "Is main-contractor marketing just bigger fit-out marketing?",
      a: "Same tender spine, different scale and stakeholder complexity. Main contracting runs longer cycles (12 to 18 months), adds public sector social value scoring and portal process, and the buying committee often includes political or board sponsors alongside procurement, client and QS. We model all of that in CRM stages and company hierarchies.",
    },
    {
      q: "How big should our LinkedIn account list be?",
      a: "It depends on your geography, sectors and framework strategy. Most regional and mid-market main contractors we work with have a named universe of 150 to 400 accounts: the clients, consultants, QS firms and procurement seats that let the programmes they can win. We size and refine that list with your commercial team before campaigns start.",
    },
    {
      q: "How does Canopy relate to our buyers?",
      a: "Main contractors sell into the same procurement and estates seats that Canopy reaches with supplier management software. That crossover sharpens our LinkedIn targeting, creative and objection handling because we understand how those buyers think about supplier relationships.",
    },
    {
      q: "What CRM do you prefer?",
      a: "We work with HubSpot and Salesforce. What matters is that company records hold clients, consultants, QS firms and procurement contacts as linked parent and child accounts, with deals staged through relationship, framework, ITT received, bid submitted, negotiation and awarded. Required fields: programme_value_gbp, framework_name, tender_ref and expected_award_date. We build or fix that structure in the opening weeks.",
    },
    {
      q: "Should Google Ads still run?",
      a: "Yes, but in support. High-intent main contractor search is thin, so a generalist programme looks busy and stays commercially empty. Search still captures active tender queries and keeps you visible when a client or consultant searches your sector. We wire it into the same CRM loop so search-sourced meetings and awards sit alongside outbound and LinkedIn.",
    },
    {
      q: "When will we see awards from LinkedIn?",
      a: "LinkedIn does not generate awards directly. It opens and warms named accounts over quarters. What you should see within the first 60 to 90 days is pipeline stage movement, booked preconstruction meetings and warmer account relationships. Awards follow the pipeline and typically show first-touch attribution six to eighteen months after the relationship opened.",
    },
    {
      q: "How is our commercial data handled?",
      a: "Under NDA, with least-access in mind. We take only the fields we need to close the loop, keep programme values and account names out of the ad platforms, and anonymise anything sensitive. Platforms receive conversion events and values, not client names or tender details.",
    },
    {
      q: "Who will we speak to each week?",
      a: "The same person who owns your account, not a rotating pod. Your commercial or bid director is our weekly decision owner, and we sit with the preconstruction lead, managing director and founder as the work needs it.",
    },
  ],
  relatedIndustries: [
    {
      slug: "b2b-saas-and-platforms",
      why: "Main contractors sell into the same procurement buyers that Canopy reaches with supplier management software. We run acquisition on both sides of that table.",
    },
    {
      slug: "construction",
      why: "Main contracting sits under the construction pillar with shared tender infrastructure and a heavier framework and public-sector skew.",
    },
    {
      slug: "commercial-fit-out",
      why: "Fit-out specialists often sit on packages where you are the main contractor; CRM hierarchies need both roles modelled.",
    },
    {
      slug: "civils-infrastructure",
      why: "Sibling long-cycle vertical with overlapping framework logic and consultant-led buying committees.",
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

export default mainContractors;
