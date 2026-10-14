export type ProduceItem = {
  id: string;
  name: string;
  headline: string;
  paragraphs: readonly string[];
  benefits: readonly string[];
  season: string;
  markets: string;
  capacity: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const produceIntro = {
  eyebrow: "Farm & produce",
  title: "Produce from the farm",
  lede: "Sweet potatoes, watermelon, habanero pepper, mangoes and cassava, grown in Ghana for buyers at home and abroad. Prices are on request. Nothing on this page is an offer to sell online.",
} as const;

export const products: ProduceItem[] = [
  {
    id: "sweet-potatoes",
    name: "Sweet potatoes",
    headline: "Sweet potatoes for trade and the table",
    paragraphs: [
      "Firm roots leave the field and reach you while they are still fresh, on a short path from harvest to delivery.",
      "Lots are sorted for size and condition, so wholesalers and kitchens receive a consistent grade.",
      "Households, hotels, restaurants and traders can take regular supply. Bulk and contract orders are welcome.",
    ],
    benefits: ["Farm-fresh", "Graded lots", "Bulk orders", "Reliable supply"],
    season: "",
    markets: "",
    capacity: "",
    image: {
      src: "/images/products/sweet-potatoes.webp",
      alt: "A woven basket of reddish-brown sweet potatoes with soil on the skins, sitting on red earth in a green field.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "watermelon",
    name: "Watermelon",
    headline: "Watermelon for markets, hotels and traders",
    paragraphs: [
      "Fruit is harvested and sent while it is fresh, so it arrives ready for the stall, the kitchen or the table.",
      "Each lot is checked for ripeness and condition before it leaves the farm.",
      "Market traders, hotels, restaurants and households can order in bulk or arrange a standing supply.",
    ],
    benefits: ["Farm-fresh", "Consistent lots", "Bulk orders"],
    season: "",
    markets: "",
    capacity: "",
    image: {
      src: "/images/products/watermelon.webp",
      alt: "Whole striped watermelons and one cut fruit with red flesh in a wooden crate on a farm field.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "pepper",
    name: "Pepper (Habanero)",
    headline: "Habanero pepper for sauces and the fresh trade",
    paragraphs: [
      "Pods are picked and moved quickly, so colour and heat stay close to the field.",
      "They are sorted by colour and condition for a more even lot.",
      "Buy them fresh, for hot sauces, or for further processing. Bulk and contract supply are available on request.",
    ],
    benefits: ["Farm-fresh", "Graded pods", "Bulk orders", "For processing"],
    season: "",
    markets: "",
    capacity: "",
    image: {
      src: "/images/products/habanero-pepper.webp",
      alt: "A basket of glossy orange and red habanero peppers in front of pepper plants.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "mangoes",
    name: "Mangoes",
    headline: "Mangoes for the fresh market and the kitchen",
    paragraphs: [
      "Fruit is harvested and forwarded while it is still fresh.",
      "Lots are graded for size and appearance, so kitchens and traders know what they are receiving.",
      "Households, hotels, restaurants and market traders can take bulk or contract supply.",
    ],
    benefits: ["Farm-fresh", "Graded fruit", "Bulk orders", "Reliable supply"],
    season: "",
    markets: "",
    capacity: "",
    image: {
      src: "/images/products/mangoes.webp",
      alt: "Ripe mangoes with red and yellow skin packed in a wooden crate under a mango tree.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "cassava",
    name: "Cassava",
    headline: "Cassava for gari, fufu and starch",
    paragraphs: [
      "Roots are lifted and moved promptly so they stay sound for cooking and processing.",
      "Lots are sorted for size and soundness before they leave the farm.",
      "Use them for household cooking, for gari and fufu, or for processing into starch. Bulk and contract supply are available on request.",
    ],
    benefits: ["Farm-fresh", "Bulk orders", "For processing", "Reliable supply"],
    season: "",
    markets: "",
    capacity: "",
    image: {
      src: "/images/products/cassava.webp",
      alt: "Pale cassava roots with rough brown skin stacked in a wooden crate on red soil, with leafy cassava plants behind.",
      width: 1280,
      height: 720,
    },
  },
];

export const interestOptions = [
  { value: "general", label: "General export enquiry" },
  { value: "partnership", label: "Partnership" },
  ...products.map((product) => ({ value: product.id, label: product.name })),
  { value: "other", label: "Something else" },
] as const;

export const exportSteps = [
  {
    title: "Grow",
    text: "Production on the farm in Ghana, using the mix of organic and inorganic methods the business has described.",
  },
  {
    title: "Harvest",
    text: "Harvest timing will be listed per crop once seasons are confirmed. No calendar is invented here.",
  },
  {
    title: "Pack",
    text: "Grading and packing steps will be written to match the farm’s real process and any buyer specifications.",
  },
  {
    title: "Ship",
    text: "Export documentation and routes will be described when logistics partners are confirmed.",
  },
] as const;
