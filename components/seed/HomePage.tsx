import dynamic from "next/dynamic";
import { Footer } from "@/components/seed/Footer";
import { Header } from "@/components/seed/Header";
import { Hero } from "@/components/seed/Hero";
import { PlaybookCallout } from "@/components/seed/PlaybookCallout";
import { ClientLogoMarquee } from "@/components/seed/ClientLogoMarquee";
import { Services } from "@/components/seed/Services";
import {
  CLIENT_LOGOS,
  HERO_CAROUSEL_CASE_STUDIES,
  ENGAGEMENT_STEPS,
  MARQUEE_PLATFORM_LOGOS,
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
  "paid social",
  "paid search",
  "organic search",
  "paid media",
  "digital PR",
  "revenue growth",
  "lead generation",
  "campaign ROI",
  "conversion data",
  "growth metrics",
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
        description="We work as an extension of your team, not a separate agency layer. Senior specialists own your growth across search, paid media and creative, with clear accountability from day one."
        caseStudies={HERO_CAROUSEL_CASE_STUDIES}
        clientLogos={CLIENT_LOGOS}
      />
      <div className="bg-white text-neutral-900">
        <Services services={SERVICES} />
        <div className="homepage-below-fold">
          <Playbook rows={PLAYBOOK} />
          <div className="relative z-10 -mt-12 -mb-12 px-4 md:px-6">
            <PlaybookCallout />
          </div>
          <StatsSection caseStudies={HERO_CAROUSEL_CASE_STUDIES} />
          <Testimonials testimonials={TESTIMONIALS} />
          <HowWeWork steps={ENGAGEMENT_STEPS} />
          <ClientLogoMarquee logos={MARQUEE_PLATFORM_LOGOS} />
          <EnquiryForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}
