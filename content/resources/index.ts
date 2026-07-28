import type { ResourcePage } from "@/content/resources/types";
import tenderHubspotDealPipeline from "@/content/resources/tender-hubspot-deal-pipeline";
import ga4EnquiryEventSchema from "@/content/resources/ga4-enquiry-event-schema";
import googleAdsHousebuilderAccountStructure from "@/content/resources/google-ads-housebuilder-account-structure";
import negativeKeywordStarterLists from "@/content/resources/negative-keyword-starter-lists";
import offlineConversionUploadTemplate from "@/content/resources/offline-conversion-upload-template";
import attributionHealthCheck from "@/content/resources/attribution-health-check";

const RESOURCES: ResourcePage[] = [
  tenderHubspotDealPipeline,
  ga4EnquiryEventSchema,
  googleAdsHousebuilderAccountStructure,
  negativeKeywordStarterLists,
  offlineConversionUploadTemplate,
  attributionHealthCheck,
];

const BY_SLUG = new Map(RESOURCES.map((resource) => [resource.slug, resource]));

export function getAllResources(): ResourcePage[] {
  return RESOURCES;
}

export function getResource(slug: string): ResourcePage | undefined {
  return BY_SLUG.get(slug);
}

export function getAllResourceSlugs(): string[] {
  return RESOURCES.map((resource) => resource.slug);
}
