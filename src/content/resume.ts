export type DisciplineId = "offshore" | "matchRacing" | "inshore";

export interface Discipline {
  id: DisciplineId;
  title: string;
  highlights: string[];
}

export interface Images {
  hero?: string;
  portrait?: string;
  disciplines: Partial<Record<DisciplineId, string>>;
}

// Drop a file into public/images/ and set the matching path here, e.g.
// hero: "/images/hero.jpg"
export const images: Images = {
  hero: "/images/hero.jpg",
  portrait: undefined,
  disciplines: {},
};

export interface JourneyNode {
  years: string;
  title: string;
  detail?: string;
}

export const disciplines: Discipline[] = [
  {
    id: "offshore",
    title: "Offshore",
    highlights: [
      "Vineyard Race '25 — 1st overall, PIC Figaro 2",
      "Newport–Bermuda '26 — 5th in class, PIC & navigator",
      "RORC Double-Handed Offshore Worlds '25 — represented Canada, 7th in final",
      "Marblehead–Halifax '23/'25 — PIC, Tripp 41",
    ],
  },
  {
    id: "matchRacing",
    title: "Match Racing",
    highlights: [
      "Oakcliff International '26 — 1st, pit, Riptide Racing",
      "Oakcliff Fall Grade 3 — 1st helming with True North",
      "Congressional Cup '25 — first Canadian team in 3 decades",
      "Ficker Cup '25 — 3rd",
    ],
  },
  {
    id: "inshore",
    title: "Inshore / One Design",
    highlights: [
      "IOD Worlds '25 — 2nd overall, tactician",
      "ORC Worlds '24 — 1st Corinthian, 2nd offshore race, skipper",
      "Chester Race Week '22 — 1st overall, youngest & first female skipper in class history",
      "J/24 North Americans '26 — 2nd overall",
    ],
  },
];

export const journey: JourneyNode[] = [
  { years: "2017–20", title: "Canadian Youth Sailing Team", detail: "Racing 420s nationally and internationally." },
  { years: "2018", title: "Youth Worlds, Poland", detail: "Represented Canada at the Youth Sailing World Championships." },
  { years: "2020", title: "Olympic Development Team", detail: "470 campaign with the national development squad." },
  { years: "2022", title: "Skipper of Hard Eight", detail: "Chester Race Week win — youngest and first female skipper in class history." },
  { years: "2024", title: "ORC Worlds, Newport–Bermuda, WMRT debut" },
  { years: "2025", title: "Vineyard Race win, RORC DH Worlds, IOD Worlds 2nd" },
  { years: "2026", title: "Oakcliff International win, Newport–Bermuda as PIC" },
];

export const distinctions: string[] = [
  "RNSYS Sailor of the Year '25",
  "Hal Davies Offshore Sailor of the Year '24",
  "Nova Scotia Female Sailor of the Year '22, '25",
  "NS Youth Sailor of the Year '18",
  "Shelburne Harbour YC Sailor of the Year '16, '22, '24",
  "The Magenta Project Offshore Pathway mentee",
  "Canada Ocean Racing Pathways Program (1 of 4)",
];

export const boats: string[] = [
  "Figaro 2",
  "Tripp 41",
  "IOD",
  "J/24",
  "J/105",
  "Melges 24",
  "IC37",
  "ClubSwan 28",
  "Farr 40",
  "Dazcat 1495",
  "Sunfast 30OD",
  "Swedish Match 40",
  "Catalina 37",
];

export const certifications: string[] = [
  "Offshore Safety at Sea",
  "SVOP",
  "MED 3 / SDV-BS",
  "Marine Basic First Aid",
  "ROC-M",
];

export const skillChips: string[] = [
  "Helm",
  "Tactics",
  "Trim",
  "Pit",
  "Navigation",
  "Crew management",
  "Splicing & rigging",
  "Expedition / B&G",
];
