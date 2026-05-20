"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="grid gap-12 md:grid-cols-[1fr_2fr]"
      >
        <h2 className="text-2xl font-semibold tracking-tight">About.</h2>
        <div className="flex flex-col gap-6 text-lg text-[var(--color-muted-foreground)] leading-relaxed max-w-[600px]">
          <p>
            Mi enfoque combina el diseño interactivo con bases técnicas sólidas. Entiendo el frontend no solo como pintar datos en pantalla, sino como la capa fundamental de interacción entre el producto y el usuario.
          </p>
          <p>
            En mi día a día, integro herramientas modernas e IA para optimizar tareas repetitivas, permitiéndome enfocar el 100% en arquitectura, performance y pulido visual. Esto me ayuda a entregar experiencias que no solo se ven bien, sino que se sienten premium.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
