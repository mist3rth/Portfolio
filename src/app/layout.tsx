import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://misterth.github.io/Portfolio"),
  title: "Thierry Thiesson | Email Architect Senior — CDI Paris",
  description: "25 ans d'expertise en architecture email HTML/CSS bulletproof. Chef de Projet CRM & Email Architect Senior chez Proximity Paris (BBDO). Disponible en CDI — Paris / Île-de-France / Remote.",
  keywords: ["Email Architect", "CRM Technique", "HTML Email", "Bulletproof Email", "Salesforce Marketing Cloud", "Adobe Campaign", "Proximity Paris", "BBDO", "CDI Paris", "Chef de Projet CRM"],
  authors: [{ name: "Thierry Thiesson", url: "https://www.linkedin.com/in/thierry-thiesson-7887501/" }],
  openGraph: {
    title: "Thierry Thiesson | Email Architect Senior — Disponible en CDI",
    description: "25 ans d'expertise en architecture email HTML/CSS bulletproof. Disponible en CDI — Paris / Remote.",
    url: "https://thierry-thiesson.vercel.app",
    type: "profile",
    locale: "fr_FR",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Thierry Thiesson — Email Architect Senior" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thierry Thiesson | Email Architect Senior",
    description: "25 ans d'expertise en architecture email bulletproof. Disponible en CDI Paris/Remote.",
    images: ["/og-image.webp"],
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
      className={`${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden">

        {children}
      </body>
    </html>
  );
}
