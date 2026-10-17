import { site } from "@/content/site";
import { InstagramIcon, FacebookIcon, MailIcon } from "@/components/ui/Icons";

const socialIcons = { instagram: InstagramIcon, facebook: FacebookIcon };

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-foam-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-14 text-center">
        <p className="font-display text-xl tracking-tight text-white">
          {site.name}
        </p>
        <p className="text-sm text-foam-100/70">{site.location}</p>
        <div className="flex items-center gap-5">
          {site.socials.map((s) => {
            const Icon = socialIcons[s.platform];
            return (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.platform}
                className="text-foam-100/70 transition-colors hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="text-foam-100/70 transition-colors hover:text-white"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
        <a
          href={`mailto:${site.email}`}
          className="text-sm text-foam-100/70 transition-colors hover:text-white"
        >
          {site.email}
        </a>
        <p className="text-xs text-foam-100/50">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
