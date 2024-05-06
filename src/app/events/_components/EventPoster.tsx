"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  src: string;
};
export function EventPoster(props: Props) {
  return (
    <div className="rounded-lg overflow-hidden">
      <motion.div
        whileFocus={{ scale: 1.1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ ease: "easeInOut" }}
      >
        <Image
          src={props.src}
          alt="Unrivaled 2024"
          width="300"
          height="300"
        />
      </motion.div>
    </div>
  );
}
