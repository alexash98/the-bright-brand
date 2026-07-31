import type { Industry } from "@/content/types";

const cruiseOperators: Industry = {
  slug: "cruise-operators",
  name: "Cruise operators",
  parent: "travel-tour-operators",
  type: "sub",
  metaTitle: "Cruise Operator Marketing Agency | The Bright Brand",
  metaDescription:
    "Marketing for mid-market cruise operators: paid media, CRM and call tracking wired to deposits, cabin fill and sailed margin, not brochure CPL.",
  intro:
    "You are filling ships, not collecting brochure leads. If paid media looks cheap while balconies stay empty on soft sailings, the numbers are lying. We wire paid media, call tracking and your booking stack so deposits, cabin categories and sail dates train spend the way your yield pack already thinks.",
  wedge:
    "For mid-market, regional, river, expedition and luxury small-ship operators who want founder-level attention on the first cruise build, not a templated product from a big agency.",
  proofLead: {
    heading:
      "One or two cruise operators. Founder-level attention. A build shaped around your fleet.",
    body: "We are taking on a small number of cruise operators to build this properly: deposits training paid media, soft sailings getting air cover, and board packs that match yield. You get a senior team on your stack, not a cruise template resold fifth.",
    quoteId: "anywhere",
    askAiPrompt:
      "How can The Bright Brand help a mid-market cruise operator with paid media, call tracking and booking CRM so deposits and sailed margin train acquisition? Summarise from thebrightbrand.com.",
  },
  heroVisual: {
    eyebrow: "For cruise operators",
    title: "What the account shows you, and what we put on the board",
    variant: "contrast",
    strapline: "Occupancy is table stakes. Net yield is the score.",
    contrastHeaders: { left: "The ad account", right: "Your board" },
    contrastRows: [
      { before: "Cheap CPL", after: "Cost per deposit" },
      { before: "Leads up", after: "Occupancy by sailing" },
      { before: "Efficient-looking spend", after: "Net yield per berth" },
      { before: "Form volume", after: "Sailed margin, by cohort" },
    ],
  },
  heroCta: {
    primaryLabel: "Send a soft sailing or account",
    secondaryLabel: "See how the first 90 days work",
    secondaryHref: "#engagement",
  },
  pipelineHeading:
    "Why your Ads CPA and your yield pack never tell the same story",
  servicesHeading: "Where we start on your account",
  servicesIntro:
    "Start with the bottleneck: paid media, audience building, phone capture on the desk, or the offline loop that ties deposits back into bidding. We scope that against your stack in week one.",
  serviceCardCtaLabel: null,
  showServicesSection: false,
  briefing: {
    eyebrow: "Built with your commercial team",
    heading: "How we work with your directors, not around them",
    intro:
      "You already know your ships, your sailings and your soft inventory. We bring paid media, your CRM or booking data layer, and call tracking into that conversation so spend follows cabin fill and sailed margin.",
    marketHeading: "The numbers your board will actually use",
    targetingHeading: "How we find demand with you",
  },
  marketStats: [
    {
      value: "Deposit \u2192 sail",
      label: "How your revenue actually lands",
      implication:
        "We bid and report on deposits first, then sail-date cohorts, so early soft inventory cannot fake channel success before final balances clear.",
    },
    {
      value: "Cost / deposit",
      label: "The KPI we put in front of you",
      implication:
        "Enquiry CPL is diagnostic only. Cost per deposit and margin by sailing decides whether we scale, cut or reallocate.",
    },
    {
      value: "Net yield per berth",
      label: "The metric that sets cabin strategy",
      implication:
        "Occupancy is the base condition, not the win. We build audiences toward the cabin mix that lifts yield, then prove it against deposits before we scale, so a full ship is also a well-priced one.",
    },
    {
      value: "Onboard, not just the ticket",
      label: "Where the value keeps going",
      implication:
        "A deposit is the start of a booking's value, not the end. Onboard and ancillary spend is roughly a third of cruise revenue, so we keep the higher-value guest in view when we choose which sailings and cabins to chase. Your pre-cruise upsell engine stays yours to run.",
    },
  ],
  commercialAccess: {
    intro:
      "Week one is NDA, contract and access with the people who own demand and the systems that hold bookings. Without that, we are guessing and you are paying for it.",
    people: [
      {
        role: "CEO / MD / commercial lead",
        need: "Sets the fill and margin bar. Signs off what counts as a real win in the board pack.",
      },
      {
        role: "Marketing / growth director",
        need: "Owns paid budget and landing paths. Weekly decision owner with us.",
      },
      {
        role: "Yield / revenue",
        need: "Soft-sailing list and cabin priorities become the media brief.",
      },
      {
        role: "Sales desk / reservations",
        need: "Quote, option and deposit outcomes written back the same day the guest commits.",
      },
    ],
    systems: [
      {
        name: "Booking / reservation platform",
        need: "Seaware, Sabre Cruise, Amadeus Cruise, Traveltek, ResRequest, FAST or your fleet CRS: sailing_id, cabin category, hold and deposit status.",
      },
      {
        name: "CRM or booking data layer",
        need: "Wherever guest and deal stages live: a separate CRM, or fields inside the booking platform. Quote, option, deposit, ticketed, with click IDs kept intact.",
      },
      {
        name: "Call tracking",
        need: "Pools on sailing pages, dispositions written back so phone closes rejoin bidding.",
      },
      {
        name: "Paid media accounts",
        need: "Admin access across the channels you run (Google, Meta, Microsoft, TikTok or others) so they train on the same deposit events.",
      },
    ],
    outcome:
      "One loop from enquiry to deposit to sailed margin, so you can scale spend against cabin fill instead of form volume.",
  },
  targetingNotes: [
    {
      heading: "Soft sailings get the air cover first",
      body: "Your yield list is the media brief. Budget and creative sit behind sailings that still need guests, and spend pulls the day a category waitlists.",
    },
    {
      heading: "Embarkation and destination intent",
      body: "We structure your paid media around destination, embarkation port and sailing windows where volume allows, not one blended cruise campaign that averages everything into mush.",
    },
    {
      heading: "Group and charter, run as their own motion",
      body: "Group, charter and incentive enquiries rarely get resourced, even at the big lines. We run them as a separate motion with separate stages and separate reporting, so charter demand never trains your FIT bidding and each side gets a media plan built for how it books.",
    },
    {
      heading: "Age, history and cabin propensity",
      body: "Audience and remarketing pools favour the cabin mix you still need to sell, then prove against deposits before we scale.",
    },
  ],
  pipelineStages: [
    {
      name: "Enquiry",
      note: "Cabin, route and sailing date captured with source and click IDs",
    },
    {
      name: "Option / hold",
      note: "Cabin reserved while the guest decides; task on the desk",
    },
    {
      name: "Deposit taken",
      note: "Primary offline conversion for paid media",
    },
    {
      name: "Final payment / ticketed",
      note: "Balance cleared; margin estimate locked for reporting",
    },
    {
      name: "Sailed",
      note: "Revenue recognised; cohort view for the board pack",
    },
  ],
  pipelineShape: [
    {
      heading: "We split your FIT and group desks before we touch spend",
      body: "A charter enquiry and a balcony deposit are not one conversion. We give them separate stages and separate conversion events, so your bidding learns from bookable suites and never trains on brochure collectors. Group CPA stops quietly wrecking FIT efficiency, and your board pack starts matching what yield already knows.",
    },
    {
      heading: "We report on sailed revenue, not the deposit that flatters this month",
      body: "A deposit today is not sailed revenue. Final balances land later and upgrades move margin after first payment, so we build sail-date cohorts into your reporting. You stop overfunding the channels that book easy early inventory and starving the sailings you need filled.",
    },
    {
      heading: "Your inventory feed becomes the weekly media brief",
      body: "When a sailing is soft, we move budget and creative onto it the same week. When a category waitlists, we pause that intent the same day your feed says so, instead of paying to sell sold-out cabins. That is your yield management, with ads wired to it.",
    },
  ],
  infrastructure: [
    {
      heading: "Booking and reservation platforms",
      body: "We work with the stack you already run: Seaware, Sabre Cruise, Amadeus Cruise, Traveltek, ResRequest, FAST or your fleet CRS. Those systems stay inventory truth for sailings, cabins, holds and deposits. We do not rip them out.",
    },
    {
      heading: "CRM, or the booking platform itself",
      body: "Wherever guest and deal stages live, we use that data. Sometimes that is a separate CRM. Sometimes it is already inside the booking platform. What matters is sail_date, cabin_category, deposit_value, balance_due and estimated_margin on one commercial path, with groups kept parallel, so paid media can train on the same truth.",
    },
    {
      heading: "Paid media on the same commercial events",
      body: "Google, Meta, Microsoft, TikTok or whatever mix you run: search and social buy sailing intent and build audiences around the cabin mix you still need. Every channel trains on deposit_taken from the same inventory signal. Sold-out categories pause across the board.",
    },
    {
      heading: "Call tracking on the sales desk",
      body: "Dynamic numbers on sailing and destination pages, whisper context for ship or port, dispositions for quote, option and deposit, and write-back into your CRM or booking layer so phone closes rejoin bidding the next morning.",
    },
  ],
  engagement: {
    eyebrow: "Commercials and the first 90 days",
    heading: "How we charge, and what the first quarter looks like",
    intro:
      "Performance-based or retainer, scoped against your stack in week one so you see the number before you commit to spend. No long lock-in while we are both proving it works.",
    commercials: {
      heading: "Build, then retainer",
      body: "A one-off build for the tracking and CRM loop, then a monthly retainer for media and optimisation. Week one covers NDA, contract, access and a scoped commercial against your stack. We run alongside your paid media team or take that piece over, whichever fits.",
    },
    steps: [
      {
        name: "Days 1\u201314: access and fundamentals",
        body: "NDA and contract signed. Soft-sailing list, booking and CRM access, and the correct stage structure in place before we touch spend.",
      },
      {
        name: "Weeks 2\u20134: audit and wire deposits",
        body: "Account audit, then deposits wired back into paid media so bidding trains on bookings, not forms. Phone and stage write-back join the same loop.",
      },
      {
        name: "End of month one: cost per deposit",
        body: "You see cost per deposit by sailing, not just CPL. Soft sailings and open cabin categories become the weekly media brief.",
      },
      {
        name: "Quarter one: experiments, then scale",
        body: "Sail-date cohorts show which channels filled cabins versus which booked easy early inventory. A/B tests land where the data earns them. Then we scale what works.",
      },
    ],
  },
  cta: {
    heading:
      "Send us your cruise account, or one soft sailing",
    body: "We will show you where deposits are leaking before we talk retainer. Share read-only access or a sailing that will not fill, and we will map the gap between Ads and yield.",
    buttonLabel: "Send the account or sailing",
    href: "/contact",
  },
  proof: [
    {
      client: "Method proof: cruise inventory and deposit loop",
      anonymised: true,
      honestyNote:
        "Operating method for a first cruise build with founder-level attention on your fleet and stack.",
      situation:
        "Mid-market cruise operators often scale paid media on enquiry CPA while soft sailings stay empty and deposit schedules never reach the bid strategy the board uses.",
      built:
        "Sailing-aware paid media structure, call tracking into the CRM or booking layer, field sync for sailings and cabins, offline deposit_taken upload, and board cohorts by sail_date and cabin_category.",
      results: [
        {
          metric: "Commercial stages mapped",
          after: "4",
          window: "quote, option, deposit, ticketed",
        },
        {
          metric: "Channels on one deposit event",
          after: "3+",
          window: "paid media mix as scoped",
        },
        {
          metric: "Inventory reporting dimensions",
          after: "2",
          window: "sail date + cabin category",
        },
      ],
      signedOff: false,
    },
  ],
  faqHeading: "What cruise operators usually ask before we start",
  faqVariant: "editorial",
  faqs: [
    {
      q: "Can you actually fill a soft sailing, or just lower CPL?",
      a: "CPL is a diagnostic, not the goal. We move budget and creative onto soft sailings the week your yield list flags them, build audiences toward the cabins that still need guests, and report cost per deposit by sailing so you can see fill happening, not just cheaper clicks. If a sailing will not move on paid media alone, we tell you early rather than spending into it.",
    },
    {
      q: "Do you need access to our reservation system?",
      a: "We need read access to whatever holds sailing, cabin and deposit truth, whether that is Seaware, Sabre Cruise, Amadeus Cruise, Traveltek, ResRequest, FAST or your own CRS. We do not replace it. It stays inventory truth, and we read sailing_id, cabin category, hold and deposit status so bidding trains on real bookings.",
    },
    {
      q: "How do phone bookings get attributed?",
      a: "We put dynamic numbers on your sailing and destination pages, capture the disposition when a guest quotes, options or deposits, and write that back into your CRM or booking layer with the click IDs intact. Phone closes rejoin bidding the next morning, so the desk stops being a blind spot.",
    },
    {
      q: "What if we already have an agency or an in-house media person?",
      a: "Either works. We run alongside your existing team when the gap is measurement and the loop back to bidding, or we take the media over when that fits better. We scope which in week one against your stack, so you are not paying two people to do the same job.",
    },
    {
      q: "How do you charge, and how locked in are we?",
      a: "A one-off build for the tracking and CRM loop, then a monthly retainer for media and optimisation, performance-based or fixed, scoped against your stack in week one so you see the number before you commit spend. No long lock-in while we are both proving it works.",
    },
    {
      q: "What does the first 90 days look like on our account?",
      a: "Days 1 to 14: NDA, contract and access, with the correct stage structure in place before we touch spend. Weeks 2 to 4: account audit, then deposits wired back into paid media. End of month one: cost per deposit by sailing, not just CPL. Quarter one: sail-date cohorts show what filled cabins versus what booked easy inventory, A/B tests land where the data earns them, then we scale what works.",
    },
    {
      q: "Who will we actually speak to week to week?",
      a: "The same person who owns your account, not a rotating pod. Your marketing or growth director is our weekly decision owner, and we sit with yield, the sales desk and your commercial lead as the work needs it.",
    },
    {
      q: "How is our booking and guest data handled?",
      a: "Under NDA, with least-access in mind. We take only the fields we need to close the loop, anonymise anything sensitive, and keep guest records out of the ad platforms. Platforms receive conversion events, not personal data.",
    },
    {
      q: "Can FIT and group charter sit in the same media accounts?",
      a: "Yes, in the same accounts but never the same funnel. Separate paths, separate stages and separate conversion events, so a charter enquiry cannot train your FIT bidding, and one honest view of what filled the ship still lands in the board pack.",
    },
    {
      q: "What will our board see that they do not see today?",
      a: "Cost per deposit and net yield by sailing, sail-date cohorts that show which channels actually filled cabins, and FIT and group read separately instead of blended into one misleading number. In short, spend measured against cabin fill and sailed margin, not form volume.",
    },
  ],
  relatedIndustries: [
    {
      slug: "travel-tour-operators",
      why: "Parent pillar for shared tour operator infrastructure and seasonality thinking.",
    },
    {
      slug: "luxury-tailor-made-travel",
      why: "Phone-led high-consideration sales with Anywhere.com as the named proof standard.",
    },
    {
      slug: "safari-adventure-and-expedition-operators",
      why: "Longer lead times and departure cohorts with the same deposit-aware measurement spine.",
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

export default cruiseOperators;
