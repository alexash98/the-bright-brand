import React from "react";
import { ChevronDown } from "lucide-react";
import { ServiceFaq } from "@/lib/seed-types";

interface ServiceFaqsSectionProps {
  heading: string;
  faqs: ServiceFaq[];
}

export function ServiceFaqsSection({
  heading,
  faqs,
}: ServiceFaqsSectionProps): React.ReactElement {
  return (
    <section className="px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
          FAQs
        </p>
        <h2 className="mb-10 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
          {heading}
        </h2>

        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-neutral-900 marker:content-none [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-4 pr-2 text-base leading-relaxed text-neutral-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
