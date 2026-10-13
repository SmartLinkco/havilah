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
};

export const galleryIntro = {
  eyebrow: "Gallery",
  title: "Land, crops, people and packing",
  lede: "Filters and the lightbox are ready. Each tile is marked Photo coming until original photographs arrive. Please send files at least 1600 pixels on the long edge, not images compressed by chat apps.",
} as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "land-1",
    category: "land",
    title: "Farm land",
    caption: "A wide view of the fields. Photograph coming.",
  },
  {
    id: "land-2",
    category: "land",
    title: "Soil and rows",
    caption: "A closer view of the ground and planting rows. Photograph coming.",
  },
  {
    id: "crops-1",
    category: "crops",
    title: "Crop in the field",
    caption: "A crop photograph tied to a confirmed product. Photograph coming.",
  },
  {
    id: "crops-2",
    category: "crops",
    title: "Harvest",
    caption: "Harvest in progress. Photograph coming.",
  },
  {
    id: "team-1",
    category: "team",
    title: "People at work",
    caption: "The team on the farm. Photograph coming, with permission to publish.",
  },
  {
    id: "team-2",
    category: "team",
    title: "Leadership",
    caption: "A portrait for the About page. Photograph coming.",
  },
  {
    id: "processing-1",
    category: "processing",
    title: "Packing",
    caption: "Produce being graded or packed. Photograph coming.",
  },
  {
    id: "processing-2",
    category: "processing",
    title: "Ready to ship",
    caption: "Packed produce prepared for export. Photograph coming.",
  },
];
