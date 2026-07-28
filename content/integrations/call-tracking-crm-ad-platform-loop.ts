import type { IntegrationGuide } from "@/content/integrations/types";

const guide: IntegrationGuide = {
  "slug": "call-tracking-crm-ad-platform-loop",
  "name": "Call tracking to CRM to ad platform loop",
  "metaTitle": "Call Tracking CRM Ad Platform Loop Guide",
  "metaDescription": "Connect dynamic number insertion, CRM call outcomes and offline conversion upload so phone revenue trains paid media.",
  "intro": "Close the loop from dynamic number insertion through CRM call outcomes and back into Google Ads or Meta as valued offline conversions.",
  "unverifiedUiNotes": [
    "Call tracking vendor admin UIs (pool numbers, DNI triggers, webhook payloads) differ by vendor. Map the operations below to your vendor's current settings screens."
  ],
  "sections": [
    {
      "heading": "What this integration solves",
      "body": "Phone-heavy businesses lose attribution when the winning channel is a call. Form-only conversion actions starve search terms and campaigns that drive calls. The loop fixes that: DNI swaps numbers by source, the call lands in CRM with the original gclid, and a qualified or closed outcome uploads with value."
    },
    {
      "heading": "Prerequisites and permissions",
      "body": "A call tracking vendor with DNI and webhooks, CRM admin access, Google Ads offline conversion actions, and a privacy review for call recording and personal data. Landing templates must load the DNI script after a consent decision where required."
    },
    {
      "heading": "The build, step by step",
      "body": "1. Configure number pools per channel or per development/location.\n\n2. Pass gclid and UTMs into the call tracking session parameters.\n\n3. Webhook on call completed: create or update CRM contact/deal with call_duration, call_recording_url (ACL restricted), gclid, and call_source.\n\n4. Sales sets call_outcome (qualified, booked, closed, junk).\n\n5. Middleware uploads to Google Ads when outcome hits qualified or closed, with values from your offline value table.\n\n6. Optionally send a GA4 call_qualified event via Measurement Protocol."
    },
    {
      "heading": "Gotchas",
      "body": "DNI flashing wrong numbers on slow consent. Spa navigation without re-running DNI. Shared reception lines without pool isolation. Uploading every 10-second call as a conversion. Currency and timezone on upload. Deduplicate when the same person both calls and submits a form."
    },
    {
      "heading": "How to verify it is working",
      "body": "Call a tracked number from a URL with gclid=test, confirm CRM record fields, mark qualified, confirm Ads upload acceptance. Compare phone enquiry share in CRM to form volume for sanity."
    },
    {
      "heading": "What breaks it later",
      "body": "Number pool exhaustion, website template changes removing tel: classes, and CRM outcome picklist edits. Weekly pool health and webhook failure alerts."
    },
    {
      "heading": "Identity and capture for Call tracking to CRM to ad platform loop",
      "body": "Phone identity starts on the landing template: tel: classes that DNI can swap, pool spare capacity alerts before exhaustion, and session parameters that carry gclid into the call record. Housebuilder webhooks without development_id should fail closed. Outcome picklists need junk and existing-customer so talk-time cannot invent a sale. Document the live CRM property API names next to a sample payload, and prove blank fields do not overwrite known click IDs."
    },
    {
      "heading": "Upload contract for Call tracking to CRM to ad platform loop",
      "body": "Name one Google Ads offline action per commercially real call outcome (qualified consult, reservation, deposit). Define value source, currency, conversion_date_time timezone and an order_id that survives retries. Gate uploads on the same consent decision that allowed DNI. Stamp the CRM when Ads accepts the hit; page a human on webhook failure. Never treat a 10-second ring as the primary learning event."
    },
    {
      "heading": "Monitoring for Call tracking to CRM to ad platform loop",
      "body": "Each week compare CRM phone enquiry share, form volume and Ads Accepted call conversions. Watch pool spare capacity, missing gclid rate and webhook error counts. After a website template change or CRM picklist edit, place one synthetic call with a known click ID the same day. A named measurement owner owns the loop; unattended automations do not."
    },
    {
      "heading": "Deep dive: Call tracking to CRM to ad platform loop",
      "body": "Three owners keep the loop honest: web for DNI selectors, sales for outcome coding, ops for webhook health. Travel should upload deposit or margin when the call confirms revenue. Construction outlets need per-development pools. Deduplicate when the same person both submits a form and calls. Recordings help QA but add retention and ACL load; attribution does not require them."
    },
    {
      "heading": "Operator checklist: call-tracking-crm-ad-platform-loop",
      "body": "1) Open a tracked landing URL with a test gclid. 2) Confirm DNI swaps the number. 3) Complete a call and check CRM fields. 4) Mark a real outcome and confirm Ads Accepted within 72 hours. 5) Confirm the CRM acceptance stamp. 6) Review pool capacity. 7) Re-test after the next template or picklist release."
    }
  ],
  "faqs": [
    {
      "q": "Should raw answered calls be primary conversions?",
      "a": "Usually no. Prefer qualified or closed call outcomes with values."
    },
    {
      "q": "Do we need recording?",
      "a": "Not for attribution. Recording helps QA but increases compliance load."
    },
    {
      "q": "How does this interact with Consent Mode?",
      "a": "Serve DNI only when your consent design allows the associated tags, or use cookieless first-party methods your counsel approves."
    },
    {
      "q": "Can Meta receive call conversions too?",
      "a": "Yes via offline event upload with the correct click ID or matched customer data under policy."
    },
    {
      "q": "What about housebuilder multi-site numbers?",
      "a": "Use one pool per development so cost per reservation can be cut by site."
    }
  ],
  "relatedLinks": [
    {
      "href": "/services/call-tracking",
      "title": "Call tracking service",
      "description": "Programme design for phone-led funnels."
    },
    {
      "href": "/industries/residential-home-builders",
      "title": "Residential home builder marketing",
      "description": "Development-level phone and reservation attribution."
    },
    {
      "href": "/integrations/hubspot-google-ads-offline-conversions",
      "title": "HubSpot offline conversions",
      "description": "Upload path once the CRM has outcomes."
    },
    {
      "href": "/industries",
      "title": "All industry programmes",
      "description": "Browse every vertical hub currently published."
    }
  ]
};

export default guide;
