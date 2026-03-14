// components/common/Preloader.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);

  const logoText = "DROPINK";
  const logoLetters = logoText.split("");

  // Check if user has visited before
  useEffect(() => {
    const visited = sessionStorage.getItem("dropink-visited");
    if (visited) {
      setHasVisited(true);
      onComplete();
    } else {
      sessionStorage.setItem("dropink-visited", "true");
    }
  }, [onComplete]);

  // Auto-complete after animation
  useEffect(() => {
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
        setTimeout(onComplete, 1000);
      }, 2500); // Total animation time

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
          <div className="relative">
            <div className="flex overflow-hidden">
              {logoLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  className="font-display text-display-lg md:text-[120px] text-white inline-block overflow-hidden"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.08,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Underline Animation */}
            <motion.div
              className="absolute -bottom-4 left-0 h-[2px] bg-white"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.8,
              }}
            />
          </div>

          {/* Tagline */}
          <motion.p
            className="font-mono text-label-sm text-g5 uppercase tracking-widest mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Architecture Studio
          </motion.p>

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
