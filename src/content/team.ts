export type TeamPortrait =
  | { kind: "photo"; src: string; alt: string }
  | { kind: "initials"; initials: string }
  | { kind: "silhouette" };

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  portrait: TeamPortrait;
};

export const teamSection = {
  id: "team",
  title: "Meet the Team",
  lede: "The people leading Havilah Agro Ghana Limited.",
} as const;

export const founder = {
  id: "founder",
  teaserTitle: "Meet Our Founder",
  name: "Harry Boakye Ofori-Attah Esq.",
  role: "Founder & CEO",
  teaser:
    "Harry Boakye Ofori-Attah Esq. is a business leader, entrepreneur, and chartered professional whose passion for agriculture gave birth to Havilah Agro.",
  paragraphs: [
    "Harry Boakye Ofori-Attah Esq. is a business leader, entrepreneur, and chartered professional whose passion for agriculture gave birth to Havilah Agro. With over a decade of experience in business management and enterprise growth, he brings corporate discipline, integrity, and vision to modern farming.",
    "He is driven by a simple purpose: to build a sustainable, thriving agribusiness that promotes food security, creates lasting value from Ghana's rich land, and carries Ghanaian produce to the world.",
  ],
  portrait: { kind: "initials", initials: "HO" },
} as const;

export const directors: TeamMember[] = [
  {
    id: "daniel-adjei",
    name: "Daniel Adjei",
    role: "Director",
    bio: "Director, Havilah Agro Ghana Limited.",
    portrait: { kind: "initials", initials: "DA" },
  },
  {
    id: "selorm-sepenu",
    name: "Selorm Sepenu",
    role: "Director",
    bio: "Director, Havilah Agro Ghana Limited.",
    portrait: { kind: "initials", initials: "SS" },
  },
  {
    id: "malorfa-aryee",
    name: "Malorfa Aryee",
    role: "Public Relations, Havilah Agro Ghana Limited",
    bio: "",
    portrait: { kind: "initials", initials: "MA" },
  },
];
