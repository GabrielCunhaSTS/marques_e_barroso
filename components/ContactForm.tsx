"use client";

import { useState, FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // TODO: conectar a um endpoint real (rota de API, e-mail transacional
    // ou serviço como Formspree) para receber os cadastros deste formulário.
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center text-center rounded-2xl border border-petrol/20 bg-petrol-light px-8 py-16">
        <CheckCircle2 size={40} className="text-petrol" strokeWidth={1.5} />
        <p className="mt-4 font-display text-xl text-ink">Cadastro recebido</p>
        <p className="mt-2 text-sm text-slate max-w-xs">
          Obrigado pelo contato. Nossa equipe entrará em contato em breve para analisar o seu
          caso.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-petrol hover:underline"
        >
          Enviar outro cadastro
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Formulário de contato">
      <div>
        <label htmlFor="nome" className="block text-xs font-semibold text-ink/70 mb-2">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          placeholder="Seu nome completo"
          className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-petrol"
        />
      </div>

      <fieldset>
        <legend className="block text-xs font-semibold text-ink/70 mb-2">Área do caso</legend>
        <div className="flex gap-3">
          {["Criminal", "Cível"].map((opt) => (
            <label
              key={opt}
              className="flex-1 cursor-pointer rounded-xl border border-ink/12 px-4 py-3 text-sm text-ink/80 text-center transition-colors has-[:checked]:border-petrol has-[:checked]:bg-petrol-light has-[:checked]:text-petrol"
            >
              <input type="radio" name="area" value={opt} required className="sr-only" />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-ink/70 mb-2">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="seuemail@exemplo.com"
          className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-petrol"
        />
      </div>

      <div>
        <label htmlFor="whatsapp" className="block text-xs font-semibold text-ink/70 mb-2">
          WhatsApp
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          required
          placeholder="(00) 00000-0000"
          className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-petrol"
        />
      </div>

      <div>
        <label htmlFor="mensagem" className="block text-xs font-semibold text-ink/70 mb-2">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          placeholder="Conte brevemente sobre o seu caso"
          className="w-full resize-none rounded-xl border border-ink/12 bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-petrol"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-petrol px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-petrol-hover disabled:opacity-70"
      >
        {status === "sending" && <Loader2 size={16} className="animate-spin" />}
        {status === "sending" ? "Enviando..." : "Enviar Formulário"}
      </button>
    </form>
  );
}
