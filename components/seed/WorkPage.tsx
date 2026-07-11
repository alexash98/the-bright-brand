import { Footer } from "@/components/seed/Footer";
import { CaseStudiesPortfolioGrid } from "@/components/seed/CaseStudiesPortfolioGrid";
import { Header } from "@/components/seed/Header";
import { MarketingHero } from "@/components/seed/MarketingHero";
import { NAV_ITEMS } from "@/lib/nav";
import { CASE_STUDIES } from "@/lib/seed-data";

export function WorkPage(): React.ReactElement {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-gray-100 antialiased selection:bg-brand-accent selection:text-black">
      <Header navItems={NAV_ITEMS} />

      <MarketingHero>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
          Our work
        </p>
        <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tight text-brand-text-pale md:text-5xl lg:text-6xl">
          Real results for ambitious{" "}
          <span className="text-brand-accent">brands</span>.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-brand-text-pale/70 md:text-xl">
          Browse case studies across organic search, paid media, social and PR.
          Click any project to read the full story.
        </p>
      </MarketingHero>

      <main>
        <CaseStudiesPortfolioGrid caseStudies={CASE_STUDIES} />
        <Footer />
      </main>
    </div>
  );
}
