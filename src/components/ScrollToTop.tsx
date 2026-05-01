"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          // On simplifie le calcul : on affiche après 1000px de scroll au lieu de calculer le scrollableDistance
          // Cela évite de lire scrollHeight qui force un reflow
          if (scrolled > 1000) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // Signale à la Navbar de geler son observer pendant la remontée
    window.dispatchEvent(new CustomEvent("nav:freeze", { detail: { duration: 1200 } }));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      // hidden sur mobile (xs et sm), flex sur md et plus
      className={`cursor-pointer hidden md:flex fixed bottom-8 right-8 p-4 bg-accent/10 backdrop-blur-md border border-accent/30 text-accent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:bg-accent hover:text-white hover:border-accent hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-500 z-50 group items-center justify-center ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Retour en haut"
      title="Retour en haut"
    >
      <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
    </button>
  );
}
