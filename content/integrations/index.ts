import type { IntegrationGuide } from "@/content/integrations/types";
import hubspotGoogleAdsOfflineConversions from "@/content/integrations/hubspot-google-ads-offline-conversions";
import salesforceGoogleAdsOfflineConversions from "@/content/integrations/salesforce-google-ads-offline-conversions";
import hubspotGa4Attribution from "@/content/integrations/hubspot-ga4-attribution";
import calendlyAttributionTracking from "@/content/integrations/calendly-attribution-tracking";
import callTrackingCrmAdPlatformLoop from "@/content/integrations/call-tracking-crm-ad-platform-loop";
import pipedriveGoogleAdsOfflineConversions from "@/content/integrations/pipedrive-google-ads-offline-conversions";
import serverSideTaggingConsentMode from "@/content/integrations/server-side-tagging-consent-mode";
import crmMigrationWithoutLosingAttribution from "@/content/integrations/crm-migration-without-losing-attribution";

const GUIDES: IntegrationGuide[] = [
  hubspotGoogleAdsOfflineConversions,
  salesforceGoogleAdsOfflineConversions,
  hubspotGa4Attribution,
  calendlyAttributionTracking,
  callTrackingCrmAdPlatformLoop,
  pipedriveGoogleAdsOfflineConversions,
  serverSideTaggingConsentMode,
  crmMigrationWithoutLosingAttribution,
];

const BY_SLUG = new Map(GUIDES.map((guide) => [guide.slug, guide]));

export function getAllIntegrations(): IntegrationGuide[] {
  return GUIDES;
}

export function getIntegration(slug: string): IntegrationGuide | undefined {
  return BY_SLUG.get(slug);
}

export function getAllIntegrationSlugs(): string[] {
  return GUIDES.map((guide) => guide.slug);
}
