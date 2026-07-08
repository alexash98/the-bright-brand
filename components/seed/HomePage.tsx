"use client";

import { CaseStudies } from "@/components/seed/CaseStudies";
import { EnquiryForm } from "@/components/seed/EnquiryForm";
import { Footer } from "@/components/seed/Footer";
import { GrowthCalculator } from "@/components/seed/GrowthCalculator";
import { Header } from "@/components/seed/Header";
import { Hero } from "@/components/seed/Hero";
import { HowWeWork } from "@/components/seed/HowWeWork";
import { LogoMarquee } from "@/components/seed/LogoMarquee";
import { Playbook } from "@/components/seed/Playbook";
import { Services } from "@/components/seed/Services";
import { StatsSection } from "@/components/seed/StatsSection";
import { TeamSection } from "@/components/seed/TeamSection";
import { Testimonials } from "@/components/seed/Testimonials";
import {
  CASE_STUDIES,
  HOW_WE_WORK,
  PLATFORM_LOGOS,
  PLAYBOOK,
  SERVICES,
  TEAM,
  TESTIMONIALS,
} from "@/lib/seed-data";

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

export function HomePage(): React.ReactElement {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-gray-100 antialiased selection:bg-brand-accent selection:text-black">
      <Header navItems={NAV_ITEMS} />
      <Hero
        rotatingWords={ROTATING_WORDS}
        description="Powered by our progressive model, we deliver exceptional growth by giving you the most proactive, growth-minded marketing team you'll ever work with."
      />
      <Services services={SERVICES} />
      <StatsSection />
      <Testimonials testimonials={TESTIMONIALS} />
      <CaseStudies items={CASE_STUDIES} />
      <GrowthCalculator />
      <Playbook rows={PLAYBOOK} />
      <LogoMarquee
        items={PLATFORM_LOGOS}
        title="We integrate with every channel that matters"
        reverse
      />
      <TeamSection members={TEAM} />
      <HowWeWork items={HOW_WE_WORK} />
      <EnquiryForm />
      <Footer />
    </div>
  );
}
