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

export interface StatCard {
  stat: string;
  label: string;
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
