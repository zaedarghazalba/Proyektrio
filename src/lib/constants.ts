// lib/constants.ts
export const WHATSAPP_NUMBER = "6281239968426"; // Terra's Creative WhatsApp number
export const getWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const SITE_CONFIG = {
  name: "Terra's Creative",
  description: "Turning dreams Into Reality Through Creativity. Studio kreatif yang menggabungkan arsitektur, desain interior, fotografi, dan produksi konten visual.",
  url: "https://terrascreative.com",
  ogImage: "/og-image.jpg",
  metadataBase: new URL("https://terrascreative.com"),
};

export const STATS = [
  { key: "projects", value: 50, suffix: "+" },
  { key: "awards", value: 5, suffix: "" },
  { key: "countries", value: 1, suffix: "" },
  { key: "satisfaction", value: 98, suffix: "%" },
];
