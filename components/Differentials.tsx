import { BriefcaseBusiness, MessageSquareText, ShieldCheck, HeartHandshake } from "lucide-react";
import Reveal from "./Reveal";
import { differentials } from "@/lib/data";

const icons = [BriefcaseBusiness, MessageSquareText, ShieldCheck, HeartHandshake];

export default function Differentials() {
  return (
    <section className="relative bg-cloud py-28 lg:py-36">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <span className="eyebrow">Diferenciais</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl text-ink leading-tight">
            Por que escolher o Marques e Barroso
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {differentials.map((d, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={d.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl bg-white border border-ink/8 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-24px_rgba(15,59,99,0.35)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-petrol-light text-petrol">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-display text-lg text-ink leading-snug">{d.title}</h3>
                  <p className="mt-3 text-sm text-slate leading-relaxed">{d.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
