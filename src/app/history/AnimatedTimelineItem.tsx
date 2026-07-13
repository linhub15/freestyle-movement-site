"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function AnimatedTimelineItem({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.li
      className="relative pb-10 pl-7 last:pb-0 sm:pl-10"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.li>
  );
}
