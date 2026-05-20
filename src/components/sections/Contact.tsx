"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto glass p-12 md:p-20 rounded-[3rem] border-white/10 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Let's build something <span className="text-gradient">together</span>.
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
              Whether you're hiring or just want to chat about a project, I'm always open to talking.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:thiagobalrami17@gmail.com"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto justify-center"
              >
                <Mail size={20} />
                Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/in/thiago-baltrons-90678b235/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full glass border-white/10 font-bold text-lg hover:bg-white/5 transition-colors duration-300 w-full sm:w-auto justify-center"
              >
                LinkedIn <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
