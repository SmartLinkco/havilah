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

export const team: TeamMember[] = [
  {
    id: "founder",
    name: "Harry Boakye Ofori-Attah Esq.",
    role: "Founder & Managing Director",
    bio: "Harry Boakye Ofori-Attah Esq. is a business leader, entrepreneur, and chartered professional whose passion for agriculture gave birth to Havilah Agro.",
    portrait: { kind: "initials", initials: "HO" },
  },
  {
    id: "director-1",
    name: "Director name",
    role: "Director",
    bio: "A short biography for this director.",
    portrait: { kind: "silhouette" },
  },
  {
    id: "director-2",
    name: "Director name",
    role: "Director",
    bio: "A short biography for this director.",
    portrait: { kind: "silhouette" },
  },
];
