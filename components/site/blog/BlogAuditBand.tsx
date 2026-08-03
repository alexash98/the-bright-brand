"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { pushSignupEvent } from "@/lib/analytics/form-events";

const EMPTY = {
  firstName: "",
  email: "",
  website: "",
};

interface BlogAuditBandProps {
  /** When true, render only the card (for placing under the author bio). */
  compact?: boolean;
}

/**
 * Foot-of-article audit capture. No fabricated social proof.
 */
export function BlogAuditBand({
  compact = false,
}: BlogAuditBandProps): React.ReactElement {
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
    setError("");
  };

  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    setError("");

    if (!form.firstName.trim() || !form.email.trim() || !form.website.trim()) {
      setError("Fill in your first name, work email and company website.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("Enter a valid work email address.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.firstName.trim(),
          email: form.email.trim(),
          website: form.website.trim(),
          message: "Free measurement audit request from blog",
          pageUrl: window.location.href,
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setError(
          payload.error ??
            "We could not send your request. Email alex@thebrightbrand.com or try again.",
        );
        return;
      }

      pushSignupEvent({
        formName: "brightbrand_blog_audit",
        email: form.email.trim(),
        firstName: form.firstName.trim(),
        companyWebsite: form.website.trim(),
        message: "Free measurement audit request from blog",
      });
      setSuccess(true);
      setForm(EMPTY);
    } catch {
      setError(
        "Network error while sending your request. Check your connection and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const card = (
      <div className="rounded-2xl bg-brand-bg p-6 text-brand-text-pale md:p-10">
        <p className="inline-flex rounded-full bg-brand-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-black">
          Free audit
        </p>
        <h2 className="mt-4 max-w-xl font-display text-2xl font-semibold tracking-tight md:text-3xl">
          Get a free measurement audit
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-brand-text-pale/75">
          Tell us where your Google and Meta spend sits today. We will show you
          where closed revenue is leaking out of the loop, and what to fix first.
          No pitch deck theatre.
        </p>

        {success ? (
          <p className="mt-8 rounded-2xl bg-white/5 px-5 py-4 text-base font-medium text-brand-text-pale">
            Thanks. We have your details and will be in touch within one business
            day.
          </p>
        ) : (
          <form
            onSubmit={(event) => void onSubmit(event)}
            className="mt-8 space-y-4"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block text-sm font-medium text-brand-text-pale/90">
                First name
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={onChange}
                  autoComplete="given-name"
                  required
                  placeholder="Your first name"
                  className="mt-1.5 w-full rounded-xl border-0 bg-white px-3.5 py-3 text-sm text-neutral-900 outline-none ring-0 transition focus:ring-2 focus:ring-brand-accent"
                />
              </label>
              <label className="block text-sm font-medium text-brand-text-pale/90">
                Work email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  autoComplete="email"
                  required
                  placeholder="Email address"
                  className="mt-1.5 w-full rounded-xl border-0 bg-white px-3.5 py-3 text-sm text-neutral-900 outline-none ring-0 transition focus:ring-2 focus:ring-brand-accent"
                />
              </label>
              <label className="block text-sm font-medium text-brand-text-pale/90 sm:col-span-2">
                Company website
                <input
                  name="website"
                  value={form.website}
                  onChange={onChange}
                  autoComplete="url"
                  required
                  placeholder="yourbrand.com"
                  className="mt-1.5 w-full rounded-xl border-0 bg-white px-3.5 py-3 text-sm text-neutral-900 outline-none ring-0 transition focus:ring-2 focus:ring-brand-accent"
                />
              </label>
            </div>

            {error ? (
              <p className="text-sm font-medium text-red-300" role="alert">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
            >
              {loading ? "Sending…" : "Request a free audit"}
              <ArrowRight className="h-4 w-4" />
            </button>

            <p className="text-xs leading-relaxed text-brand-text-pale/55">
              We reply within one business day. No spam list, unsubscribe any
              time if we email you afterwards.
            </p>
          </form>
        )}
      </div>
  );

  if (compact) {
    return card;
  }

  return (
    <section className="border-t border-neutral-200 bg-white px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-3xl">{card}</div>
    </section>
  );
}
