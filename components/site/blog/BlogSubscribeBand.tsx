"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { pushSignupEvent } from "@/lib/analytics/form-events";

const EMPTY = {
  firstName: "",
  email: "",
  website: "",
};

export function BlogSubscribeBand(): React.ReactElement {
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
      const response = await fetch("/api/blog/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          email: form.email.trim(),
          website: form.website.trim(),
          pageUrl: window.location.href,
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setError(
          payload.error ??
            "We could not join you to the list. Check your details and try again.",
        );
        return;
      }

      pushSignupEvent({
        formName: "brightbrand_blog_subscribe",
        email: form.email.trim(),
        firstName: form.firstName.trim(),
        companyWebsite: form.website.trim(),
      });
      setSuccess(true);
      setForm(EMPTY);
    } catch {
      setError(
        "Network error while joining the list. Check your connection and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="border-t border-neutral-200 bg-[#f7f7f5] px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-3xl rounded-2xl border border-neutral-200 bg-white p-6 md:p-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent-dark">
          One a month, free
        </p>
        <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
          We set up offline conversion tracking for one business a month
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
          Join the list and you get the marketing writing either way. Each month
          we pick one subscriber business and wire offline conversion tracking
          plus an Odal workspace for free: your Google and Meta spend joined to
          closed revenue in your CRM, at no cost. We choose from recent
          subscribers who send real paid traffic and have a CRM we can connect.
        </p>

        {success ? (
          <p className="mt-8 rounded-2xl bg-[#f7f7f5] px-5 py-4 text-base font-medium text-neutral-900">
            You are on the list. Watch your inbox for the next piece, and keep an
            eye out if we shortlist you for the free setup.
          </p>
        ) : (
          <form onSubmit={(event) => void onSubmit(event)} className="mt-8 space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <label className="block text-sm font-medium text-neutral-800">
                First name
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={onChange}
                  autoComplete="given-name"
                  required
                  className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-brand-accent"
                />
              </label>
              <label className="block text-sm font-medium text-neutral-800">
                Work email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  autoComplete="email"
                  required
                  className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-brand-accent"
                />
              </label>
              <label className="block text-sm font-medium text-neutral-800">
                Company website
                <input
                  name="website"
                  value={form.website}
                  onChange={onChange}
                  autoComplete="url"
                  placeholder="yourbrand.com"
                  required
                  className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-brand-accent"
                />
              </label>
            </div>

            {error ? (
              <p className="text-sm font-medium text-red-700" role="alert">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Joining…" : "Join the list"}
              <ArrowRight className="h-4 w-4" />
            </button>

            <p className="text-xs leading-relaxed text-neutral-500">
              Occasional emails on performance marketing and measurement. One
              subscriber business a month is picked for free offline conversion
              tracking and an Odal workspace when they have paid traffic and a
              connectable CRM. Unsubscribe any time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
