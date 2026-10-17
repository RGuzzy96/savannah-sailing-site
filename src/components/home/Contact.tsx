import { site } from "@/content/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import {
  MailIcon,
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/ui/Icons";

const socialIcons = { instagram: InstagramIcon, facebook: FacebookIcon };

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-navy-950">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          dark
          eyebrow="Get in touch"
          title="Always looking for the next race."
          lede="Available for crew, skipper, and navigator roles — offshore deliveries, distance races, match-racing events, and one-design campaigns. If you need a hand on board, reach out."
        />
        <Reveal className="flex flex-wrap items-center gap-4">
          <Button href={`mailto:${site.email}`} variant="light">
            <MailIcon className="h-4 w-4" /> {site.email}
          </Button>
          <Button
            href={site.whatsapp.href}
            variant="ghost"
            external
            className="border-white/30 text-white hover:border-white/70"
          >
            <WhatsAppIcon className="h-4 w-4" /> {site.whatsapp.display}
          </Button>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 flex items-center gap-5">
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
                <Icon className="h-6 w-6" />
              </a>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
