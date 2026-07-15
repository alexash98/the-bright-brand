'use client';

import React from "react";
import { EnquiryFormFields } from "@/components/seed/EnquiryFormFields";
import { useEnquiryForm } from "@/components/seed/useEnquiryForm";

const DEFAULT_FIELD_CLASS =
  "rounded-lg border-0 bg-white px-4 text-sm text-neutral-900 placeholder:text-neutral-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/15";

const CONTACT_FIELD_CLASS =
  "rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 transition-all duration-200 focus:border-brand-accent/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/15";

interface EnquiryFormProps {
  showHeading?: boolean;
  formLayout?: "stacked" | "contact";
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  showHeading = true,
  formLayout = "stacked",
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

  return (
    <section id="enquire" className="relative bg-white py-20 sm:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {showHeading ? (
          <h2 className="mb-8 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-4xl lg:mb-10 lg:text-[2.75rem] lg:leading-[1.15]">
            Tell us where you want to go.
          </h2>
        ) : null}

        <div
          className={
            isContactLayout
              ? "overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.07)]"
              : "rounded-2xl bg-[#f7f7f5]"
          }
        >
          <div
            className={
              isContactLayout
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
                isContactLayout ? CONTACT_FIELD_CLASS : DEFAULT_FIELD_CLASS
              }
              onChange={handleChange}
              onSubmit={handleSubmit}
              onReset={resetForm}
              layout={formLayout}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
