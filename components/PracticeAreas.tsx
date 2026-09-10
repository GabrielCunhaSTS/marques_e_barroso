import { ShieldAlert, Scale3d, Check, LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import { areas } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  criminal: ShieldAlert,
  civel: Scale3d,
};

export default function PracticeAreas() {
  return (
    <section id="areas" className="relative bg-white py-28 lg:py-36">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <span className="eyebrow">{areas.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl text-ink leading-tight">
            {areas.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {areas.items.map((area, i) => {
            const Icon = icons[area.key];
            return (
              <Reveal key={area.key} direction={i === 0 ? "left" : "right"} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-ink/8 bg-cloud/50 p-9 lg:p-10 transition-all duration-500 hover:border-petrol/25 hover:shadow-[0_30px_70px_-30px_rgba(15,59,99,0.3)]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-petrol/5 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0"
                  />
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-petrol text-white">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl text-ink">{area.title}</h3>
                  <p className="mt-4 text-slate leading-relaxed">{area.body}</p>

                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full border border-petrol/15 bg-white px-3.5 py-1.5 text-xs font-medium text-ink/75"
                      >
                        <Check size={12} className="text-petrol" strokeWidth={2.5} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
