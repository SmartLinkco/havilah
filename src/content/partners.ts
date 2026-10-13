export type Partner = {
  id: string;
  name: string;
  blurb: string;
  logoSrc?: string;
  logoAlt?: string;
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  summary: string;
};

export const partnersIntro = {
  eyebrow: "Trust",
  title: "Partners and certifications",
  lede: "Logos and badges are withheld until Havilah Agro confirms each one in writing. An empty list is intentional.",
} as const;

export const partners: Partner[] = [];

export const partnerEmpty = {
  title: "Partner logos",
  text: "No partner logos are displayed. A name, a short note and a logo file will be added only after the farm confirms permission to show them.",
} as const;

export const certifications: Certification[] = [];

export const certificationEmpty = {
  title: "Certifications",
  text: "No certifications are listed. Organic, export or quality badges will appear only when a real certificate is confirmed. Nothing on this site should be read as a certified claim.",
} as const;
