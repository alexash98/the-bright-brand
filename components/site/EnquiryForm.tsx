'use client';

import React from "react";
import { EnquiryFormFields } from "@/components/site/EnquiryFormFields";
import { EnquiryHostBadge } from "@/components/site/EnquiryHostBadge";
import { SectionIntro } from "@/components/site/SectionIntro";
import { useEnquiryForm } from "@/components/site/useEnquiryForm";

const CONTACT_FIELD_CLASS =
  "rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 transition-all duration-200 focus:border-brand-accent/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/15";

interface EnquiryFormProps {
  /**
   * When false, skip the left-column intro (used on /contact where the hero
   * already carries the page heading). Form card + host badge still show.
   */
  showHeading?: boolean;
  /** @deprecated Always renders the contact field layout. Kept for call-site compat. */
  formLayout?: "stacked" | "contact";
  /**
   * `spotlight` = two-column Enquire Now treatment (default everywhere).
   * `muted` kept as an alias for spotlight.
   * `white` kept for compat; also maps to spotlight.
   */
  tone?: "white" | "muted" | "spotlight";
}

function FormCard({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-[#ffffff] shadow-[0_24px_80px_rgba(0,0,0,0.07)]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-accent via-brand-accent/70 to-transparent"
      />
      <div className="px-6 py-8 md:px-10 md:py-12 lg:px-12 lg:py-14">
        {children}
      </div>
    </div>
  );
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  showHeading = true,
}) => {
  const {
    nameInputRef,
    formData,
    loading,
    success,
    error,
    handleChange,
    handleSubmit,
    resetForm,
  } = useEnquiryForm();

  const fields = (
    <EnquiryFormFields
      formData={formData}
      loading={loading}
      success={success}
      error={error}
      nameInputRef={nameInputRef}
      fieldClassName={CONTACT_FIELD_CLASS}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onReset={resetForm}
      layout="contact"
    />
  );

  return (
    <section
      id="enquire"
      className="relative overflow-hidden border-t border-neutral-200 bg-[#ffffff] py-20 sm:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {showHeading ? (
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-14">
            <SectionIntro className="max-w-xl lg:sticky lg:top-28 lg:pt-2">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent-dark">
                Open for new briefs
              </p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                Tell us where{" "}
                <span className="text-brand-accent">you</span> want to go.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                Share the commercial problem. We will come back with a clear next
                step, not a deck full of filler.
              </p>
              <ul className="mt-8 space-y-3 text-sm leading-relaxed text-neutral-600">
                <li className="flex gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
                    aria-hidden="true"
                  />
                  Reply within one working day
                </li>
                <li className="flex gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
                    aria-hidden="true"
                  />
                  Built for founders and in-house marketers who want ownership
                </li>
                <li className="flex gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
                    aria-hidden="true"
                  />
                  No retainer pitch until we have seen the accounts
                </li>
              </ul>
            </SectionIntro>

            <FormCard>
              <EnquiryHostBadge className="mb-7" />
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                Start the conversation
              </p>
              {fields}
            </FormCard>
          </div>
        ) : (
          <FormCard>
            <EnquiryHostBadge className="mb-7" />
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
              Start the conversation
            </p>
            {fields}
          </FormCard>
        )}
      </div>
    </section>
  );
};
