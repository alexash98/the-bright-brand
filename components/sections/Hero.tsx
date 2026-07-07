import Link from "next/link";
import { Label } from "@/components/ui/Label";

interface HeroCta {
  label: string;
  href: string;
}

interface HeroProps {
  label: string;
  headline: string;
  subheadline: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
}

export function Hero({
  label,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}: HeroProps): React.ReactElement {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-tbb-card bg-tbb-bg"
    >
      <div aria-hidden="true" className="tbb-glow" />
      <div className="relative z-10 mx-auto max-w-content px-6 py-section-y-lg lg:px-8">
        <div className="max-w-2xl">
          <Label>{label}</Label>
          <h1
            id="hero-heading"
            className="mt-6 text-4xl font-semibold capitalize leading-tight tracking-tight text-tbb-text md:text-5xl lg:text-6xl"
          >
            {headline}
          </h1>
          <p className="mt-6 text-lg font-normal leading-relaxed text-tbb-text-muted md:text-xl">
            {subheadline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-tbb-text px-7 py-3.5 text-sm font-semibold text-tbb-bg transition-opacity hover:opacity-90"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-tbb-card px-7 py-3.5 text-sm font-semibold text-tbb-text transition-colors hover:border-tbb-text-muted"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
