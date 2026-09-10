import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { siteMeta, contact } from "@/lib/data";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: `${siteMeta.name} | Advocacia Criminal e Cível`,
    template: `%s | ${siteMeta.name}`,
  },
  description: siteMeta.description,
  keywords: [
    "advocacia criminal",
    "advocacia cível",
    "advogado São Vicente",
    "advogado criminalista",
    "direito imobiliário",
    "direito do consumidor",
    "Marques e Barroso Advogados",
  ],
  alternates: { canonical: siteMeta.url },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteMeta.url,
    siteName: siteMeta.name,
    title: `${siteMeta.name} | Advocacia Criminal e Cível`,
    description: siteMeta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMeta.name} | Advocacia Criminal e Cível`,
    description: siteMeta.description,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: siteMeta.name,
  description: siteMeta.description,
  url: siteMeta.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Benjamin Constant, 61 - sala 504 - Centro",
    addressLocality: "São Vicente",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  telephone: contact.phones.map((p) => p.value),
  areaServed: "BR",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "102",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
