// components/layout/Footer.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Footer() {
  const t = useTranslations("footer");
  const { theme } = useTheme();

  const socialIcons = [
    { name: "Instagram", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7.06 2h9.88c5.06 0 5.06 5.06 5.06 5.06v9.88c0 5.06-5.06 5.06-5.06 5.06H7.06c-5.06 0-5.06-5.06-5.06-5.06V7.06C2 2 7.06 2 7.06 2z", href: "https://instagram.com/terrasscreative" },
  ];

  return (
    <footer className="bg-g1 border-t border-g4 pt-20 pb-8">
      <div className="max-w-content mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2"
          >
            <Link href="/" className="inline-block mb-6">
              <Image
                src={theme === "light" ? "/Terra's.svg" : "/Terra's-light.svg"}
                alt="Terra's Creative"
                width={200}
                height={70}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="font-body text-body-base text-g5 max-w-md">
              Turning dreams Into Reality Through Creativity. Terra's Creative adalah studio kreatif yang menggabungkan arsitektur, desain interior, fotografi, dan produksi konten visual.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-mono text-label-md uppercase tracking-wider mb-6 text-white">
              {t("services")}
            </h4>
            <ul className="space-y-3">
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Link href="/#services" className="text-g5 hover:text-white transition-colors duration-300">
                  Desain Arsitektur
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
              >
                <Link href="/#services" className="text-g5 hover:text-white transition-colors duration-300">
                  Desain Interior
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link href="/#services" className="text-g5 hover:text-white transition-colors duration-300">
                  Fotografi & Produksi Konten Visual
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-mono text-label-md uppercase tracking-wider mb-6 text-white">
              {t("contact")}
            </h4>
            <ul className="space-y-3 text-g5">
              <li className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Malabar Coffee, Jl. P. Sumatera, Pamusian, Kec. Tarakan Tengah, Kota Tarakan, Kalimantan Utara</span>
              </li>
              <li className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+6281239968426" className="hover:text-white transition-colors duration-300">+62 812 3996 8426</a>
              </li>
              <li className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <a href="https://instagram.com/terrasscreative" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">@terrasscreative</a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex gap-6 mb-12"
        >
          {socialIcons.map((icon, i) => (
            <motion.a
              key={i}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.05 }}
              className="w-12 h-12 flex items-center justify-center border border-g4 rounded-full hover:border-white hover:bg-white hover:text-black transition-all duration-300"
              data-cursor="hover"
              aria-label={icon.name}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path d={icon.path} />
              </svg>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-g4"
        >
          <p className="font-mono text-label-xs text-g5">
            {t("copyright")}
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-mono text-label-xs text-g5 hover:text-white transition-colors duration-300">
              {t("privacy")}
            </a>
            <a href="#" className="font-mono text-label-xs text-g5 hover:text-white transition-colors duration-300">
              {t("terms")}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
