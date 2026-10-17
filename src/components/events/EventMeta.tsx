import type { Event } from "@/lib/events";
import { formatDateRange } from "@/lib/format";
import Badge from "@/components/ui/Badge";

const disciplineLabels: Record<Event["frontmatter"]["discipline"], string> = {
  offshore: "Offshore",
  "match-racing": "Match Racing",
  inshore: "Inshore",
};

export default function EventMeta({ event }: { event: Event }) {
  const fm = event.frontmatter;
  const items = [
    formatDateRange(fm.date, fm.endDate),
    fm.location,
    fm.role,
    fm.boat,
  ].filter(Boolean) as string[];

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-mist">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
      <Badge variant="navy">{disciplineLabels[fm.discipline]}</Badge>
      {fm.result ? <Badge>{fm.result}</Badge> : null}
    </div>
  );
}
