import dynamic from "next/dynamic";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { PlaybookCallout } from "@/components/site/PlaybookCallout";
import { SectionPlaceholder } from "@/components/site/SectionPlaceholder";
import {
  CLIENT_LOGOS,
  HERO_CAROUSEL_CASE_STUDIES,
  ENGAGEMENT_STEPS,
  MARQUEE_PLATFORM_LOGOS,
  SERVICES,
  TESTIMONIALS,
} from "@/lib/site-data";
import { SHOW_PLATFORM_LOGO_MARQUEE } from "@/lib/feature-flags";
import { NAV_ITEMS } from "@/lib/nav";

const Services = dynamic(
  () => import("@/components/site/Services").then((mod) => mod.Services),
  { loading: () => <SectionPlaceholder heightClass="h-[900px]" /> },
);

const Playbook = dynamic(
  () =>
    import("@/components/site/Playbook").then((mod) => mod.Playbook),
  { loading: () => <SectionPlaceholder heightClass="h-[520px]" /> },
);

const StatsSection = dynamic(
  () =>
    import("@/components/site/StatsSection").then((mod) => mod.StatsSection),
  { loading: () => <SectionPlaceholder heightClass="h-[640px]" /> },
);

const HowWeWork = dynamic(
  () =>
    import("@/components/site/HowWeWork").then((mod) => mod.HowWeWork),
  { loading: () => <SectionPlaceholder heightClass="h-[560px]" /> },
);

const Testimonials = dynamic(
  () =>
    import("@/components/site/Testimonials").then((mod) => mod.Testimonials),
  { loading: () => <SectionPlaceholder heightClass="h-[360px]" /> },
);

const ClientLogoMarquee = dynamic(
  () =>
    import("@/components/site/ClientLogoMarquee").then(
      (mod) => mod.ClientLogoMarquee,
    ),
  { loading: () => <SectionPlaceholder heightClass="h-[88px]" /> },
);

const EnquiryForm = dynamic(
  () =>
    import("@/components/site/EnquiryForm").then((mod) => mod.EnquiryForm),
  { loading: () => <SectionPlaceholder heightClass="h-[640px]" /> },
);

const ROTATING_WORDS = [
  "paid social",
  "paid search",
  "organic search",
  "paid media",
  "revenue growth",
  "lead generation",
  "campaign ROI",
  "conversion data",
  "growth metrics",
];

export function HomePage(): React.ReactElement {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-gray-100 antialiased selection:bg-brand-accent selection:text-black">
      <Header navItems={NAV_ITEMS} />
      <main>
        <Hero
          rotatingWords={ROTATING_WORDS}
          description="We work as an extension of your team, not a separate agency layer. No middlemen or hand-offs, just direct ownership of your growth across search, paid media and creative, with accountability from day one."
          caseStudies={HERO_CAROUSEL_CASE_STUDIES}
          clientLogos={CLIENT_LOGOS}
        />
        <div className="bg-white text-neutral-900">
          <div className="homepage-below-fold page-below-fold">
            <Services services={SERVICES} />
            <Playbook />
            <div className="relative z-10 -mt-12 -mb-12 px-4 md:px-8">
              <PlaybookCallout />
            </div>
            <StatsSection caseStudies={HERO_CAROUSEL_CASE_STUDIES} />
            <Testimonials testimonials={TESTIMONIALS} />
            <HowWeWork steps={ENGAGEMENT_STEPS} />
            {SHOW_PLATFORM_LOGO_MARQUEE ? (
              <ClientLogoMarquee logos={MARQUEE_PLATFORM_LOGOS} />
            ) : null}
            <EnquiryForm tone="spotlight" formLayout="contact" />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
