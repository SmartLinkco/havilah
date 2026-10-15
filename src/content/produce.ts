export type ProduceItem = {
  id: string;
  name: string;
  description: string;
  benefits: readonly string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

const freshBenefits = ["Farm-fresh", "Bulk orders", "Reliable supply"] as const;
const processedBenefits = ["Bulk orders", "Reliable supply"] as const;

export const produceIntro = {
  title: "Our Produce",
  lede: "Supplied to buyers in Ghana and exported to international markets.",
} as const;

export const produceGroups: { id: string; title: string; products: ProduceItem[] }[] = [
  {
    id: "fresh-harvest",
    title: "Fresh Harvest",
    products: [
      {
        id: "sweet-potatoes",
        name: "Sweet Potatoes",
        description: "Nutritious, naturally sweet tubers.",
        benefits: freshBenefits,
        image: {
          src: "/images/products/sweet-potatoes.webp",
          alt: "A woven basket of reddish-brown sweet potatoes with soil on the skins, sitting on red earth in a green field.",
          width: 1280,
          height: 720,
        },
      },
      {
        id: "mangoes",
        name: "Mangoes",
        description: "Sun-ripened and full of flavour.",
        benefits: freshBenefits,
        image: {
          src: "/images/products/mangoes.webp",
          alt: "Ripe mangoes with red and yellow skin packed in a wooden crate under a mango tree.",
          width: 1280,
          height: 720,
        },
      },
      {
        id: "watermelon",
        name: "Watermelon",
        description: "Juicy, sweet melons grown under Ghana's sun.",
        benefits: freshBenefits,
        image: {
          src: "/images/products/watermelon.webp",
          alt: "Whole striped watermelons and one cut fruit with red flesh in a wooden crate on a farm field.",
          width: 1280,
          height: 720,
        },
      },
      {
        id: "pepper",
        name: "Habanero Pepper",
        description: "Fiery, aromatic peppers.",
        benefits: freshBenefits,
        image: {
          src: "/images/products/habanero-pepper.webp",
          alt: "A basket of glossy orange and red habanero peppers in front of pepper plants.",
          width: 1280,
          height: 720,
        },
      },
    ],
  },
  {
    id: "processed-products",
    title: "Processed Products",
    products: [
      {
        id: "dried-mangoes",
        name: "Dried Mangoes",
        description: "Sun-ripened mangoes preserved for longer shelf life and easy export.",
        benefits: processedBenefits,
        image: {
          src: "/images/products/mangoes.webp",
          alt: "Ripe mangoes with red and yellow skin packed in a wooden crate under a mango tree.",
          width: 1280,
          height: 720,
        },
      },
      {
        id: "sweet-potato-products",
        name: "Sweet Potato Products",
        description: "Chips, flour, and puree that last longer and travel better.",
        benefits: processedBenefits,
        image: {
          src: "/images/products/sweet-potatoes.webp",
          alt: "A woven basket of reddish-brown sweet potatoes with soil on the skins, sitting on red earth in a green field.",
          width: 1280,
          height: 720,
        },
      },
      {
        id: "cassava",
        name: "Cassava",
        description: "A versatile staple, supplied as flour, starch, and chips.",
        benefits: processedBenefits,
        image: {
          src: "/images/products/cassava.webp",
          alt: "Pale cassava roots with rough brown skin stacked in a wooden crate on red soil, with leafy cassava plants behind.",
          width: 1280,
          height: 720,
        },
      },
    ],
  },
];

export const products: ProduceItem[] = produceGroups.flatMap((group) => group.products);

export const interestOptions = [
  { value: "general", label: "General export enquiry" },
  { value: "partnership", label: "Partnership" },
  ...products.map((product) => ({ value: product.id, label: product.name })),
  { value: "other", label: "Something else" },
] as const;
