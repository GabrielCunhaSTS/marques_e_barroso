# Marques e Barroso Advogados — Site institucional (one page)

Site institucional redesenhado como página única, construído com Next.js 14
(App Router), TypeScript, Tailwind CSS, Framer Motion e Lucide Icons.

Todo o conteúdo jurídico e institucional foi mantido fiel ao site atual
(`marquesebarroso.adv.br`): textos de Sobre, Missão/Visão/Valores, Áreas de
Atuação, perfis dos advogados, diferenciais, depoimentos de clientes,
telefones e endereço. Nada foi resumido ou inventado — apenas reorganizado
visualmente. Todo o conteúdo fica centralizado em `lib/data.ts`, então
qualquer ajuste de texto é feito em um único lugar.

## Como rodar localmente

Pré-requisitos: Node.js 18.18 ou superior.

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Build de produção

```bash
npm run build
npm run start
```

## O que ainda precisa da sua atenção

1. **Formulário de contato** (`components/ContactForm.tsx`): hoje apenas
   simula o envio no front-end. Conecte a uma rota de API própria, a um
   serviço de e-mail transacional (Resend, SendGrid) ou a algo como
   Formspree para receber os cadastros de verdade.
2. **Reconhecimentos**: o site atual não traz prêmios ou menções de imprensa
   verificáveis (ex.: Revista Análise), então a seção "Reconhecimento" usa os
   números reais disponíveis — 15+ anos de atuação e a avaliação do Google
   (5,0 com 102 avaliações). Se o escritório tiver prêmios/menções reais,
   me envie os detalhes que eu incluo.
3. **Fotos da equipe**: não havia fotos hospedadas para reaproveitar, então
   os cards dos advogados usam monogramas estilizados. Envie fotos
   profissionais (mesmo enquadramento/fundo, se possível) para eu substituir
   os monogramas por retratos reais.
4. **E-mail institucional**: usei `contato@marquesebarroso.adv.br` como
   placeholder no rodapé/contato — troque pelo e-mail real em `lib/data.ts`
   se for diferente.
5. **Domínio/Open Graph**: `siteMeta.url` em `lib/data.ts` está apontando
   para `https://marquesebarroso.adv.br`. Ajuste se o domínio final for
   outro, e adicione uma imagem `og-image.jpg` em `/public` para redes
   sociais (Open Graph).

## Estrutura

```
app/            rotas, layout, metadata, sitemap
components/     seções e componentes de UI
lib/data.ts     todo o conteúdo textual do site (fonte única de verdade)
public/         favicon, robots.txt
```

## Deploy

O jeito mais simples é publicar na Vercel (criadora do Next.js):
conecte o repositório em vercel.com/new e o deploy é automático a cada push.
