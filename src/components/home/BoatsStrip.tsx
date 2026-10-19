import { boats } from "@/content/resume";

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
    </section>
  );
}
