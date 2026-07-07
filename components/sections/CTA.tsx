import Link from "next/link";
import { Label } from "@/components/ui/Label";

interface CtaButton {
  label: string;
  href: string;
}

interface CTAProps {
  label: string;
  headline: string;
  body: string;
  primaryCta: CtaButton;
}

export function CTA({
  label,
  headline,
  body,
  primaryCta,
}: CTAProps): React.ReactElement {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden border-t border-tbb-card bg-tbb-surface tbb-grid"
    >
      <div aria-hidden="true" className="tbb-glow" />
      <div className="relative z-10 mx-auto max-w-content px-6 py-section-y lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Label>{label}</Label>
          </div>
          <h2
            id="cta-heading"
            className="mt-6 text-3xl font-semibold capitalize tracking-tight text-tbb-text md:text-4xl"
          >
            {headline}
          </h2>
          <p className="mt-5 text-base font-normal leading-relaxed text-tbb-text-muted md:text-lg">
            {body}
          </p>
          <div className="mt-10">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-tbb-text px-7 py-3.5 text-sm font-semibold text-tbb-bg transition-opacity hover:opacity-90"
            >
              {primaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
