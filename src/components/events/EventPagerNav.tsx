import Link from "next/link";
import type { Event } from "@/lib/events";

interface EventPagerNavProps {
  prev?: Event;
  next?: Event;
}

export default function EventPagerNav({ prev, next }: EventPagerNavProps) {
  return (
    <nav
      aria-label="More events"
      className="mt-16 grid gap-4 border-t border-navy-900/10 pt-8 sm:grid-cols-2"
    >
      <div>
        {next ? (
          <Link href={`/events/${next.slug}`} className="group block">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-mist">
              ← Newer
            </span>
            <span className="mt-1 block font-display text-lg tracking-tight text-navy-900 group-hover:text-ocean-500">
              {next.frontmatter.title}
            </span>
          </Link>
        ) : null}
      </div>
      <div className="sm:text-right">
        {prev ? (
          <Link href={`/events/${prev.slug}`} className="group block">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-mist">
              Older →
            </span>
            <span className="mt-1 block font-display text-lg tracking-tight text-navy-900 group-hover:text-ocean-500">
              {prev.frontmatter.title}
            </span>
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
