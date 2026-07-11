"use client";

import { useEffect, useState } from "react";
import { fund, navLinks } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-700 ease-slow ${
        scrolled
          ? "border-white/10 bg-ink-950/90 backdrop-blur-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a
          href="#top"
          className="font-serif text-lg font-normal tracking-[0.35em] text-stone-light"
        >
          {fund.wordmark}
        </a>

        <nav className="hidden items-center gap-12 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] font-normal uppercase tracking-widest2 text-stone-dim transition-colors duration-500 hover:text-stone-light"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#access"
            className="border border-gold/50 px-6 py-2.5 text-[11px] uppercase tracking-widest2 text-gold transition-all duration-500 ease-slow hover:bg-gold hover:text-ink-950"
          >
            Request access
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[7px] md:hidden"
        >
          <span
            className={`block h-px w-6 bg-stone-light transition-transform duration-500 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-stone-light transition-opacity duration-500 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-stone-light transition-transform duration-500 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-white/10 bg-ink-950/95 backdrop-blur-sm transition-all duration-700 ease-slow md:hidden ${
          open ? "max-h-96 border-b" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-[13px] uppercase tracking-widest2 text-stone-dim transition-colors hover:text-stone-light"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#access"
            onClick={() => setOpen(false)}
            className="mt-4 border border-gold/50 px-6 py-3.5 text-center text-[12px] uppercase tracking-widest2 text-gold"
          >
            Request access
          </a>
        </nav>
      </div>
    </header>
  );
}
