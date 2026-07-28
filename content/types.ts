export type ServiceSlug =
  | "google-ads-management"
  | "linkedin-b2b-advertising"
  | "crm-implementation"
  | "conversion-tracking-attribution"
  | "call-tracking"
  | "landing-pages-cro"
  | "marketing-automation"
  | "outbound-lead-generation"
  | "reporting-dashboards";

export interface Proof {
  client: string;
  anonymised: boolean;
  situation: string;
  built: string;
  results: { metric: string; before?: string; after: string; window: string }[];
  signedOff: boolean; // page cannot build if false and anonymised is false
  /** What is real vs composite when anonymised. Shown under the badge. */
  honestyNote?: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Section {
  heading: string;
  body: string;
}

export interface MoneyPage {
  service: ServiceSlug;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string; // must be unique sitewide
  sections: Section[];
  proof: Proof[]; // min 1
  faqs: Faq[]; // min 5
  relatedIndustries: string[];
}

export interface InsightBar {
  label: string;
  /** 0 to 100 for bar width */
  value: number;
  display: string;
}

export interface IndustryInsightChart {
  title: string;
  /** Always label illustrative models as such in the UI */
  caption: string;
  bars: InsightBar[];
}

export interface ScatterPoint {
  x: number;
  y: number;
  label: string;
}

export interface ScatterChart {
  title: string;
  caption: string;
  xLabel: string;
  yLabel: string;
  /** x and y should generally sit in 0 to 100 for the SVG plot */
  points: ScatterPoint[];
}

export interface AudiencePersona {
  role: string;
  /** Optional. Prefer qualitative notes over invented percentages. */
  share?: string;
  note: string;
}

export interface MarketStat {
  value: string;
  label: string;
  /**
   * Optional public citation. Never put internal paths (CLIENTS.md) on client pages.
   * Prefer omitting source when the line is an operating principle, not a published stat.
   */
  source?: string;
  /** So what, and what we do about it. Required for sharp vertical pages. */
  implication?: string;
}

/** Who and what we need access to so media can see real revenue. */
export interface CommercialAccess {
  intro?: string;
  people: { role: string; need: string }[];
  systems: { name: string; need: string }[];
  outcome: string;
}

export interface IndustryHeroVisual {
  eyebrow: string;
  title: string;
  /** Required for default variant; omit when variant is contrast. */
  stats?: { value: string; label: string }[];
  /** Deprecated on hubs. Illustrative charts are no longer rendered. */
  charts?: IndustryInsightChart[];
  /** Opt-in contrast variant: before/after rows instead of stat pairs. */
  variant?: "default" | "contrast";
  /** Strapline below the heading (contrast variant only). */
  strapline?: string;
  /** Column headers for contrast variant. */
  contrastHeaders?: { left: string; right: string };
  /** Before → after rows for contrast variant. */
  contrastRows?: { before: string; after: string }[];
}

/** Commercial stage labels for PipelineDiagram (not narrative pipelineShape copy). */
export interface PipelineStage {
  name: string;
  note?: string;
}

export interface Industry {
  slug: string;
  name: string;
  parent?: string; // for sub-verticals, drives nav only, not URL
  type: "pillar" | "sub";
  metaTitle: string;
  metaDescription: string;
  /**
   * Optional shorter H1. Breadcrumb and meta keep `name`; use when the full
   * industry name is too long for a two-line hero headline.
   */
  heroH1?: string;
  /**
   * Short hero lead (about 35 to 55 words). Shown in the dark hero.
   * Longer detail belongs in pipelineShape, not here.
   */
  intro: string;
  /**
   * One-sentence wedge under the H1: why a specialist beats a cheaper generalist.
   * Prefer this over burying the differentiator across later modules.
   */
  wedge?: string;
  /**
   * Homepage-style proof band under the hero: heading, body, optional Ask AI prompt,
   * and a quote id from SERVICE_HIGHLIGHT_QUOTES (e.g. "anywhere" for travel).
   */
  proofLead?: {
    heading: string;
    body: string;
    askAiPrompt?: string;
    /** Primary quote id from SERVICE_HIGHLIGHT_QUOTES / HELD. */
    quoteId?: string;
    /** Optional extra quotes for a multi-testimonial slider (opt-in). */
    quoteIds?: string[];
    quoteNote?: string;
  };
  /** Override default pipeline H2. */
  pipelineHeading?: string;
  /** Override default services section copy. */
  servicesHeading?: string;
  servicesIntro?: string;
  /** Override "Open build" CTA on service cards. Set null to suppress label. */
  serviceCardCtaLabel?: string | null;
  /** Optional right-rail visual for the hero (stats only; charts ignored). */
  heroVisual?: IndustryHeroVisual;
  /** Optional below-fold insight panels (age mix, close rates, payback). */
  insightCharts?: IndustryInsightChart[];
  /** Cited or illustrative market size / firm-count stats */
  marketStats?: MarketStat[];
  /** Decision-maker mix for this sub-industry */
  audience?: AudiencePersona[];
  /**
   * Visual: who we sit with + systems we need access to, to pin revenue and scale.
   * Prefer this over a plain audience list on client-facing hubs.
   */
  commercialAccess?: CommercialAccess;
  /** Enquiry hour-of-day or day-of-week model */
  enquiryTiming?: IndustryInsightChart;
  /** Enquiry-to-close duration model */
  cycleTiming?: IndustryInsightChart;
  /** e.g. AOV vs cycle length, or CPL vs close rate */
  scatterCharts?: ScatterChart[];
  /** How to find and target buyers: databases, SIC, lists */
  targetingNotes?: Section[];
  /**
   * Optional copy overrides for the commercial briefing / market panel.
   * Use on sharp verticals (e.g. cruise) when the default hub wording is too generic.
   */
  briefing?: {
    eyebrow?: string;
    heading?: string;
    intro?: string;
    marketHeading?: string;
    targetingHeading?: string;
  };
  /** Optional FAQ section heading override. */
  faqHeading?: string;
  /** Richer FAQ presentation for director-facing verticals. */
  faqVariant?: "default" | "editorial";
  /**
   * First-90-days / commercials band for sharp verticals that need price and
   * risk clarity on the page, not only in FAQs.
   */
  engagement?: {
    eyebrow?: string;
    heading: string;
    intro?: string;
    commercials: { heading: string; body: string };
    steps: { name: string; body: string }[];
  };
  /** Override the footer CTA copy. */
  cta?: {
    heading: string;
    body: string;
    buttonLabel?: string;
    href?: string;
  };
  /** Override hero primary / secondary CTA labels. */
  heroCta?: {
    primaryLabel?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
  /** Optional CRM-style stages for PipelineDiagram on the pillar */
  pipelineStages?: PipelineStage[];
  pipelineShape: Section[];
  infrastructure: Section[];
  /** Common CRMs / reservation / practice systems in this vertical. */
  stackNotes?: Section[];
  proof: Proof[];
  faqs: Faq[]; // min 6
  relatedIndustries: { slug: string; why: string }[];
  moneyPages: MoneyPage[];
  /** Bright Brand resource slugs under /resources/[slug] */
  resourceSlugs?: string[];
  /** @deprecated Calculators removed; kept optional for older content files. */
  toolSlugs?: string[];
  /** Blog post tags used to surface related reading at page foot */
  blogTags?: string[];
}
