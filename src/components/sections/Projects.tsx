"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Vaon Booking System",
    description: "A full-stack booking system for a barbershop. Handles auth, tricky scheduling logic (preventing double bookings), and a neat admin dashboard to manage everything. Built from scratch to be mobile-first and actually usable by a real business.",
    tech: ["Next.js", "NestJS", "Prisma", "Tailwind CSS"],
    image: "/media/vaon_mockup.png", // We will add a placeholder or assume the user adds this
    live: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Pretty Face Landing",
    description: "Landing page for a local clinic. The goal here was purely visual: smooth scroll animations, good layout, and making sure it doesn't break on weird mobile screen sizes.",
    tech: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    image: "/media/hero_desktop.png",
    live: "https://prettyfacefd.netlify.app/",
    github: "https://github.com/thiagobal1891-sudo/paginaweb",
    featured: false,
  },
  {
    title: "Vue Commerce Cart",
    description: "An e-commerce frontend just to mess around with Vue 3 and Pinia. Handled cart state, dynamic routing, and making sure the UI updates instantly without full page reloads.",
    tech: ["Vue 3", "Pinia", "Vite"],
    image: "/media/Homepage_commerce.png",
    live: "https://vue-ecommerce-ruddy-zeta.vercel.app/#/",
    github: "https://github.com/thiagobal1891-sudo/vue-ecommerce",
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Selected <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Some stuff I've built recently. I like focusing on the logic just as much as the UI.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-12 lg:gap-20 items-center`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-violet-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden glass border-white/10 aspect-video lg:aspect-[4/3] bg-muted/30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="mb-6">
                  {project.featured && (
                    <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
                      Featured Project
                    </span>
                  )}
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4">{project.title}</h3>
                  <div className="p-6 rounded-2xl glass border-white/5 bg-white/5 relative z-10 backdrop-blur-xl mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground border border-white/5"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-6">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium group"
                      >
                        <FaGithub size={20} className="group-hover:-translate-y-1 transition-transform" /> Code
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group"
                      >
                        <ExternalLink size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
