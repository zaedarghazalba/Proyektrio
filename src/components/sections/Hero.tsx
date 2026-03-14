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
      <div className="relative z-10 text-center px-4 md:px-6 lg:px-8 max-w-5xl mx-auto w-full overflow-hidden">
        {/* Logo - Always black for Company Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6 md:mb-8 flex justify-center"
        >
          <Image
            src="/Terra's.svg"
            alt="Terra's Creative"
            width={200}
            height={80}
            className="h-10 sm:h-14 md:h-20 lg:h-24 w-auto object-contain"
            priority
            sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, 280px"
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
          <h1 className="font-display text-[15vw] sm:text-[13vw] md:text-display-lg lg:text-display-xl uppercase tracking-wider mb-1 md:mb-2 leading-none" style={{ color: 'black' }}>
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
          <h1 className="font-display text-[15vw] sm:text-[13vw] md:text-display-lg lg:text-display-xl uppercase tracking-wider mb-4 md:mb-6 leading-none" style={{ color: 'black' }}>
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
              className="inline-block px-5 py-2.5 md:px-10 md:py-4 bg-black text-white font-mono text-[10px] md:text-xs lg:text-label-md uppercase tracking-wider hover:bg-g3 transition-colors duration-300"
            >
              Lihat Karya
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
