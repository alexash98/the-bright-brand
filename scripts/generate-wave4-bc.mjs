/**
 * One-shot generator for Wave 4B/4C content + downloads.
 * Safe to re-run; overwrites generated files.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = process.cwd();

function write(rel, content) {
  const abs = join(root, rel);
  mkdirSync(dirname(abs), { recursive: true });
  writeFileSync(abs, content, "utf8");
  console.log("wrote", rel);
}

function toTsModule(typeImport, typeName, varName, data) {
  return `import type { ${typeName} } from "${typeImport}";\n\nconst ${varName}: ${typeName} = ${JSON.stringify(
    data,
    null,
    2,
  )};\n\nexport default ${varName};\n`;
}

const uiAds =
  "Google Ads conversion import menus move between Goals and Tools experiences. Configure offline click conversion actions wherever your account surfaces conversion settings.";
const uiHs =
  "HubSpot private app and workflow UIs vary by portal edition. Confirm scopes and workflow actions in your portal rather than relying on a fixed click path.";
const uiSf =
  "Salesforce Setup paths differ between Lightning and Classic and by edition. Locate objects and fields via Object Manager when menu labels differ.";
const uiPd =
  "Pipedrive Settings labels vary by plan. Find custom fields and automations under your account settings screens.";

function baseFaqs(prefix) {
  return [
    {
      q: `Who should own the ${prefix} build?`,
      a: "A marketer who understands the funnel plus someone with admin access to both systems. Do not leave click ID fields editable by every sales user without training.",
    },
    {
      q: "How do we know uploads are accepted?",
      a: "Check the conversion action diagnostics or upload status view in Google Ads within 24 to 72 hours, and reconcile a sample of CRM records.",
    },
    {
      q: "What if the deal is reopened after Closed Lost?",
      a: "Default to blocking a second upload unless you deliberately design a new stage-value event with a new external conversion ID.",
    },
    {
      q: "Which timezone should conversion timestamps use?",
      a: "Follow Google Ads account timezone rules for conversion_date_time. Convert from CRM UTC explicitly.",
    },
    {
      q: "Can we upload without a GCLID?",
      a: "Use GBRAID or WBRAID when those are the identifiers present. Enhanced Conversions for Leads can help match, but click IDs remain the strongest key.",
    },
  ];
}

const guides = [
  {
    slug: "hubspot-google-ads-offline-conversions",
    name: "HubSpot to Google Ads offline conversions",
    metaTitle: "HubSpot Google Ads Offline Conversions Guide",
    metaDescription:
      "Implement HubSpot to Google Ads offline conversion upload with GCLID capture, stage values, deduplication and verification checks.",
    intro:
      "Wire HubSpot deal stages into Google Ads click conversions so bidding learns from qualified pipeline and closed revenue, not only form submissions.",
    unverifiedUiNotes: [uiAds, uiHs],
    sections: [
      {
        heading: "What this integration solves",
        body: "Without offline conversion import, Google Ads optimises to the earliest browser event HubSpot can see, usually a form submission. On long B2B cycles that event is a weak proxy for revenue. The failure mode is familiar: Smart Bidding scales lead volume while sales win rate and average contract value fall, and finance cannot reconcile media return to closed-won.\n\nThis build captures gclid (and gbraid or wbraid where present) on the HubSpot contact, keeps those values through deal association, and uploads conversion events when a deal hits agreed stages with a monetary value.",
      },
      {
        heading: "Prerequisites and permissions",
        body: "You need Google Ads admin or standard access to create conversion actions, and a HubSpot user who can create properties, workflows and a private app. Confirm auto-tagging is on in Google Ads so gclid appears on landing URLs.\n\nCreate HubSpot contact properties: gclid (single-line text), gbraid, wbraid, and optionally google_click_timestamp (datetime). On deals, add offline_conversion_uploaded (checkbox) and rely on Amount for closed value. Use a private app with contact and deal read scopes, plus a secure middle layer (workflow webhook, Operations Hub custom code, or n8n) that calls the Google Ads ConversionUploadService or your account's offline import path.",
      },
      {
        heading: "The build, step by step",
        body: "1. Capture click IDs on thank-you pages and forms via hidden fields mapped to contact properties. Never overwrite a populated gclid with blank on later visits.\n\n2. Create Google Ads conversion actions per stage, for example HubSpot Qualified Opportunity and HubSpot Closed Won. Use an offline click conversion import type. Set count to One. Include only the primary action in Conversions for bidding.\n\n3. Define values. Use expected revenue at mid stages and Amount at closed-won. Currency must match the Google Ads account currency.\n\n4. On stage entry, upload gclid or gbraid/wbraid, conversion action resource name, conversion_date_time with timezone offset, conversion_value and currency_code. Set offline_conversion_uploaded to prevent duplicates.\n\n5. Gate on consent fields so ad_user_data and ad_personalization requirements in your policy are respected before upload.",
      },
      {
        heading: "Gotchas",
        body: "Click identifiers expire. Late closed-won uploads without a still-valid ID do not train bidding. Keep mid-stage bridges.\n\nHubSpot stores datetimes in UTC; Google Ads expects conversion_date_time formatted for the account timezone.\n\nDeduplicate with a stable order_id such as dealId plus stage name.\n\nUpload stage-change time, not original click time.\n\nReopened deals should not silently re-upload.\n\nContact merges can wipe custom properties if merge rules are wrong. Protect gclid as non-clearing.",
      },
      {
        heading: "How to verify it is working",
        body: "Confirm Accepted rows on the conversion action within 24 to 72 hours. Take one test deal: contact has gclid, stage fired, middleware log shows success, and the conversion appears on the originating campaign after Google's processing delay. In HubSpot, report deals at stage with offline_conversion_uploaded true and spot-check five.",
      },
      {
        heading: "What breaks it later",
        body: "Expired private app tokens, paused workflows, currency changes, and reps editing click ID fields. Monitor weekly acceptance rate and staged deals missing gclid.",
      },
    ],
    faqs: baseFaqs("HubSpot"),
    relatedLinks: [
      {
        href: "/services/conversion-tracking-attribution",
        title: "Conversion tracking and attribution",
        description: "Service pillar for offline measurement builds.",
      },
      {
        href: "/industries/commercial-fit-out/conversion-tracking-attribution",
        title: "Attribution for commercial fit-out",
        description: "Tender cycles that need stage-valued uploads.",
      },
      {
        href: "/integrations/salesforce-google-ads-offline-conversions",
        title: "Salesforce offline conversions guide",
        description: "Same pattern on Salesforce objects.",
      },
      {
        href: "/integrations/hubspot-ga4-attribution",
        title: "HubSpot and GA4 attribution",
        description: "Analytics companion to Ads upload.",
      },
    ],
  },
  {
    slug: "salesforce-google-ads-offline-conversions",
    name: "Salesforce to Google Ads offline conversions",
    metaTitle: "Salesforce Google Ads Offline Conversions",
    metaDescription:
      "Map Salesforce Leads, Contacts and Opportunities to Google Ads offline conversions with GCLID fields, stage triggers and deduplication.",
    intro:
      "Carry Google click identifiers from Lead through Contact and Opportunity so Salesforce stage changes can upload valued conversions into Google Ads.",
    unverifiedUiNotes: [uiAds, uiSf],
    sections: [
      {
        heading: "What this integration solves",
        body: "Salesforce-heavy sales teams often lose gclid at Lead Convert. Without a field mapping plan, Google Ads only sees web conversions and never learns from Opportunity Closed Won. Budgets then chase MQL volume that sales discounts.\n\nThis guide keeps GCLID__c (or your agreed API name) from Web-to-Lead or form middleware onto Contact, mirrors it to Opportunity when needed, and uploads on StageName transitions you choose.",
      },
      {
        heading: "Prerequisites and permissions",
        body: "Salesforce System Administrator access to create custom fields on Lead, Contact and Opportunity. Google Ads access to create offline click conversion actions. A middleware option: Salesforce Flow calling an invocable Apex/HTTP callout, MuleSoft, or n8n listening to Opportunity Change Data Capture.\n\nCreate custom fields: GCLID__c Text(255), GBRAID__c, WBRAID__c, Google_Click_Date__c (DateTime), Offline_Conversion_Uploaded__c (Checkbox). Ensure Lead mapping copies GCLID__c to Contact on convert.",
      },
      {
        heading: "The build, step by step",
        body: "1. Capture identifiers on the landing experience into Lead fields via Web-to-Lead hidden fields or form handler.\n\n2. Map Lead to Contact on convert. Test convert with a sample Lead so GCLID__c survives.\n\n3. When an Opportunity is created from Contact, copy GCLID__c onto a Opportunity.GCLID__c field if your upload job reads Opportunities.\n\n4. Create Google Ads conversion actions aligned to StageName values, for example SF Opportunity Qualified and SF Closed Won.\n\n5. Flow criteria: StageName equals target, Offline_Conversion_Uploaded__c is false, GCLID__c is not blank. Callout payload includes conversion_date_time from LastStageChangeDate or NOW(), value from Amount, currency from CurrencyIsoCode.\n\n6. On success, set Offline_Conversion_Uploaded__c true and stamp Offline_Conversion_Upload_Log__c.",
      },
      {
        heading: "Gotchas",
        body: "Lead Convert field mapping is the number one silent failure. Person Accounts change where fields live. Multi-currency orgs must convert Amount into the Ads account currency. Partial sandbox tests do not prove production callout auth. Opportunity StageName picklist API values, not labels, should drive Flow conditions. Reopened Closed Lost opportunities need a reset policy for the uploaded checkbox.",
      },
      {
        heading: "How to verify it is working",
        body: "Run a named test Opportunity through StageName changes in a full sandbox with callouts enabled, then in production with a low-value test action first. Confirm Google Ads upload acceptance and Salesforce field stamps. Compare campaign ID from the original click using Google Ads click reports where available.",
      },
      {
        heading: "What breaks it later",
        body: "Deployments that omit field mappings, Connected App secret rotation, StageName renames, and duplicate Management of Opportunities after account merges. Add a weekly report: Opportunities in Closed Won with blank GCLID__c or uploaded false.",
      },
    ],
    faqs: baseFaqs("Salesforce"),
    relatedLinks: [
      {
        href: "/services/crm-implementation",
        title: "CRM implementation",
        description: "Salesforce builds that protect attribution fields.",
      },
      {
        href: "/industries/b2b-saas-and-platforms",
        title: "Procurement marketing programmes",
        description: "Long Salesforce cycles and offline revenue.",
      },
      {
        href: "/integrations/hubspot-google-ads-offline-conversions",
        title: "HubSpot offline conversions guide",
        description: "Parallel pattern in HubSpot.",
      },
      {
        href: "/integrations/crm-migration-without-losing-attribution",
        title: "CRM migration without losing attribution",
        description: "Keep click IDs when you move platforms.",
      },
    ],
  },
  {
    slug: "hubspot-ga4-attribution",
    name: "HubSpot and GA4 attribution",
    metaTitle: "HubSpot GA4 Attribution Implementation Guide",
    metaDescription:
      "Connect HubSpot lifecycle stages to GA4 events and user properties so analytics attribution matches CRM reality.",
    intro:
      "Send HubSpot lifecycle and deal milestones into GA4 as events with stable user identity so reports stop disagreeing with the CRM.",
    unverifiedUiNotes: [
      "GA4 Admin event modification and audience UIs change frequently. Create events and custom dimensions in Admin wherever your property surfaces them.",
      uiHs,
    ],
    sections: [
      {
        heading: "What this integration solves",
        body: "GA4 alone ends at on-site events. HubSpot alone lacks clean multi-channel path data. Without a bridge, marketing argues from sessions while sales argues from deals. The failure mode is two dashboards and no shared conversion definition.\n\nThis build emits GA4 events when HubSpot lifecycle_stage or dealstage changes, keyed by a shared client_id or user_id strategy you document.",
      },
      {
        heading: "Prerequisites and permissions",
        body: "GA4 Editor access, Google Tag Manager or server-side GTM recommended, HubSpot workflow capability, and agreement on identity: email hash as user_id only where policy allows, plus browser client_id stored on the HubSpot contact as ga_client_id.",
      },
      {
        heading: "The build, step by step",
        body: "1. Capture ga_client_id from the first-party cookie (_ga parsed per Google docs) into a HubSpot contact property on form submit.\n\n2. In GA4, register custom dimensions for hubspot_lifecycle_stage and hubspot_deal_stage (event scoped) and deal_amount if you send values.\n\n3. Workflow on lifecycle stage change calls Measurement Protocol or a webhook into sGTM with client_id, user_id if used, event name hubspot_lifecycle_update, and params.\n\n4. Separate event hubspot_deal_closed_won with value and currency for revenue exploration.\n\n5. Mark key events carefully. Do not mark every lifecycle update as a key event or you will pollute reports.",
      },
      {
        heading: "Gotchas",
        body: "Measurement Protocol events without a valid client_id orphan sessions. Consent Mode must allow analytics_storage before you treat hits as fully consented. HubSpot timestamps versus GA4 event time can drift. Avoid dual firing from browser and server for the same stage without event_id deduplication.",
      },
      {
        heading: "How to verify it is working",
        body: "Use GA4 DebugView with a test contact, trigger a lifecycle change, and confirm the event and params. In Explorations, build a free-form report of session source against hubspot_deal_closed_won count.",
      },
      {
        heading: "What breaks it later",
        body: "Cookie changes, Consent Mode defaults flipped to denied without modelling, and HubSpot workflows cloned without the webhook. Quarterly audit of event volume versus CRM stage volume.",
      },
    ],
    faqs: [
      {
        q: "Should Closed Won be a GA4 purchase event?",
        a: "You can use purchase if the schema fits, but a clearly named hubspot_deal_closed_won event is often cleaner for B2B.",
      },
      {
        q: "Is user_id required?",
        a: "No, but a stable identity strategy improves cross-device stitching where policy allows.",
      },
      {
        q: "Can HubSpot native GA4 integration replace this?",
        a: "Native features help with basic page and form signals. Stage-valued deal events usually still need a custom workflow.",
      },
      {
        q: "Does this train Google Ads?",
        a: "Not by itself. Use the offline conversions guide to train Ads. This guide aligns analytics.",
      },
      {
        q: "What about PII in event params?",
        a: "Never send raw email or phone in GA4 event parameters. Hash or omit.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/conversion-tracking-attribution",
        title: "Conversion tracking and attribution",
        description: "Broader measurement programme design.",
      },
      {
        href: "/industries/b2b-saas-and-platforms",
        title: "B2B SaaS marketing",
        description: "Enquiry-led funnels that need CRM-aligned GA4.",
      },
      {
        href: "/integrations/hubspot-google-ads-offline-conversions",
        title: "HubSpot offline conversions for Google Ads",
        description: "Bidding-side counterpart.",
      },
      {
        href: "/integrations/server-side-tagging-consent-mode",
        title: "Server-side tagging and Consent Mode",
        description: "Hardening the collection layer.",
      },
    ],
  },
  {
    slug: "calendly-attribution-tracking",
    name: "Calendly attribution tracking",
    metaTitle: "Calendly Attribution Tracking Setup Guide",
    metaDescription:
      "Pass UTM parameters and click IDs through Calendly into your CRM so booked meetings keep paid media attribution.",
    intro:
      "Stop losing campaign attribution at the booking widget by carrying UTM parameters and click IDs through Calendly into HubSpot or your CRM.",
    unverifiedUiNotes: [
      "Calendly event type and invitee question settings move within the Calendly product UI. Configure UTM passthrough and questions on the event type wherever those controls appear.",
    ],
    sections: [
      {
        heading: "What this integration solves",
        body: "Calendly is often the conversion. If the embed drops query parameters, CRM meetings arrive as Direct or Calendly with no campaign. Paid social and search then look broken while SDRs are full.\n\nThe build passes utm_source, utm_medium, utm_campaign, utm_content, utm_term, gclid, gbraid and wbraid into invitee questions or Calendly's UTM passthrough, then into HubSpot via native sync or webhook.",
      },
      {
        heading: "Prerequisites and permissions",
        body: "Calendly owner access on the event types that sales uses. CRM admin to map custom fields. Landing pages must preserve query parameters into the embed (avoid stripping on redirect).",
      },
      {
        heading: "The build, step by step",
        body: "1. Enable UTM parameter passthrough on the event type if your Calendly plan exposes it.\n\n2. Add hidden invitee questions for gclid, gbraid, wbraid when passthrough does not cover click IDs. Populate them with on-page JavaScript reading location.search before the widget loads.\n\n3. Map Calendly to HubSpot (or Salesforce) fields one-to-one. Meeting booked should create or update contact and set a meeting_booked_at datetime.\n\n4. Fire a GA4 generate_lead or meeting_booked event on the confirmation page with campaign params still present.\n\n5. Optionally upload meeting_booked as an offline conversion with a modest expected value.",
      },
      {
        heading: "Gotchas",
        body: "Inline embeds inside SPAs that remount without query strings. Branded Calendly share links that bypass your site. Multiple event types with inconsistent questions. Timezone on meeting start versus booking time for conversion timestamps. GDPR: booking forms still need consent language.",
      },
      {
        heading: "How to verify it is working",
        body: "Book a test meeting from a URL that includes utm_campaign=test_calendly and a fake gclid=test123. Confirm those values on the Calendly invitee payload and on the CRM contact. Confirm the GA4 event in DebugView.",
      },
      {
        heading: "What breaks it later",
        body: "New event types created without the hidden questions, theme redesigns that replace the embed, and CRM field API name changes. Quarterly checklist of all active event types.",
      },
    ],
    faqs: [
      {
        q: "Does Calendly native HubSpot sync include GCLID?",
        a: "Only if you map a question or field that carries it. Do not assume UTM passthrough covers click IDs.",
      },
      {
        q: "Should every meeting be a Google Ads primary conversion?",
        a: "Often as a secondary or observation conversion. Primary may stay at qualified or closed depending on volume.",
      },
      {
        q: "What if prospects book from an email link?",
        a: "Email links rarely have gclid. Attribution should fall back to CRM original source, not invent a paid click.",
      },
      {
        q: "Can we use Calendly routing forms?",
        a: "Yes, but repeat the same hidden field pattern on the routing form as on the event type.",
      },
      {
        q: "How do we handle no-shows?",
        a: "Keep meeting_booked as booked intent. Use a separate CRM outcome for held meetings if you optimise to show rate.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/conversion-tracking-attribution",
        title: "Conversion tracking and attribution",
        description: "Measurement design across booking tools.",
      },
      {
        href: "/industries/medical-healthcare",
        title: "Medical and healthcare marketing",
        description: "Consultation booking as the key conversion.",
      },
      {
        href: "/integrations/hubspot-google-ads-offline-conversions",
        title: "HubSpot offline conversions",
        description: "Upload booked meetings as valued events.",
      },
      {
        href: "/integrations/call-tracking-crm-ad-platform-loop",
        title: "Call tracking CRM loop",
        description: "When bookings still become phone closes.",
      },
    ],
  },
  {
    slug: "call-tracking-crm-ad-platform-loop",
    name: "Call tracking to CRM to ad platform loop",
    metaTitle: "Call Tracking CRM Ad Platform Loop Guide",
    metaDescription:
      "Connect dynamic number insertion, CRM call outcomes and offline conversion upload so phone revenue trains paid media.",
    intro:
      "Close the loop from dynamic number insertion through CRM call outcomes and back into Google Ads or Meta as valued offline conversions.",
    unverifiedUiNotes: [
      "Call tracking vendor admin UIs (pool numbers, DNI triggers, webhook payloads) differ by vendor. Map the operations below to your vendor's current settings screens.",
    ],
    sections: [
      {
        heading: "What this integration solves",
        body: "Phone-heavy businesses lose attribution when the winning channel is a call. Form-only conversion actions starve search terms and campaigns that drive calls. The loop fixes that: DNI swaps numbers by source, the call lands in CRM with the original gclid, and a qualified or closed outcome uploads with value.",
      },
      {
        heading: "Prerequisites and permissions",
        body: "A call tracking vendor with DNI and webhooks, CRM admin access, Google Ads offline conversion actions, and a privacy review for call recording and personal data. Landing templates must load the DNI script after a consent decision where required.",
      },
      {
        heading: "The build, step by step",
        body: "1. Configure number pools per channel or per development/location.\n\n2. Pass gclid and UTMs into the call tracking session parameters.\n\n3. Webhook on call completed: create or update CRM contact/deal with call_duration, call_recording_url (ACL restricted), gclid, and call_source.\n\n4. Sales sets call_outcome (qualified, booked, closed, junk).\n\n5. Middleware uploads to Google Ads when outcome hits qualified or closed, with values from your offline value table.\n\n6. Optionally send a GA4 call_qualified event via Measurement Protocol.",
      },
      {
        heading: "Gotchas",
        body: "DNI flashing wrong numbers on slow consent. Spa navigation without re-running DNI. Shared reception lines without pool isolation. Uploading every 10-second call as a conversion. Currency and timezone on upload. Deduplicate when the same person both calls and submits a form.",
      },
      {
        heading: "How to verify it is working",
        body: "Call a tracked number from a URL with gclid=test, confirm CRM record fields, mark qualified, confirm Ads upload acceptance. Compare phone enquiry share in CRM to form volume for sanity.",
      },
      {
        heading: "What breaks it later",
        body: "Number pool exhaustion, website template changes removing tel: classes, and CRM outcome picklist edits. Weekly pool health and webhook failure alerts.",
      },
    ],
    faqs: [
      {
        q: "Should raw answered calls be primary conversions?",
        a: "Usually no. Prefer qualified or closed call outcomes with values.",
      },
      {
        q: "Do we need recording?",
        a: "Not for attribution. Recording helps QA but increases compliance load.",
      },
      {
        q: "How does this interact with Consent Mode?",
        a: "Serve DNI only when your consent design allows the associated tags, or use cookieless first-party methods your counsel approves.",
      },
      {
        q: "Can Meta receive call conversions too?",
        a: "Yes via offline event upload with the correct click ID or matched customer data under policy.",
      },
      {
        q: "What about housebuilder multi-site numbers?",
        a: "Use one pool per development so cost per reservation can be cut by site.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/call-tracking",
        title: "Call tracking service",
        description: "Programme design for phone-led funnels.",
      },
      {
        href: "/industries/residential-home-builders/call-tracking",
        title: "Call tracking for home builders",
        description: "Development-level implementation.",
      },
      {
        href: "/integrations/hubspot-google-ads-offline-conversions",
        title: "HubSpot offline conversions",
        description: "Upload path once the CRM has outcomes.",
      },
      {
        href: "/tools/call-tracking-roi-calculator",
        title: "Call tracking ROI calculator",
        description: "Quantify untracked phone revenue.",
      },
    ],
  },
  {
    slug: "pipedrive-google-ads-offline-conversions",
    name: "Pipedrive to Google Ads offline conversions",
    metaTitle: "Pipedrive Google Ads Offline Conversions Guide",
    metaDescription:
      "Store GCLID on Pipedrive persons, upload deal stage conversions to Google Ads, and avoid duplicates when deals reopen.",
    intro:
      "Use Pipedrive person and deal custom fields to upload stage-based offline conversions into Google Ads with clean identifiers and values.",
    unverifiedUiNotes: [uiAds, uiPd],
    sections: [
      {
        heading: "What this integration solves",
        body: "Pipedrive is common in mid-market sales teams. Out of the box it will not teach Google Ads about won deals. This build stores click IDs on the person, associates them to deals, and uploads on stage changes via Pipedrive automations webhooks or Zapier/n8n.",
      },
      {
        heading: "Prerequisites and permissions",
        body: "Pipedrive admin company settings access, Google Ads conversion access, and an automation tool that can call Google Ads. Custom person fields: GCLID, GBRAID, WBRAID. Deal fields: Offline upload done (boolean-like), Offline upload stage (text).",
      },
      {
        heading: "The build, step by step",
        body: "1. Map hidden form fields into Pipedrive person create/update via leadbooster forms or website forms API.\n\n2. Create Google Ads offline conversion actions for each monetised stage.\n\n3. Automation: when deal stage hits target, read org person GCLID, post conversion with deal value and currency, stamp Offline upload done.\n\n4. Use deal id + stage as order_id for deduplication.\n\n5. Document stage probability values if you upload expected revenue before won.",
      },
      {
        heading: "Gotchas",
        body: "Persons with multiple deals can upload conflicting values if you pull the wrong deal. Pipeline stage IDs differ across pipelines. Merged persons may drop custom fields. Pipedrive currency vs Ads currency mismatches are common in multi-market sellers.",
      },
      {
        heading: "How to verify it is working",
        body: "Create a test person with GCLID, move a deal through stages, confirm webhook logs and Google Ads acceptance. Re-run the same stage to ensure dedupe holds.",
      },
      {
        heading: "What breaks it later",
        body: "New pipelines without automations, API token rotation, and sales creating deals without a person. Monthly audit of won deals missing GCLID.",
      },
    ],
    faqs: baseFaqs("Pipedrive"),
    relatedLinks: [
      {
        href: "/services/crm-implementation",
        title: "CRM implementation",
        description: "Pipedrive stage models and field design.",
      },
      {
        href: "/industries/commercial-fit-out/crm-implementation",
        title: "Fit-out CRM implementation",
        description: "Tender stages in a CRM build.",
      },
      {
        href: "/integrations/hubspot-google-ads-offline-conversions",
        title: "HubSpot offline conversions",
        description: "Sibling CRM upload guide.",
      },
      {
        href: "/integrations/salesforce-google-ads-offline-conversions",
        title: "Salesforce offline conversions",
        description: "Enterprise counterpart.",
      },
    ],
  },
  {
    slug: "server-side-tagging-consent-mode",
    name: "Server-side tagging and Consent Mode",
    metaTitle: "Server-Side Tagging Consent Mode Guide",
    metaDescription:
      "Implement server-side Google Tag Manager with Consent Mode v2 signals, event deduplication and compliant ad_user_data handling.",
    intro:
      "Run a server-side GTM container with Consent Mode v2 so measurement degrades gracefully when consent is denied and stays accurate when granted.",
    unverifiedUiNotes: [
      "Consent management platform admin screens differ by vendor. Map the Consent Mode signal names below to your CMP's Google consent integration.",
      "sGTM client and tag templates evolve; use the current GA4 and Google Ads tag templates in your server container.",
    ],
    sections: [
      {
        heading: "What this integration solves",
        body: "Browser-only tagging loses events to blockers and breaks when consent is denied without a modelling plan. Server-side tagging with Consent Mode v2 lets you respect ad_storage, ad_user_data, ad_personalization and analytics_storage while still receiving first-party, consented hits through your own subdomain.",
      },
      {
        heading: "Prerequisites and permissions",
        body: "A server container hosted on Cloud Run or equivalent, first-party subdomain (for example metrics.example.com), web GTM container, CMP that can write the Consent Mode API before tags fire, and legal sign-off on the cookie banner categories.",
      },
      {
        heading: "The build, step by step",
        body: "1. Deploy sGTM with a first-party custom domain and SSL.\n\n2. In web GTM, set Consent Overview defaults (usually denied for ad storage in the UK/EU until grant).\n\n3. CMP callbacks call gtag('consent','update',{...}) with ad_storage, analytics_storage, ad_user_data, ad_personalization.\n\n4. Route GA4 via the server container client. Forward Google Ads conversion tags server-side where templates allow.\n\n5. Pass consent state to the server event so server tags also gate enhanced conversions.\n\n6. Deduplicate browser and server events with event_id.",
      },
      {
        heading: "Gotchas",
        body: "Default granted consent is a compliance failure in many jurisdictions. Enhanced conversions must not send user data when ad_user_data is denied. First-party cookies still need transparent notice. Healthcare and special category data needs extra controls beyond this guide. Region-specific consent for US state laws if you sell there.",
      },
      {
        heading: "How to verify it is working",
        body: "Use Tag Assistant and GA4 DebugView with consent denied and granted scenarios. Confirm denied paths do not send ad identifiers. Confirm granted paths show server inbound requests on your metrics subdomain.",
      },
      {
        heading: "What breaks it later",
        body: "CMP script updates, cookie banner A/B tests that race tags, and sGTM billing or cold starts dropping traffic. Alert on inbound sGTM request volume and consent ratio.",
      },
    ],
    faqs: [
      {
        q: "Is server-side tagging a way around consent?",
        a: "No. Consent signals must still gate advertising user data. Server-side improves reliability and first-party control, not permission.",
      },
      {
        q: "Do we still need a web container?",
        a: "Usually yes, to collect consented events and forward them to the server client.",
      },
      {
        q: "What is ad_user_data versus ad_storage?",
        a: "ad_storage covers advertising cookies; ad_user_data covers sending user-provided data for enhanced conversions and similar. Both matter.",
      },
      {
        q: "Can we use this with offline conversions?",
        a: "Yes. Offline uploads still need their own lawful basis and identifier rules.",
      },
      {
        q: "Does this replace a CMP?",
        a: "No. Consent Mode consumes CMP decisions; it is not a banner.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/conversion-tracking-attribution",
        title: "Conversion tracking and attribution",
        description: "Measurement builds including sGTM.",
      },
      {
        href: "/industries/medical-healthcare",
        title: "Medical and healthcare marketing",
        description: "Where consent and data categories are strict.",
      },
      {
        href: "/integrations/hubspot-ga4-attribution",
        title: "HubSpot and GA4 attribution",
        description: "CRM events through a hardened collection layer.",
      },
      {
        href: "/integrations/hubspot-google-ads-offline-conversions",
        title: "HubSpot offline conversions",
        description: "Upload path after consented capture.",
      },
    ],
  },
  {
    slug: "crm-migration-without-losing-attribution",
    name: "CRM migration without losing attribution",
    metaTitle: "CRM Migration Without Losing Attribution",
    metaDescription:
      "Migrate HubSpot, Salesforce or Pipedrive without dropping GCLID fields, conversion upload history or stage definitions that power attribution.",
    intro:
      "Move CRM platforms without wiping click identifiers, stage semantics or offline conversion history that paid media still depends on.",
    unverifiedUiNotes: [
      "Export and import wizards differ by CRM vendor and edition. Treat field mapping as an operation to complete in your tenant's current import tools.",
    ],
    sections: [
      {
        heading: "What this integration solves",
        body: "CRM migrations often succeed as contact moves and fail as attribution moves. GCLID fields get dropped, stage names change meaning, and offline upload automations point at dead properties. Paid media looks like it fell off a cliff when only the wiring moved.\n\nThis guide is a migration checklist for attribution continuity across HubSpot, Salesforce and Pipedrive moves.",
      },
      {
        heading: "Prerequisites and permissions",
        body: "Admins on old and new CRM, Google Ads access, a freeze window for stage changes, and a mapping workbook that lists every attribution field: gclid, gbraid, wbraid, ga_client_id, original utm fields, offline upload flags, and conversion external IDs.",
      },
      {
        heading: "The build, step by step",
        body: "1. Inventory attribution fields and automations in the source CRM. Export sample rows with known paid conversions.\n\n2. Recreate fields in the destination with identical meaning. Prefer same API names where possible.\n\n3. Map stages with a written dictionary. Do not collapse PQQ and ITT into Proposal without documenting the loss.\n\n4. Migrate historical click IDs even for closed records; you may still need them for lookbacks and audits.\n\n5. Rebuild upload jobs against new field API names. Keep the old job running until parity checks pass.\n\n6. Parallel run: for two weeks, compare upload volume and accepted conversions pre/post.\n\n7. Only then decommission the source automations.",
      },
      {
        heading: "Gotchas",
        body: "Deduping contacts can discard the contact that held the gclid. Activity history migrations that rewrite timestamps break conversion_date_time audits. Soft-deleted marketing contacts excluded from export. Re-labelling stages without updating Google Ads conversion action names. Currency field defaults changing on import.",
      },
      {
        heading: "How to verify it is working",
        body: "Reconcile 50 known paid-won records: click ID present, stage equivalent, upload flag equivalent, and a fresh stage change produces an Accepted upload in Google Ads. Compare weekly Accepted count to the pre-migration baseline.",
      },
      {
        heading: "What breaks it later",
        body: "Post-migration cleanup scripts that null custom fields, and new sales processes that invent stages without measurement owners. Keep an attribution field lock list.",
      },
    ],
    faqs: [
      {
        q: "Should we migrate closed-lost click IDs?",
        a: "Yes. Audits and late corrections need them, and storage cost is trivial versus media waste.",
      },
      {
        q: "Can we change stage names during migration?",
        a: "Only with a written mapping and updated upload rules. Otherwise keep names stable until measurement parity is proven.",
      },
      {
        q: "Do Google Ads conversion actions need recreating?",
        a: "Not if names and resource IDs remain; update middleware field references. Create new actions only when stage economics change.",
      },
      {
        q: "What about historical offline uploads already in Google Ads?",
        a: "They remain in Ads. Your job is not to re-upload history blindly; it is to keep new events flowing with valid IDs.",
      },
      {
        q: "How long should the parallel run last?",
        a: "At least one full weekly bidding cycle, longer on low-volume accounts.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/crm-implementation",
        title: "CRM implementation",
        description: "Migrations and rebuilds with measurement intact.",
      },
      {
        href: "/industries/commercial-fit-out/crm-implementation",
        title: "Fit-out CRM implementation",
        description: "Tender stage definitions worth preserving.",
      },
      {
        href: "/integrations/hubspot-google-ads-offline-conversions",
        title: "HubSpot offline conversions",
        description: "Rebuild target for HubSpot destinations.",
      },
      {
        href: "/integrations/pipedrive-google-ads-offline-conversions",
        title: "Pipedrive offline conversions",
        description: "Rebuild target for Pipedrive destinations.",
      },
    ],
  },
];

for (const guide of guides) {
  write(
    `content/integrations/${guide.slug}.ts`,
    toTsModule(
      "@/content/integrations/types",
      "IntegrationGuide",
      "guide",
      guide,
    ),
  );
}

write(
  "content/integrations/index.ts",
  `import type { IntegrationGuide } from "@/content/integrations/types";
${guides.map((g) => `import ${camel(g.slug)} from "@/content/integrations/${g.slug}";`).join("\n")}

const GUIDES: IntegrationGuide[] = [
${guides.map((g) => `  ${camel(g.slug)},`).join("\n")}
];

const BY_SLUG = new Map(GUIDES.map((guide) => [guide.slug, guide]));

export function getAllIntegrations(): IntegrationGuide[] {
  return GUIDES;
}

export function getIntegration(slug: string): IntegrationGuide | undefined {
  return BY_SLUG.get(slug);
}

export function getAllIntegrationSlugs(): string[] {
  return GUIDES.map((guide) => guide.slug);
}
`,
);

function camel(slug) {
  return slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

const resources = [
  {
    slug: "tender-hubspot-deal-pipeline",
    name: "Tender-stage HubSpot deal pipeline template",
    metaTitle: "Tender HubSpot Deal Pipeline Template",
    metaDescription:
      "Download a HubSpot deal pipeline CSV and stage definition guide for PQQ, ITT, bid and award cycles.",
    intro:
      "A HubSpot deal pipeline shaped like a real tender process, with stage definitions that stop forecasting from becoming fiction.",
    sections: [
      {
        heading: "What this is",
        body: "A CSV you can use as a blueprint for HubSpot deal stages, plus a written definition document. The definitions are the asset. Most pipelines fail because Relationship, PQQ and ITT get collapsed into Proposal.",
      },
      {
        heading: "Who it is for",
        body: "Commercial directors and RevOps leads in contracting, fit-out and any tender-led B2B motion using HubSpot.",
      },
      {
        heading: "How to use it",
        body: "Read the stage definition doc first. Create or edit a HubSpot deal pipeline to match the stage names and win probabilities. Import or recreate stages manually if your portal blocks CSV stage import. Train sales on entry and exit criteria before enforcing required fields.",
      },
      {
        heading: "Mistake it prevents",
        body: "Forecasting from generic funnels that ignore pre-qualification and framework positioning, which is where tender value is actually won or lost.",
      },
    ],
    downloads: [
      {
        label: "Pipeline stages CSV",
        href: "/downloads/tender-hubspot-pipeline-stages.csv",
        description: "Stage order, label, and suggested win probability.",
      },
      {
        label: "Stage definition guide",
        href: "/downloads/tender-hubspot-stage-definitions.md",
        description: "Entry criteria, exit criteria and owner per stage.",
      },
    ],
    faqs: [
      {
        q: "Can I import this CSV directly into HubSpot?",
        a: "Treat it as a blueprint. Many portals require stages to be created in pipeline settings rather than CSV import.",
      },
      {
        q: "Should win probabilities match the CSV exactly?",
        a: "No. Replace them with your closed-won history as soon as you have it.",
      },
      {
        q: "Where do frameworks sit?",
        a: "Use Relationship or a parallel pipeline for framework seats, then open call-off deals at ITT or Bid.",
      },
      {
        q: "Do we need every stage?",
        a: "If you skip PQQ, document why. Skipping without a rule is how reports rot.",
      },
      {
        q: "Does this include HubSpot properties?",
        a: "The definition doc lists recommended properties. Create them as custom deal properties in your portal.",
      },
    ],
    relatedLinks: [
      {
        href: "/industries/commercial-fit-out",
        title: "Commercial fit-out marketing",
        description: "Tender-led vertical context.",
      },
      {
        href: "/services/crm-implementation",
        title: "CRM implementation",
        description: "Pipeline builds that sales will use.",
      },
      {
        href: "/tools/tender-pipeline-forecast",
        title: "Tender pipeline forecast tool",
        description: "Stress-test stage maths before go-live.",
      },
    ],
  },
  {
    slug: "ga4-enquiry-event-schema",
    name: "GA4 event schema for enquiry-led businesses",
    metaTitle: "GA4 Enquiry Event Schema Template",
    metaDescription:
      "Download a GA4 event JSON schema and implementation notes for enquiry-led B2B and service businesses.",
    intro:
      "A practical GA4 event schema for businesses where the conversion is an enquiry, meeting or opportunity, not an ecommerce purchase.",
    sections: [
      {
        heading: "What this is",
        body: "A JSON schema describing recommended events and parameters, plus implementation notes for GTM. Built for enquiry-led motions: forms, calls, bookings and CRM-qualified milestones.",
      },
      {
        heading: "Who it is for",
        body: "Marketing ops and analysts implementing GA4 for B2B, professional services, travel enquiry and housebuilder lead gen.",
      },
      {
        heading: "How to use it",
        body: "Load the JSON as your contract. Implement events in GTM or gtag to match names and params. Register custom dimensions in GA4 Admin for the parameters you will report on.",
      },
      {
        heading: "Mistake it prevents",
        body: "Inventing a new event name per landing page and then being unable to build a single enquiry funnel exploration.",
      },
    ],
    downloads: [
      {
        label: "Event schema JSON",
        href: "/downloads/ga4-enquiry-event-schema.json",
        description: "Events, parameters and allowed values.",
      },
      {
        label: "Implementation notes",
        href: "/downloads/ga4-enquiry-event-notes.md",
        description: "GTM tips, PII rules and key event choices.",
      },
    ],
    faqs: [
      {
        q: "Is generate_lead enough on its own?",
        a: "It is a good base event. Add qualified and opportunity events when CRM data can fire them.",
      },
      {
        q: "Should we use the purchase event for closed deals?",
        a: "Only if you are comfortable with ecommerce semantics. A dedicated closed_won event is clearer for many B2B teams.",
      },
      {
        q: "Can we put email in event params?",
        a: "No. Never send raw PII to GA4 parameters.",
      },
      {
        q: "Does this include Consent Mode?",
        a: "Notes reference it. Implementation still depends on your CMP.",
      },
      {
        q: "How does this relate to Google Ads?",
        a: "GA4 events can feed Ads, but offline CRM uploads remain better for late stage revenue.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/conversion-tracking-attribution",
        title: "Conversion tracking and attribution",
        description: "Full measurement builds.",
      },
      {
        href: "/industries/b2b-saas-and-platforms",
        title: "B2B SaaS marketing",
        description: "Enquiry-led funnel context.",
      },
      {
        href: "/integrations/hubspot-ga4-attribution",
        title: "HubSpot and GA4 attribution guide",
        description: "CRM milestones into GA4.",
      },
    ],
  },
  {
    slug: "google-ads-housebuilder-account-structure",
    name: "Google Ads structure for multi-development housebuilders",
    metaTitle: "Housebuilder Google Ads Account Structure",
    metaDescription:
      "Campaign and naming template for multi-development housebuilder Google Ads accounts, with CSV blueprint.",
    intro:
      "A campaign naming and structure template so each development can be budgeted, tracked and reported without drowning in one brand blob.",
    sections: [
      {
        heading: "What this is",
        body: "A CSV blueprint of campaigns, ad groups and label conventions for housebuilders running multiple live developments, plus notes on conversion actions per site.",
      },
      {
        heading: "Who it is for",
        body: "In-house marketing leads and agencies structuring Google Ads for regional or national home builders.",
      },
      {
        heading: "How to use it",
        body: "Copy the naming pattern into your account. Create one searchable structure per development for brand and non-brand where volume allows. Attach development labels for portfolio reporting.",
      },
      {
        heading: "Mistake it prevents",
        body: "A single national campaign where one hero site spends the budget while new launches starve, with no clean cost per reservation by development.",
      },
    ],
    downloads: [
      {
        label: "Account structure CSV",
        href: "/downloads/housebuilder-google-ads-structure.csv",
        description: "Campaign, ad group and label examples.",
      },
      {
        label: "Structure notes",
        href: "/downloads/housebuilder-google-ads-structure-notes.md",
        description: "Budgeting, negatives and conversion tips.",
      },
    ],
    faqs: [
      {
        q: "Should brand be separate per development?",
        a: "Yes when developments have distinct names. Keep a master brand campaign for the corporate name.",
      },
      {
        q: "How do Performance Max sites fit?",
        a: "If used, isolate by development asset group and still keep search for high-intent capture.",
      },
      {
        q: "Do we need a campaign per plot type?",
        a: "Usually not at the start. Start per development, split later if volume justifies.",
      },
      {
        q: "Where do call conversions go?",
        a: "Development-specific call actions when DNI pools are per site.",
      },
      {
        q: "Is this a shared MCC template?",
        a: "It works inside one account or across accounts under an MCC. Naming consistency matters more than account count.",
      },
    ],
    relatedLinks: [
      {
        href: "/industries/residential-home-builders",
        title: "Residential home builder marketing",
        description: "Vertical pillar.",
      },
      {
        href: "/industries/residential-home-builders/google-ads-management",
        title: "Google Ads for home builders",
        description: "Money page for this structure.",
      },
      {
        href: "/tools/cost-per-reservation-calculator",
        title: "Cost per reservation calculator",
        description: "Unit economics the structure should report.",
      },
    ],
  },
  {
    slug: "negative-keyword-starter-lists",
    name: "Negative keyword starter lists by vertical",
    metaTitle: "Negative Keyword Lists by Vertical",
    metaDescription:
      "Download researched negative keyword starter lists for construction, travel, legal, medical and B2B software Google Ads.",
    intro:
      "Vertical negative lists that target wasted intent in construction, travel, legal, medical and B2B software, not a generic free and cheap dump.",
    sections: [
      {
        heading: "What this is",
        body: "Five CSV lists of starter negatives with notes on why they matter in that vertical. They are starters, not permanent gospel. Review search terms monthly.",
      },
      {
        heading: "Who it is for",
        body: "PPC leads launching or cleaning accounts in these verticals.",
      },
      {
        heading: "How to use it",
        body: "Upload as account or campaign negative lists. Remove any term you intentionally want. Add match types carefully; the CSV uses phrase-style seeds you can adapt.",
      },
      {
        heading: "Mistake it prevents",
        body: "Paying for jobs, DIY, student and info queries that look relevant to a broad match algorithm and worthless to sales.",
      },
    ],
    downloads: [
      {
        label: "Construction negatives",
        href: "/downloads/negatives/construction.csv",
        description: "Jobs, DIY, tender noise and supplier-seeker waste.",
      },
      {
        label: "Travel negatives",
        href: "/downloads/negatives/travel.csv",
        description: "Cabin crew, cheap flight only, and tourist job intent.",
      },
      {
        label: "Legal negatives",
        href: "/downloads/negatives/legal.csv",
        description: "DIY legal, jobs, and mismatched practice intent.",
      },
      {
        label: "Medical negatives",
        href: "/downloads/negatives/medical.csv",
        description: "Jobs, DIY health, and clearly non-patient intent.",
      },
      {
        label: "B2B software negatives",
        href: "/downloads/negatives/b2b-software.csv",
        description: "Tutorials, jobs, free forever and scraper intent.",
      },
    ],
    faqs: [
      {
        q: "Are these exact match negatives?",
        a: "They are seed terms. Apply the match type your account governance allows after review.",
      },
      {
        q: "Will this block good traffic?",
        a: "It can if you sell training or recruitment. Remove those clusters before upload.",
      },
      {
        q: "How often should lists be refreshed?",
        a: "Monthly from search term reports, faster on new accounts.",
      },
      {
        q: "Do shared lists work across campaigns?",
        a: "Yes. Use shared sets for portfolio consistency, campaign lists for exceptions.",
      },
      {
        q: "Is medical cannabis covered?",
        a: "Only at a high level for non-patient waste. Policy-sensitive positives still need a specialist review.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/google-ads-management",
        title: "Google Ads management",
        description: "Account builds that include negative governance.",
      },
      {
        href: "/industries/construction",
        title: "Construction marketing",
        description: "Where construction negatives apply.",
      },
      {
        href: "/industries/legal-solicitors",
        title: "Legal marketing",
        description: "Compliance-aware paid search context.",
      },
    ],
  },
  {
    slug: "offline-conversion-upload-template",
    name: "Offline conversion upload template",
    metaTitle: "Offline Conversion Upload CSV Template",
    metaDescription:
      "CSV template and field mapping notes for Google Ads offline conversion uploads including GCLID, time, value and currency.",
    intro:
      "A CSV template and mapping notes for uploading offline conversions to Google Ads without guessing column meanings.",
    sections: [
      {
        heading: "What this is",
        body: "A CSV with the columns most offline click import flows expect, example rows, and a markdown mapping guide from CRM fields to Ads fields.",
      },
      {
        heading: "Who it is for",
        body: "Ops teams preparing manual or middleware uploads from HubSpot, Salesforce or Pipedrive.",
      },
      {
        heading: "How to use it",
        body: "Map your CRM export to the columns. Validate timezone and currency before the first production upload. Prefer API automation once the mapping is stable.",
      },
      {
        heading: "Mistake it prevents",
        body: "Uploading conversion times in the wrong timezone or mixing currencies, which creates Accepted rows that still poison bidding.",
      },
    ],
    downloads: [
      {
        label: "Upload CSV template",
        href: "/downloads/offline-conversion-upload-template.csv",
        description: "Columns and example rows.",
      },
      {
        label: "Field mapping notes",
        href: "/downloads/offline-conversion-field-mapping.md",
        description: "CRM to Google Ads field dictionary.",
      },
    ],
    faqs: [
      {
        q: "Is this the only accepted Google format?",
        a: "Google surfaces more than one import path. Match columns to the importer your account uses.",
      },
      {
        q: "Do we need order ID?",
        a: "Strongly recommended for deduplication on retries.",
      },
      {
        q: "Can we include email instead of GCLID?",
        a: "That is a different enhanced conversions path. This template focuses on click ID upload.",
      },
      {
        q: "What datetime format should we use?",
        a: "Follow the mapping notes. Include a timezone offset.",
      },
      {
        q: "How many example rows are included?",
        a: "A few synthetic rows only. No client data.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/conversion-tracking-attribution",
        title: "Conversion tracking and attribution",
        description: "Implementation programmes.",
      },
      {
        href: "/tools/offline-conversion-value-calculator",
        title: "Offline conversion value calculator",
        description: "Choose values before you upload.",
      },
      {
        href: "/integrations/hubspot-google-ads-offline-conversions",
        title: "HubSpot offline conversions guide",
        description: "Automate this template's mapping.",
      },
    ],
  },
  {
    slug: "attribution-health-check",
    name: "Attribution health check",
    metaTitle: "Attribution Health Check Scorecard",
    metaDescription:
      "A 20-point scored attribution self-audit for CRM, click IDs, consent, call tracking and offline conversion upload readiness.",
    intro:
      "A 20-point scored checklist to see whether your attribution stack would survive a board question about which channels create revenue.",
    sections: [
      {
        heading: "What this is",
        body: "A scored self-audit covering click ID capture, consent, CRM fields, offline uploads, call tracking, GA4 parity and reporting. Each item is worth five points for a 100-point total.",
      },
      {
        heading: "Who it is for",
        body: "Marketing leaders and ops owners before a media scale-up, CRM migration or agency handover.",
      },
      {
        heading: "How to use it",
        body: "Score each item 0, 3 or 5. Sum the total. Use the band notes in the file to prioritise fixes. Re-run quarterly.",
      },
      {
        heading: "Mistake it prevents",
        body: "Scaling budgets on dashboards that only measure form fills while revenue sits in calls and late CRM stages.",
      },
    ],
    downloads: [
      {
        label: "Scored checklist",
        href: "/downloads/attribution-health-check.md",
        description: "20 items, scoring rules and bands.",
      },
      {
        label: "Checklist CSV",
        href: "/downloads/attribution-health-check.csv",
        description: "Same items for spreadsheet scoring.",
      },
    ],
    faqs: [
      {
        q: "Is 100 required before spending?",
        a: "No. It is a prioritisation tool. Fix anything scoring zero in click ID and consent first.",
      },
      {
        q: "Can agencies complete this for us?",
        a: "Yes, but a commercial owner should review scores so gaps are not hidden.",
      },
      {
        q: "Does a high score mean attribution is perfect?",
        a: "No. It means the plumbing is present. Model choice and creative still matter.",
      },
      {
        q: "How often should we re-score?",
        a: "Quarterly, and after any CRM or website migration.",
      },
      {
        q: "Is this industry specific?",
        a: "The items are cross-vertical. Tender and clinical teams should interpret stage items in their language.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/conversion-tracking-attribution",
        title: "Conversion tracking and attribution",
        description: "Close the gaps the scorecard finds.",
      },
      {
        href: "/industries/travel-tour-operators",
        title: "Travel marketing programmes",
        description: "Phone-heavy measurement pressure test.",
      },
      {
        href: "/resources/offline-conversion-upload-template",
        title: "Offline conversion upload template",
        description: "Fix upload mapping gaps fast.",
      },
    ],
  },
];

for (const resource of resources) {
  write(
    `content/resources/${resource.slug}.ts`,
    toTsModule("@/content/resources/types", "ResourcePage", "resource", resource),
  );
}

write(
  "content/resources/index.ts",
  `import type { ResourcePage } from "@/content/resources/types";
${resources.map((r) => `import ${camel(r.slug)} from "@/content/resources/${r.slug}";`).join("\n")}

const RESOURCES: ResourcePage[] = [
${resources.map((r) => `  ${camel(r.slug)},`).join("\n")}
];

const BY_SLUG = new Map(RESOURCES.map((resource) => [resource.slug, resource]));

export function getAllResources(): ResourcePage[] {
  return RESOURCES;
}

export function getResource(slug: string): ResourcePage | undefined {
  return BY_SLUG.get(slug);
}

export function getAllResourceSlugs(): string[] {
  return RESOURCES.map((resource) => resource.slug);
}
`,
);

// Downloads
write(
  "public/downloads/tender-hubspot-pipeline-stages.csv",
  `stage_order,stage_label,win_probability_pct,forecast_category
1,Relationship / positioning,10,pipeline
2,PQQ,25,pipeline
3,ITT,40,pipeline
4,Bid submitted,55,pipeline
5,Preferred bidder,75,best_case
6,Award / contracted,100,closed_won
7,Lost,0,closed_lost
8,Withdrawn,0,closed_lost
`,
);

write(
  "public/downloads/tender-hubspot-stage-definitions.md",
  `# Tender-stage HubSpot definitions

British English. Generic template. No client data.

## Relationship / positioning
Entry: named client, QS or consultant relationship with a plausible future package.
Exit: PQQ issued or formal go/no-go recorded.
Owner: commercial lead.

## PQQ
Entry: pre-qualification questionnaire or framework questionnaire received.
Exit: submitted and acknowledged, or declined with reason.
Owner: bid manager.

## ITT
Entry: invitation to tender or priced enquiry pack received.
Exit: decision to price or decline.
Owner: bid manager.

## Bid submitted
Entry: priced return submitted by deadline.
Exit: outcome communication or long-list update.
Owner: bid manager.

## Preferred bidder
Entry: written preferred bidder or conditional award status.
Exit: contract execution or failure to conclude.
Owner: commercial director.

## Award / contracted
Entry: signed contract or equivalent binding award.
Exit: n/a (terminal won).
Owner: commercial director.

## Recommended deal properties
- main_contractor (company)
- qs_consultancy (company)
- tender_reference (text)
- submission_deadline (date)
- gclid (text, attribution)
- offline_conversion_uploaded (checkbox)
`,
);

write(
  "public/downloads/ga4-enquiry-event-schema.json",
  JSON.stringify(
    {
      version: "1.0",
      purpose: "Enquiry-led GA4 event contract",
      events: [
        {
          name: "generate_lead",
          description: "Form or enquiry submit",
          parameters: ["lead_type", "page_type", "development_id", "value", "currency"],
        },
        {
          name: "call_click",
          description: "tel: link click",
          parameters: ["page_type", "development_id"],
        },
        {
          name: "meeting_booked",
          description: "Calendly or booking confirmation",
          parameters: ["meeting_type", "value", "currency"],
        },
        {
          name: "lead_qualified",
          description: "CRM qualified stage",
          parameters: ["value", "currency", "crm_stage"],
        },
        {
          name: "opportunity_created",
          description: "CRM opportunity open",
          parameters: ["value", "currency", "crm_stage"],
        },
        {
          name: "closed_won",
          description: "CRM closed won",
          parameters: ["value", "currency", "crm_stage"],
        },
      ],
      pii_rules: ["Never send email, phone, or name as event parameters."],
    },
    null,
    2,
  ),
);

write(
  "public/downloads/ga4-enquiry-event-notes.md",
  `# GA4 enquiry event implementation notes

- Implement event names exactly as in the JSON contract.
- Register custom dimensions for lead_type, page_type, development_id, crm_stage.
- Mark generate_lead as a key event first. Promote later stages when volume allows.
- Use event_id when both browser and server can fire the same enquiry.
- Consent Mode: do not treat denied ad storage hits as fully attributed paid conversions.
- Housebuilders: pass development_id on all enquiry events.
- Travel: prefer value = expected margin when known, else omit value rather than inventing it.
`,
);

write(
  "public/downloads/housebuilder-google-ads-structure.csv",
  `campaign_name,campaign_type,ad_group_name,label_development,notes
UK_Brand_Master,Search,Brand_Exact,corporate,Corporate brand terms
DEV_Riverside_Brand,Search,Riverside_Brand,riverside,Development brand
DEV_Riverside_Generic,Search,Riverside_Location_Generic,riverside,Location + new homes generics
DEV_Riverside_Competitor,Search,Riverside_Competitor,riverside,Use sparingly
DEV_Oakfield_Brand,Search,Oakfield_Brand,oakfield,Second development example
DEV_Oakfield_Generic,Search,Oakfield_Location_Generic,oakfield,Second development example
`,
);

write(
  "public/downloads/housebuilder-google-ads-structure-notes.md",
  `# Housebuilder Google Ads structure notes

- Budget at development campaign level so launches cannot be starved silently.
- Shared negative lists at account level; development exceptions at campaign level.
- Conversion actions: enquiry, appointment, reservation. Reservation as primary when volume allows.
- Call assets and DNI pools should align to development labels.
- Do not dump all sites into one Performance Max asset group.
`,
);

const negatives = {
  construction: [
    "apprenticeship",
    "salary",
    "job vacancy",
    "cvs",
    "diy extension",
    "how to plaster",
    "tender alerts free",
    "construction news",
    "union",
    "health and safety course",
    "cscs mock test",
    "plant hire for public",
    "skip hire cheap",
    "architectural degree",
  ],
  travel: [
    "cabin crew jobs",
    "travel agent salary",
    "cheap flights only",
    "airline careers",
    "gap year volunteering free",
    "tourist board jobs",
    "travel insurance claim form",
    "passport appointment",
    "baggage allowance",
    "flight status",
    "travel influencer",
    "hostel jobs",
  ],
  legal: [
    "legal aid apply",
    "free advice forum",
    "diy divorce kit",
    "trainee solicitor vacancy",
    "paralegal job",
    "law degree",
    "mooting",
    "template will free",
    "citizen advice",
    "court form n1",
    "pupillage",
    "legal secretary job",
  ],
  medical: [
    "nhs jobs",
    "nurse salary",
    "healthcare assistant vacancy",
    "diy tooth extraction",
    "medical school",
    "placenta meaning",
    "symptom checker forum",
    "recreational",
    "grow your own",
    "stock photos before after",
    "locum shifts",
  ],
  "b2b-software": [
    "github free",
    "open source alternative",
    "internship",
    "graduate scheme",
    "how to build",
    "tutorial youtube",
    "pricing scraper",
    "crack",
    "nulled",
    "free forever plan abuse",
    "chrome extension scrape",
    "course udemy",
  ],
};

for (const [vertical, terms] of Object.entries(negatives)) {
  write(
    `public/downloads/negatives/${vertical}.csv`,
    `keyword,notes\n${terms.map((t) => `"${t}","Starter negative seed for ${vertical}"`).join("\n")}\n`,
  );
}

write(
  "public/downloads/offline-conversion-upload-template.csv",
  `gclid,gbraid,wbraid,conversion_name,conversion_time,conversion_value,conversion_currency,order_id,ad_user_data_consent
Cj0KCQExampleGclid,,,HubSpot Closed Won,2026-07-01 14:22:00+01:00,28000,GBP,deal_10241_closed_won,GRANTED
,ExampleGbraid,,HubSpot Qualified Opportunity,2026-07-01 11:05:00+01:00,3360,GBP,deal_10255_qualified,GRANTED
`,
);

write(
  "public/downloads/offline-conversion-field-mapping.md",
  `# Offline conversion field mapping

| Template column | Typical CRM source | Notes |
| --- | --- | --- |
| gclid | contact.gclid | Prefer over gbraid/wbraid when present |
| gbraid | contact.gbraid | App / iOS web traffic |
| wbraid | contact.wbraid | Web-to-app related traffic |
| conversion_name | fixed map by stage | Must match Google Ads conversion action name |
| conversion_time | stage changed at | Include timezone offset |
| conversion_value | amount or expected value | Number only |
| conversion_currency | deal currency | Must match Ads account or convert |
| order_id | deal id + stage | Deduplication key |
| ad_user_data_consent | consent property | GRANTED / DENIED where required |
`,
);

const healthItems = [
  "Auto-tagging enabled in Google Ads",
  "gclid captured to CRM on first enquiry",
  "gclid protected from overwrite on later forms",
  "gbraid/wbraid fields exist",
  "Consent Mode v2 defaults documented",
  "CMP updates consent before ads tags fire",
  "Primary conversion is not raw page view",
  "Offline conversion action exists for closed won",
  "Mid-funnel offline bridge conversion exists",
  "Upload job dedupe key in place",
  "Conversion timestamps include timezone",
  "Currency aligned between CRM and Ads",
  "Call tracking DNI on paid landing pages",
  "Call outcomes stored in CRM",
  "Qualified call values uploaded",
  "GA4 enquiry event names standardised",
  "CRM stages match commercial language",
  "Board report shows pipeline not only CPC",
  "Quarterly search term negative review",
  "Attribution owner named in the team",
];

write(
  "public/downloads/attribution-health-check.md",
  `# Attribution health check (100 points)

Score each item: 0 (missing), 3 (partial), 5 (solid). Total / 100.

Bands: 0-39 critical plumbing gaps; 40-69 usable but fragile; 70-89 board-safe with listed fixes; 90-100 maintain and re-audit after changes.

${healthItems.map((item, i) => `${i + 1}. [ ] ${item} (score: )`).join("\n")}
`,
);

write(
  "public/downloads/attribution-health-check.csv",
  `item_number,item,score_0_3_or_5\n${healthItems.map((item, i) => `${i + 1},"${item}",`).join("\n")}\n`,
);

console.log("Wave 4B/4C content generation complete");
