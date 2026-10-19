import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/motion/Reveal";
import { skillChips, images } from "@/content/resume";

export default function About() {
  return false && (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading eyebrow="About" title="A racer across disciplines" />
      <div className="grid items-start gap-12 md:grid-cols-[2fr_3fr]">
        <Reveal className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-[0_20px_60px_-20px_rgba(15,42,74,0.35)]">
          <ImagePlaceholder
            src={images.portrait}
            label="Portrait · Savannah"
            alt="Portrait of Savannah Taylor"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </Reveal>
        <div>
          <Reveal className="space-y-4 text-lg leading-relaxed text-mist">
            <p>
              A former youth 420 racer who represented Canada on the
              international stage, Savannah now competes across offshore,
              one-design and match-racing fleets — from the World Match Racing
              Tour to classic distance races on the Atlantic.
            </p>
            <p>
              With a civil engineering degree from Dalhousie University (2025)
              complete, she is fully committed to a career in sailing: a mentee
              in The Magenta Project Offshore Pathway and one of four sailors
              selected for the Canada Ocean Racing Pathways Program.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
            {skillChips.map((chip) => (
              <Badge key={chip} variant="outline" className="border-navy-900/20 text-navy-900">
                {chip}
              </Badge>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
