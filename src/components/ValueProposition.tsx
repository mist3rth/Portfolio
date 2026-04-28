import { Shield, BrainCircuit, Rocket, Zap, Clock } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function ValueProposition() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10" id="avantage">
      
      <ScrollReveal animation="slide-up" delay={0}>
        <div className="mb-16 md:w-3/4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight tracking-tight">
            L'email n'est pas un simple consommable. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">C'est un actif stratégique souverain.</span>
          </h2>
          <p className="text-secondary text-lg md:text-xl font-light leading-relaxed">
            En tant qu'Architecte Email, je refuse la fragilité des outils "Drag & Drop". Je conçois des infrastructures HTML/CSS natives "Evergreen", garantissant une indépendance totale et une conversion optimale à chaque envoi.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[minmax(300px,auto)]">
        
        {/* Box 1 : Souveraineté - Large Left */}
        <ScrollReveal animation="slide-right" delay={150} className="md:col-span-2 md:row-span-2">
          <div className="h-full glass-panel p-[10px] md:p-10 bg-[#050505]/80 backdrop-blur-xl relative overflow-hidden group border border-white/5 hover:border-accent/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] group-hover:bg-accent/20 transition-all duration-700 pointer-events-none"></div>
            
            <div className="relative z-10 h-full flex flex-col md:flex-row gap-8">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="p-4 bg-white/5 border border-white/10 w-fit rounded-2xl mb-8 shadow-xl">
                    <Shield className="w-8 h-8 text-accent drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                  </div>
                  <h3 className="text-3xl font-bold text-accent mb-4">L'Indépendance Technologique (Zero Dependency)</h3>
                  <p className="text-secondary text-base leading-relaxed mb-4">
                    Zéro framework (MJML/Foundation), zéro dette technique. Un code HTML/CSS "natif" et souverain. Il est immunisé contre les mises à jour des ESPs et reste 100% plug-and-play sur n'importe quel routeur (Salesforce, Adobe, Brevo) sans jamais corrompre le design.
                  </p>
                  <p className="text-secondary text-base leading-relaxed">
                    En éliminant les couches logicielles intermédiaires, le code devient "Evergreen". Il traverse les années sans maintenance forcée, résiste aux caprices des clients de messagerie, et assure une <strong>Brand Safety absolue</strong>. La marque garde le contrôle total de son image, sans être prisonnière d'une plateforme.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <span className="bg-white/5 px-4 py-2 rounded-full text-xs font-mono text-secondary border border-white/10 w-full sm:w-fit text-center">#FutureProof</span>
                  <span className="bg-white/5 px-4 py-2 rounded-full text-xs font-mono text-secondary border border-white/10 w-full sm:w-fit text-center">#NativeCode</span>
                </div>
              </div>
              
              {/* Mockup Mobile Screenshot Scrollable */}
              <div className="hidden lg:flex relative w-[240px] shrink-0 justify-center group-hover:scale-105 transition-transform duration-700">
                <div className="relative w-full h-[380px] rounded-[2rem] overflow-hidden border-[8px] border-gray-900 bg-black shadow-2xl mt-2 group/phone">
                  {/* Fake Notch */}
                  <div className="absolute top-0 inset-x-0 h-5 bg-gray-900 rounded-b-xl w-24 mx-auto z-20"></div>
                  {/* Gradient Fade au bas pour indiquer la suite de l'image (s'estompe au hover) */}
                  <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none transition-opacity duration-300 group-hover/phone:opacity-0"></div>
                  
                  {/* Scrollable Container */}
                  <div className="relative w-full h-full overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pt-5">
                    <Image 
                      src="/Portfolio/screenKrysMob.webp" 
                      alt="Rendu Mobile Krys" 
                      width={240}
                      height={480}
                      className="w-full h-auto block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Box 2 : Mental Flow - Top Right */}
        <ScrollReveal animation="slide-left" delay={300}>
          <div className="h-full glass-panel p-[10px] md:p-8 bg-[#050505]/80 backdrop-blur-xl relative overflow-hidden group border border-white/5 hover:border-accent/30 transition-all duration-500 flex flex-col justify-between">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-[50px] pointer-events-none"></div>
            <div className="relative z-10">
              <BrainCircuit className="w-8 h-8 text-purple-400 mb-6 drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
              <h3 className="text-xl font-bold text-accent mb-3">Le "Mental Flow" (CRO)</h3>
              <p className="text-secondary text-sm leading-relaxed">
                Réduction de la charge cognitive. Loi de Fitts pour les CTA, ancrage visuel : je transforme le design en un entonnoir mental fluide pour maximiser le taux de clic.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Box 3 : Vitesse & Prod - Bottom Right */}
        <ScrollReveal animation="slide-up" delay={450}>
          <div className="h-full glass-panel p-[10px] md:p-8 bg-accent/10 backdrop-blur-xl relative overflow-hidden group border border-accent/20 hover:border-accent/50 transition-all duration-500 flex flex-col justify-between">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent/40 rounded-full blur-[50px] pointer-events-none"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <Rocket className="w-8 h-8 text-accent drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                <div className="bg-accent text-white font-bold px-3 py-1 rounded-full text-sm flex items-center gap-1 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <Clock size={14} /> -70%
                </div>
              </div>
              <h3 className="text-xl font-bold text-accent mb-3">Vitesse Industrielle</h3>
              <p className="text-secondary text-sm leading-relaxed">
                Une vélocité d'exécution démultipliée. L'absence de frameworks intermédiaires et l'approche "lean" divisent drastiquement les temps de production et de QA, accélérant massivement votre <strong>Time-to-Market</strong>.
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
