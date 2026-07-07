import Link from "next/link";

interface CtaButton {
  label: string;
  href: string;
}

interface CTAProps {
  headline: string;
  body: string;
  primaryCta: CtaButton;
}

export function CTA({
  headline,
  body,
  primaryCta,
}: CTAProps): React.ReactElement {
  return (
    <section
      aria-labelledby="cta-heading"
      className="border-t border-primary/10 bg-primary text-bg"
    >
      <div className="mx-auto max-w-content px-6 py-section-y lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="cta-heading"
            className="text-3xl font-semibold tracking-tight md:text-4xl"
          >
            {headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-bg/80 md:text-lg">
            {body}
          </p>
          <div className="mt-10">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-bg px-7 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
            >
              {primaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
