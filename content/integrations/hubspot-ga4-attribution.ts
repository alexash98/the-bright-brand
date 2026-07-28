import type { IntegrationGuide } from "@/content/integrations/types";

const guide: IntegrationGuide = {
  "slug": "hubspot-ga4-attribution",
  "name": "HubSpot and GA4 attribution",
  "metaTitle": "HubSpot GA4 Attribution Implementation Guide",
  "metaDescription": "Connect HubSpot lifecycle stages to GA4 events and user properties so analytics attribution matches CRM reality.",
  "intro": "Send HubSpot lifecycle and deal milestones into GA4 as events with stable user identity so reports stop disagreeing with the CRM.",
  "unverifiedUiNotes": [
    "GA4 Admin event modification and audience UIs change frequently. Create events and custom dimensions in Admin wherever your property surfaces them.",
    "HubSpot private app and workflow UIs vary by portal edition. Confirm scopes and workflow actions in your portal rather than relying on a fixed click path."
  ],
  "sections": [
    {
      "heading": "What this integration solves",
      "body": "GA4 alone ends at on-site events. HubSpot alone lacks clean multi-channel path data. Without a bridge, marketing argues from sessions while sales argues from deals. The failure mode is two dashboards and no shared conversion definition.\n\nThis build emits GA4 events when HubSpot lifecycle_stage or dealstage changes, keyed by a shared client_id or user_id strategy you document."
    },
    {
      "heading": "Prerequisites and permissions",
      "body": "GA4 Editor access, Google Tag Manager or server-side GTM recommended, HubSpot workflow capability, and agreement on identity: email hash as user_id only where policy allows, plus browser client_id stored on the HubSpot contact as ga_client_id."
    },
    {
      "heading": "The build, step by step",
      "body": "1. Capture ga_client_id from the first-party cookie (_ga parsed per Google docs) into a HubSpot contact property on form submit.\n\n2. In GA4, register custom dimensions for hubspot_lifecycle_stage and hubspot_deal_stage (event scoped) and deal_amount if you send values.\n\n3. Workflow on lifecycle stage change calls Measurement Protocol or a webhook into sGTM with client_id, user_id if used, event name hubspot_lifecycle_update, and params.\n\n4. Separate event hubspot_deal_closed_won with value and currency for revenue exploration.\n\n5. Mark key events carefully. Do not mark every lifecycle update as a key event or you will pollute reports."
    },
    {
      "heading": "Gotchas",
      "body": "Measurement Protocol events without a valid client_id orphan sessions. Consent Mode must allow analytics_storage before you treat hits as fully consented. HubSpot timestamps versus GA4 event time can drift. Avoid dual firing from browser and server for the same stage without event_id deduplication."
    },
    {
      "heading": "How to verify it is working",
      "body": "Use GA4 DebugView with a test contact, trigger a lifecycle change, and confirm the event and params. In Explorations, build a free-form report of session source against hubspot_deal_closed_won count."
    },
    {
      "heading": "What breaks it later",
      "body": "Cookie changes, Consent Mode defaults flipped to denied without modelling, and HubSpot workflows cloned without the webhook. Quarterly audit of event volume versus CRM stage volume."
    },
    {
      "heading": "Identity and capture for HubSpot and GA4 attribution",
      "body": "Join HubSpot and GA4 on ga_client_id captured at first form submit, not on email in event params. Parse the _ga cookie carefully; off-by-one orphans never rejoin. Register custom dimensions before anyone builds explorations, and prefer hubspot_deal_closed_won over overloading purchase for B2B."
    },
    {
      "heading": "Upload contract for HubSpot and GA4 attribution",
      "body": "When browser thank-you tags and CRM workflows both fire, share one event_id so GA4 does not double-count. Measurement Protocol payloads must respect Consent Mode. Lifecycle workflows should fire only on meaningful stage transitions, not every property edit. Never send email addresses as GA4 parameters."
    },
    {
      "heading": "Monitoring for HubSpot and GA4 attribution",
      "body": "Save pinned explorations for hubspot_deal_closed_won by session default channel group and for lifecycle updates. Each week compare HubSpot closed-won counts to GA4 event counts with an agreed tolerance before anyone rewrites channel strategy from a broken report."
    },
    {
      "heading": "Deep dive: HubSpot and GA4 attribution",
      "body": "GA4 and HubSpot disagree when identity is lazy. Capture ga_client_id early, keep Consent Mode honest, and treat Measurement Protocol as a join tool rather than a dump of CRM fields. Orphan hits from bad cookie parsing look like channel failure when they are really instrumentation debt."
    },
    {
      "heading": "Operator checklist: hubspot-ga4-attribution",
      "body": "1) Form writes ga_client_id. 2) Custom dimensions registered. 3) Closed-won workflow fires once with event_id. 4) DebugView shows the join. 5) Exploration matches HubSpot within tolerance. 6) No email in GA4 params. 7) Re-test after Consent Mode or form changes."
    }
  ],
  "faqs": [
    {
      "q": "Should Closed Won be a GA4 purchase event?",
      "a": "You can use purchase if the schema fits, but a clearly named hubspot_deal_closed_won event is often cleaner for B2B."
    },
    {
      "q": "Is user_id required?",
      "a": "No, but a stable identity strategy improves cross-device stitching where policy allows."
    },
    {
      "q": "Can HubSpot native GA4 integration replace this?",
      "a": "Native features help with basic page and form signals. Stage-valued deal events usually still need a custom workflow."
    },
    {
      "q": "Does this train Google Ads?",
      "a": "Not by itself. Use the offline conversions guide to train Ads. This guide aligns analytics."
    },
    {
      "q": "What about PII in event params?",
      "a": "Never send raw email or phone in GA4 event parameters. Hash or omit."
    }
  ],
  "relatedLinks": [
    {
      "href": "/services/conversion-tracking-attribution",
      "title": "Conversion tracking and attribution",
      "description": "Broader measurement programme design."
    },
    {
      "href": "/industries/b2b-saas-and-platforms",
      "title": "B2B SaaS marketing",
      "description": "Enquiry-led funnels that need CRM-aligned GA4."
    },
    {
      "href": "/integrations/hubspot-google-ads-offline-conversions",
      "title": "HubSpot offline conversions for Google Ads",
      "description": "Bidding-side counterpart."
    },
    {
      "href": "/integrations/server-side-tagging-consent-mode",
      "title": "Server-side tagging and Consent Mode",
      "description": "Hardening the collection layer."
    }
  ]
};

export default guide;
