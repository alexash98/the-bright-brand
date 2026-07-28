import type { Faq } from "@/content/types";

export interface IntegrationRelatedLink {
  href: string;
  title: string;
  description: string;
}

export interface IntegrationSection {
  heading: string;
  body: string;
}

export interface IntegrationGuide {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: IntegrationSection[];
  /** UI paths that could not be verified against a live vendor UI. */
  unverifiedUiNotes: string[];
  faqs: Faq[];
  relatedLinks: IntegrationRelatedLink[];
}
