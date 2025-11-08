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
  const [slideDown, setSlideDown] = useState(false);
  const fullText = "WELCOME";

  // Étape 1 : attendre avant d'afficher le texte
  useEffect(() => {
    const timer1 = setTimeout(() => setShowText(true), 3000);
    return () => clearTimeout(timer1);
  }, []);

  // Étape 2 : effet de frappe du texte
  useEffect(() => {
    if (showText) {
      let i = 0;
      const typingInterval = setInterval(() => {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
        if (i === fullText.length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            setSlideDown(true); // Lance l’effet de descente
          }, 1000);
        }
      }, 150);
      return () => clearInterval(typingInterval);
    }
  }, [showText]);

  // Animation des trois points initiaux
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
      initial={{ y: "0%" }}
      animate={slideDown ? { y: "100%" } : { y: "0%" }}
      transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }} // effet smooth et lent
      onAnimationComplete={() => {
        if (slideDown) onAnimationComplete();
      }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-neutral-900 z-50 overflow-hidden"
    >
      {/* Particules en arrière-plan */}
      <Particles
        className="fixed inset-0 -z-10"
        quantity={250}
        color="#8b5cf6"
        ease={20}
        size={0.6}
        staticity={30}
        refresh={true}
      />

      {/* Phase 1 : points de chargement */}
      {!showText ? (
        <div className="flex space-x-4">
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
          className="text-6xl sm:text-8xl font-bold text-white"
        >
          <span className="text-yellow-500">{displayText}</span>
        </motion.h1>
      )}
    </motion.div>
  );
}
