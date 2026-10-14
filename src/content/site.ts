export const site = {
  name: "Havilah Agro Ghana Limited",
  shortName: "Havilah Agro",
  tagline: "Rooted in Ghana, Reaching the World",
  description:
    "Rooted in Ghana, Reaching the World. Havilah Agro Ghana Limited is a Ghanaian agribusiness that grows, processes, and supplies premium produce to buyers at home and abroad.",
  draftNotice:
    "Draft site. Much of the wording, and the figures for acreage, volume and seasons, are still to be confirmed. The leaf-and-globe logo is the official mark.",
} as const;

export type PageKey =
  | "home"
  | "about"
  | "farm"
  | "sustainability"
  | "partners"
  | "gallery"
  | "contact"
  | "privacy";

export const pages: Record<
  PageKey,
  {
    path: string;
    navLabel: string;
    title: string;
    description: string;
    inNav: boolean;
    changeFrequency: "monthly" | "yearly";
    priority: number;
  }
> = {
  home: {
    path: "/",
    navLabel: "Home",
    title: "Havilah Agro Ghana Limited",
    description:
      "Rooted in Ghana, Reaching the World. Havilah Agro Ghana Limited grows, processes, and supplies premium produce to buyers at home and abroad.",
    inNav: true,
    changeFrequency: "monthly",
    priority: 1,
  },
  about: {
    path: "/about",
    navLabel: "About",
    title: "About",
    description:
      "Havilah Agro Ghana Limited grows, processes, and supplies premium produce to buyers at home and abroad. Rooted in Ghana, Reaching the World.",
    inNav: true,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  farm: {
    path: "/farm",
    navLabel: "Farm & Produce",
    title: "Our Produce",
    description:
      "Supplied to buyers in Ghana and exported to international markets. Fresh harvest and processed products from Havilah Agro Ghana Limited.",
    inNav: true,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  sustainability: {
    path: "/sustainability",
    navLabel: "Sustainability",
    title: "Sustainability",
    description: "We farm with the future in mind, caring for the land that feeds us.",
    inNav: true,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  partners: {
    path: "/partners",
    navLabel: "Partners",
    title: "Partners & Certifications",
    description:
      "Partner logos and certifications will appear only after Havilah Agro confirms them in writing. None are listed yet.",
    inNav: true,
    changeFrequency: "monthly",
    priority: 0.6,
  },
  gallery: {
    path: "/gallery",
    navLabel: "Gallery",
    title: "Gallery",
    description:
      "Photographs of the land, crops, team and packing at Havilah Agro Ghana Limited, with filters and a larger view.",
    inNav: true,
    changeFrequency: "monthly",
    priority: 0.6,
  },
  contact: {
    path: "/contact",
    navLabel: "Contact",
    title: "Contact",
    description:
      "Call or WhatsApp Havilah Agro Ghana Limited on 0244 869 488, or send an export inquiry. The postal address is in Tema.",
    inNav: true,
    changeFrequency: "yearly",
    priority: 0.7,
  },
  privacy: {
    path: "/privacy",
    navLabel: "Privacy",
    title: "Privacy",
    description:
      "How Havilah Agro Ghana Limited handles inquiry form details, email delivery, and optional spam and analytics tools.",
    inNav: false,
    changeFrequency: "yearly",
    priority: 0.3,
  },
};

export const navItems = (Object.keys(pages) as PageKey[])
  .filter((key) => pages[key].inNav)
  .map((key) => pages[key]);

export const home = {
  eyebrow: "",
  lede: "",
  produceTitle: "Our Produce",
  produceLede: "Supplied to buyers in Ghana and exported to international markets.",
  partnersTitle: "Partners",
  partnersLede:
    "A logo strip will sit here after each partner has given written permission. No logos are shown before that.",
  sustainabilityTitle: "Sustainability",
  sustainabilityLede: "We farm with the future in mind, caring for the land that feeds us.",
  ctaTitle: "Start an export conversation",
  ctaText:
    "Tell us the product, the country and an approximate volume. The inquiry goes to the farm by email, with WhatsApp as the fallback while mail is being set up.",
  hero: {
    src: "/images/home-hero.webp",
    poster: "/videos/hero-poster.webp",
    mp4: "/videos/hero.mp4",
    webm: "/videos/hero.webm",
    alt: "A wide view of lush green farm fields in warm evening light, with tall trees along the horizon.",
    width: 1600,
    height: 900,
  },
} as const;

export const cta = {
  inquiry: "Make an inquiry",
  produce: "View produce",
  sustainability: "Our approach",
  quote: "Request a quote",
} as const;
