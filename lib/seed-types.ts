export interface PressPublication {
  id: string;
  name: string;
  logo: string;
}

export interface ClientLogo {
  name: string;
  logo: string;
  seed: string;
  scale?: number;
  folder?: "client-logos" | "platform-logos" | "partner-logos";
  widthClass?: string;
  heightClass?: string;
  preserveColors?: boolean;
}

export interface NavItem {
  label: string;
  url: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  linkUrl: string;
}

export interface ServiceCapability {
  title: string;
  description: string;
  highlights: string[];
}

export interface ServiceApproachStep {
  title: string;
  description: string;
}

export interface ServiceOutcome {
  value: string;
  label: string;
}

export interface ServiceWhySection {
  eyebrow?: string;
  title: string;
  body: string[];
}

export interface ServiceTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  id: string;
  title: string;
  shortTitle: string;
  iconName: string;
  metaDescription: string;
  heroTitle: string;
  heroAccent: string;
  heroIntro: string;
  heroIntroSecondary?: string;
  whySection?: ServiceWhySection;
  capabilitiesHeading?: string;
  capabilitiesIntro?: string;
  capabilities: ServiceCapability[];
  approach: ServiceApproachStep[];
  approachIntro?: string;
  outcomes: ServiceOutcome[];
  testimonial?: ServiceTestimonial;
  faqs?: ServiceFaq[];
  faqsHeading?: string;
}

export interface StatCard {
  stat: string;
  label: string;
}

export interface CaseStudyTrendPoint {
  label: string;
  value: number;
  displayValue: string;
}

export interface CaseStudyMetricComparison {
  title: string;
  beforeLabel: string;
  afterLabel: string;
  beforeValue: string;
  afterValue: string;
  changeLabel: string;
  beforeRatio: number;
  afterRatio: number;
}

export interface CaseStudyVisualSection {
  eyebrow: string;
  title: string;
  description: string;
  revenueTrend: CaseStudyTrendPoint[];
  comparisons: CaseStudyMetricComparison[];
}

export interface CaseStudyDetail {
  slug: string;
  carouselId: string;
  clientName: string;
  clientLogo?: string;
  clientLogoInvert?: boolean;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroAccent?: string;
  heroIntro: string;
  heroStats: StatCard[];
  imageUrl: string;
  category: CaseStudy["category"];
  bodyEyebrow: string;
  bodyTitle: string;
  bodyDescription: string;
  body: string[];
  visualSection?: CaseStudyVisualSection;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientName: string;
  category: "Paid" | "Organic" | "Social" | "PR";
  tagline: string;
  highlightStat: string;
  highlightLabel: string;
  logoText: string;
  description: string;
  challenge: string;
  approach: string;
  results: string[];
  stats: StatCard[];
  imageUrl: string;
  clientLogo?: string;
  clientLogoInvert?: boolean;
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  company: string;
  imageSrc?: string;
  imageAlt?: string;
  avatarSeed?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  firstName: string;
  role: string;
  seniority: string;
  email: string;
  startDate: string;
  bio: string;
  avatarSeed: string;
  hobbies: string[];
}

export interface PlaybookRow {
  from: string;
  to: string;
}

export interface AboutWorkPillar {
  title: string;
  body: string;
}

export interface AboutHeroHighlight {
  value: string;
  label: string;
}

export interface AboutBridgeHighlight {
  title: string;
  body: string;
  icon: "senior" | "connected" | "reporting";
}

export interface AboutComparisonSection {
  eyebrow: string;
  title: string;
  highlight: string;
  leftTitle: string;
  rightTitle: string;
  typical: string[];
  ours: string[];
  bridgeHighlights: AboutBridgeHighlight[];
}

export interface AboutCultureContent {
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  pillars: AboutWorkPillar[];
}

export interface AboutFeaturedWorkContent {
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  caseStudyIds: string[];
}

export interface EngagementStep {
  id: string;
  phase: string;
  title: string;
  body: string;
}

export interface AccordionItem {
  id: string;
  title: string;
  body: string;
}

export interface ServiceHighlightQuote {
  id: string;
  company: string;
  quote: string;
  author?: string;
  role?: string;
  imageSrc: string;
  imageAlt: string;
}

export type BlogPostCategory =
  | "PPC"
  | "SEO"
  | "Paid Social"
  | "Strategy"
  | "CRO";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  category: BlogPostCategory;
  authorName: string;
  authorRole: string;
  publishedAt: string;
  updatedAt: string;
  readTimeMinutes: number;
  imageUrl: string;
  imageAlt: string;
  body: string[];
}
