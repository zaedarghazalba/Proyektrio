// components/sections/Projects.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { viewport } from "@/lib/motion";
import { SplitText } from "@/components/common/SplitText";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useState, useRef, useEffect } from "react";

export function Projects() {
  const t = useTranslations("projects");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Slugs for Indonesian locale
  const slugs = {
    houseModern: "rumah-modern",
    luxuryHome: "rumah-mewah",
    livingRoom: "ruang-tamu",
    staircaseDining: "tangga-makan",
  };

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

  // Handle scroll to update current index
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const scrollLeft = container.scrollLeft;
      
      // Calculate which slide is visible
      const slideWidth = clientWidth;
      const newIndex = Math.round(scrollLeft / slideWidth);
      
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex <= 1) {
        setCurrentIndex(newIndex);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentIndex]);

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
    <section id="projects" className="py-16 md:py-32 px-4 md:px-8 lg:px-16 bg-g1">
      <div className="max-w-content mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-12 md:mb-20"
        >
          <span className="block font-mono text-label-sm md:text-label-md text-g5 uppercase tracking-wider mb-4">
            02
          </span>
          <SplitText
            text={t("title")}
            mode="words"
            className="font-display text-display-sm md:text-display-md text-white uppercase"
          />
        </motion.div>

        {/* Projects Slider */}
        <div className="relative w-full">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="flex gap-4 md:gap-6 lg:gap-8 w-full">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-2.66rem)] snap-center"
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
                      className="relative aspect-[4/3] overflow-hidden"
                    >
                      {/* Image */}
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* Hover Overlay - Shows on Image Hover */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4 md:px-6">
                        <div className="text-white">
                          <h3 className="font-display text-display-xs md:text-display-sm uppercase tracking-wider mb-2">
                            {project.title}
                          </h3>
                          <div className="flex items-center justify-center gap-2 text-g5">
                            <span className="font-mono text-label-xs md:text-label-sm uppercase">
                              {t("view_project")}
                            </span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3 md:w-4 md:h-4">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Hidden on mobile, show on tablet+ */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 lg:-translate-x-8 w-10 h-10 md:w-12 md:h-12 border-none rounded-full flex items-center justify-center cursor-pointer transition-all z-10 ${currentIndex === 0 ? "bg-g3 text-g5 cursor-not-allowed" : "bg-white text-black hover:bg-g6"}`}
            aria-label="Previous project"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 md:w-5 md:h-5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex === 1}
            className={`hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 lg:translate-x-8 w-10 h-10 md:w-12 md:h-12 border-none rounded-full flex items-center justify-center cursor-pointer transition-all z-10 ${currentIndex === 1 ? "bg-g3 text-g5 cursor-not-allowed" : "bg-white text-black hover:bg-g6"}`}
            aria-label="Next project"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 md:w-5 md:h-5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
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

        {/* Mobile hint - swipe to scroll */}
        <p className="text-center text-g5 text-xs md:hidden mt-4">
          ← Swipe to see more →
        </p>
      </div>
    </section>
  );
}
