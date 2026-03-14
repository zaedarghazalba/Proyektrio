// lib/motion.ts
import { Variants, Transition } from "framer-motion";

// ─── Easings ──────────────────────────────────────────────
export const easings = {
  outExpo:    [0.16, 1, 0.3, 1]    as const,
  inOutQuart: [0.76, 0, 0.24, 1]   as const,
  outBack:    [0.34, 1.56, 0.64, 1] as const,
  outCubic:   [0.22, 1, 0.36, 1]   as const,
};

// ─── Reusable Transitions ─────────────────────────────────
export const transitions = {
  fast:      { duration: 0.3, ease: easings.outCubic } as Transition,
  base:      { duration: 0.6, ease: easings.outExpo  } as Transition,
  slow:      { duration: 1.0, ease: easings.outExpo  } as Transition,
  cinematic: { duration: 1.4, ease: easings.inOutQuart } as Transition,
  spring:    { type: "spring", stiffness: 100, damping: 15 } as Transition,
  springSnappy: { type: "spring", stiffness: 260, damping: 20 } as Transition,
};

// ─── Fade ─────────────────────────────────────────────────
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: transitions.base },
};

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: transitions.base },
};

export const fadeDown: Variants = {
  hidden:  { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: transitions.base },
};

export const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: transitions.slow },
};

export const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: transitions.slow },
};

// ─── Clip-Path Reveals ────────────────────────────────────
export const clipRevealUp: Variants = {
  hidden:  { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 1.0, ease: easings.inOutQuart },
  },
};

export const clipRevealLeft: Variants = {
  hidden:  { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.9, ease: easings.inOutQuart },
  },
};

export const clipRevealRight: Variants = {
  hidden:  { clipPath: "inset(0 0 0 100%)" },
  visible: {
    clipPath: "inset(0 0 0 0%)",
    transition: { duration: 0.9, ease: easings.inOutQuart },
  },
};

// ─── Scale ────────────────────────────────────────────────
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: transitions.slow },
};

export const scaleInSpring: Variants = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: transitions.spring },
};

// ─── Stagger Containers ───────────────────────────────────
export const staggerContainer = (stagger = 0.1, delay = 0): Variants => ({
  hidden:  {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export const staggerFast    = staggerContainer(0.06, 0.1);
export const staggerDefault = staggerContainer(0.12, 0.1);
export const staggerSlow    = staggerContainer(0.20, 0.2);

// ─── Word / Char Split ────────────────────────────────────
export const wordReveal: Variants = {
  hidden:  { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.75, ease: easings.inOutQuart },
  },
};

export const charReveal: Variants = {
  hidden:  { y: "100%", rotateX: -90, opacity: 0 },
  visible: {
    y: "0%",
    rotateX: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: easings.outBack },
  },
};

// ─── Page Transition ─────────────────────────────────────
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easings.outExpo } },
  exit:    { opacity: 0, y: -20, transition: { duration: 0.4, ease: easings.inOutQuart } },
};

// ─── Viewport Config (reuse everywhere) ──────────────────
export const viewport = { once: true, margin: "-80px" } as const;
export const viewportEager = { once: true, margin: "-20px" } as const;
