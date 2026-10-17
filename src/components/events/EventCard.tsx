"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Event } from "@/lib/events";
import { formatDate } from "@/lib/format";
import { cn } from "@/lib/utils";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Badge from "@/components/ui/Badge";

interface EventCardProps {
  event: Event;
  excerpt: string;
  variant?: "default" | "compact";
  upcoming?: boolean;
}

export default function EventCard({
  event,
  excerpt,
  variant = "default",
  upcoming = false,
}: EventCardProps) {
  const fm = event.frontmatter;
  return (
    <motion.div whileHover="hover" whileTap={{ scale: 0.99 }} className="h-full">
      <Link
        href={`/events/${event.slug}`}
        className={cn(
          "group relative block h-full overflow-hidden rounded-2xl shadow-[0_20px_60px_-20px_rgba(15,42,74,0.35)]",
          variant === "default" ? "aspect-[4/5]" : "aspect-[16/10]"
        )}
      >
        <motion.div
          variants={{ hover: { scale: 1.03 } }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <ImagePlaceholder
            src={fm.cover}
            alt={fm.title}
            label={`Cover · ${fm.title}`}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </motion.div>
        <motion.div
          variants={{ hover: { opacity: 1 } }}
          className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent opacity-90 transition-opacity"
        />
        <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-white/10 p-4 backdrop-blur-md md:p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foam-100/80">
            {formatDate(fm.date)} · {fm.location}
          </p>
          <h3 className="mt-1 font-display text-lg leading-snug tracking-tight text-white md:text-xl">
            {fm.title}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            {upcoming ? <Badge variant="outline">Upcoming</Badge> : null}
            {fm.result ? <Badge>{fm.result}</Badge> : null}
          </div>
          {variant === "default" ? (
            <p className="mt-2 line-clamp-2 text-sm text-foam-100/80">
              {excerpt}
            </p>
          ) : null}
        </div>
      </Link>
    </motion.div>
  );
}
