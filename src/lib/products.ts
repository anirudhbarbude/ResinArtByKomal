
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
  {
    id: "9",
    name: "Moksmala Frame",
    description: "A beautiful Moksmala frame preserved in resin, ideal for gifting.",
    image: getImage("moksmala-frame-1"),
    category: "Designs",
  },
  {
    id: "10",
    name: "Beach Theme Clock",
    description: "A wall clock with a stunning beach and ocean wave theme, bringing the sea to you.",
    image: getImage("beach-theme-clock-1"),
    category: "Home Decor",
  },
  {
    id: "11",
    name: "Vintage Flower Preservation",
    description: "Preserve your cherished memories with vintage custom flower preservation in resin.",
    image: getImage("flower-preservation-1"),
    category: "Designs",
  },
  {
    id: "12",
    name: "Customised Diyas",
    description: "Brighten up your festivals with a set of customized, decorated diyas.",
    image: getImage("custom-diyas-1"),
    category: "Home Decor",
  },
  {
    id: "13",
    name: "Birthmoon Pendants",
    description: "A personalized pendant showing the moon phase from a special date. A unique gift.",
    image: getImage("birthmoon-pendant-1"),
    category: "Jewellery",
  },
  {
    id: "14",
    name: "Resin Necklaces",
    description: "Elegant and unique resin necklaces that are handcrafted with real flowers.",
    image: getImage("resin-necklaces-1"),
    category: "Jewellery",
  },
  {
    id: "15",
    name: "Handmade Tissue Box",
    description: "A stylish handmade tissue box with creative resin art to decorate your space.",
    image: getImage("tissue-box-1"),
    category: "Home Decor",
  },
  {
    id: "16",
    name: "Handmade Scanner Stand",
    description: "A unique stand for your QR code scanner, decorated with beautiful resin art.",
    image: getImage("scanner-stand-1"),
    category: "Designs",
  },
  {
    id: "17",
    name: "Komoflora Rose Vase",
    description: "A delicate and beautiful Komoflora vase, perfect for a single rose, with resin accents.",
    image: getImage("rose-vase-1"),
    category: "Home Decor",
  },
  {
    id: "18",
    name: "Resin Oceanic Diary",
    description: "Capture your thoughts in a journal with a stunning oceanic themed resin cover.",
    image: getImage("oceanic-journal-1"),
    category: "Designs",
  },
  {
    id: "19",
    name: "Navkar Mantra Standee",
    description: "A sacred Navkar Mantra standee crafted with artistic resin for your spiritual space.",
    image: getImage("navkar-mantra-standee-1"),
    category: "Art work",
  },
  {
    id: "20",
    name: "Resin Art Thali",
    description: "A versatile and decorative art thali made with vibrant resin for any occasion.",
    image: getImage("resin-art-thali-1"),
    category: "Home Decor",
  },
  {
    id: "21",
    name: "Shree Krishna Art",
    description: "An inspiring and divine art piece of Shree Krishna made with high-quality resin.",
    image: getImage("shree-krishna-art-1"),
    category: "Art work",
  },
  {
    id: "22",
    name: "Resin Ring Platter",
    description: "An exquisite custom resin ring platter for your engagement ceremony.",
    image: getImage("resin-ring-platter-1"),
    category: "Designs",
  },
  {
    id: "23",
    name: "Handmade Birthday Bouquet",
    description: "A beautiful handmade birthday bouquet of flowers, preserved forever in clear resin.",
    image: getImage("birthday-bouquet-1"),
    category: "Designs",
  },
  {
    id: "24",
    name: "Ganpati Standee",
    description: "An artistic standee of Lord Ganpati to bring blessings and beauty to your home or office.",
    image: getImage("ganpati-standee-1"),
    category: "Art work",
  },
  {
    id: "25",
    name: "Marriage Decoration Art",
    description: "A beautiful resin art piece for marriage decoration, preserving a varmala.",
    image: getImage("marriage-decoration-1"),
    category: "Designs",
  },
  {
    id: "26",
    name: "Custom Varmala Pendant",
    description: "An elegant and unique resin pendant, created from your varmala.",
    image: getImage("resin-pendant-1"),
    category: "Jewellery",
  },
  {
    id: "27",
    name: "3D Car Art Gift",
    description: "A unique 3D car art piece, perfect as a gift for car enthusiasts.",
    image: getImage("3d-car-art-gift-1"),
    category: "Art work",
  }
];

    