"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-muted)]"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold tracking-tight text-lg">
          {siteConfig.name}<span className="text-[var(--color-muted-foreground)]">.dev</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-[var(--color-muted-foreground)]">
          <Link href="#about" className="hover:text-[var(--color-foreground)] transition-colors">
            About
          </Link>
          <Link href="#projects" className="hover:text-[var(--color-foreground)] transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-[var(--color-foreground)] transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
