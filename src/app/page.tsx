"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Marquee from "@/components/Marquee";
import Expertises from "@/components/Expertises";
import InteractiveDemo from "@/components/InteractiveDemo";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import ScrollToTop from "@/components/ScrollToTop";
import ContactButton from "@/components/ContactButton";
import { personalInfo, stackAndTools } from "@/data/cvData";
import Image from "next/image";
import { ExternalLink, Sun, Moon } from "lucide-react";

export default function Home() {
  const [isLightMode, setIsLightMode] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    url: "https://misterth.github.io/Portfolio",
    email: personalInfo.email,
    telephone: personalInfo.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    knowsAbout: stackAndTools,
    sameAs: [
      "https://www.linkedin.com/in/thierry-thiesson-7887501/",
      "https://mist3rth.github.io/presentMe/",
    ],
    alumniOf: [
      { "@type": "Organization", name: "Les Gobelins" },
      { "@type": "Organization", name: "Université Paris Jussieu" },
      { "@type": "Organization", name: "MIT OpenCourseWare" },
    ],
    worksFor: {
      "@type": "Organization",
      name: "Proximity Paris (BBDO Group)",
    },
  };

  return (
    <main className="relative bg-background overflow-hidden selection:bg-accent/30 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Background gradients techniques/futuristes (Mode Sombre) */}
      <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-10%] w-[40%] h-[40%] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <Navbar />
      <Hero />

      {/* Theme Switch Section - Juste avant ValueProposition */}
      <div className="flex justify-center py-12 bg-background relative z-20">
        <button 
          onClick={() => setIsLightMode(!isLightMode)}
          className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-all group shadow-2xl backdrop-blur-md"
          aria-label="Changer le thème"
        >
          <div className={`p-2 rounded-full transition-all duration-300 ${!isLightMode ? 'bg-accent text-white' : 'text-gray-500'}`}>
            <Moon size={18} />
          </div>
          
          <div className="w-10 h-5 bg-white/10 rounded-full relative p-0.5 flex items-center">
            <div className={`w-4 h-4 bg-accent rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] ${isLightMode ? 'translate-x-5' : 'translate-x-0'}`} />
          </div>

          <div className={`p-2 rounded-full transition-all duration-300 ${isLightMode ? 'bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]' : 'text-gray-500'}`}>
            <Sun size={18} />
          </div>
        </button>
      </div>

      {/* Wrapper pour les sections pouvant basculer en mode clair */}
      <div className={`${isLightMode ? 'light-mode' : ''} transition-colors duration-500`}>
        <ValueProposition />
        <InteractiveDemo />
        <Expertises />
        <Marquee />
        <Timeline />
        <Testimonials />
      </div>

      {/* Footer / CTA (Orientation Recrutement CDI) */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-24 px-6 relative bg-[#030303] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjY1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Portrait de l'expert en design "Arch" (Arche) */}
          <div className="w-full md:w-5/12 relative h-[350px] md:h-[450px] flex items-end justify-center md:justify-start">
            <div className="relative w-[300px] h-[350px] md:h-[420px] rounded-t-full border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.15)]">
              {/* Desktop & Tablet : Regard Face */}
              <div className="hidden min-[851px]:block absolute inset-0">
                <Image 
                  src="/Portfolio/man.webp" 
                  alt="Thierry Thiesson" 
                  fill
                  className="object-cover object-center"
                />
              </div>
              {/* Mobile : Regard Bas (orienté vers le CTA) */}
              <div className="block min-[851px]:hidden absolute inset-0">
                <Image 
                  src="/Portfolio/manDown.webp" 
                  alt="Thierry Thiesson" 
                  fill
                  className="object-cover object-center"
                />
              </div>
              {/* Fade noir en bas pour intégrer l'arche en douceur */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-80 pointer-events-none"></div>
            </div>
          </div>

          {/* Copywriting Orienté Recrutement / CDI */}
          <div className="w-full md:w-7/12 text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              L'architecte technique qui manque à votre équipe.
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Je ne cherche pas de missions freelances éphémères. Mon objectif est d'intégrer une entreprise ambitieuse pour y construire une <strong>architecture email souveraine</strong>, éliminer votre dette technique et industrialiser votre production sur le long terme.
            </p>
            <div className="flex flex-col min-[851px]:flex-row gap-6 items-center">
              <ContactButton label="Organiser un entretien" variant="primary" />
              <div className="flex flex-col text-sm text-gray-400 font-mono text-center min-[851px]:text-left">
                <span className="text-green-400 flex items-center gap-2 justify-center min-[851px]:justify-start">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  Recherche active (CDI)
                </span>
                <span className="mt-1">Paris / Île-de-France / Hybride</span>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      <footer className="bg-[#030303] border-t border-white/5 py-12 px-6 flex flex-col items-center gap-6 text-sm text-gray-400 relative z-10 text-center">
        <p className="font-light tracking-wide italic">© {new Date().getFullYear()} {personalInfo.name}. Construit selon la méthode BMAD.</p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 font-mono text-xs text-white/90">
          <a 
            href="https://mist3rth.github.io/Reflex.io/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-accent transition-all duration-300 underline-offset-4 hover:underline decoration-accent/30"
          >
            Journal Reflex.io (CRO & Biais cognitifs) <ExternalLink size={12} className="opacity-50" />
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-accent transition-all duration-300 underline-offset-4 hover:underline decoration-accent/30"
          >
            Linkedin <ExternalLink size={12} className="opacity-50" />
          </a>
          <a 
            href="/Portfolio/cv-thierry-thiesson.pdf" 
            target="_blank" 
            className="flex items-center gap-2 hover:text-accent transition-all duration-300 underline-offset-4 hover:underline decoration-accent/30"
          >
            Télécharger le CV <ExternalLink size={12} className="opacity-50" />
          </a>
          <a 
            href="https://mist3rth.github.io/presentMe/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-accent transition-all duration-300 underline-offset-4 hover:underline decoration-accent/30"
          >
            Archives & Compétences complémentaires <ExternalLink size={12} className="opacity-50" />
          </a>
        </div>
      </footer>
      
      <ScrollToTop />
    </main>
  );
}
