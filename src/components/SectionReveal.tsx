"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

type Direction = "top" | "right" | "left" | "bottom";

type SectionRevealProps = {
  children: ReactNode;
  direction?: Direction;
  className?: string;
  delay?: number;
  amount?: number;
  asInitial?: boolean;
};

const getOffset = (direction: Direction, isMobile: boolean) => {
  const desktop = {
    top: { y: -48 },
    right: { x: 50 },
    left: { x: -50 },
    bottom: { y: 50 },
  };

  const mobile = {
    top: { y: -28 },
    right: { x: 28 },
    left: { x: -28 },
    bottom: { y: 28 },
  };

  return isMobile ? mobile[direction] : desktop[direction];
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const revealTransition = (prefersReducedMotion: boolean) =>
  prefersReducedMotion
    ? {
        duration: 0.2,
        ease: smoothEase,
      }
    : {
        type: "spring" as const,
        stiffness: 70,
        damping: 20,
        mass: 0.8,
      };

export function SectionReveal({
  children,
  direction = "top",
  className = "",
  delay = 0,
  amount = 0.15,
  asInitial = false,
}: SectionRevealProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMobileState = () => setIsMobile(window.innerWidth < 768);
    updateMobileState();
    window.addEventListener("resize", updateMobileState);
    return () => window.removeEventListener("resize", updateMobileState);
  }, []);

  const hidden = prefersReducedMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        scale: 0.98,
        filter: "blur(10px)",
        ...getOffset(direction, isMobile),
      };

  const visible = { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" };

  if (asInitial) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        animate="visible"
        variants={{
          hidden,
          visible,
        }}
        transition={{
          ...revealTransition(prefersReducedMotion),
          delay,
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden,
        visible,
      }}
      transition={{
        ...revealTransition(prefersReducedMotion),
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  amount?: number;
};

export function RevealItem({
  children,
  className = "",
  direction = "top",
  delay = 0,
  amount = 0.15,
}: RevealItemProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMobileState = () => setIsMobile(window.innerWidth < 768);
    updateMobileState();
    window.addEventListener("resize", updateMobileState);
    return () => window.removeEventListener("resize", updateMobileState);
  }, []);

  const hidden = prefersReducedMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        scale: 0.98,
        filter: "blur(10px)",
        ...getOffset(direction, isMobile),
      };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden,
        visible: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
      }}
      transition={{
        ...revealTransition(prefersReducedMotion),
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
