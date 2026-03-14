// app/[locale]/layout.tsx
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Providers } from "@/components/providers/Providers";
import { CustomCursor } from "@/components/common/CustomCursor";
import { SITE_CONFIG } from "@/lib/constants";
import "../globals.css";

// Google Fonts
import { Bebas_Neue, Cormorant_Garamond, DM_Mono } from "next/font/google";

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return {
    metadataBase: SITE_CONFIG.metadataBase,
    title: `${SITE_CONFIG.name} — Architectural Design`,
    description: locale === "id"
      ? "Studio arsitektur premium berbasis di Indonesia."
      : "Premium architecture studio based in Indonesia.",
    openGraph: {
      title: SITE_CONFIG.name,
      description: locale === "id"
        ? "Studio arsitektur premium berbasis di Indonesia."
        : "Premium architecture studio based in Indonesia.",
      images: [SITE_CONFIG.ogImage],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Get messages for the locale
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={`${bebas.variable} ${cormorant.variable} ${dmMono.variable} font-body antialiased`} suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages}>
          {/* Grain and Grid Overlays */}
          <div className="grain-overlay" />
          <div className="grid-overlay" />

          {/* Custom Cursor */}
          <CustomCursor />

          {/* Main Content */}
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
