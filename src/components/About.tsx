"use client";

import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  const [activeImage, setActiveImage] = useState(0);
  const aboutImages = [
    { src: "/design-1.png", alt: "Learning platform interface" },
    { src: "/design.png", alt: "Developer workspace illustration" },
    { src: "/design-2.png", alt: "Developer workspace illustration" },
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % aboutImages.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [aboutImages.length]);

  return (
    <section
      className="about-section relative overflow-hidden bg-white"
      id="about"
      style={{ padding: "2.5rem 0 4rem", scrollMarginTop: "5.5rem" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/background.svg')] bg-cover bg-center bg-no-repeat opacity-10"
      />

      <div className="container relative z-10">
        <h5 className="mb-10 text-[35px] font-bold !bg-gradient-to-b !from-[#B8860B] !via-[#7A5A08] !to-[#17130A] !bg-clip-text !text-transparent">
          About <span>Me</span>
        </h5>

        <div
          className="about-layout-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1.5fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="about-visual-carousel"
          >
            <div className="about-visual-frame">
              <div className="about-visual-sheen" aria-hidden="true" />

              <AnimatePresence mode="wait">
                <m.div
                  key={aboutImages[activeImage].src}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="about-carousel-image-wrapper"
                >
                  <Image
                    src={aboutImages[activeImage].src}
                    alt={aboutImages[activeImage].alt}
                    fill
                    sizes="(max-width: 992px) calc(100vw - 3rem), 760px"
                    className="about-carousel-image"
                  />
                </m.div>
              </AnimatePresence>

              <div className="about-carousel-dots" aria-label="About image indicator">
                {aboutImages.map((image, index) => (
                  <m.span
                    key={image.src}
                    className={`about-carousel-dot ${activeImage === index ? "is-active" : ""}`}
                    animate={{
                      scale: activeImage === index ? 1 : 0.9,
                      opacity: activeImage === index ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                ))}
              </div>
            </div>
          </m.div>

          <div className="about-content" style={{ paddingLeft: "0.5rem" }}>
            <h3
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: "#B8860B",
                marginBottom: "1.25rem",
              }}
            >
              Frontend & Mobile Developer passionate about building modern
              digital experiences.
            </h3>

            <p
              style={{
                fontSize: "1.08rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
              }}
            >
              Frontend & Mobile Developer with{" "}
              <strong style={{ color: "#B8860B" }}>2+ years of experience</strong>{" "}
              in <strong>React.js, Next.js, JavaScript</strong>,{" "}
              <strong>TypeScript</strong>, and <strong>Flutter</strong>. Familiar
              with <strong>Node.js</strong> and skilled in{" "}
              <strong>Figma, responsive UI development</strong>, and{" "}
              <strong>smooth animations</strong> to create engaging user
              experiences.
            </p>

            <p
              style={{
                fontSize: "1.08rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
              }}
            >
              I enjoy transforming ideas and designs into{" "}
              <strong>clean, responsive, and interactive interfaces</strong>{" "}
              with a strong focus on performance, usability, and visual quality.
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .about-visual-carousel {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
        }

        .about-visual-frame {
          position: relative;
          width: 100%;
          max-width: 760px;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          border-radius: 28px;
          background: linear-gradient(135deg, rgba(181, 122, 27, 0.11), rgba(255, 255, 255, 0.95));
          border: 1px solid rgba(154, 113, 21, 0.12);
          box-shadow: 0 24px 60px rgba(120, 92, 17, 0.08);
        }

        .about-visual-sheen {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top left, rgba(255,255,255,0.72), transparent 38%);
          pointer-events: none;
        }

        .about-carousel-image {
          object-fit: contain;
          filter: drop-shadow(0 18px 20px rgba(93, 64, 12, 0.12));
        }

        .about-carousel-image-wrapper {
          position: absolute;
          inset: 0;
        }

        .about-carousel-dots {
          position: absolute;
          left: 50%;
          bottom: 18px;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          z-index: 2;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(154, 113, 21, 0.1);
          box-shadow: 0 8px 18px rgba(104, 76, 11, 0.04);
        }

        .about-carousel-dot {
          display: block;
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: rgba(149, 114, 29, 0.28);
          border: 1px solid rgba(149, 114, 29, 0.18);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15);
        }

        .about-carousel-dot.is-active {
          width: 30px;
          background: linear-gradient(90deg, #d9ae4a 0%, #b8860b 100%);
          border-color: rgba(184, 134, 11, 0.8);
          box-shadow: 0 0 0 3px rgba(184, 134, 11, 0.12);
        }

        @media (max-width: 992px) {
          .about-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
