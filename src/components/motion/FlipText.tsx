"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Renovation",
  "Design",
  "Roofing",
  "Landscape",
  "Carpentry",
  "Tile",
];

export default function FlipText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-12 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ rotateX: 90, opacity: 0, y: 20 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          exit={{ rotateX: -90, opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="block origin-bottom text-4xl font-semibold tracking-tight text-white md:text-5xl"
          style={{ transformStyle: "preserve-3d", perspective: 800 }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
