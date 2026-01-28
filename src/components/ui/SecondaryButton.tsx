"use client";

import { motion } from "framer-motion";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

export default function SecondaryButton({
  className,
  children,
  label,
  ...props
}: SecondaryButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/80",
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 translate-y-full bg-white/90 transition-transform duration-500 group-hover:translate-y-0" />
      <span className="relative z-10 flex items-center gap-2 text-white transition-colors duration-500 group-hover:text-black">
        {children ?? label}
      </span>
      <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.button>
  );
}
