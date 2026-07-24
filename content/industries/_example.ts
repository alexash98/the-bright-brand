import type { Industry } from "@/content/types";

/**
 * EXAMPLE FIXTURE ONLY.
 * Used so foundation routes and templates can be reviewed.
 * Excluded from production industry listings and from the sitemap.
 * Do not treat this as a real vertical. Vertical agents write their own
 * content/industries/<slug>.ts files and leave this file alone.
 */
const exampleIndustry: Industry = {
  slug: "example-vertical",
  name: "Example vertical",
  type: "pillar",
  metaTitle: "Example Vertical Marketing Agency | The Bright Brand",
  metaDescription:
    "Placeholder industry pillar for The Bright Brand SEO foundation. Dummy data only, not a live vertical page for prospects.",
  intro:
    "This is an example industry pillar for template review. The commercial problem in a real vertical would open here in the first 150 words, written for someone who already lives in that market. No agency throat-clearing, and nothing on this page should ship as a live vertical.",
  pipelineShape: [
    {
      heading: "How the pipeline works in this example",
      body: "Cycle length in a real vertical would be named here, along with the decision makers, the enquiry sources, and the leak points. This example uses a 90-day consideration window, a buying committee of three, and a mix of inbound forms and phone enquiries so the template can show pipeline structure.",
    },
    {
      heading: "Where enquiries leak",
      body: "In this fixture, 40 percent of form fills never reach a booked meeting, and phone enquiries are logged in a spreadsheet rather than the CRM. Those numbers are dummy data for layout review only.",
    },
  ],
  infrastructure: [
    {
      heading: "CRM and stage design",
      body: "The example build maps deal stages to a realistic lifecycle: enquiry, qualified, meeting booked, proposal, closed. Field names in a live page would match the actual HubSpot or Salesforce properties used on the engagement.",
    },
    {
      heading: "Tracking and attribution",
      body: "Server-side tagging, offline conversion upload, and a blended dashboard are the infrastructure story. This fixture cites a fictional Google Ads conversion action named example_qualified_meeting so the template has a platform-specific detail to render.",
    },
  ],
  proof: [
    {
      client: "Example Industrial Group",
      anonymised: true,
      situation:
        "A fictional mid-market supplier turning over £12m, with paid search driving form fills that sales did not trust.",
      built:
        "HubSpot pipeline rebuild, call tracking on the main enquiry line, and offline conversion upload for qualified meetings.",
      results: [
        {
          metric: "Qualified meetings per month",
          before: "11",
          after: "27",
          window: "90 days",
        },
        {
          metric: "Cost per qualified meeting",
          before: "£420",
          after: "£190",
          window: "90 days",
        },
        {
          metric: "Form-to-meeting rate",
          before: "18%",
          after: "41%",
          window: "90 days",
        },
      ],
      signedOff: false,
    },
  ],
  faqs: [
    {
      q: "Is this a real industry page?",
      a: "No. This is a foundation example used to review templates, schema and QA scripts. Real vertical pages are added as separate files under content/industries.",
    },
    {
      q: "How long is a typical cycle in this example?",
      a: "The fixture uses a 90-day consideration window so the pipeline and attribution sections have something concrete to describe.",
    },
    {
      q: "Which CRM does the example assume?",
      a: "HubSpot for the primary build, with notes on how Salesforce stage design would differ. Live pages should name the actual stack.",
    },
    {
      q: "What conversion event does the example optimise for?",
      a: "Qualified meetings, not raw form fills. The fictional conversion action is example_qualified_meeting.",
    },
    {
      q: "Can agents copy this file for a real vertical?",
      a: "Use it as a structural reference only. Replace every string with sourced proof for that vertical, then save as content/industries/<slug>.ts.",
    },
    {
      q: "Why is the proof anonymised?",
      a: "Named clients need written sign-off. Example fixtures stay anonymised so they can never be mistaken for a live case study.",
    },
  ],
  relatedIndustries: [],
  moneyPages: [
    {
      service: "crm-implementation",
      title: "CRM implementation for example vertical companies",
      metaTitle: "CRM for Example Vertical | The Bright Brand",
      metaDescription:
        "Example money page for CRM implementation in a fictional vertical. Dummy data for foundation template review only.",
      intro:
        "CRM implementation in this example vertical fails when stage design copies a generic SaaS funnel. The fixture explains a tender-like lifecycle with three stakeholders so the money-page template can show a vertical-specific problem statement.",
      sections: [
        {
          heading: "The problem",
          body: "Sales forecasts were fiction because deals jumped from enquiry to proposal with no stage for technical review. Marketing reported MQLs while sales reported closed-won, and neither number reconciled in the board pack.",
        },
        {
          heading: "How we do it",
          body: "We rebuild HubSpot deal stages around the real lifecycle, add company hierarchies for buyer, consultant and contractor roles, and wire qualified meeting outcomes back to Google Ads via offline conversions. The example property used for stage is dealstage_example_lifecycle.",
        },
        {
          heading: "What you get",
          body: "A documented stage model, migrated open deals, sales training notes, and a 30-day hypercare window. You provide current pipeline export, stage definitions in plain language, and access to HubSpot or Salesforce.",
        },
      ],
      proof: [
        {
          client: "Example Industrial Group",
          anonymised: true,
          situation:
            "Forecast accuracy sat under 50 percent because stage definitions did not match how deals moved.",
          built:
            "HubSpot lifecycle rebuild with company hierarchies and offline conversion upload for qualified meetings.",
          results: [
            {
              metric: "Forecast accuracy",
              before: "47%",
              after: "82%",
              window: "two quarters",
            },
            {
              metric: "Days to first reporting pack",
              after: "21",
              window: "implementation",
            },
            {
              metric: "Sales-adopted required fields",
              after: "9 of 9",
              window: "60 days",
            },
          ],
          signedOff: false,
        },
      ],
      faqs: [
        {
          q: "Is this CRM page live for prospects?",
          a: "No. It exists so the money-page template, schema and QA gates can be reviewed with full dummy data.",
        },
        {
          q: "Which CRM platforms does the example cover?",
          a: "HubSpot as the primary walkthrough, with Salesforce notes for stage and hierarchy mapping.",
        },
        {
          q: "How long does the example implementation take?",
          a: "The fixture uses a six-week build plus 30 days of hypercare. Live timelines depend on migration complexity.",
        },
        {
          q: "What do you need from the client in this example?",
          a: "Pipeline export, plain-language stage definitions, admin access, and a sales lead for weekly working sessions.",
        },
        {
          q: "How is success measured on this example page?",
          a: "Forecast accuracy, sales adoption of required fields, and qualified meetings passed back to ad platforms.",
        },
      ],
      relatedIndustries: ["example-vertical"],
    },
    {
      service: "conversion-tracking-attribution",
      title: "Conversion tracking for example vertical companies",
      metaTitle: "Attribution for Example Vertical | The Bright Brand",
      metaDescription:
        "Example money page for conversion tracking in a fictional vertical. Dummy data for foundation template review only.",
      intro:
        "Attribution in this example vertical breaks when ad platforms optimise to form fills that never become meetings. The fixture walks through a server-side and offline-conversion build so the template can show vertical-specific measurement detail.",
      sections: [
        {
          heading: "The problem",
          body: "Google Ads was trained on thank-you page views. Sales only cared about qualified meetings. The two systems disagreed by more than 60 percent week to week.",
        },
        {
          heading: "How we do it",
          body: "We deploy server-side tagging, map the CRM qualified-meeting event to a Google Ads offline conversion named example_qualified_meeting, and build a blended dashboard that shows spend, meetings and pipeline value in one view.",
        },
        {
          heading: "What you get",
          body: "A measurement plan, tag deployment, offline conversion feed, QA checklist, and a board dashboard. You provide CRM admin access, ad account access, and agreement on the qualified-meeting definition.",
        },
      ],
      proof: [
        {
          client: "Example Industrial Group",
          anonymised: true,
          situation:
            "Paid search looked efficient on form fills and expensive on sales-accepted meetings.",
          built:
            "Server-side tagging plus offline conversion upload from HubSpot qualified meetings into Google Ads.",
          results: [
            {
              metric: "Platform vs CRM variance",
              before: "63%",
              after: "9%",
              window: "60 days",
            },
            {
              metric: "Cost per qualified meeting",
              before: "£420",
              after: "£205",
              window: "60 days",
            },
            {
              metric: "Meetings attributed to paid search",
              after: "38",
              window: "first full month",
            },
          ],
          signedOff: false,
        },
      ],
      faqs: [
        {
          q: "Is this attribution page a live offer page?",
          a: "No. It is dummy content for reviewing the money-page template and JSON-LD output.",
        },
        {
          q: "What is the primary conversion in this example?",
          a: "Qualified meetings written back from the CRM, not raw form submissions.",
        },
        {
          q: "Does the example include consent mode?",
          a: "Yes. The fixture assumes consent mode v2 with server-side tagging as the delivery mechanism.",
        },
        {
          q: "Which tools appear in the example build?",
          a: "Google Ads, HubSpot, server-side Google Tag Manager, and a blended reporting view.",
        },
        {
          q: "How quickly can numbers be trusted in this fixture?",
          a: "The example uses a two-week QA window before bidding decisions rely on the new conversion action.",
        },
      ],
      relatedIndustries: ["example-vertical"],
    },
  ],
};

export default exampleIndustry;
