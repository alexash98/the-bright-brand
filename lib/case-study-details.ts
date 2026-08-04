import { CaseStudyDetail } from "@/lib/site-types";

/**
 * Case study detail pages (anywhere, formx, brittontime, canopy, enexus,
 * menzies) were retired (Aug 2026). /case-studies/{slug} 301s to
 * /case-studies in next.config.ts. Client logos and quotes on the
 * /case-studies index (lib/site-data.ts) are unaffected.
 */
export const CASE_STUDY_DETAILS: CaseStudyDetail[] = [];

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
