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
  title: "What the farm will offer buyers",
  lede: "The cards below are example slots. Names, seasons, markets and capacity stay unmarked as confirmed facts until Havilah Agro sends the product list. Nothing on this page is an offer to sell online.",
} as const;

export const products: ProduceItem[] = [
  {
    id: "cocoa",
    name: "Example: cocoa",
    summary:
      "A sample card for a cocoa line. Description, grade and availability will be replaced when the farm confirms this crop, or removed if it is not grown.",
    season: "Season to be confirmed",
    markets: "Export markets to be confirmed",
    capacity: "Capacity to be confirmed",
    image: {
      src: "/images/produce-cocoa.webp",
      alt: "Ripe yellow cocoa pods on a trunk, one split open to show the pale beans inside.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "cashew",
    name: "Example: cashew",
    summary:
      "A sample card for a cashew line. Use it to review the layout. It is not a statement that the farm currently exports cashew.",
    season: "Season to be confirmed",
    markets: "Export markets to be confirmed",
    capacity: "Capacity to be confirmed",
    image: {
      src: "/images/produce-cashew.webp",
      alt: "A wooden bowl of curved cashew nuts on a wooden surface, with green leaves beside it.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "shea",
    name: "Example: shea",
    summary:
      "A sample card for a shea line. Processing notes and buyer specifications will be added only if this product is confirmed.",
    season: "Season to be confirmed",
    markets: "Export markets to be confirmed",
    capacity: "Capacity to be confirmed",
    image: {
      src: "/images/produce-shea.webp",
      alt: "A cluster of green shea fruit hanging among dense leaves.",
      width: 1280,
      height: 720,
    },
  },
  {
    id: "pineapple",
    name: "Example: pineapple",
    summary:
      "A sample card for a fresh-produce line. Pack format, season and cold-chain notes are waiting on the farm.",
    season: "Season to be confirmed",
    markets: "Export markets to be confirmed",
    capacity: "Capacity to be confirmed",
    image: {
      src: "/images/produce-pineapple.webp",
      alt: "A ripe pineapple with a spiky crown resting on a wooden surface.",
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
