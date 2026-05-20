"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section className="container flex min-h-[85vh] flex-col justify-center py-12 md:py-24">
      <div className="flex flex-col gap-6 max-w-[800px]">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {siteConfig.name}. <br />
          <span className="text-[var(--color-muted-foreground)]">
            {siteConfig.role}.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[600px] text-lg text-[var(--color-muted-foreground)] sm:text-xl"
        >
          {siteConfig.description}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <Button href="#projects" size="lg">
            Ver Proyectos
          </Button>
          <Button variant="outline" size="lg" href="mailto:hello@thiago.dev">
            Hablemos
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
