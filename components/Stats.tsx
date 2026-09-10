import Reveal from "./Reveal";
import Counter from "./Counter";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section id="reconhecimento" className="relative bg-petrol py-20 lg:py-24">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <Reveal className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest2 uppercase text-white/60">
            § Reconhecimento
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl text-white leading-tight">
            Números que traduzem nosso compromisso
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center lg:text-left">
              <p className="font-display text-4xl sm:text-5xl text-white">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs sm:text-sm text-white/55 tracking-wide">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
