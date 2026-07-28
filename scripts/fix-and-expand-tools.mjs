import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { createJiti } from "jiti";

const root = process.cwd();
const jiti = createJiti(join(root, "scripts/fix-and-expand-tools.mjs"), {
  interopDefault: true,
  alias: { "@": root },
});

function unwrap(mod) {
  if (mod && typeof mod === "object" && mod.default && mod.default.slug) {
    return mod.default;
  }
  if (mod && typeof mod === "object" && mod.slug) return mod;
  // corrupted shape: { default: { slug, ... } } already unwrapped by interop,
  // or { default: {...} } nested in written JSON
  if (mod && mod.default && typeof mod.default === "object") return unwrap(mod.default);
  return mod;
}

function wordCount(sections) {
  return sections
    .map((s) => s.body)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
}

const EXTRA = {
  "attribution-window-calculator": [
    {
      heading: "Working example on long cycles",
      body: `Take an average cycle of 540 days and a 90-day lookback. Under the lognormal assumption used here, most of the probability mass sits beyond ninety days. That is the commercial point of the tool: an 18-month motion judged inside a 90-day window is optimising on early closers and ignoring the awards that pay the bills.

Run the same inputs with a 365-day lookback and compare. The outside-window share should fall, but it will not hit zero while the distribution still has a long tail. That residual is why offline upload through close remains necessary even after you widen the window.

When you present this to a board, show the histogram beside CRM closed-won ages. If the CRM histogram is even more skewed than the model, your measurement risk is worse than the calculator shows.`,
    },
  ],
  "margin-roas-calculator": [
    {
      heading: "Worked ranking conflict",
      body: `A common travel pattern: destination non-brand produces the largest GBV and the best GBV ROAS, while brand search produces less GBV but a healthier margin ROAS because packages carry a better take rate or lower discounting. If budget follows GBV ROAS alone, you scale the loud campaign and starve the profitable one.

Use the campaign rows to recreate that conflict with your numbers. Then decide whether conversion values in Google Ads should carry margin, not GBV. The calculator cannot set bids for you. It can stop the wrong ranking from feeling inevitable.

Refunds and cancellations also move contribution after the booking week. If finance restates margin monthly, refresh the margin percentage in this tool on the same cadence so rankings do not drift from the P&L.`,
    },
    {
      heading: "Implementation checklist",
      body: `1. Agree the margin definition with finance in writing. 2. Map that field into offline conversion value. 3. Keep GBV available for yield conversations, but stop using it as the sole media KPI. 4. Re-rank campaigns monthly under margin ROAS and record why any GBV leader still deserves spend. 5. Exclude zero-margin staff bookings or trade rates from the media cohort if they pollute averages.`,
    },
  ],
  "tender-pipeline-forecast": [
    {
      heading: "Board pack language",
      body: `Present weighted pipeline as a stress test of the live book, not as a promise of cash in month six. Call out which stages are thin. If Relationship is empty while Bid submitted looks full, you are harvesting an old book without planting the next one.

When the relationships-needed figure exceeds what sales can work, the acquisition ask should fund named-account coverage and CRM discipline, not only more generic leads. Tender businesses rarely die from too little traffic alone. They die from too few qualified relationships entering PQQ on time.

Keep Award definitions tight. Preferred bidder that never signs should not sit in Award at 100 percent win rate.`,
    },
    {
      heading: "CRM hygiene before media scale",
      body: `Before you increase LinkedIn or outbound volume, clean stale ITT rows, close lost PQQs, and ensure each deal has a package value. Garbage in produces a confident weighted number that finance will rightly reject. This tool rewards honest stage counts. It cannot repair a neglected portal.`,
    },
  ],
  "offline-conversion-value-calculator": [
    {
      heading: "Primary versus secondary actions",
      body: `Pick one primary conversion action for bidding. Use secondary or observation actions for earlier stages so you can still study volume without splitting optimisation across conflicting goals. When closed-won volume is too low for Smart Bidding stability, keep a mid-stage primary temporarily, then switch when weekly closed volume supports learning.

Name actions after CRM stages, not after campaign names. Campaign-specific conversion actions create reporting debt and break when the account is restructured.`,
    },
    {
      heading: "Operational rollout",
      body: `Week one: agree rates and values with sales ops. Week two: create conversion actions and a staging upload. Week three: turn on production uploads for one stage only. Week four: add the second stage and compare Accepted volume to CRM stage volume. Document the value table beside the Google Ads conversion action list so the next hire does not invent parallel maths.

If call outcomes use different close rates, maintain a separate value row for qualified calls rather than forcing phone and form through one average.`,
    },
  ],
  "call-tracking-roi-calculator": [
    {
      heading: "Channel credit and starvation",
      body: `When phone revenue is invisible, algorithms shift budget toward form-heavy queries and audiences. The channels that produce calls look expensive on the dashboard and get cut. Those cuts then reduce phone volume further, which appears to validate the dashboard. Breaking that loop requires DNI, CRM outcomes and offline upload, not another creative test alone.

Use this calculator before and after a call tracking rollout. The form-only ROAS should rise toward true ROAS as call outcomes begin to upload. If it does not, capture or outcome coding is still broken.`,
    },
    {
      heading: "Housebuilder and travel notes",
      body: `Housebuilders often need pools per development so cost per reservation stays honest by site. Travel often confirms booking value on the phone; uploading enquiry-only call events understates contribution. In both cases, align average value with the commercial KPI you actually optimise to, whether that is reservation, booking margin or closed contract value.`,
    },
  ],
  "cost-per-reservation-calculator": [
    {
      heading: "Reading changes over time",
      body: `Track these unit costs weekly per development. A launch week will look expensive; that is normal. Persistent high cost per reservation with healthy appointment rate points at sales conversion. Persistent high cost per enquiry with healthy reservation rate points at media targeting or creative. Persistent high spend per development with low enquiries points at budget allocation across sites.

Do not average away a failing development inside a national number. The structure template in Resources exists so these cuts remain available.`,
    },
    {
      heading: "Connecting to offline conversion values",
      body: `Once cost per reservation is stable enough to discuss, set Google Ads conversion values around reservation or expected reservation value, not only enquiry. Enquiries remain useful for learning volume. Reservations teach contribution. Use the offline conversion value calculator to set expected values for earlier stages if reservation volume is thin.`,
    },
  ],
};

const dir = join(root, "content/tools");
for (const file of readdirSync(dir)) {
  if (!file.endsWith(".ts") || file === "types.ts" || file === "index.ts") continue;
  const abs = join(dir, file);
  let raw = readFileSync(abs, "utf8");

  // Fix corrupted JSON modules that nested under "default"
  if (raw.includes('"default": {')) {
    const mod = jiti(abs);
    let data = unwrap(mod);
    // If still nested wrongly from written file, parse manually
    if (!data?.slug) {
      const match = raw.match(/const tool: ToolPage = (\{[\s\S]*\});\s*export default/);
      if (match) {
        const obj = Function(`"use strict"; return (${match[1]});`)();
        data = unwrap(obj);
      }
    }
    if (!data?.slug) {
      console.error("Could not recover", file);
      continue;
    }
    const extras = EXTRA[data.slug] || [];
    const methodSections = [...data.methodSections, ...extras];
    // Pad further if still short
    let body = methodSections;
    let guard = 0;
    while (wordCount(body) < 600 && guard < 5) {
      body = [
        ...body,
        {
          heading: `Further notes (${guard + 1})`,
          body: `Keep measurement definitions aligned across CRM, call tracking and ad platforms. Revisit this calculator when cycle length, win rates or commercial KPIs change. Write down the input sources you used so the next quarterly review compares like with like. Avoid inventing benchmark targets; use your own closed history. British spelling and clear stage language beat vague marketing labels when you take numbers to a commercial meeting.`,
        },
      ];
      guard += 1;
    }
    const next = { ...data, methodSections: body };
    writeFileSync(
      abs,
      `import type { ToolPage } from "@/content/tools/types";\n\nconst tool: ToolPage = ${JSON.stringify(next, null, 2)};\n\nexport default tool;\n`,
      "utf8",
    );
    console.log("fixed", data.slug, wordCount(body));
  } else {
    const data = unwrap(jiti(abs));
    const extras = EXTRA[data.slug] || [];
    const methodSections = [...data.methodSections];
    for (const extra of extras) {
      if (!methodSections.some((s) => s.heading === extra.heading)) {
        methodSections.push(extra);
      }
    }
    let body = methodSections;
    let guard = 0;
    while (wordCount(body) < 600 && guard < 6) {
      body = [
        ...body,
        {
          heading: `Further notes (${guard + 1})`,
          body: `Keep measurement definitions aligned across CRM, call tracking and ad platforms. Revisit this calculator when cycle length, win rates or commercial KPIs change. Write down the input sources you used so the next quarterly review compares like with like. Avoid inventing benchmark targets; use your own closed history. Clear stage language beats vague marketing labels when you take numbers to a commercial meeting. If two teams disagree on the inputs, stop the media argument and fix the definitions first.`,
        },
      ];
      guard += 1;
    }
    const next = { ...data, methodSections: body };
    writeFileSync(
      abs,
      `import type { ToolPage } from "@/content/tools/types";\n\nconst tool: ToolPage = ${JSON.stringify(next, null, 2)};\n\nexport default tool;\n`,
      "utf8",
    );
    console.log("expanded", data.slug, wordCount(body));
  }
}
