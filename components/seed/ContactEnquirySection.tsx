'use client';

import { EnquiryFormFields } from "@/components/seed/EnquiryFormFields";
import { useEnquiryForm } from "@/components/seed/useEnquiryForm";

const CONTACT_FIELD_CLASS =
  "rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 transition-all duration-200 focus:border-brand-accent/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/15";

export function ContactEnquirySection(): React.ReactElement {
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

  return (
    <section id="enquire" className="relative bg-white pb-12 md:pb-14">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="relative -mt-24 pt-10 md:-mt-28 md:pt-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Enquiry
          </p>
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            Send us a message
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            Tell us about your business and what you want to improve. Our Client
            Partner will review your enquiry and reply within one business day.
          </p>
        </div>

        <div className="relative mt-14 md:mt-16 lg:mt-20">
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.07)]">
            <div className="px-6 py-8 md:px-10 md:py-12 lg:px-14 lg:py-14">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
