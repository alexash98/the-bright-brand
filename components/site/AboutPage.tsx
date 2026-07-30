import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AboutHeroAside } from "@/components/site/AboutHeroAside";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MarketingHero } from "@/components/site/MarketingHero";
import { SectionPlaceholder } from "@/components/site/SectionPlaceholder";
import { NAV_ITEMS } from "@/lib/nav";
import {
  ABOUT_CULTURE,
  ABOUT_FEATURED_WORK,
  ABOUT_HERO_HIGHLIGHTS,
  ABOUT_WHY_DIFFERENT,
  TESTIMONIALS,
  WORK_PAGE_CASE_STUDIES,
} from "@/lib/site-data";

const AboutWhyDifferentSection = dynamic(
  () =>
    import("@/components/site/AboutWhyDifferentSection").then(
      (mod) => mod.AboutWhyDifferentSection,
    ),
  { loading: () => <SectionPlaceholder heightClass="h-[720px]" /> },
);

const AboutCultureSection = dynamic(
  () =>
    import("@/components/site/AboutCultureSection").then(
      (mod) => mod.AboutCultureSection,
    ),
  { loading: () => <SectionPlaceholder heightClass="h-[640px]" /> },
);

const AboutFeaturedWorkSection = dynamic(
  () =>
    import("@/components/site/AboutFeaturedWorkSection").then(
      (mod) => mod.AboutFeaturedWorkSection,
    ),
  { loading: () => <SectionPlaceholder heightClass="h-[720px]" /> },
);

const Testimonials = dynamic(
  () =>
    import("@/components/site/Testimonials").then((mod) => mod.Testimonials),
  { loading: () => <SectionPlaceholder heightClass="h-[360px]" /> },
);

const ABOUT_FEATURED_CASE_STUDIES = ABOUT_FEATURED_WORK.caseStudyIds
  .map((id) => WORK_PAGE_CASE_STUDIES.find((study) => study.id === id))
  .filter((study): study is NonNullable<typeof study> => study !== undefined);

export function AboutPage(): React.ReactElement {
  return (
    <div className="relative min-h-screen overflow-x-clip text-gray-100 antialiased selection:bg-brand-accent selection:text-black">
      <Header navItems={NAV_ITEMS} />

      <MarketingHero aside={<AboutHeroAside highlights={ABOUT_HERO_HIGHLIGHTS} />}>
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-text-pale/70 transition-colors hover:text-brand-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Return to home
        </Link>
        <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tight text-brand-text-pale md:text-5xl lg:max-w-none lg:text-6xl">
          An agency built around{" "}
          <span className="text-brand-accent">outcomes</span>, not retainers.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-brand-text-pale/70 md:text-xl lg:max-w-xl">
          We work as an extension of your team. Specialists across search,
          paid media, creative and PR own your growth with clear accountability
          from day one.
        </p>
      </MarketingHero>

      <main>
        <div className="page-below-fold bg-white text-neutral-900">
          <AboutWhyDifferentSection content={ABOUT_WHY_DIFFERENT} />
          <AboutCultureSection content={ABOUT_CULTURE} />
          <AboutFeaturedWorkSection
            content={ABOUT_FEATURED_WORK}
            caseStudies={ABOUT_FEATURED_CASE_STUDIES}
          />
          <Testimonials testimonials={TESTIMONIALS} />
        </div>
        <Footer />
      </main>
    </div>
  );
}
