'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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

    // Simple email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please provide a valid work email address");
      return;
    }

    setLoading(true);

    // Simulate submission latency
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1800);
  };

  return (
    <section id="enquire" className="relative border-t border-neutral-200 bg-white py-24">
      <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
            Get In Touch
          </p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Let's build something that <span className="text-brand-accent">performs</span>.
          </h2>
          <p className="mx-auto max-w-xl text-base font-normal text-neutral-600 md:text-lg">
            Whether you are scaling or restructuring, we'd love to chat about your business goals. No aggressive pitches — just numbers and metrics.
          </p>
        </div>

        {/* Content Onboarding Box */}
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 shadow-2xl md:p-12">
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form
                key="enquiry-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6 text-left"
              >
                {error && (
                  <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-600">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Your name */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-bold text-neutral-600" htmlFor="form-name">
                      Your name *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Robin Hawker"
                      maxLength={100}
                      disabled={loading}
                      className="h-12 rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-900 transition-all duration-200 focus:border-brand-accent focus:outline-none"
                    />
                  </div>

                  {/* Work email */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-bold text-neutral-600" htmlFor="form-email">
                      Work email *
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
                      className="h-12 rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-900 transition-all duration-200 focus:border-brand-accent focus:outline-none"
                    />
                  </div>
                </div>

                {/* Company website */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-bold text-neutral-600" htmlFor="form-website">
                    Company website *
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
                    className="h-12 rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-900 transition-all duration-200 focus:border-brand-accent focus:outline-none"
                  />
                </div>

                {/* Optional Message */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-bold text-neutral-600" htmlFor="form-message">
                    What are you looking to optimize? (optional)
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
                    className="resize-none rounded-xl border border-neutral-200 bg-white p-4 text-sm text-neutral-900 transition-all duration-200 focus:border-brand-accent focus:outline-none"
                  />
                </div>

                <div className="flex flex-col items-start justify-between gap-4 border-t border-neutral-200 pt-4 sm:flex-row sm:items-center">
                  <span className="text-xs font-bold uppercase tracking-wide text-neutral-400">
                    We will audit your website completely on us.
                  </span>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-8 font-extrabold text-brand-bg-darker shadow-lg shadow-brand-accent/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-accent-hover active:translate-y-0 disabled:bg-neutral-200 disabled:text-neutral-400 sm:w-auto"
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
                    Thanks <span className="font-bold text-brand-accent">{formData.name}</span>. Our Client Partner, <span className="font-bold text-brand-accent">Beth</span>, will audit <span className="font-bold text-brand-accent underline">{formData.website}</span> and email you directly at <span className="font-bold text-neutral-900">{formData.email}</span> within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSuccess(false);
                    setFormData({ name: "", email: "", website: "", message: "" });
                  }}
                  className="rounded-full border border-neutral-200 bg-white px-6 py-2.5 text-xs font-bold text-neutral-600 transition-all hover:border-brand-accent/30 hover:text-neutral-900"
                >
                  Send another inquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
