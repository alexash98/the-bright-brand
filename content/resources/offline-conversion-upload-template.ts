import type { ResourcePage } from "@/content/resources/types";

const resource: ResourcePage = {
  "slug": "offline-conversion-upload-template",
  "name": "Offline conversion upload template",
  "metaTitle": "Offline Conversion Upload CSV Template",
  "metaDescription": "CSV template and field mapping notes for Google Ads offline conversion uploads including GCLID, time, value and currency.",
  "intro": "A CSV template and mapping notes for uploading offline conversions to Google Ads without guessing column meanings.",
  "sections": [
    {
      "heading": "What this is",
      "body": "A CSV with the columns most offline click import flows expect, example rows, and a markdown mapping guide from CRM fields to Ads fields."
    },
    {
      "heading": "Who it is for",
      "body": "Ops teams preparing manual or middleware uploads from HubSpot, Salesforce or Pipedrive."
    },
    {
      "heading": "How to use it",
      "body": "Map your CRM export to the columns. Validate timezone and currency before the first production upload. Prefer API automation once the mapping is stable."
    },
    {
      "heading": "Mistake it prevents",
      "body": "Uploading conversion times in the wrong timezone or mixing currencies, which creates Accepted rows that still poison bidding."
    },
    {
      "heading": "Timezone discipline",
      "body": "conversion_time must include an offset matching Google Ads account rules. HubSpot and Salesforce UTC exports need explicit conversion before upload."
    },
    {
      "heading": "Dedupe keys",
      "body": "order_id should be deal or opportunity id plus stage name. Retries without order_id create Accepted duplicates that look like growth."
    },
    {
      "heading": "Consent column",
      "body": "Where required, pass ad_user_data consent explicitly. Do not default to GRANTED when unknown."
    },
    {
      "heading": "How teams actually adopt Offline conversion upload template",
      "body": "Map CRM fields to the template columns before the first production file. Timezone offsets and currency are the usual silent poisons. order_id prevents weekend retry doubles. Consent columns should not default to GRANTED. Synthetic example rows contain no client data. Automate via API once the mapping is stable; keep this CSV as the human-readable contract."
    },
    {
      "heading": "Quality bar for offline-conversion-upload-template",
      "body": "Quality bar for offline-conversion-upload-template: the download must be usable without a sales call. If a colleague cannot apply it in one sitting, the artefact is incomplete. Keep British English. Strip any client residue before publishing. Link the finished internal copy back to /resources/offline-conversion-upload-template/ so updates stay findable. Review the file when your CRM stages, GA4 events or account structure change, not only when someone asks for a refresh."
    }
  ],
  "downloads": [
    {
      "label": "Upload CSV template",
      "href": "/downloads/offline-conversion-upload-template.csv",
      "description": "Columns and example rows."
    },
    {
      "label": "Field mapping notes",
      "href": "/downloads/offline-conversion-field-mapping.md",
      "description": "CRM to Google Ads field dictionary."
    }
  ],
  "faqs": [
    {
      "q": "Is this the only accepted Google format?",
      "a": "Google surfaces more than one import path. Match columns to the importer your account uses."
    },
    {
      "q": "Do we need order ID?",
      "a": "Strongly recommended for deduplication on retries."
    },
    {
      "q": "Can we include email instead of GCLID?",
      "a": "That is a different enhanced conversions path. This template focuses on click ID upload."
    },
    {
      "q": "What datetime format should we use?",
      "a": "Follow the mapping notes. Include a timezone offset."
    },
    {
      "q": "How many example rows are included?",
      "a": "A few synthetic rows only. No client data."
    }
  ],
  "relatedLinks": [
    {
      "href": "/services/conversion-tracking-attribution",
      "title": "Conversion tracking and attribution",
      "description": "Implementation programmes."
    },
    {
      "href": "/integrations/hubspot-google-ads-offline-conversions",
      "title": "HubSpot offline conversions guide",
      "description": "Automate this template's mapping."
    },
    {
      "href": "/services/crm-implementation",
      "title": "CRM implementation",
      "description": "Stage design that keeps click IDs alive to close."
    },
    {
      "href": "/industries",
      "title": "All industry programmes",
      "description": "Browse every vertical hub currently published."
    }
  ]
};

export default resource;
