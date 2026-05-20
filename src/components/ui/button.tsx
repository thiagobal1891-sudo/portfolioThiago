"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  href?: string;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, asChild, ...props }, ref) => {
    
    const classes = cn(
      "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-[var(--color-background)] focus-visible:ring-[var(--color-accent)]",
      {
        "bg-[var(--color-accent)] text-[var(--color-accent-foreground)] hover:bg-[var(--color-accent)]/90":
          variant === "primary",
        "bg-[var(--color-muted)] text-[var(--color-foreground)] hover:bg-[var(--color-muted)]/80":
          variant === "secondary",
        "border border-[var(--color-muted)] hover:bg-[var(--color-muted)]/50":
          variant === "outline",
        "hover:bg-[var(--color-muted)]/50": variant === "ghost",
        "h-9 px-4 text-sm": size === "sm",
        "h-11 px-6 text-base": size === "md",
        "h-14 px-8 text-lg": size === "lg",
        "h-11 w-11": size === "icon",
      },
      className
    );

    if (href) {
      return (
        <motion.a
          href={href}
          whileTap={{ scale: 0.98 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={classes}
          {...(props as any)}
        />
      );
    }

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={classes}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
