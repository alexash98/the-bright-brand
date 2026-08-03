"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export function ShareButtons({
  url,
  title,
}: ShareButtonsProps): React.ReactElement {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
        Share
      </span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition-colors hover:border-brand-accent hover:text-brand-accent-dark"
        aria-label="Share on LinkedIn"
      >
        <span className="text-[11px] font-bold tracking-tight">in</span>
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-9 items-center justify-center rounded-full border border-neutral-200 px-3 text-xs font-semibold text-neutral-700 transition-colors hover:border-brand-accent hover:text-brand-accent-dark"
        aria-label="Share on X"
      >
        X
      </a>
      <button
        type="button"
        onClick={() => void copy()}
        className="inline-flex h-9 items-center gap-1.5 rounded-full border border-neutral-200 px-3 text-xs font-semibold text-neutral-700 transition-colors hover:border-brand-accent hover:text-brand-accent-dark"
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Link2 className="h-3.5 w-3.5" />}
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
}
