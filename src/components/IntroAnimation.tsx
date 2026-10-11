"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroAnimation() {
  const prefersReducedMotion = useReducedMotion();
  const [showIntro, setShowIntro] = useState(true);
  const smoothEase = [0.22, 1, 0.36, 1] as const;

  useEffect(() => {
    if (prefersReducedMotion) {
      setShowIntro(false);
      return;
    }

    const introDuration = 1200;
    const timer = window.setTimeout(() => {
      setShowIntro(false);
    }, introDuration);

    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion]);

  const textVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      x: 18,
      y: 16,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: prefersReducedMotion ? 0.25 : 0.7,
        ease: smoothEase,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {showIntro && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: prefersReducedMotion ? 0.2 : 0.7,
              ease: smoothEase,
            },
          }}
          className="fixed inset-0 z-[100000] overflow-hidden bg-[#fdfaf4]"
          aria-live="polite"
          aria-label="Intro animation"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.5 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(184,134,11,0.12),transparent_40%),linear-gradient(to_bottom,_rgba(255,255,255,0.92),rgba(253,250,244,0.98))]"
          />

          <div className="absolute inset-0 grid place-items-center px-6">
            <div className="relative flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: -220, scale: 0.75 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: prefersReducedMotion ? 0.1 : 0.15,
                  duration: prefersReducedMotion ? 0.4 : 0.9,
                  type: "spring",
                  stiffness: 110,
                  damping: 14,
                  mass: 0.8,
                }}
                className="relative mb-8 sm:mb-10"
              >
                <motion.div
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{
                    scale: 1.08,
                    opacity: 1,
                  }}
                  transition={{
                    delay: prefersReducedMotion ? 0.15 : 0.95,
                    type: "spring",
                    stiffness: 220,
                    damping: 12,
                    mass: 0.9,
                  }}
                  className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#d8b15a]/60 bg-gradient-to-br from-[#f9e6b6] via-[#d3a02b] to-[#6b4a0d] shadow-[0_18px_36px_rgba(120,89,12,0.28)] sm:h-20 sm:w-20"
                >
                  <motion.div
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 0.96, opacity: 1 }}
                    transition={{
                      delay: prefersReducedMotion ? 0.25 : 1.1,
                      type: "spring",
                      stiffness: 260,
                      damping: 14,
                      mass: 0.8,
                    }}
                    className="relative flex h-full w-full items-center justify-center rounded-full"
                  >
                    <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.9),transparent_35%)]" />
                    <div className="absolute -top-2 left-3 h-3 w-7 rounded-full bg-white/50 blur-sm" />
                    <div className="absolute inset-0 rounded-full shadow-[inset_-8px_-10px_18px_rgba(88,59,9,0.2)]" />
                  </motion.div>
                </motion.div>
              </motion.div>

              <div className="relative flex flex-col items-center justify-center text-center">
                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: prefersReducedMotion ? 0.15 : 1.45,
                    ...textVariants.visible.transition,
                  }}
                  className="mb-3 text-[10px] font-semibold tracking-[0.7em] text-[#7a5209] sm:text-xs"
                  style={{
                    transformOrigin: "center center",
                  }}
                >
                  WELCOME
                </motion.p>

                <motion.h1
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: prefersReducedMotion ? 0.2 : 1.9,
                    ...textVariants.visible.transition,
                  }}
                  className="bg-gradient-to-b from-[#b8860b] via-[#6b5208] to-[#1c1308] bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl md:text-5xl"
                  style={{
                    transformOrigin: "center center",
                  }}
                >
                  Hi, I&apos;m Swathi D
                </motion.h1>

                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: prefersReducedMotion ? 0.25 : 2.35,
                    ...textVariants.visible.transition,
                  }}
                  className="mt-3 text-sm font-semibold tracking-[0.18em] text-[#5b3c08] sm:text-base"
                  style={{
                    transformOrigin: "center center",
                  }}
                >
                  FRONTEND DEVELOPER
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
