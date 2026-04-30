import { BrandCard } from "@/components/BrandCard";
import { brands } from "@/lib/brands";
import { SectionLabel, SectionHeading } from "./_shared";

export function Brands() {
  return (
    <section
      id="brands"
      className="border-t border-[var(--hairline)] scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-28">
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <SectionLabel>// brands</SectionLabel>
          <SectionHeading>The portfolio.</SectionHeading>
          <p className="mt-4 text-base sm:text-lg text-ink/60 leading-relaxed">
            Two active worlds today. More on the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
          {brands.map((brand, i) => (
            <BrandCard key={brand.slug} brand={brand} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
