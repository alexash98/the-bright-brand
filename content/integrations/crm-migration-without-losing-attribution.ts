import type { IntegrationGuide } from "@/content/integrations/types";

const guide: IntegrationGuide = {
  "slug": "crm-migration-without-losing-attribution",
  "name": "CRM migration without losing attribution",
  "metaTitle": "CRM Migration Without Losing Attribution",
  "metaDescription": "Migrate HubSpot, Salesforce or Pipedrive without dropping GCLID fields, conversion upload history or stage definitions that power attribution.",
  "intro": "Move CRM platforms without wiping click identifiers, stage semantics or offline conversion history that paid media still depends on.",
  "unverifiedUiNotes": [
    "Export and import wizards differ by CRM vendor and edition. Treat field mapping as an operation to complete in your tenant's current import tools."
  ],
  "sections": [
    {
      "heading": "What this integration solves",
      "body": "CRM migrations often succeed as contact moves and fail as attribution moves. GCLID fields get dropped, stage names change meaning, and offline upload automations point at dead properties. Paid media looks like it fell off a cliff when only the wiring moved.\n\nThis guide is a migration checklist for attribution continuity across HubSpot, Salesforce and Pipedrive moves."
    },
    {
      "heading": "Prerequisites and permissions",
      "body": "Admins on old and new CRM, Google Ads access, a freeze window for stage changes, and a mapping workbook that lists every attribution field: gclid, gbraid, wbraid, ga_client_id, original utm fields, offline upload flags, and conversion external IDs."
    },
    {
      "heading": "The build, step by step",
      "body": "1. Inventory attribution fields and automations in the source CRM. Export sample rows with known paid conversions.\n\n2. Recreate fields in the destination with identical meaning. Prefer same API names where possible.\n\n3. Map stages with a written dictionary. Do not collapse PQQ and ITT into Proposal without documenting the loss.\n\n4. Migrate historical click IDs even for closed records; you may still need them for lookbacks and audits.\n\n5. Rebuild upload jobs against new field API names. Keep the old job running until parity checks pass.\n\n6. Parallel run: for two weeks, compare upload volume and accepted conversions pre/post.\n\n7. Only then decommission the source automations."
    },
    {
      "heading": "Gotchas",
      "body": "Deduping contacts can discard the contact that held the gclid. Activity history migrations that rewrite timestamps break conversion_date_time audits. Soft-deleted marketing contacts excluded from export. Re-labelling stages without updating Google Ads conversion action names. Currency field defaults changing on import."
    },
    {
      "heading": "How to verify it is working",
      "body": "Reconcile 50 known paid-won records: click ID present, stage equivalent, upload flag equivalent, and a fresh stage change produces an Accepted upload in Google Ads. Compare weekly Accepted count to the pre-migration baseline."
    },
    {
      "heading": "What breaks it later",
      "body": "Post-migration cleanup scripts that null custom fields, and new sales processes that invent stages without measurement owners. Keep an attribution field lock list."
    },
    {
      "heading": "Identity and capture for CRM migration without losing attribution",
      "body": "Inventory every click ID field, upload flag and stage trigger in the source CRM before cutover. Rebuild meanings in the destination even when API names change, and keep a field dictionary. Historical IDs on closed records migrate for auditability, not for bidding nostalgia."
    },
    {
      "heading": "Upload contract for CRM migration without losing attribution",
      "body": "Parallel-run old and new upload jobs until Ads Accepted volume and missing-ID rates are stable for a full week. Freeze stage renames during that window. Do not cut over on a single green test Opportunity. Fifty-record reconciliations beat a demo."
    },
    {
      "heading": "Monitoring for CRM migration without losing attribution",
      "body": "Daily during parallel run: source stage volume, destination stage volume, Ads Accepted count and missing click ID rate. After cutover, lock attribution fields against cleanup scripts that null custom properties. Name a measurement owner with veto power over stage redesigns."
    },
    {
      "heading": "Deep dive: CRM migration without losing attribution",
      "body": "Migrations fail attribution when the workstream is treated as optional IT. Treat measurement as a go-live gate. Publish a short internal note covering the dictionary, the parallel-run exit criteria and who can rename stages after cutover."
    },
    {
      "heading": "Operator checklist: crm-migration-without-losing-attribution",
      "body": "1) Source field inventory signed. 2) Destination dictionary complete. 3) Historical IDs migrated. 4) Parallel run stable for seven days. 5) Fifty-record sample reconciles. 6) Attribution fields locked. 7) Measurement owner named in writing."
    }
  ],
  "faqs": [
    {
      "q": "Should we migrate closed-lost click IDs?",
      "a": "Yes. Audits and late corrections need them, and storage cost is trivial versus media waste."
    },
    {
      "q": "Can we change stage names during migration?",
      "a": "Only with a written mapping and updated upload rules. Otherwise keep names stable until measurement parity is proven."
    },
    {
      "q": "Do Google Ads conversion actions need recreating?",
      "a": "Not if names and resource IDs remain; update middleware field references. Create new actions only when stage economics change."
    },
    {
      "q": "What about historical offline uploads already in Google Ads?",
      "a": "They remain in Ads. Your job is not to re-upload history blindly; it is to keep new events flowing with valid IDs."
    },
    {
      "q": "How long should the parallel run last?",
      "a": "At least one full weekly bidding cycle, longer on low-volume accounts."
    }
  ],
  "relatedLinks": [
    {
      "href": "/services/crm-implementation",
      "title": "CRM implementation",
      "description": "Migrations and rebuilds with measurement intact."
    },
    {
      "href": "/industries/commercial-fit-out",
      "title": "Fit-out CRM implementation",
      "description": "Tender stage definitions worth preserving."
    },
    {
      "href": "/integrations/hubspot-google-ads-offline-conversions",
      "title": "HubSpot offline conversions",
      "description": "Rebuild target for HubSpot destinations."
    },
    {
      "href": "/integrations/pipedrive-google-ads-offline-conversions",
      "title": "Pipedrive offline conversions",
      "description": "Rebuild target for Pipedrive destinations."
    }
  ]
};

export default guide;
