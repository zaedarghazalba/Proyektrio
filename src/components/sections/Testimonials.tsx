// components/sections/Testimonials.tsx
"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { viewport, scaleIn, transitions, easings } from "@/lib/motion";

export function Testimonials() {
  const t = useTranslations("testimonials");
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      key: "t1",
      text: t("t1_text"),
      author: t("t1_author"),
      role: t("t1_role"),
    },
    {
      key: "t2",
      text: t("t2_text"),
      author: t("t2_author"),
      role: t("t2_role"),
    },
  ];

  const quoteVariants: Variants = {
    enter: { opacity: 0, y: 20, filter: "blur(4px)" },
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: easings.inOutQuart },
    },
    exit: {
      opacity: 0,
      y: -20,
      filter: "blur(4px)",
      transition: { duration: 0.4, ease: easings.inOutQuart },
    },
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 px-8 md:px-16 bg-g1">
      <div className="max-w-content mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-20"
        >
          <span className="block font-mono text-label-md text-g5 uppercase tracking-wider mb-4">
            03
          </span>
          <span className="block font-display text-display-md text-white uppercase">
            {t("title")}
          </span>
        </motion.div>

        {/* Testimonial Content */}
        <div className="relative">
          {/* Decorative Quote Mark */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="absolute -top-8 -left-8 text-g4 opacity-20"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32">
              <path d="M14.017 21v-9.004c0-1.664.496-2.963 1.488-3.897C16.496 7.164 18.029 6.7 20 6.7V4c-2.667 0-4.8 0.667-6.4 2s-2.4 3.333-2.4 6v9h2.817zM5.017 21v-9.004c0-1.664.496-2.963 1.488-3.897C7.496 7.164 9.029 6.7 11 6.7V4c-2.667 0-4.8 0.667-6.4 2s-2.4 3.333-2.4 6v9h2.817z" />
            </svg>
          </motion.div>

          {/* Testimonials Slider */}
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={quoteVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="max-w-3xl"
              >
                <p className="font-body text-body-xl md:text-body-2xl text-white leading-relaxed mb-8 italic">
                  &quot;{testimonials[activeIndex].text}&quot;
                </p>
                <div>
                  <p className="font-display text-display-xs text-white uppercase">
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="font-mono text-label-sm text-g5 uppercase tracking-wider">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6 mt-12">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.span
                  key={i}
                  layout
                  className={`h-1 ${i === activeIndex ? "bg-white" : "bg-g4"}`}
                  initial={false}
                  animate={{ width: i === activeIndex ? 32 : 8 }}
                  transition={transitions.base}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-4 ml-auto">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 flex items-center justify-center border border-g4 rounded-full hover:border-white hover:bg-white hover:text-black transition-all duration-300"
                data-cursor="hover"
                aria-label="Previous testimonial"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 flex items-center justify-center border border-g4 rounded-full hover:border-white hover:bg-white hover:text-black transition-all duration-300"
                data-cursor="hover"
                aria-label="Next testimonial"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
