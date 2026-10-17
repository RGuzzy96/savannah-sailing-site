import { boats, certifications } from "@/content/resume";
import Reveal from "@/components/motion/Reveal";

export default function BoatsStrip() {
  const row = [...boats, ...boats];
  return (
    <section className="border-y border-navy-900/10 bg-foam-100 py-14">
      <div className="overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-6">
          {row.map((b, i) => (
            <span key={`${b}-${i}`} className="flex items-center gap-8">
              <span className="font-display text-lg tracking-tight text-navy-900">
                {b}
              </span>
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sand-400" />
            </span>
          ))}
        </div>
      </div>
      <Reveal className="mx-auto mt-10 flex max-w-6xl flex-wrap justify-center gap-2 px-6">
        {certifications.map((c) => (
          <span
            key={c}
            className="rounded-full border border-navy-900/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-navy-900"
          >
            {c}
          </span>
        ))}
      </Reveal>
    </section>
  );
}
