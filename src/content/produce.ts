export type ProduceItem = {
  id: string;
  name: string;
  summary: string;
  season: string;
  markets: string;
  capacity: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const produceIntro = {
  eyebrow: "Farm & produce",
  title: "Produce from the farm",
  lede: "Sweet potatoes, watermelon, habanero pepper, mangoes and cassava, grown in Ghana for export buyers. Prices are on request. Nothing on this page is an offer to sell online.",
} as const;

export const products: ProduceItem[] = [
  {
    id: "sweet-potatoes",
    name: "Sweet potatoes",
    summary: "Sweet potatoes grown in Ghana for export buyers.",
    season: "",
    markets: "",
    capacity: "",
  },
  {
    id: "watermelon",
    name: "Watermelon",
    summary: "Watermelon grown in Ghana for export buyers.",
    season: "",
    markets: "",
    capacity: "",
  },
  {
    id: "pepper",
    name: "Pepper (Habanero)",
    summary: "Habanero pepper grown in Ghana for export buyers.",
    season: "",
    markets: "",
    capacity: "",
  },
  {
    id: "mangoes",
    name: "Mangoes",
    summary: "Mangoes grown in Ghana for export buyers.",
    season: "",
    markets: "",
    capacity: "",
  },
  {
    id: "cassava",
    name: "Cassava",
    summary: "Cassava grown in Ghana for export buyers.",
    season: "",
    markets: "",
    capacity: "",
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
