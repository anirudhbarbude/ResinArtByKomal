import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  width: number;
  height: number;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;

export const getImage = (id: string): ImagePlaceholder => {
  const img = PlaceHolderImages.find((p) => p.id === id);
  if (!img) {
    // In a real app, you might want a default fallback image
    return {
      id: 'not-found',
      description: 'Image not found',
      imageUrl: 'https://picsum.photos/seed/notfound/600/600',
      imageHint: 'placeholder',
      width: 600,
      height: 600,
    };
  }
  return img;
};
