"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  const [activeImage, setActiveImage] = useState(0);
  const aboutImages = [
    { src: "/design-1.png", alt: "Learning platform interface" },
    { src: "/design.png", alt: "Developer workspace illustration" },
    { src: "/design-2.png", alt: "Developer workspace illustration" },
    { src: "/todo.png", alt: "Task management dashboard" },
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % aboutImages.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [aboutImages.length]);

  return (
    <section className="about-section" id="about" style={{ padding: "4rem 0" }}>
      <div
        className="glow-blob"
        style={{
          bottom: "10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          backgroundColor: "rgba(154, 113, 21, 0.05)",
        }}
      />

      <div className="container">
        <h5
          className="mb-10 text-[35px] font-bold !bg-gradient-to-b !from-[#B8860B] !via-[#7A5A08] !to-[#17130A] !bg-clip-text !text-transparent"
        >
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
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="about-visual-carousel"
          >
            <div className="about-visual-frame">
              <AnimatePresence mode="wait">
                <motion.img
                  key={aboutImages[activeImage].src}
                  src={aboutImages[activeImage].src}
                  alt={aboutImages[activeImage].alt}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="about-carousel-image"
                />
              </AnimatePresence>
            </div>
          </motion.div>

          <div className="about-content" style={{ paddingLeft: "0.5rem" }}>
            <h3
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: "#B8860B",
                marginBottom: "1.25rem",
              }}
            >
              Frontend Developer passionate about building modern digital
              experiences.
            </h3>

            <p
              style={{
                fontSize: "1.08rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
              }}
            >
              Frontend Developer with{" "}
              <strong style={{ color: "#B8860B" }}>2+ years of experience</strong>{" "}
              in <strong>React.js, Next.js, JavaScript</strong>, and{" "}
              <strong>TypeScript</strong>. Familiar with{" "}
              <strong>Node.js</strong> and skilled in{" "}
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
        .about-visual {
          position: relative;
          min-height: 420px;
          width: 100%;
          overflow: hidden;
          border-radius: 30px;
          background: transparent;
        }

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
        }

        .about-visual-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .about-carousel-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .binary-bg {
          position: absolute;
          left: 8%;
          top: 10%;
          transform: rotate(-12deg);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: rgba(122, 90, 8, 0.18);
          display: grid;
          gap: 0.6rem;
          line-height: 1.2;
          white-space: nowrap;
        }

        .server-stack {
          position: absolute;
          left: 0;
          bottom: 18px;
          width: 130px;
          height: 120px;
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
          justify-content: flex-end;
          gap: 10px;
        }

        .server-stack span {
          display: block;
          width: 74%;
          height: 18px;
          border-radius: 8px;
          background: linear-gradient(180deg, #d7b66a, #b88a2a);
          box-shadow: inset 0 0 0 2px rgba(255,255,255,0.18);
          position: relative;
        }

        .server-stack span::before,
        .server-stack span::after {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 70%;
          height: 4px;
          background: rgba(54, 42, 15, 0.18);
          border-radius: 999px;
        }

        .server-stack span::before { top: 5px; }
        .server-stack span::after { bottom: 5px; }

        .laptop-wrap {
          position: absolute;
          left: 12%;
          right: 0;
          bottom: 0;
          width: min(92%, 660px);
          height: 320px;
        }

        .laptop-screen {
          position: absolute;
          left: 15%;
          top: 28px;
          width: 68%;
          height: 150px;
          background: linear-gradient(180deg, #d2c7b8, #4e504d);
          border-radius: 16px 16px 10px 10px;
          transform: skewX(-8deg);
          box-shadow: inset 0 0 0 10px rgba(33, 33, 33, 0.2);
          overflow: hidden;
        }

        .laptop-screen::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255,255,255,0.08), rgba(0,0,0,0));
        }

        .screen-code-line {
          position: relative;
          height: 8px;
          border-radius: 999px;
          background: rgba(255, 204, 84, 0.95);
          margin: 18px 22px 0 18px;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.12);
        }

        .screen-code-line.short { width: 35%; }
        .screen-code-line.medium { width: 48%; }
        .screen-code-line.long { width: 78%; }

        .laptop-base {
          position: absolute;
          left: 5%;
          right: 3%;
          bottom: 18px;
          height: 74px;
          border-radius: 18px 18px 20px 20px;
          background: linear-gradient(180deg, #d5a728, #b57c10 55%, #7f5907);
          transform: perspective(900px) rotateX(48deg);
          box-shadow: 0 26px 35px rgba(122, 90, 8, 0.2);
        }

        .laptop-base::before {
          content: "";
          position: absolute;
          inset: 6px 18px 14px;
          border-radius: 12px;
          background: rgba(255,255,255,0.1);
        }

        .person {
          position: absolute;
          right: 8%;
          bottom: 52px;
          width: 180px;
          height: 150px;
        }

        .head {
          position: absolute;
          left: 54px;
          top: 10px;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: #f0c6a3;
          box-shadow: inset -4px -8px 0 rgba(0,0,0,0.02);
        }

        .head::before,
        .head::after {
          content: "";
          position: absolute;
          top: 12px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #3b2f2b;
        }

        .head::before { left: 12px; }
        .head::after { right: 12px; }

        .body {
          position: absolute;
          left: 40px;
          top: 58px;
          width: 88px;
          height: 68px;
          border-radius: 24px 24px 18px 18px;
          background: #fdfdfd;
          box-shadow: inset 0 0 0 2px rgba(0,0,0,0.02);
        }

        .arm {
          position: absolute;
          width: 18px;
          height: 60px;
          border-radius: 12px;
          background: #f0c6a3;
          top: 68px;
        }

        .arm-left {
          left: 30px;
          transform: rotate(18deg);
        }

        .arm-right {
          right: 22px;
          transform: rotate(-18deg);
        }

        .legs {
          position: absolute;
          left: 52px;
          bottom: 0;
          display: flex;
          gap: 22px;
        }

        .legs span {
          display: block;
          width: 18px;
          height: 58px;
          background: #2f2d33;
          border-radius: 10px;
          position: relative;
        }

        .legs span::before {
          content: "";
          position: absolute;
          bottom: -8px;
          left: -6px;
          width: 30px;
          height: 16px;
          border-radius: 10px;
          background: #1b1b1d;
        }

        .float-card {
          position: absolute;
          right: 10px;
          width: 78px;
          height: 78px;
          border-radius: 18px;
          background: linear-gradient(180deg, #d3a220, #b57d12);
          box-shadow: 0 18px 18px rgba(122, 90, 8, 0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1.8rem;
          font-weight: 800;
        }

        .float-card-top {
          top: 14px;
          right: 42px;
        }

        .float-card-mid {
          top: 110px;
          right: 0;
        }

        .float-card-bottom {
          top: 204px;
          right: 42px;
          font-size: 2rem;
        }

        @media (max-width: 992px) {
          .about-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .about-visual {
            min-height: 320px;
            margin-bottom: 0.5rem;
          }

          .laptop-wrap {
            width: 100%;
            left: 8%;
          }
        }
      `}</style>
    </section>
  );
}
