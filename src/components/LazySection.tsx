"use client";

import { useEffect, useState, useRef, ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  minHeight?: string;
  id?: string;
}

/**
 * LazySection retard l'affichage et l'hydratation d'un composant 
 * jusqu'à ce qu'il soit proche du viewport.
 * Utile pour réduire le TBT (Total Blocking Time) sur Desktop.
 */
export default function LazySection({ 
  children, 
  threshold = 0.01, 
  rootMargin = "600px", // Réduit légèrement pour plus de prévisibilité
  className = "",
  minHeight = "400px",
  id
}: LazySectionProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div 
      ref={sectionRef} 
      id={id}
      className={`${className}`}
      style={{ 
        minHeight: minHeight,
        display: 'grid',
        gridTemplateColumns: '1fr',
        // On retire content-visibility qui peut causer des micro-sauts si mal calibré
      }}
    >
      <div 
        style={{ 
          gridArea: '1/1', 
          opacity: isLoaded ? 1 : 0, 
          transition: 'opacity 0.8s ease-out',
          visibility: isLoaded ? 'visible' : 'hidden'
        }}
      >
        {isLoaded && children}
      </div>
      
      {/* 
          Le placeholder n'est jamais supprimé, il reste en fond pour garantir 
          que la hauteur de la grille ne tombe jamais à zéro.
      */}
      {!isLoaded && (
        <div style={{ gridArea: '1/1', height: minHeight, width: '100%' }} />
      )}
    </div>
  );
}
