import { Target, Eye, HeartHandshake } from "lucide-react";
import Reveal from "./Reveal";
import { history, mvv } from "@/lib/data";

export default function About() {
  return (
    <section id="sobre" className="relative bg-white py-28 lg:py-36">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal direction="left">
              <span className="eyebrow">{history.eyebrow}</span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl text-ink leading-tight">
                {history.title}
              </h2>
              <div className="mt-6 space-y-5 text-slate leading-relaxed">
                {history.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="hairline my-8" />
              <p className="text-ink/80 leading-relaxed italic font-display text-lg">
                &ldquo;{history.purpose}&rdquo;
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal direction="right" delay={0.1}>
              <span className="eyebrow">{mvv.eyebrow}</span>
            </Reveal>

            <div className="mt-6 grid sm:grid-cols-1 gap-5">
              <Reveal direction="up" delay={0.05}>
                <MvvCard icon={<Target size={20} strokeWidth={1.5} />} title={mvv.mission.title}>
                  <p className="text-slate leading-relaxed">{mvv.mission.body}</p>
                </MvvCard>
              </Reveal>

              <Reveal direction="up" delay={0.15}>
                <MvvCard icon={<Eye size={20} strokeWidth={1.5} />} title={mvv.vision.title}>
                  <p className="text-slate leading-relaxed">{mvv.vision.body}</p>
                </MvvCard>
              </Reveal>

              <Reveal direction="up" delay={0.25}>
                <MvvCard
                  icon={<HeartHandshake size={20} strokeWidth={1.5} />}
                  title={mvv.values.title}
                >
                  <ul className="space-y-3">
                    {mvv.values.items.map((v, i) => (
                      <li key={i} className="flex gap-3 text-slate leading-relaxed">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-petrol" />
                        {v}
                      </li>
                    ))}
                  </ul>
                </MvvCard>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MvvCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group rounded-2xl border border-ink/8 bg-cloud/60 p-8 transition-all duration-300 hover:border-petrol/25 hover:shadow-[0_20px_50px_-20px_rgba(15,59,99,0.25)]">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-petrol/10 text-petrol transition-colors group-hover:bg-petrol group-hover:text-white">
          {icon}
        </span>
        <h3 className="font-display text-xl text-ink">{title}</h3>
      </div>
      {children}
    </div>
  );
}
