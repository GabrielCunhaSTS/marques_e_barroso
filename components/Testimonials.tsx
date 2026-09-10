import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="relative bg-white py-28 lg:py-36 overflow-hidden">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <Reveal className="max-w-xl">
            <span className="eyebrow">Depoimentos de clientes</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl text-ink leading-tight">
              A confiança de quem já foi atendido
            </h2>
          </Reveal>

          <Reveal direction="right">
            <div className="flex items-center gap-3 rounded-2xl border border-ink/8 bg-cloud px-6 py-4">
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold" />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-ink">5,0 Excelente</span>
                <span className="block text-xs text-slate">
                  com base em 102 avaliações no Google
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.1}>
              <figure className="h-full rounded-2xl border border-ink/8 bg-cloud/50 p-7 transition-all duration-300 hover:border-petrol/25 hover:shadow-[0_20px_45px_-28px_rgba(15,59,99,0.35)]">
                <Quote size={20} className="text-petrol/30" />
                <blockquote className="mt-4 text-sm text-ink/80 leading-relaxed">
                  &ldquo;{t.body}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-ink/8 pt-4">
                  <span className="text-sm font-semibold text-ink">{t.name}</span>
                  <span className="text-xs text-slate">{t.date}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
