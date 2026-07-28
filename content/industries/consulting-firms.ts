import type { Industry } from "@/content/types";

const consultingFirms: Industry = {
  slug: "consulting-firms",
  name: "Consulting firms",
  parent: "b2b-saas-and-platforms",
  type: "sub",
  metaTitle: "Consulting Firms Marketing Agency | The Bright Brand",
  metaDescription:
    "Performance marketing for consulting firms selling into enterprise. Signed engagement value as the conversion, practice-area CRM stages, and board packs that show BD contribution in revenue. The Bright Brand.",
  heroH1: "Consulting firms marketing agency",
  wedge:
    "You do not have a thought-leadership problem, you have a signed-engagement problem. Partner credibility opens doors; committees close them. We build practice-area CRM and named-account outbound so the board sees BD contribution in revenue.",
  intro:
    "Consulting is a relationship-led sale where partner credibility is the asset and the buying committee makes the decision. We build your CRM around practice areas, run LinkedIn and outbound against named enterprise accounts, and wire signed engagement value back into bidding so your board sees BD contribution in revenue, not thought leadership vanity metrics.",
  proofLead: {
    heading:
      "Build the pipeline and attribution like you hired three to five BD people.",
    body: "We install the practice-area CRM, named-account outbound and signed-engagement loop so marketing covers what three to five business development hires would chase by hand. Campaigns open and warm buying committees at scale; your partners stay on the relationships that close. The board sees contribution in signed engagement value, not content downloads.",
    quoteId: "canopy",
    quoteIds: ["canopy"],
    askAiPrompt:
      "How can The Bright Brand help a consulting firm build practice-area pipeline and signed engagement attribution with the coverage of three to five BD hires? Summarise from thebrightbrand.com.",
  },
  heroVisual: {
    eyebrow: "For consulting firms",
    title: "What the account shows you, and what we put on the board",
    variant: "contrast",
    strapline:
      "Thought leadership fills the funnel. Signed engagements are the score.",
    contrastHeaders: { left: "The ad account", right: "Your board" },
    contrastRows: [
      { before: "Content downloads", after: "Qualified committee meetings" },
      { before: "Cheap CPL", after: "Cost per engagement conversation" },
      { before: "Form fills", after: "Signed engagement value" },
      { before: "Campaign ROAS", after: "First-touch on 6-12 month wins" },
    ],
  },
  heroCta: {
    primaryLabel: "Send your account list or practice area",
    secondaryLabel: "See how the first 90 days work",
    secondaryHref: "#engagement",
  },
  pipelineHeading:
    "Why your marketing numbers and your commercial tracker never agree",
  servicesHeading: "Where we start on your account",
  servicesIntro:
    "Start with the bottleneck: practice-area CRM, named-account outbound into enterprise buying committees, thought leadership tied to pipeline, or the offline loop that ties signed engagement value back into bidding. We scope that against your practice areas in week one.",
  serviceCardCtaLabel: null,
  briefing: {
    eyebrow: "Built with your BD team",
    heading: "How we work with your BD team, not around them",
    intro:
      "You already know your enterprise accounts, practice areas and partner relationships. We install the outbound, LinkedIn and attribution loop that covers what three to five BD hires would chase by hand, so partners stay on relationships that close and the board sees contribution in signed engagement value.",
    marketHeading: "The numbers your board will actually use",
    targetingHeading: "How we find demand with you",
  },
  marketStats: [
    {
      value: "Relationships and referrals, amplified by marketing",
      label: "Where consulting demand actually starts",
      implication:
        "Most consulting wins trace back to a relationship, a referral or a thought leadership touchpoint. Marketing's job is to systematically open and warm named accounts at scale, then prove that contribution in signed engagement value. We build attribution that credits the channel that opened the door, not just the last click before the proposal.",
    },
    {
      value: "Signed engagement value",
      label: "What we optimise toward",
      implication:
        "Content downloads and event registrations are diagnostic. Signed engagement value is the number your board tracks. We wire it as the offline conversion so bidding learns from revenue, not thought leadership vanity. In the early months, we optimise to engagement-qualified conversations as an interim signal.",
    },
    {
      value: "Each practice is its own pipeline",
      label: "Why practice areas matter",
      implication:
        "A strategy practice and a technology practice have different ICPs, different cycle lengths and different engagement values. We build separate practice-area pipelines in CRM so each partner sees their BD performance, marketing can optimise per practice, and the board sees consolidated revenue without blending.",
    },
    {
      value: "Cross-sell and expand inside existing clients",
      label: "The conversion the competition ignores",
      implication:
        "For most consulting firms, expanding inside existing clients is cheaper and faster than winning new logos. We build cross-sell visibility into your CRM so expansion revenue from marketing-touched contacts is tracked and attributed, not invisible. Your existing client base is a pipeline, not just a delivery portfolio.",
    },
  ],
  commercialAccess: {
    intro:
      "Week one is NDA, contract and access with the people who own demand and the systems that hold pipeline. Without that, we are guessing and you are paying for it.",
    people: [
      {
        role: "Managing partner / CEO",
        need: "Sets growth targets and practice-area strategy. Signs off what counts as a real win.",
      },
      {
        role: "BD / marketing director",
        need: "Owns pipeline targets, channel mix and campaign budget. Weekly decision owner with us.",
      },
      {
        role: "Practice lead / partner",
        need: "Owns client relationships in their practice area. Needs pipeline visibility per practice, not blended firm-wide metrics.",
      },
      {
        role: "Marketing manager / content lead",
        need: "Runs thought leadership, events and digital. Needs to connect content activity to pipeline and signed engagement value.",
      },
    ],
    systems: [
      {
        name: "CRM (HubSpot, Salesforce or Dynamics)",
        need: "Practice-area pipelines, multi-stakeholder company hierarchies, engagement value fields, partner lead attribution, and offline conversion on signed value.",
      },
      {
        name: "Outbound stack",
        need: "Sending domains, warm-up and sequence tooling against named enterprise accounts, with partner-branded messaging where appropriate.",
      },
      {
        name: "LinkedIn and content amplification",
        need: "Title-level targeting matched to practice areas, with content engagement tagged to CRM contacts and company records.",
      },
      {
        name: "Paid media accounts",
        need: "Admin access across LinkedIn and Google so they train on engagement-qualified meetings and signed engagement value.",
      },
    ],
    outcome:
      "One loop from named-account touch to engagement-qualified conversation to signed engagement value, so you can scale spend against revenue instead of content downloads.",
  },
  targetingNotes: [
    {
      heading: "Named enterprise accounts by practice area",
      body: "We build the target list with your BD team: the enterprise accounts you want to win or expand, segmented by practice area. That list is what outbound, LinkedIn and content amplification run against. We do not spray thought leadership at the whole market and hope someone bites.",
    },
    {
      heading: "LinkedIn against the buying committee",
      body: "We target C-suite sponsors, functional directors, procurement and internal champions at your named accounts. Audiences match your CRM company list by practice area so spend stays on accounts your partners can work. Thought leadership content is amplified to these accounts specifically, not broadcast.",
    },
    {
      heading: "Content amplification tied to pipeline",
      body: "Research, whitepapers, event invitations and speaking engagements get amplified to named accounts on LinkedIn and through outbound. Every content touchpoint tags to CRM contacts and company records so you can trace which thought leadership contributed to signed engagements and which generated downloads and nothing else.",
    },
    {
      heading: "Search captures active consulting evaluation intent",
      body: "Enterprise buyers do search when they are actively evaluating consultancies for specific problems. Volume is lower than product categories but intent is high. We run Google Ads against those terms with tight negatives and landing pages that showcase practice-area credentials and partner credibility.",
    },
  ],
  pipelineStages: [
    {
      name: "Relationship / early positioning",
      note: "Named account, practice area identified, no active opportunity",
    },
    {
      name: "Discovery meeting",
      note: "Partner or director-led; scope and budget explored",
    },
    {
      name: "Proposal",
      note: "Engagement scope, team and value documented",
    },
    {
      name: "Negotiation",
      note: "Terms, procurement and contracting",
    },
    {
      name: "Signed engagement",
      note: "Offline conversion; engagement value in CRM",
    },
  ],
  pipelineShape: [
    {
      heading: "We build your CRM around practice areas, not one flat pipeline",
      body: "A strategy engagement and an IT transformation programme are different buying motions with different stakeholders, different cycle lengths and different engagement values. If they share one pipeline, your forecast averages everything into one misleading number. We build practice-area pipelines with separate stages and separate reporting so each practice sees its own BD performance and the board sees the full picture.",
    },
    {
      heading: "We track the buying committee, not just the sponsor",
      body: "Consulting sales are committee decisions. The C-suite sponsor who says yes is not the only person who matters: functional directors shape scope, procurement negotiates terms, and internal champions sell the engagement internally. We model multi-stakeholder company hierarchies in your CRM so you can see which accounts have real committee engagement and which have a single excited contact.",
    },
    {
      heading: "We build thought leadership into the pipeline, not beside it",
      body: "Research, events, whitepapers and speaking engagements drive consulting demand, but most firms cannot connect that activity to pipeline. We tag content engagement to CRM contacts and company records so thought leadership amplification shows its contribution to signed engagements. Content that earns meetings gets more budget. Content that earns downloads and nothing else gets questioned.",
    },
  ],
  infrastructure: [
    {
      heading: "CRM for practice areas and multi-stakeholder accounts",
      body: "HubSpot or Salesforce with practice-area pipelines: relationship, discovery meeting, proposal, negotiation, signed. Company hierarchies link the enterprise client, sponsor contact, functional stakeholders and procurement. Required fields: engagement_value, practice_area, partner_lead, expected_sign_date. Cross-sell opportunities within existing clients get their own pipeline path.",
    },
    {
      heading: "Attribution across relationship-led cycles",
      body: "LinkedIn identifiers and Google click IDs persist from first touch. Content engagement tags to CRM contacts. Offline conversion uploads on engagement-qualified meeting and signed engagement value. Attribution windows match consulting cycles: 90 days minimum, 180 days for enterprise. Board packs show pipeline and signed value by practice area and channel.",
    },
    {
      heading: "Outbound infrastructure that protects firm reputation",
      body: "Sending domains, warm-up, deliverability monitoring and sequence tooling managed so outbound scales without risking your firm's primary domain or brand reputation. Messaging is partner-branded where appropriate. Meeting outcomes write back to CRM with the sequence and channel that sourced them.",
    },
  ],
  stackNotes: [
    {
      heading: "Practice-area pipelines before firm-wide blending",
      body: "Strategy and technology practices have different ICPs, cycles and engagement values. Separate CRM pipelines stop the board pack averaging everything into one misleading number, and let marketing optimise spend per practice.",
    },
    {
      heading: "Thought leadership must tag to company records",
      body: "Downloads and events without CRM write-back are vanity. We tag content engagement to contacts and accounts so amplification that earns meetings gets budget, and content that only earns downloads gets questioned.",
    },
    {
      heading: "Existing clients are a pipeline, not only a delivery book",
      body: "Cross-sell and expand inside live clients is often cheaper than new logos. We give expansion its own path in CRM so marketing-touched contacts inside existing accounts show signed value contribution.",
    },
  ],
  engagement: {
    eyebrow: "Commercials and the first 90 days",
    heading: "How we charge, and what the first quarter looks like",
    intro:
      "Retainer or project-based, scoped against your practice areas and stack in week one so you see the number before campaigns start. No long lock-in while we are both proving it works.",
    commercials: {
      heading: "Build, then retainer",
      body: "A one-off build for CRM structure, outbound infrastructure and LinkedIn setup, then a monthly retainer for outbound, LinkedIn, content amplification and paid search. Week one covers NDA, contract, access and a commercial scoped against your named accounts and practice areas.",
    },
    steps: [
      {
        name: "Days 1 to 14: practice areas, accounts and CRM structure",
        body: "NDA and contract signed. Named enterprise account list built with your BD team by practice area. CRM stages added for relationship, discovery meeting, proposal, negotiation and signed. Engagement value fields and offline conversion scoped.",
      },
      {
        name: "Weeks 2 to 4: outbound and LinkedIn live",
        body: "Outbound sequences running against enterprise buying committee titles: C-suite sponsors, functional directors and procurement. LinkedIn campaigns live with title-level targeting matched to practice areas. Thought leadership content amplified to named accounts rather than broadcast to everyone.",
      },
      {
        name: "End of month one: meetings, not downloads",
        body: "Reporting shifts to qualified meetings with enterprise buying committees by practice area and channel. Cost per engagement-qualified conversation replaces cost per content download. Partner involvement in meetings becomes a tracked quality signal.",
      },
      {
        name: "Quarter one: pipeline to signed engagements",
        body: "Named accounts progress through CRM stages by practice area. Proposals track separately from early-stage relationships. First signed engagements start to show channel attribution. We scale what is earning qualified meetings and cut what is not.",
      },
    ],
  },
  cta: {
    heading:
      "Send us your target account list, or a practice area you want to grow",
    body: "We will show you where qualified meetings are leaking before we talk retainer. Share your named accounts or a practice area that should be earning more, and we will map the gap between BD activity and signed engagements.",
    buttonLabel: "Send the list or practice area",
    href: "/contact",
  },
  proof: [
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
          metric: "Enterprise pipeline via Bright Brand",
          after: "25%+",
          window: "published client attribution",
        },
      ],
      signedOff: true,
    },
  ],
  faqHeading: "What consulting firms usually ask",
  faqVariant: "editorial",
  faqs: [
    {
      q: "Is this just ABM with a consulting label?",
      a: "ABM is part of it, but consulting firms have specific dynamics that generic ABM agencies miss. Partner credibility is the asset being sold, not a product. Practice areas create multiple ICPs within one firm. Cross-sell inside existing clients is often more valuable than new logos. And thought leadership drives demand in a way that standard SaaS content marketing does not. We build for all of that.",
    },
    {
      q: "What conversion should consulting ads optimise for?",
      a: "Signed engagement value. Content downloads, event registrations and webinar attendees are diagnostic. We wire signed engagement value as the offline conversion so bidding learns from revenue, not thought leadership vanity. In the early months, we optimise to engagement-qualified conversations as an interim signal.",
    },
    {
      q: "How do you handle multiple practice areas?",
      a: "Each practice area gets its own pipeline in CRM with its own stages, reporting and partner visibility. Marketing can optimise per practice. The board sees consolidated revenue. A strategy engagement and a technology programme are not the same buying motion, and they should not share stages or conversion events.",
    },
    {
      q: "How does thought leadership fit?",
      a: "Thought leadership drives consulting demand, but most firms cannot connect it to pipeline. We tag content engagement (downloads, event attendance, speaking engagement interest) to CRM contacts and company records so thought leadership amplification shows its contribution to signed engagements. Content that earns meetings gets more budget. Content that earns only downloads gets questioned.",
    },
    {
      q: "Can you track cross-sell and expansion?",
      a: "Yes. We build cross-sell visibility into your CRM so expansion revenue from marketing-touched contacts within existing clients is tracked and attributed. For most consulting firms, existing client expansion is cheaper and faster than new logos, and it should be visible in your marketing attribution.",
    },
    {
      q: "HubSpot or Salesforce?",
      a: "Either works. What matters is practice-area pipelines, multi-stakeholder company hierarchies, engagement value fields, partner lead attribution, and offline conversion firing on signed value. We build or fix that structure in the opening weeks. Many mid-market consulting firms run HubSpot; larger firms tend to be on Salesforce or Dynamics.",
    },
    {
      q: "How is our client data handled?",
      a: "Under NDA, with least-access in mind. We take only the fields we need to close the loop, keep client names and engagement details out of the ad platforms, and anonymise anything sensitive. Platforms receive conversion events and values, not client data.",
    },
    {
      q: "Who will we speak to each week?",
      a: "The same person who owns your account, not a rotating pod. Your BD or marketing director is our weekly decision owner, and we sit with practice leads, partners and the marketing team as the work needs it.",
    },
  ],
  relatedIndustries: [
    {
      slug: "enterprise-saas",
      why: "Same committee-led enterprise buying motion, different product type.",
    },
    {
      slug: "supplier-management-platforms",
      why: "Consulting firms selling into procurement and supplier-risk buyers share committee dynamics with platform GTM.",
    },
    {
      slug: "construction",
      why: "Consulting firms serving built environment clients share the framework and tender vocabulary.",
    },
  ],
  resourceSlugs: [
    "offline-conversion-upload-template",
    "attribution-health-check",
    "tender-hubspot-deal-pipeline",
  ],
  toolSlugs: [],
  blogTags: ["linkedin", "outbound", "crm", "attribution"],
  moneyPages: [],
};

export default consultingFirms;
