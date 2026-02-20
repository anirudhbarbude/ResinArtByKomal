import type { ImagePlaceholder } from "./placeholder-images";
import { getImage } from "./placeholder-images";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: ImagePlaceholder;
  category: "Home Decor" | "Art work" | "Designs" | "Jewellery";
};

export const products: Product[] = [
  {
    id: "1",
    name: "Azure Geode Coasters",
    description:
      "Set of four handcrafted coasters inspired by azure geodes. A touch of gold leaf adds a luxurious finish, perfect for protecting your surfaces in style.",
    price: "$45.00",
    image: getImage("resin-coasters-1"),
    category: "Home Decor",
  },
  {
    id: "2",
    name: "Enchanted Garden Tray",
    description:
      "A beautiful serving or vanity tray with real preserved flowers and foliage. Each piece is unique, bringing a piece of nature into your home.",
    price: "$70.00",
    image: getImage("resin-tray-1"),
    category: "Designs",
  },
  {
    id: "3",
    name: "Amethyst Swirl Earrings",
    description:
      "Lightweight and elegant drop earrings featuring swirls of amethyst purple and pearly white. Hypoallergenic silver-plated hooks.",
    price: "$25.00",
    image: getImage("resin-jewelry-1"),
    category: "Jewellery",
  },
  {
    id: "4",
    name: "Crystal Slice Wall Art",
    description:
      "A stunning statement piece for your wall, mimicking the intricate beauty of a natural crystal geode. Measures 24 inches in diameter.",
    price: "$250.00",
    image: getImage("resin-wall-art-1"),
    category: "Art work",
  },
  {
    id: "5",
    name: "Ocean Wave Clock",
    description:
      "Keep time with the serene beauty of the ocean. This 12-inch wall clock features realistic lacing waves on a wooden base.",
    price: "$120.00",
    image: getImage("resin-clock-1"),
    category: "Home Decor",
  },
  {
    id: "6",
    name: "Galaxy Initial Keychain",
    description:
      "Personalize your keys with a custom initial keychain. Filled with deep space colors and a sprinkle of star-like glitter.",
    price: "$15.00",
    image: getImage("resin-keychains-1"),
    category: "Jewellery",
  },
];
