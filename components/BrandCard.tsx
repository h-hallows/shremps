"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { MouseEvent as ReactMouseEvent } from "react";
import { SocialIcon } from "./SocialIcon";
import type { Brand } from "@/lib/brands";

// Each brand card is a "world preview" — not a logo grid.
// Cards carry their own brand colors as a subtle border/edge so the
// studio page reads neutral while each card feels like its world.

// Per-brand spotlight palettes. Shremps gets the studio orange; Shrempies
// gets a softer rose so the rainbow strip and card glow share a register.
const SPOTLIGHT_COLOR: Record<string, string> = {
  "shremp-orange": "rgba(255, 90, 31, 0.16)",
  rainbow: "rgba(232, 121, 198, 0.18)",
};

export function BrandCard({ brand, index }: { brand: Brand; index: number }) {
  // Mouse-tracked spotlight — values are read by useMotionTemplate below.
  // useMotionValue keeps the updates off the React render path.
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  function handleMouseMove(e: ReactMouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }
  function handleMouseLeave() {
    mouseX.set(-200);
    mouseY.set(-200);
  }

  if (brand.status === "placeholder") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
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
  const spotlightColor =
    SPOTLIGHT_COLOR[brand.accent ?? ""] ?? "rgba(255, 90, 31, 0.14)";

  // Composed dynamically via useMotionTemplate so the radial-gradient updates
  // on every mousemove without a React re-render.
  const spotlightStyle = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 70%)`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        group relative h-full
        bg-paper border border-[var(--hairline)] rounded-md
        flex flex-col overflow-hidden
        transition-colors duration-300
        hover:border-ink/30
      "
    >
      {/*
        Cursor-tracked spotlight — single radial-gradient layer that follows
        the cursor. Lives below content but above the card background; lifts
        opacity on hover only so resting state stays clean.
      */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: spotlightStyle }}
      />

      {/* Brand-color edge strip — Shrempies = soft rainbow gradient,
          Shremps = studio orange. */}
      <div
        className={
          isRainbow
            ? "relative h-1 w-full bg-gradient-to-r from-rose-400 via-amber-300 via-emerald-300 via-sky-400 to-violet-400"
            : "relative h-1 w-full bg-shremp-orange"
        }
        aria-hidden
      />

      <div className="relative p-8 sm:p-10 flex-1 flex flex-col gap-6">
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
                group/visit inline-flex items-center gap-1.5 text-sm font-medium
                text-ink hover:text-shremp-orange transition-colors
              "
            >
              <span className="link-underline">Visit {brand.name}</span>
              <ArrowUpRight
                size={16}
                strokeWidth={1.75}
                className="
                  transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                  group-hover/visit:translate-x-[3px] group-hover/visit:-translate-y-[3px]
                "
              />
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
