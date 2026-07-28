import type { ResourcePage } from "@/content/resources/types";

const resource: ResourcePage = {
  "slug": "ga4-enquiry-event-schema",
  "name": "GA4 event schema for enquiry-led businesses",
  "metaTitle": "GA4 Enquiry Event Schema Template",
  "metaDescription": "Download a GA4 event JSON schema and implementation notes for enquiry-led B2B and service businesses.",
  "intro": "A practical GA4 event schema for businesses where the conversion is an enquiry, meeting or opportunity, not an ecommerce purchase.",
  "sections": [
    {
      "heading": "What this is",
      "body": "A JSON schema describing recommended events and parameters, plus implementation notes for GTM. Built for enquiry-led motions: forms, calls, bookings and CRM-qualified milestones."
    },
    {
      "heading": "Who it is for",
      "body": "Marketing ops and analysts implementing GA4 for B2B, professional services, travel enquiry and housebuilder lead gen."
    },
    {
      "heading": "How to use it",
      "body": "Load the JSON as your contract. Implement events in GTM or gtag to match names and params. Register custom dimensions in GA4 Admin for the parameters you will report on."
    },
    {
      "heading": "Mistake it prevents",
      "body": "Inventing a new event name per landing page and then being unable to build a single enquiry funnel exploration."
    },
    {
      "heading": "Dimension registration",
      "body": "Register lead_type, page_type, development_id and crm_stage as custom dimensions before you rely on explorations. Unregistered params disappear from the UI and teams invent duplicate events."
    },
    {
      "heading": "Key event ladder",
      "body": "Start with generate_lead as a key event. Promote lead_qualified or closed_won only when CRM wiring is trusted. Avoid marking every lifecycle ping as a key event."
    },
    {
      "heading": "Server and browser",
      "body": "If both GTM web and Measurement Protocol can describe the same enquiry, share an event_id. Dual firing without dedupe inflates funnels and confuses Google Ads imports that read GA4."
    },
    {
      "heading": "How teams actually adopt GA4 event schema for enquiry-led businesses",
      "body": "The JSON is a naming contract between GTM engineers and analysts. Implement event names exactly. Register dimensions before building board explorations. Housebuilders should always send development_id. Travel teams should prefer expected margin as value when known, otherwise omit value rather than invent it. Never send email or phone as parameters. Use event_id across browser and server. Promote key events slowly as CRM trust grows."
    },
    {
      "heading": "Quality bar for ga4-enquiry-event-schema",
      "body": "Quality bar for ga4-enquiry-event-schema: the download must be usable without a sales call. If a colleague cannot apply it in one sitting, the artefact is incomplete. Keep British English. Strip any client residue before publishing. Link the finished internal copy back to /resources/ga4-enquiry-event-schema/ so updates stay findable. Review the file when your CRM stages, GA4 events or account structure change, not only when someone asks for a refresh."
    }
  ],
  "downloads": [
    {
      "label": "Event schema JSON",
      "href": "/downloads/ga4-enquiry-event-schema.json",
      "description": "Events, parameters and allowed values."
    },
    {
      "label": "Implementation notes",
      "href": "/downloads/ga4-enquiry-event-notes.md",
      "description": "GTM tips, PII rules and key event choices."
    }
  ],
  "faqs": [
    {
      "q": "Is generate_lead enough on its own?",
      "a": "It is a good base event. Add qualified and opportunity events when CRM data can fire them."
    },
    {
      "q": "Should we use the purchase event for closed deals?",
      "a": "Only if you are comfortable with ecommerce semantics. A dedicated closed_won event is clearer for many B2B teams."
    },
    {
      "q": "Can we put email in event params?",
      "a": "No. Never send raw PII to GA4 parameters."
    },
    {
      "q": "Does this include Consent Mode?",
      "a": "Notes reference it. Implementation still depends on your CMP."
    },
    {
      "q": "How does this relate to Google Ads?",
      "a": "GA4 events can feed Ads, but offline CRM uploads remain better for late stage revenue."
    }
  ],
  "relatedLinks": [
    {
      "href": "/services/conversion-tracking-attribution",
      "title": "Conversion tracking and attribution",
      "description": "Full measurement builds."
    },
    {
      "href": "/industries/b2b-saas-and-platforms",
      "title": "B2B SaaS marketing",
      "description": "Enquiry-led funnel context."
    },
    {
      "href": "/integrations/hubspot-ga4-attribution",
      "title": "HubSpot and GA4 attribution guide",
      "description": "CRM milestones into GA4."
    }
  ]
};

export default resource;
