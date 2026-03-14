// components/sections/Hero.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { clipRevealUp, transitions } from "@/lib/motion";
import { MagneticButton } from "@/components/common/MagneticButton";
import Image from "next/image";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Full Banner Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80&fit=crop"
          alt="Terra's Creative Architecture"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 grain-overlay" />

      {/* Dark Overlay - Lighter so black logo is visible */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content - Centered */}
      <div className="relative z-10 text-center px-6 md:px-8 max-w-5xl mx-auto">
        {/* Logo - Always black for Company Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <Image
            src="/Terra's.svg"
            alt="Terra's Creative"
            width={280}
            height={100}
            className="h-16 md:h-24 w-auto object-contain"
            priority
          />
        </motion.div>

        {/* Line 1 */}
        <motion.div
          variants={clipRevealUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1, duration: 1.0 }}
          className="overflow-hidden"
        >
          <h1 className="font-display text-[13vw] md:text-display-lg lg:text-display-xl uppercase tracking-wider mb-2 leading-none" style={{ color: '#000000' }}>
            {t("line1")}
          </h1>
        </motion.div>

        {/* Line 2 */}
        <motion.div
          variants={clipRevealUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 1.0 }}
          className="overflow-hidden"
        >
          <h1 className="font-display text-[13vw] md:text-display-lg lg:text-display-xl uppercase tracking-wider mb-6 leading-none" style={{ color: '#000000' }}>
            {t("line2")}
          </h1>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, ...transitions.base }}
        >
          <MagneticButton>
            <a
              href="#projects"
              data-cursor="hover"
              className="inline-block px-6 py-3 md:px-10 md:py-4 font-mono text-xs md:text-label-md uppercase tracking-wider transition-colors duration-300"
              style={{ backgroundColor: '#000000', color: '#ffffff' }}
            >
              Lihat Karya
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
