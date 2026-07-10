import dynamic from "next/dynamic";
import { Footer } from "@/components/seed/Footer";
import { Header } from "@/components/seed/Header";
import { MarketingHero } from "@/components/seed/MarketingHero";
import { Services } from "@/components/seed/Services";
import { NAV_ITEMS } from "@/lib/nav";
import { HERO_CAROUSEL_CASE_STUDIES, SERVICES } from "@/lib/seed-data";

const StatsSection = dynamic(
  () =>
    import("@/components/seed/StatsSection").then((mod) => mod.StatsSection),
  { loading: () => <SectionPlaceholder heightClass="h-[960px]" /> },
);

const EnquiryForm = dynamic(
  () =>
    import("@/components/seed/EnquiryForm").then((mod) => mod.EnquiryForm),
  { loading: () => <SectionPlaceholder heightClass="h-[640px]" /> },
);

function SectionPlaceholder({
  heightClass,
}: {
  heightClass: string;
}): React.ReactElement {
  return (
    <div
      aria-hidden="true"
      className={`${heightClass} w-full animate-pulse bg-neutral-100`}
    />
  );
}

export function ServicesPage(): React.ReactElement {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-gray-100 antialiased selection:bg-brand-accent selection:text-black">
      <Header navItems={NAV_ITEMS} />

      <MarketingHero>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            What we do
          </p>
          <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tight text-brand-text-pale md:text-5xl lg:text-6xl">
            Performance marketing services built around{" "}
            <span className="text-brand-accent">your funnel</span>.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-brand-text-pale/70 md:text-xl">
            Senior specialists across search, paid media, creative and PR work as an extension of your team, with clear accountability from day one.
          </p>
      </MarketingHero>

      <main className="bg-white text-neutral-900">
        <Services services={SERVICES} variant="standalone" />
        <StatsSection
          caseStudies={HERO_CAROUSEL_CASE_STUDIES}
          theme="light"
          bentoLayout="featured"
        />
        <EnquiryForm />
        <Footer />
      </main>
    </div>
  );
}
