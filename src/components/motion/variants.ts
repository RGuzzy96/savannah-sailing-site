import type { Variants } from "framer-motion";

export const EASE = [0.65, 0, 0.35, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
} satisfies Variants;

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
} satisfies Variants;

export const staggerItem = fadeUp;
