"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/Logo";
import { cta, navItems } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openPath, setOpenPath] = useState(pathname);
  const panelId = useId();

  if (pathname !== openPath) {
    setOpenPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-green-100 bg-cream/95 backdrop-blur">
      <div className="h-1 bg-green-700" />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="shrink-0 rounded-sm">
          <Logo variant="horizontal" className="h-11 w-auto sm:h-12" />
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const current = item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                aria-current={current ? "page" : undefined}
                className={`text-sm font-semibold ${current ? "text-green-700" : "text-ink hover:text-green-700"}`}
              >
                {item.navLabel}
              </Link>
            );
          })}
          <Link href="/contact#inquiry" className="btn btn-primary px-4 py-2 text-sm">
            {cta.inquiry}
          </Link>
        </nav>
        <button
          type="button"
          className="btn btn-secondary px-4 lg:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav
          id={panelId}
          className="fixed inset-x-0 top-[4.75rem] bottom-0 z-30 overflow-y-auto bg-cream px-5 py-6 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="block rounded-xl px-3 py-3 font-heading text-lg font-semibold text-green-900 hover:bg-green-100"
                >
                  {item.navLabel}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact#inquiry" className="btn btn-primary mt-6 w-full">
            {cta.inquiry}
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
