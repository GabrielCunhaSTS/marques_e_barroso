import { Scale, Instagram, Linkedin, Facebook } from "lucide-react";
import { nav, contact, siteMeta } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60 pt-20 pb-10">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <a href="#inicio" className="flex items-center gap-2 font-display text-lg text-white">
              <Scale size={18} strokeWidth={1.5} className="text-gold" />
              Marques &amp; Barroso
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              {siteMeta.description}
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Redes sociais"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest2 text-white/40 mb-5">
              Menu
            </h3>
            <ul className="space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-gold transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest2 text-white/40 mb-5">
              Contato
            </h3>
            <ul className="space-y-3 text-sm">
              {contact.phones.map((p) => (
                <li key={p.value}>{p.value}</li>
              ))}
              <li className="pt-1">{contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>Copyright {new Date().getFullYear()} – MB Advocacia – Direito Criminal e Cível.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
