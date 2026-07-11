import dynamic from "next/dynamic";
import { ContactTestimonialsSection } from "@/components/seed/ContactTestimonialsSection";
import { Footer } from "@/components/seed/Footer";
import { Header } from "@/components/seed/Header";
import { MarketingHero } from "@/components/seed/MarketingHero";
import { NAV_ITEMS } from "@/lib/nav";

const ContactEnquirySection = dynamic(
  () =>
    import("@/components/seed/ContactEnquirySection").then(
      (mod) => mod.ContactEnquirySection,
    ),
  { loading: () => <SectionPlaceholder heightClass="h-[560px]" /> },
);

function SectionPlaceholder({
  heightClass,
}: {
  heightClass: string;
}): React.ReactElement {
  return (
    <div
      aria-hidden="true"
      className={`${heightClass} w-full animate-pulse bg-white`}
    />
  );
}

export function ContactPage(): React.ReactElement {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-gray-100 antialiased selection:bg-brand-accent selection:text-black">
      <Header navItems={NAV_ITEMS} />

      <MarketingHero>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
          Contact
        </p>
        <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tight text-brand-text-pale md:text-5xl lg:text-6xl">
          Tell us where <span className="text-brand-accent">you</span> want to
          go.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-brand-text-pale/85 md:text-xl xl:text-lg">
          No pitch deck and no pressure. Share a few details and we will
          respond with an honest view of what comes next.
        </p>
      </MarketingHero>

      <main className="bg-white">
        <ContactEnquirySection />
        <ContactTestimonialsSection />
        <Footer />
      </main>
    </div>
  );
}
