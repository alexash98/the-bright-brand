import Link from "next/link";

interface HeroCta {
  label: string;
  href: string;
}

interface HeroProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
}

export function Hero({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}: HeroProps): React.ReactElement {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-primary/10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
      />
      <div className="relative mx-auto max-w-content px-6 py-section-y-lg lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl"
          >
            {headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
            {subheadline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-primary/15 px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:border-primary/30"
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
