import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/sections/Footer";
import { brands } from "@/lib/brands";

// Stub route — Shrempies has its own site at shrempies.com.
// This page exists so the URL space is reserved and consistent.
export const metadata = { title: "Shrempies" };

export default function ShrempiesBrandPage() {
  const brand = brands.find((b) => b.slug === "shrempies");

  return (
    <>
      <Nav />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 sm:px-10 py-32">
          <p className="font-mono text-[11px] tracking-widest uppercase text-shremp-orange mb-5">
            // brand
          </p>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-0.02em]">
            {brand?.name ?? "Shrempies"}
          </h1>
          <p className="mt-4 text-lg text-ink/70">{brand?.descriptor}</p>
          <p className="mt-6 text-base text-ink/80 leading-relaxed">
            {brand?.body}
          </p>

          {brand?.website && (
            <a
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center justify-center h-11 px-5 rounded-full bg-ink text-paper text-sm font-medium hover:bg-shremp-orange transition-colors"
            >
              Visit shrempies.com →
            </a>
          )}

          <div className="mt-8">
            <Link
              href="/#brands"
              className="text-sm font-medium text-ink/70 hover:text-shremp-orange transition-colors"
            >
              ← Back to the studio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
