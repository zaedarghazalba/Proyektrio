// components/common/Preloader.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);

  // Check if user has visited before
  useEffect(() => {
    const visited = sessionStorage.getItem("terras-visited");
    if (visited) {
      setHasVisited(true);
      onComplete();
    } else {
      sessionStorage.setItem("terras-visited", "true");
    }
  }, [onComplete]);

  // Auto-complete after animation
  useEffect(() => {
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
        setTimeout(onComplete, 800);
      }, 2000); // Total animation time

      return () => clearTimeout(timer);
    }
  }, [hasVisited, onComplete]);

  // Don't render if already visited
  if (hasVisited) {
    return null;
  }

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 bg-black z-[99999] flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Logo Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <Image
              src="/Terra's-light.svg"
              alt="Terra's Creative"
              width={280}
              height={100}
              className="h-20 md:h-28 w-auto object-contain"
              priority
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="font-mono text-label-xs text-g5 uppercase tracking-widest mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Turning dreams Into Reality
          </motion.p>

          {/* Loading Bar */}
          <motion.div
            className="w-48 h-[1px] bg-g4 mt-8 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              className="h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.8 }}
            />
          </motion.div>

          {/* Fade out overlay */}
          {isLoaded && (
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
