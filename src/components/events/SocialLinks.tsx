import type { EventLink } from "@/lib/events";
import { InstagramIcon, FacebookIcon } from "@/components/ui/Icons";

const platformIcons: Record<string, typeof InstagramIcon> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
};

export default function SocialLinks({ links }: { links: EventLink[] }) {
  if (!links.length) return null;
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((l) => {
        const Icon = (l.platform && platformIcons[l.platform]) || null;
        return (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-navy-900/20 px-4 py-2 text-sm font-medium text-navy-900 transition-colors hover:border-navy-900/50"
          >
            {Icon ? <Icon className="h-4 w-4" /> : null}
            {l.label}
          </a>
        );
      })}
    </div>
  );
}
