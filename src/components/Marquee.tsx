import { brandsMarquee } from "@/data/cvData";

export default function Marquee() {
  return (
    <section className="py-16 bg-white overflow-hidden relative">
      {/* Gradients pour estomper les bords */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      <div className="flex whitespace-nowrap animate-marquee">
        {[...brandsMarquee, ...brandsMarquee, ...brandsMarquee, ...brandsMarquee].map((brand, i) => (
          <div key={i} className="mx-8 md:mx-16 flex items-center justify-center">
            <span className="text-3xl md:text-5xl font-extrabold text-secondary/20 uppercase tracking-widest">{brand}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
