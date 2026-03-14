// app/[locale]/project/[slug]/page.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { pageTransition } from "@/lib/motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Link } from "@/i18n/routing";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const t = useTranslations("projects");

  // Get slugs for Indonesian locale
  const slugs = {
    houseModern: "rumah-modern",
    luxuryHome: "rumah-mewah",
    livingRoom: "ruang-tamu",
    staircaseDining: "tangga-makan",
  };

  // Project data with translations
  const projectData: Record<string, {
    title: string;
    category: string;
    description: string;
    challenge: string;
    solution: string;
    features: string[];
    image: string;
    gallery: { image: string; title: string; slug: string }[];
  }> = {
    [slugs.houseModern]: {
      title: t("houseModern.title"),
      category: t("houseModern.category"),
      description: t("houseModern.description"),
      challenge: t("houseModern.challenge"),
      solution: t("houseModern.solution"),
      features: [
        t("houseModern.features.modernFacade"),
        t("houseModern.features.woodCeiling"),
        t("houseModern.features.glassBalcony"),
        t("houseModern.features.decorativeScreen"),
        t("houseModern.features.greenSurroundings"),
        t("houseModern.features.twoStory"),
      ],
      image: "/feed 1.png",
      gallery: [
        { image: "/Image(2).png", title: t("livingRoom.title"), slug: slugs.livingRoom },
        { image: "/Image(3).png", title: t("staircaseDining.title"), slug: slugs.staircaseDining },
        { image: "/Image (4).png", title: t("luxuryHome.title"), slug: slugs.luxuryHome },
      ],
    },
    [slugs.luxuryHome]: {
      title: t("luxuryHome.title"),
      category: t("luxuryHome.category"),
      description: t("luxuryHome.description"),
      challenge: t("luxuryHome.challenge"),
      solution: t("luxuryHome.solution"),
      features: [
        t("luxuryHome.features.patternedWall"),
        t("luxuryHome.features.doubleCarport"),
        t("luxuryHome.features.frontGarden"),
        t("luxuryHome.features.warmLighting"),
        t("luxuryHome.features.greenEnvironment"),
        t("luxuryHome.features.luxuryDesign"),
      ],
      image: "/Image (4).png",
      gallery: [
        { image: "/feed 1.png", title: t("houseModern.title"), slug: slugs.houseModern },
        { image: "/Image(2).png", title: t("livingRoom.title"), slug: slugs.livingRoom },
        { image: "/Image(3).png", title: t("staircaseDining.title"), slug: slugs.staircaseDining },
      ],
    },
    [slugs.livingRoom]: {
      title: t("livingRoom.title"),
      category: t("livingRoom.category"),
      description: t("livingRoom.description"),
      challenge: t("livingRoom.challenge"),
      solution: t("livingRoom.solution"),
      features: [
        t("livingRoom.features.modernSofa"),
        t("livingRoom.features.texturedWall"),
        t("livingRoom.features.artworkPanel"),
        t("livingRoom.features.glassTable"),
        t("livingRoom.features.arcLamp"),
        t("livingRoom.features.recessedLighting"),
      ],
      image: "/Image(2).png",
      gallery: [
        { image: "/feed 1.png", title: t("houseModern.title"), slug: slugs.houseModern },
        { image: "/Image(3).png", title: t("staircaseDining.title"), slug: slugs.staircaseDining },
        { image: "/Image (4).png", title: t("luxuryHome.title"), slug: slugs.luxuryHome },
      ],
    },
    [slugs.staircaseDining]: {
      title: t("staircaseDining.title"),
      category: t("staircaseDining.category"),
      description: t("staircaseDining.description"),
      challenge: t("staircaseDining.challenge"),
      solution: t("staircaseDining.solution"),
      features: [
        t("staircaseDining.features.glassRailing"),
        t("staircaseDining.features.woodenSteps"),
        t("staircaseDining.features.metalStructure"),
        t("staircaseDining.features.diningTable"),
        t("staircaseDining.features.pendantLight"),
        t("staircaseDining.features.minimalistDecor"),
      ],
      image: "/Image(3).png",
      gallery: [
        { image: "/feed 1.png", title: t("houseModern.title"), slug: slugs.houseModern },
        { image: "/Image(2).png", title: t("livingRoom.title"), slug: slugs.livingRoom },
        { image: "/Image (4).png", title: t("luxuryHome.title"), slug: slugs.luxuryHome },
      ],
    },
  };

  const project = projectData[slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <motion.main
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-black"
    >
      <Navbar loaded={true} />

      {/* Hero Section - Full Image */}
      <section className="relative w-full">
        <div className="relative aspect-[4/3] sm:aspect-[3/2] md:aspect-[21/9] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Project Info Section - Separate from Image */}
      <section className="py-8 md:py-16 px-4 md:px-8 lg:px-16 bg-black">
        <div className="max-w-content mx-auto">
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 md:mb-6"
          >
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-g1 border border-g4 rounded-full font-mono text-label-xs md:text-label-sm text-g5 uppercase tracking-wider">
              {project.category}
            </span>
          </motion.div>

          {/* Project Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-display-sm md:text-display-md lg:text-display-lg text-white uppercase tracking-wider mb-6 md:mb-8"
          >
            {project.title}
          </motion.h1>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-g1">
        <div className="max-w-content mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            <div>
              <span className="block font-mono text-label-sm md:text-label-md text-g5 uppercase tracking-wider mb-4 md:mb-6">
                01 — Overview
              </span>
              <p className="font-body text-body-sm md:text-body-lg text-g6 leading-relaxed mb-6 md:mb-8">
                {project.description}
              </p>
            </div>
            <div>
              <span className="block font-mono text-label-sm md:text-label-md text-g5 uppercase tracking-wider mb-4 md:mb-6">
                02 — The Challenge
              </span>
              <p className="font-body text-body-sm md:text-body-lg text-g6 leading-relaxed mb-6 md:mb-8">
                {project.challenge}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 md:mt-12"
          >
            <span className="block font-mono text-label-sm md:text-label-md text-g5 uppercase tracking-wider mb-4 md:mb-6">
              03 — The Solution
            </span>
            <p className="font-body text-body-sm md:text-body-lg text-g6 leading-relaxed max-w-4xl">
              {project.solution}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-black">
        <div className="max-w-content mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12"
          >
            <span className="block font-mono text-label-sm md:text-label-md text-g5 uppercase tracking-wider">
              04 — Features
            </span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 md:p-6 bg-g1 border border-g3"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <span className="font-mono text-label-xs text-g5 flex-shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-body text-body-sm md:text-body-base text-g6">
                    {feature}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-g1">
        <div className="max-w-content mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12"
          >
            <span className="block font-mono text-label-sm md:text-label-md text-g5 uppercase tracking-wider">
              05 — Gallery
            </span>
          </motion.div>

          <div className="relative w-full">
            <div 
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 scroll-smooth"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {project.gallery.map((item, index) => (
                <Link
                  key={index}
                  href={`/project/${item.slug}`}
                  className="relative aspect-[4/3] min-w-[280px] sm:min-w-[300px] md:min-w-[350px] flex-shrink-0 snap-center group cursor-pointer"
                  data-cursor="view"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative w-full h-full overflow-hidden"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 300px, 350px"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-display text-display-xs md:text-display-sm text-white uppercase tracking-wider text-center px-4">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile hint */}
          <p className="text-center text-g5 text-xs md:hidden mt-4">
            ← Swipe to see more →
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-black text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-display-xs md:text-display-sm text-white uppercase mb-6 md:mb-8">
            {t("interested")}
          </h2>
          <a
            href={`https://wa.me/6281239968426?text=${encodeURIComponent(t("interestedMessage", { project: project.title }))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 md:px-12 md:py-5 bg-white text-black font-mono text-label-sm md:text-label-md uppercase tracking-wider hover:bg-g6 transition-colors duration-300"
            data-cursor="hover"
          >
            {t("contactUs")}
          </a>
        </motion.div>
      </section>

      <Footer />
    </motion.main>
  );
}
