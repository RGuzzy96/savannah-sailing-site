export type SocialPlatform = "instagram" | "facebook";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export const site = {
  name: "Savannah Taylor",
  shortName: "ST",
  tagline:
    "Sailor from Nova Scotia racing offshore, on the World Match Racing Tour, and in one-design fleets across North America and Europe.",
  location: "Nova Scotia, Canada",
  email: "sjt4@live.ca",
  whatsapp: {
    display: "+1 (902) 875-6099",
    href: "https://wa.me/19028756099",
  },
  socials: [
    { platform: "instagram", url: "https://instagram.com/CHANGEME" },
    { platform: "facebook", url: "https://facebook.com/CHANGEME" },
  ] as SocialLink[],
};
