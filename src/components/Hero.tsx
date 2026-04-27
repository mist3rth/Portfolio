import { personalInfo } from "@/data/cvData";
import ContactButton from "./ContactButton";
import { ArrowRight, Terminal } from "lucide-react";
import Image from "next/image";
import AnimatedCounter from "@/components/AnimatedCounter";
import Typewriter from "@/components/Typewriter";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative w-full pt-20 overflow-hidden">
      
      {/* Background Portrait Image - Full Screen Width */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image 
          src="/Portfolio/hero-portrait-v2.webp" 
          alt="Thierry Thiesson Portrait" 
          fill
          className="object-cover object-[100%_top] md:object-[90%_top] lg:object-right-top"
          priority
          quality={90}
        />
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="space-y-8 w-full max-w-7xl mx-auto px-6 md:px-12 z-10 relative mt-12 pb-20">
        {/* Badge Glassmorphism Chirurgical */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <Terminal size={14} className="text-accent drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          <span className="text-accent font-mono text-xs md:text-sm font-semibold tracking-widest uppercase drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] min-h-[20px] flex items-center">
            <Typewriter text={personalInfo.title} speed={25} />
          </span>
        </div>
        
        <style>{`
          @keyframes slideUpFade {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-up-1 {
            opacity: 0;
            animation: slideUpFade 1s cubic-bezier(0.16, 1, 0.3, 1) 2.2s forwards;
          }
          .animate-slide-up-2 {
            opacity: 0;
            animation: slideUpFade 1s cubic-bezier(0.16, 1, 0.3, 1) 2.8s forwards;
          }
        `}</style>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] text-white tracking-tight drop-shadow-xl flex flex-col gap-2 md:gap-4">
          <span className="animate-slide-up-1 block">Je ne me contente pas de coder des emails.</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-300 text-glow animate-slide-up-2 block">
            Je sécurise vos actifs marketing.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white max-w-3xl leading-relaxed mt-6 font-light drop-shadow-lg">
          Spécialiste de l'architecture email haute performance. Je garantis un rendu 100% conforme sur la totalité du parc de messagerie mondial via une approche "Bulletproof".
        </p>

        <div className="pt-6 flex flex-wrap gap-4 md:gap-6 items-center">
          <ContactButton label="Organiser un entretien" />
          <a 
            href="/Portfolio/cv-thierry-thiesson.pdf" 
            download="CV-Thierry-Thiesson-Email-Architect.pdf"
            className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 text-lg backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/30 flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Télécharger le CV
          </a>
          <a 
            href="https://www.linkedin.com/in/thierry-thiesson-7887501/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 bg-[#0077b5]/10 border border-[#0077b5]/30 hover:bg-[#0077b5]/20 text-white px-6 py-4 rounded-full font-bold transition-all duration-300 text-lg backdrop-blur-md hover:border-[#0077b5]/60 hover:shadow-[0_0_15px_rgba(0,119,181,0.4)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#0077b5" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
            LinkedIn
          </a>
        </div>

        {/* Biais de Réassurance / Social Proof */}
        <div className="pt-12 mt-4 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl">
          <div className="flex flex-col">
            <span className="text-4xl font-extrabold text-white drop-shadow-md">
              <AnimatedCounter end={2500} prefix="+" duration={2000} />
            </span>
            <span className="text-sm font-mono text-accent/80 mt-1 uppercase tracking-wider">Campagnes intégrées</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-extrabold text-white drop-shadow-md">
              <AnimatedCounter end={250} prefix="+" suffix="M" duration={2000} />
            </span>
            <span className="text-sm font-mono text-accent/80 mt-1 uppercase tracking-wider">Emails routés</span>
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1">
            <span className="text-4xl font-extrabold text-white drop-shadow-md">0</span>
            <span className="text-sm font-mono text-accent/80 mt-1 uppercase tracking-wider">Défaut de rendu</span>
          </div>
        </div>
      </div>
      
      {/* Code Decoration subtle */}
      <div className="absolute right-0 bottom-0 opacity-[0.15] pointer-events-none select-none z-0 mix-blend-screen hidden lg:block overflow-hidden h-[400px]">
        <pre className="text-xs leading-[1.4] font-mono text-accent">
{`<!--[if gte mso 9]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" 
xmlns:w="urn:schemas-microsoft-com:office:word" 
href="https://www.krys.com" 
style="height:38px; width:200px; v-text-anchor:middle;" 
arcsize="0%" strokecolor="#1b64d7" fillcolor="#1b64d7">
  <w:anchorlock/>
  <v:textbox inset="0,0,0,0">
    <center style="color:#ffffff; font-family:'Helvetica Neue';">
<![endif]-->`}
        </pre>
      </div>
    </section>
  );
}
