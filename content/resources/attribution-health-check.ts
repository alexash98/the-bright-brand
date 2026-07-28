import type { ResourcePage } from "@/content/resources/types";

const resource: ResourcePage = {
  "slug": "attribution-health-check",
  "name": "Attribution health check",
  "metaTitle": "Attribution Health Check Scorecard",
  "metaDescription": "A 20-point scored attribution self-audit for CRM, click IDs, consent, call tracking and offline conversion upload readiness.",
  "intro": "A 20-point scored checklist to see whether your attribution stack would survive a board question about which channels create revenue.",
  "sections": [
    {
      "heading": "What this is",
      "body": "A scored self-audit covering click ID capture, consent, CRM fields, offline uploads, call tracking, GA4 parity and reporting. Each item is worth five points for a 100-point total."
    },
    {
      "heading": "Who it is for",
      "body": "Marketing leaders and ops owners before a media scale-up, CRM migration or agency handover."
    },
    {
      "heading": "How to use it",
      "body": "Score each item 0, 3 or 5. Sum the total. Use the band notes in the file to prioritise fixes. Re-run quarterly."
    },
    {
      "heading": "Mistake it prevents",
      "body": "Scaling budgets on dashboards that only measure form fills while revenue sits in calls and late CRM stages."
    },
    {
      "heading": "Scoring honesty",
      "body": "Have one person score independently, then review zeros with channel owners. Inflated scores hide the plumbing gaps that waste media."
    },
    {
      "heading": "Priority order",
      "body": "Fix click ID capture and consent zeros before debating multi-touch philosophy. Plumbing first, models second."
    },
    {
      "heading": "Cadence",
      "body": "Re-score quarterly and after CRM or website migrations. Attach the score PDF to the measurement runbook."
    },
    {
      "heading": "How teams actually adopt Attribution health check",
      "body": "Score 0, 3 or 5 per item for a 100-point total. Independent scoring then dispute review keeps honesty. Fix click ID and consent zeros before model debates. Re-run quarterly and after migrations. Attach the scored file to the measurement runbook so agency handovers inherit the gaps, not myths about thank-you page tags."
    },
    {
      "heading": "Quality bar for attribution-health-check",
      "body": "Quality bar for attribution-health-check: the download must be usable without a sales call. If a colleague cannot apply it in one sitting, the artefact is incomplete. Keep British English. Strip any client residue before publishing. Link the finished internal copy back to /resources/attribution-health-check/ so updates stay findable. Review the file when your CRM stages, GA4 events or account structure change, not only when someone asks for a refresh."
    }
  ],
  "downloads": [
    {
      "label": "Scored checklist",
      "href": "/downloads/attribution-health-check.md",
      "description": "20 items, scoring rules and bands."
    },
    {
      "label": "Checklist CSV",
      "href": "/downloads/attribution-health-check.csv",
      "description": "Same items for spreadsheet scoring."
    }
  ],
  "faqs": [
    {
      "q": "Is 100 required before spending?",
      "a": "No. It is a prioritisation tool. Fix anything scoring zero in click ID and consent first."
    },
    {
      "q": "Can agencies complete this for us?",
      "a": "Yes, but a commercial owner should review scores so gaps are not hidden."
    },
    {
      "q": "Does a high score mean attribution is perfect?",
      "a": "No. It means the plumbing is present. Model choice and creative still matter."
    },
    {
      "q": "How often should we re-score?",
      "a": "Quarterly, and after any CRM or website migration."
    },
    {
      "q": "Is this industry specific?",
      "a": "The items are cross-vertical. Tender and clinical teams should interpret stage items in their language."
    }
  ],
  "relatedLinks": [
    {
      "href": "/services/conversion-tracking-attribution",
      "title": "Conversion tracking and attribution",
      "description": "Close the gaps the scorecard finds."
    },
    {
      "href": "/industries/travel-tour-operators",
      "title": "Travel marketing programmes",
      "description": "Phone-heavy measurement pressure test."
    },
    {
      "href": "/resources/offline-conversion-upload-template",
      "title": "Offline conversion upload template",
      "description": "Fix upload mapping gaps fast."
    }
  ]
};

export default resource;
