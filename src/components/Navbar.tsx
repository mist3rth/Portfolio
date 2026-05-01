"use client";
import { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/data/cvData";
import ContactButton from "./ContactButton";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Vision", href: "#avantage" },
  { name: "Démo Bulletproof", href: "#methode" },
  { name: "Expertises", href: "#expertises" },
  { name: "Parcours", href: "#parcours" },
  { name: "Ils en parlent", href: "#recommandations" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Flag pour geler l'observer pendant un scroll programmé
  const isScrollingRef = useRef(false);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const links = NAV_LINKS;

  useEffect(() => {
    const sectionObserverOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // Ignorer les événements pendant un scroll programmé
      if (isScrollingRef.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // #cta = section footer sans ancre nav → vider la sélection
          if (entry.target.id === "cta") {
            setActiveSection("");
          } else {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      });
    };

    const sectionObserver = new IntersectionObserver(handleIntersection, sectionObserverOptions);
    const observed = new Set<string>();

    const tryObserve = (href: string) => {
      if (observed.has(href)) return;
      const el = document.querySelector(href);
      if (el) {
        sectionObserver.observe(el);
        observed.add(href);
      }
    };

    // Passe initiale (sections SSR déjà dans le DOM)
    NAV_LINKS.forEach((link) => tryObserve(link.href));
    // Observer aussi la section CTA pour vider la nav quand on y arrive
    tryObserve("#cta");

    // MutationObserver pour les sections ajoutées tardivement par LazySection
    const mutationObserver = new MutationObserver(() => {
      NAV_LINKS.forEach((link) => tryObserve(link.href));
      if (observed.size === NAV_LINKS.length) mutationObserver.disconnect();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Écoute l'event dispatché par ScrollToTop pour geler l'observer
    const handleNavFreeze = (e: Event) => {
      const duration = (e as CustomEvent).detail?.duration ?? 1200;
      isScrollingRef.current = true;
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = setTimeout(() => {
        isScrollingRef.current = false;
        // Une fois en haut, s'assurer que la nav est vide
        if (window.scrollY < 100) setActiveSection("");
      }, duration);
    };
    window.addEventListener("nav:freeze", handleNavFreeze);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY < 100) setActiveSection("");
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      sectionObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("nav:freeze", handleNavFreeze);
    };
  }, []);

  /**
   * Scroll programmé vers une ancre.
   * Gèle l'IntersectionObserver pendant la durée du scroll pour éviter
   * que toutes les sections intermédiaires s'activent une par une.
   */
  const scrollToSection = (href: string, targetSection: string) => {
    // Activer immédiatement la section de destination
    setActiveSection(targetSection);

    // Geler l'observer
    isScrollingRef.current = true;
    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });

      // Dégeler après la fin estimée du scroll (~1s)
      // Si l'utilisateur scrolle manuellement ensuite, l'observer reprend
      scrollTimerRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 1200);
    } else {
      isScrollingRef.current = false;
    }
  };

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#000000] border-b border-white/10 transition-all duration-300 nav-solid shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 md:px-12 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            {/* Burger Button (visible < 850px) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -ml-2 text-white min-[851px]:hidden hover:bg-white/10 rounded-lg transition-colors z-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo TT */}
            <a href="#" className="text-2xl font-extrabold tracking-tighter text-white hover:scale-105 transition-transform flex items-center shrink-0">
              <span className="text-accent">T</span>T<span className="text-accent">.</span>
            </a>
          </div>

          {/* Desktop Links (visible >= 850px) */}
          <div className="hidden min-[851px]:flex items-center gap-8 text-sm font-medium">
            {links.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href, link.href);
                }}
                className={`relative transition-all duration-300 py-2 group cursor-pointer ${activeSection === link.href ? 'text-accent font-bold' : 'text-gray-400 hover:text-white'}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 shadow-[0_0_8px_rgba(59,130,246,0.8)] ${activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            ))}
          </div>

          <ContactButton variant="navbar" />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black transition-all duration-500 min-[851px]:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((link, i) => (
            <a 
              key={link.href} 
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                scrollToSection(link.href, link.href);
              }}
              className={`text-2xl font-bold transition-all duration-300 hover:text-accent transform cursor-pointer ${activeSection === link.href ? 'text-accent' : 'text-white'} ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: `${isOpen ? i * 100 : 0}ms` }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
