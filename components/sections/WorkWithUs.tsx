import { SectionLabel, SectionHeading } from "./_shared";

const OFFERINGS = [
  {
    title: "Collaborations",
    body: "Co-created IP, music partnerships, character licensing, cross-brand projects.",
  },
  {
    title: "Client work",
    body: "Brand worldbuilding, character design, original content, IP development. Selective.",
  },
];

export function WorkWithUs() {
  return (
    <section
      id="work-with-us"
      className="border-t border-[var(--hairline)] scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-28">
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <SectionLabel>// work with us</SectionLabel>
          <SectionHeading>An invitation, not a menu.</SectionHeading>
          <p className="mt-4 text-base sm:text-lg text-ink/60 leading-relaxed">
            We&apos;re open to a small number of collaborations and client
            engagements where the fit is right.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {OFFERINGS.map((item) => (
            <div
              key={item.title}
              className="
                p-8 sm:p-10
                border border-[var(--hairline)] rounded-md
                bg-paper hover:border-ink/30 transition-colors
              "
            >
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-base text-ink/70 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-base sm:text-lg text-ink/70">
          If something here fits,{" "}
          <a
            href="#contact"
            className="text-ink underline underline-offset-4 decoration-ink/30 hover:text-shremp-orange hover:decoration-shremp-orange transition-colors"
          >
            send a note
          </a>
          .
        </p>
      </div>
    </section>
  );
}
