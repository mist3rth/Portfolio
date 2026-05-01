"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "slide-up" | "slide-left" | "slide-right" | "fade";
  delay?: number;
  duration?: number;
  className?: string;
  instant?: boolean; // Si true, l'élément est visible immédiatement (pour le haut de page)
}

export default function ScrollReveal({
  children,
  animation = "slide-up",
  delay = 0,
  duration = 700,
  className = "",
  instant = false,
}: ScrollRevealProps) {
  // On commence à true si instant est activé, sinon false
  const [isVisible, setIsVisible] = useState(instant);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Si c'est déjà instantané, pas besoin d'observer
    if (instant) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, [instant]);

  const getAnimationClasses = () => {
    if (instant) return "opacity-100 translate-y-0 translate-x-0";

    switch (animation) {
      case "slide-up":
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";
      case "slide-left":
        return isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8";
      case "slide-right":
        return isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8";
      case "fade":
        return isVisible ? "opacity-100" : "opacity-0";
      default:
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-[opacity,transform] ${getAnimationClasses()} ${className}`}
      style={{
        transitionDuration: isVisible && !instant ? `${duration}ms` : "0ms",
        transitionDelay: isVisible && !instant ? `${delay}ms` : "0ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
