import { ServiceDetail } from "@/lib/seed-types";

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "seo",
    id: "seo",
    title: "Organic Search (SEO)",
    shortTitle: "Organic Search",
    iconName: "Search",
    metaDescription:
      "Technical SEO, content strategy and link building from senior specialists focused on sustainable traffic and qualified demand.",
    heroTitle: "Organic growth that",
    heroAccent: "compounds over time",
    heroIntro:
      "We build search visibility around commercial intent, not vanity rankings. Technical foundations, content that converts, and authority that lasts.",
    capabilities: [
      {
        title: "Technical SEO",
        description:
          "Crawlability, site architecture, Core Web Vitals and indexation fixes that remove friction before you invest in content.",
        highlights: [
          "Full technical audit with prioritised fix roadmap",
          "Core Web Vitals and mobile experience improvements",
          "Indexation, canonical and redirect governance",
        ],
      },
      {
        title: "Content strategy",
        description:
          "Topic clusters, landing pages and editorial plans aligned to how your buyers search, evaluate and convert.",
        highlights: [
          "Keyword mapping tied to commercial intent",
          "Landing page and blog briefs with clear conversion goals",
          "Content refresh cycles based on ranking and revenue data",
        ],
      },
      {
        title: "Authority and links",
        description:
          "Digital PR, partnerships and outreach that earn relevant links and brand mentions from sites that move the needle.",
        highlights: [
          "Outreach campaigns aligned to SEO priorities",
          "Link quality scoring and competitor gap analysis",
          "Brand mention tracking across trade and national press",
        ],
      },
      {
        title: "Local and vertical SEO",
        description:
          "Location pages, schema and SERP features tailored to multi-site brands and competitive category terms.",
        highlights: [
          "Location and service-area page templates at scale",
          "Schema markup for rich results and local packs",
          "Vertical-specific SERP feature optimisation",
        ],
      },
    ],
    approach: [
      {
        title: "Audit and opportunity map",
        description:
          "We review rankings, technical health, content gaps and competitor visibility to prioritise what will move revenue fastest.",
      },
      {
        title: "Fix the foundations",
        description:
          "Tracking, indexation and on-page issues get resolved first so every later investment lands on solid ground.",
      },
      {
        title: "Build and optimise",
        description:
          "New pages, refreshes and link campaigns ship in focused sprints with baselines set so impact is visible early.",
      },
      {
        title: "Review and expand",
        description:
          "Quarterly working sessions reset priorities based on performance, seasonality and where competitors are gaining ground.",
      },
    ],
    outcomes: [
      { value: "+89%", label: "Typical organic traffic uplift in year one" },
      { value: "3–6 mo", label: "Time to meaningful ranking movement" },
      { value: "1 team", label: "Technical, content and outreach aligned" },
    ],
  },
  {
    slug: "ppc",
    id: "ppc",
    title: "Paid Search (PPC)",
    shortTitle: "Paid Search",
    iconName: "MousePointerClick",
    metaDescription:
      "Google and Microsoft Ads management with data-led structure, testing and budget control focused on profitable growth.",
    heroTitle: "Paid search that",
    heroAccent: "scales with confidence",
    heroIntro:
      "Campaigns structured for clarity, creative tested with intent, and spend controlled against real conversion data.",
    capabilities: [
      {
        title: "Account architecture",
        description:
          "Campaign and ad group structure, naming conventions and bidding strategies that stay readable as spend grows.",
        highlights: [
          "Clean campaign hierarchy with documented naming rules",
          "Match type and negative keyword strategy by intent",
          "Bidding models aligned to margin and LTV targets",
        ],
      },
      {
        title: "Search and Performance Max",
        description:
          "Google and Microsoft coverage with asset groups, audience signals and feed optimisation where shopping or lead gen demands it.",
        highlights: [
          "Google Ads and Microsoft Ads managed in parallel",
          "Performance Max asset groups with audience signal tuning",
          "Shopping feed and merchant centre issue resolution",
        ],
      },
      {
        title: "Landing page alignment",
        description:
          "Message match, form UX and conversion tracking reviewed alongside ads so spend is not wasted on broken journeys.",
        highlights: [
          "Ad-to-page message match reviews on every major campaign",
          "Form UX and CRO recommendations tied to conversion rate",
          "Event tracking verified before budget scales",
        ],
      },
      {
        title: "Budget and bid management",
        description:
          "Daily pacing, seasonality planning and marginal ROAS targets that protect efficiency while finding room to scale.",
        highlights: [
          "Daily spend pacing with anomaly alerts",
          "Seasonal budget models and forecast planning",
          "Marginal ROAS analysis before budget shifts",
        ],
      },
    ],
    approach: [
      {
        title: "Audit and restructure",
        description:
          "We map waste, overlap and tracking gaps, then rebuild the account around your highest-intent terms and offers.",
      },
      {
        title: "Launch with baselines",
        description:
          "New structure goes live with conversion tracking verified and clear before/after metrics agreed upfront.",
      },
      {
        title: "Test and refine",
        description:
          "Ad copy, extensions and audiences tested in structured cycles so winners compound rather than resetting each month.",
      },
      {
        title: "Scale or cut with data",
        description:
          "Budget shifts follow marginal returns, not gut feel, with channel-level reporting your finance team can trust.",
      },
    ],
    outcomes: [
      { value: "6.2x", label: "Average ROAS across managed accounts" },
      { value: "−40%", label: "Typical wasted spend removed in audit phase" },
      { value: "Weekly", label: "Optimisation cadence with live dashboards" },
    ],
  },
  {
    slug: "social",
    id: "social",
    title: "Paid Social",
    shortTitle: "Paid Social",
    iconName: "Megaphone",
    metaDescription:
      "Meta, TikTok and Pinterest campaigns with creative testing, audience strategy and full-funnel measurement.",
    heroTitle: "Paid social that",
    heroAccent: "creates demand",
    heroIntro:
      "Platform-native creative, disciplined testing and attribution that connects top-of-funnel spend to downstream revenue.",
    capabilities: [
      {
        title: "Meta and Instagram",
        description:
          "Prospecting, retargeting and catalog campaigns with creative iteration built into the weekly rhythm.",
        highlights: [
          "Prospecting and retargeting structure by funnel stage",
          "Catalog and dynamic product ad setup and optimisation",
          "Weekly creative rotation based on fatigue and CPA trends",
        ],
      },
      {
        title: "TikTok and short-form",
        description:
          "Hook testing, UGC-style assets and spark ads designed for native performance, not repurposed TV spots.",
        highlights: [
          "Hook and format testing in structured sprints",
          "UGC-style creative briefs and creator collaboration",
          "Spark ads and whitelisted content where appropriate",
        ],
      },
      {
        title: "Pinterest and upper funnel",
        description:
          "Intent-led placements for considered purchases where discovery and save behaviour signal real interest.",
        highlights: [
          "Pin creative and catalogue sync for product-led brands",
          "Audience targeting based on interest and intent signals",
          "Upper-funnel campaigns measured against downstream conversions",
        ],
      },
      {
        title: "Creative production",
        description:
          "Concept development, static and motion variants, and rapid iteration based on in-platform performance data.",
        highlights: [
          "Concept boards with clear test hypotheses per asset",
          "Static, carousel and motion deliverables per platform spec",
          "Performance feedback loop feeding the next production cycle",
        ],
      },
    ],
    approach: [
      {
        title: "Audience and offer mapping",
        description:
          "We define segments, offers and funnel stages before spend goes live so creative briefs have a clear job to do.",
      },
      {
        title: "Creative sprints",
        description:
          "Multiple concepts launch together with structured tests on hook, format and placement to find winners fast.",
      },
      {
        title: "Scale what converts",
        description:
          "Winning ads and audiences get budget, losing variants get cut, and learnings feed the next production cycle.",
      },
      {
        title: "Connect to downstream data",
        description:
          "CAPI, offline conversions and CRM signals integrated so platform reporting reflects real business outcomes.",
      },
    ],
    outcomes: [
      { value: "4.2x", label: "ROAS achieved on high-growth social accounts" },
      { value: "2–3 wks", label: "Typical time to first creative learning cycle" },
      { value: "Multi", label: "Platform coverage from one accountable team" },
    ],
  },
  {
    slug: "digital-pr",
    id: "pr",
    title: "Digital PR",
    shortTitle: "Digital PR",
    iconName: "Users",
    metaDescription:
      "Coverage and links from relevant publications that build brand authority and support organic search performance.",
    heroTitle: "PR that earns",
    heroAccent: "authority and links",
    heroIntro:
      "Stories journalists want to run, coverage that builds trust, and links that strengthen your organic search position.",
    capabilities: [
      {
        title: "Campaign ideation",
        description:
          "Data-led stories, reactive commentary and brand narratives designed for national, trade and regional press.",
        highlights: [
          "Data studies and survey-led stories with news hook potential",
          "Reactive commentary tied to live news cycles",
          "Campaign calendars aligned to product and SEO priorities",
        ],
      },
      {
        title: "Media relations",
        description:
          "Journalist outreach, briefing documents and relationship building with editors in your category.",
        highlights: [
          "Targeted journalist lists by beat and publication tier",
          "Press releases, briefing notes and expert comment ready to send",
          "Relationship building with trade and national editors",
        ],
      },
      {
        title: "Link and mention tracking",
        description:
          "Coverage logged against domain authority, relevance and referral value so SEO and brand teams share one view.",
        highlights: [
          "Coverage logged with DA, relevance and follow/nofollow status",
          "Referral traffic and branded search impact tracked",
          "Shared reporting for SEO, brand and leadership teams",
        ],
      },
      {
        title: "Executive profiling",
        description:
          "Founder and expert commentary that positions your leadership as a credible voice in the market.",
        highlights: [
          "Media training and key message development for spokespeople",
          "Bylined articles and opinion pieces in target publications",
          "Podcast, broadcast and panel placement where relevant",
        ],
      },
    ],
    approach: [
      {
        title: "Find the angle",
        description:
          "We review search data, market trends and your proprietary insights to land stories with genuine news value.",
      },
      {
        title: "Pitch and place",
        description:
          "Targeted outreach to relevant outlets with assets ready for fast turnaround when journalists bite.",
      },
      {
        title: "Amplify coverage",
        description:
          "Wins syndicated across owned channels, sales collateral and retargeting audiences where appropriate.",
      },
      {
        title: "Measure impact",
        description:
          "Referral traffic, link acquisition and branded search movement tracked alongside reach and share of voice.",
      },
    ],
    outcomes: [
      { value: "Tier 1", label: "National and trade placements secured" },
      { value: "SEO+", label: "Authority gains that support organic growth" },
      { value: "Always-on", label: "Reactive and planned calendar combined" },
    ],
  },
  {
    slug: "creative",
    id: "creative",
    title: "Creative Strategy",
    shortTitle: "Creative Strategy",
    iconName: "Sparkles",
    metaDescription:
      "Performance creative strategy, concept development and testing frameworks that drive engagement across paid channels.",
    heroTitle: "Creative that",
    heroAccent: "moves the numbers",
    heroIntro:
      "Concepts grounded in audience insight, produced for platform realities, and tested until the data tells us to scale.",
    capabilities: [
      {
        title: "Concept development",
        description:
          "Hooks, angles and narratives mapped to funnel stage, audience segment and platform best practice.",
        highlights: [
          "Audience insight workshops and competitor creative reviews",
          "Hook libraries mapped to funnel stage and offer type",
          "Brief templates with clear test hypotheses built in",
        ],
      },
      {
        title: "Asset production",
        description:
          "Static, motion and UGC-style deliverables sized and formatted for Meta, TikTok, YouTube and display.",
        highlights: [
          "Platform-native sizing for Meta, TikTok, YouTube and display",
          "Static, motion and UGC-style deliverables from one brief",
          "Turnaround cycles aligned to media testing schedules",
        ],
      },
      {
        title: "Testing frameworks",
        description:
          "Structured matrices for message, visual and format tests so learnings stack rather than reset.",
        highlights: [
          "Message, visual and format test matrices documented upfront",
          "Winner/loser criteria agreed before spend goes live",
          "Learnings logged and fed into the next production sprint",
        ],
      },
      {
        title: "Brand consistency",
        description:
          "Guidelines applied without killing performance, so growth creative still feels unmistakably yours.",
        highlights: [
          "Brand guardrails that protect identity without blocking tests",
          "Tone and visual checks before assets go to media",
          "Performance creative that still feels unmistakably on-brand",
        ],
      },
    ],
    approach: [
      {
        title: "Insight and brief",
        description:
          "Audience research, competitor review and performance data shape a brief with a clear hypothesis to test.",
      },
      {
        title: "Produce variants",
        description:
          "Enough concepts and formats to run meaningful tests without spreading budget too thin.",
      },
      {
        title: "Launch and learn",
        description:
          "Media and creative teams review results together and feed winners back into the next production cycle.",
      },
      {
        title: "Build a library",
        description:
          "Proven hooks, templates and messaging pillars documented so future campaigns start further ahead.",
      },
    ],
    outcomes: [
      { value: "3–5x", label: "More variants tested per month vs ad-hoc production" },
      { value: "Faster", label: "Time from brief to live creative in market" },
      { value: "Aligned", label: "Media and creative owned by one team" },
    ],
  },
  {
    slug: "analytics",
    id: "analytics",
    title: "Data & Analytics",
    shortTitle: "Data & Analytics",
    iconName: "BarChart3",
    metaDescription:
      "Tracking, attribution, dashboards and reporting that give your team confidence in where growth is really coming from.",
    heroTitle: "Data you can",
    heroAccent: "act on",
    heroIntro:
      "Clean tracking, honest attribution and reporting your leadership team actually uses to make budget decisions.",
    capabilities: [
      {
        title: "Tracking implementation",
        description:
          "GA4, GTM, server-side tagging and conversion events configured and verified end to end.",
        highlights: [
          "GA4 and GTM setup with documented event taxonomy",
          "Server-side tagging for improved data accuracy and consent compliance",
          "End-to-end QA with test transactions before go-live",
        ],
      },
      {
        title: "Attribution modelling",
        description:
          "Multi-touch views, platform vs backend reconciliation and rules your team agrees on before spend scales.",
        highlights: [
          "Platform vs backend reconciliation on a regular cadence",
          "Multi-touch and assisted conversion views where data allows",
          "Attribution rules agreed with finance before budget scales",
        ],
      },
      {
        title: "Dashboards and reporting",
        description:
          "Looker, Sheets or platform-native views tailored to marketing, finance and leadership audiences.",
        highlights: [
          "Marketing, finance and leadership views from one data source",
          "Looker Studio, Sheets or platform-native dashboard builds",
          "Automated refresh on a cadence your team actually uses",
        ],
      },
      {
        title: "CRO and experiment support",
        description:
          "Test tracking, funnel analysis and landing page performance reviews tied to conversion goals.",
        highlights: [
          "Funnel drop-off analysis tied to specific traffic sources",
          "A/B test tracking setup and results interpretation",
          "Landing page performance reviews with actionable recommendations",
        ],
      },
    ],
    approach: [
      {
        title: "Audit the stack",
        description:
          "We map tags, events, data flows and gaps between ad platforms, analytics and your CRM or backend.",
      },
      {
        title: "Fix and validate",
        description:
          "Implementation changes go live with QA checklists and test purchases or leads to confirm accuracy.",
      },
      {
        title: "Report what matters",
        description:
          "Dashboards built around the metrics your team uses to allocate budget, not vanity platform stats.",
      },
      {
        title: "Maintain and evolve",
        description:
          "Ongoing monitoring as platforms, consent rules and site changes threaten to break tracking again.",
      },
    ],
    outcomes: [
      { value: "100%", label: "Conversion events verified before scale" },
      { value: "1 view", label: "Unified reporting across paid and organic" },
      { value: "Live", label: "Dashboards updated on a cadence you choose" },
    ],
  },
];

export function getServiceDetailBySlug(slug: string): ServiceDetail | undefined {
  return SERVICE_DETAILS.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICE_DETAILS.map((service) => service.slug);
}
