import { ChevronDown } from "lucide-react";
import type { Faq } from "@/content/types";

interface FaqAccordionProps {
  heading: string;
  faqs: Faq[];
  /** Editorial: wider layout, numbered questions, stronger open state. */
  variant?: "default" | "editorial";
  eyebrow?: string;
  surface?: "plain" | "muted";
}

/**
 * Native details/summary accordion: accessible without client JS hydration.
 * Matches the existing ServiceFaqsSection pattern and tokens.
 */
export function FaqAccordion({
  heading,
  faqs,
  variant = "default",
  eyebrow = "FAQs",
  surface,
}: FaqAccordionProps): React.ReactElement {
  const isEditorial = variant === "editorial";
  const muted =
    surface === "muted" || (surface === undefined && isEditorial);
  const cardBg = muted ? "bg-white" : "bg-[#f7f7f5]";

  return (
    <section
      className={
        isEditorial
          ? `relative overflow-hidden border-t border-neutral-100 px-4 py-16 md:px-8 md:py-24 ${
              muted ? "bg-[#f7f7f5]" : "bg-white"
            }`
          : `border-t border-neutral-100 px-4 py-16 md:px-8 md:py-20 ${
              muted ? "bg-[#f7f7f5]" : "bg-white"
            }`
      }
    >
      {isEditorial ? (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-accent/10 to-transparent"
          aria-hidden
        />
      ) : null}
      <div
        className={`relative mx-auto ${isEditorial ? "max-w-5xl" : "max-w-3xl"}`}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
          {eyebrow}
        </p>
        <h2
          className={`mb-10 font-semibold tracking-tight text-neutral-900 ${
            isEditorial
              ? "max-w-2xl text-3xl md:text-4xl"
              : "text-2xl md:text-3xl"
          }`}
        >
          {heading}
        </h2>
        <div className={isEditorial ? "space-y-4" : "space-y-3"}>
          {faqs.map((faq, index) => (
            <details
              key={faq.q}
              className={`group motion-safe:animate-[industry-fade-up_0.45s_ease-out_both] ${
                isEditorial
                  ? `rounded-3xl border border-neutral-200 px-6 py-5 shadow-[0_1px_0_rgba(0,0,0,0.03)] open:border-brand-accent/50 open:shadow-[0_12px_40px_rgba(0,0,0,0.06)] md:px-8 md:py-6 ${cardBg}`
                  : `rounded-3xl border border-neutral-200 px-5 py-4 open:border-brand-accent/40 ${cardBg}`
              }`}
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-neutral-900 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex min-w-0 items-start gap-4">
                  {isEditorial ? (
                    <span
                      className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 text-sm font-bold text-brand-accent-dark"
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  ) : null}
                  <span
                    className={`font-semibold ${
                      isEditorial
                        ? "text-lg leading-snug md:text-xl"
                        : "text-lg"
                    }`}
                  >
                    {faq.q}
                  </span>
                </span>
                <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-brand-accent transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p
                className={`leading-relaxed text-neutral-600 ${
                  isEditorial
                    ? "mt-4 max-w-3xl pl-12 text-base md:text-lg"
                    : "mt-3 pr-2 text-base"
                }`}
              >
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
