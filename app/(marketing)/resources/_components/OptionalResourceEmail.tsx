"use client";

import { useState } from "react";

export function OptionalResourceEmail(): React.ReactElement {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="mt-8 rounded-3xl border border-neutral-200 bg-[#f7f7f5] p-5">
      <p className="mb-1 text-sm font-semibold text-neutral-900">
        Optional: email yourself a copy
      </p>
      <p className="mb-3 text-sm text-neutral-600">
        Downloads above work without an email. This is only if you want a
        reminder later.
      </p>
      {sent ? (
        <p className="text-sm font-medium text-neutral-900">Thanks. Noted.</p>
      ) : (
        <form
          className="flex flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) setSent(true);
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-full border border-neutral-300 bg-white px-4 py-2.5 text-sm sm:max-w-xs"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-brand-accent-hover"
          >
            Send link
          </button>
        </form>
      )}
    </div>
  );
}
