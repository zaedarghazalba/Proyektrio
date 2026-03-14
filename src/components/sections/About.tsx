// components/sections/About.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { viewport, fadeUp, staggerDefault } from "@/lib/motion";
import { SplitText } from "@/components/common/SplitText";
import Image from "next/image";
import { useTheme } from "next-themes";

export function About() {
  const t = useTranslations("about");
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  // Invert colors: dark theme = dark elements, light theme = light elements
  const primaryColor = isDark ? '#000000' : '#ffffff';
  const secondaryColor = isDark ? '#333333' : '#e0e0e0';
  const tertiaryColor = isDark ? '#1a1a1a' : '#f5f5f5';
  const accentColor = isDark ? '#666666' : '#999999';
  const glowColor = isDark 
    ? 'rgba(0,0,0,0.3)' 
    : 'rgba(255,255,255,0.3)';

  const stats = [
    { value: "1", label: t("experience") },
    { value: "4", label: t("team") },
    { value: "50+", label: t("clients") },
  ];

  // Animation variants for logo container
  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      }
    }
  };

  const ringVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-16 md:py-32 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-content mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-12 md:mb-20 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="block font-mono text-label-sm md:text-label-md text-g5 uppercase tracking-wider mb-4"
          >
            {t("label")}
          </motion.span>
          <SplitText
            text={t("title")}
            mode="words"
            className="font-display text-display-sm md:text-display-md text-white uppercase"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Animated Logo Display */}
          <motion.div
            variants={logoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative"
          >
            {/* Main Container with Theme-Inverted Background */}
            <div 
              className="relative w-full aspect-square max-w-md mx-auto rounded-full"
              style={{ 
                background: isDark 
                  ? 'radial-gradient(circle, #1a1a1a 0%, #000000 100%)'
                  : 'radial-gradient(circle, #f5f5f5 0%, #ffffff 100%)'
              }}
            >
              
              {/* Animated Gradient Background */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-20"
                animate={{
                  background: [
                    `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`,
                    `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
                    `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`,
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Outer Rotating Circle with Glow */}
              <motion.div
                variants={ringVariants}
                className="absolute inset-0"
              >
                <motion.div
                  className="w-full h-full rounded-full"
                  style={{ 
                    border: `1px solid ${secondaryColor}`,
                    boxShadow: `0 0 30px ${glowColor}`
                  }}
                  animate={{ 
                    rotate: 360,
                    borderColor: [secondaryColor, accentColor, secondaryColor]
                  }}
                  transition={{ 
                    rotate: { duration: 50, repeat: Infinity, ease: "linear" },
                    borderColor: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
              </motion.div>
              
              {/* Second Ring - Counter Rotate */}
              <motion.div
                variants={ringVariants}
                className="absolute inset-6"
              >
                <motion.div
                  className="w-full h-full rounded-full border-2 border-dashed"
                  style={{ borderColor: tertiaryColor }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* Third Ring - Elliptical */}
              <motion.div
                variants={ringVariants}
                className="absolute inset-12"
              >
                <motion.div
                  className="w-full h-full rounded-full"
                  style={{ border: `1px solid ${secondaryColor}` }}
                  animate={{ 
                    rotate: 360,
                    scaleX: [1, 0.95, 1],
                    scaleY: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                    scaleX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    scaleY: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
              </motion.div>

              {/* Fourth Ring - Segmented */}
              <motion.div
                variants={ringVariants}
                className="absolute inset-20"
              >
                <motion.div
                  className="w-full h-full rounded-full"
                  style={{ 
                    border: `2px solid ${tertiaryColor}`,
                    borderTopColor: accentColor,
                    borderBottomColor: secondaryColor
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* Orbiting Dots */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: '50%',
                    left: '50%',
                    width: '100%',
                    height: '100%',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 20 + i * 5, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: i * 0.5
                  }}
                >
                  <motion.div
                    className="absolute w-2 h-2 rounded-full"
                    style={{ 
                      top: i % 2 === 0 ? '0%' : 'auto',
                      bottom: i % 2 === 1 ? '0%' : 'auto',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: `radial-gradient(circle, ${primaryColor} 0%, ${accentColor} 100%)`
                    }}
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ 
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
                      opacity: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }
                    }}
                  />
                </motion.div>
              ))}

              {/* Pulsing Corner Squares */}
              {[
                { top: '10%', left: '10%' },
                { top: '10%', right: '10%' },
                { bottom: '10%', left: '10%' },
                { bottom: '10%', right: '10%' },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-8"
                  style={pos}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.5
                  }}
                >
                  <motion.div
                    className="absolute inset-2"
                    style={{ border: `1px solid ${secondaryColor}` }}
                    animate={{ 
                      scale: [1, 0.8, 1],
                      rotate: [0, -45, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: i * 0.5 + 0.25
                    }}
                  />
                </motion.div>
              ))}

              {/* Floating Geometric Shapes */}
              {[
                { top: '20%', left: '25%', size: 'w-3 h-3', shouldRotate: true },
                { top: '60%', left: '15%', size: 'w-2 h-2', shouldRotate: false },
                { top: '30%', right: '20%', size: 'w-2 h-2', shouldRotate: true },
                { bottom: '25%', left: '30%', size: 'w-3 h-3', shouldRotate: false },
                { bottom: '35%', right: '25%', size: 'w-2 h-2', shouldRotate: true },
              ].map((shape, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${shape.size} rounded-full`}
                  style={{ 
                    top: shape.top, 
                    left: shape.left,
                    right: shape.right,
                    bottom: shape.bottom,
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`
                  }}
                  animate={{ 
                    y: shape.shouldRotate ? [0, -25, 0] : [0, -15, 0],
                    x: shape.shouldRotate ? [0, 10, 0] : [0, -10, 0],
                    rotate: shape.shouldRotate ? [0, 180, 360] : [0, 45, 0],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{ 
                    duration: 3.5 + i * 0.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.3
                  }}
                />
              ))}

              {/* Center Logo Container with 3D Effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative"
                  animate={{
                    rotateX: [0, 5, 0, -5, 0],
                    rotateY: [0, -5, 0, 5, 0],
                    z: [0, 10, 0, -10, 0]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                  style={{ perspective: '1000px' }}
                >
                  {/* Glow Effect Behind Logo */}
                  <motion.div
                    className="absolute inset-0 blur-xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{ 
                      background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`
                    }}
                  />
                  
                  {/* Main Logo */}
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <Image
                      src={isDark ? "/Terra's-light.svg" : "/Terra's.svg"}
                      alt="Terra's Creative Logo"
                      width={220}
                      height={90}
                      className="w-44 md:w-60 lg:w-72 h-auto"
                      priority
                      style={{ 
                        filter: `drop-shadow(0 0 20px ${glowColor})`
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>

              {/* Scanning Line Effect */}
              <motion.div
                className="absolute inset-0 overflow-hidden rounded-full"
                style={{ pointerEvents: 'none' }}
              >
                <motion.div
                  className="absolute w-full h-1"
                  animate={{ 
                    top: ['-10%', '110%'],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2
                  }}
                  style={{ 
                    background: `linear-gradient(90deg, transparent, ${primaryColor}50, transparent)`
                  }}
                />
              </motion.div>

              {/* Ripple Effect */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={`ripple-${i}`}
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    border: `1px solid ${primaryColor}20`
                  }}
                  animate={{
                    scale: [1, 1.5, 2],
                    opacity: [0.5, 0.2, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: i * 1.5
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
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
