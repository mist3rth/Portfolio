"use client";

import { useState } from "react";
import { personalInfo } from "@/data/cvData";
import { Check, Mail } from "lucide-react";

interface ContactButtonProps {
  className?: string;
  label?: string;
  variant?: "primary" | "outline" | "navbar";
}

export default function ContactButton({ className, label = "Me contacter", variant = "primary" }: ContactButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleContact = (e: React.MouseEvent) => {
    // On laisse le mailto s'ouvrir normalement pour ceux qui ont un client mail
    // Mais on copie aussi l'email dans le presse-papier pour les autres
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const baseStyles = "transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden";
  
  const variants = {
    primary: "bg-accent text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] hover:scale-105 hover:bg-blue-500",
    outline: "bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.4)]",
    navbar: "bg-accent text-white px-4 md:px-7 py-2.5 rounded-full text-xs md:text-sm font-bold hover:scale-105 hover:bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.6)] shrink-0"
  };

  return (
    <a 
      href={`mailto:${personalInfo.email}?subject=Entretien%20CDI%20-%20Email%20Architect%20Senior`}
      onClick={handleContact}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className={`flex items-center gap-2 transition-all duration-300 ${copied ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <Mail size={variant === 'navbar' ? 16 : 20} />
        {label}
      </span>
      
      {/* Toast Notification intégrée au bouton */}
      <span className={`absolute inset-0 flex items-center justify-center gap-2 bg-green-500 text-white transition-all duration-500 font-bold ${copied ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <Check size={variant === 'navbar' ? 16 : 20} />
        {variant === 'navbar' ? 'Copié !' : 'Email copié !'}
      </span>
    </a>
  );
}
