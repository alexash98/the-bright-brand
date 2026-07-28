import type { ResourcePage } from "@/content/resources/types";

const resource: ResourcePage = {
  "slug": "tender-hubspot-deal-pipeline",
  "name": "Tender-stage HubSpot deal pipeline template",
  "metaTitle": "Tender HubSpot Deal Pipeline Template",
  "metaDescription": "Download a HubSpot deal pipeline CSV and stage definition guide for PQQ, ITT, bid and award cycles.",
  "intro": "A HubSpot deal pipeline shaped like a real tender process, with stage definitions that stop forecasting from becoming fiction.",
  "sections": [
    {
      "heading": "What this is",
      "body": "A CSV you can use as a blueprint for HubSpot deal stages, plus a written definition document. The definitions are the asset. Most pipelines fail because Relationship, PQQ and ITT get collapsed into Proposal."
    },
    {
      "heading": "Who it is for",
      "body": "Commercial directors and RevOps leads in contracting, fit-out and any tender-led B2B motion using HubSpot."
    },
    {
      "heading": "How to use it",
      "body": "Read the stage definition doc first. Create or edit a HubSpot deal pipeline to match the stage names and win probabilities. Import or recreate stages manually if your portal blocks CSV stage import. Train sales on entry and exit criteria before enforcing required fields."
    },
    {
      "heading": "Mistake it prevents",
      "body": "Forecasting from generic funnels that ignore pre-qualification and framework positioning, which is where tender value is actually won or lost."
    },
    {
      "heading": "Workshop agenda",
      "body": "Use the stage definition doc as a ninety-minute workshop script with commercial and bid leads. Agree entry and exit criteria aloud before anyone clicks HubSpot settings. Capture disagreements as open questions, not silent side meanings for Proposal."
    },
    {
      "heading": "Shadow period",
      "body": "Run old and new stages in parallel for two weeks on live deals if you are replacing a pipeline. Only then enforce the tender stages. Connect offline uploads after language is stable."
    },
    {
      "heading": "Properties to create",
      "body": "Create tender_reference, submission_deadline, main_contractor, qs_consultancy, gclid and offline_conversion_uploaded before training. Empty required fields on day one create shadow CRM usage in spreadsheets."
    },
    {
      "heading": "How teams actually adopt Tender-stage HubSpot deal pipeline template",
      "body": "Treat the CSV as a blueprint and the markdown as the contract. Commercial and bid leads should argue through entry and exit criteria before RevOps creates stages. Win probabilities in the file are placeholders; replace them with closed history within a month. Framework seats may need a parallel pipeline so call-offs do not pretend to be net new packages. Required properties without training create spreadsheet shadow systems. When the pipeline is live, point offline conversion uploads at Award or Bid submitted using the same stage names sales sees."
    },
    {
      "heading": "Quality bar for tender-hubspot-deal-pipeline",
      "body": "Quality bar for tender-hubspot-deal-pipeline: the download must be usable without a sales call. If a colleague cannot apply it in one sitting, the artefact is incomplete. Keep British English. Strip any client residue before publishing. Link the finished internal copy back to /resources/tender-hubspot-deal-pipeline/ so updates stay findable. Review the file when your CRM stages, GA4 events or account structure change, not only when someone asks for a refresh."
    }
  ],
  "downloads": [
    {
      "label": "Pipeline stages CSV",
      "href": "/downloads/tender-hubspot-pipeline-stages.csv",
      "description": "Stage order, label, and suggested win probability."
    },
    {
      "label": "Stage definition guide",
      "href": "/downloads/tender-hubspot-stage-definitions.md",
      "description": "Entry criteria, exit criteria and owner per stage."
    }
  ],
  "faqs": [
    {
      "q": "Can I import this CSV directly into HubSpot?",
      "a": "Treat it as a blueprint. Many portals require stages to be created in pipeline settings rather than CSV import."
    },
    {
      "q": "Should win probabilities match the CSV exactly?",
      "a": "No. Replace them with your closed-won history as soon as you have it."
    },
    {
      "q": "Where do frameworks sit?",
      "a": "Use Relationship or a parallel pipeline for framework seats, then open call-off deals at ITT or Bid."
    },
    {
      "q": "Do we need every stage?",
      "a": "If you skip PQQ, document why. Skipping without a rule is how reports rot."
    },
    {
      "q": "Does this include HubSpot properties?",
      "a": "The definition doc lists recommended properties. Create them as custom deal properties in your portal."
    }
  ],
  "relatedLinks": [
    {
      "href": "/industries/commercial-fit-out",
      "title": "Commercial fit-out marketing",
      "description": "Tender-led vertical context."
    },
    {
      "href": "/services/crm-implementation",
      "title": "CRM implementation",
      "description": "Pipeline builds that sales will use."
    },
    {
      "href": "/industries/construction",
      "title": "Construction marketing",
      "description": "Tender-led construction hub for CRM stage design."
    }
  ]
};

export default resource;
