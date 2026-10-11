"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import IntroAnimation from "@/components/IntroAnimation";

type SlideSectionProps = {
  children: ReactNode;
  direction?: "top" | "right" | "left" | "bottom";
  index?: number;
};

function SlideSection({ children, direction = "right", index = 0 }: SlideSectionProps) {
  const offsetMap = {
    top: { x: 0, y: -110 },
    right: { x: 100, y: 0 },
    left: { x: -100, y: 0 },
    bottom: { x: 0, y: 110 },
  };

  return (
    <motion.div
      className="page-slide-section"
      initial={{ opacity: 0, x: offsetMap[direction].x, y: offsetMap[direction].y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ zIndex: 10 + index }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <IntroAnimation />

      <motion.div
        initial={{ opacity: 0, y: 12, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2,
        }}
        className="min-h-screen"
      >
        <CustomCursor />
        <Header />

        <main className="page-single-scroll bg-white">
          <SlideSection direction="top" index={0}>
            <Hero />
          </SlideSection>

          <SlideSection direction="right" index={1}>
            <About />
          </SlideSection>

          <SlideSection direction="left" index={2}>
            <Skills />
          </SlideSection>

          <SlideSection direction="right" index={3}>
            <Experience />
          </SlideSection>

          <SlideSection direction="left" index={4}>
            <Projects />
          </SlideSection>
{/* 
          <SlideSection direction="top" index={5}>
            <Education />
          </SlideSection> */}

          <SlideSection direction="bottom" index={6}>
            <Contact />
          </SlideSection>
        </main>

        {/* <Footer /> */}
      </motion.div>

      <style jsx global>{`
        html {
          scrollbar-width: none;
        }

        html::-webkit-scrollbar,
        body::-webkit-scrollbar {
          display: none;
        }

        body {
          overflow-x: clip;
        }

        .page-single-scroll {
          position: relative;
          width: 100%;
          background: transparent;
          padding-top: 0;
          margin-top: 0;
          overflow-x: clip;
        }

        .page-slide-section {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: stretch;
          justify-content: center;
          overflow: clip;
          will-change: transform, opacity, filter;
          z-index: 1;
          margin: 0;
          scroll-snap-align: start;
        }

        .page-slide-section > * {
          width: 100%;
          min-height: 100vh;
        }

        .page-slide-section + .page-slide-section {
          margin-top: 0;
        }
      `}</style>
    </>
  );
}
