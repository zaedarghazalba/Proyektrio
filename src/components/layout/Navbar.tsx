// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeDown, transitions } from "@/lib/motion";
import { MagneticButton } from "@/components/common/MagneticButton";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Link } from "@/i18n/routing";
import { getWhatsAppLink } from "@/lib/constants";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes";

interface NavbarProps {
  loaded: boolean;
}

export function Navbar({ loaded }: NavbarProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  const scrollYProgress = useScroll();
  const scaleX = useTransform(scrollYProgress.scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (value) => {
      setIsScrolled(value > 50);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const whatsappMessage = "Halo Terra's Creative, saya ingin berdiskusi tentang proyek saya.";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();

    // If not on homepage, navigate to homepage first
    if (!pathname.startsWith("/id") || pathname !== "/id") {
      window.location.href = `/id${hash}`;
      return;
    }

    // If on homepage, smooth scroll
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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

      <div className="max-w-content mx-auto px-8 md:px-16 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="inline-block">
            <Image
              src={theme === "light" ? "/Terra's.svg" : "/Terra's-light.svg"}
              alt="Terra's Creative"
              width={180}
              height={60}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/id#services" onClick={(e) => handleNavClick(e, "#services")}>{t("services")}</NavLink>
            <NavLink href="/id#projects" onClick={(e) => handleNavClick(e, "#projects")}>{t("projects")}</NavLink>
            <NavLink href="/id#about" onClick={(e) => handleNavClick(e, "#about")}>{t("about")}</NavLink>

            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-g4">
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
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, onClick, children }: { href: string; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void; children: React.ReactNode }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="relative font-mono text-label-sm uppercase tracking-wider text-g6 hover:text-white transition-colors duration-300 group"
      data-cursor="hover"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
    </a>
  );
}
