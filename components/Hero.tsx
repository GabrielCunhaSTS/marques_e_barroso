"use client";

import { motion } from "framer-motion";
import { ArrowRight, ScrollText } from "lucide-react";
import { hero } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-ink"
    >
      {/* Backdrop: layered petrol gradients + fine architectural grid, no stock photography */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 100% at 15% 0%, #123f68 0%, #0c2843 42%, #0a1c30 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute inset-0 grain" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 text-white/60 text-xs font-semibold tracking-widest2 uppercase mb-8"
        >
          <ScrollText size={16} strokeWidth={1.5} />
          Direito Criminal &amp; Cível
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-balance text-[2.1rem] leading-[1.18] sm:text-5xl sm:leading-[1.15] lg:text-[3.4rem] lg:leading-[1.12] text-white max-w-4xl font-medium"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-2xl text-white/70 text-base sm:text-lg leading-relaxed"
        >
          {hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contato"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-petrol px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-petrol-hover hover:shadow-xl hover:shadow-petrol/30"
          >
            Falar com um advogado
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            Conheça o escritório
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/15 pt-10 max-w-3xl"
        >
          {hero.stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl text-white">{s.value}</dt>
              <dd className="mt-1 text-xs text-white/55 tracking-wide">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
