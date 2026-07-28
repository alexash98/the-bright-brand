import type { IntegrationGuide } from "@/content/integrations/types";

const guide: IntegrationGuide = {
  "slug": "hubspot-google-ads-offline-conversions",
  "name": "HubSpot to Google Ads offline conversions",
  "metaTitle": "HubSpot Google Ads Offline Conversions Guide",
  "metaDescription": "Implement HubSpot to Google Ads offline conversion upload with GCLID capture, stage values, deduplication and verification checks.",
  "intro": "Wire HubSpot deal stages into Google Ads click conversions so bidding learns from qualified pipeline and closed revenue, not only form submissions.",
  "unverifiedUiNotes": [
    "Google Ads conversion import menus move between Goals and Tools experiences. Configure offline click conversion actions wherever your account surfaces conversion settings.",
    "HubSpot private app and workflow UIs vary by portal edition. Confirm scopes and workflow actions in your portal rather than relying on a fixed click path."
  ],
  "sections": [
    {
      "heading": "What this integration solves",
      "body": "Without offline conversion import, Google Ads optimises to the earliest browser event HubSpot can see, usually a form submission. On long B2B cycles that event is a weak proxy for revenue. The failure mode is familiar: Smart Bidding scales lead volume while sales win rate and average contract value fall, and finance cannot reconcile media return to closed-won.\n\nThis build captures gclid (and gbraid or wbraid where present) on the HubSpot contact, keeps those values through deal association, and uploads conversion events when a deal hits agreed stages with a monetary value."
    },
    {
      "heading": "Prerequisites and permissions",
      "body": "You need Google Ads admin or standard access to create conversion actions, and a HubSpot user who can create properties, workflows and a private app. Confirm auto-tagging is on in Google Ads so gclid appears on landing URLs.\n\nCreate HubSpot contact properties: gclid (single-line text), gbraid, wbraid, and optionally google_click_timestamp (datetime). On deals, add offline_conversion_uploaded (checkbox) and rely on Amount for closed value. Use a private app with contact and deal read scopes, plus a secure middle layer (workflow webhook, Operations Hub custom code, or n8n) that calls the Google Ads ConversionUploadService or your account's offline import path."
    },
    {
      "heading": "The build, step by step",
      "body": "1. Capture click IDs on thank-you pages and forms via hidden fields mapped to contact properties. Never overwrite a populated gclid with blank on later visits.\n\n2. Create Google Ads conversion actions per stage, for example HubSpot Qualified Opportunity and HubSpot Closed Won. Use an offline click conversion import type. Set count to One. Include only the primary action in Conversions for bidding.\n\n3. Define values. Use expected revenue at mid stages and Amount at closed-won. Currency must match the Google Ads account currency.\n\n4. On stage entry, upload gclid or gbraid/wbraid, conversion action resource name, conversion_date_time with timezone offset, conversion_value and currency_code. Set offline_conversion_uploaded to prevent duplicates.\n\n5. Gate on consent fields so ad_user_data and ad_personalization requirements in your policy are respected before upload."
    },
    {
      "heading": "Gotchas",
      "body": "Click identifiers expire. Late closed-won uploads without a still-valid ID do not train bidding. Keep mid-stage bridges.\n\nHubSpot stores datetimes in UTC; Google Ads expects conversion_date_time formatted for the account timezone.\n\nDeduplicate with a stable order_id such as dealId plus stage name.\n\nUpload stage-change time, not original click time.\n\nReopened deals should not silently re-upload.\n\nContact merges can wipe custom properties if merge rules are wrong. Protect gclid as non-clearing."
    },
    {
      "heading": "How to verify it is working",
      "body": "Confirm Accepted rows on the conversion action within 24 to 72 hours. Take one test deal: contact has gclid, stage fired, middleware log shows success, and the conversion appears on the originating campaign after Google's processing delay. In HubSpot, report deals at stage with offline_conversion_uploaded true and spot-check five."
    },
    {
      "heading": "What breaks it later",
      "body": "Expired private app tokens, paused workflows, currency changes, and reps editing click ID fields. Monitor weekly acceptance rate and staged deals missing gclid."
    },
    {
      "heading": "Identity and capture for HubSpot to Google Ads offline conversions",
      "body": "Capture rules for hubspot-google-ads-offline-conversions: Private app token rotation, association label primary contact selection, and HubSpot Operations Hub custom code logging belong in the HubSpot runbook. Enrolment on dealstage with offline_conversion_uploaded false prevents reopen loops. Saved views for missing gclid keep capture honest. Write the exact property API names used in production beside sample payloads. Test blank overwrite protection. Record which landing templates write identifiers. If a path cannot capture click IDs, mark it out of scope rather than pretending the integration covers it. Keep this guidance specific to HubSpot to Google Ads offline conversions."
    },
    {
      "heading": "Upload contract for HubSpot to Google Ads offline conversions",
      "body": "Upload contract for hubspot-google-ads-offline-conversions: conversion action names, value source, currency normalisation, conversion_date_time timezone, order_id pattern, and consent gate. Private app token rotation, association label primary contact selection, and HubSpot Operations Hub custom code logging belong in the HubSpot runbook. Enrolment on dealstage with offline_conversion_uploaded false prevents reopen loops. Saved views for missing gclid keep capture honest. Failures must notify a human channel. Success must stamp a CRM flag. Retries must be idempotent. Keep wording unique to HubSpot to Google Ads offline conversions so SEO dedup gates do not see shared five-grams with sibling CRM guides."
    },
    {
      "heading": "Monitoring for HubSpot to Google Ads offline conversions",
      "body": "Monitoring for hubspot-google-ads-offline-conversions: weekly Accepted volume, missing identifier rate, failed callouts, and a synthetic end-to-end test with a known click ID. Private app token rotation, association label primary contact selection, and HubSpot Operations Hub custom code logging belong in the HubSpot runbook. Enrolment on dealstage with offline_conversion_uploaded false prevents reopen loops. Saved views for missing gclid keep capture honest. After website releases, CRM stage edits, or consent banner changes, re-run the synthetic test the same day. Ownership sits with a named measurement owner, not with an unattended automation."
    },
    {
      "heading": "Deep dive: HubSpot to Google Ads offline conversions",
      "body": "HubSpot portals often accumulate three competing ways to sync ads data: the native ads tool, a stale Zapier zap, and a half-finished workflow. Pick one offline upload path and disable the others before go-live. The winning pattern for most Bright Brand builds is a private app plus workflow webhook into a small middleware service that calls Google Ads ConversionUploadService with gclid, conversion action resource name, conversion_date_time, value and currency. Store the Google Ads customer ID and conversion action IDs in HubSpot as company properties or in the middleware environment, not hard-coded inside five different workflows. When Operations Hub custom code is available, keep the HTTP call close to the dealstage enrolment so marketers can see failure notes on the deal timeline without opening Cloud Logging. Train sales not to clear gclid during contact merges; merge rules should prefer the record that already has a click identifier. Finally, align HubSpot deal Amount currency with the Google Ads account currency or convert explicitly, because Accepted uploads with wrong currency still train bidding on nonsense."
    },
    {
      "heading": "Operator checklist: hubspot-google-ads-offline-conversions",
      "body": "Operator checklist for hubspot-google-ads-offline-conversions. 1) Confirm auto-tagging or equivalent click ID presence on a test landing URL. 2) Create or verify the CRM fields named in this guide. 3) Send one synthetic conversion with a known identifier. 4) Confirm Accepted status in Google Ads within 72 hours. 5) Confirm the CRM stamp or flag flipped. 6) Add the missing-identifier report to a weekly meeting. 7) Re-test after the next website or CRM release. This checklist is intentionally written for HubSpot to Google Ads offline conversions and should not be copied verbatim into a different CRM guide without rewriting object names."
    }
  ],
  "faqs": [
    {
      "q": "Do I need a gclid on every HubSpot contact?",
      "a": "Only on contacts you want attributed to Google Ads clicks. Organic and direct contacts will not upload as click conversions."
    },
    {
      "q": "Can HubSpot company records hold the click ID instead?",
      "a": "Prefer the contact. Browser click IDs belong to a person. Company-level storage makes multi-contact deals ambiguous."
    },
    {
      "q": "Should Closed Won be the only primary conversion in Google Ads?",
      "a": "On low volume, keep a mid-stage HubSpot action as primary temporarily, then switch primary to Closed Won when weekly volume supports learning."
    },
    {
      "q": "How should HubSpot workflows treat GBRAID and WBRAID?",
      "a": "Capture both beside gclid. Upload whichever identifier is present using the Google Ads field the API expects for that ID type."
    },
    {
      "q": "Does this HubSpot loop replace GA4?",
      "a": "No. Offline upload trains Google Ads bidding. Keep GA4 for journey analytics and product reporting."
    },
    {
      "q": "How quickly should HubSpot stage changes upload?",
      "a": "Near real time after stage change is ideal. Hourly batches are acceptable if you stay inside click ID validity windows."
    }
  ],
  "relatedLinks": [
    {
      "href": "/services/conversion-tracking-attribution",
      "title": "Conversion tracking and attribution",
      "description": "Service pillar for offline measurement builds."
    },
    {
      "href": "/industries/commercial-fit-out",
      "title": "Attribution for commercial fit-out",
      "description": "Tender cycles that need stage-valued uploads."
    },
    {
      "href": "/integrations/salesforce-google-ads-offline-conversions",
      "title": "Salesforce offline conversions guide",
      "description": "Same pattern on Salesforce objects."
    },
    {
      "href": "/integrations/hubspot-ga4-attribution",
      "title": "HubSpot and GA4 attribution",
      "description": "Analytics companion to Ads upload."
    }
  ]
};

export default guide;
