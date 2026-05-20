"use client";

import { motion } from "framer-motion";

const valueProps = [
  {
    title: "Product-focused development",
    description: "I don't just write code; I try to understand the actual product. My goal is to make sure technical decisions make sense for the end user and the business.",
    metric: "User Experience",
  },
  {
    title: "Complex Problem Solving",
    description: "From managing intricate application states to optimizing rendering performance, I thrive on tackling architectural challenges and delivering robust, scalable solutions.",
    metric: "Scalable Architectures",
  },
  {
    title: "Full-Stack Context",
    description: "Even though I specialize in frontend, I've built full-stack apps (Next.js, NestJS, Prisma). I know how to handle auth flows, talk to APIs, and structure databases.",
    metric: "End-to-End",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30 skew-y-[-2deg] origin-top-left -z-10" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
            >
              My <span className="text-gradient">Experience</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg mb-8"
            >
              I might not have a 10-year corporate timeline yet, but my hands-on work reflects the architecture and discipline of a senior dev.
            </motion.p>
          </div>

          <div className="w-full lg:w-2/3 space-y-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:hidden absolute left-0 top-2 bottom-[-2rem] w-px bg-white/10" />
                <div className="md:hidden absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary" />
                
                <div className="glass p-8 rounded-2xl border-white/5 hover:bg-white/5 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-bold">{prop.title}</h3>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary border border-primary/20 whitespace-nowrap w-fit">
                      {prop.metric}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
