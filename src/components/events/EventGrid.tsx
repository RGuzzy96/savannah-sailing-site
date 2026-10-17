import type { Event } from "@/lib/events";
import { getExcerpt } from "@/lib/events";
import EventCard from "./EventCard";
import { cn } from "@/lib/utils";

interface EventGridProps {
  events: Event[];
  variant?: "default" | "compact";
  upcoming?: boolean;
  className?: string;
}

export default function EventGrid({
  events,
  variant = "default",
  upcoming = false,
  className,
}: EventGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {events.map((e) => (
        <EventCard
          key={e.slug}
          event={e}
          excerpt={getExcerpt(e)}
          variant={variant}
          upcoming={upcoming}
        />
      ))}
    </div>
  );
}
