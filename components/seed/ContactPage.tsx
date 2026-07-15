import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ContactTestimonialsSection } from "@/components/seed/ContactTestimonialsSection";
import { Footer } from "@/components/seed/Footer";
import { Header } from "@/components/seed/Header";
import { MarketingHero } from "@/components/seed/MarketingHero";
import { NAV_ITEMS } from "@/lib/nav";

const EnquiryForm = dynamic(
  () =>
    import("@/components/seed/EnquiryForm").then((mod) => mod.EnquiryForm),
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
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-text-pale/70 transition-colors hover:text-brand-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Return to home
        </Link>
        <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tight text-brand-text-pale md:text-5xl lg:text-6xl">
          Tell us where <span className="text-brand-accent">you</span> want to
          go.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-brand-text-pale/70 md:text-xl">
          No pitch deck and no pressure. Share a few details and we will
          respond with an honest view of what comes next.
        </p>
      </MarketingHero>

      <main className="bg-white">
        <EnquiryForm showHeading={false} formLayout="contact" />
        <ContactTestimonialsSection />
        <Footer />
      </main>
    </div>
  );
}
