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
  lede: "We speak directly with buyers and partners about produce from Ghana.",
} as const;

export const partners: Partner[] = [];

export const partnerEmpty = {
  title: "Partner logos",
  text: "Partner names are shown here when we have permission to share them.",
} as const;

export const certifications: Certification[] = [];

export const certificationEmpty = {
  title: "Certifications",
  text: "Certificates are shown here when we hold them. Nothing on this site is a certificate unless it is named on this page.",
} as const;
