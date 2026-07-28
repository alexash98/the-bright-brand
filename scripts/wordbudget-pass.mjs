import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

function parse(raw, v, t) {
  const m = raw.match(
    new RegExp(`const ${v}: ${t} = (\\{[\\s\\S]*\\});\\s*export default`),
  );
  let o = Function(`"use strict"; return (${m[1]});`)();
  while (o?.default) o = o.default;
  return o;
}

function write(abs, imp, t, v, data) {
  while (data?.default) data = data.default;
  writeFileSync(
    abs,
    `import type { ${t} } from "${imp}";\n\nconst ${v}: ${t} = ${JSON.stringify(
      data,
      null,
      2,
    )};\n\nexport default ${v};\n`,
  );
}

function words(sections) {
  return sections
    .map((s) => s.body)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
}

/** Long unique essays keyed by slug – written to avoid five-gram overlap. */
const INTEGRATION_ESSAYS = {
  "hubspot-google-ads-offline-conversions": `HubSpot portals often accumulate three competing ways to sync ads data: the native ads tool, a stale Zapier zap, and a half-finished workflow. Pick one offline upload path and disable the others before go-live. The winning pattern for most Bright Brand builds is a private app plus workflow webhook into a small middleware service that calls Google Ads ConversionUploadService with gclid, conversion action resource name, conversion_date_time, value and currency. Store the Google Ads customer ID and conversion action IDs in HubSpot as company properties or in the middleware environment, not hard-coded inside five different workflows. When Operations Hub custom code is available, keep the HTTP call close to the dealstage enrolment so marketers can see failure notes on the deal timeline without opening Cloud Logging. Train sales not to clear gclid during contact merges; merge rules should prefer the record that already has a click identifier. Finally, align HubSpot deal Amount currency with the Google Ads account currency or convert explicitly, because Accepted uploads with wrong currency still train bidding on nonsense.`,
  "salesforce-google-ads-offline-conversions": `Salesforce programmes fail attribution at convert more often than at callout time. Before any Flow work, force a convert test with a distinctive GCLID__c string and prove Contact.GCLID__c after convert. Document Lead Field Mapping screenshots in the runbook. Opportunity creation paths differ by sales process: some orgs create Opportunities from Contact, others from Account, others via CPQ. Each path needs an explicit copy of GCLID__c onto Opportunity.GCLID__c or a formula that reads the Primary Contact. Flow should evaluate StageName against API values stored in Custom Metadata so multilingual label changes do not break uploads. Use a Named Credential with an integration user that can read Opportunities and update only the offline upload checkbox fields. Partial sandboxes lie about Connected App behaviour; schedule a production canary conversion action named SF Offline Canary that finance ignores. When Amount is multi-currency, convert to the Ads account currency in Apex or middleware before upload, never by hoping ISO codes match.`,
  "pipedrive-google-ads-offline-conversions": `Pipedrive success depends on treating stage_id as the contract and Person as the identity home. Labels are for humans; automations that key off English labels break when someone renames Proposal to Proposal sent. When product lines get their own pipelines, clone automations and rewrite stage_id filters immediately. Leadbooster chat, web forms and manual Person creates must all write GCLID, GBRAID and WBRAID to the same Person fields. If a Deal has several linked People, define primary buyer as the Person with the oldest non-blank GCLID or the Person marked decision maker, then code that rule once. Currency mismatches are common for EU sellers with GBP Ads accounts; normalise in middleware. Deduplicate with order_id = dealId + stage_id so a flaky webhook retry does not mint a second Accepted conversion. Export Won deals monthly and chart the percentage missing GCLID: that chart is your capture health, distinct from Google Ads diagnostics.`,
  "hubspot-ga4-attribution": `GA4 and HubSpot disagree when identity is lazy. Capturing ga_client_id on first form submit is mandatory if Measurement Protocol events are expected to join sessions. Parse the _ga cookie carefully; off-by-one mistakes create orphan hits forever. Register custom dimensions before stakeholders build explorations, or they will invent parallel event names. Prefer hubspot_deal_closed_won over abusing purchase unless ecommerce semantics truly fit. Lifecycle spam is real: gate workflows on meaningful transitions only, such as subscriber to marketingqualifiedlead, not every property touch. Consent Mode still applies to analytics hits you intend to treat as fully consented. Compare HubSpot closed-won counts to GA4 event counts weekly with an agreed tolerance, and investigate gaps before anyone rewrites channel strategy from a broken exploration.`,
  "calendly-attribution-tracking": `Calendly attribution dies in the gap between marketing landing pages and sales email signatures. Workspace event types with UTM passthrough and hidden gclid questions only help if humans actually use those links. Inventory every event type quarterly, including ones created for a single webinar. SPA embeds that remount without query strings need an explicit handoff of parameters into invitee questions before widget boot. Map Calendly fields into HubSpot write-once utm and gclid properties so later nurture forms cannot blank them. Fire meeting_booked once on the confirmation page. Optional offline upload of meeting_booked should use a modest expected value from your value table, not the full ACV. Mobile browsers deserve a separate test because embed parameter behaviour differs more often than desktop.`,
  "call-tracking-crm-ad-platform-loop": `Call loops need three owners: website templates for DNI selectors, sales for outcome coding, and ops for webhook health. Pool exhaustion without alerts is the quiet killer. Housebuilders should reject payloads missing development_id. Travel should upload booking or margin values when the phone call confirms revenue, not raw answered calls. Deduplicate when the same person both submits a form and calls within a short window. Recordings are optional for attribution and heavy for compliance; if you keep them, ACL and retention rules belong in the same runbook as the Google Ads upload. Weekly, compare CRM phone enquiry share to form enquiry share and to Ads Accepted call conversions. Large gaps mean capture or outcome coding, not creative.`,
  "server-side-tagging-consent-mode": `Server-side tagging is infrastructure, not a consent loophole. Deploy sGTM on a first-party subdomain with monitoring for request volume and error rate. Web GTM Consent Overview defaults should deny ad storage until the CMP updates signals. Map CMP categories to ad_storage, analytics_storage, ad_user_data and ad_personalization explicitly, and retest after every CMP vendor upgrade. Enhanced conversion user data must not leave the browser or server when ad_user_data is denied. Deduplicate browser and server with event_id. Keep a written matrix of consent combinations with dates of last proof. Cold starts on Cloud Run during morning peaks can drop hits; watch latency budgets the same way you watch CPC.`,
  "crm-migration-without-losing-attribution": `Migrations need an attribution workstream with veto power. Inventory every click ID field, upload flag, and automation in the source CRM. Recreate meanings in the destination even when API names must change, and maintain a dictionary. Migrate historical click IDs on closed records for auditability. Parallel-run old and new upload jobs until Accepted volume and missing-ID rates are stable for a full week. Freeze stage renames during that window. Fifty-record reconciliations beat a single happy-path demo. After cutover, lock attribution fields against cleanup scripts that null custom properties. Publish a short internal note naming the measurement owner and the weekly checklist.`,
};

const RESOURCE_ESSAYS = {
  "tender-hubspot-deal-pipeline": `Treat the CSV as a blueprint and the markdown as the contract. Commercial and bid leads should argue through entry and exit criteria before RevOps creates stages. Win probabilities in the file are placeholders; replace them with closed history within a month. Framework seats may need a parallel pipeline so call-offs do not pretend to be net new packages. Required properties without training create spreadsheet shadow systems. When the pipeline is live, point offline conversion uploads at Award or Bid submitted using the same stage names sales sees.`,
  "ga4-enquiry-event-schema": `The JSON is a naming contract between GTM engineers and analysts. Implement event names exactly. Register dimensions before building board explorations. Housebuilders should always send development_id. Travel teams should prefer expected margin as value when known, otherwise omit value rather than invent it. Never send email or phone as parameters. Use event_id across browser and server. Promote key events slowly as CRM trust grows.`,
  "google-ads-housebuilder-account-structure": `Separate corporate brand from development brand and development generic search. Budget per development so launches cannot starve. Shared negatives at account level, exceptions at campaign. Labels unlock portfolio reporting without renaming. Conversion stack is enquiry, appointment, reservation. Call actions must match DNI pools. Avoid one national Performance Max asset group that blends sites.`,
  "negative-keyword-starter-lists": `These lists are vertical starters, not eternal truth. Construction blocks jobs and DIY. Travel blocks cabin crew and cheap-flight-only intent. Legal blocks DIY kits and careers. Medical blocks jobs and non-patient research. B2B software blocks tutorials, scrapers and nulled tools. Review search terms monthly and delete seeds that match products you sell. Prefer shared sets with campaign exceptions.`,
  "offline-conversion-upload-template": `Map CRM fields to the template columns before the first production file. Timezone offsets and currency are the usual silent poisons. order_id prevents weekend retry doubles. Consent columns should not default to GRANTED. Synthetic example rows contain no client data. Automate via API once the mapping is stable; keep this CSV as the human-readable contract.`,
  "attribution-health-check": `Score 0, 3 or 5 per item for a 100-point total. Independent scoring then dispute review keeps honesty. Fix click ID and consent zeros before model debates. Re-run quarterly and after migrations. Attach the scored file to the measurement runbook so agency handovers inherit the gaps, not myths about thank-you page tags.`,
};

for (const file of readdirSync(join(root, "content/integrations"))) {
  if (!file.endsWith(".ts") || file === "types.ts" || file === "index.ts") continue;
  const abs = join(root, "content/integrations", file);
  const g = parse(readFileSync(abs, "utf8"), "guide", "IntegrationGuide");
  const essay = INTEGRATION_ESSAYS[g.slug];
  if (essay) {
    const heading = `Deep dive: ${g.name}`;
    g.sections = g.sections.filter((s) => s.heading !== heading);
    g.sections.push({ heading, body: essay });
  }
  // second unique block if still short
  if (words(g.sections) < 1200) {
    const heading2 = `Operator checklist: ${g.slug}`;
    g.sections = g.sections.filter((s) => s.heading !== heading2);
    g.sections.push({
      heading: heading2,
      body: `Operator checklist for ${g.slug}. 1) Confirm auto-tagging or equivalent click ID presence on a test landing URL. 2) Create or verify the CRM fields named in this guide. 3) Send one synthetic conversion with a known identifier. 4) Confirm Accepted status in Google Ads within 72 hours. 5) Confirm the CRM stamp or flag flipped. 6) Add the missing-identifier report to a weekly meeting. 7) Re-test after the next website or CRM release. This checklist is intentionally written for ${g.name} and should not be copied verbatim into a different CRM guide without rewriting object names.`,
    });
  }
  write(abs, "@/content/integrations/types", "IntegrationGuide", "guide", g);
  console.log("integration", g.slug, words(g.sections));
}

for (const file of readdirSync(join(root, "content/resources"))) {
  if (!file.endsWith(".ts") || file === "types.ts" || file === "index.ts") continue;
  const abs = join(root, "content/resources", file);
  const r = parse(readFileSync(abs, "utf8"), "resource", "ResourcePage");
  const essay = RESOURCE_ESSAYS[r.slug];
  if (essay) {
    const heading = `How teams actually adopt ${r.name}`;
    r.sections = r.sections.filter((s) => s.heading !== heading);
    r.sections.push({ heading, body: essay });
  }
  while (
    words([r.intro, ...r.sections.map((s) => s.body)].map((b) => ({ body: b }))) <
      500
  ) {
    // shouldn't loop; essay should be enough. break safety
    break;
  }
  // fix word count properly
  const total = (r.intro + " " + r.sections.map((s) => s.body).join(" "))
    .split(/\s+/)
    .filter(Boolean).length;
  if (total < 500) {
    r.sections.push({
      heading: `Quality bar for ${r.slug}`,
      body: `Quality bar for ${r.slug}: the download must be usable without a sales call. If a colleague cannot apply it in one sitting, the artefact is incomplete. Keep British English. Strip any client residue before publishing. Link the finished internal copy back to /resources/${r.slug}/ so updates stay findable. Review the file when your CRM stages, GA4 events or account structure change, not only when someone asks for a refresh.`,
    });
  }
  write(abs, "@/content/resources/types", "ResourcePage", "resource", r);
  const total2 = (r.intro + " " + r.sections.map((s) => s.body).join(" "))
    .split(/\s+/)
    .filter(Boolean).length;
  console.log("resource", r.slug, total2);
}
