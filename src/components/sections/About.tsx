// components/sections/About.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { viewport, fadeUp, staggerDefault } from "@/lib/motion";
import { SplitText } from "@/components/common/SplitText";
import Image from "next/image";
import { useTheme } from "next-themes";

export function About() {
  const t = useTranslations("about");
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const primaryColor = isDark ? '#000000' : '#ffffff';
  const secondaryColor = isDark ? '#333333' : '#e0e0e0';
  const tertiaryColor = isDark ? '#1a1a1a' : '#f5f5f5';
  const accentColor = isDark ? '#666666' : '#999999';
  const glowColor = isDark ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)';

  const stats = [
    { value: "1", label: t("experience") },
    { value: "4", label: t("team") },
    { value: "50+", label: t("clients") },
  ];

  return (
    <section id="about" className="py-12 md:py-20 lg:py-32 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-content mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-8 md:mb-12 lg:mb-20 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="block font-mono text-[10px] md:text-label-sm lg:text-label-md text-g5 uppercase tracking-wider mb-3 md:mb-4"
          >
            {t("label")}
          </motion.span>
          <SplitText
            text={t("title")}
            mode="words"
            className="font-display text-display-xs sm:text-display-sm md:text-display-md lg:text-display-lg text-white uppercase"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Simplified Animated Logo Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-md mx-auto lg:max-w-none"
          >
            {/* Main Container */}
            <div 
              className="relative w-full aspect-square max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-none mx-auto rounded-full"
              style={{ 
                background: isDark 
                  ? 'radial-gradient(circle, #1a1a1a 0%, #000000 100%)'
                  : 'radial-gradient(circle, #f5f5f5 0%, #ffffff 100%)'
              }}
            >
              {/* Outer Rotating Circle */}
              <motion.div
                className="absolute inset-4 rounded-full"
                style={{ border: `1px solid ${secondaryColor}` }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner Dashed Circle */}
              <motion.div
                className="absolute inset-12 rounded-full"
                style={{ border: `2px dashed ${tertiaryColor}` }}
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />

              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewport}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2,
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="relative z-10"
                >
                  <Image
                    src={isDark ? "/Terra's-light.svg" : "/Terra's.svg"}
                    alt="Terra's Creative Logo"
                    width={180}
                    height={70}
                    className="w-32 sm:w-40 md:w-48 lg:w-60 h-auto"
                    priority
                    style={{ filter: `drop-shadow(0 0 15px ${glowColor})` }}
                  />
                </motion.div>
              </div>

              {/* Simple Pulse Rings */}
              {[0, 1].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full"
                  style={{ border: `1px solid ${primaryColor}15` }}
                  animate={{ scale: [1, 1.3, 1.6], opacity: [0.4, 0.2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: i * 2 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="font-body text-body-base md:text-body-lg text-g5 leading-relaxed mb-8 md:mb-12 whitespace-pre-line"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
