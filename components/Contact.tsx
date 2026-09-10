import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { contact } from "@/lib/data";

export default function Contact() {
  const mapQuery = encodeURIComponent(contact.address);

  return (
    <section id="contato" className="relative bg-cloud py-28 lg:py-36">
      <div className="max-w-content mx-auto px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <span className="eyebrow">Entre em contato conosco</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl text-ink leading-tight">
            Fale com um advogado
          </h2>
          <p className="mt-5 text-slate leading-relaxed">
            Faça seu cadastro abaixo e entraremos em contato para analisar seu caso com mais
            detalhes e de forma personalizada.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <Reveal direction="left">
            <div className="rounded-3xl border border-ink/8 bg-white p-8 lg:p-10 h-full">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1} className="flex flex-col gap-6">
            <div className="rounded-3xl border border-ink/8 bg-ink p-8 lg:p-10 text-white flex-1">
              <h3 className="font-display text-xl mb-6">Informações de contato</h3>
              <ul className="space-y-5 text-sm">
                {contact.phones.map((p) => (
                  <li key={p.value} className="flex items-start gap-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                      <Phone size={16} strokeWidth={1.5} />
                    </span>
                    <span>
                      <a href={`tel:${p.value.replace(/\D/g, "")}`} className="hover:text-gold transition-colors">
                        {p.value}
                      </a>
                      <span className="block text-white/45 text-xs mt-0.5">{p.label}</span>
                    </span>
                  </li>
                ))}
                <li className="flex items-start gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                    <MessageCircle size={16} strokeWidth={1.5} />
                  </span>
                  <span>
                    <a
                      href={`https://wa.me/${contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold transition-colors"
                    >
                      Conversar no WhatsApp
                    </a>
                    <span className="block text-white/45 text-xs mt-0.5">Resposta rápida</span>
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                    <Mail size={16} strokeWidth={1.5} />
                  </span>
                  <span>
                    <a
                      href="mailto:contato@marquesebarroso.adv.br"
                      className="hover:text-gold transition-colors"
                    >
                      contato@marquesebarroso.adv.br
                    </a>
                    <span className="block text-white/45 text-xs mt-0.5">E-mail institucional</span>
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                    <MapPin size={16} strokeWidth={1.5} />
                  </span>
                  <span>
                    {contact.address}
                    <span className="block text-white/45 text-xs mt-0.5">Endereço</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl overflow-hidden border border-ink/8 h-64 lg:h-56">
              <iframe
                title="Localização do escritório"
                src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.4) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
