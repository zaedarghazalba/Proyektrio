// components/layout/Footer.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("footer");

  const socialIcons = [
    { name: "Instagram", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7.06 2h9.88c5.06 0 5.06 5.06 5.06 5.06v9.88c0 5.06-5.06 5.06-5.06 5.06H7.06c-5.06 0-5.06-5.06-5.06-5.06V7.06C2 2 7.06 2 7.06 2z" },
    { name: "LinkedIn", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" },
    { name: "Behance", path: "M22 7h-7V5h7v2zm11 5c0-5-4-9-9-9H9C4 3 0 7 0 12s4 9 9 9h9c5 0 9-4 9-9zm-11 5H9v-2h5c1.1 0 2-.9 2-2s-.9-2-2-2H9V9h5c2.21 0 4 1.79 4 4s-1.79 4-4 4z" },
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
            <Link href="/" className="font-display text-display-sm tracking-wider inline-block mb-6 text-white">
              DROPINK
            </Link>
            <p className="font-body text-body-base text-g5 max-w-md">
              Creating spaces that inspire life. Premium architecture studio focused on meaningful and sustainable design.
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
                  Architectural Design
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
              >
                <Link href="/#services" className="text-g5 hover:text-white transition-colors duration-300">
                  Interior Architecture
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link href="/#services" className="text-g5 hover:text-white transition-colors duration-300">
                  Urban Planning
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
              <li>hello@dropink.studio</li>
              <li>+62 812 3456 7890</li>
              <li>Jakarta, Indonesia</li>
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
              href="#"
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
