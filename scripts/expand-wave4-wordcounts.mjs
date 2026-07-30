/**
 * Expands Wave 4 tool/integration/resource copy to meet word budgets.
 * Re-writes content modules while preserving links/faqs structure via jiti load + rewrite.
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { createJiti } from "jiti";

const root = process.cwd();
const jiti = createJiti(join(root, "scripts/expand-wave4-wordcounts.mjs"), {
  interopDefault: true,
  alias: { "@": root },
});

function writeTool(slug, methodSections) {
  const tool = jiti(join(root, `content/tools/${slug}.ts`));
  const next = { ...tool, methodSections };
  const count = methodSections.map((s) => s.body).join(" ").split(/\s+/).filter(Boolean).length;
  writeFileSync(
    join(root, `content/tools/${slug}.ts`),
    `import type { ToolPage } from "@/content/tools/types";\n\nconst tool: ToolPage = ${JSON.stringify(next, null, 2)};\n\nexport default tool;\n`,
    "utf8",
  );
  console.log("tool", slug, count);
}

function writeIntegration(slug, sections) {
  const guide = jiti(join(root, `content/integrations/${slug}.ts`));
  const next = { ...guide, sections };
  const count = sections.map((s) => s.body).join(" ").split(/\s+/).filter(Boolean).length;
  writeFileSync(
    join(root, `content/integrations/${slug}.ts`),
    `import type { IntegrationGuide } from "@/content/integrations/types";\n\nconst guide: IntegrationGuide = ${JSON.stringify(next, null, 2)};\n\nexport default guide;\n`,
    "utf8",
  );
  console.log("integration", slug, count);
}

function writeResource(slug, intro, sections) {
  const resource = jiti(join(root, `content/resources/${slug}.ts`));
  const next = { ...resource, intro, sections };
  const count = (intro + " " + sections.map((s) => s.body).join(" "))
    .split(/\s+/)
    .filter(Boolean).length;
  writeFileSync(
    join(root, `content/resources/${slug}.ts`),
    `import type { ResourcePage } from "@/content/resources/types";\n\nconst resource: ResourcePage = ${JSON.stringify(next, null, 2)};\n\nexport default resource;\n`,
    "utf8",
  );
  console.log("resource", slug, count);
}

const toolExpansions = {
  "attribution-window-calculator": [
    {
      heading: "What the result means",
      body: `Platform bidding can only learn from conversions that arrive inside the lookback window you configured. If your mean cycle is longer than that window, a large share of closed revenue never reaches the algorithm. The calculator does not treat every deal as exactly N days long. It models cycle length as a lognormal distribution with mean equal to the average you enter and a coefficient of variation of 0.7, which produces a right-skewed shape: many deals close near the mean, and a long tail stretches well beyond it.

That assumption matters. Fixed-point models understate the problem on tender-led and enterprise cycles, because the tail is where the high-value awards sit. When you set an 18-month average and a 90-day window, you are training spend on a thin, early-closing slice of the book.

The histogram on the page is the same distribution sliced into buckets. Read it as a share of conversions, not as a forecast of which named deals will close in which month. If sixty percent of probability mass sits beyond your lookback, then six in ten outcomes (in expectation) never become training data for the conversion action you bid on.

Invisible conversions per month simply multiplies that outside-window share by the monthly conversion volume you entered. It is a planning number for measurement design, not a claim that those deals are lost. The deals still close in the CRM. They just do not teach the ad platform.`,
    },
    {
      heading: "How to choose inputs",
      body: `Pull average cycle length from CRM opportunity age on closed-won deals, not from marketing dashboards that stop at MQL. Prefer a cohort that matches the product or segment you are media-buying for. Mixing a thirty-day transactional product with an eighteen-month tender product into one mean will hide the problem on the long cycle and exaggerate it on the short one.

Monthly conversions should be the volume you care about for bidding: closed deals, reservations, or booked revenue events. If you currently bid on form fills, you can still run the tool with form-fill volume, but interpret the result as timing risk on that earlier event, not on cash.

Use the lookback that is actually configured on the conversion action or dataset you optimise against. Custom windows are fine when your account uses something other than 30, 60 or 90 days. If different conversion actions use different windows, run the calculator once per action. Blending them into one lookback produces a comforting average that does not match any live setting.

When CRM age is messy because stages were rebuilt, use a cleaned export of closed-won with created-to-close days, drop extreme outliers only with a written rule, and document the rule next to the number you type into the tool.`,
    },
    {
      heading: "What to do with the answer",
      body: `If a large percentage sits outside the window, extend measurement with offline conversion import keyed to the original click ID, and keep uploading through close. Widen the platform lookback only where the product still allows useful learning and where your privacy design allows the identifier to persist. Pair this with stage-valued uploads so mid-funnel signals bridge the gap while late revenue is still in flight.

For commercial fit-out and procurement cycles, treat a high outside-window share as a board-level measurement risk, not a media curiosity. Budgets cut on 90-day ROAS are often cutting the channels that open relationships that award a year later. Take the calculator output into the same meeting as the CRM forecast so finance sees why paid search looks inefficient in-platform while pipeline looks healthy.

Operationally, write three decisions down after you run it: which conversion action is primary, which stage values will upload, and which report the board will trust when in-platform ROAS disagrees with CRM revenue. Without those decisions, the percentage on this page becomes a slide that nobody acts on.

If the outside-window share is small, still verify that click IDs survive into the CRM. A short cycle with broken capture produces the same blindness as a long cycle with a short window.`,
    },
    {
      heading: "Limits of this model",
      body: `The lognormal shape is a practical default, not a claim about your specific vertical. If you have a full cycle-length histogram from the CRM, prefer that empirical distribution and treat this tool as a first-pass stress test. The coefficient of variation is fixed at 0.7 here so the page stays transparent. Your variance may be higher on framework call-offs or lower on transactional upsells.

This tool invents no industry benchmarks. Every number comes from your inputs and the stated distribution assumption. It also ignores multi-touch paths, view-through conversions, and cross-device stitching. Those topics matter, but they are separate from the narrow question: given a right-skewed cycle and a finite lookback, how much outcome mass never arrives in time for the platform to see it.

Finally, the model assumes the mean you enter is the mean of the conversion event you care about. If you enter closed-won cycle length but bid on enquiry timestamps, you are answering a different question than the one your bidding system faces. Align the event definition before you argue about the percentage.`,
    },
  ],
  "margin-roas-calculator": [
    {
      heading: "GBV ROAS versus margin ROAS",
      body: `Gross booking value ROAS divides booking revenue by ad spend. Margin ROAS divides contribution (GBV multiplied by your margin or take rate) by the same spend. On tour operator and agency models those two numbers tell different stories. A high-GBV destination can carry a thin margin after supplier cost, while a smaller brand campaign can contribute more cash per pound spent.

The calculator shows both account-level figures and optional campaign rows. The ranking panels are the point: watch campaigns reorder when you switch from GBV to margin. That reorder is what budget meetings should use. If destination non-brand leads on GBV ROAS and brand search leads on margin ROAS, the account is not broken. The metric was.

Use the same date range, attribution setting, and currency for GBV and spend. Mixing last-click GBV with data-driven spend windows creates fake efficiency gaps. If finance reports margin on departure month while media reports on click month, say so explicitly before anyone changes bids.`,
    },
    {
      heading: "Inputs that stay honest",
      body: `Enter GBV and spend for the same date range and attribution setting. Margin percentage should be the commercial take you actually keep after supplier cost, not a marketing markup and not a target margin you wish you had. If margins differ by destination or product, use campaign rows with a single average only for a first pass, then split rows by margin band.

No industry average ROAS is baked in. Every output is arithmetic on your numbers. If someone asks what good looks like, answer with contribution targets from finance, not with a borrowed benchmark from a slide deck.

Agency fees, affiliate costs, and discounting can sit inside or outside ad spend depending on how you judge channel teams. Pick one definition and keep it for a quarter so rankings remain comparable week to week.`,
    },
    {
      heading: "What to change operationally",
      body: `Feed margin or booked contribution into offline conversion value, not enquiry counts and not raw GBV when take rate varies. Align Google Ads conversion values with the same margin definition finance uses. Re-rank in-account experiments monthly under margin ROAS, even if the UI still displays GBV for legacy reasons.

Travel teams should also check seasonality: green-season versus dry-season departure windows change both volume and mix, which changes blended margin. A campaign that looks inefficient in shoulder months can be the right investment if it fills departures that would otherwise sail under-occupied. Margin ROAS helps, but it does not replace yield management.

When rankings diverge, do not instantly pause the GBV leader. Check sample size, refund rates, and whether phone bookings are missing from the GBV feed. Missing call revenue often masquerades as a margin problem.`,
    },
    {
      heading: "Who this is for",
      body: `Built for travel and tour operators, and equally usable for any resale, marketplace or agency-margin business where top-line revenue is a poor proxy for contribution. Ecommerce brands with stable gross margin can still use it when promotional mix makes contribution diverge from revenue.

If your margin is effectively constant across campaigns, GBV ROAS and margin ROAS will rank identically and this tool will look boring. That is useful information: your measurement problem is elsewhere, usually in attribution windows, call tracking, or CRM stage values.`,
    },
  ],
};

// For brevity in this script shell, remaining expansions loaded from inline map continued below.
Object.assign(toolExpansions, {
  "tender-pipeline-forecast": [
    {
      heading: "Stage language that matches the work",
      body: `This tool uses tender terminology on purpose. Relationship and positioning covers the work before a notice appears: framework conversations, QS relationships and early design engagement. PQQ is pre-qualification. ITT is invitation to tender. Bid submitted is a priced return. Award is preferred bidder or contract signature, depending on how your CRM defines won.

Generic CRM stages such as MQL and SQL hide where value actually concentrates. If your HubSpot pipeline still says Discovery and Proposal, map those labels to tender reality before you trust the weighted number. Commercial directors will not defend a forecast that speaks marketing dialect.

Write entry and exit criteria for each stage in plain language and keep them next to the win rates you type here. A stage without exit criteria becomes a parking lot, and parking lots inflate weighted pipeline.`,
    },
    {
      heading: "How the maths works",
      body: `Weighted pipeline sums opportunities at each stage multiplied by that stage's win rate and average contract value. Expected revenue by month spreads that weighted total evenly across the average cycle length in months. That is a planning view, not a cash forecast with stage ageing.

Top-of-funnel volume for a revenue target divides the target by relationship-stage win rate times average contract value. It answers: how many live relationships must we open if win rates stay where they are. If that number exceeds what the team can work, the constraint is coverage or qualification, not another LinkedIn boost alone.

Win rates must be conditional on reaching the stage, using closed history. Do not multiply sequential probabilities unless your stage definitions are mutually exclusive counts of the same deals. This tool expects stage counts as a snapshot of currently live opportunities at each stage.`,
    },
    {
      heading: "What commercial directors should challenge",
      body: `Win rates must come from closed history at each stage, not optimism. ACV should exclude speculative frameworks you have not priced. Cycle length should use median or mean months from first relationship note to award on won jobs.

If the relationships-needed figure looks impossible, the constraint is usually early-stage coverage or framework access, not paid media volume alone. Ask which named accounts are missing from Relationship, and whether PQQ capacity is the bottleneck.

Challenge double counting: the same package appearing as both a framework seat and a call-off. Challenge stale ITT rows that should be Lost. Clean inputs beat clever models.`,
    },
    {
      heading: "Connecting forecast to acquisition",
      body: `Once the gap is clear, LinkedIn and outbound against named accounts, plus CRM hygiene on buyer, QS and consultant hierarchies, matter more than broad search. Offline conversion upload should fire on award value, with earlier stage values only as learning bridges.

Use the monthly expected revenue chart as a conversation starter with finance, then replace it with stage-age cohorts from the CRM when you need cash timing. The tool's job is to expose whether the live book can mathematically hit the number on the annual plan.

When acquisition leaders ask for more budget, bring this page with stage counts attached. Budget without stage capacity is how tender businesses burn cash on leads nobody can progress.`,
    },
  ],
  "offline-conversion-value-calculator": [
    {
      heading: "Stage values from first principles",
      body: `Start from average closed value. Multiply backwards by opportunity-to-close, then qualified-to-opportunity, then enquiry-to-qualified. Each stage's upload value is the expected revenue still ahead of that stage.

Example shape only, using your inputs: if closed value is £28,000 and 30 percent of opportunities close, an opportunity is worth £8,400 expected. If 40 percent of qualified leads become opportunities, a qualified lead is worth £3,360, and so on. The copyable table is what you paste into conversion action planning or a CRM calculated property.

Keep the arithmetic boring. Fancy scoring models can come later. Most accounts fail because they upload 1 for every form fill, not because they lack a neural net.`,
    },
    {
      heading: "Which stage should the platform optimise to?",
      body: `Early stages give volume for learning. Late stages give truth. Many accounts upload both: a low-value enquiry conversion for volume and a high-value closed conversion for optimisation once volume allows. Keep names distinct (for example Enquiry expected value versus Closed won revenue) and avoid double-counting the same click into conflicting primary goals.

Consent, click ID retention and timestamp timezone still matter. Value maths cannot fix a missing GCLID or a conversion time in the wrong zone. If your capture rate of click IDs is low, fix that before debating whether opportunity value should be £8,400 or £9,100.`,
    },
    {
      heading: "Rates must come from your CRM",
      body: `Do not invent industry averages. Pull stage conversion rates from a clean cohort of closed opportunities. Exclude junk enquiries before computing enquiry-to-qualified if sales already filter them, or keep them in if paid media still pays for them. Consistency with how sales defines qualified is more important than precision to two decimals.

Recompute quarterly or when pricing changes. A price rise that lifts average closed value should lift every upstream upload value on the next release, or bidding will chase yesterday's economics.`,
    },
    {
      heading: "After you have the numbers",
      body: `Create matching conversion actions, map CRM properties, and schedule uploads (or use a middleware loop). Revisit values quarterly when win rates or ACV move. Pair with call tracking when phone stages carry different close rates.

Document the value table in the same place as your Google Ads conversion action names so the next person does not invent a parallel scheme. When finance changes ACV definitions, marketing measurement should change in the same release notes.`,
    },
  ],
  "call-tracking-roi-calculator": [
    {
      heading: "The failure mode without call tracking",
      body: `If a large share of enquiries arrive by phone and those callers close at a higher rate, form-only analytics understate true return and mis-rank channels. Paid search that drives calls looks expensive. Content or brand that drives forms looks efficient. Budgets follow the wrong story.

This calculator splits monthly enquiries into phone and form using your phone percentage, applies separate close rates, and shows revenue on each path. Untracked revenue is the phone path when calls never reach the ad platform or CRM with a click ID.

Read the form-only ROAS versus true ROAS gap as the commercial case for dynamic number insertion and offline upload of call outcomes. It is not a claim about which creative is best.`,
    },
    {
      heading: "Inputs from operations, not vanity dashboards",
      body: `Phone percentage should come from call tracking or reception logs against the same enquiry definition marketing uses. Close rates should come from CRM by source of first touch where possible. Average value is closed revenue or margin, depending on what you optimise to. Ad spend is the paid media total you are judging.

If reception cannot separate marketing calls from existing customer calls, start with DNI on paid landing pages only. A clean subset beats a polluted whole-number percentage.`,
    },
    {
      heading: "What to build next",
      body: `Dynamic number insertion per campaign or development, CRM logging of call outcomes, and offline conversion upload of qualified or closed call values. For housebuilders, numbers often need to be development-specific. For travel, calls are frequently where booking value is confirmed.

Compare true ROAS (phone plus form revenue over spend) with form-only ROAS. The gap is the commercial case for the call loop. Then assign an owner for weekly pool health and webhook failures, or the loop decays quietly.`,
    },
    {
      heading: "Limits",
      body: `The tool assumes the phone share and close rates you enter. It does not invent vertical benchmarks. Multi-touch paths where a user both calls and fills a form need CRM deduplication rules outside this calculator.

It also ignores call duration quality. A thirty-second wrong-number call is not an enquiry. Align your phone percentage and close rates to qualified call definitions before you present the revenue gap to the board.`,
    },
  ],
  "cost-per-reservation-calculator": [
    {
      heading: "Why reservation cost beats CPC",
      body: `Housebuilder performance is not won on cheapest clicks. Buyers move from enquiry to showhome or sales appointment, then to reservation. Cost per reservation is the figure that sits next to plot value and sales capacity. Cost per development shows whether budget is spread too thin across sites.

The calculator chains appointment rate and reservation-from-appointment rate onto enquiry volume. All rates are yours. No housebuilder industry averages are hardcoded. If your CRM uses viewing or plot hold language, map those events to appointment and reservation consistently before comparing weeks.`,
    },
    {
      heading: "How to set the rates",
      body: `Appointment rate is enquiries that become a held sales appointment. Reservation rate is appointments that become a reservation in the period you are judging. If your CRM uses different names, map them consistently. Average plot value is for context on reserved value, not a ROAS claim by itself.

When incentives are heavy, consider entering a net plot value so marketing is judged on contribution rather than list price. Say which definition you used in the board pack.`,
    },
    {
      heading: "Reading the outputs",
      body: `Cost per enquiry rising with stable reservation cost can mean better qualification. Cost per reservation rising while enquiry cost falls usually means appointment show-rate or sales conversion slipped. Spend per development helps you see whether a new site launch is underfunded relative to live developments.

Use development-level campaigns and call tracking so these metrics can be cut by site, not only by brand account. A national blended cost per reservation can hide a failing launch.`,
    },
    {
      heading: "What to do next",
      body: `Structure Google Ads by development, build landing pages per site, and push reservation outcomes back as offline conversions. Compare cost per reservation to contribution after incentives, not only to full plot price.

If reservation cost is acceptable but volume is low, the constraint may be sales appointment capacity rather than media. Bring that number to the same meeting as the media ask so you do not buy enquiries nobody can host.`,
    },
  ],
});

for (const [slug, methodSections] of Object.entries(toolExpansions)) {
  writeTool(slug, methodSections);
}

function expandGuide(slug, sections) {
  writeIntegration(slug, sections);
}

expandGuide("hubspot-google-ads-offline-conversions", [
  {
    heading: "What this integration solves",
    body: `Without offline conversion import, Google Ads optimises to the earliest browser event HubSpot can see, usually a form submission. On long B2B cycles that event is a weak proxy for revenue. The failure mode is familiar: Smart Bidding scales lead volume while sales win rate and average contract value fall, and finance cannot reconcile media return to closed-won.

This build captures gclid (and gbraid or wbraid where present) on the HubSpot contact, keeps those values through deal association, and uploads conversion events when a deal hits agreed stages with a monetary value. HubSpot is the system of record for stage timing. Google Ads is the system that needs the valued click conversion. The integration is the contract between them.

If you only sync HubSpot's native ad tools without stage-valued offline uploads, you will still be missing the commercial events that happen days or months after the session.`,
  },
  {
    heading: "Prerequisites and permissions",
    body: `You need Google Ads admin or standard access to create conversion actions, and a HubSpot user who can create properties, workflows and a private app. Confirm auto-tagging is on in Google Ads so gclid appears on landing URLs.

Create HubSpot contact properties: gclid (single-line text), gbraid, wbraid, and optionally google_click_timestamp (datetime). On deals, add offline_conversion_uploaded (checkbox) and rely on Amount for closed value. Use a private app with contact and deal read scopes, plus a secure middle layer (workflow webhook, Operations Hub custom code, or n8n) that calls the Google Ads ConversionUploadService or your account's offline import path.

Also agree the stage list with sales before you build. An upload on every dealstage change will create noise. An upload on two or three monetised stages is enough for most programmes.`,
  },
  {
    heading: "The build, step by step",
    body: `1. Capture click IDs on thank-you pages and forms via hidden fields mapped to contact properties. Never overwrite a populated gclid with blank on later visits. If you use HubSpot tracking plus forms, test both the embedded form and any API-created contacts.

2. Create Google Ads conversion actions per stage, for example HubSpot Qualified Opportunity and HubSpot Closed Won. Use an offline click conversion import type. Set count to One. Include only the primary action in Conversions for bidding.

3. Define values. Use expected revenue at mid stages and Amount at closed-won. Currency must match the Google Ads account currency. Store the value table where ops can find it.

4. On stage entry, upload gclid or gbraid/wbraid, conversion action resource name, conversion_date_time with timezone offset, conversion_value and currency_code. Set offline_conversion_uploaded to prevent duplicates. Use dealId plus stage as order_id.

5. Gate on consent fields so ad_user_data and ad_personalization requirements in your policy are respected before upload. If consent is unknown, do not guess GRANTED.

6. Add a failure path: Slack or email when the Google Ads API returns a non-success, and a HubSpot view of staged deals where offline_conversion_uploaded is false.`,
  },
  {
    heading: "Gotchas",
    body: `Click identifiers expire. Late closed-won uploads without a still-valid ID do not train bidding. Keep mid-stage bridges.

HubSpot stores datetimes in UTC; Google Ads expects conversion_date_time formatted for the account timezone.

Deduplicate with a stable order_id such as dealId plus stage name.

Upload stage-change time, not original click time.

Reopened deals should not silently re-upload.

Contact merges can wipe custom properties if merge rules are wrong. Protect gclid as non-clearing.

Association quirks: a deal associated to multiple contacts may pick the wrong gclid if your workflow reads the first associated contact. Define primary contact logic.`,
  },
  {
    heading: "How to verify it is working",
    body: `Confirm Accepted rows on the conversion action within 24 to 72 hours. Take one test deal: contact has gclid, stage fired, middleware log shows success, and the conversion appears on the originating campaign after Google's processing delay. In HubSpot, report deals at stage with offline_conversion_uploaded true and spot-check five.

Also verify a negative path: a deal without gclid should not upload and should appear on a missing-identifier report. Silent skips are fine; silent failures are not.`,
  },
  {
    heading: "What breaks it later",
    body: `Expired private app tokens, paused workflows, currency changes, and reps editing click ID fields. Monitor weekly acceptance rate and staged deals missing gclid. After any portal clone or sandbox sync, re-check property internal names. HubSpot labels can look identical while internal names differ across portals.`,
  },
]);

expandGuide("hubspot-ga4-attribution", [
  {
    heading: "What this integration solves",
    body: `GA4 alone ends at on-site events. HubSpot alone lacks clean multi-channel path data. Without a bridge, marketing argues from sessions while sales argues from deals. The failure mode is two dashboards and no shared conversion definition.

This build emits GA4 events when HubSpot lifecycle_stage or dealstage changes, keyed by a shared client_id or user_id strategy you document. The point is not to recreate HubSpot reports inside GA4. The point is to let path and channel explorations see CRM milestones without exporting CSVs every Monday.

Teams that skip identity design end up with Measurement Protocol hits that never join a session. Teams that skip event naming end up with twelve spellings of qualified.`,
  },
  {
    heading: "Prerequisites and permissions",
    body: `GA4 Editor access, Google Tag Manager or server-side GTM recommended, HubSpot workflow capability, and agreement on identity: email hash as user_id only where policy allows, plus browser client_id stored on the HubSpot contact as ga_client_id.

Legal and security should sign off if you bind user_id to a stable person identifier. For many B2B programmes, ga_client_id plus CRM stage events is enough without sending email into GA4.`,
  },
  {
    heading: "The build, step by step",
    body: `1. Capture ga_client_id from the first-party cookie (_ga parsed per Google documentation) into a HubSpot contact property on form submit. Validate parsing in a staging environment; off-by-one cookie parsing is common.

2. In GA4, register custom dimensions for hubspot_lifecycle_stage and hubspot_deal_stage (event scoped) and deal_amount if you send values. Clear naming beats clever naming.

3. Workflow on lifecycle stage change calls Measurement Protocol or a webhook into sGTM with client_id, user_id if used, event name hubspot_lifecycle_update, and params including the new stage.

4. Separate event hubspot_deal_closed_won with value and currency for revenue exploration. Prefer this over overloading purchase unless ecommerce semantics truly fit.

5. Mark key events carefully. Do not mark every lifecycle update as a key event or you will pollute reports. Start with closed won and one mid-funnel event.

6. Document a dedupe approach with event_id when both browser thank-you tags and CRM workflows can describe the same enquiry.`,
  },
  {
    heading: "Gotchas",
    body: `Measurement Protocol events without a valid client_id orphan sessions. Consent Mode must allow analytics_storage before you treat hits as fully consented. HubSpot timestamps versus GA4 event time can drift. Avoid dual firing from browser and server for the same stage without event_id deduplication.

Do not put email, phone or name into event parameters. Hashing belongs in enhanced conversions paths with their own rules, not as casual GA4 props.

Lifecycle stage recycling (subscriber to lead and back) can spam events. Gate on meaningful transitions only.`,
  },
  {
    heading: "How to verify it is working",
    body: `Use GA4 DebugView with a test contact, trigger a lifecycle change, and confirm the event and params. In Explorations, build a free-form report of session source against hubspot_deal_closed_won count. Compare weekly closed-won counts in HubSpot to GA4 event counts; investigate gaps above an agreed tolerance.

Verify consent-denied journeys do not send advertising user data, even if analytics still collects under your policy.`,
  },
  {
    heading: "What breaks it later",
    body: `Cookie changes, Consent Mode defaults flipped to denied without modelling, and HubSpot workflows cloned without the webhook. Quarterly audit of event volume versus CRM stage volume. After a GTM publish, re-check that the server client still receives the forwarded events.`,
  },
]);

expandGuide("calendly-attribution-tracking", [
  {
    heading: "What this integration solves",
    body: `Calendly is often the conversion. If the embed drops query parameters, CRM meetings arrive as Direct or Calendly with no campaign. Paid social and search then look broken while SDRs are full.

The build passes utm_source, utm_medium, utm_campaign, utm_content, utm_term, gclid, gbraid and wbraid into invitee questions or Calendly's UTM passthrough, then into HubSpot via native sync or webhook. Booking confirmation pages should still carry parameters when possible so GA4 can see the same campaign context.

This is a plumbing job. Creative testing will not fix a widget that strips query strings.`,
  },
  {
    heading: "Prerequisites and permissions",
    body: `Calendly owner access on the event types that sales uses. CRM admin to map custom fields. Landing pages must preserve query parameters into the embed (avoid stripping on redirect). If marketing uses many event types, inventory them first; one fixed event type is not enough when sales creates new ones monthly.`,
  },
  {
    heading: "The build, step by step",
    body: `1. Enable UTM parameter passthrough on the event type if your Calendly plan exposes it. Where the UI has moved, look for UTM or campaign parameter settings on the event type itself.

2. Add hidden invitee questions for gclid, gbraid, wbraid when passthrough does not cover click IDs. Populate them with on-page JavaScript reading location.search before the widget loads. Persist values in session storage only if you accept that design; this programme prefers query-to-field write without storage APIs when possible.

3. Map Calendly to HubSpot (or Salesforce) fields one-to-one. Meeting booked should create or update contact and set a meeting_booked_at datetime. Keep original utm fields write-once.

4. Fire a GA4 generate_lead or meeting_booked event on the confirmation page with campaign params still present.

5. Optionally upload meeting_booked as an offline conversion with a modest expected value from your value table.

6. Add a quarterly checklist: every active event type still has the hidden questions.`,
  },
  {
    heading: "Gotchas",
    body: `Inline embeds inside SPAs that remount without query strings. Branded Calendly share links that bypass your site. Multiple event types with inconsistent questions. Timezone on meeting start versus booking time for conversion timestamps. GDPR: booking forms still need consent language.

Team pages and round-robin event types can fork settings. Test the exact link sales puts in email signatures, not only the landing page embed.`,
  },
  {
    heading: "How to verify it is working",
    body: `Book a test meeting from a URL that includes utm_campaign=test_calendly and a fake gclid=test123. Confirm those values on the Calendly invitee payload and on the CRM contact. Confirm the GA4 event in DebugView. Repeat using a mobile browser, because embed behaviour can differ.`,
  },
  {
    heading: "What breaks it later",
    body: `New event types created without the hidden questions, theme redesigns that replace the embed, and CRM field API name changes. Quarterly checklist of all active event types. Watch for sales switching to personal Calendly links outside the company workspace.`,
  },
]);

expandGuide("call-tracking-crm-ad-platform-loop", [
  {
    heading: "What this integration solves",
    body: `Phone-heavy businesses lose attribution when the winning channel is a call. Form-only conversion actions starve search terms and campaigns that drive calls. The loop fixes that: DNI swaps numbers by source, the call lands in CRM with the original gclid, and a qualified or closed outcome uploads with value.

Without the CRM middle, call tracking becomes a vanity answer rate dashboard. Without the ad platform upload, CRM call outcomes never train bidding. You need all three legs.`,
  },
  {
    heading: "Prerequisites and permissions",
    body: `A call tracking vendor with DNI and webhooks, CRM admin access, Google Ads offline conversion actions, and a privacy review for call recording and personal data. Landing templates must load the DNI script after a consent decision where required.

Define call_outcome picklist values with sales before go-live. If everything is marked connected, upload values become meaningless.`,
  },
  {
    heading: "The build, step by step",
    body: `1. Configure number pools per channel or per development/location. Document which CSS selectors or tel: links the DNI script replaces.

2. Pass gclid and UTMs into the call tracking session parameters so the webhook can forward them.

3. Webhook on call completed: create or update CRM contact/deal with call_duration, call_recording_url (ACL restricted), gclid, and call_source.

4. Sales sets call_outcome (qualified, booked, closed, junk). Automations should not invent qualified from duration alone without a written rule.

5. Middleware uploads to Google Ads when outcome hits qualified or closed, with values from your offline value table. Use call id plus outcome as order_id.

6. Optionally send a GA4 call_qualified event via Measurement Protocol with the stored client_id if you have it.`,
  },
  {
    heading: "Gotchas",
    body: `DNI flashing wrong numbers on slow consent. Spa navigation without re-running DNI. Shared reception lines without pool isolation. Uploading every 10-second call as a conversion. Currency and timezone on upload. Deduplicate when the same person both calls and submits a form.

Number pool exhaustion produces suppressed swaps and silent loss of attribution. Alert on pool health, not only on webhook errors.`,
  },
  {
    heading: "How to verify it is working",
    body: `Call a tracked number from a URL with gclid=test, confirm CRM record fields, mark qualified, confirm Ads upload acceptance. Compare phone enquiry share in CRM to form volume for sanity. Spot-check that development-level pools land on the correct development field for housebuilders.`,
  },
  {
    heading: "What breaks it later",
    body: `Number pool exhaustion, website template changes removing tel: classes, and CRM outcome picklist edits. Weekly pool health and webhook failure alerts. After a website redesign, re-test DNI on every template that can rank for paid traffic.`,
  },
]);

expandGuide("server-side-tagging-consent-mode", [
  {
    heading: "What this integration solves",
    body: `Browser-only tagging loses events to blockers and breaks when consent is denied without a modelling plan. Server-side tagging with Consent Mode v2 lets you respect ad_storage, ad_user_data, ad_personalization and analytics_storage while still receiving first-party, consented hits through your own subdomain.

This is not a way around consent. It is a way to implement consent decisions reliably, reduce client-side tag weight, and keep first-party collection on a domain you control.`,
  },
  {
    heading: "Prerequisites and permissions",
    body: `A server container hosted on Cloud Run or equivalent, first-party subdomain (for example metrics.example.com), web GTM container, CMP that can write the Consent Mode API before tags fire, and legal sign-off on the cookie banner categories.

DNS and SSL for the metrics subdomain must be stable. Cold starts and billing limits should be understood before you cut over paid traffic.`,
  },
  {
    heading: "The build, step by step",
    body: `1. Deploy sGTM with a first-party custom domain and SSL. Confirm the GA4 client receives hits on that host.

2. In web GTM, set Consent Overview defaults (usually denied for ad storage in the UK/EU until grant). Map CMP categories to Consent Mode signal names explicitly.

3. CMP callbacks call gtag('consent','update',{...}) with ad_storage, analytics_storage, ad_user_data, ad_personalization. Ensure the update fires before Ads tags.

4. Route GA4 via the server container client. Forward Google Ads conversion tags server-side where templates allow.

5. Pass consent state to the server event so server tags also gate enhanced conversions. A server tag that ignores consent is a compliance incident waiting to happen.

6. Deduplicate browser and server events with event_id. Validate in Tag Assistant and GA4 DebugView for both granted and denied paths.`,
  },
  {
    heading: "Gotchas",
    body: `Default granted consent is a compliance failure in many jurisdictions. Enhanced conversions must not send user data when ad_user_data is denied. First-party cookies still need transparent notice. Healthcare and special category data needs extra controls beyond this guide. Region-specific consent for US state laws if you sell there.

CMP A/B tests that load late will race tags. Treat banner performance as measurement infrastructure, not only as UX.`,
  },
  {
    heading: "How to verify it is working",
    body: `Use Tag Assistant and GA4 DebugView with consent denied and granted scenarios. Confirm denied paths do not send ad identifiers. Confirm granted paths show server inbound requests on your metrics subdomain. Keep screenshots or HAR notes for the compliance file.`,
  },
  {
    heading: "What breaks it later",
    body: `CMP script updates, cookie banner A/B tests that race tags, and sGTM billing or cold starts dropping traffic. Alert on inbound sGTM request volume and consent ratio. Re-test after every CMP vendor upgrade.`,
  },
]);

expandGuide("crm-migration-without-losing-attribution", [
  {
    heading: "What this integration solves",
    body: `CRM migrations often succeed as contact moves and fail as attribution moves. GCLID fields get dropped, stage names change meaning, and offline upload automations point at dead properties. Paid media looks like it fell off a cliff when only the wiring moved.

This guide is a migration checklist for attribution continuity across HubSpot, Salesforce and Pipedrive moves. Treat measurement as a first-class workstream with its own test plan, not a footnote under data migration.`,
  },
  {
    heading: "Prerequisites and permissions",
    body: `Admins on old and new CRM, Google Ads access, a freeze window for stage changes, and a mapping workbook that lists every attribution field: gclid, gbraid, wbraid, ga_client_id, original utm fields, offline upload flags, and conversion external IDs.

Name an attribution owner who can block go-live if parity checks fail. Without a named owner, marketing finds the breakage two weeks later in bidding.`,
  },
  {
    heading: "The build, step by step",
    body: `1. Inventory attribution fields and automations in the source CRM. Export sample rows with known paid conversions.

2. Recreate fields in the destination with identical meaning. Prefer same API names where possible.

3. Map stages with a written dictionary. Do not collapse PQQ and ITT into Proposal without documenting the loss.

4. Migrate historical click IDs even for closed records; you may still need them for lookbacks and audits.

5. Rebuild upload jobs against new field API names. Keep the old job running until parity checks pass.

6. Parallel run: for two weeks, compare upload volume and accepted conversions pre/post.

7. Only then decommission the source automations.

8. Publish a short internal note: what changed, what to monitor, who to ping.`,
  },
  {
    heading: "Gotchas",
    body: `Deduping contacts can discard the contact that held the gclid. Activity history migrations that rewrite timestamps break conversion_date_time audits. Soft-deleted marketing contacts excluded from export. Re-labelling stages without updating Google Ads conversion action names. Currency field defaults changing on import.

Sandbox refreshes that overwrite destination field permissions are a special joy. Re-check field level security after refresh.`,
  },
  {
    heading: "How to verify it is working",
    body: `Reconcile 50 known paid-won records: click ID present, stage equivalent, upload flag equivalent, and a fresh stage change produces an Accepted upload in Google Ads. Compare weekly Accepted count to the pre-migration baseline. Do not declare victory on a single test Opportunity.`,
  },
  {
    heading: "What breaks it later",
    body: `Post-migration cleanup scripts that null custom fields, and new sales processes that invent stages without measurement owners. Keep an attribution field lock list. Any request to delete unused custom fields must pass through that list.`,
  },
]);

// Expand salesforce/pipedrive slightly more by reloading current and appending paragraph if under 1200
for (const slug of [
  "salesforce-google-ads-offline-conversions",
  "pipedrive-google-ads-offline-conversions",
]) {
  const guide = jiti(join(root, `content/integrations/${slug}.ts`));
  const count = guide.sections.map((s) => s.body).join(" ").split(/\s+/).filter(Boolean).length;
  if (count < 1200) {
    const sections = guide.sections.map((s, idx) =>
      idx === 0
        ? {
            ...s,
            body:
              s.body +
              "\n\nWrite the commercial definition of each uploaded stage into the same runbook as the technical field map. When sales renames a stage label, measurement owners should hear about it before Google Ads does. Keep a one-page diagram of Lead or Person to Opportunity or Deal to Google Ads conversion action names, and store it where media buyers can find it without opening the middleware repo.",
          }
        : s,
    );
    // add an extra section for word count uniqueness
    sections.push({
      heading: "Runbook and ownership",
      body: `Name a primary owner for click ID capture and a secondary owner for upload acceptance monitoring. Put both on a weekly fifteen-minute checklist: Accepted volume, missing identifier rate, and failed callouts. Migrations, website releases and CRM stage edits should trigger an extraordinary check the same day. This operational layer is what keeps an initially correct Salesforce or Pipedrive build alive beyond the project channel celebration message.`,
    });
    writeIntegration(slug, sections);
  }
}

// Resources 500-800 words
const resourceCopy = {
  "tender-hubspot-deal-pipeline": {
    intro:
      "A HubSpot deal pipeline shaped like a real tender process, with stage definitions that stop forecasting from becoming fiction. Download the CSV blueprint and the written definitions before you touch portal settings.",
    sections: [
      {
        heading: "What this is",
        body: `A CSV you can use as a blueprint for HubSpot deal stages, plus a written definition document. The definitions are the asset. Most pipelines fail because Relationship, PQQ and ITT get collapsed into Proposal, which makes weighted pipeline look precise and mean nothing.

The CSV includes stage order, labels, suggested win probabilities and a forecast category. Treat probabilities as placeholders until your closed history replaces them. The markdown guide spells out entry criteria, exit criteria and a default owner role for each stage, plus recommended deal properties such as tender_reference, submission_deadline and gclid.`,
      },
      {
        heading: "Who it is for",
        body: `Commercial directors and RevOps leads in contracting, fit-out and any tender-led B2B motion using HubSpot. It is also useful for agencies taking over a portal that still speaks SaaS funnel language while the sales team lives in PQQs.

If you are mid-migration from spreadsheets, use the definition doc as the workshop agenda. Align language first, then click buttons in HubSpot.`,
      },
      {
        heading: "How to use it",
        body: `Read the stage definition doc first. Create or edit a HubSpot deal pipeline to match the stage names and win probabilities. Import or recreate stages manually if your portal blocks CSV stage import. Train sales on entry and exit criteria before enforcing required fields.

Run a two-week shadow period where reps tag deals with both old and new stages if you are replacing a live pipeline. Only then make the new pipeline mandatory. Connect offline conversion uploads to Award or Bid submitted after the language is stable.`,
      },
      {
        heading: "Mistake it prevents",
        body: `Forecasting from generic funnels that ignore pre-qualification and framework positioning, which is where tender value is actually won or lost. It also prevents marketing from optimising to MQL counts that sales never recognised as real packages.

The secondary mistake it prevents is silent stage drift: new hires inventing side meanings for Proposal. Written exit criteria make drift visible in coaching, not only in the forecast miss at quarter end.`,
      },
    ],
  },
  "ga4-enquiry-event-schema": {
    intro:
      "A practical GA4 event schema for businesses where the conversion is an enquiry, meeting or opportunity, not an ecommerce purchase. Use the JSON as a contract between marketing ops and whoever touches GTM.",
    sections: [
      {
        heading: "What this is",
        body: `A JSON schema describing recommended events and parameters, plus implementation notes for GTM. Built for enquiry-led motions: forms, calls, bookings and CRM-qualified milestones. It standardises names like generate_lead, meeting_booked, lead_qualified, opportunity_created and closed_won so explorations do not depend on tribal knowledge.

The notes file covers custom dimension registration, PII rules, key event choices and consent reminders. It does not invent benchmark conversion rates.`,
      },
      {
        heading: "Who it is for",
        body: `Marketing ops and analysts implementing GA4 for B2B, professional services, travel enquiry and housebuilder lead gen. Developers implementing data layers benefit from the same contract so they are not guessing parameter names per page.`,
      },
      {
        heading: "How to use it",
        body: `Load the JSON as your contract. Implement events in GTM or gtag to match names and params. Register custom dimensions in GA4 Admin for the parameters you will report on. Start with generate_lead as a key event, then promote later stages when volume and CRM wiring allow.

For housebuilders, always pass development_id. For multi-brand travel, pass a brand or destination parameter if you need filtered explorations. Keep raw email and phone out of parameters entirely.`,
      },
      {
        heading: "Mistake it prevents",
        body: `Inventing a new event name per landing page and then being unable to build a single enquiry funnel exploration. It also prevents the purchase-event-for-everything shortcut that confuses ecommerce reports with B2B pipeline reporting.

A third failure mode is dual browser and server firing without event_id, which inflates enquiry counts and trains ads on duplicates. The notes call that out before you scale traffic.`,
      },
    ],
  },
  "google-ads-housebuilder-account-structure": {
    intro:
      "A campaign naming and structure template so each development can be budgeted, tracked and reported without drowning in one brand blob. Built for multi-development housebuilder accounts.",
    sections: [
      {
        heading: "What this is",
        body: `A CSV blueprint of campaigns, ad groups and label conventions for housebuilders running multiple live developments, plus notes on conversion actions per site. It shows corporate brand, per-development brand and per-development generic search as separate lines so budgets and negatives can differ.

The notes cover when to split, how Performance Max can still break development economics if asset groups are mixed, and how call conversions should align to DNI pools.`,
      },
      {
        heading: "Who it is for",
        body: `In-house marketing leads and agencies structuring Google Ads for regional or national home builders. Also useful for finance partners who want cost per reservation by site rather than a national blended CPC.`,
      },
      {
        heading: "How to use it",
        body: `Copy the naming pattern into your account. Create one searchable structure per development for brand and non-brand where volume allows. Attach development labels for portfolio reporting. Align conversion actions to enquiry, appointment and reservation, with reservation as primary when volume supports it.

If two developments share a postcode intent cluster, still keep campaigns separate and manage negatives carefully rather than merging them into one bucket for convenience.`,
      },
      {
        heading: "Mistake it prevents",
        body: `A single national campaign where one hero site spends the budget while new launches starve, with no clean cost per reservation by development. It also prevents reporting theatre: national ROAS slides that hide a failing site.

The template will not fix weak creative or slow sales appointments. It will make those problems visible per development instead of averaged away.`,
      },
    ],
  },
  "negative-keyword-starter-lists": {
    intro:
      "Vertical negative lists that target wasted intent in construction, travel, legal, medical and B2B software, not a generic free and cheap dump. Each CSV is a starter set to review against your search terms.",
    sections: [
      {
        heading: "What this is",
        body: `Five CSV lists of starter negatives with notes on why they matter in that vertical. Construction focuses on jobs, DIY and tender-noise queries. Travel focuses on cabin crew and cheap-flight-only intent that will not book a package. Legal focuses on DIY kits and careers. Medical focuses on jobs and non-patient research. B2B software focuses on tutorials, scrapers and nulled-software intent.

They are starters, not permanent gospel. Review search terms monthly and remove anything you intentionally sell.`,
      },
      {
        heading: "Who it is for",
        body: `PPC leads launching or cleaning accounts in these verticals. Useful during account takeovers when you need an immediate safety net before the first full search term review cycle completes.`,
      },
      {
        heading: "How to use it",
        body: `Upload as account or campaign negative lists. Remove any term you intentionally want. Add match types carefully; the CSV uses phrase-style seeds you can adapt. Keep a change log so you know why a term was blocked when someone asks six weeks later.

Pair with shared lists for portfolio consistency and campaign-level exceptions where one product line differs.`,
      },
      {
        heading: "Mistake it prevents",
        body: `Paying for jobs, DIY, student and info queries that look relevant to a broad match algorithm and worthless to sales. It also prevents the opposite mistake of pasting a giant generic negative list that blocks high-intent modifiers you actually need.

Medical and legal lists are intentionally conservative on clinical and practice language. Policy-sensitive positives still need a specialist review before you scale.`,
      },
    ],
  },
  "offline-conversion-upload-template": {
    intro:
      "A CSV template and mapping notes for uploading offline conversions to Google Ads without guessing column meanings. Use it for a first manual upload or as the field contract for middleware.",
    sections: [
      {
        heading: "What this is",
        body: `A CSV with the columns most offline click import flows expect, example rows, and a markdown mapping guide from CRM fields to Ads fields. It includes gclid, gbraid, wbraid, conversion_name, conversion_time with timezone offset, value, currency, order_id and consent.

Example rows are synthetic. No client data is included.`,
      },
      {
        heading: "Who it is for",
        body: `Ops teams preparing manual or middleware uploads from HubSpot, Salesforce or Pipedrive. Media buyers who need a clear handoff document for engineering also benefit.`,
      },
      {
        heading: "How to use it",
        body: `Map your CRM export to the columns. Validate timezone and currency before the first production upload. Prefer API automation once the mapping is stable. Keep order_id stable so retries do not double-count.

If your Google Ads importer uses slightly different headers, adapt names while keeping meanings. The mapping notes explain the meaning of each field so you are not inventing columns under pressure.`,
      },
      {
        heading: "Mistake it prevents",
        body: `Uploading conversion times in the wrong timezone or mixing currencies, which creates Accepted rows that still poison bidding. It also prevents missing dedupe keys, the usual reason a weekend retry doubles conversions.

A quieter mistake it prevents is uploading Closed Won with value 1 because nobody defined Amount mapping. The template forces value and currency into the conversation early.`,
      },
    ],
  },
  "attribution-health-check": {
    intro:
      "A 20-point scored checklist to see whether your attribution stack would survive a board question about which channels create revenue. Each item is worth five points for a 100-point total.",
    sections: [
      {
        heading: "What this is",
        body: `A scored self-audit covering click ID capture, consent, CRM fields, offline uploads, call tracking, GA4 parity and reporting. The markdown file is printable. The CSV is for spreadsheet scoring across markets or brands.

Bands in the file help you prioritise: critical plumbing gaps, usable but fragile, board-safe with listed fixes, and maintain. The checklist invents no benchmarks for CPC or ROAS. It scores presence and quality of measurement plumbing.`,
      },
      {
        heading: "Who it is for",
        body: `Marketing leaders and ops owners before a media scale-up, CRM migration or agency handover. Commercial directors can use the band result without reading every technical item.`,
      },
      {
        heading: "How to use it",
        body: `Score each item 0, 3 or 5. Sum the total. Use the band notes in the file to prioritise fixes. Re-run quarterly and after website or CRM changes. Have one person score independently, then review disputes with the channel owner so scores stay honest.

Bring the lowest zero scores into the next sprint, not the highest debate about modelling philosophy.`,
      },
      {
        heading: "Mistake it prevents",
        body: `Scaling budgets on dashboards that only measure form fills while revenue sits in calls and late CRM stages. It also prevents agency handovers where everyone assumes gclid is captured because a tag exists on the thank-you page.

The checklist will not tell you the perfect attribution model. It will tell you whether you are qualified to argue about models yet.`,
      },
    ],
  },
};

for (const [slug, copy] of Object.entries(resourceCopy)) {
  writeResource(slug, copy.intro, copy.sections);
}

console.log("done");
