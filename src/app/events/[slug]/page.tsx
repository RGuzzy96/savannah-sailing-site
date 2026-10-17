import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllEvents, getEventBySlug, getExcerpt } from "@/lib/events";
import { renderMdx } from "@/lib/mdx";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import EventMeta from "@/components/events/EventMeta";
import SocialLinks from "@/components/events/SocialLinks";
import EventPagerNav from "@/components/events/EventPagerNav";

export function generateStaticParams() {
  return getAllEvents().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/events/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  const description = event.frontmatter.excerpt ?? getExcerpt(event);
  return {
    title: event.frontmatter.title,
    description,
    openGraph: {
      title: event.frontmatter.title,
      description,
    },
  };
}

export default async function EventPage({
  params,
}: PageProps<"/events/[slug]">) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const fm = event.frontmatter;
  const { content } = await renderMdx(event.body);

  const all = getAllEvents();
  const idx = all.findIndex((e) => e.slug === slug);
  const next = idx > 0 ? all[idx - 1] : undefined;
  const prev = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : undefined;

  return (
    <article className="pb-24">
      <div className="relative aspect-[16/9] max-h-[70vh] w-full overflow-hidden md:aspect-[21/9]">
        <ImagePlaceholder
          src={fm.cover}
          alt={fm.title}
          label={`Cover · ${fm.title}`}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-3xl px-6 pb-10">
          <h1 className="font-display text-4xl tracking-tight text-white md:text-5xl">
            {fm.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-prose px-6">
        <EventMeta event={event} />
        <div className="prose prose-slate mt-10 max-w-none">{content}</div>

        {fm.links?.length ? (
          <section className="mt-12">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ocean-500">
              From the event
            </h2>
            <SocialLinks links={fm.links} />
          </section>
        ) : null}

        <EventPagerNav prev={prev} next={next} />

        <Link
          href="/events"
          className="mt-10 inline-block text-sm font-medium text-ocean-500 hover:text-navy-900"
        >
          ← All events
        </Link>
      </div>
    </article>
  );
}
