import type { Industry } from "@/content/types";

const safariAdventureAndExpeditionOperators: Industry = {
  slug: "safari-adventure-and-expedition-operators",
  name: "Safari, adventure and expedition operators",
  parent: "travel-tour-operators",
  type: "sub",
  metaTitle:
    "Safari, Adventure and Expedition Marketing Agency | The Bright Brand",
  metaDescription:
    "Performance marketing for safari, adventure and expedition operators. Twelve-month attribution, offline conversions on deposit and margin, and board packs by departure cohort. The Bright Brand.",
  heroH1: "Safari and adventure operators marketing agency",
  intro:
    "Low volume, high AOV, with lead times that punish short attribution windows. We build twelve-month attribution, offline conversions on deposit and margin, and board packs by departure cohort, whether you run migration safaris, polar crossings, Galapagos voyages or multi-week treks.",
  wedge:
    "For safari, adventure and expedition operators who need departure fill and departed margin on the board, not enquiry vanity from a short attribution window.",
  proofLead: {
    heading:
      "One or two operators. Founder-level attention. A build shaped around your inventory and seasons.",
    body: "We are taking on a small number of safari, adventure and expedition operators to build this properly: twelve-month attribution, deposits training paid media, departure fill shaping the brief, and board packs that show departed margin by circuit. You get a senior team on your stack, not a travel template resold fifth.",
    quoteId: "anywhere",
    askAiPrompt:
      "How can The Bright Brand help a safari, adventure or expedition operator with twelve-month attribution, call tracking and CRM so deposits, departure fill and departed margin train acquisition? Summarise from thebrightbrand.com.",
  },
  heroVisual: {
    eyebrow: "For safari, adventure and expedition operators",
    title: "What the account shows you, and what we put on the board",
    variant: "contrast",
    strapline: "A full departure at the right margin beats a full inbox every time.",
    contrastHeaders: { left: "The ad account", right: "Your board" },
    contrastRows: [
      { before: "Cheap CPL", after: "Cost per qualified consultation" },
      { before: "Leads up", after: "Deposit rate by departure" },
      { before: "Short-window ROAS", after: "12-month departed margin" },
      { before: "Form volume", after: "Departure fill by circuit" },
    ],
  },
  heroCta: {
    primaryLabel: "Send an account or soft departure",
    secondaryLabel: "See how the first 90 days work",
    secondaryHref: "#engagement",
  },
  pipelineHeading:
    "Why your marketing numbers and your commercial tracker never agree",
  servicesHeading: "Where we start on your account",
  servicesIntro:
    "Start with the bottleneck: twelve-month attribution, phone capture on high-intent wildlife terms, departure inventory in the media brief, or the offline loop that ties deposits back into bidding. We scope that against your stack in week one.",
  serviceCardCtaLabel: null,
  briefing: {
    eyebrow: "Built with your commercial team",
    heading: "How we work with your directors, not around them",
    intro:
      "You already know which circuits fill and which departures stay soft. We bring paid media, your CRM or booking data layer, and call tracking into that conversation so spend follows departure fill and departed margin, not enquiry vanity.",
    marketHeading: "The numbers your board will actually use",
    targetingHeading: "How we find demand with you",
  },
  marketStats: [
    {
      value: "9 to 12 months",
      label: "How your guests actually buy",
      implication:
        "Planning runs around migration seasons, weather windows and school holidays. We build that full timeline into your attribution and reporting so a click in January still credits the channel when the trip departs in November.",
    },
    {
      value: "Low volume, high AOV",
      label: "Why volume metrics mislead",
      implication:
        "You are not running an ecommerce funnel with thousands of transactions a week. Weekly ROAS is noise at this volume. We report on deposit rate and departed margin by circuit and departure month, where the numbers are large enough to mean something.",
    },
    {
      value: "Margin per departure",
      label: "The metric that decides scale",
      implication:
        "A full departure at thin margin is not a win. We report margin per departure by circuit and trip type so you scale spend behind the trips that actually make money, not the ones that just filled beds.",
    },
    {
      value: "365-day lookback",
      label: "What the ad platforms miss",
      implication:
        "Standard ad platform windows expire months before your bookings confirm. We configure twelve-month lookbacks and fire offline conversions on deposit and confirmed booking value so the channels see the full picture and your board trusts the numbers.",
    },
  ],
  commercialAccess: {
    intro:
      "Week one is NDA, contract and access with the people who own demand and the systems that hold departures. Without that, we are guessing and you are paying for it.",
    people: [
      {
        role: "Commercial director",
        need: "Owns departure fill, margin and lodge or expedition allocation. Signs off what counts as a real win.",
      },
      {
        role: "Marketing lead",
        need: "Runs scarce high-intent demand. Weekly decision owner with us.",
      },
      {
        role: "Safari planner / expedition specialist",
        need: "Long planning calls with guests. Quality and qualification matter more than enquiry count.",
      },
      {
        role: "Product / operations",
        need: "Protects soft departures and seasonal inventory. Feeds departure status into the media brief.",
      },
    ],
    systems: [
      {
        name: "Reservation / inventory stack",
        need: "ResRequest, Tourplan, your lodge or DMC booking layer: departure_id, circuit, bed or vehicle capacity, hold and deposit status.",
      },
      {
        name: "CRM or booking data layer",
        need: "Wherever guest and deal stages live: a separate CRM, or fields inside the booking platform. Enquiry, qualified consultation, deposit, departed, with click IDs kept intact.",
      },
      {
        name: "Call tracking",
        need: "Pools on wildlife, park and expedition pages, dispositions written back so phone closes rejoin bidding.",
      },
      {
        name: "Paid media accounts",
        need: "Admin access across the channels you run (Google, Meta, Microsoft, TikTok or others) so they train on the same deposit and margin events.",
      },
    ],
    outcome:
      "One loop from enquiry to deposit to departed margin, so you can scale spend against departure fill instead of form volume.",
  },
  targetingNotes: [
    {
      heading: "Wildlife, circuit and expedition intent, not mass beach terms",
      body: "We target park, wildlife, trek and expedition language with ruthless negatives for cheap beach packages, flights-only and mass-market tour intent. Volume will look small. That is correct for this segment. We structure campaigns around circuits and trip types where margin justifies the media cost.",
    },
    {
      heading: "Departure fill shapes the media brief",
      body: "Soft departures deserve budget even at a higher CPA. Full departures need alternative routing or paused spend, not more enquiries for waitlisted weeks. We wire your departure inventory into the weekly brief so budget follows the trips that still need guests.",
    },
    {
      heading: "Seasons and booking curves, not flat monthly budgets",
      body: "Migration windows, dry seasons, polar summers and trekking seasons each have their own booking curve. We shape spend to match planning intent months ahead of departure, not a flat monthly split that ignores when your guests actually decide.",
    },
    {
      heading: "Qualification before lookalikes",
      body: "Remarketing and lookalike audiences start from qualified consultations and deposits, not raw form fills. Your specialist planners should not train the next audience with enquiries they would never take.",
    },
  ],
  pipelineStages: [
    {
      name: "Enquiry",
      note: "Form, call or referral; destination and dates captured with source and click IDs",
    },
    {
      name: "Qualified consultation",
      note: "Specialist planner owns the itinerary; disposition into CRM",
    },
    {
      name: "Itinerary / quote",
      note: "Revision cycles; nine to twelve months is normal",
    },
    {
      name: "Deposit taken",
      note: "Primary offline conversion for paid media",
    },
    {
      name: "Balance / confirmed",
      note: "Pre-departure commercial lock-in; margin estimate locked",
    },
    {
      name: "Departed",
      note: "Revenue recognised; cohort view for the board pack",
    },
  ],
  pipelineShape: [
    {
      heading:
        "We build your attribution around a twelve-month buying cycle, not a thirty-day window",
      body: "Safari, adventure and expedition guests plan around migration seasons, weather windows, lodge availability and school holidays. Enquiry to deposit takes months. Enquiry to departure often sits near a year. We configure CRM and ad-platform lookbacks to match that reality and keep departure cohorts visible even when the click is old, so your board sees which channels actually filled departures rather than which looked efficient in a short window.",
    },
    {
      heading: "We tie your spend to departure fill, not raw booking counts",
      body: "Camps, expeditions and group departures have finite beds, vehicle slots and group caps. A booking into a soft departure is worth more than another booking into a waitlisted week. We wire your departure inventory into the media brief so budget moves toward the departures that still need guests, and spend pulls the day a departure fills or waitlists.",
    },
    {
      heading: "We close the pipeline leaks before we scale",
      body: "CRM stages skip from enquiry to \"booked\" with no lodge-hold or deposit milestone. Call tracking is absent on high-intent wildlife and destination terms. Offline conversion windows expire before the booking confirms. Board packs show channel ROAS without a twelve-month lens, so leadership cuts long-cycle search right before peak planning months. We audit and wire all of this in the opening weeks.",
    },
  ],
  infrastructure: [
    {
      heading: "Reservation and inventory platforms",
      body: "We work with the stack you already run: ResRequest, Tourplan, your lodge or DMC booking layer, or whatever holds departure, bed and vehicle inventory. Those systems stay inventory truth. We integrate; we do not rip them out.",
    },
    {
      heading: "CRM, or the booking platform itself",
      body: "Wherever guest and deal stages live, we use that data. Sometimes that is a separate CRM. Sometimes it is already inside the booking platform. What matters is departure_date, destination_circuit, deposit_value, booked_revenue and estimated_margin on one commercial path, so paid media can train on the same truth.",
    },
    {
      heading: "Paid media on the same commercial events",
      body: "Google, Meta, Microsoft, TikTok or whatever mix you run: search and social buy wildlife, circuit and expedition intent and build audiences around the departures that still need guests. Every channel trains on deposit_taken from the same inventory signal. Full or waitlisted departures pause across the board.",
    },
    {
      heading: "Call tracking on the planning desk",
      body: "Dynamic numbers on wildlife, park and expedition pages, whisper context for circuit or departure, dispositions for qualified consultation and deposit, and write-back into your CRM or booking layer so phone closes rejoin bidding the next morning.",
    },
  ],
  engagement: {
    eyebrow: "Commercials and the first 90 days",
    heading: "How we charge, and what the first quarter looks like",
    intro:
      "Performance-based or retainer, scoped against your stack in week one so you see the number before you commit to spend. No long lock-in while we are both proving it works.",
    commercials: {
      heading: "Build, then retainer",
      body: "A one-off build for the tracking and CRM loop, then a monthly retainer for media and optimisation. Week one covers NDA, contract, access and a scoped commercial against your circuits and seasons. We run alongside your paid media team or take that piece over, whichever fits.",
    },
    steps: [
      {
        name: "Days 1 to 14: access and fundamentals",
        body: "NDA and contract signed. Soft-departure list, reservation and CRM access, and the correct stage structure in place before we touch spend.",
      },
      {
        name: "Weeks 2 to 4: audit and wire deposits",
        body: "Account audit, then deposits and margin signals wired back into paid media so bidding trains on bookings, not forms. Phone and stage write-back join the same loop.",
      },
      {
        name: "End of month one: cost per deposit",
        body: "You see cost per deposit by circuit and departure month, not just CPL. Soft departures become the weekly media brief.",
      },
      {
        name: "Quarter one: cohorts, then scale",
        body: "Departure cohorts show which channels filled trips versus which looked efficient in a short window. A/B tests land where the data earns them. Then we scale what works.",
      },
    ],
  },
  cta: {
    heading: "Send us your account, or one soft departure",
    body: "We will show you where deposits and departure fill are leaking before we talk retainer. Share read-only access or a departure that will not fill, and we will map the gap between Ads and your commercial tracker.",
    buttonLabel: "Send the account or departure",
    href: "/contact",
  },
  proof: [
    {
      client: "Method proof: twelve-month safari attribution build",
      anonymised: true,
      honestyNote:
        "Operating method for a first safari, adventure or expedition build with founder-level attention on your inventory and seasons.",
      situation:
        "Safari, adventure and expedition operators routinely judge channels inside thirty or ninety days, then wonder why peak planning months look inefficient. Publishable named-client revenue figures for this sub-vertical are not yet signed off, so we document the method we implement rather than invent results.",
      built:
        "Measurement plan with twelve-month CRM lookback, offline conversion actions for deposit_taken and booking_confirmed_margin, CallRail-to-CRM dispositions, and a board dashboard cohorted by departure month and circuit. Same commercial principles as luxury tailor-made work for Anywhere.com, stretched to expedition lead times.",
      results: [
        {
          metric: "Attribution lookback configured",
          after: "365 days",
          window: "standard safari build",
        },
        {
          metric: "Offline conversion actions in Google Ads",
          after: "2",
          window: "deposit and booking-confirmed margin",
        },
        {
          metric: "Board cohort dimensions",
          after: "2",
          window: "departure month + circuit",
        },
      ],
      signedOff: false,
    },
  ],
  faqHeading: "What safari, adventure and expedition operators usually ask",
  faqVariant: "editorial",
  faqs: [
    {
      q: "Why is a twelve-month attribution window necessary for safari and adventure travel?",
      a: "Because your guests enquire nine to twelve months before departure, and standard ad platform windows expire at 30 or 90 days. Without a twelve-month lookback and offline conversion uploads, the channels that source your best bookings get no credit, and your board cuts the wrong spend at the wrong time.",
    },
    {
      q: "Do you have a named safari or expedition client case study?",
      a: "Not yet for publication. The method and infrastructure are the same we run for luxury tailor-made travel, where Anywhere.com is the named proof standard. Safari and expedition simply stretches the attribution window and tightens inventory constraints. We are happy to walk through the method on a call.",
    },
    {
      q: "Should we optimise to enquiries during planning season?",
      a: "Enquiries are diagnostic, not the goal. During peak planning months we still optimise to qualified consultations and deposits, because an inbox full of unqualified forms wastes your planners' time and teaches the channels the wrong lesson. Volume goes up naturally when you are visible at the right moment; quality comes from what you optimise toward.",
    },
    {
      q: "How do departure fill rates change media decisions?",
      a: "A soft departure gets budget and creative moved onto it. A full or waitlisted departure gets spend paused or redirected the same week. This is the same principle as yield management in cruise or luxury: your inventory feed becomes the media brief, not a report you read after the money is spent.",
    },
    {
      q: "What reporting cadence works at low volume?",
      a: "Weekly trading still happens in the Ads UI, but weekly board packs at safari and expedition volume are noise. We report monthly on deposit rate, departed margin and departure fill by circuit, with quarterly cohort views that show which channels actually filled trips versus which looked efficient in a short window.",
    },
    {
      q: "How does this relate to the luxury tailor-made page?",
      a: "Phone-led conversion, margin over GBV, and reservation-system truth are the same principles. Safari, adventure and expedition stretches the attribution clock further and adds tighter inventory constraints (finite beds, vehicle slots, group caps). If your operation sits across both, we run them as one engagement with separate reporting.",
    },
    {
      q: "How is our guest and booking data handled?",
      a: "Under NDA, with least-access in mind. We take only the fields we need to close the loop, anonymise anything sensitive, and keep guest records out of the ad platforms. Platforms receive conversion events, not personal data.",
    },
    {
      q: "Who will we speak to each week?",
      a: "The same person who owns your account, not a rotating pod. Your marketing or commercial lead is our weekly decision owner, and we sit with the planning team, operations and your founder as the work needs it.",
    },
  ],
  relatedIndustries: [
    {
      slug: "luxury-tailor-made-travel",
      why: "Closest commercial cousin: consultative, phone-led, high AOV, with Anywhere.com as the named proof standard.",
    },
    {
      slug: "travel-tour-operators",
      why: "Parent pillar covering the wider operator landscape and shared infrastructure patterns.",
    },
    {
      slug: "cruise-operators",
      why: "Deposit-aware paid media with inventory pressure, sail-date cohorts and board packs that match yield.",
    },
  ],
  moneyPages: [],
  resourceSlugs: [
    "offline-conversion-upload-template",
    "attribution-health-check",
    "negative-keyword-starter-lists",
    "ga4-enquiry-event-schema",
  ],
  toolSlugs: [],
  blogTags: ["travel", "call-tracking", "google-ads", "attribution"],
};

export default safariAdventureAndExpeditionOperators;
