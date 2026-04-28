"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/Portfolio/Screen/thumb/Krys_2025_Email-Krys_20visagisme_mail.webp",
  "/Portfolio/Screen/thumb/Krys_2025_Emails-Krys_20French_20discorder_Email_201.webp",
  "/Portfolio/Screen/thumb/Krys_2025_Emails-Krys_20signature_brief_20Singature_20Krys_20prod_Bleu.webp",
  "/Portfolio/Screen/thumb/Krys_2025_Emails_20Krys-Myopie_email-myopie_20e-commerce.webp",
  "/Portfolio/Screen/thumb/Lapeyre_Email-Lapeyre_client_20prospect.webp",
  "/Portfolio/Screen/thumb/Louis_2013_Email-Louis_20XIII-Fluide_Welcome.webp",
  "/Portfolio/Screen/thumb/Mc_20Donald_Mails_Template_20Email_20Mc_20Donald_20CRM_template.webp",
  "/Portfolio/Screen/thumb/Mercedes_20VU_2025_Email-Mercedes_20Sprinter_sprinter.webp",
  "/Portfolio/Screen/thumb/Mercedes_20VU_2025_Emails-Mercedes_20VU_20voeux_particulier.webp",
  "/Portfolio/Screen/thumb/Mercedes_20VU_2025_Emails-Mercedes_20ventes_20privees_email_gamme.webp",
  "/Portfolio/Screen/thumb/Pampers_2024_Mails_Newsletters_20pampers_202_template.webp",
  "/Portfolio/Screen/thumb/Peugeot_2023_04-Avril_Emails_Emails-Peugeot_20E-2008_HTML_20B2B.webp",
  "/Portfolio/Screen/thumb/Peugeot_2023_10-Octobre_Mails_Email-Peugeot_20Traveller_html.webp",
  "/Portfolio/Screen/thumb/Smart_Email-Smart_20ServiceCare_smart_20ServiceCare.webp",
];

export default function IsometricBackground() {
  const [visibleColumns, setVisibleColumns] = useState(8);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setVisibleColumns(8);
      else if (window.innerWidth > 768) setVisibleColumns(4);
      else setVisibleColumns(2);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    // Performance : On ne charge/anime que si visible
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0, rootMargin: "200px" }
    );

    const el = document.getElementById('isometric-trigger');
    if (el) observer.observe(el);

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const baseColumns = [
    [images[0], images[1], images[2], images[3]],
    [images[4], images[5], images[6], images[7]],
    [images[8], images[9], images[10], images[11]],
    [images[12], images[13], images[0], images[1]],
  ];

  // On génère le tableau final selon le besoin réel
  const columns = [...baseColumns, ...baseColumns].slice(0, visibleColumns);

  if (!isInView) {
    return <div id="isometric-trigger" className="absolute inset-0 pointer-events-none" />;
  }

  return (
    <div id="isometric-trigger" className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* 1. Les colonnes d'images (z-0) */}
      <div 
        className="absolute w-[180vw] h-[180vh] left-1/2 top-1/2 flex gap-8 md:gap-16 opacity-70"
        style={{
          transform: "translate(-50%, -50%) rotate(-30deg) skewX(15deg) scale(1.1)",
          transformOrigin: "center center",
          zIndex: 0
        }}
      >
        {columns.map((col, colIdx) => (
          <div 
            key={colIdx} 
            className="flex-1 flex flex-col min-w-[180px] md:min-w-[280px]"
            style={{
              animation: `marqueeY ${colIdx % 2 === 0 ? '70s' : '90s'} linear infinite ${colIdx % 2 === 0 ? 'normal' : 'reverse'}`,
              willChange: 'transform'
            }}
          >
            {/* BLOC 1 : Contenu original */}
            <div className="flex flex-col gap-8 md:gap-16 pb-8 md:pb-16">
              {col.map((src, imgIdx) => (
                <div 
                  key={`b1-${colIdx}-${imgIdx}`} 
                  className="relative w-full shrink-0 h-[220px] md:h-[350px] rounded-2xl overflow-hidden border border-white/5 bg-white/5 shadow-2xl"
                >
                  <Image 
                    src={src} 
                    alt="" 
                    fill
                    loading="lazy"
                    decoding="async"
                    unoptimized
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 180px, 280px"
                  />
                </div>
              ))}
            </div>
            
            {/* BLOC 2 : Clone pour boucle infinie */}
            <div className="flex flex-col gap-8 md:gap-16 pb-8 md:pb-16">
              {col.map((src, imgIdx) => (
                <div 
                  key={`b2-${colIdx}-${imgIdx}`} 
                  className="relative w-full shrink-0 h-[220px] md:h-[350px] rounded-2xl overflow-hidden border border-white/5 bg-white/5 shadow-2xl"
                >
                  <Image 
                    src={src} 
                    alt="" 
                    fill
                    loading="lazy"
                    decoding="async"
                    unoptimized
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 180px, 280px"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 2. Léger masque de dégradé */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] opacity-80 pointer-events-none" style={{ zIndex: 10 }}></div>

      <style>{`
        @keyframes marqueeY {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </div>
  );
}

