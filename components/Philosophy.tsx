import Reveal from "@/components/Reveal";
import { philosophy } from "@/data/content";

export default function Philosophy() {
  return (
    <section id="philosophy" className="px-6 py-32 sm:py-44">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <span className="eyebrow">Philosophy</span>
          <h2 className="mt-8 max-w-2xl font-serif text-4xl font-light leading-tight text-stone-light sm:text-5xl">
            Principles that do not
            <span className="italic text-gold"> bend with the market</span>
          </h2>
        </Reveal>

        <div className="mt-24">
          {philosophy.map((p, i) => (
            <Reveal key={p.index} delay={i * 150}>
              <article className="group grid gap-6 border-t border-white/10 py-14 last:border-b sm:grid-cols-12 sm:gap-10">
                <div className="sm:col-span-2">
                  <span className="font-serif text-2xl font-light text-gold/70 transition-colors duration-700 group-hover:text-gold">
                    {p.index}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-normal text-stone-light sm:col-span-4 sm:text-3xl">
                  {p.title}
                </h3>
                <p className="text-[15px] font-light leading-relaxed text-stone-dim sm:col-span-6">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
