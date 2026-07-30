'use client';

import React from "react";
import { EnquiryFormFields } from "@/components/site/EnquiryFormFields";
import { useEnquiryForm } from "@/components/site/useEnquiryForm";

const DEFAULT_FIELD_CLASS =
  "rounded-lg border-0 bg-white px-4 text-sm text-neutral-900 placeholder:text-neutral-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/15";

const CONTACT_FIELD_CLASS =
  "rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 transition-all duration-200 focus:border-brand-accent/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/15";

interface EnquiryFormProps {
  showHeading?: boolean;
  formLayout?: "stacked" | "contact";
  /** Section band colour. `muted` separates from a white section above without going dark before the footer. */
  tone?: "white" | "muted";
}

function LiveStatus({
  label,
}: {
  label: string;
}): React.ReactElement {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-accent/25 bg-brand-accent/10 px-3.5 py-1.5">
      <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
        <span className="absolute inset-0 rounded-full bg-brand-accent motion-safe:animate-[status-pulse-ring_1.8s_ease-out_infinite] motion-reduce:animate-none" />
        <span className="relative h-2 w-2 rounded-full bg-brand-accent" />
      </span>
      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-accent-dark">
        {label}
      </span>
    </div>
  );
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  showHeading = true,
  formLayout = "stacked",
  tone = "white",
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

  const isContactLayout = formLayout === "contact";
  const isMuted = tone === "muted";
  // Muted homepage band uses the same white card + bordered fields as Enquire Now,
  // so inputs keep clear contrast against the card (not white-on-white).
  const useRaisedCard = isContactLayout || isMuted;
  const showSpotlight = isMuted && showHeading;

  return (
    <section
      id="enquire"
      className={`relative overflow-hidden py-20 sm:py-24 ${
        isMuted ? "bg-[#f7f7f5]" : "bg-white"
      }`}
    >
      {showSpotlight ? (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-accent/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-neutral-900/[0.04] blur-3xl"
          />
        </>
      ) : null}

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {showSpotlight ? (
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-14">
            <div className="max-w-xl text-left lg:sticky lg:top-28 lg:pt-2">
              <LiveStatus label="Open for new briefs" />
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                Tell us where you want to go.
              </h2>
              <p className="mt-4 text-base leading-relaxed tracking-tight text-neutral-600 md:text-lg">
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
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.07)]">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-accent via-brand-accent/70 to-transparent"
              />
              <div className="px-6 py-8 md:px-10 md:py-12 lg:px-12 lg:py-14">
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                  Start the conversation
                </p>
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
                  layout={formLayout}
                />
              </div>
            </div>
          </div>
        ) : (
          <>
            {showHeading ? (
              <h2 className="mb-8 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-4xl lg:mb-10 lg:text-[2.75rem] lg:leading-[1.15]">
                Tell us where you want to go.
              </h2>
            ) : (
              <div className="mb-6">
                <LiveStatus label="Usually replies in one business day" />
              </div>
            )}

            <div
              className={
                useRaisedCard
                  ? "relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.07)]"
                  : "rounded-2xl bg-[#f7f7f5]"
              }
            >
              {useRaisedCard ? (
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-accent via-brand-accent/70 to-transparent"
                />
              ) : null}
              <div
                className={
                  useRaisedCard
                    ? "px-6 py-8 md:px-10 md:py-12 lg:px-14 lg:py-14"
                    : "p-6 md:p-8 lg:p-10"
                }
              >
                <EnquiryFormFields
                  formData={formData}
                  loading={loading}
                  success={success}
                  error={error}
                  nameInputRef={nameInputRef}
                  fieldClassName={
                    useRaisedCard ? CONTACT_FIELD_CLASS : DEFAULT_FIELD_CLASS
                  }
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  onReset={resetForm}
                  layout={formLayout}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
