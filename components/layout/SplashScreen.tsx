"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Particles } from "../magicui/particles";

interface SplashScreenProps {
  onAnimationComplete: () => void;
}

export default function SplashScreen({ onAnimationComplete }: SplashScreenProps) {
  const [showText, setShowText] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const fullText = "WELCOME";

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowText(true);
    }, 3000);

    return () => clearTimeout(timer1);
  }, []);

  useEffect(() => {
    if (showText) {
      let i = 0;
      const typingInterval = setInterval(() => {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
        if (i === fullText.length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            onAnimationComplete();
          }, 1000);
        }
      }, 150);

      return () => clearInterval(typingInterval);
    }
  }, [showText, onAnimationComplete]);

  const dotVariants = {
    initial: { y: "0%" },
    animate: { y: "100%" },
  };

  const dotTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
  } as const;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 4.5 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-neutral-800 z-50"
    >
      <Particles 
                className="fixed inset-0 -z-10" 
                quantity={250}
                color="#8b5cf6"
                ease={20}
                size={0.6}
                staticity={30}
                refresh={true}
              />
      {!showText ? (
        <div className="flex space-x-4"> {}
          <motion.span
            variants={dotVariants}
            initial="initial"
            animate="animate"
            transition={{ ...dotTransition, delay: 0 }}
            className="block w-8 h-8 rounded-full bg-yellow-500"
          />
          <motion.span
            variants={dotVariants}
            initial="initial"
            animate="animate"
            transition={{ ...dotTransition, delay: 0.2 }}
            className="block w-8 h-8 rounded-full bg-yellow-500"
          />
          <motion.span
            variants={dotVariants}
            initial="initial"
            animate="animate"
            transition={{ ...dotTransition, delay: 0.4 }}
            className="block w-8 h-8 rounded-full bg-yellow-500"
          />
        </div>
      ) : (
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white"
        >
          <span className="text-yellow-500">{displayText.slice(0, 2)}</span>{}
          <span className="text-yellow-500">{displayText.slice(2, 5)}</span>{}
          <span className="text-yellow-500">{displayText.slice(5, 7)}</span>{}
          <span className="text-yellow-500">...</span>{}
        </motion.h1>
      )}
    </motion.div>
  );
}
