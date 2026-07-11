import Reveal from "@/components/Reveal";
import { quote } from "@/data/content";

export default function Quote() {
  return (
    <section className="flex min-h-screen items-center bg-ink-900 px-6 py-32">
      <div className="mx-auto w-full max-w-4xl text-center">
        <Reveal>
          <hr className="hairline-gold mx-auto max-w-[72px]" />
        </Reveal>

        <Reveal delay={200}>
          <blockquote className="mt-14 font-serif text-4xl font-light italic leading-[1.25] text-stone-light sm:text-5xl md:text-6xl">
            “{quote.text}”
          </blockquote>
        </Reveal>

        <Reveal delay={450}>
          <figcaption className="mt-14">
            <div className="text-[12px] uppercase tracking-widest2 text-gold">
              {quote.author}
            </div>
            <div className="mt-2 text-[11px] uppercase tracking-widest2 text-stone-dim">
              {quote.role}
            </div>
          </figcaption>
        </Reveal>

        <Reveal delay={650}>
          <hr className="hairline-gold mx-auto mt-14 max-w-[72px]" />
        </Reveal>
      </div>
    </section>
  );
}
