// components/common/LanguageSwitcher.tsx
"use client";

import { useLocale } from "next-intl";
import { usePathname, Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const newLocale = locale === "id" ? "en" : "id";

  return (
    <Link
      href={pathname}
      locale={newLocale}
      className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-g2 transition-colors duration-300 font-mono text-label-sm"
      aria-label="Toggle language"
      data-cursor="hover"
    >
      <motion.span
        key={locale}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="uppercase"
      >
        {locale}
      </motion.span>
    </Link>
  );
}
