import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Search-focused brand websites",
  description:
    "The Bright Brand builds fast, findable websites with clear content, solid technical SEO, and pages that work for people and search engines.",
  alternates: {
    canonical: "/",
  },
};

const focusAreas = [
  {
    title: "Technical foundations",
    body: "Clean URLs, server-rendered pages, structured data, and metadata that search engines can read without guesswork.",
  },
  {
    title: "Useful content",
    body: "Copy written in plain British English, with a clear answer first and headings that match how people actually search.",
  },
  {
    title: "Measured performance",
    body: "Fast loading, stable layouts, and accessible pages that hold up on mobile and desktop.",
  },
];

export default function HomePage(): React.ReactElement {
  return (
    <>
      <Header
        siteName={SITE_NAME}
        navLinks={[
          { label: "Approach", href: "#approach" },
          { label: "Contact", href: "#contact" },
        ]}
      />
      <main>
        <Hero
          eyebrow="Brand and search"
          headline="Websites that show up clearly and read well"
          subheadline="The Bright Brand helps businesses build a visible online presence with search-focused sites, useful content, and technical work that lasts."
          primaryCta={{ label: "Start a conversation", href: "#contact" }}
          secondaryCta={{ label: "See our approach", href: "#approach" }}
        />

        <section
          id="approach"
          aria-labelledby="approach-heading"
          className="mx-auto max-w-content px-6 py-section-y lg:px-8"
        >
          <div className="max-w-2xl">
            <h2
              id="approach-heading"
              className="text-3xl font-semibold tracking-tight text-primary md:text-4xl"
            >
              Built for findability from the first page
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              We treat search, content, and performance as part of the product,
              not a late add-on. Each page is planned to answer a real question
              and load quickly on any connection.
            </p>
          </div>
          <ul className="mt-14 grid gap-8 md:grid-cols-3">
            {focusAreas.map((area) => (
              <li
                key={area.title}
                className="rounded-2xl border border-primary/10 bg-bg p-8"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {area.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <div id="contact">
          <CTA
            headline="Ready to plan your site properly?"
            body="Tell us what you offer, who you need to reach, and where you are starting from. We will reply with a clear next step, not a generic pitch deck."
            primaryCta={{
              label: "Email the team",
              href: "mailto:hello@PLACEHOLDER-DOMAIN.com",
            }}
          />
        </div>
      </main>
      <Footer
        siteName={SITE_NAME}
        tagline="Search-focused websites and content for brands that want to be found for the right reasons."
        links={[
          { label: "Approach", href: "#approach" },
          { label: "Contact", href: "#contact" },
        ]}
      />
    </>
  );
}
