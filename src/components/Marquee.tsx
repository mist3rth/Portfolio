import { brandsMarquee } from "@/data/cvData";

export default function Marquee() {
  return (
    <section className="h-[210px] bg-[#030303] overflow-hidden relative border-y border-white/5 flex items-center">
      {/* Gradients pour estomper les bords - Mode Sombre */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />
      
      <div className="flex whitespace-nowrap animate-marquee items-center">
        {[...brandsMarquee, ...brandsMarquee, ...brandsMarquee, ...brandsMarquee].map((brand, i) => (
          <div key={i} className="mx-8 md:mx-16 flex items-center justify-center">
            <span className="text-3xl md:text-5xl font-black text-white/20 uppercase tracking-[0.3em] transition-all duration-500 hover:text-accent hover:scale-105 cursor-default">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
