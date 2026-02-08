export interface ImageCategory {
  id: number;
  title: string;
  images: string[];
}

// Background image for the final proposal
export const backgroundImage = "/images/valentine/IMG-20251230-WA0027.jpg";

// Image categories for the gallery
export const imageCategories: ImageCategory[] = [
  {
    id: 1,
    title: "Those Eyes 🥰",
    images: [
      "/images/eyes/IMG-20250720-WA0001.jpg",
      "/images/eyes/signal-2025-10-02-09-38-22-042.jpg",
    ],
  },
  {
    id: 2,
    title: "Cuteness overload with these curls!",
    images: [
      "/images/Hair/1000023067.jpg",
      "/images/Hair/IMG_20260103_220643.jpg",
    ],
  },
  {
    id: 3,
    title: "Can't Take My Eyes Of You",
    images: [
      "/images/cute/20250304_175131.jpg",
      "/images/cute/IMG-20250830-WA0063.jpg",
      "public/images/cute/IMG-20250830-WA0064.jpg",
      "public/images/cute/IMG-20251030-WA0010.jpg",
      "public/images/cute/IMG-20251218-WA0154.jpg",
      "public/images/cute/IMG20250830144646.jpg",
      "public/images/cute/IMG20251227115854.jpg",
      "public/images/cute/IMG20260102161959.jpg",
      "public/images/cute/Screenshot (95).png",
      "public/images/cute/Screenshot (96).png",
      "public/images/cute/Screenshot (97).png",
      "public/images/cute/Screenshot (118).png",
    ],
  },
  {
    id: 4,
    title: "💙",
    images: [
      "public/images/BOth/IMG_20250726_173825 (1).jpg",
      "public/images/BOth/IMG-20250209-WA0018.jpg",
      "public/images/BOth/IMG-20250308-WA0026 (1).jpg",
      "public/images/BOth/IMG-20250308-WA0027 (1).jpg",
    ],
  },
  {
    id: 5,
    title: "Sleeping like a kid ",
    images: [
      "public/images/sleeping/IMG_20251115_161748.jpg",
      "public/images/sleeping/IMG-20250905-WA0013.jpg",
    ],
  }
];
