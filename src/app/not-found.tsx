import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean-500">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight text-navy-950">
        Off the chart
      </h1>
      <p className="mt-4 text-mist">
        This page doesn&apos;t exist — it may have moved or never been plotted.
      </p>
      <Link
        href="/"
        className="mt-8 text-sm font-medium text-ocean-500 hover:text-navy-900"
      >
        ← Back home
      </Link>
    </div>
  );
}
