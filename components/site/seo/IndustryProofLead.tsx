import Image from "next/image";
import { AskAiAboutBrand } from "@/components/site/AskAiAboutBrand";
import { QuoteHighlightFooter } from "@/components/site/QuoteHighlightFooter";
import {
  SERVICE_HIGHLIGHT_QUOTES,
  SERVICE_HIGHLIGHT_QUOTES_HELD,
} from "@/lib/site-data";
import type { Industry } from "@/content/types";
import type { QuoteLocation, ServiceHighlightQuote } from "@/lib/site-types";

interface IndustryProofLeadProps {
  industry: Industry;
  lead: NonNullable<Industry["proofLead"]>;
}

const LOCATION_LABEL: Record<QuoteLocation, string> = {
  UK: "United Kingdom",
  US: "United States",
};

function resolveQuote(quoteId: string): ServiceHighlightQuote | undefined {
  return (
    SERVICE_HIGHLIGHT_QUOTES.find((item) => item.id === quoteId) ??
    SERVICE_HIGHLIGHT_QUOTES_HELD.find((item) => item.id === quoteId)
  );
}

/** Static named quote — no slider, Motion, or auto-advance. */
function StaticQuote({
  quote,
}: {
  quote: ServiceHighlightQuote;
}): React.ReactElement {
  return (
    <aside className="flex min-h-[280px] flex-col justify-center lg:pl-8">
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="inline-flex rounded-full border border-neutral-200 bg-[#f7f7f5] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-neutral-800">
          {quote.company}
        </span>
        {quote.location ? (
          <span
            className="inline-flex shrink-0 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-accent-dark"
            title={LOCATION_LABEL[quote.location]}
            aria-label={LOCATION_LABEL[quote.location]}
          >
            {quote.location}
          </span>
        ) : null}
      </div>

      <blockquote className="text-[0.9rem] leading-relaxed text-neutral-700 md:text-base lg:text-[1.08rem] lg:leading-relaxed">
        &ldquo;{quote.quote}&rdquo;
      </blockquote>

      <div className="mt-8 flex items-center gap-4">
        <Image
          src={quote.imageSrc}
          alt={quote.imageAlt}
          width={48}
          height={48}
          loading="lazy"
          decoding="async"
          unoptimized
          className="h-12 w-12 shrink-0 rounded-full object-cover"
        />
        <div>
          {quote.author ? (
            <>
              <p className="font-semibold text-neutral-900">{quote.author}</p>
              {quote.role ? (
                <p className="text-sm text-neutral-600">{quote.role}</p>
              ) : null}
            </>
          ) : (
            <p className="font-semibold text-neutral-900">{quote.company}</p>
          )}
        </div>
      </div>

      {quote.highlight ? (
        <div className="mt-5 border-t border-neutral-100 pt-4">
          <QuoteHighlightFooter highlight={quote.highlight} />
        </div>
      ) : null}
    </aside>
  );
}

export function IndustryProofLead({
  lead,
}: IndustryProofLeadProps): React.ReactElement {
  const quoteIds =
    lead.quoteIds && lead.quoteIds.length > 0
      ? lead.quoteIds
      : lead.quoteId
        ? [lead.quoteId]
        : [];
  // One quote only — multi-slide rotation was a major client cost on industry pages.
  const quote = quoteIds
    .map((id) => resolveQuote(id))
    .find((item): item is ServiceHighlightQuote => Boolean(item));

  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-20">
      <div
        className={`mx-auto max-w-7xl ${
          quote ? "grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16" : ""
        }`}
      >
        <div className="max-w-3xl text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Why operators pick us
          </p>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            {lead.heading}
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">{lead.body}</p>
          {lead.quoteNote ? (
            <p className="mt-4 text-sm leading-relaxed text-neutral-500">
              {lead.quoteNote}
            </p>
          ) : null}
          <AskAiAboutBrand
            className="mt-8"
            prompt={lead.askAiPrompt}
            label="Ask AI about The Bright Brand"
          />
        </div>

        {quote ? <StaticQuote quote={quote} /> : null}
      </div>
    </section>
  );
}
