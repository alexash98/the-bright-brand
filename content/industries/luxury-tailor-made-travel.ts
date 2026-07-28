import type { Industry } from "@/content/types";

const luxuryTailorMadeTravel: Industry = {
  slug: "luxury-tailor-made-travel",
  name: "Luxury and tailor-made travel",
  parent: "travel-tour-operators",
  type: "sub",
  metaTitle: "Luxury Tailor-Made Travel Marketing Agency | The Bright Brand",
  metaDescription:
    "Paid media, call tracking and margin attribution for luxury tailor-made operators. Phone-led bookings, destination targeting, Anywhere.com proof.",
  intro:
    "Your luxury tailor-made sale is a designer conversation first, not a self-serve cart. Cheap CPL with a desk full of tyre-kickers means acquisition is optimising the wrong signal. We connect channels, phone tracking and your itinerary stack so destination margin, deposits and departure cohorts decide where budget goes.",
  wedge:
    "For luxury and tailor-made operators who want higher lifetime value and a more premium client base, not more brochure enquiries at any cost.",
  proofLead: {
    heading:
      "Performance marketing built around your designers, destinations and margin, not form fills.",
    body: "Anywhere.com is the named proof: sharper age and audience targeting, paid media aligned to commercial data, $300K of wasted spend recovered, Meta CPA down 50%, and revenue from $6M to $10M. The same standard applies when we sit with your desk, your destinations and your stack.",
    quoteId: "anywhere",
    askAiPrompt:
      "How can The Bright Brand help a luxury tailor-made travel operator with paid media, call tracking and CRM so deposits, margin and premium clients train acquisition? Summarise from thebrightbrand.com.",
  },
  heroVisual: {
    eyebrow: "For luxury operators",
    title: "What the account shows you, and what we put on the board",
    variant: "contrast",
    strapline: "Enquiry volume is vanity. Departed margin is the score.",
    contrastHeaders: { left: "The ad account", right: "Your board" },
    contrastRows: [
      { before: "Cheap CPL", after: "Cost per qualified call" },
      { before: "Leads up", after: "Designer-qualified deposit rate" },
      { before: "GBV ROAS", after: "Margin per departure" },
      { before: "Form volume", after: "Revenue by destination cohort" },
    ],
  },
  heroCta: {
    primaryLabel: "Send an account or destination",
    secondaryLabel: "See how the first 90 days work",
    secondaryHref: "#engagement",
  },
  pipelineHeading:
    "Why your Ads CPA and your departure pack never tell the same story",
  servicesHeading: "Where we start on your account",
  servicesIntro:
    "Usually the leak is one of three places: destination intent that never qualifies, missing phone capture on the designer desk, or deposit and margin values that never retrain the channels. We map that against your tools before any budget move.",
  serviceCardCtaLabel: null,
  briefing: {
    eyebrow: "Built with your commercial team",
    heading: "How we work with your directors, not around them",
    intro:
      "You already know which destinations carry margin and which enquiries waste designer time. We bring paid media, your CRM or booking data layer, and call tracking into that conversation so spend follows deposits and premium clients, not enquiry vanity.",
    marketHeading: "The numbers your board will actually use",
    targetingHeading: "How we find higher-value demand with you",
  },
  marketStats: [
    {
      value: "£8–60k+",
      label: "Typical ticket band",
      implication:
        "Ticket size is not the bid strategy. We still need deposit and margin events so a cheap short-haul enquiry cannot look healthier than a complex multi-country booking.",
    },
    {
      value: "Phone designer",
      label: "Primary close path",
      implication:
        "If the call is not tracked into your CRM or booking layer, paid media keeps learning from forms designers would never take.",
    },
    {
      value: "Margin per departure",
      label: "The metric that decides scale",
      implication:
        "GBV ROAS flatters channels that book volume at thin margin. We report margin per departure by destination and trip type so you scale spend behind the trips that actually make money, not the ones that look busy.",
    },
    {
      value: "Lifetime value, not first booking",
      label: "Where revenue compounds",
      implication:
        "A luxury traveller who rebooks is worth multiples of the first trip. We keep lifetime value visible when choosing audiences and destinations to chase, so paid media builds a client base that comes back, not a pipeline you have to refill from zero every quarter.",
    },
  ],
  commercialAccess: {
    intro:
      "Before spend moves, we need paper, people and system access: NDA and contract, the commercial owners, and the tools that hold itineraries and deposits. Otherwise we are guessing with your money.",
    people: [
      {
        role: "Founder / MD / commercial lead",
        need: "Sets the margin and client-quality bar. Signs off what counts as a real win.",
      },
      {
        role: "Marketing / growth lead",
        need: "Owns paid budget, destinations and seasonal shaping. Weekly decision owner with us.",
      },
      {
        role: "Travel designer lead",
        need: "Feels enquiry quality on every call. Dispositions must match what the desk actually does.",
      },
      {
        role: "Revenue / operations",
        need: "Agrees deposit, booked revenue and estimated margin values that upload to paid media.",
      },
    ],
    systems: [
      {
        name: "Reservation / itinerary stack",
        need: "Your reservation ledger, itinerary builder or booking tool: booking_id, destination, departure_date, deposit and balance status.",
      },
      {
        name: "CRM or booking data layer",
        need: "Wherever guest and deal stages live: a separate CRM, or fields inside the booking platform. Enquiry, qualified call, itinerary, deposit, departed, with click IDs kept intact.",
      },
      {
        name: "Call tracking",
        need: "Pools on destination and designer pages, dispositions written back so phone closes rejoin bidding.",
      },
      {
        name: "Paid media accounts",
        need: "Admin access across the channels you run (Google, Meta, Microsoft, TikTok or others) so they train on the same deposit and margin events.",
      },
    ],
    outcome:
      "One loop from enquiry to deposit to departed margin, so you can scale spend against premium bookings instead of form volume.",
  },
  targetingNotes: [
    {
      heading: "Destination clusters that protect margin",
      body: "We structure your paid media around hero destinations and trip types (Costa Rica, Italy, multi-country, family tailor-made) with negatives for flights-only, jobs and mass-market packages. We share learning where it helps, without blending different margin profiles into one mushy campaign.",
    },
    {
      heading: "Seasonal budget against departure windows",
      body: "We shape your spend to booking curves for green versus dry Costa Rica and other hero departures, not a flat monthly split. Without departure tags, next month's budget goes to the wrong themes.",
    },
    {
      heading: "Age and premium audience building",
      body: "Your luxury buyers are sharp on age and travel history. We build and prove audiences that favour higher lifetime value and a more premium client base, then scale only when deposits and margin back that story.",
    },
    {
      heading: "Qualification before lookalikes",
      body: "We start remarketing and lookalikes from qualified calls and deposits, not raw form fills, so your designers do not train the next audience with enquiries they would never take.",
    },
  ],
  pipelineStages: [
    {
      name: "Enquiry",
      note: "Destination and trip intent captured with source and click IDs",
    },
    {
      name: "Qualified call",
      note: "Phone-led with a designer; disposition into CRM or booking layer",
    },
    {
      name: "Itinerary sent",
      note: "Revision cycles expected; not a conversion for bidding yet",
    },
    {
      name: "Deposit taken",
      note: "Primary offline conversion for paid media",
    },
    {
      name: "Balance / ticketed",
      note: "Pre-departure confirmation; margin estimate locked",
    },
    {
      name: "Departed",
      note: "Booked margin recognised; cohort view for the board",
    },
  ],
  pipelineShape: [
    {
      heading: "We wire your pipeline around a consultative sale, not a quick cart",
      body: "Enquiry to departure can run weeks or months: qualification call, designer assignment, itinerary revisions, deposit, balance, then the trip itself. Ticket sizes sit anywhere from roughly £8,000 to £60,000 and higher. We build that full timeline into your attribution and reporting so a deposit in March still credits the channel when the trip departs in September, and media efficiency is judged on departed revenue, not enquiry week.",
    },
    {
      heading: "We close the five places luxury pipelines usually leak",
      body: "Paid media buys broad destination intent that never reaches a qualified call. Call tracking is missing, so channels cannot see which campaigns produced deposits. The reservation system updates but the CRM does not, so offline uploads are empty. Seasonal budgets ignore destination booking curves. Margin disappears inside a blended GBV number that looks fine in a weekly deck. We audit all five in week one and wire them shut before scaling.",
    },
    {
      heading: "We separate geography and product mix so bidding actually learns",
      body: "UK, US and EU demand can share creative but not bidding rules. Costa Rica, Italy and multi-country trips carry different lead times and margin profiles. We structure campaigns to separate enough that each learns from its own deposit and margin data, without fragmenting volume into ad groups too thin to optimise.",
    },
  ],
  infrastructure: [
    {
      heading: "Reservation and itinerary tools",
      body: "Your reservation ledger, itinerary builder and supplier confirmations stay source of truth for booking_id, destination, departure and deposit. We integrate; we do not force a rip-and-replace.",
    },
    {
      heading: "Stages in CRM or inside bookings",
      body: "Deal stages may live in HubSpot, Salesforce or a lighter CRM, or as fields on the booking record. We need enquiry_source, click IDs, qualified_call, itinerary_sent, deposit_value, booked_revenue, estimated_margin, departure_date and destination_primary on a single path the channels can learn from.",
    },
    {
      heading: "Channels trained on deposit and margin",
      body: "We buy destination and tailor-made intent on search, and build age and premium propensity on Meta and peers. Across Google, Meta, Microsoft, TikTok or your mix, optimisation keys off deposit_taken and finance-agreed margin values. Flights-only and mass-market intent is excluded.",
    },
    {
      heading: "Phone capture on the designer desk",
      body: "We put number pools on destination and designer pages, whisper for campaign or destination, dispositions for qualified, itinerary sent and deposit, then write-back so a phone close can retrain bidding within a day.",
    },
  ],
  stackNotes: [
    {
      heading: "BI that matches how you already think",
      body: "When you already run Metabase or a warehouse across the stack, we operate inside that truth rather than dumping a shallow agency scorecard on top. Anywhere.com is the reference for matching a founder at that data level.",
    },
  ],
  engagement: {
    eyebrow: "Fees and the opening quarter",
    heading: "Pricing shape, and what happens in the first 90 days",
    intro:
      "Retainer or performance-shaped commercials, priced once we have seen destinations, seasonality and your tools. You get a clear figure before media budget moves. No multi-year trap while results are still being proved.",
    commercials: {
      heading: "Build fee, then monthly",
      body: "Tracking and data loop as a fixed build, then ongoing paid media and optimisation on retainer. Opening fortnight: paperwork, access and a commercial scoped to your hero destinations. We can sit beside an in-house buyer or own the media seat.",
    },
    steps: [
      {
        name: "Fortnight one: brief and access",
        body: "Paperwork signed. Destination and seasonality brief, reservation and CRM logins, stage map agreed. No budget shifts until that foundation is real.",
      },
      {
        name: "Weeks two to four: audit, then deposit events",
        body: "Full account review, then deposit and margin signals pushed into the channels so learning leaves form-fill vanity. Phone dispositions join the same path.",
      },
      {
        name: "Month-one readout: cost per deposit",
        body: "Reporting shifts to cost per deposit by destination and trip type. Designer-qualified call rate becomes the weekly quality gate, not CPL.",
      },
      {
        name: "By day 90: premium audiences and scale",
        body: "Departure cohorts separate channels that booked margin from those that only filled the diary. Age and propensity tests run where the data earns them, then we put weight behind winners.",
      },
    ],
  },
  cta: {
    heading: "Send us your account, or one underperforming destination",
    body: "We will show you where premium deposits are leaking before we talk retainer. Share read-only access or a destination that fills the desk without filling the books, and we will map the gap between paid media and margin.",
    buttonLabel: "Send the account or destination",
    href: "/contact",
  },
  proof: [
    {
      client: "Anywhere.com",
      anonymised: false,
      situation:
        "Anywhere.com needed an agency that could work inside Anthony Landis's Metabase-led attribution rather than ignore it. Previous paid search management had left roughly $300K in recoverable waste. Meta CPA was too high heading into peak. Revenue needed to scale without a matching spend spike.",
      built:
        "Channel consolidation, paid media restructuring, Meta efficiency work, and a funnel rebuild aligned to phone-led luxury conversion and premium audience building. Anthony Landis, President, Director: \"The Bright Brand aren't a typical marketing agency. They understand the mechanics of travel and optimise towards higher lifetime value and a more premium client base through sharp age-demographic targeting and audience building, all aligned to our commercial data and implemented by their team. We've seen quicker bookings and a stronger bottom line as a result.\"",
      results: [
        {
          metric: "Wasted ad spend recovered",
          after: "$300K",
          window: "paid search, prior agency waste",
        },
        {
          metric: "Meta CPA",
          after: "-50%",
          window: "post-optimisation trading",
        },
        {
          metric: "Revenue",
          before: "$6M",
          after: "$10M",
          window: "one year (+67% YoY)",
        },
      ],
      signedOff: true,
    },
  ],
  faqHeading: "What luxury operators usually ask before we start",
  faqVariant: "editorial",
  faqs: [
    {
      q: "Can you bring in higher-value clients, or just cheaper enquiries?",
      a: "Both happen, but the value shift is the point. We build audiences around age, travel history and cabin or destination propensity, then prove them against deposits and margin, not form volume. Cheaper enquiries that waste designer time are a cost, not a win, so we optimise away from them.",
    },
    {
      q: "How do you buy destinations without wrecking margin?",
      a: "By structuring campaigns around destination and trip type with separate bidding, not one blended cruise or travel campaign. Costa Rica, Italy and multi-country trips carry different lead times and margin profiles. Each gets its own data, so a high-volume, low-margin destination cannot quietly drag down the portfolio.",
    },
    {
      q: "Why is phone tracking essential for tailor-made?",
      a: "Because your sale closes on a call with a designer, not on a form. Without dynamic numbers, dispositions and write-back into your CRM, paid media keeps learning from form fills that designers would never take. The phone is your conversion path, so it has to rejoin bidding.",
    },
    {
      q: "Why not just report GBV ROAS?",
      a: "GBV ROAS flatters channels that book volume at thin margin. A £50,000 multi-country trip and a £3,000 short-haul booking look the same if you only see gross value. We report margin per departure by destination and trip type so you scale the trips that actually make money.",
    },
    {
      q: "Must you see inside our reservation tools?",
      a: "We need read access to whatever holds booking, deposit and departure truth, whether that is a dedicated reservation platform, an itinerary builder, or fields inside your CRM. We do not replace it. We read booking_id, destination, deposit status and departure date so bidding trains on real commercial outcomes.",
    },
    {
      q: "We already have an agency or an in-house buyer. Still useful?",
      a: "Either works. We run alongside your existing team when the gap is measurement and the deposit loop back to bidding, or we take the media over when that fits better. We scope which setup makes sense in week one against your stack, so you are not paying twice for the same job.",
    },
    {
      q: "How are fees structured, and how long are we locked?",
      a: "A one-off build for the tracking and CRM loop, then a monthly retainer for media and optimisation, performance-based or fixed, scoped against your stack in week one so you see the number before you commit spend. No long lock-in while we are both proving it works.",
    },
    {
      q: "What should we expect in the first quarter?",
      a: "Fortnight one: NDA, contract and access, with the correct stage structure in place before we touch spend. Weeks two to four: account audit, then deposit and margin signals pushed into the channels. End of month one: cost per deposit by destination. By day 90: departure cohorts show which channels booked margin versus those that only filled the diary, A/B tests land where the data earns them, then we scale what works.",
    },
    {
      q: "Who do we speak to each week?",
      a: "The same person who owns your account, not a rotating pod. Your marketing or growth lead is our weekly decision owner, and we sit with the designer lead, revenue ops and your commercial lead as the work needs it.",
    },
    {
      q: "How do you treat guest and booking data?",
      a: "Under NDA, with least-access in mind. We take only the fields we need to close the loop, anonymise anything sensitive, and keep guest records out of the ad platforms. Platforms receive conversion events, not personal data.",
    },
  ],
  relatedIndustries: [
    {
      slug: "travel-tour-operators",
      why: "Parent pillar for the wider tour operator landscape and shared seasonality thinking.",
    },
    {
      slug: "cruise-operators",
      why: "Deposit-aware paid media with inventory pressure and board packs that match yield.",
    },
    {
      slug: "safari-adventure-and-expedition-operators",
      why: "Same consultative sale, longer lead times and a longer attribution window.",
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

export default luxuryTailorMadeTravel;
