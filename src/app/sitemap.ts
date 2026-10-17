import type { MetadataRoute } from "next";
import { getAllEvents } from "@/lib/events";

const BASE_URL = "https://savannahtaylor.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const events = getAllEvents().map((e) => ({
    url: `${BASE_URL}/events/${e.slug}`,
    lastModified: e.frontmatter.date,
  }));
  return [
    { url: BASE_URL },
    { url: `${BASE_URL}/events` },
    ...events,
  ];
}
