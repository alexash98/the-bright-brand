import type { Industry } from "@/content/types";

const facilitiesManagement: Industry = {
  slug: "facilities-management",
  name: "Facilities management",
  parent: "construction",
  type: "sub",
  metaTitle: "Facilities Management Marketing UK | Bright Brand",
  metaDescription:
    "Marketing for FM companies: framework and soft-services demand, CAFM-aware CRM, Google Ads for reactive intent, and automation that sales will actually use.",
  wedge:
    "You do not have one FM funnel, you have two. Framework and TFM tenders behave like construction bids, while reactive and planned maintenance behave like local service demand. Flatten them into one pipeline and your forecasts lie. We build both motions so bidding learns from the right signal.",
  intro:
    "FM runs two buying motions under one brand: tenders that behave like construction bids, and reactive demand that behaves like local service search. We build your CRM around both and wire won contract value back into bidding so the board pack matches what your commercial team already tracks.",
  proofLead: {
    heading:
      "One or two FM firms. Founder-level attention. A build shaped around your service lines and contract pipeline.",
    body: "We are taking on a small number of FM contractors to build this properly: dual-motion CRM with tender and reactive stages, won contract value training bidding, named-account outbound for framework buyers, and search that captures reactive demand without drowning BD in noise. You get a senior team on your stack, not a template resold fifth.",
    quoteId: "canopy",
    quoteIds: ["canopy"],
    askAiPrompt:
      "How can The Bright Brand help a facilities management contractor with dual-motion CRM for tenders and reactive work, CAFM-aware tracking and won contract value attribution? Summarise from thebrightbrand.com.",
  },
  heroVisual: {
    eyebrow: "For facilities management",
    title: "What the account shows you, and what we put on the board",
    variant: "contrast",
    strapline:
      "Two motions, one board pack. Tender and reactive need separate stages, not separate truths.",
    contrastHeaders: { left: "The ad account", right: "Your board" },
    contrastRows: [
      { before: "Blended CPL", after: "Cost per meeting / won job" },
      {
        before: "Lead volume",
        after: "Named estate and procurement coverage",
      },
      { before: "Form fills", after: "Won contract value" },
      {
        before: "30-day ROAS",
        after: "First-touch across mixed cycles",
      },
    ],
  },
  heroCta: {
    primaryLabel: "Send your account list or service lines",
    secondaryLabel: "See how the first 90 days work",
    secondaryHref: "#engagement",
  },
  pipelineHeading:
    "Why your marketing numbers and your commercial tracker never agree",
  servicesHeading: "Where we start on your account",
  servicesIntro:
    "Start with the bottleneck: dual-motion CRM for tenders and reactive, call tracking on service lines, named-account outbound for estates and procurement, or the offline loop that ties won contract value back into bidding. We scope that against your service lines in week one.",
  serviceCardCtaLabel: null,
  briefing: {
    eyebrow: "Built with your commercial team",
    heading: "How we work with your commercial team, not around them",
    intro:
      "You already know your sites, your service lines and your framework calendar. We bring outbound infrastructure, CRM discipline and paid media into that conversation so tender spend follows named accounts and won contract value, while reactive search captures the service demand your operations team needs.",
    marketHeading: "The numbers your board will actually use",
    targetingHeading: "How we find demand with you",
  },
  marketStats: [
    {
      value: "Tender and reactive need separate stages",
      label: "Two motions, one board pack",
      implication:
        "If tender wins and reactive job wins share one CRM pipeline, your forecasts lie and bidding cannot tell a five-year TFM award from a boiler call. We build parallel stage paths so each motion gets its own conversion events, its own reporting and its own cost-per-win, while the board sees both in one pack.",
    },
    {
      value: "Won contract value",
      label: "What we optimise toward",
      implication:
        "Leads and meetings are diagnostic. Won contract value is the number that matches what your commercial team tracks. We wire it as the offline conversion for tender-led work, and won job value for reactive, so bidding learns from real outcomes across both motions.",
    },
    {
      value: "Estates, procurement and category managers",
      label: "The buying seats that matter",
      implication:
        "Head of estates, FM manager, procurement and category titles are the seats that shape PQQs and award frameworks. We target them on LinkedIn and through outbound. For reactive, the facilities coordinator or building manager is often the caller, and poor call handling loses that work before BD sees it. We wire both paths.",
    },
    {
      value: "CAFM and CRM, not one or the other",
      label: "The stack marketing must respect",
      implication:
        "Your CAFM holds tickets, PPM schedules and site data. Your CRM holds deals, stages and pipeline. Marketing must land in the CRM without trampling CAFM workflows. We integrate the two so operations and sales share context after mobilisation, and expansion inside live contracts becomes visible to reporting.",
    },
  ],
  commercialAccess: {
    intro:
      "Week one is NDA, contract and access with the people who own demand and the systems that hold tickets and tenders. Without that, we are guessing and you are paying for it.",
    people: [
      {
        role: "Head of estates / FM director",
        need: "Owns site performance, incumbent relationships and hard and soft service scope. The primary relationship for tender-led work.",
      },
      {
        role: "Procurement / category manager",
        need: "Runs PQQ, framework and contract renewals. Cares about risk, SLA proof and value for money. Key ABM target.",
      },
      {
        role: "Operations / account director",
        need: "On the sell side: mobilisation quality and expansion inside live contracts. We need expansion wins visible in CRM.",
      },
      {
        role: "BD / commercial lead",
        need: "Runs the named account list and go/no-go on tenders. Weekly decision owner with us.",
      },
      {
        role: "Facilities coordinator / building manager",
        need: "Often the reactive caller. Poor call handling or missing call tracking loses this work before BD ever sees it.",
      },
    ],
    systems: [
      {
        name: "CRM (HubSpot or Salesforce)",
        need: "Parallel deal paths for tender lifecycle and reactive or PPM, with required fields for contract value, service line, site count and framework name where relevant.",
      },
      {
        name: "CAFM",
        need: "Tickets, PPM schedules and site data stay in Concept, Planon, QFM or your existing CAFM; we define the commercial handoff into CRM without trampling operations workflows.",
      },
      {
        name: "Call tracking",
        need: "Dynamic numbers on reactive and emergency pages with dispositions writing surveyed, quoted and won back into CRM.",
      },
      {
        name: "Paid media accounts",
        need: "Admin access across Google and LinkedIn so tender and reactive conversion actions train independently.",
      },
    ],
    outcome:
      "One board pack with two honest motions: booked meetings and won contract value for tenders, cost per won job by service line for reactive.",
  },
  targetingNotes: [
    {
      heading: "Named estates and procurement accounts for contract work",
      body: "Your tender pipeline comes from estates directors, heads of FM, procurement and category managers at the organisations you want under contract. We build that list with BD using framework history, live contract renewals and project intel, then run outbound and LinkedIn against it.",
    },
    {
      heading: "Google Ads by service line for reactive demand",
      body: "Reactive and PPM search is real demand from facilities coordinators and building managers who need an engineer, a compliance check or an emergency repair. We structure campaigns by service line and region with tight negatives against job seekers and training noise, so search spend earns won jobs, not wasted clicks.",
    },
    {
      heading: "New-build and refurbishment mobilisation windows",
      body: "Glenigan and Barbour ABI project intel names new builds and major refurbs that create FM mobilisation windows. We time outbound to reach estates and main contractor contacts before an incumbent is locked in for five years.",
    },
    {
      heading: "LinkedIn roles for the buying committee",
      body: "Head of estates, FM director, procurement, category manager and operations titles are the core ABM set. We build audiences by role and seniority at your target organisations, not by company size or generic industry.",
    },
  ],
  pipelineStages: [
    {
      name: "Tender: PQQ / framework",
      note: "Estates or procurement-led opportunity before priced bid",
    },
    {
      name: "Tender: ITT / bid submitted",
      note: "Service scope and pricing locked for TFM or hard FM",
    },
    {
      name: "Tender: awarded / mobilisation",
      note: "Offline conversion on won contract value; retention clock starts",
    },
    {
      name: "Reactive: enquiry / survey",
      note: "Phone or form into site survey for repair or PPM",
    },
    {
      name: "Reactive: quote / won job",
      note: "Offline conversion on won job value by service line",
    },
  ],
  pipelineShape: [
    {
      heading: "We build your CRM for two motions, not one flat funnel",
      body: "Framework and TFM tenders behave like construction bids: PQQ, ITT, negotiation, award, mobilisation. Reactive and planned maintenance behaves like local service demand: phone, form, site survey, quote, job win. If your CRM flattens both into enquiry and won, your forecasts lie and Google Ads cannot tell a boiler call from a five-year soft services tender. We build parallel stage paths so each motion reports honestly and bidding learns from the right signal.",
    },
    {
      heading: "We close the five places FM pipelines leak",
      body: "CAFM tickets never reach sales, so reactive work is invisible to marketing. Out-of-hours calls die on a mobile with no CRM record. Marketing automation sends SaaS-style nurture to a facilities coordinator who needed an engineer tomorrow. Framework deals only enter the CRM at bid submission, hiding months of relationship work. Expansion inside live contracts is invisible to media reporting. We audit and wire all five in the opening weeks.",
    },
    {
      heading: "Search earns its keep on reactive; ABM opens the contracts",
      body: "Google Ads captures high-intent repair, PPM and TFM queries with tight negatives against job seekers and training noise. LinkedIn and outbound open named estates and procurement accounts for larger contracts. Both land on stages your commercial team recognises, with offline conversion on won contract value where finance agrees. We scope the right mix against your service lines in week one.",
    },
  ],
  infrastructure: [
    {
      heading: "Dual-motion CRM for tenders and reactive",
      body: "We build parallel deal paths in HubSpot or Salesforce: tender lifecycle (PQQ, ITT, bid, negotiation, awarded, mobilisation) and reactive or PPM (enquiry, survey, quote, won). Required fields: contract_value_gbp, service_line, site_count, framework_name for tender work, and job_value, service_type, response_time for reactive. Company hierarchies link the client organisation, estates contact and any managing agent.",
    },
    {
      heading: "Call tracking on reactive lines",
      body: "Dynamic numbers on service line and emergency pages, whisper context for service type and region, dispositions for surveyed, quoted and won, and write-back into CRM so reactive phone wins rejoin bidding. Out-of-hours calls route properly instead of dying on a mobile.",
    },
    {
      heading: "Offline conversion on won contract value",
      body: "When a framework awards or a reactive job wins, the value and service line write back to Google Ads and LinkedIn as offline conversions. Tender and reactive fire as separate conversion actions so bidding learns from each motion independently. Board packs show first-touch attribution against won value across both.",
    },
  ],
  stackNotes: [
    {
      heading: "CAFM stays operational; CRM holds the commercial truth",
      body: "Concept, Planon, Service Works QFM and FSI Concept Evolution remain the systems for tickets and planned maintenance. Marketing needs a clear handoff: when a ticket or survey becomes a commercial opportunity, which ID stamps the CRM deal, and which fields operations must not overwrite after mobilisation.",
    },
    {
      heading: "Separate conversion actions for tender and reactive",
      body: "A five-year soft services award and a same-day boiler call cannot train the same Smart Bidding goal. We configure won_contract_value for tender-led work and won_job_value by service_line for reactive, so Google Ads and LinkedIn learn from each motion without cross-contamination.",
    },
    {
      heading: "SafeContractor and Constructionline as trust signals, not targeting",
      body: "Accreditation logos belong on landing pages and tender packs so estates and procurement buyers recognise operational credibility. They are not LinkedIn targeting layers. We keep CHAS, SafeContractor and Constructionline proof on the pages that support named-account plays and reactive service lines.",
    },
  ],
  engagement: {
    eyebrow: "Commercials and the first 90 days",
    heading: "How we charge, and what the first quarter looks like",
    intro:
      "Retainer or project-based, scoped against your service lines and stack in week one so you see the number before campaigns start. No long lock-in while we are both proving it works.",
    commercials: {
      heading: "Build, then retainer",
      body: "A one-off build for CRM structure (dual-motion stages), outbound infrastructure, call tracking and search setup, then a monthly retainer for outbound, LinkedIn and paid search. Week one covers NDA, contract, access and a commercial scoped against your named accounts and service lines. We run alongside your BD team or add capacity, whichever fits.",
    },
    steps: [
      {
        name: "Days 1 to 14: service lines, access and CRM structure",
        body: "NDA and contract signed. Named estates and procurement accounts listed with BD. CRM access, dual-motion stage structure and CAFM integration scoped. Call tracking planned for reactive lines.",
      },
      {
        name: "Weeks 2 to 4: outbound and search live, tracking wired",
        body: "Sequences running against named framework buyers. Google Ads structured by service line and region with tight negatives. Offline conversion wired to won contract value (tenders) and won job value (reactive). Call tracking live on reactive lines with dispositions writing back to CRM.",
      },
      {
        name: "End of month one: meetings and jobs, not leads",
        body: "Reporting splits into two views: booked meetings with estates and procurement buyers for tenders, and cost per won job by service line for reactive. Cost per lead disappears from the board pack.",
      },
      {
        name: "Quarter one: pipeline across both motions",
        body: "Named accounts progress through tender stages. Reactive search shows cost per won job by service line and region. First contract awards start to show first-touch attribution. The board sees both motions in one pack, reported honestly and separately.",
      },
    ],
  },
  cta: {
    heading:
      "Send us your named account list, or the service lines you want to grow",
    body: "We will show you where meetings and reactive wins are leaking before we talk retainer. Share your target list or a service line that should be earning more, and we will map the gap.",
    buttonLabel: "Send the list or service lines",
    href: "/contact",
  },
  proof: [
    {
      client: "Method proof: dual-motion FM tender and reactive loop",
      anonymised: true,
      honestyNote:
        "Operating method for a first FM build with founder-level attention on dual-motion CRM, CAFM handoff and won contract value. FormX and Canopy are the named proof standards for construction-adjacent commercial discipline.",
      situation:
        "FM contractors often mix framework and TFM bids with reactive and PPM demand under one brand, but CAFM tickets, out-of-hours calls and HubSpot deals never agree on what a win means. Marketing then reports blended CPL while commercial tracks contract awards and job wins on separate clocks.",
      built:
        "Parallel CRM paths for tender lifecycle and reactive or PPM, call tracking on service lines with dispositions into CRM, Google Ads by service line and region with separate conversion actions, named-account outbound to estates and procurement, and offline conversion on won contract value and won job value.",
      results: [
        {
          metric: "Parallel CRM motion paths",
          after: "2",
          window: "tender and reactive or PPM",
        },
        {
          metric: "Conversion actions for bidding",
          after: "2+",
          window: "won contract value and won job value",
        },
        {
          metric: "Leak points wired in opening weeks",
          after: "5",
          window: "CAFM, calls, nurture, pre-bid, expansion",
        },
      ],
      signedOff: false,
    },
  ],
  faqHeading: "What facilities management firms usually ask",
  faqVariant: "editorial",
  faqs: [
    {
      q: "Is FM marketing closer to construction or local services?",
      a: "Both, and that is the problem most agencies miss. Framework and TFM tenders behave like construction: PQQ, ITT, negotiation, award, mobilisation, with cycles running months. Reactive and planned maintenance behaves like local service demand: phone, form, site survey, quote, job win, often within days. We build separate CRM paths for each so bidding learns from the right signal and the board sees both honestly.",
    },
    {
      q: "Do you replace our CAFM?",
      a: "No. Your CAFM holds tickets, PPM schedules and site data. We integrate with it so that operations context flows into CRM where it supports expansion reporting and contract renewal visibility. We do not replace, duplicate or override CAFM workflows.",
    },
    {
      q: "How does procurement crossover help?",
      a: "Head of estates, FM manager, procurement and category manager titles are the seats that shape PQQs and award FM frameworks. Those same procurement buyers appear in supplier management software like Canopy. That crossover sharpens our LinkedIn targeting, framework messaging and objection handling.",
    },
    {
      q: "What should Google Ads optimise for?",
      a: "It depends on the motion. For reactive and PPM service lines, Google Ads captures high-intent search and optimises toward won job value by service line. For tender-led work, search plays a supporting role alongside outbound and LinkedIn, with offline conversion firing on won contract value. We run both in the same account with separate campaigns and conversion actions so they do not cross-contaminate.",
    },
    {
      q: "Will marketing automation annoy site teams?",
      a: "Not if it is built properly. We route by intent type: a facilities coordinator who needs an engineer tomorrow gets an immediate response, not a five-email nurture sequence. Tender-stage buyers get short, operational follow-up that respects long cycles. SaaS-style drip campaigns have no place in FM and we do not build them.",
    },
    {
      q: "How long are FM sales cycles?",
      a: "Mixed. Reactive and planned maintenance can close within days to weeks. Framework and TFM tenders run three to twelve months from PQQ to mobilisation, sometimes longer. We build attribution windows to match each: short lookbacks for reactive, long lookbacks for tender-led work, both feeding one board pack.",
    },
    {
      q: "How is our commercial data handled?",
      a: "Under NDA, with least-access in mind. We take only the fields we need to close the loop, keep contract values and account names out of the ad platforms, and anonymise anything sensitive. Platforms receive conversion events and values, not client names or tender details.",
    },
    {
      q: "Who will we speak to each week?",
      a: "The same person who owns your account, not a rotating pod. Your BD or marketing lead is our weekly decision owner, and we sit with your operations director, commercial lead and founder as the work needs it.",
    },
  ],
  relatedIndustries: [
    {
      slug: "b2b-saas-and-platforms",
      why: "FM contractors sell into estates and procurement buyers that Canopy also reaches with supplier management software. That crossover shapes ABM lists and framework messaging.",
    },
    {
      slug: "construction",
      why: "FM sits under the construction and built environment pillar, with shared estate buyers and a different mix of reactive and tender demand.",
    },
    {
      slug: "main-contractors",
      why: "Main contractors and developers often influence which FM partner mobilises after handover on new sites.",
    },
    {
      slug: "commercial-fit-out",
      why: "Fit-out programmes create mobilisation windows for soft and hard FM; buying committees often overlap on workplace and estates roles.",
    },
  ],
  moneyPages: [],
  resourceSlugs: [
    "offline-conversion-upload-template",
    "attribution-health-check",
    "ga4-enquiry-event-schema",
  ],
  toolSlugs: [],
  blogTags: ["crm", "google-ads", "offline-conversions"],
};

export default facilitiesManagement;
