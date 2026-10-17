# Savannah Taylor — Sailing

Personal sailing site: a digital-resume home page plus an MDX-driven events
blog (Upcoming / Recent). Built with Next.js 16 (App Router, Turbopack),
Tailwind CSS v4, and framer-motion. Content lives in the repo — no CMS.

## Stack

- `next@16` + React 19, `tailwindcss@4` (`@theme` tokens in
  `src/app/globals.css`), `framer-motion` for animation
- Events: `content/events/*.mdx` + `gray-matter` + `next-mdx-remote`
- Fonts: Fraunces (display) + Inter (body) via `next/font/google`

## Commands

```bash
npm run dev     # dev server → http://localhost:3000
npm run build   # production build (also validates every event's frontmatter)
npm start       # serve the production build
npm run lint
```

## Adding an event

1. Create `content/events/<slug>.mdx` — the slug becomes the URL
   (`/events/<slug>`). Use lowercase-kebab-case.
2. Fill in the frontmatter (table below). Dates must be ISO `YYYY-MM-DD`.
   Add a `# dates approximate — confirm` comment while dates are unconfirmed.
3. Write 2–3 paragraphs of body text (Markdown/MDX). Add links to Instagram /
   Facebook posts under `links:`.
4. (Optional) Add a cover photo to `public/images/events/` and set
   `cover: "/images/events/<file>.jpg"`. Without one, a placeholder block is
   rendered.
5. Commit and push — Vercel redeploys and the event appears. `npm run build`
   locally catches frontmatter mistakes (it throws with the filename).

### Frontmatter fields

| Field | Required | Notes |
|---|---|---|
| `title` | yes | Displayed on cards and the event page |
| `date` | yes | ISO date; drives sorting + Upcoming/Recent |
| `location` | yes | |
| `discipline` | yes | `offshore` \| `match-racing` \| `inshore` |
| `endDate` | no | Shown as a date range |
| `result` | no | Sand-accent badge on cards; omit for upcoming |
| `role`, `boat` | no | Shown in the meta row |
| `cover` | no | Path under `/public` |
| `excerpt` | no | Defaults to the first paragraph (≤160 chars) |
| `links` | no | `- { label, url, platform: instagram|facebook }` |

**Upcoming vs Recent is decided at build time** (event `date` vs the deploy
date). An upcoming event moves to Recent on the next deploy — just push any
change (or wait for a scheduled rebuild) after it happens.

## Adding photos

Every photo slot is a gradient `ImagePlaceholder` until a real image is set.
To swap one in, drop the file in `public/images/` and:

- **Hero / About portrait / Discipline cards** — set paths in the `images`
  map in `src/content/resume.ts`:
  `images.hero`, `images.portrait`,
  `images.disciplines.{offshore|matchRacing|inshore}`.
- **Event covers** — set `cover:` in the event's frontmatter.

No component edits needed.

## Editing resume content

- `src/content/resume.ts` — disciplines & highlights, journey timeline,
  distinctions, boat list, certifications, skills chips, `images` map.
- `src/content/site.ts` — name, tagline, location, `email`, `whatsapp`, and
  `socials` (currently `https://instagram.com/CHANGEME` /
  `https://facebook.com/CHANGEME` — replace with real URLs).

## Notes

- The intro animation (`src/components/intro/IntroVoyage.tsx`) plays on every
  hard load and is skippable (click, "Skip", or Esc). To restrict it to the
  home page only, gate the component inside `IntroVoyage` (e.g. on pathname).
- Image placeholder labels are visible until photos arrive — set
  `showLabel={false}` on `ImagePlaceholder` to hide them.
