import { Star } from "lucide-react";
import Reveal from "./Reveal";
import { lawyers } from "@/lib/data";

function initials(name: string) {
  return name
    .replace(/^(Dr\.|Dra\.)\s*/, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export default function Lawyers() {
  return (
    <section id="advogados" className="relative bg-ink py-28 lg:py-36 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="relative max-w-content mx-auto px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <span className="eyebrow text-white/70 [&::before]:text-white/70">Advogados</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl text-white leading-tight">
            Sólida formação, décadas de experiência combinadas
          </h2>
          <p className="mt-5 text-white/60 leading-relaxed">
            Nossos advogados possuem sólida formação acadêmica, além de uma grande experiência
            adquirida ao longo de mais de 15 anos de carreira, com passagens e posições de
            destaque em grandes escritórios de advocacia, departamentos jurídicos de empresas e
            atuação de forma autônoma.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {lawyers.map((l, i) => (
            <Reveal key={l.slug} delay={i * 0.12} direction="up">
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.07] hover:border-petrol/40 hover:-translate-y-1.5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-petrol to-petrol-hover font-display text-lg text-white">
                  {initials(l.name)}
                </div>
                <h3 className="mt-6 font-display text-xl text-white">{l.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest2 text-gold">{l.role}</p>
                <p className="mt-4 text-sm text-white/60 leading-relaxed">{l.bio}</p>

                <div className="mt-7 flex items-center gap-6 border-t border-white/10 pt-5">
                  <div>
                    <p className="font-display text-xl text-white">{l.years}</p>
                    <p className="text-[11px] text-white/45">{l.yearsLabel}</p>
                  </div>
                  {l.rating && (
                    <div className="flex items-center gap-1.5">
                      <Star size={16} className="text-gold fill-gold" />
                      <div>
                        <p className="font-display text-sm text-white">{l.rating}</p>
                        <p className="text-[11px] text-white/45">{l.ratingLabel}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
