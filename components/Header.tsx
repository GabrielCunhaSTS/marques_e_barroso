"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Scale } from "lucide-react";
import { nav } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav shadow-[0_1px_0_0_rgba(15,59,99,0.08)]" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="max-w-content mx-auto flex items-center justify-between px-6 lg:px-10 h-20"
      >
        <a
          href="#inicio"
          className="flex items-center gap-2 font-display text-lg tracking-wide text-ink"
        >
          <Scale size={20} strokeWidth={1.5} className="text-petrol" aria-hidden="true" />
          <span>
            Marques <span className="text-petrol">&amp;</span> Barroso
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9 text-[13px] font-medium tracking-wide text-ink/80">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="relative py-2 hover:text-petrol transition-colors group">
                {item.label}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-petrol transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden lg:inline-flex items-center rounded-full bg-petrol px-6 py-2.5 text-[13px] font-semibold text-white transition-all hover:bg-petrol-hover hover:shadow-lg hover:shadow-petrol/20"
        >
          Fale Conosco
        </a>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-ink p-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-petrol/10 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-6 gap-5 text-sm font-medium text-ink">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contato"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center rounded-full bg-petrol px-6 py-2.5 text-[13px] font-semibold text-white"
                >
                  Fale Conosco
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
