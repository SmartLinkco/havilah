export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "land", label: "Land" },
  { id: "crops", label: "Crops" },
  { id: "team", label: "Team" },
  { id: "processing", label: "Processing" },
] as const;

export type GalleryCategory = (typeof galleryCategories)[number]["id"];

export type GalleryItem = {
  id: string;
  category: Exclude<GalleryCategory, "all">;
  title: string;
  caption: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const galleryIntro = {
  eyebrow: "Gallery",
  title: "Land, crops, people and packing",
  lede: "Filter the photographs, then open one for a larger view.",
} as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "land-1",
    category: "land",
    title: "Farm land",
    caption: "A wide view of the fields.",
    image: {
      src: "/images/land-1.webp",
      alt: "Green farm fields stretch toward a line of trees under a warm sky.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "land-2",
    category: "land",
    title: "Soil and rows",
    caption: "A closer view of the ground and planting rows.",
    image: {
      src: "/images/land-2.webp",
      alt: "Dark soil and young plants set in neat rows, seen from close range.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "crops-1",
    category: "crops",
    title: "Crop in the field",
    caption: "A crop growing in the field.",
    image: {
      src: "/images/crops-1.webp",
      alt: "Rows of young green crop plants run across a field toward distant trees.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "crops-2",
    category: "crops",
    title: "Harvest",
    caption: "A pineapple harvest in the field.",
    image: {
      src: "/images/crops-2.webp",
      alt: "A farmer cuts a ripe pineapple from its plant during harvest.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "team-1",
    category: "team",
    title: "People at work",
    caption: "People tending the crop rows.",
    image: {
      src: "/images/team-1.webp",
      alt: "Farm workers in hats and gloves tend rows of low green crops.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "team-2",
    category: "team",
    title: "Leadership",
    caption: "The leadership portrait also used on the About page.",
    image: {
      src: "/images/team-leadership.webp",
      alt: "A man in a light shirt stands among leafy crop rows on the farm.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "processing-1",
    category: "processing",
    title: "Packing",
    caption: "Cocoa pods being sorted.",
    image: {
      src: "/images/processing-1.webp",
      alt: "Gloved hands sort yellow cocoa pods on a wooden table in a packing shed.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "processing-2",
    category: "processing",
    title: "Ready to ship",
    caption: "Sacks of cocoa beans beside a container.",
    image: {
      src: "/images/processing-2.webp",
      alt: "Burlap sacks of cocoa beans stacked on pallets beside an open shipping container.",
      width: 1280,
      height: 720,
    },
  },
];
