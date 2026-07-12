import dynamic from "next/dynamic";
import { AboutHeroAside } from "@/components/seed/AboutHeroAside";
import { Footer } from "@/components/seed/Footer";
import { Header } from "@/components/seed/Header";
import { MarketingHero } from "@/components/seed/MarketingHero";
import { SectionPlaceholder } from "@/components/seed/SectionPlaceholder";
import { NAV_ITEMS } from "@/lib/nav";
import {
  ABOUT_CULTURE,
  ABOUT_FEATURED_WORK,
  ABOUT_HERO_HIGHLIGHTS,
  ABOUT_WHY_DIFFERENT,
  WORK_PAGE_CASE_STUDIES,
} from "@/lib/seed-data";

const AboutWhyDifferentSection = dynamic(
  () =>
    import("@/components/seed/AboutWhyDifferentSection").then(
      (mod) => mod.AboutWhyDifferentSection,
    ),
  { loading: () => <SectionPlaceholder heightClass="h-[720px]" /> },
);

const AboutCultureSection = dynamic(
  () =>
    import("@/components/seed/AboutCultureSection").then(
      (mod) => mod.AboutCultureSection,
    ),
  { loading: () => <SectionPlaceholder heightClass="h-[640px]" /> },
);

const AboutFeaturedWorkSection = dynamic(
  () =>
    import("@/components/seed/AboutFeaturedWorkSection").then(
      (mod) => mod.AboutFeaturedWorkSection,
    ),
  { loading: () => <SectionPlaceholder heightClass="h-[720px]" /> },
);

const ABOUT_FEATURED_CASE_STUDIES = ABOUT_FEATURED_WORK.caseStudyIds
  .map((id) => WORK_PAGE_CASE_STUDIES.find((study) => study.id === id))
  .filter((study): study is NonNullable<typeof study> => study !== undefined);

export function AboutPage(): React.ReactElement {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-gray-100 antialiased selection:bg-brand-accent selection:text-black">
      <Header navItems={NAV_ITEMS} />

      <MarketingHero aside={<AboutHeroAside highlights={ABOUT_HERO_HIGHLIGHTS} />}>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
          About us
        </p>
        <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tight text-brand-text-pale md:text-5xl lg:max-w-none lg:text-6xl">
          An agency built around{" "}
          <span className="text-brand-accent">outcomes</span>, not retainers.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-brand-text-pale/70 md:text-xl lg:max-w-xl">
          We work as an extension of your team. Senior specialists across
          search, paid media, creative and PR own your growth with clear
          accountability from day one.
        </p>
      </MarketingHero>

      <main>
        <div className="page-below-fold">
          <AboutWhyDifferentSection content={ABOUT_WHY_DIFFERENT} />
          <AboutCultureSection content={ABOUT_CULTURE} />
          <AboutFeaturedWorkSection
            content={ABOUT_FEATURED_WORK}
            caseStudies={ABOUT_FEATURED_CASE_STUDIES}
          />
        </div>
        <Footer />
      </main>
    </div>
  );
}
