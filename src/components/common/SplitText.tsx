// components/common/SplitText.tsx
"use client";

import { motion } from "framer-motion";
import { staggerContainer, wordReveal, viewport } from "@/lib/motion";

type SplitMode = "words" | "chars";

interface SplitTextProps {
  text: string;
  mode?: SplitMode;
  className?: string;
  delay?: number;
}

export function SplitText({
  text,
  mode = "words",
  className = "",
  delay = 0,
}: SplitTextProps) {
  const items = mode === "words" ? text.split(" ") : text.split("");

  return (
    <motion.span
      variants={staggerContainer(mode === "words" ? 0.08 : 0.03, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={className}
      aria-label={text}
    >
      {items.map((item, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            variants={wordReveal}
            className="inline-block"
          >
            {item}{mode === "words" && i < items.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
