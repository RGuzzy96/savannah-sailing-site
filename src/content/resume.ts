export type DisciplineId = "offshore" | "matchRacing" | "inshore";

export interface Discipline {
  id: DisciplineId;
  title: string;
  highlights: string[];
  imagePosition?: string;
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
  disciplines: {
    offshore: "/images/offshore.jpeg",
    matchRacing: "/images/match_racing.jpeg",
    inshore: "/images/one_design.jpeg",
  },
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
      "Newport to Bermuda '26 — 5th in class as person in charge and navigator, Figaro 2",
      "RORC Caribbean 600 '25 & '26 — Dazcat 1495 and Beneteau First 36.7",
      "RORC Double-Handed Offshore Worlds '25 — 4th in the qualifier, 7th in the final",
      "Vineyard Race '25 — 1st overall, PIC on Figaro 2",
      "Marblehead to Halifax '23 & '25 — PIC, selected to represent Canada for the team trophy",
      "Vineyard Race '24 — 1st Corinthian, 3rd in class, person in charge",
      "Newport to Bermuda '24 — 5th in class on a Tripp 41; sole manager of the boat",
      "Canada Ocean Racing Pathways Program '25 — one of four sailors accepted",
    ],
  },
  {
    id: "matchRacing",
    title: "Match Racing",
    highlights: [
      "Oakcliff International '26 — 1st, pit for Riptide Racing",
      "Oakcliff Fall Grade 3 — 1st, helming with youth team True North",
      "Congressional Cup '25 — qualified as the first Canadian team in three decades",
      "Ficker Cup '25 — 3rd",
      "Storm Match Racing — pit, top 10 in the World Match Racing Open rankings",
    ],
  },
  {
    id: "inshore",
    title: "Inshore / One Design",
    imagePosition: "object-[center_20%]",
    highlights: [
      "IC37 North Americans '26 — 8th, jib trim for Team Balthasar",
      "NYYC Women's Invitational '26 — main trimmer and co-skipper, Team Kairos",
      "Chester Race Week '26 — 2nd, Melges 24 class, main trim/helm",
      "J/24 North Americans '26 — 1st Corinthian, 2nd overall",
      "IOD Worlds '25 — 2nd overall, tactician; 1st at the 2026 Worlds qualifier",
      "J/24 US Nationals '25 — 1st Corinthian, 2nd overall",
      "Nations League USA — main trimmer, Magenta Project ClubSwan Academy",
      "ORC Worlds '24 — 1st Corinthian in ORC B and 2nd overall in the offshore race, skipper",
      "EDHEC '24 — 2nd at the world's largest university regatta, tactician",
      "Chester Race Week '22 — 1st overall",
    ],
  },
];

export const journey: JourneyNode[] = [
  { years: "2017–20", title: "Canadian Youth Sailing Team", detail: "Racing 420s nationally and internationally." },
  { years: "2018", title: "Youth Worlds, Poland", detail: "Represented Canada at the Youth Sailing World Championships." },
  { years: "2022", title: "Skipper of Hard Eight", detail: "Chester Race Week win." },
  { years: "2023", title: "First Offshore", detail: "Marblehead to Halifax"},
  { years: "2024", title: "ORC Worlds, Newport to Bermuda, WMRT debut" },
  { years: "2025", title: "Vineyard Race overall win, RORC DH Worlds, IOD Worlds 2nd" },
  { years: "2026", title: "NYYC WIC, Oakcliff International win, Newport to Bermuda shorthanded" },
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
