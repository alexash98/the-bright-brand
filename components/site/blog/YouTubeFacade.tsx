"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { X } from "lucide-react";
import type { YouTubeVideo } from "@/lib/blog/youtube";

interface YouTubeFacadeProps {
  video: YouTubeVideo;
  title: string;
  /** Compact card layout for the article sidebar. */
  compact?: boolean;
  /** 9:16 for Shorts thumbnails. */
  vertical?: boolean;
  /**
   * Open a lightbox modal on play (default). Set false to embed inline instead.
   */
  popOut?: boolean;
}

/** Official YouTube icon mark. */
function YouTubeLogo({
  className,
}: {
  className?: string;
}): React.ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      focusable="false"
    >
      <path
        fill="#FF0000"
        d="M23.5 6.2a3.05 3.05 0 0 0-2.15-2.16C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.35.54A3.05 3.05 0 0 0 .5 6.2 32.1 32.1 0 0 0 0 12a32.1 32.1 0 0 0 .5 5.8 3.05 3.05 0 0 0 2.15 2.16C4.5 20.5 12 20.5 12 20.5s7.5 0 9.35-.54a3.05 3.05 0 0 0 2.15-2.16A32.1 32.1 0 0 0 24 12a32.1 32.1 0 0 0-.5-5.8Z"
      />
      <path fill="#FFFFFF" d="M9.75 15.5v-7L15.75 12l-6 3.5Z" />
    </svg>
  );
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
  popOut = true,
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

  const onPlayClick = (): void => {
    if (popOut) {
      setModalOpen(true);
      return;
    }
    setInlineActive(true);
  };

  return (
    <>
      <div>
        {inlineActive && !popOut ? (
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
            onClick={onPlayClick}
            className={`group relative block w-full !cursor-pointer overflow-hidden rounded-2xl bg-neutral-900 text-left outline-none transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(27,27,31,0.18)] focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 active:translate-y-0 ${aspect}`}
            style={{ cursor: "pointer" }}
            aria-label={`Play video: ${title}`}
            aria-labelledby={labelId}
          >
            <Image
              src={video.thumbnailUrl}
              alt=""
              fill
              sizes={
                compact ? "280px" : "(max-width: 768px) 100vw, 720px"
              }
              className="pointer-events-none object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />

            <span
              className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20"
              aria-hidden
            />

            {/* Strong bottom fade so pale thumbnails never wash out the label */}
            <span
              className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black via-black/75 to-transparent"
              aria-hidden
            />

            <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3.5 sm:p-4">
              <span className="flex min-w-0 items-center gap-2.5">
                <span
                  className="h-8 w-1 shrink-0 rounded-full bg-brand-accent transition-all duration-300 group-hover:h-10"
                  aria-hidden
                />
                <span className="min-w-0">
                  <span
                    id={labelId}
                    className={`block font-display font-medium tracking-tight text-white drop-shadow-sm ${
                      compact ? "text-sm" : "text-base"
                    }`}
                  >
                    Watch the video
                  </span>
                  <span className="mt-0.5 block text-[11px] font-normal tracking-wide text-white/75">
                    Opens in player
                  </span>
                </span>
              </span>
              <span
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 group-hover:scale-105"
                aria-hidden
              >
                <YouTubeLogo className="h-5 w-5" />
              </span>
            </span>
          </button>
        )}
      </div>

      {modalOpen ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#1b1b1f]/70 p-4 backdrop-blur-md md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setModalOpen(false)}
        >
          <div
            className={`relative w-full ${vertical ? "max-w-sm" : "max-w-4xl"}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute -right-2 -top-2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#232327] shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent md:-right-3 md:-top-3"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>
            <div
              className={`overflow-hidden rounded-2xl bg-black shadow-2xl ${vertical ? "aspect-[9/16]" : "aspect-video"}`}
            >
              <iframe
                title={title}
                src={embedSrc}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
