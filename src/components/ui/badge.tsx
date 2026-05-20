import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-[var(--color-accent)] text-[var(--color-accent-foreground)]": variant === "default",
          "bg-[var(--color-muted)] text-[var(--color-foreground)]": variant === "secondary",
          "border border-[var(--color-muted)] text-[var(--color-foreground)]": variant === "outline",
        },
        className
      )}
      {...props}
    />
  )
}
