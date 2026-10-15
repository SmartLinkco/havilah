export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "crops", label: "Crops" },
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
  title: "Fields, produce and packing",
  lede: "Filter the photographs, then open one for a larger view.",
} as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "yam",
    category: "crops",
    title: "Yam",
    caption: "Fresh white yam from the farm.",
    image: {
      src: "/images/products/yam-v2.webp",
      alt: "A Ghanaian yam-market pile of huge, dark, bark-skinned yam tubers standing on end, one cut across to show a round white face.",
      width: 1600,
      height: 900,
    },
  },
  {
    id: "sweet-potatoes",
    category: "crops",
    title: "Sweet potatoes",
    caption: "Fresh sweet potatoes from the field.",
    image: {
      src: "/images/products/sweet-potatoes.webp",
      alt: "A woven basket of reddish-brown sweet potatoes with soil on the skins, sitting on red earth in a green field.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "mangoes",
    category: "crops",
    title: "Mangoes",
    caption: "Ripe mangoes after harvest.",
    image: {
      src: "/images/products/mangoes.webp",
      alt: "Ripe mangoes with red and yellow skin packed in a wooden crate under a mango tree.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "watermelon",
    category: "crops",
    title: "Watermelon",
    caption: "Whole watermelons, with one cut open.",
    image: {
      src: "/images/products/watermelon.webp",
      alt: "Whole striped watermelons and one cut fruit with red flesh in a wooden crate on a farm field.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "habanero-pepper",
    category: "crops",
    title: "Habanero pepper",
    caption: "Fresh habanero peppers.",
    image: {
      src: "/images/products/habanero-pepper.webp",
      alt: "A basket of glossy orange and red habanero peppers in front of pepper plants.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "chilli-pepper",
    category: "crops",
    title: "Chilli pepper",
    caption: "Fresh red and green chilli peppers.",
    image: {
      src: "/images/products/chilli-pepper.webp",
      alt: "Three glossy red chilli peppers hanging from a green plant, with water droplets, fresh leaves, and warm sunrise light.",
      width: 1600,
      height: 900,
    },
  },
  {
    id: "cassava",
    category: "crops",
    title: "Cassava",
    caption: "Cassava roots ready for processing.",
    image: {
      src: "/images/products/cassava.webp",
      alt: "Pale cassava roots with rough brown skin stacked in a wooden crate on red soil, with leafy cassava plants behind.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "mango-orchard",
    category: "crops",
    title: "Mango orchard",
    caption: "Mango trees in the orchard.",
    image: {
      src: "/images/gallery/mango-orchard.webp",
      alt: "A mango orchard with rows of leafy trees carrying fruit.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "watermelon-pepper-field",
    category: "crops",
    title: "Watermelon and pepper",
    caption: "Watermelon in the field, with rows of pepper.",
    image: {
      src: "/images/gallery/watermelon-pepper-field.webp",
      alt: "A watermelon field with rows of pepper plants growing alongside.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "dried-mangoes",
    category: "processing",
    title: "Dried mangoes",
    caption: "Sun-dried mango slices on the racks.",
    image: {
      src: "/images/gallery/dried-mangoes.webp",
      alt: "Golden dried mango slices spread across mesh drying racks, with a paper bag of pieces in the foreground.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "sweet-potato-products",
    category: "processing",
    title: "Sweet potato products",
    caption: "Chips, flour and puree.",
    image: {
      src: "/images/gallery/sweet-potato-products.webp",
      alt: "A bowl of sweet potato chips, a jar of flour and a bowl of puree beside whole sweet potatoes on a wooden table.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "cassava-products",
    category: "processing",
    title: "Cassava products",
    caption: "Flour, starch and chips.",
    image: {
      src: "/images/gallery/cassava-products.webp",
      alt: "Cassava roots beside a bowl of flour, a jar of starch and a basket of cassava chips on a wooden table.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "chilli-powder",
    category: "processing",
    title: "Chilli powder",
    caption: "Ground red chilli with a few dried chillies.",
    image: {
      src: "/images/products/chilli-powder.webp",
      alt: "A wooden bowl of bright red chilli powder beside a few dried red chillies on a wooden table.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "packing-grading",
    category: "processing",
    title: "Packing and grading",
    caption: "Produce graded and packed for export.",
    image: {
      src: "/images/gallery/packing-grading.webp",
      alt: "An export packing area where produce is graded and packed.",
      width: 1280,
      height: 720,
    },
  },
];
