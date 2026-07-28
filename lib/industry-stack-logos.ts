import type { ClientLogo } from "@/lib/site-types";
import type { Industry } from "@/content/types";

const logo = (
  name: string,
  key: string,
  file: string,
  extras?: Partial<ClientLogo>,
): ClientLogo => ({
  name,
  key,
  logo: file,
  folder: "platform-logos",
  ...extras,
});

const wordmark = (name: string, key: string): ClientLogo => ({
  name,
  key,
});

const HUBSPOT = logo("HubSpot", "hubspot", "hubspot.png", {
  widthClass: "w-[8.4rem]",
  preserveColors: true,
});
const SALESFORCE = logo("Salesforce", "salesforce", "salesforce.png", {
  widthClass: "w-[10.8rem]",
  heightClass: "h-[3.4rem] sm:h-[3.8rem]",
  preserveColors: true,
});
const META = logo("Meta", "meta", "meta.png", {
  widthClass: "w-[7.4rem]",
  preserveColors: true,
});
const PIPEDRIVE = logo("Pipedrive", "pipedrive", "pipedrive.png", {
  widthClass: "w-[9rem]",
});
const GOOGLE: ClientLogo = {
  name: "Google",
  key: "google",
  logo: "google-partner.png",
  folder: "partner-logos",
  widthClass: "w-[8.2rem]",
  preserveColors: true,
};

const BY_PILLAR: Record<string, ClientLogo[]> = {
  construction: [
    wordmark("Procore", "procore"),
    wordmark("Aconex", "aconex"),
    wordmark("Glenigan", "glenigan"),
    wordmark("Barbour ABI", "barbour"),
    HUBSPOT,
    SALESFORCE,
    META,
    GOOGLE,
  ],
  "travel-tour-operators": [
    wordmark("Seaware", "seaware"),
    wordmark("Sabre Cruise", "sabre-cruise"),
    wordmark("Amadeus", "amadeus"),
    wordmark("Traveltek", "traveltek"),
    wordmark("ResRequest", "resrequest"),
    wordmark("CallRail", "callrail"),
    HUBSPOT,
    SALESFORCE,
    META,
    GOOGLE,
  ],
  "b2b-saas-and-platforms": [
    wordmark("Canopy", "canopy"),
    wordmark("FormX", "formx"),
    HUBSPOT,
    SALESFORCE,
    PIPEDRIVE,
    META,
    GOOGLE,
    wordmark("LinkedIn", "linkedin"),
  ],
  // Legacy key kept so any stale parent refs still resolve during rollout.
  "procurement-supplier-management": [
    wordmark("Canopy", "canopy"),
    wordmark("FormX", "formx"),
    HUBSPOT,
    SALESFORCE,
    PIPEDRIVE,
    META,
    GOOGLE,
    wordmark("LinkedIn", "linkedin"),
  ],
  "medical-healthcare": [
    wordmark("Cliniko", "cliniko"),
    wordmark("HealthEngine", "healthengine"),
    wordmark("CallRail", "callrail"),
    HUBSPOT,
    SALESFORCE,
    META,
    GOOGLE,
  ],
  "legal-solicitors": [
    wordmark("Clio", "clio"),
    wordmark("LEAP", "leap"),
    wordmark("CallRail", "callrail"),
    HUBSPOT,
    SALESFORCE,
    META,
    GOOGLE,
  ],
  "wealth-management": [
    wordmark("Intelliflo", "intelliflo"),
    wordmark("Xplan", "xplan"),
    HUBSPOT,
    SALESFORCE,
    META,
    GOOGLE,
    wordmark("LinkedIn", "linkedin"),
  ],
  "commercial-insurance": [
    wordmark("Applied Epic", "applied-epic"),
    wordmark("Acturis", "acturis"),
    wordmark("CallRail", "callrail"),
    HUBSPOT,
    SALESFORCE,
    META,
    GOOGLE,
  ],
};

/**
 * Dark-ticker logos: single-colour SVGs that render cleanly as white
 * silhouettes via brightness-0 invert, plus text wordmarks for niche brands.
 */
const SABRE_LOGO = logo("Sabre", "sabre", "sabre-official.svg");
const AMADEUS_LOGO = logo("Amadeus", "amadeus", "amadeus-official.svg");
const HUBSPOT_LOGO = logo("HubSpot", "hubspot", "hubspot-official.svg");
const SALESFORCE_LOGO = logo("Salesforce", "salesforce", "salesforce-wordmark.svg");
const META_LOGO = logo("Meta", "meta", "meta-official.svg");
const GOOGLE_LOGO = logo("Google", "google", "google-g.svg");
const TRAVELTEK_LOGO = logo("Traveltek", "traveltek", "traveltek.svg");
/** Simple Icons marks that invert cleanly on the dark construction ticker. */
const TRIMBLE_LOGO = logo("Trimble", "trimble", "trimble.svg");
const LINKEDIN_LOGO = logo("LinkedIn", "linkedin", "linkedin.svg");

const BY_SLUG: Record<string, ClientLogo[]> = {
  "cruise-operators": [
    wordmark("Seaware", "seaware"),
    SABRE_LOGO,
    AMADEUS_LOGO,
    TRAVELTEK_LOGO,
    wordmark("ResRequest", "resrequest"),
    wordmark("CallRail", "callrail"),
    HUBSPOT_LOGO,
    SALESFORCE_LOGO,
    META_LOGO,
    GOOGLE_LOGO,
  ],
  "luxury-tailor-made-travel": [
    wordmark("CallRail", "callrail"),
    AMADEUS_LOGO,
    wordmark("ResRequest", "resrequest"),
    TRAVELTEK_LOGO,
    wordmark("Seaware", "seaware"),
    HUBSPOT_LOGO,
    SALESFORCE_LOGO,
    META_LOGO,
    GOOGLE_LOGO,
  ],
  "safari-adventure-and-expedition-operators": [
    wordmark("ResRequest", "resrequest"),
    wordmark("CallRail", "callrail"),
    AMADEUS_LOGO,
    TRAVELTEK_LOGO,
    HUBSPOT_LOGO,
    SALESFORCE_LOGO,
    META_LOGO,
    GOOGLE_LOGO,
  ],
  /**
   * Same dark-ticker pattern as travel: niche construction wordmarks +
   * official CRM/ads SVGs that invert white. Travel entries above unchanged.
   */
  "commercial-fit-out": [
    // TODO: replace FormX/Canopy/Firmbase wordmarks with official logo assets when available
    wordmark("FormX", "formx"),
    wordmark("Canopy", "canopy"),
    wordmark("Glenigan", "glenigan"),
    wordmark("Barbour ABI", "barbour"),
    wordmark("Firmbase", "firmbase"),
    wordmark("Procore", "procore"),
    wordmark("Aconex", "aconex"),
    wordmark("Constructionline", "constructionline"),
    wordmark("CHAS", "chas"),
    HUBSPOT_LOGO,
    SALESFORCE_LOGO,
    GOOGLE_LOGO,
    LINKEDIN_LOGO,
    wordmark("Apollo", "apollo"),
  ],
  "building-services": [
    wordmark("Procore", "procore"),
    wordmark("Glenigan", "glenigan"),
    wordmark("Barbour ABI", "barbour"),
    TRIMBLE_LOGO,
    wordmark("Constructionline", "constructionline"),
    wordmark("Apollo", "apollo"),
    HUBSPOT_LOGO,
    SALESFORCE_LOGO,
    LINKEDIN_LOGO,
    GOOGLE_LOGO,
  ],
  "civils-infrastructure": [
    wordmark("Procore", "procore"),
    wordmark("Glenigan", "glenigan"),
    wordmark("Barbour ABI", "barbour"),
    wordmark("Tussell", "tussell"),
    wordmark("Aconex", "aconex"),
    wordmark("Constructionline", "constructionline"),
    HUBSPOT_LOGO,
    SALESFORCE_LOGO,
    LINKEDIN_LOGO,
    GOOGLE_LOGO,
  ],
  "facilities-management": [
    // TODO: replace CAFM / accreditation wordmarks with official logo assets when available
    wordmark("FormX", "formx"),
    wordmark("Canopy", "canopy"),
    wordmark("Concept", "concept-cafm"),
    wordmark("Planon", "planon"),
    wordmark("Service Works", "service-works-qfm"),
    wordmark("FSI", "fsi-concept-evolution"),
    wordmark("Glenigan", "glenigan"),
    wordmark("Barbour ABI", "barbour"),
    wordmark("Constructionline", "constructionline"),
    wordmark("CHAS", "chas"),
    wordmark("SafeContractor", "safecontractor"),
    HUBSPOT_LOGO,
    SALESFORCE_LOGO,
    GOOGLE_LOGO,
    LINKEDIN_LOGO,
    wordmark("Apollo", "apollo"),
  ],
  "main-contractors": [
    wordmark("FormX", "formx"),
    wordmark("Canopy", "canopy"),
    wordmark("Glenigan", "glenigan"),
    wordmark("Barbour ABI", "barbour"),
    wordmark("Tussell", "tussell"),
    wordmark("Procore", "procore"),
    wordmark("Aconex", "aconex"),
    wordmark("Constructionline", "constructionline"),
    wordmark("CHAS", "chas"),
    wordmark("Achilles", "achilles"),
    HUBSPOT_LOGO,
    SALESFORCE_LOGO,
    GOOGLE_LOGO,
    LINKEDIN_LOGO,
    wordmark("Apollo", "apollo"),
  ],
  "residential-home-builders": [
    wordmark("FormX", "formx"),
    wordmark("Canopy", "canopy"),
    // TODO: replace Rightmove / Zoopla / OnTheMarket wordmarks with official logo assets when available
    wordmark("Rightmove", "rightmove"),
    wordmark("Zoopla", "zoopla"),
    wordmark("OnTheMarket", "onthemarket"),
    wordmark("Glenigan", "glenigan"),
    wordmark("Barbour ABI", "barbour"),
    // TODO: swap CallRail wordmark for callrail.svg / callrail-on-dark.svg if invert rendering is preferred
    wordmark("CallRail", "callrail"),
    HUBSPOT_LOGO,
    SALESFORCE_LOGO,
    GOOGLE_LOGO,
    META_LOGO,
    wordmark("Apollo", "apollo"),
  ],
  "supplier-management-platforms": [
    wordmark("Canopy", "canopy"),
    wordmark("FormX", "formx"),
    // TODO: replace SAP Ariba / Coupa / Jaggaer / Oracle Procurement / DocuSign wordmarks with official logo assets when available
    wordmark("SAP Ariba", "sap-ariba"),
    wordmark("Coupa", "coupa"),
    wordmark("Jaggaer", "jaggaer"),
    wordmark("Oracle Procurement", "oracle-procurement"),
    wordmark("DocuSign", "docusign"),
    HUBSPOT_LOGO,
    SALESFORCE_LOGO,
    wordmark("Apollo", "apollo"),
    LINKEDIN_LOGO,
    GOOGLE_LOGO,
    META_LOGO,
  ],
  "enterprise-saas": [
    wordmark("FormX", "formx"),
    wordmark("Canopy", "canopy"),
    HUBSPOT_LOGO,
    SALESFORCE_LOGO,
    wordmark("Apollo", "apollo"),
    // TODO: replace Gong / Slack wordmarks with official logo assets when available
    wordmark("Gong", "gong"),
    wordmark("Slack", "slack"),
    GOOGLE_LOGO,
    LINKEDIN_LOGO,
    META_LOGO,
  ],
  "consulting-firms": [
    wordmark("Canopy", "canopy"),
    HUBSPOT_LOGO,
    SALESFORCE_LOGO,
    LINKEDIN_LOGO,
    GOOGLE_LOGO,
    wordmark("Apollo", "apollo"),
    // TODO: replace Gong / Microsoft Dynamics wordmarks with official logo assets when available
    wordmark("Gong", "gong"),
    wordmark("Microsoft Dynamics", "microsoft-dynamics"),
    META_LOGO,
  ],
};

const DEFAULT_STACK: ClientLogo[] = [
  HUBSPOT,
  SALESFORCE,
  META,
  GOOGLE,
  PIPEDRIVE,
  wordmark("CallRail", "callrail"),
];

/** Tools and platforms we wire for this industry — shown under the hero CTA. */
export function getIndustryStackLogos(industry: Industry): ClientLogo[] {
  const bySlug = BY_SLUG[industry.slug];
  if (bySlug) return bySlug;

  const byParent = industry.parent ? BY_PILLAR[industry.parent] : undefined;
  if (byParent) return byParent;

  const byPillar = BY_PILLAR[industry.slug];
  if (byPillar) return byPillar;

  return DEFAULT_STACK;
}
