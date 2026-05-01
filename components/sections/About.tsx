import { TeamGrid } from "@/components/TeamGrid";
import { SectionLabel, SectionHeading, SectionDivider } from "./_shared";

export function About() {
  return (
    <section id="studio" className="scroll-mt-16">
      <SectionDivider />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionLabel>// studio</SectionLabel>
            <SectionHeading>About the studio.</SectionHeading>
          </div>

          <div className="lg:col-span-7 max-w-2xl space-y-5 text-base sm:text-lg text-ink/80 leading-relaxed">
            <p>
              Shremps Studios is an independent creative studio building
              original brands, characters, and content from the ground up. We
              make worlds — some for kids, some for collectors, some that
              haven&apos;t been announced yet.
            </p>
            <p>
              The studio is AI-native, which is a polite way of saying we move
              quickly and ship more than we should. Nearly a decade of crypto
              and digital culture in our DNA, applied to IP that travels across
              formats: songs, stories, video, on-chain, off-chain, on-screen,
              in-print. Every brand under Shremps Studios is wholly owned and
              independently produced.
            </p>
          </div>
        </div>

        {/*
          Team & Partners — intentionally low-emphasis.
          This is a credibility cue, not a centerpiece. Resist the urge to make
          it a hero moment. With an empty team[] array it renders a single
          fallback line; populate /lib/team.ts to swap in the grid.
        */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-[var(--hairline)]">
          <p className="font-mono text-[11px] tracking-widest uppercase text-ink/50 mb-6">
            Team &amp; Partners
          </p>
          <TeamGrid />
        </div>
      </div>
    </section>
  );
}
