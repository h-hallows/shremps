import Link from "next/link";

const FOOTER_LINKS = [
  { href: "#brands", label: "Brands" },
  { href: "#studio", label: "Studio" },
  { href: "#work-with-us", label: "Work with us" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--hairline)] mt-auto">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10">
          <div>
            <Link
              href="/"
              className="text-2xl font-semibold tracking-tight text-ink hover:text-shremp-orange transition-colors"
            >
              Shremps Studios
            </Link>
            <p className="mt-3 font-mono text-xs text-ink/50">
              A studio for original worlds.
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/70">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="hover:text-shremp-orange transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-[var(--hairline)]">
          <p className="font-mono text-[11px] tracking-wider text-ink/45">
            © {year} Shremps Studios. Made on the internet.
          </p>
        </div>
      </div>
    </footer>
  );
}
