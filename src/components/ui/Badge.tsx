import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "sand" | "navy" | "outline";
  className?: string;
}

export default function Badge({ children, variant = "sand", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
        variant === "sand" && "bg-sand-400/90 text-navy-950",
        variant === "navy" && "bg-navy-900 text-white",
        variant === "outline" && "border border-white/40 text-white",
        className
      )}
    >
      {children}
    </span>
  );
}
