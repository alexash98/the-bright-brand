import type { Faq } from "@/content/types";

export interface ResourceRelatedLink {
  href: string;
  title: string;
  description: string;
}

export interface ResourceSection {
  heading: string;
  body: string;
}

export interface ResourceDownload {
  label: string;
  href: string;
  description: string;
}

export interface ResourcePage {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: ResourceSection[];
  downloads: ResourceDownload[];
  faqs: Faq[];
  relatedLinks: ResourceRelatedLink[];
}
