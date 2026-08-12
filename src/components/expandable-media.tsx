"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import {
  type KeyboardEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

import { SafeImage } from "@/components/safe-image";

type ExpandableMediaProps = {
  children: ReactNode;
  src: string;
  alt: string;
  type?: "image" | "video";
  className?: string;
};

export function ExpandableMedia({
  children,
  src,
  alt,
  type = "image",
  className = "",
}: ExpandableMediaProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleEscape(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);

      window.requestAnimationFrame(() => {
        triggerRef.current?.focus();
      });
    };
  }, [isOpen]);

  function openMedia() {
    setIsOpen(true);
  }

  function handleTriggerKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openMedia();
    }
  }

  const lightbox =
    isMounted &&
    createPortal(
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setIsOpen(false);
              }
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-6"
          >
            <button
              type="button"
              autoFocus
              aria-label="Fechar mídia ampliada"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-20 flex size-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-lg backdrop-blur-md transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:top-6"
            >
              <X className="size-5" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex max-h-[calc(100dvh-72px)] w-full max-w-[1600px] items-center justify-center"
              onMouseDown={(event) => event.stopPropagation()}
            >
              {type === "video" ? (
                <video
                  src={src}
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  className="max-h-[calc(100dvh-88px)] max-w-[94vw] rounded-[16px] bg-black object-contain shadow-2xl"
                />
              ) : (
                <div className="relative h-[calc(100dvh-88px)] w-[94vw] max-w-[1600px]">
                  <SafeImage
                    src={src}
                    alt={alt}
                    fill
                    sizes="94vw"
                    className="object-contain"
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
    );

  return (
    <>
      <div
        ref={triggerRef}
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-label={`Ampliar ${alt}`}
        onClick={openMedia}
        onKeyDown={handleTriggerKeyDown}
        className={[
          "group relative cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#303030]/40",
          className,
        ].join(" ")}
      >
        <div className="relative h-full w-full transition-transform duration-200 ease-out group-hover:scale-[1.01]">
          {children}
        </div>

        <div className="pointer-events-none absolute inset-0 z-10 bg-black/[0.035] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" />

        <div className="pointer-events-none absolute right-3 top-3 z-20 flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white shadow-lg backdrop-blur-md transition-all duration-200 sm:translate-y-1 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-visible:translate-y-0 sm:group-focus-visible:opacity-100">
          <Maximize2 className="size-[18px]" />
        </div>
      </div>

      {lightbox}
    </>
  );
}