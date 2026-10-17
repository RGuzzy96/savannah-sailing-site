import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const EVENTS_DIR = path.join(process.cwd(), "content", "events");

export type Discipline = "offshore" | "match-racing" | "inshore";

const DISCIPLINES: Discipline[] = ["offshore", "match-racing", "inshore"];

export interface EventLink {
  label: string;
  url: string;
  platform?: string;
}

export interface EventFrontmatter {
  title: string;
  date: string;
  endDate?: string;
  location: string;
  discipline: Discipline;
  result?: string;
  role?: string;
  boat?: string;
  cover?: string;
  excerpt?: string;
  links?: EventLink[];
}

export interface Event {
  slug: string;
  frontmatter: EventFrontmatter;
  body: string;
}

const REQUIRED: (keyof EventFrontmatter)[] = [
  "title",
  "date",
  "location",
  "discipline",
];

function parseEvent(filename: string): Event {
  const filePath = path.join(EVENTS_DIR, filename);
  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
  const fm = data as Partial<EventFrontmatter>;

  for (const field of REQUIRED) {
    if (fm[field] == null || fm[field] === "") {
      throw new Error(`${filename}: missing required frontmatter field "${field}"`);
    }
  }
  if (!DISCIPLINES.includes(fm.discipline as Discipline)) {
    throw new Error(
      `${filename}: discipline must be one of ${DISCIPLINES.join(" | ")}`
    );
  }
  if (Number.isNaN(Date.parse(fm.date as string))) {
    throw new Error(`${filename}: date "${fm.date}" is not a valid ISO date`);
  }

  return {
    slug: filename.replace(/\.mdx$/, ""),
    frontmatter: fm as EventFrontmatter,
    body: content.trim(),
  };
}

export function getAllEvents(): Event[] {
  return fs
    .readdirSync(EVENTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(parseEvent)
    .sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));
}

export function getEventBySlug(slug: string): Event | undefined {
  const file = path.join(EVENTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return undefined;
  return parseEvent(`${slug}.mdx`);
}

export function partitionEvents(
  events: Event[],
  now: Date
): { upcoming: Event[]; past: Event[] } {
  const today = now.toISOString().slice(0, 10);
  const upcoming = events
    .filter((e) => e.frontmatter.date > today)
    .sort((a, b) => a.frontmatter.date.localeCompare(b.frontmatter.date));
  const past = events.filter((e) => e.frontmatter.date <= today);
  return { upcoming, past };
}

export function deriveExcerpt(body: string): string {
  const first =
    body
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .find(Boolean) ?? "";
  const text = first
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#*_`>~-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > 160 ? `${text.slice(0, 157).trimEnd()}…` : text;
}

export function getExcerpt(event: Event): string {
  return event.frontmatter.excerpt ?? deriveExcerpt(event.body);
}

export function getRecentEvents(count: number, now: Date): Event[] {
  return partitionEvents(getAllEvents(), now).past.slice(0, count);
}
