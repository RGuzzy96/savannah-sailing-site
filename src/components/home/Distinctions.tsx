import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { distinctions } from "@/content/resume";

export default function Distinctions() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading eyebrow="Distinctions" title="Recognized along the way" />
      <StaggerGroup className="grid gap-px overflow-hidden rounded-2xl border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-4">
        {distinctions.map((d) => (
          <StaggerItem key={d} className="bg-white p-6">
            <p className="font-display text-lg leading-snug tracking-tight text-navy-950">
              {d}
            </p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
