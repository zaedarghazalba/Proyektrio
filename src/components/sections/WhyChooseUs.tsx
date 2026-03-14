// components/sections/WhyChooseUs.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { viewport, staggerDefault, fadeUp } from "@/lib/motion";
import { SplitText } from "@/components/common/SplitText";

export function WhyChooseUs() {
  const t = useTranslations("whyChooseUs");

  const reasons = [
    {
      key: "item1",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8 md:w-10 md:h-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
    },
    {
      key: "item2",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8 md:w-10 md:h-10">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    {
      key: "item3",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8 md:w-10 md:h-10">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      ),
    },
    {
      key: "item4",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8 md:w-10 md:h-10">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 md:py-32 px-4 md:px-8 lg:px-16 bg-g1">
      <div className="max-w-content mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-12 md:mb-20"
        >
          <SplitText
            text={t("title")}
            mode="words"
            className="font-display text-display-sm md:text-display-md text-white uppercase"
          />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerDefault}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {reasons.map((reason, i) => (
            <ReasonCard
              key={reason.key}
              reason={reason}
              t={t}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ReasonCard({
  reason,
  t,
  index,
}: {
  reason: { key: string; icon: React.ReactNode };
  t: ReturnType<typeof useTranslations>;
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay: index * 0.1 }}
      className="group relative p-6 md:p-8 lg:p-12 bg-black border border-g3 hover:border-g5 transition-colors duration-500 overflow-hidden"
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
        {reason.icon}
      </div>

      {/* Title */}
      <h3 className="font-display text-display-xs md:text-display-sm text-white uppercase mb-3 md:mb-4">
        {t(`${reason.key}_title`)}
      </h3>

      {/* Description */}
      <p className="font-body text-body-sm md:text-body-base text-g5 leading-relaxed">
        {t(`${reason.key}_desc`)}
      </p>
    </motion.div>
  );
}
