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
    <section id="enquire" className="py-24 bg-brand-bg-darker border-t border-brand-teal-light/10 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-accent/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-accent font-bold mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Let's build something that <span className="text-brand-accent">performs</span>.
          </h2>
          <p className="text-brand-text-pale/80 text-base md:text-lg max-w-xl mx-auto font-medium">
            Whether you are scaling or restructuring, we'd love to chat about your business goals. No aggressive pitches — just numbers and metrics.
          </p>
        </div>

        {/* Content Onboarding Box */}
        <div className="bg-brand-bg border border-brand-teal-light/10 p-8 md:p-12 rounded-2xl shadow-2xl">
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
                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl flex items-center gap-3 text-sm font-semibold">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Your name */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-bold text-brand-text-pale/85" htmlFor="form-name">
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
                      className="bg-brand-bg-darker border border-brand-teal-light/20 rounded-xl h-12 px-4 text-white text-sm focus:border-brand-accent focus:outline-none transition-all duration-200"
                    />
                  </div>

                  {/* Work email */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-bold text-brand-text-pale/85" htmlFor="form-email">
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
                      className="bg-brand-bg-darker border border-brand-teal-light/20 rounded-xl h-12 px-4 text-white text-sm focus:border-brand-accent focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Company website */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-bold text-brand-text-pale/85" htmlFor="form-website">
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
                    className="bg-brand-bg-darker border border-brand-teal-light/20 rounded-xl h-12 px-4 text-white text-sm focus:border-brand-accent focus:outline-none transition-all duration-200"
                  />
                </div>

                {/* Optional Message */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-bold text-brand-text-pale/85" htmlFor="form-message">
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
                    className="bg-brand-bg-darker border border-brand-teal-light/20 rounded-xl p-4 text-white text-sm focus:border-brand-accent focus:outline-none transition-all duration-200 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-brand-teal-light/10">
                  <span className="text-xs text-brand-text-pale/40 font-bold uppercase tracking-wide">
                    We will audit your website completely on us.
                  </span>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-hover disabled:bg-brand-bg-darker disabled:text-brand-text-pale/30 text-brand-bg-darker font-extrabold h-12 px-8 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-brand-accent/15 w-full sm:w-auto"
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
                className="py-12 flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="h-16 w-16 bg-brand-accent/10 border border-brand-accent/25 rounded-full flex items-center justify-center text-brand-accent shadow-inner">
                  <CheckCircle2 className="h-10 w-10 animate-bounce" />
                </div>
                <div className="space-y-2 max-w-md">
                  <h3 className="text-2xl font-black text-white">
                    Proposal audit request received!
                  </h3>
                  <p className="text-brand-text-pale/85 text-sm leading-relaxed font-medium">
                    Thanks <span className="text-brand-accent font-bold">{formData.name}</span>. Our Client Partner, <span className="text-brand-accent font-bold">Beth</span>, will audit <span className="text-brand-accent underline font-bold">{formData.website}</span> and email you directly at <span className="text-white font-bold">{formData.email}</span> within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSuccess(false);
                    setFormData({ name: "", email: "", website: "", message: "" });
                  }}
                  className="bg-brand-bg-darker hover:bg-brand-bg-card text-brand-text-pale border border-brand-teal-light/20 px-6 py-2.5 rounded-full text-xs font-bold transition-all"
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
