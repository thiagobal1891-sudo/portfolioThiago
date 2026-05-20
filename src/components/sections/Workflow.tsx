"use client";

import { motion } from "framer-motion";
import { Terminal, GitBranch, Zap } from "lucide-react";

export function Workflow() {
  return (
    <section className="container py-24 border-t border-[var(--color-muted)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="grid gap-12 md:grid-cols-[1fr_2fr]"
      >
        <h2 className="text-2xl font-semibold tracking-tight">Workflow.</h2>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-3">
            <div className="h-10 w-10 rounded-full bg-[var(--color-muted)] flex items-center justify-center mb-2">
              <GitBranch className="h-5 w-5 text-[var(--color-foreground)]" />
            </div>
            <h3 className="font-medium text-[var(--color-foreground)]">Version Control</h3>
            <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
              Desarrollo basado en feature branches. Commits atómicos, semánticos y fáciles de rastrear en el historial.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="h-10 w-10 rounded-full bg-[var(--color-muted)] flex items-center justify-center mb-2">
              <Zap className="h-5 w-5 text-[var(--color-foreground)]" />
            </div>
            <h3 className="font-medium text-[var(--color-foreground)]">CI/CD & Deploy</h3>
            <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
              Integración continua y despliegues automáticos a través de Vercel con validaciones de linting y builds estrictos.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="h-10 w-10 rounded-full bg-[var(--color-muted)] flex items-center justify-center mb-2">
              <Terminal className="h-5 w-5 text-[var(--color-foreground)]" />
            </div>
            <h3 className="font-medium text-[var(--color-foreground)]">AI-Assisted</h3>
            <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
              Uso de asistentes de código para scaffolding y automatización, manteniendo siempre el control total de la arquitectura y la UX.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
