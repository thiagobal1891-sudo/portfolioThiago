"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="container py-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="grid gap-12 md:grid-cols-[1fr_2fr]"
      >
        <motion.h2 variants={item} className="text-2xl font-semibold tracking-tight">
          Skills.
        </motion.h2>
        
        <div className="grid gap-10 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} variants={item} className="flex flex-col gap-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--color-muted-foreground)]">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
