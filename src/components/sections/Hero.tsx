"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { siteConfig } from "@/lib/data";
import { TextReveal } from "@/components/ui/TextReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fadeRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    // Fade in animation for elements that shouldn't use TextReveal
    gsap.fromTo(
      fadeRefs.current,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.6, // Wait for text reveal
      }
    );
  }, { scope: containerRef });

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="container flex min-h-[90vh] flex-col justify-center py-12 md:py-24 relative overflow-hidden"
    >
      <div className="flex flex-col gap-6 max-w-[900px] z-10">
        <h1 className="text-5xl font-medium tracking-tight sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[1.05]">
          <TextReveal delay={0.1}>{siteConfig.name}.</TextReveal>
          <div className="text-zinc-500 mt-4 sm:mt-6">
            <TextReveal delay={0.3}>{siteConfig.role}.</TextReveal>
          </div>
        </h1>
        
        <div ref={addToRefs} className="max-w-[500px] mt-6">
          <p className="text-lg text-zinc-400 sm:text-xl font-light leading-relaxed">
            {siteConfig.description}
          </p>
        </div>
        
        <div ref={addToRefs} className="flex flex-col sm:flex-row gap-6 mt-8">
          <a href="#projects">
            <MagneticButton className="bg-white text-black hover:bg-zinc-200">
              Ver Proyectos
            </MagneticButton>
          </a>
          <a href="mailto:hello@thiago.dev">
            <MagneticButton className="bg-transparent border border-zinc-800 hover:bg-zinc-900">
              Hablemos
            </MagneticButton>
          </a>
        </div>
      </div>
      
      {/* Decorative gradient blur for cinematic depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-800/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
}
