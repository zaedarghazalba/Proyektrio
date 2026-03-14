// components/sections/CTA.tsx
"use client";

import { useTranslations } from "next-intl";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { viewport } from "@/lib/motion";
import { SplitText } from "@/components/common/SplitText";
import { MagneticButton } from "@/components/common/MagneticButton";
import { getWhatsAppLink } from "@/lib/constants";

export function CTA() {
  const t = useTranslations("cta");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Ghost text scroll-linked animations
  const ghostScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.05, 1.15]);
  const ghostOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const ghostRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  const whatsappMessage = t("heading").includes("ikonik") 
    ? "Halo DROPINK, saya ingin memulai proyek baru."
    : "Hello DROPINK, I want to start a new project.";

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-32 px-4 md:px-8 lg:px-16 bg-black overflow-hidden"
    >
      {/* Ghost DROPINK Text */}
      <motion.div
        style={{
          scale: ghostScale,
          opacity: ghostOpacity,
          rotate: ghostRotate,
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span className="font-display text-[15vw] md:text-[20vw] lg:text-[25vw] text-g4 uppercase opacity-20 select-none">
          DROPINK
        </span>
      </motion.div>

      <div className="relative z-10 max-w-content mx-auto text-center">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-8 md:mb-12"
        >
          <SplitText
            text={t("heading")}
            mode="words"
            className="font-display text-display-sm md:text-display-md lg:text-display-lg text-white uppercase"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <MagneticButton>
            <a
              href={getWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 md:px-12 md:py-5 bg-white text-black font-mono text-label-sm md:text-label-md uppercase tracking-wider hover:bg-g6 transition-colors duration-300"
              data-cursor="hover"
            >
              {t("button")}
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
