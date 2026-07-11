'use client';

import { motion, AnimatePresence } from "motion/react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { EnquiryFormData } from "@/components/seed/useEnquiryForm";

interface EnquiryFormFieldsProps {
  formData: EnquiryFormData;
  loading: boolean;
  success: boolean;
  error: string;
  nameInputRef: React.RefObject<HTMLInputElement | null>;
  fieldClassName: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
  onReset: () => void;
  layout?: "stacked" | "contact";
}

export function EnquiryFormFields({
  formData,
  loading,
  success,
  error,
  nameInputRef,
  fieldClassName,
  onChange,
  onSubmit,
  onReset,
  layout = "stacked",
}: EnquiryFormFieldsProps): React.ReactElement {
  const isContactLayout = layout === "contact";

  return (
    <AnimatePresence mode="wait">
      {!success ? (
        <motion.form
          key="enquiry-form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={onSubmit}
          className="space-y-5 text-left"
        >
          {error ? (
            <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-600">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <span>{error}</span>
            </div>
          ) : null}

          <div
            className={
              isContactLayout ? "grid gap-5 sm:grid-cols-2" : "space-y-5"
            }
          >
            <div className="flex flex-col space-y-2">
              <label
                className="text-sm font-medium text-neutral-700"
                htmlFor="form-name"
              >
                Your name <span className="text-brand-accent">*</span>
              </label>
              <input
                ref={nameInputRef}
                id="form-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={onChange}
                placeholder="Your full name"
                maxLength={100}
                disabled={loading}
                className={`h-11 ${fieldClassName}`}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label
                className="text-sm font-medium text-neutral-700"
                htmlFor="form-email"
              >
                Work email <span className="text-brand-accent">*</span>
              </label>
              <input
                id="form-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                placeholder="you@company.com"
                maxLength={100}
                disabled={loading}
                className={`h-11 ${fieldClassName}`}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label
              className="text-sm font-medium text-neutral-700"
              htmlFor="form-website"
            >
              Company website <span className="text-brand-accent">*</span>
            </label>
            <input
              id="form-website"
              type="text"
              name="website"
              value={formData.website}
              onChange={onChange}
              placeholder="yourcompany.com"
              maxLength={100}
              disabled={loading}
              className={`h-11 ${fieldClassName}`}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label
              className="text-sm font-medium text-neutral-700"
              htmlFor="form-message"
            >
              What are you looking to improve?{" "}
              <span className="font-normal text-neutral-400">(optional)</span>
            </label>
            <textarea
              id="form-message"
              name="message"
              value={formData.message}
              onChange={onChange}
              rows={isContactLayout ? 5 : 4}
              placeholder="Goals, timelines, channels, or what is not working yet..."
              maxLength={1000}
              disabled={loading}
              className={`resize-none ${fieldClassName} p-4`}
            />
          </div>

          <div className={`pt-2 ${isContactLayout ? "" : "flex justify-end"}`}>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-8 text-sm font-bold text-brand-bg-darker shadow-md shadow-brand-accent/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-accent-hover active:translate-y-0 disabled:translate-y-0 disabled:bg-neutral-200 disabled:text-neutral-400 disabled:shadow-none sm:w-auto"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Submit enquiry</span>
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.div
          key="enquiry-success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center space-y-6 py-12 text-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-accent/25 bg-brand-accent/10 text-brand-accent shadow-inner">
            <CheckCircle2 className="h-10 w-10 animate-bounce" />
          </div>
          <div className="max-w-md space-y-2">
            <h3 className="text-2xl font-semibold text-neutral-900">
              Enquiry received
            </h3>
            <p className="text-sm font-normal leading-relaxed text-neutral-600">
              Thanks{" "}
              <span className="font-bold text-brand-accent">{formData.name}</span>.
              Our Client Partner,{" "}
              <span className="font-bold text-brand-accent">Beth</span>, will review{" "}
              <span className="font-bold text-brand-accent underline">
                {formData.website}
              </span>{" "}
              and email you at{" "}
              <span className="font-bold text-neutral-900">{formData.email}</span>{" "}
              within one business day.
            </p>
          </div>
          <button
            type="button"
            onClick={onReset}
            className="rounded-full border border-neutral-200 bg-white px-6 py-2.5 text-xs font-bold text-neutral-600 transition-all hover:bg-neutral-50 hover:text-neutral-900"
          >
            Send another enquiry
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
