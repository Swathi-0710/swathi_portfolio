"use client";

import { domAnimation, LazyMotion, m } from "framer-motion";
import type { ReactNode } from "react";

type ChildrenProps = {
  children: ReactNode;
};

type SlideSectionProps = ChildrenProps & {
  direction?: "top" | "right" | "left" | "bottom";
  index?: number;
  animateOnEnter?: boolean;
};

const offsetMap = {
  top: { x: 0, y: -110 },
  right: { x: 100, y: 0 },
  left: { x: -100, y: 0 },
  bottom: { x: 0, y: 110 },
};

export default function MotionProvider({ children }: ChildrenProps) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

export function SlideSection({
  children,
  direction = "right",
  index = 0,
  animateOnEnter = true,
}: SlideSectionProps) {
  const offset = offsetMap[direction];

  return (
    <m.div
      className="page-slide-section"
      initial={animateOnEnter ? { opacity: 0, x: offset.x, y: offset.y } : false}
      whileInView={animateOnEnter ? { opacity: 1, x: 0, y: 0 } : undefined}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ zIndex: 10 + index }}
    >
      {children}
    </m.div>
  );
}
