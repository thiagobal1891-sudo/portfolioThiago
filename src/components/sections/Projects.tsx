"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export function Projects() {
  return (
    <section id="projects" className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold tracking-tight">Selected Work.</h2>
      </motion.div>

      <div className="flex flex-col gap-24">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group grid gap-8 md:grid-cols-[1fr_1.5fr] items-center"
          >
            <div className="flex flex-col gap-6 order-2 md:order-1">
              <div>
                <h3 className="text-3xl font-bold tracking-tight mb-2">{project.title}</h3>
                <p className="text-lg text-[var(--color-muted-foreground)]">{project.description}</p>
              </div>

              <div className="flex flex-col gap-4 text-sm text-[var(--color-muted-foreground)]">
                <div>
                  <strong className="text-[var(--color-foreground)] block mb-1">El Problema</strong>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <strong className="text-[var(--color-foreground)] block mb-1">La Solución</strong>
                  <p>{project.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.stack.map(tech => (
                  <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:text-[var(--color-muted-foreground)] transition-colors">
                  Live Demo <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:text-[var(--color-muted-foreground)] transition-colors">
                  Source <GithubIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="order-1 md:order-2 flex flex-col gap-3">
  <div className="overflow-hidden rounded-2xl bg-[var(--color-muted)] aspect-video relative">
    {project.image ? (
      <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 55vw" />
    ) : (
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[var(--color-muted-foreground)]/50 font-medium tracking-widest uppercase text-sm">{project.title}</span>
      </div>
    )}
  </div>
  {project.imagePanel && (
    <div className="overflow-hidden rounded-2xl bg-[var(--color-muted)] aspect-video relative">
      <Image src={project.imagePanel} alt={`${project.title} — panel`} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 55vw" />
    </div>
  )}
</div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}