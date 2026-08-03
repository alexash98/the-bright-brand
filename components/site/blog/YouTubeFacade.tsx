"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { Maximize2, Play, X } from "lucide-react";
import type { YouTubeVideo } from "@/lib/blog/youtube";

interface YouTubeFacadeProps {
  video: YouTubeVideo;
  title: string;
  /** Compact card layout for the article sidebar. */
  compact?: boolean;
  /** 9:16 for Shorts thumbnails. */
  vertical?: boolean;
}

function isTouchDevice(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: none), (pointer: coarse)").matches;
}

export function YouTubeFacade({
  video,
  title,
  compact = false,
  vertical = false,
}: YouTubeFacadeProps): React.ReactElement {
  const labelId = useId();
  const [inlineActive, setInlineActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!modalOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent): void => {
      if (event.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [modalOpen]);

  const aspect = vertical ? "aspect-[9/16]" : "aspect-video";
  const autoplay = isTouchDevice() ? 0 : 1;
  const embedSrc = `${video.embedUrl}?autoplay=${autoplay}&rel=0`;

  const playInline = (): void => {
    setInlineActive(true);
  };

  const openModal = (event: React.MouseEvent): void => {
    event.stopPropagation();
    setModalOpen(true);
  };

  return (
    <>
      <div className="relative">
        {inlineActive ? (
          <div className={`${aspect} overflow-hidden rounded-2xl bg-black`}>
            <iframe
              title={title}
              src={embedSrc}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <button
            type="button"
            onClick={playInline}
            className={`group relative block w-full overflow-hidden rounded-2xl bg-neutral-900 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 ${aspect}`}
            aria-labelledby={labelId}
          >
            <Image
              src={video.thumbnailUrl}
              alt=""
              fill
              sizes={
                compact
                  ? "280px"
                  : "(max-width: 768px) 100vw, 720px"
              }
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <span className="absolute inset-0 bg-black/40" />
            <span className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent text-black shadow-lg transition-transform group-hover:scale-105">
                <span
                  className="absolute inset-0 rounded-full bg-brand-accent/40 motion-safe:animate-ping motion-reduce:hidden"
                  aria-hidden
                />
                <Play className="relative ml-0.5 h-6 w-6 fill-current" />
              </span>
              <span
                id={labelId}
                className="rounded-full bg-[#232327] px-4 py-2 text-xs font-semibold text-brand-text-pale"
              >
                Watch the video
              </span>
            </span>
          </button>
        )}

        <button
          type="button"
          onClick={openModal}
          className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#232327]/90 text-brand-text-pale transition-colors hover:bg-brand-accent hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          aria-label="Expand video"
        >
          <Maximize2 className="h-3.5 w-3.5" />
        </button>
      </div>

      {modalOpen ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setModalOpen(false)}
        >
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-accent hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            aria-label="Close video"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className={`relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl ${vertical ? "max-w-sm aspect-[9/16]" : "aspect-video"}`}
            onClick={(event) => event.stopPropagation()}
          >
            <iframe
              title={title}
              src={`${video.embedUrl}?autoplay=${autoplay}&rel=0`}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
