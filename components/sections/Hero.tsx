"use client";

import { motion } from "framer-motion";

// Hero subhead — locked v0 line per brief.
// Alternate drafts kept inline for Hunter to swap during v0 review:
//   "Original brands, characters, and worlds — built independently."
//   "We make worlds. The kind that travel across formats and outlive a launch."
const SUBHEAD =
  "We make original brands, characters, and worlds — for kids, for collectors, and for whatever comes next.";

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 pt-20 pb-24 sm:pt-28 sm:pb-36">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[11px] tracking-widest uppercase text-shremp-orange mb-6 sm:mb-8"
        >
          // independent studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="
            text-[44px] leading-[1.02] sm:text-7xl md:text-8xl lg:text-9xl
            font-semibold tracking-[-0.025em] text-ink
            max-w-5xl
          "
        >
          A studio for original worlds.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 max-w-2xl text-base sm:text-lg text-ink/70 leading-relaxed"
        >
          {SUBHEAD}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-12 flex flex-wrap items-center gap-3"
        >
          <a
            href="#brands"
            className="
              inline-flex items-center justify-center h-11 px-5
              rounded-full bg-ink text-paper text-sm font-medium
              hover:bg-shremp-orange transition-colors
            "
          >
            See the brands
          </a>
          <a
            href="#work-with-us"
            className="
              inline-flex items-center justify-center h-11 px-5
              rounded-full border border-ink/15 text-ink text-sm font-medium
              hover:border-ink/40 hover:text-shremp-orange transition-colors
            "
          >
            Work with us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
