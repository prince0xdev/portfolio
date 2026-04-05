"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onAnimationComplete: () => void;
}

export default function SplashScreen({ onAnimationComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 1000);
    const t2 = setTimeout(() => setPhase("exit"), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const letters = "EKPINSE".split("");

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          onAnimationComplete={(def) => {
            if ((def as any).y !== undefined) onAnimationComplete();
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-amber-500/10 blur-[80px]" />
          </div>

          <div className="flex items-baseline gap-0 mb-3">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
              className="text-5xl sm:text-7xl font-medium text-white tracking-tight"
            >
              Prince
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7, ease: "backOut" }}
              className="text-5xl sm:text-7xl font-medium text-amber-500 ml-1"
            >
              .
            </motion.span>
          </div>

          <div className="flex items-center gap-3">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              style={{ transformOrigin: "left" }}
              className="block w-8 h-[1px] bg-amber-500"
            />
            <div className="flex gap-[2px]">
              {letters.map((l, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 + i * 0.06 }}
                  className="text-[11px] tracking-[0.2em] text-neutral-400"
                >
                  {l}
                </motion.span>
              ))}
            </div>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              style={{ transformOrigin: "right" }}
              className="block w-8 h-[1px] bg-amber-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}