import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { disciplines, images } from "@/content/resume";

export default function Disciplines() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="Disciplines"
        // title="Three arenas, one standard"
        // lede="Offshore distance racing, umpired match racing, and one-design fleet racing."
      />
      <StaggerGroup className="grid gap-6 md:grid-cols-3">
        {disciplines.map((d) => (
          <StaggerItem
            key={d.title}
            className="overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-[0_20px_60px_-20px_rgba(15,42,74,0.25)]"
          >
            <div className="relative aspect-[16/10]">
              <ImagePlaceholder
                src={images.disciplines[d.id]}
                className={d.imagePosition}
                label={`Photo · ${d.title}`}
                alt={d.title}
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl tracking-tight text-navy-950">
                {d.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {d.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed text-mist">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-px w-4 shrink-0 bg-sand-400"
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
