"use client";

import dynamic from "next/dynamic";
import LazySection from "@/components/LazySection";

const InteractiveDemo = dynamic(() => import("@/components/InteractiveDemo"), { ssr: true });
const Expertises = dynamic(() => import("@/components/Expertises"), { ssr: true });
const Marquee = dynamic(() => import("@/components/Marquee"), { ssr: true });
const Timeline = dynamic(() => import("@/components/Timeline"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });

export default function DynamicSections() {
  return (
    <>
      <section id="methode">
        <InteractiveDemo />
      </section>

      <section id="expertises">
        <Expertises />
      </section>

      <Marquee />

      <section id="parcours">
        <Timeline />
      </section>

      <section id="recommandations">
        <Testimonials />
      </section>
    </>
  );
}
