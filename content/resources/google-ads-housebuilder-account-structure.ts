import type { ResourcePage } from "@/content/resources/types";

const resource: ResourcePage = {
  "slug": "google-ads-housebuilder-account-structure",
  "name": "Google Ads structure for multi-development housebuilders",
  "metaTitle": "Housebuilder Google Ads Account Structure",
  "metaDescription": "Campaign and naming template for multi-development housebuilder Google Ads accounts, with CSV blueprint.",
  "intro": "A campaign naming and structure template so each development can be budgeted, tracked and reported without drowning in one brand blob.",
  "sections": [
    {
      "heading": "What this is",
      "body": "A CSV blueprint of campaigns, ad groups and label conventions for housebuilders running multiple live developments, plus notes on conversion actions per site."
    },
    {
      "heading": "Who it is for",
      "body": "In-house marketing leads and agencies structuring Google Ads for regional or national home builders."
    },
    {
      "heading": "How to use it",
      "body": "Copy the naming pattern into your account. Create one searchable structure per development for brand and non-brand where volume allows. Attach development labels for portfolio reporting."
    },
    {
      "heading": "Mistake it prevents",
      "body": "A single national campaign where one hero site spends the budget while new launches starve, with no clean cost per reservation by development."
    },
    {
      "heading": "Budgeting rule",
      "body": "Budget at development campaign level so a hero site cannot silently consume launch budget. Finance should see spend per development beside reservations per development."
    },
    {
      "heading": "Negatives and labels",
      "body": "Shared negatives at account level, exceptions at campaign level. Development labels make portfolio Looker or Sheets cuts trivial without renaming campaigns."
    },
    {
      "heading": "Conversion stack",
      "body": "Enquiry, appointment, reservation. Reservation primary when volume allows. Align call conversion actions to DNI pools per site."
    },
    {
      "heading": "How teams actually adopt Google Ads structure for multi-development housebuilders",
      "body": "Separate corporate brand from development brand and development generic search. Budget per development so launches cannot starve. Shared negatives at account level, exceptions at campaign. Labels unlock portfolio reporting without renaming. Conversion stack is enquiry, appointment, reservation. Call actions must match DNI pools. Avoid one national Performance Max asset group that blends sites."
    },
    {
      "heading": "Quality bar for google-ads-housebuilder-account-structure",
      "body": "Quality bar for google-ads-housebuilder-account-structure: the download must be usable without a sales call. If a colleague cannot apply it in one sitting, the artefact is incomplete. Keep British English. Strip any client residue before publishing. Link the finished internal copy back to /resources/google-ads-housebuilder-account-structure/ so updates stay findable. Review the file when your CRM stages, GA4 events or account structure change, not only when someone asks for a refresh."
    }
  ],
  "downloads": [
    {
      "label": "Account structure CSV",
      "href": "/downloads/housebuilder-google-ads-structure.csv",
      "description": "Campaign, ad group and label examples."
    },
    {
      "label": "Structure notes",
      "href": "/downloads/housebuilder-google-ads-structure-notes.md",
      "description": "Budgeting, negatives and conversion tips."
    }
  ],
  "faqs": [
    {
      "q": "Should brand be separate per development?",
      "a": "Yes when developments have distinct names. Keep a master brand campaign for the corporate name."
    },
    {
      "q": "How do Performance Max sites fit?",
      "a": "If used, isolate by development asset group and still keep search for high-intent capture."
    },
    {
      "q": "Do we need a campaign per plot type?",
      "a": "Usually not at the start. Start per development, split later if volume justifies."
    },
    {
      "q": "Where do call conversions go?",
      "a": "Development-specific call actions when DNI pools are per site."
    },
    {
      "q": "Is this a shared MCC template?",
      "a": "It works inside one account or across accounts under an MCC. Naming consistency matters more than account count."
    }
  ],
  "relatedLinks": [
    {
      "href": "/industries/residential-home-builders",
      "title": "Residential home builder marketing",
      "description": "Vertical pillar for outlet and plot demand."
    },
    {
      "href": "/services/google-ads-management",
      "title": "Google Ads management",
      "description": "How we run paid search programmes."
    },
    {
      "href": "/services/call-tracking",
      "title": "Call tracking",
      "description": "Development-level phone attribution."
    },
    {
      "href": "/industries",
      "title": "All industry programmes",
      "description": "Browse every vertical hub currently published."
    }
  ]
};

export default resource;
