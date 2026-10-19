export type SocialPlatform = "instagram" | "facebook";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export const site = {
  name: "Savannah Taylor",
  shortName: "ST",
  tagline:
    "24-year-old sailor from Nova Scotia, Canada, competing across offshore, one design and match racing disciplines.",
  location: "Nova Scotia, Canada",
  email: "sjt4@live.ca",
  whatsapp: {
    display: "+1 (902) 875-6099",
    href: "https://wa.me/19028756099",
  },
  socials: [
    { platform: "instagram", url: "https://instagram.com/savannahtaylr" },
    { platform: "facebook", url: "https://facebook.com/savannah.taylor.58118" },
  ] as SocialLink[],
};
