import type { Industry } from "@/content/types";

const commercialFitOut: Industry = {
  slug: "commercial-fit-out",
  name: "Commercial fit-out",
  parent: "construction",
  type: "sub",
  metaTitle: "Commercial Fit-Out Marketing UK | The Bright Brand",
  metaDescription:
    "Marketing for commercial fit-out contractors: tender-stage CRM, LinkedIn ABM, offline conversion on awards, and attribution across long buying cycles.",
  wedge:
    "You do not have a lead-volume problem, you have a pre-ITT problem. Awards are often decided before the tender pack arrives, and a 30-day window will never show which channel opened a Cat B package months earlier. We optimise for stage movement and awarded value, then prove it in your CRM and ads.",
  intro:
    "In commercial fit-out, the sale is often decided before the tender pack arrives. We build your CRM around the tender lifecycle, run LinkedIn and outbound against named occupiers, agents and main contractors, and wire awarded package value back into bidding so your board pack matches what your commercial team already tracks.",
  proofLead: {
    heading:
      "One or two fit-out firms. Founder-level attention. A build shaped around your account list and tender pipeline.",
    body: "We are taking on a small number of commercial fit-out contractors to build this properly: tender-stage CRM with five-role hierarchies, awarded value training bidding, named-account outbound, and board packs that match what your commercial team already forecasts. You get a senior team on your stack, not a construction template resold fifth.",
    quoteId: "formx",
    quoteIds: ["formx", "canopy"],
    askAiPrompt:
      "How can The Bright Brand help a commercial fit-out contractor with tender-stage CRM, named-account outbound and awarded-value attribution across long buying cycles? Summarise from thebrightbrand.com.",
  },
  heroVisual: {
    eyebrow: "For commercial fit-out",
    title: "What the account shows you, and what we put on the board",
    variant: "contrast",
    strapline:
      "40% of awards start more than 120 days before the ITT. A 30-day window misses the conversation that opened them.",
    contrastHeaders: { left: "The ad account", right: "Your board" },
    contrastRows: [
      {
        before: "Lead volume",
        after: "Named occupier and contractor coverage",
      },
      { before: "Cheap CPL", after: "Cost per pre-ITT meeting" },
      { before: "Form fills", after: "Awarded package value" },
      {
        before: "30-day ROAS",
        after: "First-touch on awards across 120-day cycles",
      },
    ],
  },
  heroCta: {
    primaryLabel: "Send your account list or a target scheme",
    secondaryLabel: "See how the first 90 days work",
    secondaryHref: "#engagement",
  },
  pipelineHeading:
    "Why your marketing numbers and your commercial tracker never agree",
  servicesHeading: "Where we start on your account",
  servicesIntro:
    "Start with the bottleneck: tender-stage CRM with five-role hierarchies, named-account outbound, LinkedIn on workplace and QS titles, or the offline loop that ties awarded package value back into bidding. We scope that against your list in week one.",
  serviceCardCtaLabel: null,
  briefing: {
    eyebrow: "Built with your commercial team",
    heading: "How we work with your commercial team, not around them",
    intro:
      "You already know your occupiers, your main contractors and your go/no-go list. We bring outbound infrastructure, CRM discipline and paid media into that conversation so spend follows named accounts and awarded package value, not anonymous traffic.",
    marketHeading: "The numbers your board will actually use",
    targetingHeading: "How we find demand with you",
  },
  marketStats: [
    {
      value: "Named occupiers, agents and main contractors",
      label: "Your real market",
      implication:
        "The published firm count is noise. Your real market is the occupiers, agents, QS firms and main contractors who let the packages you can win. We build that named list with your BD team using project intel and framework history, then run campaigns against it.",
    },
    {
      value: "40% of awards start 120+ days before ITT",
      label: "The stat that changes everything",
      implication:
        "More than 40% of eventual awards had a first meaningful touch more than 120 days before the ITT date. A standard 30-day attribution window misses those conversations entirely. We build attribution that sees the full cycle so the channels that opened those relationships get credit.",
    },
    {
      value: "Awarded package value",
      label: "What we optimise toward",
      implication:
        "Leads and meetings are diagnostic. Awarded package value is the number that matches what your commercial team tracks. We wire it as the offline conversion so bidding learns from real outcomes across nine to eighteen month cycles.",
    },
    {
      value: "First-touch attribution on awards",
      label: "What the board wants",
      implication:
        "When a Cat A or Cat B package awards, your board wants to know which channel or sequence first opened that occupier or contractor relationship. We build first-touch and multi-touch attribution against awarded value so marketing speaks the same language as your commercial team.",
    },
  ],
  commercialAccess: {
    intro:
      "Week one is NDA, contract and access with the people who own demand and the systems that hold tenders. Without that, we are guessing and you are paying for it.",
    people: [
      {
        role: "Occupier / workplace lead",
        need: "Decides brand, programme and often the shortlist before a formal ITT appears. The earliest and most commercially decisive relationship.",
      },
      {
        role: "QS / cost consultant",
        need: "Controls package value, bidder lists and commercial credibility checks. We need their awarded values in CRM.",
      },
      {
        role: "Main contractor commercial",
        need: "Pulls fit-out specialists onto packages when the main contract owns the shell. A key account in your named list.",
      },
      {
        role: "PM / design consultant",
        need: "Shapes specification and delivery risk. Often the early relationship owner before the QS formalises the bid list.",
      },
      {
        role: "BD / estimating lead",
        need: "Runs the named account list and go/no-go on tenders. Weekly decision owner with us.",
      },
    ],
    systems: [
      {
        name: "CRM (HubSpot or Salesforce)",
        need: "Company records for occupiers, main contractors, QS firms, PM consultants and agents as linked hierarchies; deals staged through relationship, framework, ITT, bid, negotiation and awarded.",
      },
      {
        name: "Outbound stack",
        need: "Sending domains, warm-up and sequence tooling so outbound scales without burning your primary domain.",
      },
      {
        name: "Project intel",
        need: "Glenigan or Barbour ABI access for live office, retail, hospitality and healthcare schemes with occupier, agent, QS and main contractor.",
      },
      {
        name: "Paid media accounts",
        need: "Admin access across Google and LinkedIn so they train on the same awarded-package events.",
      },
    ],
    outcome:
      "One loop from named-account touch to pre-ITT meeting to awarded package value, so you can scale spend against awards instead of form fills.",
  },
  targetingNotes: [
    {
      heading: "Build the named universe with BD, not a directory dump",
      body: "Firmbase counts over 10,000 fit-out firms, but only around 10% sit above £5m turnover. We cut the list to the mid-market occupiers, agents, QS firms and main contractors that can actually let your packages, using BD knowledge, project intel and framework history. That list is what sequences, LinkedIn and spend run against.",
    },
    {
      heading: "Live project intel shapes the weekly brief",
      body: "Glenigan and Barbour ABI name live and upcoming office, retail, hospitality and healthcare schemes with the occupier, agent, QS and main contractor. We use that to prioritise the named list so outbound hits accounts with active Cat A, Cat B or refurbishment schemes, not a static list that goes stale.",
    },
    {
      heading: "Workplace, procurement and QS titles on LinkedIn",
      body: "We target workplace leads, estates directors, procurement seats, QS, PM and main-contractor commercial titles. Those are the roles on the buying committee when a fit-out package is awarded. We build audiences by role and seniority, not company size.",
    },
    {
      heading: "Landing pages as BD collateral, not consumer funnels",
      body: "When an outbound recipient clicks through, the page needs Cat A and Cat B scheme proof, sector credentials and named project evidence, not a generic enquiry form. We build landing pages that support the named-account play and give the QS or workplace lead a reason to take the meeting or shortlist you.",
    },
  ],
  pipelineStages: [
    {
      name: "Relationship / early positioning",
      note: "Occupier, workplace lead, agent or QS warmth before any Cat A or Cat B tender reference exists",
    },
    {
      name: "Framework / PQQ",
      note: "Framework seat or approved bidder status before the priced package appears",
    },
    {
      name: "ITT received",
      note: "Cat A, Cat B or refurb tender pack landed; bid team mobilises",
    },
    {
      name: "Bid submitted",
      note: "Documented submission; too late as the first CRM stage for fit-out cycles",
    },
    {
      name: "Negotiation",
      note: "Value engineering, programme pressure and award clarifications",
    },
    {
      name: "Awarded",
      note: "Offline conversion on awarded package value by category into Google Ads and LinkedIn",
    },
  ],
  pipelineShape: [
    {
      heading: "We close the places your fit-out pipeline leaks before we scale",
      body: "Early conversations never enter your CRM because there is no ITT number yet, so we add relationship and framework stages that capture warmth before the tender appears. Framework seats live in a shared drive, so call-offs look like surprise inbound. Marketing reports MQLs while your commercial director tracks bid submission rates and awarded package value. We align both on the same stages and the same numbers in the opening weeks.",
    },
    {
      heading: "We build your CRM around the full cycle, not just the tender",
      body: "If marketing measures form fills and your CRM only starts at bid submitted, you are blind for most of a nine to eighteen month cycle. We add stages for relationship, framework and pre-ITT work, with company hierarchies linking occupier, main contractor, QS, PM and consultant, so your pipeline reflects the commercially decisive work that happens months before the tender pack arrives.",
    },
    {
      heading: "We run named-account media alongside thin search, not instead of it",
      body: "High-intent fit-out search is thin. A generalist paid search programme will look busy and stay commercially empty. Search still captures active tender queries and keeps you visible when an occupier, agent or main contractor searches. The heavier lift is LinkedIn and outbound against named accounts, measured on stage movement and awarded package value, not click volume.",
    },
  ],
  infrastructure: [
    {
      heading: "CRM for tenders, hierarchies and forecast discipline",
      body: "HubSpot or Salesforce holds company records for occupiers, main contractors, QS firms, PM consultants and agents as linked parent and child accounts, with deals staged through relationship, framework, ITT received, bid submitted, negotiation and awarded. Required fields: package_value_gbp, tender_ref, category (Cat A, Cat B, refurb), expected_award_date and the five-role company hierarchy. Framework call-offs get a parallel path so they do not inflate net-new reporting. We build or fix that structure before campaigns start.",
    },
    {
      heading: "Outbound infrastructure that protects domain health",
      body: "Sending domains, warm-up, deliverability monitoring and sequence tooling managed so outbound scales without burning your primary domain. Meeting outcomes write back to CRM with the sequence and channel that sourced them.",
    },
    {
      heading: "Offline conversion on awarded package value",
      body: "When a Cat A, Cat B or refurbishment package awards, the value and category write back to Google Ads and LinkedIn as offline conversions. Bidding learns from real commercial outcomes across nine to eighteen month cycles. Board packs show first-touch and multi-touch attribution against awarded value so marketing speaks the same language as your commercial and bid team.",
    },
  ],
  engagement: {
    eyebrow: "Commercials and the first 90 days",
    heading: "How we charge, and what the first quarter looks like",
    intro:
      "Retainer or project-based, scoped against your account list and stack in week one so you see the number before campaigns start. No long lock-in while we are both proving it works.",
    commercials: {
      heading: "Build, then retainer",
      body: "A one-off build for CRM structure, outbound infrastructure and tracking, then a monthly retainer for outbound, LinkedIn and paid search support. Week one covers NDA, contract, access and a commercial scoped against your named list. We run alongside your BD team or add outbound capacity, whichever fits.",
    },
    steps: [
      {
        name: "Days 1 to 14: list, access and CRM structure",
        body: "NDA and contract signed. Named occupier, agent and contractor list built with BD. CRM access, tender stage structure and five-role company hierarchies in place before outbound starts.",
      },
      {
        name: "Weeks 2 to 4: outbound live, tracking wired",
        body: "Sequences running against named accounts. Offline conversion wired to awarded package value. LinkedIn targeting live on workplace, procurement, QS, PM and commercial titles. Landing pages rebuilt with Cat A, Cat B and sector proof.",
      },
      {
        name: "End of month one: meetings, not leads",
        body: "Reporting shifts to booked pre-ITT meetings by account tier and channel. Pipeline shows which occupiers and contractors are warming. Cost per pre-ITT meeting replaces cost per lead.",
      },
      {
        name: "Quarter one: pipeline to awards",
        body: "Named accounts progress through CRM stages. First awards start to show first-touch attribution. We scale what is earning meetings and cut what is not, with the board pack showing marketing contribution in awarded package value.",
      },
    ],
  },
  cta: {
    heading: "Send us your named account list, or one scheme you want to win",
    body: "We will show you where pre-ITT meetings are leaking before we talk retainer. Share your target list or a live Cat A or Cat B scheme, and we will map the gap between outbound and awarded value.",
    buttonLabel: "Send the list or scheme",
    href: "/contact",
  },
  stackNotes: [
    {
      heading: "Firmbase as a mid-market filter, not the campaign universe",
      body: "Firmbase lists more than ten thousand fit-out companies, but only about one in ten sit above five million pounds turnover. We use that cut with your BD team as a starting filter, then replace the directory dump with named occupiers, agents, QS firms and main contractors tied to live Cat A, Cat B and refurbishment schemes from Glenigan or Barbour ABI.",
    },
    {
      heading: "Five-role hierarchies on every package deal",
      body: "Fit-out awards usually involve an occupier or workplace lead, a main contractor commercial seat, a QS or cost consultant, a PM or design consultant, and sometimes an agent. HubSpot or Salesforce company records must link those five roles to the deal so first-touch attribution can name which relationship opened the package, not only which form was filled.",
    },
    {
      heading: "Cat A, Cat B and refurb as required category fields",
      body: "Awarded package value alone is not enough for fit-out reporting. We require category on every deal so board packs can separate Cat A, Cat B and refurbishment awards, offline conversion values stay honest by package type, and LinkedIn audiences can be prioritised toward the schemes you actually win.",
    },
    {
      heading: "Pre-ITT meeting as the interim learning event",
      body: "Before Cat A or Cat B awards land, Smart Bidding still needs a signal it can trust. We treat a booked pre-ITT meeting with a workplace lead, QS or main-contractor commercial seat as the interim conversion, then graduate the account to awarded package value once finance confirms the close. That keeps media learning honest across nine to eighteen month fit-out cycles without training on thank-you page views.",
    },
    {
      heading: "Office, retail, hospitality and healthcare scheme verticals",
      body: "Fit-out demand is scheme-shaped, not SIC-shaped. Weekly prioritisation pulls Glenigan and Barbour ABI records for office, retail, hospitality and healthcare schemes in early design or pre-tender, then maps the named occupier, agent, QS and main contractor into outbound sequences and LinkedIn audiences before the formal ITT window opens.",
    },
    {
      heading: "Framework call-offs separated from net-new Cat B awards",
      body: "When a framework seat converts into a call-off, treating that as a brand-new package inflates awarded value and confuses first-touch reporting. We give call-offs a parallel CRM path with the parent framework named, so board packs can show net-new Cat A and Cat B wins separately from seated work you already earned through earlier relationship spend.",
    },
  ],
  proof: [
    {
      client: "Method proof: Cat A and Cat B fit-out tender loop",
      anonymised: true,
      honestyNote:
        "Operating method for a first commercial fit-out build focused on pre-ITT warmth, five-role hierarchies and awarded package value. FormX and Canopy remain the named proof standards for construction-adjacent commercial discipline.",
      situation:
        "Cat A and Cat B contractors often open packages through workplace leads and QS firms more than 120 days before the ITT, yet CRM only wakes up when the tender PDF arrives. Marketing then reports MQLs while commercial tracks bid rates and awarded package value on a different spreadsheet. Framework call-offs sit in shared drives and get counted as surprise inbound, so the board never sees which channel opened the occupier relationship.",
      built:
        "Named occupier, agent and contractor list cut from Firmbase mid-market filters plus Glenigan or Barbour ABI scheme intel across office, retail, hospitality and healthcare. HubSpot or Salesforce tender stages with five-role hierarchies and Cat A or Cat B category fields. Outbound and LinkedIn against workplace, estates, procurement, QS and main-contractor commercial titles. Landing pages rebuilt as Cat A and Cat B BD collateral. Offline conversion on awarded package value, with booked pre-ITT meetings as the interim learning event.",
      results: [
        {
          metric: "CRM stages for Cat A and Cat B tenders",
          after: "6",
          window: "relationship through awarded",
        },
        {
          metric: "Company hierarchy roles per package",
          after: "5",
          window: "occupier, main contractor, QS, PM, consultant",
        },
        {
          metric: "Attribution window modelled past ITT",
          after: "120+",
          window: "days for first meaningful touch on awards",
        },
      ],
      signedOff: false,
    },
  ],
  faqHeading: "What commercial fit-out firms usually ask",
  faqVariant: "editorial",
  faqs: [
    {
      q: "What makes commercial fit-out marketing different from general construction marketing?",
      a: "Fit-out packages are won through relationships with occupiers, agents, QS firms and main contractors months before the tender arrives. The cycle runs nine to eighteen months, the five-role hierarchy (occupier, main contractor, QS, PM, consultant) is specific to fit-out, and more than 40% of awards start over 120 days before the ITT. General construction marketing misses all of this because it optimises to form fills on a 30-day window.",
    },
    {
      q: "Should we still run Google Ads if search volume is low?",
      a: "Yes, but in support. High-intent fit-out search is thin, so a generalist programme looks busy and stays commercially empty. Search still captures active tender queries and keeps you visible when an occupier or agent searches your discipline. We wire it into the same CRM loop so search-sourced meetings and awards sit alongside outbound.",
    },
    {
      q: "How do you work with procurement buyers?",
      a: "Workplace leads, estates directors, procurement seats and QS firms are the roles that shape shortlists before the formal ITT. We target those titles on LinkedIn and through outbound, timed to when schemes are in early design or pre-tender, so you are positioned before the formal process starts.",
    },
    {
      q: "Which CRM do you prefer for fit-out?",
      a: "We work with HubSpot and Salesforce. What matters is that company records hold occupiers, main contractors, QS firms, PM consultants and agents as linked parent and child accounts, with deals staged through relationship, framework, ITT received, bid submitted, negotiation and awarded. Required fields: package_value_gbp, tender_ref, category (Cat A, Cat B, refurb), and expected_award_date. We build or fix that structure in the opening weeks.",
    },
    {
      q: "What conversion event should ads optimise for?",
      a: "Awarded package value. Leads and meetings are diagnostic. We fire offline conversion on awarded value so bidding learns from real commercial outcomes. In the early weeks before awards land, we optimise to booked pre-ITT meetings as an interim signal.",
    },
    {
      q: "How long before we trust the new attribution?",
      a: "The CRM structure, outbound and offline conversion loop should be live within the first 30 to 60 days. Trustworthy first-touch attribution on awards takes longer because your cycles run nine to eighteen months. What you should see in the first quarter is pipeline stage movement, booked meetings by channel, and the infrastructure to credit awards when they land.",
    },
    {
      q: "How is our commercial data handled?",
      a: "Under NDA, with least-access in mind. We take only the fields we need to close the loop, keep package values and account names out of the ad platforms, and anonymise anything sensitive. Platforms receive conversion events and values, not occupier names or tender details.",
    },
    {
      q: "Who will we speak to each week?",
      a: "The same person who owns your account, not a rotating pod. Your BD or marketing lead is our weekly decision owner, and we sit with your commercial director, estimating lead and founder as the work needs it.",
    },
  ],
  relatedIndustries: [
    {
      slug: "civils-infrastructure",
      why: "Sibling tender-led vertical with longer cycles and thinner search volume; same CRM and award measurement patterns.",
    },
    {
      slug: "building-services",
      why: "M&E packages often sit on the same schemes with overlapping QS and project stakeholders.",
    },
    {
      slug: "b2b-saas-and-platforms",
      why: "Fit-out sells into the same procurement buyers that supplier platforms reach; that crossover sharpens ABM titles.",
    },
  ],
  moneyPages: [],
  resourceSlugs: [
    "tender-hubspot-deal-pipeline",
    "offline-conversion-upload-template",
    "attribution-health-check",
    "ga4-enquiry-event-schema",
  ],
  toolSlugs: [],
  blogTags: ["crm", "offline-conversions", "attribution"],
};

export default commercialFitOut;
