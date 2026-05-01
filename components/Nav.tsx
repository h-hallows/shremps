"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#brands", id: "brands", label: "brands" },
  { href: "#studio", id: "studio", label: "studio" },
  { href: "#work-with-us", id: "work-with-us", label: "work with us" },
  { href: "#contact", id: "contact", label: "contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Track which section is in view so the nav indicator slides between links.
  // We re-evaluate ALL sections on every callback (not just the changed
  // entries) — otherwise the indicator can stick once a section leaves the
  // trigger zone. IntersectionObserver fires on attach (covers initial
  // render) and on threshold crossings; a paired scroll listener catches
  // fast scrolls where the observer might miss intermediate positions.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) =>
      document.getElementById(l.id),
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    let raf = 0;

    function recompute() {
      const triggerY = window.innerHeight * 0.35;
      let active: string | null = null;
      let bestTop = -Infinity;
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= triggerY && rect.bottom > 0 && rect.top > bestTop) {
          bestTop = rect.top;
          active = sec.id;
        }
      }
      setActiveId(active);
    }

    function schedule() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(recompute);
    }

    const observer = new IntersectionObserver(schedule, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });
    sections.forEach((s) => observer.observe(s));

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    schedule();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-paper/80 backdrop-blur-md border-b border-[var(--hairline)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 h-14 flex items-center justify-between">
        {/*
          Studio wordmark — typeset; replace with logo asset when ready.
          A 1px shremp-orange line sweeps under the wordmark once on first
          paint, then dims to a faint hairline. Subtle signature moment.
        */}
        <Link
          href="/"
          className="relative font-sans font-semibold tracking-tight text-ink hover:text-shremp-orange transition-colors"
        >
          Shremps Studios
          <motion.span
            aria-hidden
            initial={{ scaleX: 0, opacity: 0.9 }}
            animate={{ scaleX: 1, opacity: 0.35 }}
            transition={{
              scaleX: {
                duration: 0.85,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              },
              opacity: { duration: 0.6, delay: 1.05 },
            }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 -bottom-0.5 h-px bg-shremp-orange"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-ink/80">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 hover:text-shremp-orange transition-colors"
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-shremp-orange"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden -mr-2 p-2 text-ink"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-[var(--hairline)] bg-paper">
          <ul className="px-6 py-4 flex flex-col gap-4 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-ink hover:text-shremp-orange transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
