import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/sections/Footer";
import { brands } from "@/lib/brands";

// Stub route — links to the home brands section for v0.
// When a standalone Shremps page is built, replace this with the full brand site.
export const metadata = { title: "Shremps" };

export default function ShrempsBrandPage() {
  const brand = brands.find((b) => b.slug === "shremps");

  return (
    <>
      <Nav />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 sm:px-10 py-32">
          <p className="font-mono text-[11px] tracking-widest uppercase text-shremp-orange mb-5">
            // brand
          </p>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-0.02em]">
            {brand?.name ?? "Shremps"}
          </h1>
          <p className="mt-4 text-lg text-ink/70">{brand?.descriptor}</p>
          <p className="mt-6 text-base text-ink/80 leading-relaxed">
            {brand?.body}
          </p>
          <p className="mt-12 font-mono text-sm text-ink/50">
            // standalone Shremps site coming. for now ↓
          </p>
          <Link
            href="/#brands"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-shremp-orange transition-colors"
          >
            ← Back to the studio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
