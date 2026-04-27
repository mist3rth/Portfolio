import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "J'ai eu l'occasion de collaborer avec Thierry sur la production de notre référentiel interne de bonnes pratiques email, un document qui fait désormais autorité au sein de l'agence. Ce qui m'a frappé, c'est sa capacité à transformer des contraintes techniques ultra-complexes (Outlook, dark mode, accessibilité) en règles simples et applicables par toute une équipe. Thierry ne se contente pas de coder : il structure, il forme et il pérennise. Il est la personne que vous voulez pour construire une architecture email solide sur le long terme.",
    name: "Chloé Lorebours",
    role: "Creative Lead CRM / D.A.",
    company: "Proximity Paris",
    photo: "/Portfolio/chloe.webp",
    initials: "CL",
    color: "from-purple-500/20 to-accent/10",
    borderColor: "border-purple-500/20",
    dotColor: "bg-purple-400",
  },
  {
    quote:
      "Travailler avec Thierry sur les campagnes Krys, c'est avoir la certitude que la partie technique ne sera jamais un frein à l'ambition créative. Il sait traduire instantanément les exigences marketing en réalité technique, anticipe les contraintes avant qu'elles ne deviennent des problèmes et n'a jamais livré un email qui n'était pas parfait sur l'intégralité des environnements de réception. Au-delà de la rigueur, c'est aussi quelqu'un qui prend le temps d'expliquer, de partager et de faire monter l'équipe en compétences. Un partenaire technique rare.",
    name: "Lyna Mermouri",
    role: "Cheffe de Projet Marketing Digital",
    company: "TBWA Paris",
    photo: "/Portfolio/lyna.webp",
    initials: "LM",
    color: "from-accent/20 to-blue-400/10",
    borderColor: "border-accent/20",
    dotColor: "bg-accent",
  },
  {
    quote:
      "Sur les campagnes Aldi, Thierry nous a apporté bien plus qu'une intégration technique irréprochable. Sa maîtrise des mécaniques de conversion, hiérarchie visuelle, placement des CTA, gestion du flow cognitif, a eu un impact mesurable sur nos taux de clic. Il pense \"performance\" autant que \"code\", et c'est cette double compétence qui fait la différence sur des volumes de campagnes aussi importants. Un expert CRO autant que technique.",
    name: "Areli Ayaviri",
    role: "Cheffe de Projet CRM & Data",
    company: "TBWA Paris",
    photo: "/Portfolio/areli.webp",
    initials: "AA",
    color: "from-emerald-500/20 to-teal-400/10",
    borderColor: "border-emerald-500/20",
    dotColor: "bg-emerald-400",
  },
  {
    quote:
      "En 20 ans de collaboration, Thierry s'est imposé comme le pilier technique incontournable de nos architectures CRM. Au-delà de son expertise chirurgicale sur l'email, c'est sa capacité à anticiper les évolutions du marché et à sécuriser des écosystèmes complexes qui en fait un atout rare. Sa rigueur est totale, son engagement absolu, et sa maîtrise du rendu 'bulletproof' reste inégalée. Un profil senior d'exception en qui j'ai une confiance aveugle pour piloter les projets les plus ambitieux.",
    name: "Guillaume Rancurel",
    role: "Technical Director",
    company: "TBWA\\Paris",
    photo: "/Portfolio/guillaume.webp",
    initials: "GR",
    color: "from-amber-500/20 to-orange-400/10",
    borderColor: "border-amber-500/20",
    dotColor: "bg-amber-400",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10" id="recommandations">
      <ScrollReveal animation="slide-up">
        <div className="mb-16 md:w-2/3">
          <p className="text-accent font-mono text-sm uppercase tracking-widest mb-3">Preuves tierces</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 leading-tight tracking-tight">
            Ils en parlent.
          </h2>
          <p className="text-secondary text-lg font-light">
            Ce que disent ceux qui ont travaillé directement avec moi.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <ScrollReveal
            key={t.name}
            animation={idx % 2 === 0 ? "slide-right" : "slide-left"}
            delay={idx * 150}
          >
            <div
              className={`relative h-full glass-panel p-10 bg-[#050505]/80 backdrop-blur-xl border ${t.borderColor} rounded-3xl hover:border-opacity-60 transition-all duration-500 group flex flex-col justify-between overflow-hidden`}
            >
              {/* Glow de fond */}
              <div
                className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] bg-gradient-to-br ${t.color} pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-700`}
              />

              {/* Icône de citation */}
              <Quote
                className="absolute top-8 right-8 text-white/5 group-hover:text-white/10 transition-colors duration-500"
                size={80}
                strokeWidth={1}
              />

              {/* Contenu */}
              <div className="relative z-10">
                <p className="text-secondary text-base md:text-lg leading-relaxed font-light italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Auteur */}
              <div className="relative z-10 mt-8 flex items-center gap-4 pt-6 border-t border-white/5">
                {/* Avatar initial */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
                  <Image src={t.photo} alt={t.name} fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <p className="font-bold text-primary text-sm">{t.name}</p>
                  <p className="text-xs text-secondary font-mono mt-0.5">
                    {t.role}
                  </p>
                  <p className="text-xs text-accent/60 font-mono">{t.company}</p>
                </div>
                {/* Dot "vérifié" */}
                <div className="ml-auto flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${t.dotColor} animate-pulse`}></span>
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-wider">Vérifié</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
