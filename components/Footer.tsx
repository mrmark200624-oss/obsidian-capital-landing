import { disclaimer, footerLinks, fund } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-10 sm:flex-row">
          <a
            href="#top"
            className="font-serif text-base tracking-[0.35em] text-stone-light"
          >
            {fund.wordmark}
          </a>

          <nav className="flex items-center gap-10">
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[11px] uppercase tracking-widest2 text-stone-dim transition-colors duration-500 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <p className="text-[11px] uppercase tracking-widest2 text-stone-dim">
            © {new Date().getFullYear()} {fund.name}
          </p>
        </div>

        <hr className="hairline mt-12" />
        <p className="mx-auto mt-8 max-w-3xl text-center text-[11px] font-light leading-relaxed text-stone-dim/70">
          {disclaimer}
        </p>
      </div>
    </footer>
  );
}
