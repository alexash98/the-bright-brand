import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MarketingHero } from "@/components/site/MarketingHero";
import { SectionPlaceholder } from "@/components/site/SectionPlaceholder";
import { NAV_ITEMS } from "@/lib/nav";
import { TESTIMONIALS, WORK_PAGE_CASE_STUDIES } from "@/lib/site-data";

const CaseStudiesPortfolioGrid = dynamic(
  () =>
    import("@/components/site/CaseStudiesPortfolioGrid").then(
      (mod) => mod.CaseStudiesPortfolioGrid,
    ),
  { loading: () => <SectionPlaceholder heightClass="h-[1200px]" /> },
);

const Testimonials = dynamic(
  () =>
    import("@/components/site/Testimonials").then((mod) => mod.Testimonials),
  { loading: () => <SectionPlaceholder heightClass="h-[360px]" /> },
);

export function WorkPage(): React.ReactElement {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-gray-100 antialiased selection:bg-brand-accent selection:text-black">
      <Header navItems={NAV_ITEMS} />

      <MarketingHero>
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-text-pale/70 transition-colors hover:text-brand-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Return to home
        </Link>
        <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tight text-brand-text-pale md:text-5xl lg:text-6xl">
          Growth you can{" "}
          <span className="text-brand-accent">measure</span>.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-brand-text-pale/70 md:text-xl">
          Outcomes from the brands we partner with across search, paid media,
          social and PR.
        </p>
      </MarketingHero>

      <main>
        <div className="page-below-fold bg-white text-neutral-900">
          <CaseStudiesPortfolioGrid caseStudies={WORK_PAGE_CASE_STUDIES} />
          <Testimonials testimonials={TESTIMONIALS} />
        </div>
        <Footer />
      </main>
    </div>
  );
}
