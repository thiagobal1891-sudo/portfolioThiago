"use client";

import { education } from "@/lib/data";
import { TextReveal } from "@/components/ui/TextReveal";
import { useFadeIn } from "@/lib/animations/useFadeIn";

export function Education() {
  const listRef = useFadeIn({ stagger: 0.2, y: 40 });

  return (
    <section id="education" className="container py-24 md:py-32 relative">
      <div className="flex flex-col gap-12 max-w-[800px]">
        <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
          <TextReveal>Educación.</TextReveal>
        </h2>
        
        <div ref={listRef} className="flex flex-col gap-10">
          {education.map((item, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col gap-2 border-l border-zinc-800 pl-6 py-2 transition-colors hover:border-zinc-500"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h3 className="text-2xl font-medium text-zinc-100">{item.degree}</h3>
                <span className="text-sm font-medium text-zinc-500 tracking-wide uppercase">
                  {item.status}
                </span>
              </div>
              
              <div className="flex flex-col gap-1">
                <p className="text-lg text-zinc-300">{item.institution}</p>
                <p className="text-sm text-zinc-500">{item.location}</p>
              </div>
              
              <p className="mt-4 text-zinc-400 max-w-[600px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
