import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { Label } from "@/components/ui/Label";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Data driven marketing for brands that move fast",
  description:
    "TheBrightBrand helps growth teams fix measurement, scale paid media with conviction, and turn ad spend into provable profit.",
  alternates: {
    canonical: "/",
  },
};

const stats = [
  { value: "£5M", label: "Yearly managed ad spend" },
  { value: "12,000", label: "Campaigns launched" },
  { value: "£20M+", label: "Generated for clients" },
  { value: "37%", label: "Average sales uplift" },
];

const focusAreas = [
  {
    title: "Measurement you can trust",
    body: "We rebuild tracking so every channel, campaign, and creative ties back to revenue you can defend in a board meeting.",
  },
  {
    title: "Paid media at scale",
    body: "Twelve years of campaign data informs how we allocate budget, test creative, and move spend towards what compounds.",
  },
  {
    title: "Outcomes over activity",
    body: "We lead with the profit gap, then the channel plan. No vanity metrics, no reports that look busy and change nothing.",
  },
];

export default function HomePage(): React.ReactElement {
  return (
    <>
      <Header
        siteName={SITE_NAME}
        navLinks={[
          { label: "Approach", href: "#approach" },
          { label: "Results", href: "#results" },
          { label: "Contact", href: "#contact" },
        ]}
      />
      <main>
        <Hero
          label="Data driven marketing"
          headline="Marketing built on numbers you can act on"
          subheadline="Data driven marketing for brands that move fast. We help teams close the gap between spend and profit with measurement, media, and clear accountability."
          primaryCta={{ label: "Book a consultation", href: "#contact" }}
          secondaryCta={{ label: "See our approach", href: "#approach" }}
        />

        <section
          id="results"
          aria-labelledby="results-heading"
          className="border-b border-tbb-card bg-tbb-surface tbb-grid"
        >
          <div className="mx-auto max-w-content px-6 py-section-y lg:px-8">
            <Label>Results</Label>
            <h2
              id="results-heading"
              className="mt-6 text-3xl font-semibold capitalize tracking-tight text-tbb-text md:text-4xl"
            >
              Proof from live accounts
            </h2>
            <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <li
                  key={stat.label}
                  className="rounded-card border border-tbb-card bg-tbb-card p-6"
                >
                  <p className="text-3xl font-semibold text-tbb-green">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-normal text-tbb-text-muted">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="approach"
          aria-labelledby="approach-heading"
          className="mx-auto max-w-content px-6 py-section-y lg:px-8"
        >
          <Label>Section 01</Label>
          <div className="mt-6 max-w-2xl">
            <h2
              id="approach-heading"
              className="text-3xl font-semibold capitalize tracking-tight text-tbb-text md:text-4xl"
            >
              Could you commit two to three times your current budget tomorrow?
            </h2>
            <p className="mt-5 text-lg font-normal leading-relaxed text-tbb-text-muted">
              If not, your measurement is broken. That is the gap we close. We
              start with the outcome and the data, then build the channel plan
              around what will compound profitably.
            </p>
          </div>
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => (
              <li
                key={area.title}
                className="rounded-card border border-tbb-card bg-tbb-card p-8"
              >
                <h3 className="text-lg font-semibold text-tbb-text">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-tbb-text-muted">
                  {area.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <div id="contact">
          <CTA
            label="Consultation"
            headline="Book a 30 minute consultation"
            body="Tell us your current spend, your targets, and where reporting falls apart. We will reply with a clear next step. No obligation."
            primaryCta={{
              label: "Book a consultation",
              href: "mailto:alex@thebrightbrand.com",
            }}
          />
        </div>
      </main>
      <Footer
        siteName={SITE_NAME}
        tagline="Data driven marketing for brands that move fast. Miami and London."
        links={[
          { label: "Approach", href: "#approach" },
          { label: "Results", href: "#results" },
          { label: "Contact", href: "#contact" },
        ]}
      />
    </>
  );
}
