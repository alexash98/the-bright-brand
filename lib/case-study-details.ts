import { CaseStudyDetail } from "@/lib/seed-types";

export const CASE_STUDY_DETAILS: CaseStudyDetail[] = [
  {
    slug: "anywhere",
    carouselId: "anywhere-travel",
    clientName: "Anywhere.com",
    clientLogo: "anywhere.png",
    clientLogoInvert: true,
    metaDescription:
      "How The Bright Brand saved Anywhere.com $300K in wasted Google Ads spend, halved Meta CPA, and helped grow revenue from $6M to $10M in one year.",
    heroEyebrow: "Case study",
    heroTitle: "How we saved over $300,000",
    heroAccent: "in ad spend",
    heroIntro:
      "We matched their founder at the data level, consolidated every channel, and put budget back where it actually drove results ahead of peak season.",
    heroStats: [
      { stat: "$300K", label: "Wasted ad spend recovered" },
      { stat: "-50%", label: "Meta cost per acquisition" },
      { stat: "+67%", label: "Revenue growth year on year" },
      { stat: "$10M", label: "Revenue this year, up from $6M" },
    ],
    imageUrl: "/carousel/anywhere-travel.webp",
    category: "Paid",
    bodyEyebrow: "Overview",
    bodyTitle: "Built on the numbers",
    bodyDescription:
      "How we partnered with Anywhere.com to consolidate their marketing data, recover wasted spend, and scale revenue profitably across Meta, Google, email and affiliate.",
    body: [
      "Anywhere.com is a travel planning company that connects travellers with local insiders across dozens of countries worldwide. They handle everything from itinerary planning to bookings and on-trip support, specialising in destinations across the Americas, Europe, Africa, Asia and Oceania. We manage their digital marketing across Facebook, email marketing, Google Ads and Instagram, and have been building out their global affiliate strategy while supporting international expansion, particularly into Mexico.",
      "We're working closely with Anthony Landis, one of the founders, who had already built a highly advanced attribution system. His main frustration with previous agencies was their inability to align with his data or properly understand what was required to scale the business. From the outset, it's been genuinely refreshing to work with someone so deeply embedded in the numbers. He has Metabase connected to virtually every data point imaginable and can spin up new tracking environments on demand, a level of sophistication easily beyond what we see in 99 percent of the businesses we work with.",
      "The real issue was not access to platforms like Google Ads or Meta Ads, but the lack of agencies able to connect the dots outside those platforms. Anthony specialises in analysing data across the entire ecosystem, not just within ad dashboards. That is where previous agencies fell short.",
      "By matching him at that data level, we've been able to amalgamate all sources and properly understand the full paid customer journey. When we dug into the numbers, we uncovered a £300K hole in wasted spend from their previous Google Ads agency over several years, identified by pulling data directly from multiple platforms and consolidating it to get a clear view of their core demographics. From there, we stripped out inefficient targeting and re-optimised their campaigns just ahead of peak season, putting the budget back where it actually drove results.",
      "We've saved them $300K in wasted ad spend, now put to much better use driving top line revenue. On Meta, we halved their cost per acquisition, making campaigns significantly more efficient and allowing them to scale profitably. The business has grown from $6 million in revenue last year to $10 million this year, a 67% increase year on year, putting them in a strong position as they continue to expand into new markets.",
    ],
    visualSection: {
      eyebrow: "Performance snapshot",
      title: "Growth in numbers",
      description:
        "Revenue and acquisition efficiency after consolidating data, removing wasted spend, and re-optimising ahead of peak season.",
      revenueTrend: [
        { label: "Last year", value: 6, displayValue: "$6M" },
        { label: "This year", value: 10, displayValue: "$10M" },
      ],
      comparisons: [
        {
          title: "Meta cost per acquisition",
          beforeLabel: "Before",
          afterLabel: "After",
          beforeValue: "Higher CPA",
          afterValue: "Lower CPA",
          changeLabel: "-50%",
          beforeRatio: 1,
          afterRatio: 0.5,
        },
        {
          title: "Wasted ad spend recovered",
          beforeLabel: "Previous spend",
          afterLabel: "Reallocated",
          beforeValue: "Inefficient",
          afterValue: "$300K saved",
          changeLabel: "Redirected to revenue",
          beforeRatio: 1,
          afterRatio: 0.35,
        },
      ],
    },
  },
];

const DETAIL_BY_SLUG = new Map(
  CASE_STUDY_DETAILS.map((detail) => [detail.slug, detail]),
);

const DETAIL_BY_CAROUSEL_ID = new Map(
  CASE_STUDY_DETAILS.map((detail) => [detail.carouselId, detail]),
);

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDY_DETAILS.map((detail) => detail.slug);
}

export function getCaseStudyDetailBySlug(
  slug: string,
): CaseStudyDetail | undefined {
  return DETAIL_BY_SLUG.get(slug);
}

export function getCaseStudyDetailSlug(
  carouselId: string,
): string | undefined {
  return DETAIL_BY_CAROUSEL_ID.get(carouselId)?.slug;
}
