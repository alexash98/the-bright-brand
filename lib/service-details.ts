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
    shortTitle: "PPC Agency, London",
    iconName: "MousePointerClick",
    metaDescription:
      "London PPC agency delivering paid search across Google, Microsoft and Amazon. Data-led campaigns built for sales, leads and scalable ROAS.",
    heroTitle: "Your PPC performance,",
    heroAccent: "accelerated",
    heroIntro:
      "Unlock the full potential of paid search through data, smart automation and creative thinking that converts.",
    heroIntroSecondary:
      "We analyse search behaviour so we know exactly where your customers are looking. Whether you focus on Google and Bing or expand across every platform where demand is building, we tailor plans to your goals, margins and market.",
    whySection: {
      eyebrow: "Why paid search?",
      title: "Why do you need a PPC agency?",
      subtitle:
        "PPC boosts visibility, drives immediate traffic, and increases sales effectively.",
      body: [
        "From first search to the moment someone is ready to convert, paid search is one of the biggest drivers of qualified website traffic. Running it well means managing bids, match types, creative, landing pages, feeds and reporting at once. Skill and dedication are what turn spend into advantage.",
        "Our London-based team acts as an extension of your marketing function, driving sales, generating leads and building brand awareness. We challenge assumptions, test aggressively and optimise continuously so your budget works harder than the competition's.",
        "With experience across ecommerce, B2B, travel, hospitality and professional services, our strategies are built with precision, fuelled by data and shaped around how people actually search for your offer.",
      ],
    },
    capabilitiesHeading: "PPC services",
    capabilitiesIntro:
      "Our approach harnesses the full spectrum of paid search tools, curating campaigns on Google, Microsoft and beyond. We do not just meet business needs. We build targeted, dynamic strategies designed to move revenue, ROAS and market share.",
    capabilities: [
      {
        title: "Paid Search",
        description:
          "Search plays a central role in the path to purchase, which makes Paid Search integral to any growth plan. Our analysts thrive on continual optimisation, meticulous campaign management and ROI-led decision making at local or global scale.",
        highlights: [
          "Google Ads and Microsoft Ads campaign management",
          "Keyword strategy, match types and negative lists by intent",
          "Ad copy, extensions and landing page message match",
        ],
      },
      {
        title: "Performance Max",
        description:
          "Shopping and feed-led campaigns are core to ecommerce performance. We build tailored Performance Max structures, asset groups and audience signals so products reach the right customers at the right moment.",
        highlights: [
          "Asset group structure and audience signal strategy",
          "Shopping feed alignment and merchant centre support",
          "Product-level reporting tied to margin and ROAS",
        ],
      },
      {
        title: "Demand Gen",
        description:
          "Reach potential customers when they are discovering new content and brands. With placements across Gmail, YouTube and Discover feeds, Demand Gen campaigns build awareness and drive action in upper-funnel moments.",
        highlights: [
          "Audience-led prospecting across Google surfaces",
          "Creative formats built for discovery placements",
          "Full-funnel measurement from impression to conversion",
        ],
      },
      {
        title: "Display",
        description:
          "Re-engage existing customers or attract new ones with strategic targeting across Google's Display Network. We match formats and placements to your audience, offer and funnel stage.",
        highlights: [
          "Remarketing and prospecting display structures",
          "Responsive display and image creative coordination",
          "Placement and audience exclusions to reduce waste",
        ],
      },
      {
        title: "YouTube and video",
        description:
          "Put your brand and products in front of the right viewers with video campaigns built for awareness, consideration and conversion. From short-form hooks to longer storytelling, we align creative to objective.",
        highlights: [
          "YouTube awareness, consideration and action campaigns",
          "Video creative briefing aligned to platform best practice",
          "View-through and engaged-view reporting tied to downstream sales",
        ],
      },
      {
        title: "App campaigns",
        description:
          "Increase downloads, improve in-app engagement and extend customer lifetime value with dedicated app campaigns across Google App Campaigns and Apple Search Ads.",
        highlights: [
          "Google App Campaigns for Android and iOS growth",
          "Apple Search Ads for high-intent app store visibility",
          "In-app event tracking and cohort performance analysis",
        ],
      },
      {
        title: "Feed optimisation",
        description:
          "Strong product data helps ad platforms match inventory to search demand. We work with feed tools and merchant centre setup so algorithms understand your catalogue and surface the right SKUs.",
        highlights: [
          "Product title, attribute and category optimisation",
          "Feed error monitoring and merchant centre hygiene",
          "Custom labels for margin, seasonality and priority SKUs",
        ],
      },
      {
        title: "Amazon Ads",
        description:
          "Whether you are launching on Amazon or scaling existing activity, we help brands grow sales and protect margin on a highly competitive marketplace through efficient sponsored product and brand strategies.",
        highlights: [
          "Sponsored Products, Brands and Display campaign setup",
          "Keyword and ASIN targeting based on search intent",
          "Market share and profitability reporting by SKU and category",
        ],
      },
      {
        title: "PPC consultancy",
        description:
          "For in-house teams that want senior input without full outsourcing, our specialists advise on strategy, spot opportunities and share practical training so your campaigns stay best in class.",
        highlights: [
          "Account audits and strategic roadmap sessions",
          "Training for in-house marketers and media buyers",
          "Ongoing advisory on platform updates and test plans",
        ],
      },
    ],
    approachIntro:
      "We combine audit discipline with rapid testing and honest reporting, so you see where spend is working and where it needs to change.",
    approach: [
      {
        title: "Audit and restructure",
        description:
          "We map waste, overlap and tracking gaps, then rebuild the account around your highest-intent terms, products and offers.",
      },
      {
        title: "Launch with baselines",
        description:
          "New structure goes live with conversion tracking verified and clear before/after metrics agreed upfront.",
      },
      {
        title: "Test and refine",
        description:
          "Ad copy, extensions, audiences and bids tested in structured cycles so winners compound rather than resetting each month.",
      },
      {
        title: "Scale or cut with data",
        description:
          "Budget shifts follow marginal returns, not gut feel, with channel-level reporting your finance team can trust.",
      },
    ],
    outcomes: [
      { value: "6.2x", label: "Average ROAS across managed accounts" },
      { value: "£5M+", label: "Yearly ad spend managed for clients" },
      { value: "Weekly", label: "Optimisation cadence with live dashboards" },
    ],
    faqsHeading: "PPC agency FAQs",
    faqs: [
      {
        question: "What does a PPC agency do?",
        answer:
          "A PPC agency manages paid search campaigns on platforms like Google Ads and Microsoft Ads. That includes keyword strategy, campaign structure, bidding, creative, landing page alignment, tracking and ongoing optimisation to improve leads, sales and return on ad spend.",
      },
      {
        question: "How is PPC different from SEO?",
        answer:
          "PPC delivers immediate visibility by paying for placement in search results, while SEO builds organic rankings over time. Most growth plans use both: PPC for speed, testing and demand capture, SEO for sustainable long-term traffic.",
      },
      {
        question: "Do you manage Google and Microsoft Ads?",
        answer:
          "Yes. We manage campaigns across Google Ads and Microsoft Ads, and can extend into Amazon Ads, YouTube, Display, Demand Gen and Performance Max depending on where your customers search and how you sell.",
      },
      {
        question: "How quickly can I expect results from PPC?",
        answer:
          "Paid search can drive traffic and conversions as soon as campaigns go live, but strong performance usually comes from structured testing and account refinement over the first few weeks. We set baselines early so improvements are visible and measurable.",
      },
      {
        question: "Can you work alongside our in-house team?",
        answer:
          "Absolutely. We can fully manage your accounts or provide consultancy, audits and training for in-house marketers who want senior paid search support without handing over everything.",
      },
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
    slug: "attribution",
    id: "attribution",
    title: "Attribution Systems",
    shortTitle: "Attribution",
    iconName: "Network",
    metaDescription:
      "Custom CRM dashboards and attribution models that show exactly what every channel is worth to your business.",
    heroTitle: "Attribution that shows",
    heroAccent: "what each channel is worth",
    heroIntro:
      "Custom CRM dashboards and multi-touch attribution that connect spend to revenue, so budget follows what actually drives growth.",
    capabilities: [
      {
        title: "CRM dashboard builds",
        description:
          "Custom reporting views in HubSpot, Salesforce, Pipedrive and other CRMs tailored to how your team sells and reports.",
        highlights: [
          "Pipeline and revenue views aligned to marketing source data",
          "Role-based dashboards for marketing, sales and leadership",
          "Automated refresh cycles so reporting stays current",
        ],
      },
      {
        title: "Multi-touch attribution",
        description:
          "Models that map the full path from first touch to closed revenue, not just last-click platform reporting.",
        highlights: [
          "First-touch, last-touch and weighted models where data allows",
          "Platform vs CRM reconciliation on a regular cadence",
          "Rules agreed with finance before spend scales",
        ],
      },
      {
        title: "Channel value mapping",
        description:
          "Clear readouts on what SEO, paid search, paid social and other channels contribute to pipeline and revenue.",
        highlights: [
          "Cost per qualified lead and revenue by channel",
          "Assisted conversion views across the full funnel",
          "Spend efficiency scores your team can act on weekly",
        ],
      },
      {
        title: "Data integration",
        description:
          "Connections between ad platforms, analytics, CRM and offline sources so attribution reflects real business outcomes.",
        highlights: [
          "GA4, ad platform and CRM data stitched into one view",
          "Offline conversion and sales data fed back to media platforms",
          "Documentation and QA so the model stays trustworthy",
        ],
      },
    ],
    approach: [
      {
        title: "Audit the data stack",
        description:
          "We map tracking, CRM fields and reporting gaps before building anything, so dashboards reflect reality from day one.",
      },
      {
        title: "Design the model",
        description:
          "Attribution rules and dashboard structure agreed with marketing, sales and finance before development starts.",
      },
      {
        title: "Build and validate",
        description:
          "Dashboards and integrations built, tested against known deals and spend, then refined until numbers reconcile.",
      },
      {
        title: "Train and iterate",
        description:
          "Your team gets a clear read on channel value, with ongoing tweaks as channels, offers and data sources evolve.",
      },
    ],
    outcomes: [
      { value: "Full-funnel", label: "Visibility from first touch to closed revenue" },
      { value: "CRM-native", label: "Dashboards built where your team already works" },
      { value: "Actionable", label: "Channel readouts your team uses for budget calls" },
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
