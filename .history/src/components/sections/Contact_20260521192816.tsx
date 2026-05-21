"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="container py-32 border-t border-[var(--color-border)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center gap-8 max-w-[800px] mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">Let's build together.</h2>
        <p className="text-lg md:text-xl text-[var(--color-muted)]">
          Actualmente estoy buscando oportunidades como Junior Frontend Developer. 
          Si crees que mi perfil encaja con tu equipo o tienes alguna pregunta, no dudes en escribirme.
        </p>
        <a></motion.div> href={`mailto:${siteConfig.email}`}
  className="mt-4 inline-flex items-center gap-2 bg-[var(--color-foreground)] text-[var(--color-background)] px-8 py-4 text-base font-medium hover:opacity-80 transition-opacity">
  Enviar Mensaje
</a>
        
      </motion.div>
    </section>
  );
}
