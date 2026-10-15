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
        id: "yam",
        name: "Yam",
        description: "Firm white yam with a rich, earthy taste.",
        benefits: freshBenefits,
        image: {
          src: "/images/products/yam-v2.webp",
          alt: "A Ghanaian yam-market pile of huge, dark, bark-skinned yam tubers standing on end, one cut across to show a round white face.",
          width: 1600,
          height: 900,
        },
      },
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
      {
        id: "chilli-pepper",
        name: "Chilli Pepper",
        description: "Slender red chillies with a bright, lively heat.",
        benefits: freshBenefits,
        image: {
          src: "/images/products/chilli-pepper.webp",
          alt: "Three glossy red chilli peppers hanging from a green plant, with water droplets, fresh leaves, and warm sunrise light.",
          width: 1600,
          height: 900,
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
          src: "/images/gallery/dried-mangoes.webp",
          alt: "Golden dried mango slices spread across mesh drying racks, with a paper bag of pieces in the foreground.",
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
          src: "/images/gallery/sweet-potato-products.webp",
          alt: "A bowl of sweet potato chips, a jar of flour and a bowl of puree beside whole sweet potatoes on a wooden table.",
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
          src: "/images/gallery/cassava-products.webp",
          alt: "Cassava roots beside a bowl of flour, a jar of starch and a basket of cassava chips on a wooden table.",
          width: 1280,
          height: 720,
        },
      },
      {
        id: "chilli-powder",
        name: "Chilli Powder",
        description: "Fine red chilli powder with a warm, lasting heat.",
        benefits: processedBenefits,
        image: {
          src: "/images/products/chilli-powder.webp",
          alt: "A wooden bowl of bright red chilli powder beside a few dried red chillies on a wooden table.",
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
