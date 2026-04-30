"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SocialIcon } from "./SocialIcon";
import type { Brand } from "@/lib/brands";

// Each brand card is a "world preview" — not a logo grid.
// Cards carry their own brand colors as a subtle border/edge so the
// studio page reads neutral while each card feels like its world.

export function BrandCard({ brand, index }: { brand: Brand; index: number }) {
  if (brand.status === "placeholder") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="
          relative h-full min-h-[360px] p-8 sm:p-10
          rounded-md border border-dashed border-ink/20
          flex items-center justify-center
          text-ink/40
        "
      >
        <p className="font-mono text-xs tracking-wide uppercase">
          More worlds in development
        </p>
      </motion.div>
    );
  }

  const isRainbow = brand.accent === "rainbow";

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="
        group relative h-full
        bg-paper border border-[var(--hairline)] rounded-md
        flex flex-col overflow-hidden
        transition-colors duration-300
      "
    >
      {/* Brand-color edge strip — Shrempies = soft rainbow gradient,
          Shremps = studio orange. Keeps the studio frame neutral while
          letting each card feel like its own world. */}
      <div
        className={
          isRainbow
            ? "h-1 w-full bg-gradient-to-r from-rose-400 via-amber-300 via-emerald-300 via-sky-400 to-violet-400"
            : "h-1 w-full bg-shremp-orange"
        }
        aria-hidden
      />

      <div className="p-8 sm:p-10 flex-1 flex flex-col gap-6">
        <header className="flex flex-col gap-2">
          <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            {brand.name}
          </h3>
          <p className="text-sm text-ink/60">{brand.descriptor}</p>
        </header>

        <p className="text-base text-ink/80 leading-relaxed">{brand.body}</p>

        {brand.tags.length > 0 && (
          <ul className="flex flex-wrap gap-x-3 gap-y-2 text-[11px] font-mono uppercase tracking-wider text-ink/50">
            {brand.tags.map((tag, i) => (
              <li key={tag} className="flex items-center gap-3">
                <span>{tag}</span>
                {i < brand.tags.length - 1 && <span className="text-ink/20">·</span>}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-6 flex items-center justify-between gap-4 border-t border-[var(--hairline)]">
          {brand.website ? (
            <a
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-1.5 text-sm font-medium
                text-ink hover:text-shremp-orange transition-colors
              "
            >
              <span>Visit {brand.name}</span>
              <ArrowUpRight size={16} strokeWidth={1.75} />
            </a>
          ) : (
            <span className="text-sm text-ink/40 font-mono">— no site yet</span>
          )}

          {brand.socials.length > 0 && (
            <ul className="flex items-center gap-3">
              {brand.socials.map((s) => (
                <li key={s.platform}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${brand.name} on ${s.platform}`}
                    className="block text-ink/60 hover:text-shremp-blue transition-colors"
                  >
                    <SocialIcon platform={s.platform} className="w-[18px] h-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.article>
  );
}
