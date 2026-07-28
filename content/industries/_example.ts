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
  moneyPages: [],
};

export default exampleIndustry;
