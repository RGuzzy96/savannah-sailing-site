"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { journey } from "@/content/resume";
import { cn } from "@/lib/utils";

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading eyebrow="Journey" title="From 420s to the open ocean" />
      <div ref={ref} className="relative">
        <motion.div
          aria-hidden="true"
          style={{ scaleY }}
          className="absolute left-4 top-0 h-full w-px origin-top bg-ocean-300 md:left-1/2"
        />
        <ol className="space-y-12">
          {journey.map((node, i) => (
            <li
              key={`${node.years}-${node.title}`}
              className={cn(
                "relative pl-12 md:w-1/2 md:pl-0",
                i % 2 === 0
                  ? "md:pr-14 md:text-right"
                  : "md:ml-auto md:pl-14"
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-[11px] top-1.5 h-2.5 w-2.5 rounded-full bg-navy-900",
                  i % 2 === 0
                    ? "md:left-auto md:-right-[5px]"
                    : "md:-left-[5px]"
                )}
              />
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean-500">
                  {node.years}
                </p>
                <h3 className="mt-1 font-display text-xl tracking-tight text-navy-950">
                  {node.title}
                </h3>
                {node.detail ? (
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {node.detail}
                  </p>
                ) : null}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
