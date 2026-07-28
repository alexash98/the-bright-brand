import type { IntegrationGuide } from "@/content/integrations/types";

const guide: IntegrationGuide = {
  "slug": "server-side-tagging-consent-mode",
  "name": "Server-side tagging and Consent Mode",
  "metaTitle": "Server-Side Tagging Consent Mode Guide",
  "metaDescription": "Implement server-side Google Tag Manager with Consent Mode v2 signals, event deduplication and compliant ad_user_data handling.",
  "intro": "Run a server-side GTM container with Consent Mode v2 so measurement degrades gracefully when consent is denied and stays accurate when granted.",
  "unverifiedUiNotes": [
    "Consent management platform admin screens differ by vendor. Map the Consent Mode signal names below to your CMP's Google consent integration.",
    "sGTM client and tag templates evolve; use the current GA4 and Google Ads tag templates in your server container."
  ],
  "sections": [
    {
      "heading": "What this integration solves",
      "body": "Browser-only tagging loses events to blockers and breaks when consent is denied without a modelling plan. Server-side tagging with Consent Mode v2 lets you respect ad_storage, ad_user_data, ad_personalization and analytics_storage while still receiving first-party, consented hits through your own subdomain."
    },
    {
      "heading": "Prerequisites and permissions",
      "body": "A server container hosted on Cloud Run or equivalent, first-party subdomain (for example metrics.example.com), web GTM container, CMP that can write the Consent Mode API before tags fire, and legal sign-off on the cookie banner categories."
    },
    {
      "heading": "The build, step by step",
      "body": "1. Deploy sGTM with a first-party custom domain and SSL.\n\n2. In web GTM, set Consent Overview defaults (usually denied for ad storage in the UK/EU until grant).\n\n3. CMP callbacks call gtag('consent','update',{...}) with ad_storage, analytics_storage, ad_user_data, ad_personalization.\n\n4. Route GA4 via the server container client. Forward Google Ads conversion tags server-side where templates allow.\n\n5. Pass consent state to the server event so server tags also gate enhanced conversions.\n\n6. Deduplicate browser and server events with event_id."
    },
    {
      "heading": "Gotchas",
      "body": "Default granted consent is a compliance failure in many jurisdictions. Enhanced conversions must not send user data when ad_user_data is denied. First-party cookies still need transparent notice. Healthcare and special category data needs extra controls beyond this guide. Region-specific consent for US state laws if you sell there."
    },
    {
      "heading": "How to verify it is working",
      "body": "Use Tag Assistant and GA4 DebugView with consent denied and granted scenarios. Confirm denied paths do not send ad identifiers. Confirm granted paths show server inbound requests on your metrics subdomain."
    },
    {
      "heading": "What breaks it later",
      "body": "CMP script updates, cookie banner A/B tests that race tags, and sGTM billing or cold starts dropping traffic. Alert on inbound sGTM request volume and consent ratio."
    },
    {
      "heading": "Identity and capture for Server-side tagging and Consent Mode",
      "body": "Identity here is consent state plus first-party transport. Keep a matrix of analytics and ads granted or denied combinations with the CMP vendor version and last proof date. Map banner categories to ad_storage, analytics_storage, ad_user_data and ad_personalization before any tag fires. Watch Cloud Run cold starts in your peak booking timezone so morning traffic does not vanish into a waking container."
    },
    {
      "heading": "Upload contract for Server-side tagging and Consent Mode",
      "body": "Server tags inherit the same conversion naming, currency and timezone rules as browser tags, plus an event_id for browser/server dedupe. Enhanced conversion user data must not leave the container when ad_user_data is denied. Failures page a human; successful server forwards should be visible in inbound request logs on your metrics subdomain. Retries stay idempotent on event_id."
    },
    {
      "heading": "Monitoring for Server-side tagging and Consent Mode",
      "body": "Track inbound sGTM volume, error rate, consent-grant ratio and GA4 DebugView scenarios for denied versus granted paths. After a CMP upgrade or cookie-banner A/B test, re-run the matrix the same day. Latency budgets matter as much as CPC: cold starts that drop hits quietly break offline and online learning alike."
    },
    {
      "heading": "Deep dive: Server-side tagging and Consent Mode",
      "body": "sGTM is reliability and first-party control, not a consent bypass. Defaults stay denied for ad storage until the CMP updates signals. Healthcare and special-category paths need controls beyond this guide. Offline conversion uploads remain a separate lawful-basis problem even when the server container is healthy."
    },
    {
      "heading": "Operator checklist: server-side-tagging-consent-mode",
      "body": "1) Confirm the metrics subdomain resolves with SSL. 2) Prove Consent Overview defaults deny ad storage. 3) Walk denied and granted DebugView paths. 4) Confirm server inbound hits on grant. 5) Confirm no ad identifiers on deny. 6) Record CMP version and test date. 7) Re-test after the next CMP or banner change."
    }
  ],
  "faqs": [
    {
      "q": "Is server-side tagging a way around consent?",
      "a": "No. Consent signals must still gate advertising user data. Server-side improves reliability and first-party control, not permission."
    },
    {
      "q": "Do we still need a web container?",
      "a": "Usually yes, to collect consented events and forward them to the server client."
    },
    {
      "q": "What is ad_user_data versus ad_storage?",
      "a": "ad_storage covers advertising cookies; ad_user_data covers sending user-provided data for enhanced conversions and similar. Both matter."
    },
    {
      "q": "Can we use this with offline conversions?",
      "a": "Yes. Offline uploads still need their own lawful basis and identifier rules."
    },
    {
      "q": "Does this replace a CMP?",
      "a": "No. Consent Mode consumes CMP decisions; it is not a banner."
    }
  ],
  "relatedLinks": [
    {
      "href": "/services/conversion-tracking-attribution",
      "title": "Conversion tracking and attribution",
      "description": "Measurement builds including sGTM."
    },
    {
      "href": "/industries/medical-healthcare",
      "title": "Medical and healthcare marketing",
      "description": "Where consent and data categories are strict."
    },
    {
      "href": "/integrations/hubspot-ga4-attribution",
      "title": "HubSpot and GA4 attribution",
      "description": "CRM events through a hardened collection layer."
    },
    {
      "href": "/integrations/hubspot-google-ads-offline-conversions",
      "title": "HubSpot offline conversions",
      "description": "Upload path after consented capture."
    }
  ]
};

export default guide;
