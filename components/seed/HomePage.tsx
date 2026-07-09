import dynamic from "next/dynamic";
import { Footer } from "@/components/seed/Footer";
import { Header } from "@/components/seed/Header";
import { Hero } from "@/components/seed/Hero";
import { Services } from "@/components/seed/Services";
import {
  CLIENT_LOGOS,
  HERO_CAROUSEL_CASE_STUDIES,
  HOW_WE_WORK,
  PLAYBOOK,
  SERVICES,
  TESTIMONIALS,
} from "@/lib/seed-data";

const Playbook = dynamic(
  () =>
    import("@/components/seed/Playbook").then((mod) => mod.Playbook),
  { loading: () => <SectionPlaceholder heightClass="h-[520px]" /> },
);

const StatsSection = dynamic(
  () =>
    import("@/components/seed/StatsSection").then((mod) => mod.StatsSection),
  { loading: () => <SectionPlaceholder heightClass="h-[640px]" /> },
);

const HowWeWork = dynamic(
  () =>
    import("@/components/seed/HowWeWork").then((mod) => mod.HowWeWork),
  { loading: () => <SectionPlaceholder heightClass="h-[560px]" /> },
);

const Testimonials = dynamic(
  () =>
    import("@/components/seed/Testimonials").then((mod) => mod.Testimonials),
  { loading: () => <SectionPlaceholder heightClass="h-[360px]" /> },
);

const EnquiryForm = dynamic(
  () =>
    import("@/components/seed/EnquiryForm").then((mod) => mod.EnquiryForm),
  { loading: () => <SectionPlaceholder heightClass="h-[640px]" /> },
);

const NAV_ITEMS = [
  { label: "Services", url: "/services" },
  { label: "Our Work", url: "/work" },
  { label: "Team", url: "/about" },
  { label: "How We Work", url: "/how-we-work" },
  { label: "ROI Calculator", url: "/calculator" },
];

const ROTATING_WORDS = [
  "Ambitious",
  "Proactive",
  "Relentless",
  "Growth-Obsessed",
  "Results-Driven",
  "Fearless",
  "Accountable",
  "Entrepreneurial",
  "Curious",
];

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

export function HomePage(): React.ReactElement {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-gray-100 antialiased selection:bg-brand-accent selection:text-black">
      <Header navItems={NAV_ITEMS} />
      <Hero
        rotatingWords={ROTATING_WORDS}
        description="Powered by our progressive model, we deliver exceptional growth by giving you the most proactive, growth-minded marketing team you'll ever work with."
        caseStudies={HERO_CAROUSEL_CASE_STUDIES}
        clientLogos={CLIENT_LOGOS}
      />
      <div className="bg-white text-neutral-900">
        <Services services={SERVICES} />
        <div className="homepage-below-fold">
          <Playbook rows={PLAYBOOK} />
          <StatsSection caseStudies={HERO_CAROUSEL_CASE_STUDIES} />
          <Testimonials testimonials={TESTIMONIALS} />
          <HowWeWork items={HOW_WE_WORK} />
          <EnquiryForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}
