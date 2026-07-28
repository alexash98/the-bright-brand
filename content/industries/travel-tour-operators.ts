import type { Industry } from "@/content/types";

const travelTourOperators: Industry = {
  slug: "travel-tour-operators",
  name: "Travel and tour operators",
  type: "pillar",
  metaTitle: "Tour Operator Marketing Partners | The Bright Brand",
  metaDescription:
    "Marketing for travel and tour operators built around phone-led bookings, margin ROAS, call tracking and revenue on departure. Not enquiry vanity metrics.",
  heroH1: "Travel and tour operator marketing agency",
  wedge:
    "You do not have an enquiry problem, you have a deposit-and-margin problem. The phone closes the booking; departure recognises the revenue. We wire media to that truth.",
  intro:
    "Tour operator marketing fails when a £12,000 itinerary is treated like ecommerce. The enquiry is not the sale. The phone call is. Revenue lands on departure, and margin swings by product mix. We build call tracking into CRM, offline conversions on booked revenue and margin, and seasonal budgets shaped to departure windows. Anywhere.com is the named luxury travel proof.",
  proofLead: {
    heading:
      "Performance marketing built around your travel funnel, not our playbook.",
    body: "We integrate paid search, paid social, call tracking and CRM under one data-aligned strategy, so booked revenue and margin train acquisition instead of form fills. Anywhere.com is the named proof. Open cruise, luxury or safari below when the product shape needs its own page.",
    quoteId: "anywhere",
    quoteIds: ["anywhere"],
    askAiPrompt:
      "How can The Bright Brand help a travel or tour operator with paid media, call tracking and CRM so booked revenue and margin train acquisition? Summarise from thebrightbrand.com.",
  },
  heroVisual: {
    eyebrow: "For travel and tour operators",
    title: "What the account shows you, and what we put on the board",
    variant: "contrast",
    strapline: "Enquiry CPL looks efficient. Margin on departure is the score.",
    contrastHeaders: { left: "The ad account", right: "Your board" },
    contrastRows: [
      { before: "Cheap CPL", after: "Cost per deposit" },
      { before: "Enquiry volume", after: "Qualified calls with designers" },
      { before: "GBV ROAS", after: "Booked margin by departure" },
      { before: "30-day window", after: "Cohorts through sail / travel date" },
    ],
  },
  heroCta: {
    primaryLabel: "Send a departure window or account",
    secondaryLabel: "See how the first 90 days work",
    secondaryHref: "#engagement",
  },
  pipelineHeading:
    "Why your Ads CPA and your yield pack never tell the same story",
  servicesHeading: "Where we start on your account",
  servicesIntro:
    "Start with the bottleneck: paid media, phone capture on the desk, destination audiences, or the offline loop that ties deposits and margin back into bidding. Open the sector page that matches your product.",
  serviceCardCtaLabel: null,
  briefing: {
    eyebrow: "Built with your commercial team",
    heading: "How we work with your directors, not around them",
    intro:
      "You already know your destinations, departure windows and soft inventory. We bring paid media, call tracking and CRM into that conversation so spend follows deposits and margin, not brochure downloads.",
    marketHeading: "The numbers your board will actually use",
    targetingHeading: "How we find demand with you",
  },
  engagement: {
    eyebrow: "Commercials and the first 90 days",
    heading: "How we charge, and what the first quarter looks like",
    intro:
      "Retainer or project-based, scoped against your booking stack and departure calendar in week one so you see the number before campaigns start.",
    commercials: {
      heading: "Build, then retainer",
      body: "A one-off build for call tracking, CRM stages and offline conversion, then a monthly retainer for media trading. Week one covers NDA, contract, access and a commercial scoped against your product mix and peak windows.",
    },
    steps: [
      {
        name: "Days 1 to 14: desk, CRM and measurement",
        body: "NDA and contract signed. Call tracking live, CRM stages mapped to enquiry through deposit, offline conversion plan agreed against booked revenue and margin.",
      },
      {
        name: "Weeks 2 to 4: media live on commercial events",
        body: "Google and Meta train on qualified calls and deposits where volume allows. Destination and intent structures replace blended travel campaigns.",
      },
      {
        name: "End of month one: deposits, not enquiries",
        body: "Reporting shifts to cost per deposit and designer workload quality. Enquiry CPL becomes diagnostic only.",
      },
      {
        name: "Quarter one: margin and departure cohorts",
        body: "Booked margin by departure window trains budget. We scale what fills the right product and cut what fills the wrong inventory.",
      },
    ],
  },
  marketStats: [
    {
      value: "Phone-led",
      label: "Primary close path for operators",
      source: "Illustrative model",
    },
    {
      value: "Departure £",
      label: "Revenue recognition timing",
      source: "Illustrative model",
    },
    {
      value: "Margin ROAS",
      label: "Preferred commercial KPI",
      source: "Illustrative model",
    },
    {
      value: "Anywhere.com",
      label: "Published luxury travel case study",
      implication:
        "Phone-led acquisition, margin attribution and Metabase-level reporting are the bar we work to across travel hubs.",
    },
  ],
  audience: [
    {
      role: "Commercial / revenue director",
      share: "~28%",
      note: "Owns margin, departure fill and channel ROI conversations.",
    },
    {
      role: "Head of marketing",
      share: "~24%",
      note: "Runs paid media, seasonality plans and agency relationships.",
    },
    {
      role: "Sales / design desk lead",
      share: "~22%",
      note: "Lives phone conversion quality and itinerary workload.",
    },
    {
      role: "Founder / MD",
      share: "~16%",
      note: "Especially in specialist operators; cares about Metabase-grade truth.",
    },
    {
      role: "Trade / DMC sales",
      share: "~10%",
      note: "B2B inbound shape when the operator sells to agents and partners.",
    },
  ],
  enquiryTiming: {
    title: "When tour operator enquiries arrive (model)",
    caption:
      "Illustrative daypart model for phone-led tour operator demand, not a client result.",
    bars: [
      { label: "09:00–12:00", value: 32, display: "32%" },
      { label: "12:00–15:00", value: 24, display: "24%" },
      { label: "15:00–18:00", value: 26, display: "26%" },
      { label: "Evening web", value: 14, display: "14%" },
      { label: "Weekend", value: 4, display: "4%" },
    ],
  },
  cycleTiming: {
    title: "Enquiry to deposit window (model)",
    caption:
      "Illustrative tour operator cycle model across product types, not a client result.",
    bars: [
      { label: "Under 4 weeks", value: 18, display: "18%" },
      { label: "1–3 months", value: 34, display: "34%" },
      { label: "3–6 months", value: 28, display: "28%" },
      { label: "6–12 months", value: 20, display: "20%" },
    ],
  },
  scatterCharts: [
    {
      title: "Ticket size vs cycle length (model)",
      caption:
        "Illustrative plot across tour operator product shapes, not a client result.",
      xLabel: "Relative cycle length",
      yLabel: "Relative ticket / margin",
      points: [
        { x: 28, y: 36, label: "Short-haul tailor" },
        { x: 45, y: 58, label: "Luxury multi-stop" },
        { x: 72, y: 78, label: "Safari / expedition" },
        { x: 55, y: 50, label: "Cruise FIT" },
        { x: 38, y: 42, label: "Ski season" },
        { x: 62, y: 64, label: "Complex family" },
      ],
    },
  ],
  targetingNotes: [
    {
      heading: "Destination and intent clusters",
      body: "Build search and audience structures around destination clusters and trip intent, not a single blended travel campaign. Separate brand, high-intent destination and research terms so phone teams inherit readable demand.",
    },
    {
      heading: "CRM and reservation identity",
      body: "Targeting quality depends on knowing which enquiries became deposits. Map booking and passenger party identifiers so offline conversions can teach Google which destination themes deserve budget in each departure window.",
    },
    {
      heading: "Trade versus consumer lists",
      body: "Inbound operators and DMCs need B2B list building against agents and operators, closer to procurement-style role targeting. Consumer tailor-made lists should not share those conversion definitions.",
    },
    {
      heading: "Trade versus consumer conversion rules",
      body: "When you sell to agents and DMCs as well as guests, keep those conversion definitions separate so B2B meetings never train consumer deposit bidding.",
    },
  ],
  pipelineStages: [
    { name: "Enquiry", note: "Form, call or chat; identity and source captured" },
    { name: "Qualified call", note: "Travel designer owns next step" },
    { name: "Itinerary / quote", note: "Revision cycles are normal" },
    { name: "Deposit taken", note: "Primary offline conversion for bidding" },
    { name: "Balance / ticketed", note: "Commercial confirmation before travel" },
    { name: "Departed", note: "Revenue recognition; board cohort lens" },
  ],
  pipelineShape: [
    {
      heading: "Enquiry to departure, not click to thank-you page",
      body: "High-consideration travel pipelines run enquiry, qualification call, itinerary build, quote, revision cycle, deposit, then balance. Booked revenue is recognised on departure, which means a January media pound can fund an August safari or a November Italy trip. Cycle length stretches from a few weeks on short-haul tailor-made to nine or twelve months on expedition and safari. Decision makers are couples, multi-generational families and sometimes a corporate booker. Enquiries arrive from paid search, Meta, organic, affiliates and referral. The leak is almost always the same: marketing celebrates the form fill while sales live on the phone, and neither system shares a single source of truth.",
    },
    {
      heading: "Phone-led conversion is the commercial centre",
      body: "Most valuable bookings close on a call with a travel designer, not in a cart. Dynamic number insertion, call recordings tied to the originating campaign, and a CRM stage that records qualification and deposit are non-negotiable. Without that loop, Google and Meta keep buying cheap enquiries that never become itineraries. With senior in-house experience across a major multi-brand tour operator group, we already know where long-haul, short-haul and specialist destination brands leak margin between first touch and departure.",
    },
    {
      heading: "Seasonality is a departure problem, not a calendar problem",
      body: "Costa Rica green season versus dry season is the worked example we use with operators. Media should flex against when people book for those departure windows, not against a flat monthly budget that ignores product mix. The same logic applies to Mediterranean shoulder months, safari migration windows and cruise embarkation peaks. Budget shaping without departure-level reporting is guesswork dressed up as planning.",
    },
  ],
  infrastructure: [
    {
      heading: "Call tracking into CRM into the reservation system",
      body: "We wire CallRail or equivalent dynamic numbers through HubSpot or Salesforce deal stages that match the real journey: enquiry, qualified, itinerary sent, quote out, deposit taken, balance due, departed. The reservation system remains the commercial ledger. Marketing systems must reconcile to it, not invent a parallel truth.",
    },
    {
      heading: "Offline conversions on booked revenue and margin",
      body: "Offline conversion upload sends booked revenue and margin back to Google Ads, never gross booking value as the primary optimisation signal. GBV ROAS looks healthy while you fill low-margin product. Margin ROAS is what the commercial director actually cares about. Conversion actions are named and documented so bidding decisions survive staff changes.",
    },
    {
      heading: "Board reporting that survives a twelve-month cycle",
      body: "Blended dashboards join spend, qualified calls, deposits, booked margin and departures. For safari and expedition, attribution windows stretch to twelve months or the channel report is fiction. Metabase-style BI sits alongside ad platforms when the operator already thinks in SQL, which is exactly how we work with Anywhere.com.",
    },
  ],
  stackNotes: [
    {
      heading: "Reservation and booking systems",
      body: "Tour operators run a mix of proprietary reservation platforms, Travefy-style itinerary tools, and mid-office systems that hold departure dates, supplier costs and passenger records. We do not rip those out. We map enquiry and booking IDs so ad platforms can learn from closed commercial outcomes.",
    },
    {
      heading: "Call tracking and the sales desk",
      body: "CallRail, Infinity and similar DNI tools sit on destination and product landing pages. Each tracked number carries GCLID or UTM context into the CRM activity timeline so the designer who answers the phone inherits campaign provenance without asking the caller.",
    },
    {
      heading: "CRM and lifecycle",
      body: "HubSpot and Salesforce are the usual CRM layer. Deal properties we insist on include departure_date, destination_region, booked_revenue, estimated_margin, booking_status and first_touch_channel. Without those fields, seasonal reporting collapses.",
    },
    {
      heading: "BI for operators who already live in the numbers",
      body: "Where founders run Metabase or equivalent warehouses, we match them there. Anywhere.com is the reference case: Anthony Landis already had deep attribution wiring. Our job was to operate at that data level across Google, Meta, email and affiliate rather than dump another agency dashboard on top.",
    },
  ],
  proof: [
    {
      client: "Anywhere.com",
      anonymised: false,
      situation:
        "Anywhere.com, a luxury and tailor-made travel planner selling phone-led itineraries across Costa Rica, Italy and dozens of other destinations, had advanced Metabase attribution under Anthony Landis but prior agencies could not work at that data level. Paid search carried a multi-year waste hole; Meta CPA was inflated; revenue sat at $6M with clear headroom into peak season.",
      built:
        "We consolidated channel data, recovered inefficient Google Ads targeting, rebuilt the funnel ahead of peak, and aligned bidding to commercial outcomes rather than shallow enquiry metrics. Anthony Landis, President, Director: \"The Bright Brand aren't a typical marketing agency. They understand the mechanics of travel and optimise towards higher lifetime value and a more premium client base through sharp age-demographic targeting and audience building, all aligned to our commercial data and implemented by their team. We've seen quicker bookings and a stronger bottom line as a result.\"",
      results: [
        {
          metric: "Wasted Google Ads spend recovered",
          after: "$300K",
          window: "multi-year waste identified and reallocated",
        },
        {
          metric: "Meta cost per acquisition",
          after: "-50%",
          window: "post-rebuild trading period",
        },
        {
          metric: "Revenue",
          before: "$6M",
          after: "$10M",
          window: "year on year (+67%)",
        },
      ],
      signedOff: true,
    },
  ],
  faqHeading: "What travel and tour operators usually ask",
  faqVariant: "editorial",
  faqs: [
    {
      q: "Why is tour operator marketing different from ecommerce travel?",
      a: "Checkout-led OTAs optimise order value. Tour operators sell consultative itineraries where the phone closes the booking, margin varies by product, and revenue is recognised on departure. Treating GBV ROAS as the north star fills the wrong inventory.",
    },
    {
      q: "Do you only work with luxury tailor-made brands?",
      a: "Luxury and tailor-made is where our named proof is strongest with Anywhere.com. We also build for safari and expedition, cruise, and reference ski, villa, golf, adventure and DMC shapes on this pillar. Dedicated pages exist where the pipeline differs enough to earn them.",
    },
    {
      q: "How do you handle Costa Rica green season versus dry season?",
      a: "We shape budgets and creative against booking curves for those departure windows, not a flat monthly split. Green and dry seasons pull different lead times, price points and product mix, so blended ROAS without season tags misleads bidding.",
    },
    {
      q: "What does senior in-house tour operator experience change in practice?",
      a: "It means we already know reservation-system constraints, departure-based revenue, and how multi-brand groups allocate media across long-haul and specialist labels. We reference that as senior in-house experience across a major multi-brand tour operator group. Individual brands are never named.",
    },
    {
      q: "Should we optimise Google Ads to enquiries or to bookings?",
      a: "To booked revenue and margin uploaded as offline conversions, after call tracking and CRM qualification. Enquiry optimisations train platforms to buy cheap form fills that never become deposits.",
    },
    {
      q: "How does this connect to DMC and inbound B2B sales?",
      a: "Inbound operators and DMCs sell to trade buyers, which is a B2B pipeline in travel clothing. That shape crosses into our procurement and supplier management work. Consumer acquisition and trade acquisition need different CRM stages and different LinkedIn or outbound plays.",
    },
    {
      q: "What reporting should a commercial director see monthly?",
      a: "Spend, qualified calls, itineraries sent, deposits, booked margin, and departures in the same pack. Channel ROAS without margin and departure timing is not a board metric.",
    },
  ],
  relatedIndustries: [
    {
      slug: "ecommerce",
      why: "Booking value versus order value, and why margin-based ROAS matters when product mix varies the way SKU margin does in ecommerce.",
    },
    {
      slug: "b2b-saas-and-platforms",
      why: "DMCs and inbound operators sell to trade and procurement-style buyers. We run acquisition on both sides of that B2B table.",
    },
    {
      slug: "luxury-tailor-made-travel",
      why: "The deepest named proof lives in luxury and tailor-made, anchored by Anywhere.com.",
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

export default travelTourOperators;
