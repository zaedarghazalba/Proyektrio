// components/sections/Projects.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { viewport, staggerDefault, fadeUp } from "@/lib/motion";
import { SplitText } from "@/components/common/SplitText";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export function Projects() {
  const t = useTranslations("projects");

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

        {/* Projects Grid */}
        <motion.div
          variants={staggerDefault}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              t={t}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  t,
  index,
}: {
  project: {
    title: string;
    category: string;
    description: string;
    image: string;
    slug: string;
  };
  t: ReturnType<typeof useTranslations>;
  index: number;
}) {
  return (
    <Link
      href={`/project/${project.slug}`}
      className="relative group block"
      data-cursor="view"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ delay: index * 0.1 }}
        className="relative aspect-[4/3] overflow-hidden"
      >
        {/* Image */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Hover Overlay */}
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
  );
}
