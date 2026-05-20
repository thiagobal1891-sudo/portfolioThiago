"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
              About <span className="text-gradient">Me</span>.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a frontend developer who actually cares about architecture. 
                I don't just build UI; I think about state management, re-renders, and how scalable the codebase is.
              </p>
              <p>
                Right now, I'm heavily focused on <strong className="text-foreground">React, Next.js, and TypeScript</strong>. 
                I like keeping things typed, modular, and maintainable. 
                Animations shouldn't break performance, and complex state shouldn't lead to spaghetti code.
              </p>
              <p>
                When I'm not coding, I'm usually looking into new tools or trying to figure out how to optimize something that already works.
              </p>
            </div>
            
            <div className="mt-10 flex gap-4">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-foreground">3+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Core Projects</span>
              </div>
              <div className="w-px h-16 bg-white/10 mx-4"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-foreground">100%</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Commitment</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-violet-600 rounded-full blur-[100px] opacity-30 animate-pulse" />
              <div className="relative h-full w-full rounded-2xl glass border-white/10 overflow-hidden bg-white/5 flex items-center justify-center p-8">
                 {/* Abstract visual representing code and design */}
                 <div className="grid grid-cols-2 gap-4 w-full h-full">
                    <div className="rounded-xl bg-white/5 border border-white/10 flex items-end p-4">
                       <div className="w-full h-1/3 bg-primary/40 rounded-lg"></div>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 flex items-start p-4">
                       <div className="w-2/3 h-1/2 bg-violet-500/40 rounded-lg"></div>
                    </div>
                    <div className="col-span-2 rounded-xl bg-white/5 border border-white/10 p-4 flex gap-2 items-center">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        <div className="w-full h-2 bg-white/10 rounded-full ml-4"></div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
