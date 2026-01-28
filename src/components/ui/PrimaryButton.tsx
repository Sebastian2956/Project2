"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ButtonHTMLAttributes, CSSProperties, MouseEvent } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

export default function PrimaryButton({
  className,
  children,
  label,
  ...props
}: PrimaryButtonProps) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const handleMove = (event: MouseEvent<HTMLButtonElement>) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    const offsetX = event.clientX - bounds.left - bounds.width / 2;
    const offsetY = event.clientY - bounds.top - bounds.height / 2;
    x.set(offsetX * 0.25);
    y.set(offsetY * 0.25);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      initial={{ "--x": "120%" } as CSSProperties}
      animate={{ "--x": "120%" } as CSSProperties}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-soft shimmer-sweep",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2 linear-mask">
        {children ?? label}
      </span>
      <span className="pointer-events-none absolute inset-0 rounded-full p-px linear-overlay" />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
    </motion.button>
  );
}
