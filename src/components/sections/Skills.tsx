"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend Core",
    items: ["React", "Next.js", "Vue 3", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "Framer Motion", "GSAP", "Sass", "shadcn/ui"],
  },
  {
    category: "State Management",
    items: ["Zustand", "Redux Toolkit", "Pinia", "React Query"],
  },
  {
    category: "Backend & Tools",
    items: ["Node.js", "NestJS", "Prisma", "Git", "Vite"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            My <span className="text-gradient">Tech Stack</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl"
          >
            Technologies I actually use and enjoy working with on a daily basis.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-2xl border-white/5 hover:border-primary/50 transition-colors duration-300 group"
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground group-hover:text-primary transition-colors">
                {skillGroup.category}
              </h3>
              <ul className="flex flex-col gap-3">
                {skillGroup.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    <span className="font-medium text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
