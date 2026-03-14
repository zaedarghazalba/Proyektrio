// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeDown, transitions } from "@/lib/motion";
import { MagneticButton } from "@/components/common/MagneticButton";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { Link } from "@/i18n/routing";
import { getWhatsAppLink } from "@/lib/constants";

interface NavbarProps {
  loaded: boolean;
}

export function Navbar({ loaded }: NavbarProps) {
  const t = useTranslations("nav");
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollYProgress = useScroll();
  const scaleX = useTransform(scrollYProgress.scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (value) => {
      setIsScrolled(value > 50);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const logoLetters = "DROPINK".split("");

  const whatsappMessage = t("cta").includes("Hubungi")
    ? "Halo DROPINK, saya ingin berdiskusi tentang proyek saya."
    : "Hello DROPINK, I'd like to discuss my project.";

  return (
    <motion.nav
      variants={fadeDown}
      initial="hidden"
      animate={loaded ? "visible" : "hidden"}
      transition={{ delay: 0.2, ...transitions.slow }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] w-full bg-white origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-content mx-auto px-8 md:px-16 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-display text-display-xs tracking-wider">
            <div className="flex overflow-hidden">
              {logoLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/#services">{t("services")}</NavLink>
            <NavLink href="/#projects">{t("projects")}</NavLink>
            <NavLink href="/#about">{t("about")}</NavLink>
            
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-g4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>

            <MagneticButton>
              <a
                href={getWhatsAppLink(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-white text-black font-mono text-label-sm uppercase tracking-wider hover:bg-g6 transition-colors duration-300"
                data-cursor="hover"
              >
                {t("cta")}
              </a>
            </MagneticButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative font-mono text-label-sm uppercase tracking-wider text-g6 hover:text-white transition-colors duration-300 group"
      data-cursor="hover"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
    </Link>
  );
}
