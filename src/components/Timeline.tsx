"use client";
import { experiences } from "@/data/cvData";
import IsometricBackground from "@/components/IsometricBackground";

export default function Timeline() {
  return (
    <section className="py-24 w-full relative z-10 overflow-hidden" id="parcours">
      {/* Background Isométrique - Uniquement sur Desktop pour performance mobile */}
      <div className="hidden md:block">
        <IsometricBackground />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Panneau Glassmorphism central pour protéger le texte de l'arrière-plan très vif */}
        <div className="bg-[#050505]/80 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="mb-16 md:w-full">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Le Parcours.</h2>
            <p className="text-xl font-bold text-accent mb-4">25 ans d'expertise CRM chez Proximity Paris.</p>
            <p className="text-secondary text-lg font-light leading-relaxed">
              Un quart de siècle dédié à l'industrialisation de la production e-mail et à l'innovation technique. De l'intégration manuelle des débuts aux architectures natives complexes d'aujourd'hui, j'ai structuré la production CRM des plus grandes marques (Mercedes, Krys, P&G) avec une obsession constante : la rigueur, l'indépendance technologique et l'excellence du rendu.
            </p>
          </div>

      <div className="relative border-l-2 border-accent/20 pl-8 md:pl-12 space-y-16 py-4 group/timeline">
        {/* Animated line on hover/scroll */}
        <div className="absolute inset-y-0 left-[-2px] w-[2px] bg-accent h-0 group-hover/timeline:h-full transition-all duration-[2000ms] ease-in-out"></div>

        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative group">
            {/* Dot */}
            <div className="absolute w-6 h-6 bg-black border-4 border-accent rounded-full -left-[45px] md:-left-[61px] top-1 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(59,130,246,0.6)] z-10"></div>
            
            <div className="bg-black/40 backdrop-blur-xl glass-panel p-10 rounded-2xl hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 group-hover:-translate-y-1 border border-glass-border">
              <span className="inline-block py-1.5 px-4 rounded-full bg-accent/20 border border-accent/30 text-accent font-bold text-xs tracking-widest uppercase mb-6">
                {exp.period}
              </span>
              <h3 className="text-2xl font-bold text-primary mb-1">{exp.role}</h3>
              <div className="text-sm font-bold text-secondary mb-6 uppercase tracking-wider">{exp.company}</div>
              
              <ul className="space-y-3 mb-6">
                {exp.achievements.map((ach, i) => (
                  <li key={i} className="flex gap-3 text-secondary text-sm md:text-base leading-relaxed">
                    <span className="text-accent mt-1 shrink-0 font-bold">→</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
              
              {exp.clients && (
                <div className="pt-4 border-t border-glass-border">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">Clients :</span>
                  <span className="text-xs text-secondary ml-2 font-medium">{exp.clients}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>
    </section>
  );
}
