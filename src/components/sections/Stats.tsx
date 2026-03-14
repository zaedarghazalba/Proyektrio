// components/sections/Stats.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { staggerFast, fadeUp } from "@/lib/motion";
import { useCountUp } from "@/hooks/useCountUp";
import { STATS } from "@/lib/constants";

export function Stats() {
  const t = useTranslations("stats");

  return (
    <section className="py-20 px-8 md:px-16 bg-g1 border-y border-g4">
      <div className="max-w-content mx-auto">
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {STATS.map((stat, index) => (
            <StatBlock
              key={stat.key}
              label={t(stat.key)}
              value={stat.value}
              suffix={stat.suffix}
              index={index}
              total={STATS.length}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatBlock({
  label,
  value,
  suffix,
  index,
  total,
}: {
  label: string;
  value: number;
  suffix: string;
  index: number;
  total: number;
}) {
  const { ref, formatted } = useCountUp({ end: value, suffix });

  return (
    <motion.div
      variants={fadeUp}
      className="relative text-center"
    >
      {/* Divider line */}
      {index < total - 1 && (
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="hidden md:block absolute top-0 right-0 w-[1px] h-full bg-g4 origin-top"
        />
      )}

      <div className="py-4">
        <motion.span
          ref={ref}
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="block font-display text-display-sm md:text-display-md text-white mb-2"
        >
          {formatted}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="block font-mono text-label-sm text-g5 uppercase tracking-wider"
        >
          {label}
        </motion.span>
      </div>
    </motion.div>
  );
}
