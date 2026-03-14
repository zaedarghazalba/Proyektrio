// components/sections/Projects.tsx
"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, Variants } from "framer-motion";
import { viewport } from "@/lib/motion";
import { SplitText } from "@/components/common/SplitText";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useState } from "react";

export function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get slugs based on locale
  const slugs = t.raw("slugs") as Record<string, string>;

  const projects = [
    {
      title: t("houseModern.title"),
      category: t("houseModern.category"),
      description: t("houseModern.description"),
      image: "/feed 1.png",
      slug: slugs.houseModern,
    },
    {
      title: t("luxuryHome.title"),
      category: t("luxuryHome.category"),
      description: t("luxuryHome.description"),
      image: "/Image (4).png",
      slug: slugs.luxuryHome,
    },
    {
      title: t("livingRoom.title"),
      category: t("livingRoom.category"),
      description: t("livingRoom.description"),
      image: "/Image(2).png",
      slug: slugs.livingRoom,
    },
    {
      title: t("staircaseDining.title"),
      category: t("staircaseDining.category"),
      description: t("staircaseDining.description"),
      image: "/Image(3).png",
      slug: slugs.staircaseDining,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const projectCardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.96, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="projects" className="py-32 px-8 md:px-16 bg-g1">
      <div className="max-w-content mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-20"
        >
          <span className="block font-mono text-label-md text-g5 uppercase tracking-wider mb-4">
            02
          </span>
          <SplitText
            text={t("title")}
            mode="words"
            className="font-display text-display-md text-white uppercase"
          />
        </motion.div>

        {/* Projects Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 md:gap-8"
              animate={{ x: `-${currentIndex * (100 / 3)}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-2.66rem)]"
                >
                  <Link
                    href={`/project/${project.slug}`}
                    className="relative group block"
                    data-cursor="view"
                  >
                    <motion.div
                      variants={projectCardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewport}
                      className="relative aspect-[4/3]"
                    >
                      {/* Image */}
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm pointer-events-none"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* Hover Overlay - Shows on Image Hover */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-6">
                        <div className="text-white">
                          <h3 className="font-display text-display-sm uppercase tracking-wider mb-2">
                            {project.title}
                          </h3>
                          <div className="flex items-center justify-center gap-2 text-g5">
                            <span className="font-mono text-label-sm uppercase">
                              {t("view_project")}
                            </span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-12 h-12 border-none rounded-full flex items-center justify-center cursor-pointer transition-all z-10 ${currentIndex === 0 ? "bg-g3 text-g5 cursor-not-allowed" : "bg-white text-black hover:bg-g6"}`}
            aria-label="Previous project"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex === 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 w-12 h-12 border-none rounded-full flex items-center justify-center cursor-pointer transition-all z-10 ${currentIndex === 1 ? "bg-g3 text-g5 cursor-not-allowed" : "bg-white text-black hover:bg-g6"}`}
            aria-label="Next project"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1].map((i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-white w-6" : "bg-g5"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
