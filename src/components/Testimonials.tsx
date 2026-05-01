"use client";

import { useRef, useState, useCallback } from "react";
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
    photo: "/Portfolio/opt/chloe.webp",
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
    photo: "/Portfolio/opt/lyna.webp",
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
    photo: "/Portfolio/opt/areli.webp",
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
    photo: "/Portfolio/opt/guillaume.webp",
    initials: "GR",
    color: "from-amber-500/20 to-orange-400/10",
    borderColor: "border-amber-500/20",
    dotColor: "bg-amber-400",
  },
];

// ─── Card individuelle ────────────────────────────────────────────────────────
function TestimonialCard({
  t,
  isActive,
}: {
  t: (typeof testimonials)[0];
  isActive: boolean;
}) {
  return (
    <div
      className={`relative glass-panel bg-[#050505]/80 backdrop-blur-xl border ${t.borderColor} rounded-3xl overflow-hidden flex flex-col justify-between
        transition-all duration-500
        ${isActive ? "opacity-100 scale-100" : "opacity-50 scale-[0.97]"}
      `}
      style={{ padding: "clamp(1.25rem, 4vw, 2.5rem)" }}
    >
      {/* Glow */}
      <div
        className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] bg-gradient-to-br ${t.color} pointer-events-none ${isActive ? "opacity-60" : "opacity-20"} transition-opacity duration-500`}
      />

      {/* Icône citation */}
      <Quote
        className="absolute top-6 right-6 text-white/5"
        size={64}
        strokeWidth={1}
      />

      {/* Texte */}
      <div className="relative z-10">
        <p className="text-secondary text-sm md:text-base leading-relaxed font-light italic">
          &ldquo;{t.quote}&rdquo;
        </p>
      </div>

      {/* Auteur */}
      <div className="relative z-10 mt-6 pt-5 border-t border-white/5">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 shrink-0 shadow-xl">
              <Image
                src={t.photo}
                alt={t.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-primary text-sm leading-tight">
                {t.name}
              </p>
              <p className="text-xs text-secondary font-mono mt-0.5 leading-snug">
                {t.role}
              </p>
              <p className="text-xs text-accent font-mono mt-0.5">
                {t.company}
              </p>
            </div>
          </div>

          {/* Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit">
            <span className={`w-2 h-2 rounded-full ${t.dotColor} animate-pulse`} />
            <span className="text-[10px] font-bold font-mono text-secondary uppercase tracking-widest">
              Avis vérifié
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Carrousel mobile ─────────────────────────────────────────────────────────
function MobileCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    // Largeur d'une slide = 88vw
    const slideWidth = track.scrollWidth / testimonials.length;
    const idx = Math.round(track.scrollLeft / slideWidth);
    setActiveIndex(Math.max(0, Math.min(idx, testimonials.length - 1)));
  }, []);

  const goTo = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slideWidth = track.scrollWidth / testimonials.length;
    track.scrollTo({ left: slideWidth * idx, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Compteur */}
      <div className="flex items-center justify-between mb-5 px-1">
        <p className="text-accent font-mono text-xs uppercase tracking-widest">
          {activeIndex + 1}/{testimonials.length} avis
        </p>
        {/* Dots de navigation */}
        <div className="flex gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Aller à l'avis ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 bg-accent"
                  : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Track scrollable */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
          /* On déborde légèrement pour montrer la card suivante */
          paddingRight: "12vw",
        }}
      >
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="shrink-0 snap-start"
            style={{ width: "88vw" }}
          >
            <TestimonialCard t={t} isActive={i === activeIndex} />
          </div>
        ))}
      </div>

      {/* Hint swipe — disparaît après le premier scroll */}
      {activeIndex === 0 && (
        <p className="text-center text-white/30 text-xs font-mono mt-4 animate-pulse">
          ← Glissez pour voir la suite →
        </p>
      )}
    </div>
  );
}

// ─── Grille desktop ───────────────────────────────────────────────────────────
function DesktopGrid() {
  return (
    <div className="grid grid-cols-2 gap-8">
      {testimonials.map((t, idx) => (
        <ScrollReveal
          key={t.name}
          animation={idx % 2 === 0 ? "slide-right" : "slide-left"}
          delay={idx * 150}
        >
          <TestimonialCard t={t} isActive={true} />
        </ScrollReveal>
      ))}
    </div>
  );
}

// ─── Export principal ─────────────────────────────────────────────────────────
export default function Testimonials() {
  return (
    <section
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10"
    >
      <ScrollReveal animation="slide-up">
        <div className="mb-12 md:w-2/3">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 leading-tight tracking-tight">
            Ils en parlent.
          </h2>
          <p className="text-secondary text-lg font-light">
            Ce que disent ceux qui ont travaillé directement avec moi.
          </p>
        </div>
      </ScrollReveal>

      {/* Mobile : carrousel — Desktop : grille 2 colonnes */}
      <div className="md:hidden">
        <MobileCarousel />
      </div>
      <div className="hidden md:block">
        <DesktopGrid />
      </div>
    </section>
  );
}
