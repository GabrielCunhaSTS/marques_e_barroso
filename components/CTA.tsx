import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative bg-ink py-24 lg:py-28 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 140% at 85% 50%, rgba(15,59,99,0.55) 0%, rgba(27,27,27,0) 60%)",
        }}
      />
      <div className="relative max-w-content mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <Reveal direction="left" className="max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl text-white leading-tight text-balance">
            Precisa de orientação jurídica especializada?
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            Nossa equipe está preparada para oferecer soluções jurídicas seguras e estratégicas.
          </p>
        </Reveal>

        <Reveal direction="right">
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-ink transition-all hover:bg-petrol hover:text-white shrink-0"
          >
            Fale conosco
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
