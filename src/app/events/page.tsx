import type { Metadata } from "next";
import { getAllEvents, partitionEvents } from "@/lib/events";
import EventGrid from "@/components/events/EventGrid";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Events",
  description: "Race results and write-ups — offshore, match racing, and one-design.",
};

export default function EventsPage() {
  const { upcoming, past } = partitionEvents(getAllEvents(), new Date());

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:pt-40">
      <SectionHeading
        eyebrow="Racing"
        title="Events"
        lede="Results and write-ups from offshore races, match-racing events, and one-design regattas."
      />
      {upcoming.length > 0 ? (
        <section aria-label="Upcoming events" className="mb-16">
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-ocean-500">
            Upcoming
          </h2>
          <EventGrid events={upcoming} variant="compact" upcoming />
        </section>
      ) : null}
      <section aria-label="Recent events">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-ocean-500">
          Recent
        </h2>
        {past.length > 0 ? (
          <EventGrid events={past} />
        ) : (
          <p className="text-mist">No events yet — check back soon.</p>
        )}
      </section>
    </div>
  );
}
