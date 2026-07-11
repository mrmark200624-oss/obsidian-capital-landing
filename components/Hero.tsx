import Reveal from "@/components/Reveal";
import { fund } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <span className="eyebrow">
            {fund.accessNote} · {fund.established}
          </span>
        </Reveal>

        <Reveal delay={200}>
          <h1 className="mt-10 font-serif text-6xl font-light leading-[1.05] tracking-tight text-stone-light sm:text-7xl md:text-8xl">
            {fund.heroLine1}
            <br />
            <span className="italic text-gold">{fund.heroLine2}</span>
          </h1>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-12 max-w-xl text-base font-light leading-relaxed text-stone-dim sm:text-lg">
            {fund.intro}
          </p>
        </Reveal>

        <Reveal delay={600}>
          <div className="mt-14">
            <a href="#access" id="access" className="btn-outline">
              Request access
            </a>
          </div>
        </Reveal>
      </div>

      {/* bottom line */}
      <Reveal delay={800} className="mx-auto mt-auto w-full max-w-5xl pb-10 pt-24">
        <hr className="hairline" />
        <div className="mt-5 flex items-center justify-between text-[11px] uppercase tracking-widest2 text-stone-dim">
          <span>{fund.tagline}</span>
          <span className="hidden sm:block">Zurich · Singapore · Dubai</span>
        </div>
      </Reveal>
    </section>
  );
}
