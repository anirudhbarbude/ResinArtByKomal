
import type { ImagePlaceholder } from "./placeholder-images";
import { getImage } from "./placeholder-images";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: ImagePlaceholder;
  category: "Home Decor" | "Art work" | "Designs" | "Jewellery";
};

export const products: Product[] = [
  {
    id: "1",
    name: "Blue Hour Sip Wine Glass",
    description: "Elegant wine glass with a touch of blue resin art, perfect for special occasions.",
    image: getImage("wine-glass-1"),
    category: "Home Decor",
  },
  {
    id: "2",
    name: "Shubh Labh Hangings",
    description: "Welcome prosperity with these artistic Shubh Labh hangings for your home entrance.",
    image: getImage("shubh-labh-1"),
    category: "Home Decor",
  },
  {
    id: "3",
    name: "Decorative Tilak Thali",
    description: "A beautifully decorated thali for auspicious occasions and religious ceremonies.",
    image: getImage("tilak-thali-1"),
    category: "Home Decor",
  },
  {
    id: "4",
    name: "Handcrafted Resin Rakhi",
    description: "Celebrate the bond of love with a unique, handcrafted resin Rakhi for your brother.",
    image: getImage("rakhi-1"),
    category: "Jewellery",
  },
  {
    id: "5",
    name: "25th Anniversary Engagement Platter",
    description: "A custom platter celebrating 25 years of togetherness, beautifully crafted with resin.",
    image: getImage("resin-tray-1"),
    category: "Designs",
  },
  {
    id: "6",
    name: "Miniature Family Photo Frame",
    description: "Preserve your precious memories in a custom miniature photo frame with resin details.",
    image: getImage("frame-1"),
    category: "Designs",
  },
  {
    id: "7",
    name: "Custom Marriage Frame",
    description: "A personalized resin frame to cherish the special moments of your wedding day.",
    image: getImage("frame-2"),
    category: "Designs",
  },
  {
    id: "8",
    name: "Customised Phone Cover",
    description: "Protect your phone in style with a unique, custom-designed resin phone cover.",
    image: getImage("phone-cover-1"),
    category: "Designs",
  },
];
