import { CaseStudyDetail } from "@/lib/seed-types";

export const CASE_STUDY_DETAILS: CaseStudyDetail[] = [
  {
    slug: "anywhere",
    carouselId: "anywhere-travel",
    clientName: "Anywhere.com",
    clientLogo: "anywhere.png",
    clientLogoInvert: true,
    metaDescription:
      "How The Bright Brand saved Anywhere.com $300K in wasted Google Ads spend, halved Meta CPA, and helped grow revenue from $6M to $10M in one year.",
    heroEyebrow: "Case study",
    heroTitle: "How we saved over $300,000",
    heroAccent: "in ad spend",
    heroIntro:
      "We matched their founder at the data level, consolidated every channel, and put budget back where it actually drove results ahead of peak season.",
    heroStats: [
      { stat: "$300K", label: "Wasted ad spend recovered" },
      { stat: "-50%", label: "Meta cost per acquisition" },
      { stat: "+67%", label: "Revenue growth year on year" },
      { stat: "$10M", label: "Revenue this year, up from $6M" },
    ],
    imageUrl: "/carousel/anywhere-travel.webp",
    category: "Paid",
    bodyEyebrow: "Overview",
    bodyTitle: "Built on the numbers",
    bodyDescription:
      "How we partnered with Anywhere.com to consolidate their marketing data, recover wasted spend, and scale revenue profitably across Meta, Google, email and affiliate.",
    body: [
      "Anywhere.com is a travel planning company that connects travellers with local insiders across dozens of countries worldwide. They handle everything from itinerary planning to bookings and on-trip support, specialising in destinations across the Americas, Europe, Africa, Asia and Oceania. We manage their digital marketing across Facebook, email marketing, Google Ads and Instagram, and have been building out their global affiliate strategy while supporting international expansion, particularly into Mexico.",
      "We're working closely with Anthony Landis, one of the founders, who had already built a highly advanced attribution system. His main frustration with previous agencies was their inability to align with his data or properly understand what was required to scale the business. From the outset, it's been genuinely refreshing to work with someone so deeply embedded in the numbers. He has Metabase connected to virtually every data point imaginable and can spin up new tracking environments on demand, a level of sophistication easily beyond what we see in 99 percent of the businesses we work with.",
      "The real issue was not access to platforms like Google Ads or Meta Ads, but the lack of agencies able to connect the dots outside those platforms. Anthony specialises in analysing data across the entire ecosystem, not just within ad dashboards. That is where previous agencies fell short.",
      "By matching him at that data level, we've been able to amalgamate all sources and properly understand the full paid customer journey. When we dug into the numbers, we uncovered a £300K hole in wasted spend from their previous Google Ads agency over several years, identified by pulling data directly from multiple platforms and consolidating it to get a clear view of their core demographics. From there, we stripped out inefficient targeting and re-optimised their campaigns just ahead of peak season, putting the budget back where it actually drove results.",
      "We've saved them $300K in wasted ad spend, now put to much better use driving top line revenue. On Meta, we halved their cost per acquisition, making campaigns significantly more efficient and allowing them to scale profitably. The business has grown from $6 million in revenue last year to $10 million this year, a 67% increase year on year, putting them in a strong position as they continue to expand into new markets.",
    ],
    visualSection: {
      eyebrow: "Performance snapshot",
      title: "Growth in numbers",
      description:
        "Revenue and acquisition efficiency after consolidating data, removing wasted spend, and re-optimising ahead of peak season.",
      revenueTrend: [
        { label: "Last year", value: 6, displayValue: "$6M" },
        { label: "This year", value: 10, displayValue: "$10M" },
      ],
      comparisons: [
        {
          title: "Meta cost per acquisition",
          beforeLabel: "Before",
          afterLabel: "After",
          beforeValue: "Higher CPA",
          afterValue: "Lower CPA",
          changeLabel: "-50%",
          beforeRatio: 1,
          afterRatio: 0.5,
        },
        {
          title: "Wasted ad spend recovered",
          beforeLabel: "Previous spend",
          afterLabel: "Reallocated",
          beforeValue: "Inefficient",
          afterValue: "$300K saved",
          changeLabel: "Redirected to revenue",
          beforeRatio: 1,
          afterRatio: 0.35,
        },
      ],
    },
  },
  {
    slug: "formx",
    carouselId: "formx",
    clientName: "FormX",
    clientLogo: "formx.png",
    clientLogoInvert: true,
    metaDescription:
      "How Bright Brand is helping FormX, A $4.5M pre-seed modular building startup build their paid acquisition strategy across Meta, Google, LinkedIn and email",
    heroEyebrow: "Case study",
    heroTitle: "Inside the $4.5M",
    heroAccent: "pre-seed growth mission",
    heroIntro:
      "We bridge marketing and revenue by unifying your CRM and conversion data to optimise channels and drive profitable growth.",
    heroStats: [
      { stat: "2", label: "Paid channels audited" },
      { stat: "3", label: "New acquisition channels" },
      { stat: "100%", label: "Campaign coverage" },
      { stat: "15+", label: "Optimisation points identified" },
    ],
    imageUrl: "/carousel/formx.webp",
    category: "Paid",
    bodyEyebrow: "Overview",
    bodyTitle: "Continued work with FormX",
    bodyDescription:
      "How we're auditing FormX's paid acquisition across Meta and Google Ads, then expanding into Microsoft Ads, LinkedIn and email to fuel a $4.5M pre-seed modular construction startup.",
    body: [
      "FormX is a sustainable modular building company operating across California. They design, permit and build ADUs (accessory dwelling units), single-family homes and backyard offices using a technology-driven system that's 70% faster than traditional construction. Their approach combines customisation with speed, handling everything from initial design through to on-site assembly.",
      "Our team has recently started working with FormX, focusing on a complete attribution audit of their Meta Ads and Google Ads accounts. We're pinpointing exactly what's generating qualified leads for their ADUs across their target locations in California.",
      "As always, we're taking a data-driven approach. We've audited the existing accounts to identify what's working and what's wasting budget, with a particular focus on lead quality rather than just volume. The goal is to understand which campaigns, ad sets and creative variations are actually bringing in prospects who move forward with projects.",
      "From there, we'll be expanding into Microsoft Ads and LinkedIn for B2B acquisition, targeting property developers, real estate investors and commercial buyers who need multiple units. We're also building out their email marketing to nurture leads through the longer sales cycle that comes with construction projects.",
      "We've only just started working together, so check back soon. There'll be a case study here without a doubt.",
    ],
  },
  {
    slug: "brittontime",
    carouselId: "britton-and-time",
    clientName: "Britton & Time",
    clientLogo: "britton-and-time.png",
    clientLogoInvert: true,
    metaDescription:
      "How Bright Brand built a custom attribution system for award-winning law firm Britton & Time, generating 150+ leads/month across Google, Microsoft Ads and LinkedIn",
    heroEyebrow: "Case study",
    heroTitle: "Exposing what drove real revenue",
    heroAccent: "in 30 days",
    heroIntro:
      "We bridge marketing and revenue by unifying your CRM and conversion data to optimise channels and drive profitable growth.",
    heroStats: [
      { stat: "10+", label: "Legal areas" },
      { stat: "20+", label: "New campaigns" },
      { stat: "30,000+", label: "Monthly impressions" },
      { stat: "150+", label: "Leads per month" },
    ],
    imageUrl: "/carousel/britton-and-time.webp",
    category: "Paid",
    bodyEyebrow: "Overview",
    bodyTitle: "Continued work with Britton & Time",
    bodyDescription:
      "How we built a custom attribution system for award-winning law firm Britton & Time and rebuilt their paid search across Google, Microsoft Ads and LinkedIn.",
    body: [
      "Britton & Time is an award-winning law firm with offices in Mayfair and Brighton. Established in 2020, they've quickly become one of the fastest-growing firms in the South East, earning recognition from major UK outlets including the BBC, GB News, The Argus and the Sussex Business Awards. They provide legal services across both personal and business matters, working across around 10 different practice areas.",
      "Our team manages their Google Ads and has recently introduced two new channels, Microsoft Ads and LinkedIn. We're running campaigns across approximately 10 different legal areas for both their Mayfair and Brighton offices.",
      "We're working closely with Daniel Beach, the operations manager. The main challenge was understanding the full client journey and getting proper offline conversion tracking in place. Without this, the firm couldn't accurately attribute revenue back to specific campaigns or see what was genuinely driving results.",
      "We built a completely custom tracking system from the ground up, using scripts across multiple platforms including HubSpot, Clio Rail, Clio Grow and Clio Manage. This allowed us to amalgamate all the data into one clear reporting point, giving us weekly and bi-monthly visibility on exactly what they're getting back for every pound spent.",
      "With proper data finally in place, we could see which campaigns were genuinely generating revenue and which weren't pulling their weight. We restructured the account from the ground up, stripping out old ad groups, keywords and DSAs that weren't delivering. From there, we introduced new campaigns that focused the budget where it actually mattered, cutting the rest.",
      "Under the NDA signed with Britton & Time, we can't share specific data around CPAs, revenue or other confidential metrics. Given the sensitive nature of legal services and client confidentiality, the firm maintains strict controls over what performance data can be disclosed publicly.",
      "Our team continues to work with Britton & Time to refine their campaigns and attribution system. We now have a steady pipeline, and the attribution puts us in a much stronger position to scale confidently and run proper A/B tests to improve on the current baseline. LinkedIn has also become its own independent acquisition channel, bringing in leads consistently without relying on the other platforms.",
    ],
  },
  {
    slug: "canopy",
    carouselId: "canopy",
    clientName: "Canopy",
    clientLogo: "canopy.png",
    clientLogoInvert: true,
    metaDescription:
      "How Bright Brand added £85,000 in pipeline for Canopy in 30 days; And built an annualised pipeline of £850,000 through email and LinkedIn outbound.",
    heroEyebrow: "Case study",
    heroTitle: "Adding £85k pipeline",
    heroAccent: "in 30 days",
    heroIntro:
      "We bridge marketing and revenue by unifying your CRM and conversion data to optimise channels and drive profitable growth.",
    heroStats: [
      { stat: "£85,000", label: "Monthly recurring revenue" },
      { stat: "60+", label: "New leads monthly" },
      { stat: "50,000", label: "Outreach messages monthly" },
      { stat: "25", label: "New campaigns monthly" },
    ],
    imageUrl: "/carousel/canopy.webp",
    category: "Paid",
    bodyEyebrow: "Overview",
    bodyTitle: "Continued work with Canopy",
    bodyDescription:
      "How we generated an £85,000 monthly pipeline for Canopy in 30 days through email and LinkedIn outbound, with a custom attribution system feeding HubSpot.",
    body: [
      "Canopy is a supplier management platform that helps businesses manage all their supplier data, contracts and compliance in one place. They work with procurement teams worldwide, serving everyone from start-ups through to enterprise clients including CBRE, Yondr Group, EDF and UK Government departments. Their platform integrates with major systems like SAP, Microsoft Dynamics and DocuSign to streamline supplier onboarding and management.",
      "Our team manages their email marketing and LinkedIn outbound campaigns, both focused on acquiring new platform users.",
      "We kicked off with an aggressive testing phase, creating 20 different ad copy variations within the first 30 days to identify what actually drove sign-ups. The goal was to find a winning formula quickly and scale from there.",
      "Once we had enough data from the email campaigns, we introduced LinkedIn outbound as a second acquisition channel. We managed the outreach directly, achieving a 50% acceptance rate on connection requests, which gave us consistent access to decision-makers in procurement and supply chain roles.",
      "We worked closely with Doug, Laura, Alex and James from the Canopy team, integrating everything into their HubSpot CRM and building our own attribution system to track which campaigns and copy variations were driving the highest-quality leads. We're also currently helping them build out a custom platform for more advanced lead management as they scale.",
      "The key was maintaining a constant feedback loop between what we were seeing in the data and how the sales team were experiencing lead quality. This meant we could refine targeting and messaging in real time rather than waiting for monthly reviews.",
      "Within the first 30 days, we generated a prospect pipeline worth £85,000 in potential annual recurring revenue from new users. Annualised, the pipeline we've built is sitting at around £850,000 based on users staying on their current plans.",
      "The volume has been consistently high. We're now delivering multiple qualified leads every single day, which has actually become more than the team can comfortably handle. They've told us that if the pipeline continues at this rate, they'll need to bring on additional staff just to manage the inbound demand.",
    ],
  },
  {
    slug: "enexus",
    carouselId: "enexus",
    clientName: "Enexus Energy",
    clientLogo: "enexus.png",
    clientLogoInvert: true,
    metaDescription:
      "How Bright Brand built a custom lead acquisition system for Enexus Energy; Delivering 65 qualified prospects in the first 2 months and 30+ new leads every month",
    heroEyebrow: "Case study",
    heroTitle: "How we achieved",
    heroAccent: "15% cheaper acquisition",
    heroIntro:
      "We bridge marketing and revenue by unifying your CRM and conversion data to optimise channels and drive profitable growth.",
    heroStats: [
      { stat: "20+", label: "New campaigns" },
      { stat: "30+", label: "New prospects monthly" },
      { stat: "10,000", label: "Outreach messages monthly" },
      { stat: "3", label: "Growth channels" },
    ],
    imageUrl: "/carousel/enexus.webp",
    category: "Paid",
    bodyEyebrow: "Overview",
    bodyTitle: "Continued work with Enexus",
    bodyDescription:
      "How we built a custom Gumtree lead-acquisition system and high-intent Google Ads for Enexus Energy, delivering a predictable monthly pipeline of qualified prospects.",
    body: [
      "Enexus Energy is a business energy consultancy with over 10 years of experience helping companies across the UK cut costs and reduce carbon. They go beyond simple bill validation, developing bespoke strategies for how businesses purchase, generate and consume energy. Based in Blackpool, they work with organisations of all sizes on everything from procurement and compliance through to metering and sustainability.",
      "Our team manages their Google Ads and email marketing. We also built a completely custom lead acquisition system targeting facility management companies and landlords on Gumtree, along with supporting landing pages to convert the traffic.",
      "The standout piece of work was the Gumtree automation system. We built an intelligent scraping and messaging workflow that monitored new property listings in real time, specifically targeting facility management companies, founders and landlords. The moment a relevant property hit the platform, our system would trigger automated outreach, initiate conversations and build a qualified contact database that fed directly into the sales team's pipeline.",
      "The entire workflow was designed to operate autonomously while maintaining a human touch in the messaging. We set up weekly pipeline reviews with the founder to assess lead quality, refine targeting parameters and manage the handoff to the sales team. This meant we could continuously optimise the system based on what was actually converting.",
      "On the email side, we developed around 20 different copy variations and systematically tested them to identify what resonated with different segments of their audience. We also launched a hyper-targeted Google Ads campaign built specifically around high-intent search terms from businesses actively looking for energy consultants. Each campaign was backed by conversion-optimised landing pages designed to capture and qualify leads before they hit the CRM.",
      "The Gumtree system generated a consistent pipeline of 30 new prospects every month. In the first two months alone, we put 65 qualified prospects in contact with Enexus. These leads were handed directly to the sales team during our weekly calls, creating a reliable, predictable flow of opportunities without the business needing to invest any time in manual outreach.",
    ],
  },
  {
    slug: "menzies",
    carouselId: "menzies-law",
    clientName: "Menzies Law",
    clientLogo: "menzies-law.png",
    clientLogoInvert: true,
    metaDescription:
      "How Bright Brand grew monthly revenue by 17% for Menzies Law; driving 30+ new consultations every month through data-driven Google Ads and CallRail attribution",
    heroEyebrow: "Case study",
    heroTitle: "How we grew",
    heroAccent: "MRR by 17%",
    heroIntro:
      "We bridge marketing and revenue by unifying your CRM and conversion data to optimise channels and drive profitable growth.",
    heroStats: [
      { stat: "+20%", label: "Growth in monthly revenue" },
      { stat: "30+", label: "New consultations monthly" },
      { stat: "20+", label: "Campaigns launched monthly" },
      { stat: "50,000+", label: "New impressions" },
    ],
    imageUrl: "/carousel/menzies-law.webp",
    category: "Paid",
    bodyEyebrow: "Overview",
    bodyTitle: "Continued work with Menzies",
    bodyDescription:
      "How we grew monthly revenue for Menzies Law with data-driven Google Ads and CallRail attribution, adding 30+ consultations every month.",
    body: [
      "Menzies Law is an employment law firm with a people-first approach, advising both businesses and employees across the South of England. Based in Bristol, they're known for practical, jargon-free advice on everything from dismissals and redundancies through to business immigration and commercial contracts. They work with clients ranging from FE colleges and large corporations to individual employees navigating employment disputes.",
      "Our team manages their Google Ads and works with CallRail, their attribution software, to track every lead that comes through the door.",
      "We work closely with Lindsay Newman, the Head of Operations, taking a completely data-driven approach to the account. Every month we dig into the numbers together, tracking client enquiries, consultations and instructions to understand what's actually converting.",
      "The strategy is built around high-intent search terms in the employment law sector, with a particular focus on settlement agreements and unfair dismissals, two of their core practice areas. We've concentrated the targeting on the South of England where the firm operates, ensuring the budget goes towards prospects they can actually serve.",
      "CallRail integration means we can attribute every phone call and form submission back to specific campaigns, ad groups and keywords. This level of visibility allows us to make informed decisions about where to push spend and where to pull back, rather than relying on platform data alone.",
      "The campaigns deliver a steady stream of enquiries month after month, adding an extra 10 to 20% in revenue to their bottom line consistently. The data-driven approach means we can confidently predict pipeline and scale spend during peak periods while maintaining efficiency.",
    ],
  },
];

const DETAIL_BY_SLUG = new Map(
  CASE_STUDY_DETAILS.map((detail) => [detail.slug, detail]),
);

const DETAIL_BY_CAROUSEL_ID = new Map(
  CASE_STUDY_DETAILS.map((detail) => [detail.carouselId, detail]),
);

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDY_DETAILS.map((detail) => detail.slug);
}

export function getCaseStudyDetailBySlug(
  slug: string,
): CaseStudyDetail | undefined {
  return DETAIL_BY_SLUG.get(slug);
}

export function getCaseStudyDetailSlug(
  carouselId: string,
): string | undefined {
  return DETAIL_BY_CAROUSEL_ID.get(carouselId)?.slug;
}
