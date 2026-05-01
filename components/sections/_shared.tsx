"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Section primitives — shared so each section reads at the same rhythm.
// SectionLabel + SectionHeading are static; the visual cadence is carried by
// SectionDivider's draw-in animation, the hero ambient wash, the cursor
// spotlight on brand cards, and the nav active-section indicator.

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] tracking-widest uppercase text-shremp-orange mb-5">
      {children}
    </p>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.02em] text-ink">
      {children}
    </h2>
  );
}

/**
 * SectionDivider — 1px hairline that draws in left-to-right as the section
 * enters the viewport, with a 4px shremp-orange tick at the right end that
 * fades in once the line completes. Replaces the static `border-t` on each
 * content section so the page reads alive without scroll-jacking.
 */
export function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative h-px w-full" aria-hidden>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "left" }}
        className="absolute inset-0 h-px bg-[var(--hairline)]"
      />
      <motion.span
        initial={{ opacity: 0, scale: 0.6 }}
        animate={
          inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }
        }
        transition={{ duration: 0.35, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-shremp-orange"
      />
    </div>
  );
}
