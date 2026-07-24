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

export interface Industry {
  slug: string;
  name: string;
  parent?: string; // for sub-verticals, drives nav only, not URL
  type: "pillar" | "sub";
  metaTitle: string;
  metaDescription: string;
  intro: string;
  pipelineShape: Section[];
  infrastructure: Section[];
  proof: Proof[];
  faqs: Faq[]; // min 6
  relatedIndustries: { slug: string; why: string }[];
  moneyPages: MoneyPage[];
}
