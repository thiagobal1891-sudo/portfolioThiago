"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  href?: string;
}

export function Button({ className, variant = "primary", size = "md", href, children, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium transition-opacity hover:opacity-80 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none",
    {
      "bg-[var(--color-foreground)] text-[var(--color-background)]": variant === "primary",
      "bg-[var(--color-muted)] text-[var(--color-foreground)]": variant === "secondary",
      "border border-[var(--color-border)] text-[var(--color-foreground)]": variant === "outline",
      "text-[var(--color-foreground)]": variant === "ghost",
      "h-9 px-4 text-sm": size === "sm",
      "h-11 px-6 text-base": size === "md",
      "h-14 px-8 text-lg": size === "lg",
      "h-11 w-11": size === "icon",
    },
    className
  );

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}