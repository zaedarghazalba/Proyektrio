// components/sections/Hero.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { clipRevealUp, transitions } from "@/lib/motion";
import { MagneticButton } from "@/components/common/MagneticButton";
import { ParallaxImage } from "@/components/common/ParallaxImage";

export function Hero() {
  const t = useTranslations("hero");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 800], ["0%", "25%"]);
  const grainY = useTransform(scrollY, [0, 800], ["0%", "12%"]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.6, 0.9]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 will-change-transform"
      >
        <ParallaxImage
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80&fit=crop"
          alt="DROPINK Studio Architecture"
          speed={0.15}
          priority
        />
      </motion.div>

      {/* Grain Overlay with Parallax */}
      <motion.div
        style={{ y: grainY }}
        className="absolute inset-0 grain-overlay will-change-transform"
      />

      {/* Dark Overlay with Scroll-linked Opacity */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-black"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-8 max-w-5xl mx-auto">
        {/* Line 1 */}
        <motion.div
          variants={clipRevealUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1, duration: 1.0 }}
          className="overflow-hidden"
        >
          <h1 className="font-display text-[13vw] md:text-display-lg lg:text-display-xl text-white uppercase tracking-wider mb-2 leading-none">
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
          <h1 className="font-display text-[13vw] md:text-display-lg lg:text-display-xl text-white uppercase tracking-wider mb-6 leading-none">
            {t("line2")}
          </h1>
        </motion.div>

        {/* Line 3 */}
        <motion.div
          variants={clipRevealUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 1.0 }}
          className="overflow-hidden"
        >
          <p className="font-body text-base md:text-body-xl lg:text-body-2xl text-g6 italic max-w-2xl mx-auto mb-8 md:mb-12 px-2">
            {t("line3")}
          </p>
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
              className="inline-block px-6 py-3 md:px-10 md:py-4 bg-white text-black font-mono text-xs md:text-label-md uppercase tracking-wider hover:bg-g6 transition-colors duration-300"
            >
              {t("line3").includes("struktur") ? "Lihat Karya" : "View Works"}
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-g6 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-g6 rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
