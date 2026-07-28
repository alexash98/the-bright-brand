import { RelatedLinks } from "@/components/site/seo/RelatedLinks";
import { resolveRelatedPillars } from "@/content/taxonomy";

interface RelatedServicesProps {
  tags?: string[];
}

/**
 * Blog link layer into /services and /industries pillars via content/taxonomy.ts.
 */
export function RelatedServices({
  tags = [],
}: RelatedServicesProps): React.ReactElement | null {
  const links = resolveRelatedPillars(tags);
  if (links.length === 0) return null;

  return (
    <RelatedLinks
      eyebrow="Services"
      heading="Related services and industries"
      links={links}
    />
  );
}
