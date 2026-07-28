import type { IntegrationGuide } from "@/content/integrations/types";

const guide: IntegrationGuide = {
  "slug": "calendly-attribution-tracking",
  "name": "Calendly attribution tracking",
  "metaTitle": "Calendly Attribution Tracking Setup Guide",
  "metaDescription": "Pass UTM parameters and click IDs through Calendly into your CRM so booked meetings keep paid media attribution.",
  "intro": "Stop losing campaign attribution at the booking widget by carrying UTM parameters and click IDs through Calendly into HubSpot or your CRM.",
  "unverifiedUiNotes": [
    "Calendly event type and invitee question settings move within the Calendly product UI. Configure UTM passthrough and questions on the event type wherever those controls appear."
  ],
  "sections": [
    {
      "heading": "What this integration solves",
      "body": "Calendly is often the conversion. If the embed drops query parameters, CRM meetings arrive as Direct or Calendly with no campaign. Paid social and search then look broken while SDRs are full.\n\nThe build passes utm_source, utm_medium, utm_campaign, utm_content, utm_term, gclid, gbraid and wbraid into invitee questions or Calendly's UTM passthrough, then into HubSpot via native sync or webhook."
    },
    {
      "heading": "Prerequisites and permissions",
      "body": "Calendly owner access on the event types that sales uses. CRM admin to map custom fields. Landing pages must preserve query parameters into the embed (avoid stripping on redirect)."
    },
    {
      "heading": "The build, step by step",
      "body": "1. Enable UTM parameter passthrough on the event type if your Calendly plan exposes it.\n\n2. Add hidden invitee questions for gclid, gbraid, wbraid when passthrough does not cover click IDs. Populate them with on-page JavaScript reading location.search before the widget loads.\n\n3. Map Calendly to HubSpot (or Salesforce) fields one-to-one. Meeting booked should create or update contact and set a meeting_booked_at datetime.\n\n4. Fire a GA4 generate_lead or meeting_booked event on the confirmation page with campaign params still present.\n\n5. Optionally upload meeting_booked as an offline conversion with a modest expected value."
    },
    {
      "heading": "Gotchas",
      "body": "Inline embeds inside SPAs that remount without query strings. Branded Calendly share links that bypass your site. Multiple event types with inconsistent questions. Timezone on meeting start versus booking time for conversion timestamps. GDPR: booking forms still need consent language."
    },
    {
      "heading": "How to verify it is working",
      "body": "Book a test meeting from a URL that includes utm_campaign=test_calendly and a fake gclid=test123. Confirm those values on the Calendly invitee payload and on the CRM contact. Confirm the GA4 event in DebugView."
    },
    {
      "heading": "What breaks it later",
      "body": "New event types created without the hidden questions, theme redesigns that replace the embed, and CRM field API name changes. Quarterly checklist of all active event types."
    },
    {
      "heading": "Identity and capture for Calendly attribution tracking",
      "body": "Attribution dies between marketing embeds and sales signature links. Prefer workspace event types with hidden gclid questions. Round-robin and personal Calendly URLs bypass those embeds. Inventory every live event type quarterly, including one-off webinar links."
    },
    {
      "heading": "Upload contract for Calendly attribution tracking",
      "body": "Map invitee answers into HubSpot write-once utm and gclid properties so later nurture forms cannot blank them. Fire meeting_booked once on the confirmation page. Optional offline upload uses a modest expected value from your value table, not full ACV."
    },
    {
      "heading": "Monitoring for Calendly attribution tracking",
      "body": "After theme or embed redesigns, re-test SPA remounts that drop query strings before widget boot. Mobile browsers need a separate pass. Track bookings missing gclid separately from Ads Accepted volume."
    },
    {
      "heading": "Deep dive: Calendly attribution tracking",
      "body": "Humans must actually send the tracked links. Signature and round-robin shortcuts recreate dark meetings. Treat event-type inventory as a sales ops chore, not a one-time marketing setup."
    },
    {
      "heading": "Operator checklist: calendly-attribution-tracking",
      "body": "1) Workspace event types carry hidden gclid questions. 2) Landing embed preserves query params. 3) Test booking writes CRM fields. 4) Confirmation fires meeting_booked once. 5) Signature links audited. 6) Mobile booking re-tested. 7) Quarterly event-type inventory complete."
    }
  ],
  "faqs": [
    {
      "q": "Does Calendly native HubSpot sync include GCLID?",
      "a": "Only if you map a question or field that carries it. Do not assume UTM passthrough covers click IDs."
    },
    {
      "q": "Should every meeting be a Google Ads primary conversion?",
      "a": "Often as a secondary or observation conversion. Primary may stay at qualified or closed depending on volume."
    },
    {
      "q": "What if prospects book from an email link?",
      "a": "Email links rarely have gclid. Attribution should fall back to CRM original source, not invent a paid click."
    },
    {
      "q": "Can we use Calendly routing forms?",
      "a": "Yes, but repeat the same hidden field pattern on the routing form as on the event type."
    },
    {
      "q": "How do we handle no-shows?",
      "a": "Keep meeting_booked as booked intent. Use a separate CRM outcome for held meetings if you optimise to show rate."
    }
  ],
  "relatedLinks": [
    {
      "href": "/services/conversion-tracking-attribution",
      "title": "Conversion tracking and attribution",
      "description": "Measurement design across booking tools."
    },
    {
      "href": "/industries/medical-healthcare",
      "title": "Medical and healthcare marketing",
      "description": "Consultation booking as the key conversion."
    },
    {
      "href": "/integrations/hubspot-google-ads-offline-conversions",
      "title": "HubSpot offline conversions",
      "description": "Upload booked meetings as valued events."
    },
    {
      "href": "/integrations/call-tracking-crm-ad-platform-loop",
      "title": "Call tracking CRM loop",
      "description": "When bookings still become phone closes."
    }
  ]
};

export default guide;
