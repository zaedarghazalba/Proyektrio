// lib/constants.ts
export const WHATSAPP_NUMBER = "6281234567890"; // Replace with actual number
export const getWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const SITE_CONFIG = {
  name: "DROPINK Studio",
  description: "Premium architecture studio based in Indonesia.",
  url: "https://dropink.studio",
  ogImage: "/og-image.jpg",
  metadataBase: new URL("https://dropink.studio"),
};

export const STATS = [
  { key: "projects", value: 240, suffix: "+" },
  { key: "awards", value: 18, suffix: "" },
  { key: "countries", value: 12, suffix: "" },
  { key: "satisfaction", value: 98, suffix: "%" },
];
