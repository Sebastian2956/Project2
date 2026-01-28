"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function InitialLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("tts_loaded");
    if (hasLoaded) return;
    setVisible(true);
    const timeout = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("tts_loaded", "true");
    }, 2400);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.svg
              width="160"
              height="120"
              viewBox="0 0 160 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M10 70 L80 20 L150 70 V110 H10 Z"
                stroke="rgba(255,255,255,0.8)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
              <motion.path
                d="M40 110 V75 H120 V110"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, delay: 0.3, ease: "easeInOut" }}
              />
            </motion.svg>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-xs uppercase tracking-[0.5em] text-white/60"
            >
              Calibrating spaces
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
