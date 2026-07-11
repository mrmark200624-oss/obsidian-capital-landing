import Reveal from "@/components/Reveal";
import { team } from "@/data/content";

export default function Team() {
  return (
    <section id="partners" className="px-6 py-32 sm:py-44">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <span className="eyebrow">Partners</span>
          <h2 className="mt-8 max-w-2xl font-serif text-4xl font-light leading-tight text-stone-light sm:text-5xl">
            Few hands, <span className="italic text-gold">long memories</span>
          </h2>
        </Reveal>

        <div className="mt-24 grid gap-16 sm:grid-cols-3 sm:gap-10">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 150}>
              <article className="group">
                <Portrait seed={i} />
                <h3 className="mt-8 font-serif text-2xl font-normal text-stone-light">
                  {m.name}
                </h3>
                <p className="mt-2 text-[11px] uppercase tracking-widest2 text-gold/80">
                  {m.role}
                </p>
                <p className="mt-4 text-sm font-light leading-relaxed text-stone-dim">
                  {m.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Monochrome placeholder portrait — abstract grayscale silhouette,
 * no external images. Each seed shifts the composition slightly.
 */
function Portrait({ seed }: { seed: number }) {
  const drift = seed * 6;
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-800">
      <svg
        viewBox="0 0 200 250"
        className="h-full w-full opacity-90 grayscale transition-all duration-700 ease-slow group-hover:opacity-100"
        role="img"
        aria-label="Portrait placeholder"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={`bg-${seed}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1d1d1e" />
            <stop offset="100%" stopColor="#121213" />
          </linearGradient>
          <linearGradient id={`fig-${seed}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a4a4c" />
            <stop offset="100%" stopColor="#242425" />
          </linearGradient>
        </defs>
        <rect width="200" height="250" fill={`url(#bg-${seed})`} />
        {/* shoulders */}
        <path
          d={`M${30 - drift} 250 C ${40 - drift} 185 70 172 100 172 C 130 172 ${160 + drift} 185 ${170 + drift} 250 Z`}
          fill={`url(#fig-${seed})`}
        />
        {/* head */}
        <ellipse
          cx={100 + drift / 2}
          cy="112"
          rx="34"
          ry="42"
          fill={`url(#fig-${seed})`}
        />
        {/* subtle rim light */}
        <path
          d={`M${66 + drift / 2} 100 C ${68 + drift / 2} 78 ${84 + drift / 2} 70 ${100 + drift / 2} 70`}
          stroke="#6e6a60"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
      </svg>
      <div className="pointer-events-none absolute inset-0 border border-white/5" />
    </div>
  );
}
