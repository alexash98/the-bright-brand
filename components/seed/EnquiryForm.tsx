'use client';

import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { EnquiryFormFields } from "@/components/seed/EnquiryFormFields";
import { useEnquiryForm } from "@/components/seed/useEnquiryForm";
import { useScrollToSection } from "@/components/seed/SmoothScrollProvider";

const FEATURE_POINTS = [
  "Pricing based on outcomes",
  "Flexible agreements",
  "Agile, bespoke solutions",
  "Long-term partnerships",
];

const DEFAULT_FIELD_CLASS =
  "rounded-lg border-0 bg-white px-4 text-sm text-neutral-900 placeholder:text-neutral-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/15";

interface EnquiryFormProps {
  variant?: "default" | "standalone";
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  variant = "default",
}) => {
  const scrollToSection = useScrollToSection();
  const {
    nameInputRef,
    formData,
    loading,
    success,
    error,
    handleChange,
    handleSubmit,
    resetForm,
    focusNameField,
  } = useEnquiryForm();

  return (
    <section id="enquire" className="relative bg-white py-20 sm:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="text-left lg:sticky lg:top-24">
            <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Tell us where you want to go.
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-neutral-600 md:text-lg">
              Scaling, restructuring, or fixing what is not working yet. We
              will talk through your goals and your numbers honestly. No pitch
              deck and no pressure.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={focusNameField}
                className="inline-flex h-11 items-center justify-center rounded-full bg-brand-accent px-6 text-sm font-bold text-brand-bg-darker shadow-md shadow-brand-accent/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-accent-hover"
              >
                Arrange a 15-minute intro
              </button>
              {variant === "standalone" ? (
                <Link
                  href="/#work"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 text-sm font-bold text-neutral-900 transition-all duration-200 hover:border-neutral-400 hover:bg-neutral-50"
                >
                  See our work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => scrollToSection("work")}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 text-sm font-bold text-neutral-900 transition-all duration-200 hover:border-neutral-400 hover:bg-neutral-50"
                >
                  See our work
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5">
              {FEATURE_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span className="text-sm font-medium leading-snug text-neutral-700">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-[#f7f7f5] p-6 md:p-8 lg:p-10">
            <EnquiryFormFields
              formData={formData}
              loading={loading}
              success={success}
              error={error}
              nameInputRef={nameInputRef}
              fieldClassName={DEFAULT_FIELD_CLASS}
              onChange={handleChange}
              onSubmit={handleSubmit}
              onReset={resetForm}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
