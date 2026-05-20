"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="container py-32 border-t border-[var(--color-muted)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center gap-8 max-w-[600px] mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Let's build together.</h2>
        <p className="text-lg text-[var(--color-muted-foreground)]">
          Actualmente estoy buscando oportunidades como Junior Frontend Developer. 
          Si crees que mi perfil encaja con tu equipo o tienes alguna pregunta, no dudes en escribirme.
        </p>
        
        <Button href={`mailto:${siteConfig.email}`} size="lg" className="mt-4">
          Enviar Mensaje
        </Button>
      </motion.div>
    </section>
  );
}
