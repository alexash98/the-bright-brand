import { CaseStudy, ServiceCard, ServiceHighlightQuote, Testimonial, TeamMember, PlaybookRow, EngagementStep } from "@/lib/seed-types";

function capitalizeFirst(text: string): string {
  if (!text) {
    return text;
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

function heroCarouselCase(
  id: string,
  clientName: string,
  highlightStat: string,
  highlightLabel: string,
  imageUrl: string,
  clientLogo?: string,
): CaseStudy {
  const label = capitalizeFirst(highlightLabel);

  return {
    id,
    clientName,
    title: id,
    category: "Paid",
    tagline: label,
    highlightStat,
    highlightLabel: label,
    logoText: clientName.slice(0, 2).toUpperCase(),
    description: "Placeholder case study for hero carousel.",
    challenge: "TBD",
    approach: "TBD",
    results: [],
    stats: [],
    imageUrl,
    clientLogo,
  };
}

export const HERO_CAROUSEL_CASE_STUDIES: CaseStudy[] = [
  heroCarouselCase(
    "britton-and-time",
    "Britton and Time Solicitors",
    "+142%",
    "enquiry growth from paid search",
    "/carousel/britton-and-time.webp",
    "britton-and-time.png",
  ),
  heroCarouselCase(
    "formx",
    "FormX",
    "63%",
    "lower cost per booked sales meeting",
    "/carousel/formx.webp",
    "formx.png",
  ),
  heroCarouselCase(
    "menzies-law",
    "Menzies Law",
    "+89%",
    "organic traffic year on year",
    "/carousel/menzies-law.webp",
    "menzies-law.png",
  ),
  heroCarouselCase(
    "releaf",
    "Releaf",
    "4.2x",
    "return on ad spend across paid social",
    "/carousel/releaf.webp",
    "releaf.png",
  ),
  heroCarouselCase(
    "manor-interior",
    "Manor Interior Solutions",
    "+56%",
    "conversion rate on key service pages",
    "/carousel/manor-interior.webp",
  ),
  heroCarouselCase(
    "canopy",
    "Canopy",
    "38%",
    "faster supplier onboarding cycle",
    "/carousel/canopy.webp",
    "canopy.png",
  ),
  heroCarouselCase(
    "anywhere-travel",
    "Anywhere Travel",
    "+59%",
    "revenue on flat ad spend",
    "/carousel/anywhere-travel.webp",
    "anywhere.png",
  ),
  heroCarouselCase(
    "airbox",
    "Airbox Fulfilment",
    "2.1x",
    "fulfilment order volume handled",
    "/carousel/airbox.webp",
    "airbox.png",
  ),
  heroCarouselCase(
    "enexus",
    "Enexus Energy",
    "+74%",
    "lead quality score improvement",
    "/carousel/enexus.webp",
    "enexus.png",
  ),
  heroCarouselCase(
    "direct2",
    "Direct2Compensation",
    "+112%",
    "case enquiry volume from search",
    "/carousel/direct2-compensation.webp",
    "direct2-compensation.png",
  ),
];

export const SERVICES: ServiceCard[] = [
  {
    id: "seo",
    title: "Organic Search (SEO)",
    description: "Sustainable traffic growth through technical SEO, content strategy, and link building.",
    iconName: "Search",
    linkUrl: "/seo"
  },
  {
    id: "ppc",
    title: "Paid Search (PPC)",
    description: "Maximise ROI across Google and Microsoft with data-led paid search campaigns.",
    iconName: "MousePointerClick",
    linkUrl: "/ppc"
  },
  {
    id: "social",
    title: "Paid Social",
    description: "Build demand across Meta, TikTok and Pinterest with creative that actually performs.",
    iconName: "Megaphone",
    linkUrl: "/social"
  },
  {
    id: "pr",
    title: "Digital PR",
    description: "Earn coverage and links from top-tier publications to boost authority and awareness.",
    iconName: "Users",
    linkUrl: "/digital-pr"
  },
  {
    id: "creative",
    title: "Creative Strategy",
    description: "Scroll-stopping creative that drives engagement and measurable performance.",
    iconName: "Sparkles",
    linkUrl: "/creative"
  },
  {
    id: "analytics",
    title: "Data & Analytics",
    description: "Robust tracking, dashboards, and attribution that turn data into better decisions.",
    iconName: "BarChart3",
    linkUrl: "/analytics"
  }
];

export const SERVICE_HIGHLIGHT_QUOTES: ServiceHighlightQuote[] = [
  {
    id: "anywhere",
    company: "Anywhere.com",
    quote:
      "Grew revenue 59% on flat ad spend. Sharper targeting and a rebuilt funnel doubled the return on the same budget.",
    author: "Anthony Landis",
    role: "President, Director",
    imageSrc: "/testimonials/anthony-landis.png",
    imageAlt: "Anthony Landis",
  },
  {
    id: "menzies-law",
    company: "Menzies Law",
    quote:
      "Bright Brand have been a brilliant addition to our team. They work independently but feel like a genuine extension of our own marketing function, and the results speak for themselves.",
    author: "Lindsey Newman",
    role: "Head of Business Development",
    imageSrc: "/testimonials/lindsey-newman.png",
    imageAlt: "Lindsey Newman",
  },
  {
    id: "freedom-insurance",
    company: "freedominsure.co.uk",
    quote:
      "I've been here eight years, and I don't recall a period where we've genuinely been able to sustain this level of volume. It looked very good, and it was. Volume was double the previous period.",
    author: "Roland Gilliam",
    role: "Managing Director, Freedom Insurance",
    imageSrc: "/testimonials/roland-gilliam.png",
    imageAlt: "Roland Gilliam",
  },
  {
    id: "formx",
    company: "FormX.com",
    quote:
      "Cut the cost per booked sales meeting by 63%. A rebuilt funnel and tighter targeting brought the cost down sharply, so the same budget delivered far more qualified pipeline.",
    author: "Shay Hasson",
    role: "Co-Founder FormX. Serial Entrepreneur",
    imageSrc: "/testimonials/formx.png",
    imageAlt: "Shay Hasson",
  },
  {
    id: "heat-from-the-spire",
    company: "Heatfromthespire.co.uk",
    quote:
      "The Bright Brand team scaled our Meta channel with real discipline and turned it into proper growth. They 3x our revenue in a year, and it still feels like they are part of the business.",
    author: "Ben Herridge",
    role: "Managing Director & CEO",
    imageSrc: "/testimonials/ben-herridge.png",
    imageAlt: "Ben Herridge",
  },
];

export const PRESS_PUBLICATIONS = [
  { id: "london-daily", name: "London Daily News", logo: "london-daily-news.png" },
  { id: "business-today", name: "Business Today", logo: "business-today.png" },
  { id: "business-mondays", name: "Business Mondays", logo: "business-mondays.png" },
  { id: "medium", name: "Medium", logo: "medium.png" },
];

export const CLIENT_LOGOS = [
  { name: "Airbox Fulfilment", logo: "airbox.png", seed: "airbox", scale: 1.2 },
  { name: "Britton & Time", logo: "britton-and-time.png", seed: "britton-and-time" },
  { name: "Bremembered.io", logo: "bremembered.png", seed: "bremembered" },
  { name: "Anywhere.com", logo: "anywhere.png", seed: "anywhere" },
  { name: "Releaf", logo: "releaf.png", seed: "releaf", scale: 1 / 1.2 },
  { name: "Canopy", logo: "canopy.png", seed: "canopy" },
  { name: "Direct2Compensation", logo: "direct2-compensation.png", seed: "direct2", scale: 1.3 },
  { name: "Enexus", logo: "enexus.png", seed: "enexus" },
  { name: "FormX", logo: "formx.png", seed: "formx" },
  { name: "Rowe Co Solicitors", logo: "rowe-co-solicitors.png", seed: "rowe-co", scale: 1.2 },
  { name: "Menzies Law", logo: "menzies-law.png", seed: "menzies" },
  { name: "Freedom Travel Insurance", logo: "freedom-travel-insurance.png", seed: "freedom" },
  { name: "Northwest Solicitors", logo: "northwest-solicitors.png", seed: "northwest", scale: 1.2 },
];

export const MARQUEE_PLATFORM_LOGOS: ClientLogo[] = [
  {
    name: "Shopify",
    logo: "shopify.svg",
    seed: "shopify",
    folder: "platform-logos",
    widthClass: "w-[8.7rem]",
  },
  {
    name: "Triple Whale",
    logo: "triple-whale.svg",
    seed: "triple-whale",
    folder: "platform-logos",
    widthClass: "w-[10.8rem]",
  },
  {
    name: "TikTok",
    logo: "tiktok.svg",
    seed: "tiktok",
    folder: "platform-logos",
    widthClass: "w-[8.1rem]",
  },
  {
    name: "Meta",
    logo: "meta.svg",
    seed: "meta",
    folder: "platform-logos",
    widthClass: "w-[6.9rem]",
  },
  {
    name: "Hyros",
    logo: "hyros.svg",
    seed: "hyros",
    folder: "platform-logos",
    widthClass: "w-[6.6rem]",
  },
  {
    name: "Northbeam",
    logo: "northbeam.svg",
    seed: "northbeam",
    folder: "platform-logos",
    widthClass: "w-[9.6rem]",
  },
  {
    name: "HubSpot",
    logo: "hubspot.svg",
    seed: "hubspot",
    folder: "platform-logos",
    widthClass: "w-[8.4rem]",
  },
  {
    name: "Salesforce",
    logo: "salesforce.svg",
    seed: "salesforce",
    folder: "platform-logos",
    widthClass: "w-[9.6rem]",
  },
  {
    name: "Pipedrive",
    logo: "pipedrive.svg",
    seed: "pipedrive",
    folder: "platform-logos",
    widthClass: "w-[9rem]",
  },
];

export const PLATFORM_LOGOS = [
  { name: "Amazon Ads", seed: "amazon" },
  { name: "ChatGPT Business", seed: "chatgpt" },
  { name: "Meta Business", seed: "facebook" },
  { name: "Google Partners", seed: "google" },
  { name: "Gemini AI", seed: "gemini" },
  { name: "Instagram Ads", seed: "instagram" },
  { name: "Pinterest Business", seed: "pinterest" },
  { name: "Reddit Ads", seed: "reddit" },
  { name: "TikTok Shop", seed: "tiktok" },
  { name: "YouTube Ads", seed: "youtube" }
];

export const TESTIMONIALS: Testimonial[] = SERVICE_HIGHLIGHT_QUOTES.map(
  (quote) => ({
    id: quote.id,
    text: quote.quote,
    author: quote.author ?? quote.company,
    role: quote.role ?? "",
    company: quote.company,
    imageSrc: quote.imageSrc,
    imageAlt: quote.imageAlt,
  }),
);

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "qualification-check",
    clientName: "Qualification Check",
    title: "qualification-check",
    category: "PR",
    tagline: "Taking Qualification Check from no history to a Financial Times placement",
    highlightStat: "+47%",
    highlightLabel: "brand search click growth after Financial Times feature",
    logoText: "QC",
    description: "How we took an unknown verification company to the front page of the Financial Times and established them as the leading AI fraud voice on admissions.",
    challenge: "Qualification Check was completely unknown to national publications. They had no brand authority in the press and zero existing media relations, with a highly constrained £1,200/month PR retainer.",
    approach: "Instead of pitch-selling their services, we harvested and structured their internal database of 55,000 university admissions. We mapped out unique narratives about emerging AI certificate forgery and QR-code fraud rates (over 4% error rates).",
    results: [
      "Secured a major featured story in the Financial Times identifying Qualification Check as the authority.",
      "Landed targeted placements in Times Higher Education reaching core admissions decision-makers.",
      "Boosted organic search clicks for the brand term by 47% week-on-week following publication.",
      "Opened strategic partnership discussions with UCAS on admissions credential checks."
    ],
    stats: [
      { stat: "FT", label: "Front page feature secured" },
      { stat: "+47%", label: "Brand search click growth" },
      { stat: "DR 92", label: "Domain authority link earned" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    testimonial: {
      text: "Securing the Financial Times was a colossal milestone for our market standing. Seed's unique focus on making our data tell a public story was brilliant.",
      author: "Ed Hall",
      role: "CEO, Qualification Check"
    }
  },
  {
    id: "weavabel",
    clientName: "Weavabel",
    title: "weavabel",
    category: "Organic",
    tagline: "High-authority PR placements and search ranking recovery inside 30 days",
    highlightStat: "5",
    highlightLabel: "high-authority placements inside a single month",
    logoText: "Weavabel",
    description: "Reversing a year-long organic search decline by linking high-intent keyword optimization with high-authority retail press placements.",
    challenge: "Weavabel's domain authority had been in a continuous decline for over 12 months, limiting their ability to compete on key retail labeling terms.",
    approach: "We ran parallel tracks: Digital PR focused on a major packaging compliance partnership, and technical SEO focused heavily on niche, high-intent sustainable trims and swing tags terms.",
    results: [
      "Eearned five high-authority backlinks in 30 days, including Yahoo Finance and WWD.",
      "Boosted YoY organic search impressions by 51%.",
      "Lifted overall search position average from 23 up to 8.",
      "Drove a 25% MoM increase in inbound organic lead conversions."
    ],
    stats: [
      { stat: "5", label: "Top-tier PR link-backs" },
      { stat: "+51%", label: "YoY Search Impression rise" },
      { stat: "+25%", label: "Organic lead conversion MoM" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    testimonial: {
      text: "Seed's digital PR campaigns reversed a multi-month drop in our traffic within weeks. A brilliant cross-channel effort.",
      author: "Frankie Williams",
      role: "Sales Partner"
    }
  },
  {
    id: "ultimate-activity-camps",
    clientName: "Ultimate Activity Camps",
    title: "ultimate-activity-camps",
    category: "Paid",
    tagline: "Sustainable paid media scaling and unified multi-platform performance tracking",
    highlightStat: "+66%",
    highlightLabel: "website revenue YoY improvement",
    logoText: "UAC",
    description: "How we overcame fragmented analytics and inflated acquisition costs by restructuring paid search and social around geographical CRM lists.",
    challenge: "The client suffered from fragmented attribution across Google and Meta, leading to bloated spend on ready-to-book terms with a high CPA.",
    approach: "We consolidated reporting into a unified Looker Studio dashboard, split spend 40% Meta (awareness build) and 60% Google (intent capture), and targetted custom postcode radius structures.",
    results: [
      "Grew total summer camp website revenue by 66% YoY.",
      "Boosted total purchases by 81% YoY.",
      "Increased Google Ads conversion volume by 57% YoY.",
      "Achieved a top peak return on ad spend (ROAS) exceeding 1,200%."
    ],
    stats: [
      { stat: "+66%", label: "Revenue growth YoY" },
      { stat: "+81%", label: "Camp bookings YoY" },
      { stat: "12x", label: "Peak Google Ads ROAS" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "honest-burgers",
    clientName: "Honest Burgers",
    title: "honest-burgers",
    category: "Paid",
    tagline: "Consolidating fragmented local budgets to drive real-world restaurant footfall",
    highlightStat: "+45%",
    highlightLabel: "increase in store visits from local search ads",
    logoText: "Honest",
    description: "Unlocking campaign efficiency by shifting from forty tiny local campaigns into two high-momentum regional clusters.",
    challenge: "Honest Burgers spread their local search budget across forty separate campaigns, choking the Google bidding algorithm of enough conversion data to optimise.",
    approach: "We collapsed forty local campaigns into two streamlined clusters: London and Regional. This consolidated conversion volume, dropping CPC and unlocking smart bidding.",
    results: [
      "Increased real-world restaurant store visits by 45% YoY.",
      "Grew Google Ads clicks by 87% within the same budget envelope.",
      "Reduced cost per click (CPC) by 32% through improved quality scores.",
      "Boosted highly valuable non-brand search impressions by 81%."
    ],
    stats: [
      { stat: "+45%", label: "Store visits YoY" },
      { stat: "+87%", label: "Google ad click volume" },
      { stat: "-32%", label: "Cost-per-click reduction" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "world-of-books",
    clientName: "World of Books",
    title: "world-of-books-social-creative",
    category: "Social",
    tagline: "Creator-led paid social strategies that scaled international app installs",
    highlightStat: "508%",
    highlightLabel: "UK in-app conversion volume rise",
    logoText: "WoB",
    description: "How we unlocked Meta after three years of inactivity, scaling book trades and downloads across the UK and USA using relatable UGC.",
    challenge: "World of Books relied entirely on Google Search Ads for app installs. Their Meta ad account had sat dormant for over three years due to high previous CPAs.",
    approach: "We designed a 100% creator-led campaign via Influee, onboarding 18 creators to build 200+ ad variants testing hooks, accents, and downsizing setups.",
    results: [
      "Boosted monthly UK app installs by 490% while keeping CPI below £2.",
      "Doubled US textbook-trading installs inside two months.",
      "Grew in-app book trades by 508% in the UK, reducing trade CPA by 32%.",
      "Turned Meta into their second-most valuable acquisition channel."
    ],
    stats: [
      { stat: "+490%", label: "UK App downloads" },
      { stat: "5x", label: "In-app trading volume" },
      { stat: "-32%", label: "Trade acquisition CPA" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    testimonial: {
      text: "The sheer speed of creative iteration and testing was second to none. Meta is now a core pillar of our global app growth.",
      author: "David Kyle",
      role: "Head of eCommerce"
    }
  },
  {
    id: "liforme",
    clientName: "Liforme",
    title: "liforme",
    category: "Paid",
    tagline: "Multi-channel retail scaling across Black Friday peak season",
    highlightStat: "+46%",
    highlightLabel: "Black Friday net sales growth YoY",
    logoText: "Liforme",
    description: "Building an early-november customer acquisition pipeline to feed a highly efficient remarketing engine across peak trading.",
    challenge: "Following a record-breaking 2024 peak, the client needed to find substantial year-on-year growth across mature UK/US markets.",
    approach: "Implemented a structured multi-stage funnel (UGC problem-solving -> Product Alignment -> Direct offer) spanning Google, Meta, and TikTok.",
    results: [
      "Increased peak seasonal net sales by 46% (£740k+ in absolute value).",
      "Grew USA specific sales by 56% YoY.",
      "Validated EU expansion with 48% net sales increase.",
      "Generated over 14.5 million ad impressions across November."
    ],
    stats: [
      { stat: "+46%", label: "Peak net sales YoY" },
      { stat: "+56%", label: "USA sales growth" },
      { stat: "14.5M", label: "Ad impressions delivered" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gusbourne",
    clientName: "Gusbourne",
    title: "gusbourne",
    category: "Paid",
    tagline: "Boosting wine direct-to-consumer sales under tight policy rules",
    highlightStat: "418%",
    highlightLabel: "improvement in overall direct search ROAS",
    logoText: "Gusbourne",
    description: "How we optimized vintage direct sales by migrating budget out of brand search and into high-intent generic keywords.",
    challenge: "Direct-to-consumer search campaigns were dependent on existing brand loyalty. Alcohol rules also limited standard remarketing setups.",
    approach: "We fully restructured the keyword hierarchy, removing overlapping bids, and directed 65% of the saved budget into generic high-intent non-brand keywords.",
    results: [
      "Increased overall search ROAS from 258% to 418%.",
      "Reduced absolute media spend by 28% while improving yields.",
      "Grew overall Google Ads direct sales revenue by 15%.",
      "Secured a 7% increase in new-user direct conversions."
    ],
    stats: [
      { stat: "418%", label: "Direct-to-consumer ROAS" },
      { stat: "-28%", label: "Media budget reduction" },
      { stat: "+15%", label: "Ad-attributed revenue" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ski-beat",
    clientName: "Ski Beat",
    title: "ski-beat",
    category: "Organic",
    tagline: "Outranking giant travel competitors through intensive topical cluster SEO",
    highlightStat: "+87%",
    highlightLabel: "organic revenue growth in ski season",
    logoText: "SkiBeat",
    description: "Earning massive market share for catered ski chalets by building a dense grid of location guides and technical schema grids.",
    challenge: "Chasing ski chalet bookings against well-funded giants like Crystal Ski left Ski Beat buried in the second and third pages of search results.",
    approach: "Constructed targeted landing pages based on specific calendar bookings ('January ski chalets') and resort comparisons, monitoring rankings via our proprietary tool Lumin.",
    results: [
      "Grew organic peak booking revenue by 87% year on year.",
      "Drove organic search impressions up by 105%.",
      "Secured position #1 for 'catered ski chalets France'.",
      "Earned a massive, authoritative backlink organically from Forbes."
    ],
    stats: [
      { stat: "+87%", label: "Organic booking revenue" },
      { stat: "105%", label: "Impression volume growth" },
      { stat: "+78%", label: "Page-one search terms" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80"
  }
];

export const PLAYBOOK: PlaybookRow[] = [
  { from: "Tethered to the billable hour", to: "Pricing based on outcomes" },
  { from: "Fixed, long-term contracts", to: "Flexible agreements" },
  { from: "Packaged, off-the-shelf services", to: "Agile, bespoke solutions" },
  { from: "New business machines", to: "Long-term partnerships" },
  { from: "Fear of failure, no innovation", to: "Experiment and adapt" }
];

export const TEAM: TeamMember[] = [
  {
    id: "lauren",
    name: "Lauren Morley",
    firstName: "Lauren",
    role: "Client Partner",
    seniority: "Partner",
    email: "lauren@helloseed.co.uk",
    startDate: "May 2017",
    bio: "Lauren coordinates multi-platform campaigns, aligning client pipelines with seasonal demand. Passionate about sustainable branding, she loves scaling impact-driven retail companies.",
    avatarSeed: "lauren",
    hobbies: ["Surfing", "Barista Art", "Hiking"]
  },
  {
    id: "lynnette",
    name: "Lynnette Abbott",
    firstName: "Lynnette",
    role: "Digital PR Lead",
    seniority: "Lead Specialist",
    email: "lynnette@helloseed.co.uk",
    startDate: "Jan 2019",
    bio: "Lynnette transforms raw proprietary client data into high-value sector reports. She has landed direct placements in the Financial Times, WWD, and Times Higher Education.",
    avatarSeed: "lynnette",
    hobbies: ["Photography", "French Wine", "UGC curation"]
  },
  {
    id: "louis",
    name: "Louis Tsouris-Bryant",
    firstName: "Louis",
    role: "SEO Director",
    seniority: "Director",
    email: "louis@helloseed.co.uk",
    startDate: "Oct 2018",
    bio: "Louis oversees technical architecture, crawl budgets, and AI search visibility optimization. He built Seed's proprietary ranking audit indexer, Atlas.",
    avatarSeed: "louis",
    hobbies: ["Mechanical Keyboards", "Retro games", "Biking"]
  },
  {
    id: "jon",
    name: "Jon Hunt",
    firstName: "Jon",
    role: "Paid Media Director",
    seniority: "Director",
    email: "jon@helloseed.co.uk",
    startDate: "Mar 2016",
    bio: "Jon directs search and social ad investments, managing more than £32M in combined platform spend. He specializes in bidding algorithm consolidation and CRM synchronization.",
    avatarSeed: "jon",
    hobbies: ["Running marathons", "Craft Beer", "Vinyl collecting"]
  },
  {
    id: "brandon",
    name: "Brandon Stevens",
    firstName: "Brandon",
    role: "Creative Director",
    seniority: "Director",
    email: "brandon@helloseed.co.uk",
    startDate: "Nov 2015",
    bio: "Brandon directs scroll-stopping UGC and video asset production. He runs creative testing feedback loops, keeping ad fatigue low and CTRs high across TikTok and Meta.",
    avatarSeed: "brandon",
    hobbies: ["Sketching", "Cooking", "Graphic Novels"]
  },
  {
    id: "beth",
    name: "Beth McGlinchey",
    firstName: "Beth",
    role: "Client Partner",
    seniority: "Partner",
    email: "beth@helloseed.co.uk",
    startDate: "May 2021",
    bio: "Beth handles account coordination and quarterly roadmap alignments. She is passionate about B-Corp transparency and transitioning our model to employee-owned structures.",
    avatarSeed: "beth",
    hobbies: ["Yoga", "Vegan baking", "Pottery"]
  }
];

export const ENGAGEMENT_STEPS: EngagementStep[] = [
  {
    id: "audit",
    phase: "Week 1",
    title: "Audit and alignment",
    body: "We review your tracking, channels, and spend. You get an honest view of what is working, what is not, and where the quick wins are.",
  },
  {
    id: "fix",
    phase: "Weeks 2 to 4",
    title: "Fix and relaunch",
    body: "Tracking sorted, campaigns restructured, and creative tested properly. Changes go live with clear baselines so you can see impact quickly.",
  },
  {
    id: "scale",
    phase: "Month 2 onward",
    title: "Scale what works",
    body: "Budget follows performance. Underperforming channels get cut or reworked. Winning campaigns get more fuel and tighter optimisation.",
  },
  {
    id: "review",
    phase: "Every quarter",
    title: "Review and reset",
    body: "A working session with your team to review numbers, challenge assumptions, and set priorities for the next quarter. No passive reporting.",
  },
];
