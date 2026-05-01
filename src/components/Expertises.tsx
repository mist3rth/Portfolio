"use client";

import { expertises } from "@/data/cvData";
import { Code, Layout, Users, BookOpen, Zap, MonitorSmartphone } from "lucide-react";
import { useRef, useState, useCallback } from "react";

const getIcon = (id: string) => {
  switch (id) {
    case "architecture": return <Code className="w-8 h-8 text-accent drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />;
    case "design-system": return <Layout className="w-8 h-8 text-accent drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />;
    case "pilotage": return <Users className="w-8 h-8 text-accent drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />;
    case "formation": return <BookOpen className="w-8 h-8 text-accent drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />;
    case "security": return <Zap className="w-8 h-8 text-accent drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />;
    case "responsive": return <MonitorSmartphone className="w-8 h-8 text-accent drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />;
    default: return <Code className="w-8 h-8 text-accent" />;
  }
};

// ─── Card Individuelle ────────────────────────────────────────────────────────
function ExpertiseCard({ exp, isActive = true }: { exp: typeof expertises[0], isActive?: boolean }) {
  return (
    <div className={`relative group p-[1px] rounded-3xl overflow-hidden min-h-[340px] h-full transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
      {/* Animated Gradient Border (Glassmorphism Touch) */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-accent/30 opacity-30 group-hover:opacity-100 transition-opacity duration-500 z-0 rounded-3xl"></div>
      
      <div className="glass-panel p-[20px] md:p-10 relative h-full w-full rounded-[23px] flex flex-col justify-between overflow-hidden transition-all duration-500 group-hover:-translate-y-1 bg-[#050505]/60 cursor-pointer">
        
        {/* Surgical Blur Spot */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/30 rounded-full blur-[40px] group-hover:bg-accent/40 transition-colors duration-500 pointer-events-none"></div>

        {/* Code Background on hover (Matrix effect) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 z-0 pointer-events-none mix-blend-screen">
          <pre className="p-6 text-[10px] text-accent font-mono whitespace-pre-wrap h-full overflow-hidden font-bold leading-relaxed">
            {exp.codeSnippet}
            {"\n\n"}
            {exp.codeSnippet}
          </pre>
        </div>
        
        <div className="relative z-10">
          <div className="mb-8 p-4 bg-white/5 border border-white/10 backdrop-blur-xl w-fit rounded-2xl group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            {getIcon(exp.id)}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 tracking-tight drop-shadow-md">{exp.title}</h3>
          <p className="text-secondary leading-relaxed text-sm md:text-base font-light">{exp.description}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Carrousel Mobile ─────────────────────────────────────────────────────────
function MobileCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const slideWidth = track.scrollWidth / expertises.length;
    const idx = Math.round(track.scrollLeft / slideWidth);
    setActiveIndex(Math.max(0, Math.min(idx, expertises.length - 1)));
  }, []);

  return (
    <div className="relative">
      {/* Dots de navigation */}
      <div className="flex justify-center gap-1.5 mb-6">
        {expertises.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === activeIndex ? "w-6 bg-accent" : "w-1.5 bg-white/20"
            }`}
          />
        ))}
      </div>

      {/* Track scrollable */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-1"
        style={{
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
          paddingRight: "15vw", // Peek effect
        }}
      >
        {expertises.map((exp, i) => (
          <div
            key={exp.id}
            className="shrink-0 snap-start"
            style={{ width: "82vw" }}
          >
            <ExpertiseCard exp={exp} isActive={i === activeIndex} />
          </div>
        ))}
      </div>

    </div>
  );
}

// ─── Grille Desktop ───────────────────────────────────────────────────────────
function DesktopGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {expertises.map((exp) => (
        <ExpertiseCard key={exp.id} exp={exp} />
      ))}
    </div>
  );
}

// ─── Composant Principal ──────────────────────────────────────────────────────
export default function Expertises() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10">
      <div className="mb-20 md:w-2/3">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">L'Intelligence du Code.</h2>
        <p className="text-secondary text-xl font-light">La perfection n'est pas une option, c'est le standard. Architecture "Bulletproof", Accessibilité WCAG AA, Design Systems et sécurité absolue.</p>
      </div>

      <div className="md:hidden">
        <MobileCarousel />
      </div>
      
      <div className="hidden md:block">
        <DesktopGrid />
      </div>
    </section>
  );
}
