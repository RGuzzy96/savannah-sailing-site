import { cn } from "@/lib/utils";
import Reveal from "@/components/motion/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lede?: string;
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-12 max-w-2xl", className)}>
      <p
        className={cn(
          "mb-3 text-xs font-semibold uppercase tracking-[0.18em]",
          dark ? "text-ocean-300" : "text-ocean-500"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-display text-3xl tracking-tight md:text-4xl",
          dark ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p className={cn("mt-4 text-lg leading-relaxed", dark ? "text-foam-100/80" : "text-mist")}>
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}
