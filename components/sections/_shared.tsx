// Section primitives — shared so each section reads at the same rhythm.
// Section label: small monospace, shremp orange, sits above the heading.
// Section heading: large, tight letter-spacing.

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
