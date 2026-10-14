"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";
import { SitePhoto } from "@/components/SitePhoto";
import { galleryCategories, galleryItems, type GalleryCategory, type GalleryItem } from "@/content/gallery";

export function GalleryGrid() {
  const [category, setCategory] = useState<GalleryCategory>("all");
  const [activeId, setActiveId] = useState<string | null>(null);
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const visible = useMemo(
    () => galleryItems.filter((item) => category === "all" || item.category === category),
    [category],
  );
  const activeIndex = visible.findIndex((item) => item.id === activeId);
  const active = activeIndex >= 0 ? visible[activeIndex] : null;
  const visibleRef = useRef(visible);
  const indexRef = useRef(activeIndex);

  useEffect(() => {
    visibleRef.current = visible;
    indexRef.current = activeIndex;
  });

  useEffect(() => {
    if (!activeId) return;
    const previous = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    dialog?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function step(direction: 1 | -1) {
      const items = visibleRef.current;
      if (items.length === 0) return;
      const index = indexRef.current;
      const next = items[(index + direction + items.length) % items.length];
      if (next) setActiveId(next.id);
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveId(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "Tab" && dialog) {
        const focusable = Array.from(dialog.querySelectorAll<HTMLElement>("button"));
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previous?.focus();
    };
  }, [activeId]);

  function open(item: GalleryItem) {
    setActiveId(item.id);
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filter photographs">
        {galleryCategories.map((item) => {
          const selected = category === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              className={`btn px-4 py-2 text-sm ${selected ? "btn-primary" : "btn-secondary"}`}
              onClick={() => setCategory(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <ul key={category} className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, index) => (
          <li key={item.id}>
            <Reveal delay={index * 60}>
            <button type="button" className="lift-card block w-full text-left" onClick={() => open(item)}>
              {item.image ? (
                <SitePhoto
                  src={item.image.src}
                  alt={item.image.alt}
                  sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
                />
              ) : (
                <PlaceholderImage title={item.title} caption={item.caption} />
              )}
              <span className="mt-3 block font-heading text-lg font-semibold text-green-900">{item.title}</span>
              <span className="sr-only">Open larger view</span>
            </button>
            </Reveal>
          </li>
        ))}
      </ul>

      {active ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/70 p-4 sm:items-center" onClick={() => setActiveId(null)}>
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            className="dialog-in max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-cream p-4 shadow-xl outline-none sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">{active.category}</p>
                <h2 id={titleId} className="mt-1 font-heading text-2xl font-semibold text-green-900">
                  {active.title}
                </h2>
              </div>
              <button type="button" className="btn btn-secondary px-4 py-2" onClick={() => setActiveId(null)}>
                Close
              </button>
            </div>
            {active.image ? (
              <SitePhoto
                src={active.image.src}
                alt={active.image.alt}
                sizes="(min-width: 768px) 48rem, 100vw"
                aspectClass="mt-4 aspect-[16/10]"
              />
            ) : (
              <PlaceholderImage title={active.title} caption={active.caption} className="mt-4" aspectClass="aspect-[16/10]" />
            )}
            <p className="mt-4 leading-relaxed">{active.caption}</p>
            <div className="mt-4 flex gap-3">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  const previousItem = visible[(activeIndex - 1 + visible.length) % visible.length];
                  if (previousItem) setActiveId(previousItem.id);
                }}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  const next = visible[(activeIndex + 1) % visible.length];
                  if (next) setActiveId(next.id);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
