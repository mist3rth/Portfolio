"use client";
import { useState } from "react";
import { ImageOff, Image as ImageIcon, ShieldCheck, AlertTriangle, Code2 } from "lucide-react";
import Image from "next/image";

export default function InteractiveDemo() {
  const [imagesEnabled, setImagesEnabled] = useState(true);

  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10" id="methode">
      <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="md:w-3/5">
          <h2 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 leading-[1.1] tracking-tight">Démo Bulletproof.</h2>
          <p className="text-secondary text-xl font-light">Par défaut, de nombreux clients mail bloquent les images. L'approche "Bulletproof" garantit que l'e-mail reste fonctionnel, lisible et performant, même à nu.</p>
        </div>
        
        {/* Toggle Switch */}
        <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-full border border-glass-border shadow-2xl backdrop-blur-md">
          <button 
            onClick={() => setImagesEnabled(true)}
            className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all duration-300 text-sm tracking-wide ${imagesEnabled ? 'bg-white text-black shadow-lg shadow-white/10' : 'text-secondary hover:text-primary'}`}
          >
            <ImageIcon size={18} /> Images ON
          </button>
          <button 
            onClick={() => setImagesEnabled(false)}
            className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all duration-300 text-sm tracking-wide ${!imagesEnabled ? 'bg-accent text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 'text-secondary hover:text-primary'}`}
          >
            <ImageOff size={18} /> Images OFF
          </button>
        </div>
      </div>

      <div className="flex justify-center w-full mt-12">
        <div className="relative w-full max-w-[420px] h-[650px] rounded-[2.5rem] overflow-hidden border-[10px] border-gray-900 bg-[#111] shadow-[0_0_60px_rgba(59,130,246,0.15)] group/phone">
          {/* Fake Notch */}
          <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-2xl w-32 mx-auto z-20"></div>
          
          {/* Gradient Fade au bas pour indiquer le scroll */}
          <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#111] to-transparent z-10 pointer-events-none transition-opacity duration-300 group-hover/phone:opacity-0"></div>

          {/* Container Scrollable de l'Email */}
          <div className="relative w-full h-full overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pt-8 bg-white">
            <Image 
              src={imagesEnabled ? "/Portfolio/images.webp" : "/Portfolio/noimage.webp"} 
              alt={imagesEnabled ? "Rendu avec images activées" : "Rendu Bulletproof (sans images)"} 
              width={420}
              height={1200}
              className={`w-full h-auto block transition-opacity duration-500 ${imagesEnabled ? 'opacity-100' : 'opacity-95'}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
