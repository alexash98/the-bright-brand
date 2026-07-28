import type { IntegrationGuide } from "@/content/integrations/types";

const guide: IntegrationGuide = {
  "slug": "pipedrive-google-ads-offline-conversions",
  "name": "Pipedrive to Google Ads offline conversions",
  "metaTitle": "Pipedrive Google Ads Offline Conversions Guide",
  "metaDescription": "Store GCLID on Pipedrive persons, upload deal stage conversions to Google Ads, and avoid duplicates when deals reopen.",
  "intro": "Use Pipedrive person and deal custom fields to upload stage-based offline conversions into Google Ads with clean identifiers and values.",
  "unverifiedUiNotes": [
    "Google Ads conversion import menus move between Goals and Tools experiences. Configure offline click conversion actions wherever your account surfaces conversion settings.",
    "Pipedrive Settings labels vary by plan. Find custom fields and automations under your account settings screens."
  ],
  "sections": [
    {
      "heading": "What this integration solves",
      "body": "Pipedrive is common in mid-market sales teams. Out of the box it will not teach Google Ads about won deals. This build stores click IDs on the person, associates them to deals, and uploads on stage changes via Pipedrive automations webhooks or Zapier/n8n."
    },
    {
      "heading": "Prerequisites and permissions",
      "body": "Pipedrive admin company settings access, Google Ads conversion access, and an automation tool that can call Google Ads. Custom person fields: GCLID, GBRAID, WBRAID. Deal fields: Offline upload done (boolean-like), Offline upload stage (text)."
    },
    {
      "heading": "The build, step by step",
      "body": "1. Map hidden form fields into Pipedrive person create/update via leadbooster forms or website forms API.\n\n2. Create Google Ads offline conversion actions for each monetised stage.\n\n3. Automation: when deal stage hits target, read org person GCLID, post conversion with deal value and currency, stamp Offline upload done.\n\n4. Use deal id + stage as order_id for deduplication.\n\n5. Document stage probability values if you upload expected revenue before won."
    },
    {
      "heading": "Gotchas",
      "body": "Persons with multiple deals can upload conflicting values if you pull the wrong deal. Pipeline stage IDs differ across pipelines. Merged persons may drop custom fields. Pipedrive currency vs Ads currency mismatches are common in multi-market sellers."
    },
    {
      "heading": "How to verify it is working",
      "body": "Create a test person with GCLID, move a deal through stages, confirm webhook logs and Google Ads acceptance. Re-run the same stage to ensure dedupe holds."
    },
    {
      "heading": "What breaks it later",
      "body": "New pipelines without automations, API token rotation, and sales creating deals without a person. Monthly audit of won deals missing GCLID."
    },
    {
      "heading": "Identity and capture for Pipedrive to Google Ads offline conversions",
      "body": "Pipedrive identity lives on the Person, not the Organisation. Leadbooster, website forms and manual creates must write GCLID, GBRAID and WBRAID to the same Person fields. Multi-person Deals need one primary-buyer rule before go-live. Pipeline clones mint new stage_id values; labels are for humans only."
    },
    {
      "heading": "Upload contract for Pipedrive to Google Ads offline conversions",
      "body": "Automations key off stage_id, never English stage names. order_id is dealId + stage_id so webhook retries stay idempotent. Normalise deal currency into the Ads account currency in middleware. Stamp Offline upload done only after Google accepts the hit, and block zero-value Won uploads unless an agreed expected-value field exists."
    },
    {
      "heading": "Monitoring for Pipedrive to Google Ads offline conversions",
      "body": "Export Won deals monthly and chart the share missing Person GCLID. That capture KPI is separate from Ads Accepted volume. Watch API token rotation, new pipelines without cloned automations, and Deals created without a Person. Re-test after any pipeline redesign the same day."
    },
    {
      "heading": "Deep dive: Pipedrive to Google Ads offline conversions",
      "body": "Treat stage_id as the contract. When a product line gets its own pipeline, rewrite automations immediately. EU sellers with GBP Ads accounts routinely mismatch currency. Free plans without webhooks need an external Deals API poller; CSV upload is a bridge, not a system. Chat-originated People without GCLID stay permanently dark to Ads."
    },
    {
      "heading": "Operator checklist: pipedrive-google-ads-offline-conversions",
      "body": "1) Person fields receive a test GCLID from the form. 2) Deal links to that Person. 3) Stage move fires the webhook. 4) Ads shows Accepted within 72 hours. 5) Offline upload done stamps. 6) Retry the same stage and confirm no duplicate. 7) Re-test after the next pipeline clone."
    }
  ],
  "faqs": [
    {
      "q": "Should GCLID live on the Organisation instead of the Person?",
      "a": "No. Click IDs come from a browser session tied to a human. Store them on the Person and let Deals read through the person link."
    },
    {
      "q": "Can Pipedrive Projects replace Deals for uploads?",
      "a": "Only if Projects are truly where revenue is marked won. Most Google Ads loops should stay on Deal stages unless your process is project-led end to end."
    },
    {
      "q": "How do we handle free Pipedrive plans without automations?",
      "a": "Use an external poller against the Deals API, or upgrade to a plan that supports webhooks. Manual CSV upload is a temporary bridge, not a system."
    },
    {
      "q": "What if two buyers share one Deal?",
      "a": "Pick a primary Person rule before go-live, for example first linked Person with a GCLID. Document it so uploads are deterministic."
    },
    {
      "q": "Does Leadbooster chat create attribution gaps?",
      "a": "It does if chat transcripts never write GCLID fields. Add the same hidden capture to chat lead creation or accept that chat-originated Deals stay unattributed to Ads."
    }
  ],
  "relatedLinks": [
    {
      "href": "/services/crm-implementation",
      "title": "CRM implementation",
      "description": "Pipedrive stage models and field design."
    },
    {
      "href": "/industries/commercial-fit-out",
      "title": "Fit-out CRM implementation",
      "description": "Tender stages in a CRM build."
    },
    {
      "href": "/integrations/hubspot-google-ads-offline-conversions",
      "title": "HubSpot offline conversions",
      "description": "Sibling CRM upload guide."
    },
    {
      "href": "/integrations/salesforce-google-ads-offline-conversions",
      "title": "Salesforce offline conversions",
      "description": "Enterprise counterpart."
    }
  ]
};

export default guide;
