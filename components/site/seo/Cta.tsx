import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaProps {
  heading?: string;
  body?: string;
  buttonLabel?: string;
  href?: string;
}

export function Cta({
  heading = "Tell us about the pipeline you want to build",
  body = "Share the vertical, the stack, and where enquiries are leaking. We will tell you plainly whether we are the right team for it.",
  buttonLabel = "Enquire now",
  href = "/contact",
}: CtaProps): React.ReactElement {
  return (
    <section
      data-seo-boilerplate
      className="relative overflow-hidden bg-brand-bg-darker px-4 py-16 md:px-8 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-brand-accent/10 blur-3xl"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl motion-safe:animate-[industry-fade-up_0.55s_ease-out_both]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Next step
          </p>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-brand-text-pale md:text-4xl">
            {heading}
          </h2>
          <p className="text-base leading-relaxed text-brand-text-pale/70 md:text-lg">
            {body}
          </p>
        </div>
        <Link
          href={href}
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-brand-accent px-7 py-3 text-sm font-semibold text-black transition-colors hover:bg-brand-accent-hover"
        >
          {buttonLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
