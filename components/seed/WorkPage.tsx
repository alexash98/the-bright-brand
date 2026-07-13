import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/seed/Footer";
import { Header } from "@/components/seed/Header";
import { MarketingHero } from "@/components/seed/MarketingHero";
import { SectionPlaceholder } from "@/components/seed/SectionPlaceholder";
import { NAV_ITEMS } from "@/lib/nav";
import { WORK_PAGE_CASE_STUDIES } from "@/lib/seed-data";

const CaseStudiesPortfolioGrid = dynamic(
  () =>
    import("@/components/seed/CaseStudiesPortfolioGrid").then(
      (mod) => mod.CaseStudiesPortfolioGrid,
    ),
  { loading: () => <SectionPlaceholder heightClass="h-[1200px]" /> },
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
        <div className="page-below-fold">
          <CaseStudiesPortfolioGrid caseStudies={WORK_PAGE_CASE_STUDIES} />
        </div>
        <Footer />
      </main>
    </div>
  );
}
