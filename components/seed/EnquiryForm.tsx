'use client';

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Check,
  ArrowRight,
} from "lucide-react";
import { useScrollToSection } from "@/components/seed/SmoothScrollProvider";

const FEATURE_POINTS = [
  "Pricing based on outcomes",
  "Flexible agreements",
  "Agile, bespoke solutions",
  "Long-term partnerships",
];

export const EnquiryForm: React.FC = () => {
  const scrollToSection = useScrollToSection();
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.website) {
      setError("Please fill out all required fields marked with *");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please provide a valid work email address");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1800);
  };

  const focusForm = (): void => {
    nameInputRef.current?.focus();
    nameInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const fieldClassName =
    "rounded-lg border-0 bg-white px-4 text-sm text-neutral-900 placeholder:text-neutral-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/15";

  return (
    <section id="enquire" className="relative bg-white py-20 sm:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
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
                onClick={focusForm}
                className="inline-flex h-11 items-center justify-center rounded-full bg-brand-accent px-6 text-sm font-bold text-brand-bg-darker shadow-md shadow-brand-accent/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-accent-hover"
              >
                Arrange a 15-minute intro
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("work")}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 text-sm font-bold text-neutral-900 transition-all duration-200 hover:border-neutral-400 hover:bg-neutral-50"
              >
                See our work
                <ArrowRight className="h-4 w-4" />
              </button>
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
            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form
                  key="enquiry-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 text-left"
                >
                  {error ? (
                    <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-600">
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      <span>{error}</span>
                    </div>
                  ) : null}

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
                      onChange={handleChange}
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
                      onChange={handleChange}
                      placeholder="you@company.com"
                      maxLength={100}
                      disabled={loading}
                      className={`h-11 ${fieldClassName}`}
                    />
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
                      onChange={handleChange}
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
                      What are you looking to optimize?{" "}
                      <span className="font-normal text-neutral-400">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Briefly tell us about your goals, timelines, what's currently working, or what's not..."
                      maxLength={1000}
                      disabled={loading}
                      className={`resize-none ${fieldClassName} p-4`}
                    />
                  </div>

                  <div className="flex justify-end pt-2">
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
                          <span>Submit Enquiry</span>
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
                      Proposal audit request received!
                    </h3>
                    <p className="text-sm font-normal leading-relaxed text-neutral-600">
                      Thanks{" "}
                      <span className="font-bold text-brand-accent">
                        {formData.name}
                      </span>
                      . Our Client Partner,{" "}
                      <span className="font-bold text-brand-accent">Beth</span>,
                      will audit{" "}
                      <span className="font-bold text-brand-accent underline">
                        {formData.website}
                      </span>{" "}
                      and email you directly at{" "}
                      <span className="font-bold text-neutral-900">
                        {formData.email}
                      </span>{" "}
                      within 24 hours.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSuccess(false);
                      setFormData({ name: "", email: "", website: "", message: "" });
                    }}
                    className="rounded-full border-0 bg-white px-6 py-2.5 text-xs font-bold text-neutral-600 transition-all hover:bg-neutral-100 hover:text-neutral-900"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
