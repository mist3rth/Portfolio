"use client";
import { useState } from "react";
import { personalInfo } from "@/data/cvData";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Vision", href: "#avantage" },
    { name: "Démo Bulletproof", href: "#methode" },
    { name: "Expertises", href: "#expertises" },
    { name: "Parcours", href: "#parcours" },
    { name: "Ils en parlent", href: "#recommandations" },
  ];

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur-2xl border-b border-white/5 transition-all duration-300">
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
              <a key={link.href} href={link.href} className="relative text-gray-300 hover:text-white transition-colors py-2 group">
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              </a>
            ))}
          </div>

          {/* CTA - Always visible */}
          <a 
            href={`mailto:${personalInfo.email}?subject=Entretien%20CDI%20%E2%80%94%20Email%20Architect%20Senior`}
            className="bg-accent text-white px-4 md:px-7 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 hover:scale-105 hover:bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.6)] shrink-0"
          >
            Me contacter
          </a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl transition-all duration-500 min-[851px]:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((link, i) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-bold text-white transition-all duration-300 hover:text-accent transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
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
