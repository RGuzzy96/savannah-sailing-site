import type { Event } from "@/lib/events";
import { getExcerpt } from "@/lib/events";
import SectionHeading from "@/components/ui/SectionHeading";
import EventCard from "@/components/events/EventCard";
import Button from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";

export default function RecentEvents({ events }: { events: Event[] }) {
  if (!events.length) return null;
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading eyebrow="Latest" title="Recent events" />
      <div className="grid gap-6 sm:grid-cols-2">
        {events.map((e) => (
          <EventCard key={e.slug} event={e} excerpt={getExcerpt(e)} variant="compact" />
        ))}
      </div>
      <div className="mt-10">
        <Button href="/events" variant="ghost">
          See all events <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
