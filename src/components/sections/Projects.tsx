"use client";

import { motion } from "framer-motion";
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
            {/* Project Info */}
            <div className="flex flex-col gap-6 order-2 md:order-1">
              <div>
                <h3 className="text-3xl font-bold tracking-tight mb-2">{project.title}</h3>
                <p className="text-lg text-[var(--color-muted-foreground)]">
                  {project.description}
                </p>
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
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <a 
                  href={project.demoUrl}
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-[var(--color-muted-foreground)] transition-colors"
                >
                  Live Demo <ArrowUpRight className="h-4 w-4" />
                </a>
                <a 
                  href={project.githubUrl}
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-[var(--color-muted-foreground)] transition-colors"
                >
                  Source <GithubIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Project Image Placeholder */}
            <div className="order-1 md:order-2 overflow-hidden rounded-2xl bg-[var(--color-muted)] aspect-video relative flex items-center justify-center">
              <span className="text-[var(--color-muted-foreground)]/50 font-medium tracking-widest uppercase">
                Mockup: {project.title}
              </span>
              {/* Optional: Add hover scale effect when actual image is placed */}
              <div className="absolute inset-0 bg-[var(--color-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
