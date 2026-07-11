import Reveal from "@/components/Reveal";
import { stats } from "@/data/content";

export default function Stats() {
  return (
    <section id="performance" className="bg-ink-900 px-6 py-32 sm:py-44">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <span className="eyebrow">In numbers</span>
        </Reveal>

        <div className="mt-20 grid gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 150}>
              <div>
                <div className="font-serif text-6xl font-light text-stone-light sm:text-7xl">
                  {s.value}
                </div>
                <hr className="hairline-gold mt-6 max-w-[72px]" />
                <div className="mt-5 text-[11px] uppercase tracking-widest2 text-stone-dim">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <p className="mt-24 max-w-lg text-sm font-light leading-relaxed text-stone-dim">
            Figures as of Q2 2026, unaudited, net of all fees. Detailed
            performance history is available to qualified investors upon
            request.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
