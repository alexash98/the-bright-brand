import type { Industry } from "@/content/types";

const residentialHomeBuilders: Industry = {
  slug: "residential-home-builders",
  name: "Residential home builders",
  parent: "construction",
  type: "sub",
  metaTitle: "Housebuilder Marketing Agency UK | The Bright Brand",
  metaDescription:
    "Marketing for housebuilders: per-development Google Ads, call tracking, reservation CRM, and landing pages that convert plot enquiries into appointments.",
  heroH1: "Housebuilder marketing agency",
  wedge:
    "You do not have a lead-volume problem, you have a per-site reservation problem. Buyers search by development, book showhomes and call sales suites. We structure campaigns, call tracking and CRM around each outlet so the board sees cost per reservation by site.",
  intro:
    "Housebuilder marketing is a local demand system wearing a national brand. We build development-level Google Ads, call tracking per site and reservation-aware CRM stages so your board sees cost per reservation by outlet, not blended group CPL.",
  proofLead: {
    heading:
      "A small number of housebuilders. Founder-level attention. A build shaped around your outlets.",
    body: "We are taking on a small number of housebuilders to build this properly: development-level Google Ads, call tracking per site, reservation-aware CRM stages, and board packs that show cost per reservation by outlet. You get a senior team on your stack, not a property template resold fifth.",
    quoteId: "formx",
    quoteIds: ["formx", "canopy"],
    askAiPrompt:
      "How can The Bright Brand help a UK housebuilder with per-development Google Ads, call tracking and reservation CRM so cost per reservation by site trains acquisition? Summarise from thebrightbrand.com.",
  },
  heroVisual: {
    eyebrow: "For housebuilders",
    title: "What the account shows you, and what we put on the board",
    variant: "contrast",
    strapline:
      "Every development is its own market. One national campaign averages them all into mush.",
    contrastHeaders: { left: "The ad account", right: "Your board" },
    contrastRows: [
      { before: "Blended CPL", after: "Cost per reservation, by site" },
      { before: "Leads up", after: "Right-catchment appointments" },
      { before: "Click volume", after: "Reservations per development" },
      { before: "National ROAS", after: "Site-level P&L contribution" },
    ],
  },
  heroCta: {
    primaryLabel: "Send your development list or site",
    secondaryLabel: "See how the first 90 days work",
    secondaryHref: "#engagement",
  },
  pipelineHeading:
    "Why your marketing numbers and your commercial tracker never agree",
  servicesHeading: "Where we start on your account",
  servicesIntro:
    "Start with the bottleneck: development-level Google Ads, call tracking per site, reservation-aware CRM stages, or the offline loop that ties reservations back into bidding. We scope that against your outlet list in week one.",
  serviceCardCtaLabel: null,
  briefing: {
    eyebrow: "Built with your sales team",
    heading: "How we work with your sales team, not around them",
    intro:
      "You already know your developments, your release calendar and your sales suite capacity. We bring per-site paid media, call tracking and CRM discipline into that conversation so spend follows the outlets with release capacity, and the board sees cost per reservation by site, not blended group metrics.",
    marketHeading: "The numbers your board will actually use",
    targetingHeading: "How we find demand with you",
  },
  marketStats: [
    {
      value: "Campaigns, calls and reporting per development",
      label: "Every outlet is its own market",
      implication:
        "Buyers search by development, town and plot type. Each outlet has its own catchment, search demand and release calendar. We structure Google Ads, call tracking and landing pages per site so your budget follows the outlets with release capacity, not a blended national average.",
    },
    {
      value: "Reservation, not enquiry",
      label: "The conversion that matters",
      implication:
        "Enquiry CPL is diagnostic. Reservation is the number your sales managers live by. We wire reservation status from your CRM or reservation system as the offline conversion so bidding learns from the outcome that actually affects your site-level P&L.",
    },
    {
      value: "45% of conversations start on the phone",
      label: "The channel your ads cannot see",
      implication:
        "Call-led enquiries commonly make up 45% or more of sales-accepted conversations but receive under 20% of tracked conversion credit when dynamic number insertion is absent. We put tracked numbers on every development, write dispositions back to CRM, and rejoin phone reservations into bidding.",
    },
    {
      value: "Cost per reservation by site",
      label: "What the board wants",
      implication:
        "Your regional sales director judges marketing on appointments and reservations per outlet, not blended group CPL. We report cost per reservation by development so the board sees which sites are earning their spend and which need budget reallocated.",
    },
  ],
  commercialAccess: {
    intro:
      "Week one is NDA, contract and access with the people who own demand and the systems that hold reservations. Without that, we are guessing and you are paying for it.",
    people: [
      {
        role: "Site / outlet sales manager",
        need: "Owns the showhome diary, reservation quality and local competitor reality. Feeds appointment and reservation outcomes back to marketing.",
      },
      {
        role: "Regional sales director",
        need: "Allocates people and incentives across developments. Judges marketing on appointments and reservations per outlet. Weekly decision owner with us.",
      },
      {
        role: "Group marketing lead",
        need: "Controls brand search, creative standards and shared media budgets. Needs per-site reporting that justifies development-level spend.",
      },
      {
        role: "Reservation / CRM admin",
        need: "Keeps plot status honest. Without them, offline conversions and call tracking write-back fail. A critical weekly contact.",
      },
    ],
    systems: [
      {
        name: "Reservation system or housebuilder CRM",
        need: "development_id, plot interest, appointment outcome and reservation status as required context, with click IDs kept intact across merges.",
      },
      {
        name: "Call tracking",
        need: "Dynamic numbers per development, whisper context for the site name, and dispositions writing back so phone reservations rejoin bidding.",
      },
      {
        name: "Paid media accounts",
        need: "Admin access across Google and Meta so they train on the same reservation events, with campaigns structured per development.",
      },
      {
        name: "Landing pages and analytics",
        need: "Per-site pages with release-specific proof, and GA4 enquiry events carrying development_id so analysis matches the ad structure.",
      },
    ],
    outcome:
      "One loop from local search or call to appointment to reservation, reported by development, so you can scale spend against site-level P&L instead of blended group CPL.",
  },
  targetingNotes: [
    {
      heading: "Development catchments, not national campaigns",
      body: "Housebuyer demand is geographic. We build catchments with your sales team (drive-time or radius), then structure Google Ads and landing pages per development. Each outlet gets its own budget, its own keywords and its own reporting.",
    },
    {
      heading: "Release calendars and plot data shape the brief",
      body: "Sales release dates, plot mixes and incentive windows are the targeting truth for media pacing. We sync with your reservation system so marketing does not fund the wrong outlet in the wrong week. When a development nears sell-out, spend pulls. When a new phase launches, budget moves.",
    },
    {
      heading: "Meta for lifestyle demand and retargeting",
      body: "Google captures active search intent. Meta creates demand by showcasing lifestyle, interiors, amenities and local area for developments where brand awareness needs to lead. Retargeting brings back interested buyers who visited a development page. Both land on per-site landing pages with appointment CTAs.",
    },
    {
      heading: "LinkedIn for land, investor and modular motions",
      body: "Consumer search dominates outlet demand. LinkedIn matters selectively for land acquisition, investor relations, employer brand or modular B2B motions (FormX-shaped), not as a substitute for per-site Google Ads and call tracking. We scope whether LinkedIn belongs in your mix in week one.",
    },
  ],
  pipelineStages: [
    { name: "Enquiry", note: "Local search, showhome call or form" },
    { name: "Appointment / tour", note: "Site sales owns the diary" },
    { name: "Reservation", note: "Primary commercial KPI for paid media" },
    { name: "Exchange", note: "Secondary valued event where volume allows" },
    { name: "Completion", note: "Outlet P&L truth; not a bidding event" },
  ],
  pipelineShape: [
    {
      heading:
        "We build your ads and reporting per development, not as one national campaign",
      body: "Each development has its own search demand, competitor set, release calendar and sales team capacity. Plot types, price bands and incentives change weekly. If your Google Ads run as one national campaign and every site shares a single phone number, you scale spend without scaling reservations. We structure campaigns, call tracking and reporting per development so budget follows the outlets with release capacity, not the ones making the most noise.",
    },
    {
      heading: "We close the places your pipeline leaks before we scale",
      body: "Phone calls to the sales suite never reach the CRM. Forms capture emails without development context. Your media agency optimises to cost per enquiry while your sales managers live in reservation reports. Part-exchange and broker introductions sit outside the paid attribution model. Call-led enquiries commonly make up 45% or more of sales-accepted conversations while receiving under 20% of tracked conversion credit when dynamic number insertion is absent. We wire all of this before we touch spend.",
    },
    {
      heading: "FormX and modular residential share the same measurement spine",
      body: "Modular and ADU-led builders like FormX share the need for tight paid acquisition and attribution, even when geography and product differ from a traditional UK outlet model. The common thread is sales-accepted meetings or reservations as the optimisation event, not raw lead volume. We build the same measurement spine for both.",
    },
  ],
  infrastructure: [
    {
      heading: "CRM and reservation system integration",
      body: "We connect marketing to your reservation system or housebuilder CRM so the stages your sales team recognises are the stages ads learn from. development_id, plot interest, appointment outcome and reservation status become required context. Offline conversion fires on appointment attended and on reservation (with value). Duplicate buyer records across sites are merged without wiping click IDs.",
    },
    {
      heading: "Call tracking per development",
      body: "Dynamic numbers on every development with whisper context for the site name, dispositions for appointment booked, attended and reserved, and write-back into CRM so phone reservations rejoin bidding the next morning. Out-of-hours calls route to the right sales suite or voicemail, not a personal mobile.",
    },
    {
      heading: "Per-site Google Ads and landing pages",
      body: "Campaigns split by development for generic, brand-development and plot-type terms, with group brand protected separately. Landing pages built per site with release-specific proof, plot filters where useful, and CRO tests on enquiry forms and appointment CTAs. GA4 enquiry events carry development_id so analysis matches the ad structure.",
    },
  ],
  stackNotes: [
    {
      heading: "Outlet-level P&L, not group blended ROAS",
      body: "Housebuilder boards judge marketing on appointments and reservations per outlet. We keep development_id on every enquiry, call and offline conversion so cost per reservation by site is the weekly number, not a national average that hides sell-out and launch windows.",
    },
    {
      heading: "Phone-led showhome demand needs DNI before media scale",
      body: "Call-led enquiries commonly make up 45% or more of sales-accepted conversations. Without dynamic numbers per development, whisper context and disposition write-back, your ads train on form fills while sales suites close the real bookings. We wire CallRail or equivalent before we scale spend.",
    },
    {
      heading: "Portals and release calendars sit beside paid search",
      body: "Rightmove, Zoopla and OnTheMarket shape discovery, but your paid structure still mirrors catchments and release calendars. When a phase launches or nears sell-out, Google and Meta budgets move with plot capacity, not with portal listing noise.",
    },
  ],
  engagement: {
    eyebrow: "Commercials and the first 90 days",
    heading: "How we charge, and what the first quarter looks like",
    intro:
      "Retainer or per-development fees, scoped against your outlet count and stack in week one so you see the number before campaigns start. No long lock-in while we are both proving it works.",
    commercials: {
      heading: "Build, then retainer",
      body: "A one-off build for CRM structure, call tracking setup and development-level campaign architecture, then a monthly retainer for media management and optimisation. Week one covers NDA, contract, access and a commercial scoped against your active developments. We run alongside your in-house marketing team or agency, or take the media seat, whichever fits.",
    },
    steps: [
      {
        name: "Days 1 to 14: outlets, access and campaign structure",
        body: "NDA and contract signed. Active development list with release calendars from your sales team. CRM access, reservation stage structure and call tracking numbers per site scoped and wired.",
      },
      {
        name: "Weeks 2 to 4: campaigns live, tracking wired",
        body: "Google Ads structured per development for generic, brand-development and plot-type terms, with group brand protected separately. Call tracking live on every outlet with dispositions writing back to CRM. Landing pages built per development with release-specific proof.",
      },
      {
        name: "End of month one: reservations, not enquiries",
        body: "Reporting shifts to cost per reservation by development. Phone and form attribution merged. Sales suite feedback on appointment quality becomes the weekly gate, not enquiry volume.",
      },
      {
        name: "Quarter one: site-level P&L visibility",
        body: "Each development shows its own cost per reservation, appointment-to-reservation rate and media contribution. Outlets with release capacity get more budget. Outlets nearing sell-out get spend pulled. The board sees site-level P&L contribution, not blended group ROAS.",
      },
    ],
  },
  cta: {
    heading:
      "Send us your development list, or one site that is not reserving",
    body: "We will show you where reservations are leaking before we talk retainer. Share your active outlets or a development that fills the diary without filling the reservation book, and we will map the gap.",
    buttonLabel: "Send the list or development",
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
  ],
  faqHeading: "What housebuilders usually ask",
  faqVariant: "editorial",
  faqs: [
    {
      q: "Why structure Google Ads by development?",
      a: "Because every development has its own catchment, search demand, competitor set and release calendar. A national campaign averages all of that into one blended number that sends budget to the noisiest site, not the one with release capacity. Per-development campaigns let you allocate budget where it earns reservations.",
    },
    {
      q: "What is the primary conversion for housebuilder ads?",
      a: "Reservation. Enquiry CPL is diagnostic only. We wire reservation status from your CRM or reservation system as the offline conversion so bidding trains on the outcome your sales managers actually track. Where volume allows, exchange can be added as a secondary valued event.",
    },
    {
      q: "Do you handle call tracking for showhomes?",
      a: "Yes. We put dynamic numbers on every development, with whisper context for the site name, dispositions for appointment booked, attended and reserved, and write-back into your CRM so phone reservations rejoin bidding. Out-of-hours calls route properly instead of dying on a sales suite mobile.",
    },
    {
      q: "How is FormX relevant if we build traditional outlets?",
      a: "FormX is a modular residential builder that shares the same measurement spine: sales-accepted meetings or reservations as the optimisation event, not raw lead volume. The tracking, CRM structure and attribution discipline are the same. The geography and product differ, but the commercial truth is identical.",
    },
    {
      q: "Can landing pages be shared across sites?",
      a: "They should not be. Each development has its own catchment, plot mix, price band and release calendar. Shared pages dilute relevance and hurt conversion. We build per-development landing pages with release-specific proof, plot filters where useful, and CRO tests on enquiry forms and appointment CTAs.",
    },
    {
      q: "How do part exchange and brokers fit attribution?",
      a: "Part exchange and broker introductions often sit outside the paid attribution model, which means a significant share of completions have no marketing source. We add part-exchange and broker as CRM source fields so the board sees the full picture, even where those channels are not directly media-driven.",
    },
    {
      q: "How is buyer data handled?",
      a: "Under NDA, with least-access in mind. We take only the fields we need to close the loop, keep buyer names and plot interests out of the ad platforms, and anonymise anything sensitive. Platforms receive conversion events and values, not personal data.",
    },
    {
      q: "Who will we speak to each week?",
      a: "The same person who owns your account, not a rotating pod. Your group marketing lead or regional sales director is our weekly decision owner, and we sit with site sales managers and CRM admin as the work needs it.",
    },
  ],
  relatedIndustries: [
    {
      slug: "construction",
      why: "Residential sits under the construction pillar but needs a different demand and CRM model from tender-led fit-out and civils.",
    },
    {
      slug: "commercial-fit-out",
      why: "Sibling construction vertical with the opposite motion: B2B tenders and LinkedIn ABM rather than local consumer search and reservations.",
    },
    {
      slug: "medical-healthcare",
      why: "Care-home development and operator enquiry journeys share phone-heavy, high-consideration local demand patterns that benefit from the same call tracking and landing page discipline.",
    },
  ],
  moneyPages: [],
  resourceSlugs: [
    "google-ads-housebuilder-account-structure",
    "offline-conversion-upload-template",
    "attribution-health-check",
    "ga4-enquiry-event-schema",
  ],
  toolSlugs: [],
  blogTags: ["crm", "google-ads", "offline-conversions", "attribution"],
};

export default residentialHomeBuilders;
