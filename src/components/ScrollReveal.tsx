"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "slide-up" | "slide-left" | "slide-right" | "fade";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = "slide-up",
  delay = 0,
  duration = 700,
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Optionnel : déconnecter si on veut que l'animation ne se joue qu'une seule fois
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationClasses = () => {
    switch (animation) {
      case "slide-up":
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12";
      case "slide-left":
        return isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12";
      case "slide-right":
        return isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12";
      case "fade":
        return isVisible ? "opacity-100" : "opacity-0";
      default:
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12";
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-[opacity,transform] ${getAnimationClasses()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}
