// components/sections/About.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { viewport, clipRevealRight, clipRevealLeft, fadeUp, staggerDefault } from "@/lib/motion";
import { SplitText } from "@/components/common/SplitText";
import { ParallaxImage } from "@/components/common/ParallaxImage";

export function About() {
  const t = useTranslations("about");

  const stats = [
    { value: "15+", label: t("experience") },
    { value: "24", label: t("team") },
    { value: "200+", label: t("clients") },
  ];

  return (
    <section id="about" className="py-16 md:py-32 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            variants={clipRevealRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden border border-g4">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80&fit=crop"
                alt="About DROPINK Studio"
                speed={0.15}
                className="w-full h-full"
              />

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-white text-black p-4 md:p-8"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <span className="block font-display text-display-xs md:text-display-sm">15+</span>
                <span className="block font-mono text-label-xs uppercase tracking-wider text-g5">
                  Years
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div>
            {/* Label */}
            <motion.div
              variants={clipRevealLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mb-6 md:mb-8"
            >
              <span className="block font-mono text-label-sm md:text-label-md text-g5 uppercase tracking-wider">
                {t("label")}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mb-6 md:mb-8"
            >
              <SplitText
                text={t("title")}
                mode="words"
                className="font-display text-display-sm md:text-display-md text-white uppercase"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="font-body text-body-base md:text-body-lg text-g5 leading-relaxed mb-8 md:mb-12"
            >
              {t("description")}
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={staggerDefault}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid grid-cols-3 gap-4 md:gap-8"
            >
              {stats.map((stat, i) => (
                <motion.div key={i} variants={fadeUp} className="text-left">
                  <span className="block font-display text-display-xs md:text-display-sm text-white mb-2">
                    {stat.value}
                  </span>
                  <span className="block font-mono text-label-xs text-g5 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
