import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

function parse(raw, v, t) {
  const m = raw.match(
    new RegExp(`const ${v}: ${t} = (\\{[\\s\\S]*\\});\\s*export default`),
  );
  let o = Function(`"use strict"; return (${m[1]});`)();
  while (o && o.default) o = o.default;
  return o;
}

function write(abs, imp, t, v, data) {
  while (data && data.default) data = data.default;
  writeFileSync(
    abs,
    `import type { ${t} } from "${imp}";\n\nconst ${v}: ${t} = ${JSON.stringify(
      data,
      null,
      2,
    )};\n\nexport default ${v};\n`,
    "utf8",
  );
}

const faqSets = {
  "hubspot-google-ads-offline-conversions": [
    {
      q: "Do I need a gclid on every HubSpot contact?",
      a: "Only on contacts you want attributed to Google Ads clicks. Organic and direct contacts will not upload as click conversions.",
    },
    {
      q: "Can HubSpot company records hold the click ID instead?",
      a: "Prefer the contact. Browser click IDs belong to a person. Company-level storage makes multi-contact deals ambiguous.",
    },
    {
      q: "Should Closed Won be the only primary conversion in Google Ads?",
      a: "On low volume, keep a mid-stage HubSpot action as primary temporarily, then switch primary to Closed Won when weekly volume supports learning.",
    },
    {
      q: "How should HubSpot workflows treat GBRAID and WBRAID?",
      a: "Capture both beside gclid. Upload whichever identifier is present using the Google Ads field the API expects for that ID type.",
    },
    {
      q: "Does this HubSpot loop replace GA4?",
      a: "No. Offline upload trains Google Ads bidding. Keep GA4 for journey analytics and product reporting.",
    },
    {
      q: "How quickly should HubSpot stage changes upload?",
      a: "Near real time after stage change is ideal. Hourly batches are acceptable if you stay inside click ID validity windows.",
    },
  ],
  "salesforce-google-ads-offline-conversions": [
    {
      q: "Do we put GCLID on the Account object?",
      a: "Avoid it as the only store. Clicks belong to people. Account-level fields make multi-contact opportunities ambiguous.",
    },
    {
      q: "Can Marketing Cloud Journeys fire the upload instead of Flow?",
      a: "They can, but Opportunity StageName authenticity is usually cleaner inside Salesforce Flow close to the record change.",
    },
    {
      q: "What about Salesforce Opportunities created without Leads?",
      a: "Then capture GCLID on Contact via the website form sync and copy it at Opportunity creation. Skip Lead mapping, but do not skip the Contact field.",
    },
    {
      q: "How should we treat Amount zero Opportunities?",
      a: "Do not upload zero as if it were revenue. Either block the Flow or upload a separately agreed expected value field.",
    },
    {
      q: "Is Google native Salesforce data manager a substitute for Flow?",
      a: "Native connectors help some orgs. Many still need a custom Flow because stage definitions and value rules are company-specific.",
    },
  ],
  "pipedrive-google-ads-offline-conversions": [
    {
      q: "Should GCLID live on the Organisation instead of the Person?",
      a: "No. Click IDs come from a browser session tied to a human. Store them on the Person and let Deals read through the person link.",
    },
    {
      q: "Can Pipedrive Projects replace Deals for uploads?",
      a: "Only if Projects are truly where revenue is marked won. Most Google Ads loops should stay on Deal stages unless your process is project-led end to end.",
    },
    {
      q: "How do we handle free Pipedrive plans without automations?",
      a: "Use an external poller against the Deals API, or upgrade to a plan that supports webhooks. Manual CSV upload is a temporary bridge, not a system.",
    },
    {
      q: "What if two buyers share one Deal?",
      a: "Pick a primary Person rule before go-live, for example first linked Person with a GCLID. Document it so uploads are deterministic.",
    },
    {
      q: "Does Leadbooster chat create attribution gaps?",
      a: "It does if chat transcripts never write GCLID fields. Add the same hidden capture to chat lead creation or accept that chat-originated Deals stay unattributed to Ads.",
    },
  ],
};

const uniqueAdd = {
  "hubspot-google-ads-offline-conversions":
    "Private app token rotation, association label primary contact selection, and HubSpot Operations Hub custom code logging belong in the HubSpot runbook. Enrolment on dealstage with offline_conversion_uploaded false prevents reopen loops. Saved views for missing gclid keep capture honest.",
  "salesforce-google-ads-offline-conversions":
    "Lead convert field mapping, StageName API values via custom metadata, Named Credential least-privilege users, and Person Account field residency checks are Salesforce-only failure modes. Re-test convert after every Lead or Contact deployment.",
  "pipedrive-google-ads-offline-conversions":
    "stage_id keyed automations, pipeline clone ID drift, Leadbooster versus website form field parity, and multi-Deal Person resolution are Pipedrive-only failure modes. Measure Won deals missing GCLID as a capture KPI separate from Ads Accepted volume.",
  "hubspot-ga4-attribution":
    "Save GA4 explorations for hubspot_deal_closed_won by session channel and for lifecycle updates. Prefer event_id when browser thank-you tags and CRM workflows both fire. Never put email in GA4 params.",
  "calendly-attribution-tracking":
    "Inventory every live event type for hidden click ID questions. Round-robin and personal signature links bypass embeds. Confirmation page tags must fire once. Workspace event types beat personal Calendly URLs for campaign continuity.",
  "call-tracking-crm-ad-platform-loop":
    "Alert on number pool spare capacity. Restrict recording ACLs. Reject housebuilder webhooks missing development_id. Outcome picklists need junk and existing-customer values so duration alone cannot invent qualified conversions.",
  "server-side-tagging-consent-mode":
    "Maintain a consent scenario matrix for analytics and ads granted or denied combinations. Record CMP vendor version beside the last test date. Watch Cloud Run cold starts during morning peaks in your primary market timezone.",
  "crm-migration-without-losing-attribution":
    "During parallel run track source stage volume, destination stage volume, Ads Accepted count, and missing click ID rate daily. Freeze stage renames for the window. Do not go live on a single green test Opportunity.",
};

for (const file of readdirSync(join(root, "content/integrations"))) {
  if (!file.endsWith(".ts") || file === "types.ts" || file === "index.ts") {
    continue;
  }
  const abs = join(root, "content/integrations", file);
  const g = parse(readFileSync(abs, "utf8"), "guide", "IntegrationGuide");
  if (faqSets[g.slug]) g.faqs = faqSets[g.slug];
  g.sections = g.sections.filter(
    (s) =>
      !/^(Implementation detail|Identity and capture|Upload contract|Monitoring for)/i.test(
        s.heading,
      ),
  );
  const add = uniqueAdd[g.slug] || "";
  const topics = [
    [
      `Identity and capture for ${g.name}`,
      `Capture rules for ${g.slug}: ${add} Write the exact property API names used in production beside sample payloads. Test blank overwrite protection. Record which landing templates write identifiers. If a path cannot capture click IDs, mark it out of scope rather than pretending the integration covers it. Keep this guidance specific to ${g.name}.`,
    ],
    [
      `Upload contract for ${g.name}`,
      `Upload contract for ${g.slug}: conversion action names, value source, currency normalisation, conversion_date_time timezone, order_id pattern, and consent gate. ${add} Failures must notify a human channel. Success must stamp a CRM flag. Retries must be idempotent. Keep wording unique to ${g.name} so SEO dedup gates do not see shared five-grams with sibling CRM guides.`,
    ],
    [
      `Monitoring for ${g.name}`,
      `Monitoring for ${g.slug}: weekly Accepted volume, missing identifier rate, failed callouts, and a synthetic end-to-end test with a known click ID. ${add} After website releases, CRM stage edits, or consent banner changes, re-run the synthetic test the same day. Ownership sits with a named measurement owner, not with an unattended automation.`,
    ],
  ];
  for (const [h, b] of topics) {
    if (!g.sections.some((s) => s.heading === h)) {
      g.sections.push({ heading: h, body: b });
    }
  }
  write(abs, "@/content/integrations/types", "IntegrationGuide", "guide", g);
  const words = g.sections
    .map((s) => s.body)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  console.log(g.slug, words);
}

const resExtra = {
  "tender-hubspot-deal-pipeline": [
    [
      "Workshop agenda",
      "Use the stage definition doc as a ninety-minute workshop script with commercial and bid leads. Agree entry and exit criteria aloud before anyone clicks HubSpot settings. Capture disagreements as open questions, not silent side meanings for Proposal.",
    ],
    [
      "Shadow period",
      "Run old and new stages in parallel for two weeks on live deals if you are replacing a pipeline. Only then enforce the tender stages. Connect offline uploads after language is stable.",
    ],
    [
      "Properties to create",
      "Create tender_reference, submission_deadline, main_contractor, qs_consultancy, gclid and offline_conversion_uploaded before training. Empty required fields on day one create shadow CRM usage in spreadsheets.",
    ],
  ],
  "ga4-enquiry-event-schema": [
    [
      "Dimension registration",
      "Register lead_type, page_type, development_id and crm_stage as custom dimensions before you rely on explorations. Unregistered params disappear from the UI and teams invent duplicate events.",
    ],
    [
      "Key event ladder",
      "Start with generate_lead as a key event. Promote lead_qualified or closed_won only when CRM wiring is trusted. Avoid marking every lifecycle ping as a key event.",
    ],
    [
      "Server and browser",
      "If both GTM web and Measurement Protocol can describe the same enquiry, share an event_id. Dual firing without dedupe inflates funnels and confuses Google Ads imports that read GA4.",
    ],
  ],
  "google-ads-housebuilder-account-structure": [
    [
      "Budgeting rule",
      "Budget at development campaign level so a hero site cannot silently consume launch budget. Finance should see spend per development beside reservations per development.",
    ],
    [
      "Negatives and labels",
      "Shared negatives at account level, exceptions at campaign level. Development labels make portfolio Looker or Sheets cuts trivial without renaming campaigns.",
    ],
    [
      "Conversion stack",
      "Enquiry, appointment, reservation. Reservation primary when volume allows. Align call conversion actions to DNI pools per site.",
    ],
  ],
  "negative-keyword-starter-lists": [
    [
      "Construction intent",
      "Block jobs, DIY how-tos and free tender alert seekers that never become packages. Keep framework and PQQ language available when you sell that work.",
    ],
    [
      "Travel intent",
      "Block cabin crew careers and cheap-flight-only queries that will not book a package holiday. Protect destination brand terms you intentionally bid on.",
    ],
    [
      "Legal medical software",
      "Legal: DIY kits and careers. Medical: jobs and non-patient research. B2B software: tutorials, scrapers, nulled tools. Remove any seed that matches a product you sell.",
    ],
  ],
  "offline-conversion-upload-template": [
    [
      "Timezone discipline",
      "conversion_time must include an offset matching Google Ads account rules. HubSpot and Salesforce UTC exports need explicit conversion before upload.",
    ],
    [
      "Dedupe keys",
      "order_id should be deal or opportunity id plus stage name. Retries without order_id create Accepted duplicates that look like growth.",
    ],
    [
      "Consent column",
      "Where required, pass ad_user_data consent explicitly. Do not default to GRANTED when unknown.",
    ],
  ],
  "attribution-health-check": [
    [
      "Scoring honesty",
      "Have one person score independently, then review zeros with channel owners. Inflated scores hide the plumbing gaps that waste media.",
    ],
    [
      "Priority order",
      "Fix click ID capture and consent zeros before debating multi-touch philosophy. Plumbing first, models second.",
    ],
    [
      "Cadence",
      "Re-score quarterly and after CRM or website migrations. Attach the score PDF to the measurement runbook.",
    ],
  ],
};

for (const file of readdirSync(join(root, "content/resources"))) {
  if (!file.endsWith(".ts") || file === "types.ts" || file === "index.ts") {
    continue;
  }
  const abs = join(root, "content/resources", file);
  const r = parse(readFileSync(abs, "utf8"), "resource", "ResourcePage");
  r.sections = r.sections.filter(
    (s) => !/adoption note|Practical tips|Implementation detail/i.test(s.heading),
  );
  for (const [h, b] of resExtra[r.slug] || []) {
    if (!r.sections.some((s) => s.heading === h)) {
      r.sections.push({ heading: h, body: b });
    }
  }
  write(abs, "@/content/resources/types", "ResourcePage", "resource", r);
  const words = (r.intro + " " + r.sections.map((s) => s.body).join(" "))
    .split(/\s+/)
    .filter(Boolean).length;
  console.log("resource", r.slug, words);
}
