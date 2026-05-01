import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mist3rth.github.io/Portfolio/"),
  title: "Thierry Thiesson | Email Architect Senior — CDI Paris",
  description: "25 ans d'expertise en architecture email HTML/CSS bulletproof. Chef de Projet CRM & Email Architect Senior chez Proximity Paris (BBDO). Disponible en CDI — Paris / Île-de-France / Hybride.",
  keywords: ["Email Architect", "CRM Technique", "HTML Email", "Bulletproof Email", "Salesforce Marketing Cloud", "Adobe Campaign", "Proximity Paris", "BBDO", "CDI Paris", "Chef de Projet CRM"],
  authors: [{ name: "Thierry Thiesson", url: "https://www.linkedin.com/in/thierry-thiesson-7887501/" }],
  openGraph: {
    title: "Thierry Thiesson | Email Architect Senior — Disponible en CDI",
    description: "25 ans d'expertise en architecture email HTML/CSS bulletproof. Disponible en CDI — Paris / Hybride.",
    url: "https://mist3rth.github.io/Portfolio/",
    type: "profile",
    locale: "fr_FR",
    images: [{ url: "/Portfolio/og-image.webp", width: 1200, height: 630, alt: "Thierry Thiesson — Email Architect Senior" }],
  },
  alternates: {
    canonical: "https://mist3rth.github.io/Portfolio/",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${plusJakartaSans.variable} h-full antialiased`}
      style={{ backgroundColor: '#030303' }}
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          html, body { background-color: #030303 !important; color: #ffffff; }
          /* Pre-hide content to avoid FOUC/Flash */
          .js-loading body { opacity: 0; }
        ` }} />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#030303] text-foreground overflow-x-hidden selection:bg-accent selection:text-white">

        {children}
      </body>
    </html>
  );
}
