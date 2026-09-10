import { FileSearch, Compass, ShieldCheck, Handshake, Gavel, PhoneCall } from "lucide-react";
import Reveal from "./Reveal";
import { methodology } from "@/lib/data";

const icons = [FileSearch, Compass, ShieldCheck, Handshake, Gavel, PhoneCall];

export default function Methodology() {
  return (
    <section id="metodologia" className="relative bg-cloud py-28 lg:py-36">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <span className="eyebrow">{methodology.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl text-ink leading-tight">
            {methodology.title}
          </h2>
          <p className="mt-5 text-slate leading-relaxed">
            Um fluxo de trabalho claro, do primeiro contato ao encerramento do caso — para que
            você saiba exatamente em que etapa seu processo se encontra.
          </p>
        </Reveal>

        <div className="mt-16 relative">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-petrol/40 via-petrol/15 to-transparent"
          />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-12">
            {methodology.steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={step.number} delay={i * 0.08} className="relative">
                  <li>
                    <div className="flex lg:flex-col items-start lg:items-start gap-4 lg:gap-0">
                      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white border border-petrol/20 text-petrol shadow-sm z-10">
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                      <div className="lg:mt-6">
                        <span className="font-display text-sm text-petrol/70">{step.number}</span>
                        <h3 className="mt-1 font-display text-lg text-ink">{step.title}</h3>
                        <p className="mt-2 text-sm text-slate leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
