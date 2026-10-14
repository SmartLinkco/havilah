export const site = {
  name: "Havilah Agro Ghana Limited",
  shortName: "Havilah Agro",
  tagline: "Grown in Ghana. Trusted worldwide.",
  description:
    "Havilah Agro Ghana Limited is an export-focused Ghanaian farm. The site introduces the business and takes buyer inquiries. There is no online shop.",
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
      "Export-focused farm in Ghana. About 80–90% of production is aimed at buyers abroad. Inquire directly. No online sales.",
    inNav: true,
    changeFrequency: "monthly",
    priority: 1,
  },
  about: {
    path: "/about",
    navLabel: "About",
    title: "About",
    description:
      "The story, mission and approach of Havilah Agro Ghana Limited. Team profiles will be added when the farm confirms them.",
    inNav: true,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  farm: {
    path: "/farm",
    navLabel: "Farm & Produce",
    title: "Farm & Produce",
    description:
      "Example produce cards, the export path from farm to shipment, and a quote request. Seasons and volumes are not yet confirmed.",
    inNav: true,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  sustainability: {
    path: "/sustainability",
    navLabel: "Sustainability",
    title: "Sustainability",
    description:
      "How Havilah Agro intends to combine organic and inorganic methods. These notes are not certifications or audited claims.",
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
      "Send an export inquiry to Havilah Agro Ghana Limited, or use WhatsApp, phone and email once the farm confirms those details.",
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

export const highlights = [
  {
    title: "Export focus",
    text: "The farm aims to export about 80–90% of what it grows. The balance stays closer to home. Operating volumes are still to be confirmed.",
  },
  {
    title: "Sustainability-led",
    text: "Stewardship of the land guides the work. Specific practices will be published when the farm can describe them precisely.",
  },
  {
    title: "Organic and inorganic",
    text: "Both methods are part of the approach. They are combined with a reason, not presented as a certified organic claim.",
  },
  {
    title: "Built for buyers",
    text: "The site is for trust and inquiries. There is no catalogue checkout and no online payment.",
  },
] as const;

export const home = {
  eyebrow: "Export farming · Ghana",
  lede: "Havilah Agro Ghana Limited grows for buyers who need a clear Ghanaian origin. This introduction is draft copy. The farm’s own wording will replace it.",
  introTitle: "A farm prepared for export conversations",
  intro:
    "Buyers, partners and investors can see how the business is set up: an export aim of 80–90%, a sustainability-led approach, and a mix of organic and inorganic methods. Figures for acreage, volume and season will be added when they are confirmed.",
  produceTitle: "Produce",
  produceLede:
    "These cards show the layout only. Each crop is an example until Havilah Agro confirms the real product list, seasons and markets.",
  partnersTitle: "Partners",
  partnersLede:
    "A logo strip will sit here after each partner has given written permission. No logos are shown before that.",
  sustainabilityTitle: "How the farm intends to work",
  sustainabilityLede:
    "Organic and inorganic methods sit in one plan. The sustainability page sets out that intention without claiming certificates the farm has not provided.",
  ctaTitle: "Start an export conversation",
  ctaText:
    "Tell us the product, the country and an approximate volume. The inquiry goes to the farm by email, with WhatsApp as the fallback while mail is being set up.",
  hero: {
    src: "/images/home-hero.webp",
    alt: "A wide view of lush green farm fields in warm evening light, with tall trees along the horizon.",
    width: 1280,
    height: 720,
  },
} as const;

export const cta = {
  inquiry: "Make an inquiry",
  produce: "View produce",
  sustainability: "Our approach",
  quote: "Request a quote",
} as const;
