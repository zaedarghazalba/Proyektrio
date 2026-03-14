// components/sections/Services.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { staggerDefault, viewport } from "@/lib/motion";
import { SplitText } from "@/components/common/SplitText";

export function Services() {
  const t = useTranslations("services");

  const services = [
    {
      key: "s1",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8 md:w-10 md:h-10">
          <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-9a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v9" />
        </svg>
      ),
    },
    {
      key: "s2",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8 md:w-10 md:h-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
    },
    {
      key: "s3",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8 md:w-10 md:h-10">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: 8 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="services" className="py-16 md:py-32 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-content mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-12 md:mb-20"
        >
          <span className="block font-mono text-label-sm md:text-label-md text-g5 uppercase tracking-wider mb-4">
            01
          </span>
          <SplitText
            text={t("title")}
            mode="words"
            className="font-display text-display-sm md:text-display-md text-white uppercase"
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerDefault}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          style={{ perspective: "1000px" }}
        >
          {services.map((service, i) => (
            <ServiceCard
              key={service.key}
              service={service}
              t={t}
              index={i}
              variants={cardVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  t,
  index,
  variants,
}: {
  service: { key: string; icon: React.ReactNode };
  t: ReturnType<typeof useTranslations>;
  index: number;
  variants: Variants;
}) {
  return (
    <motion.div
      variants={variants}
      className="group relative p-6 md:p-8 lg:p-12 bg-g1 border border-g3 hover:border-g5 transition-colors duration-500 overflow-hidden"
      data-cursor="hover"
    >
      {/* Hover line sweep effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
        style={{ width: "50%" }}
      />

      {/* Index Number */}
      <motion.span
        className="block font-mono text-label-xs text-g4 mb-6 md:mb-8"
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        0{index + 1}
      </motion.span>
      <motion.span
        className="absolute top-10 left-6 md:top-12 md:left-12 font-mono text-label-xs text-white opacity-0"
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        0{index + 1}
      </motion.span>

      {/* Icon */}
      <div className="text-g5 group-hover:text-white transition-colors duration-500 mb-6 md:mb-8">
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="font-display text-display-xs md:text-display-sm text-white uppercase mb-3 md:mb-4">
        {t(`${service.key}_title`)}
      </h3>

      {/* Description */}
      <p className="font-body text-body-sm md:text-body-base text-g5 leading-relaxed">
        {t(`${service.key}_desc`)}
      </p>

      {/* Arrow */}
      <motion.div
        className="absolute bottom-8 right-6 md:bottom-12 md:right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ x: -10 }}
        whileHover={{ x: 0 }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 md:w-6 md:h-6">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
