"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#brands", label: "brands" },
  { href: "#studio", label: "studio" },
  { href: "#work-with-us", label: "work with us" },
  { href: "#contact", label: "contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper/80 backdrop-blur-md border-b border-[var(--hairline)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 h-14 flex items-center justify-between">
        {/* Studio wordmark — typeset; replace with logo asset when ready. */}
        <Link
          href="/"
          className="font-sans font-semibold tracking-tight text-ink hover:text-shremp-orange transition-colors"
        >
          Shremps Studios
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-ink/80">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-shremp-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
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
