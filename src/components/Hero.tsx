"use client";

import { m, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Briefcase,
} from "lucide-react";

import { SiExpress, SiJavascript, SiTypescript } from "react-icons/si";


// ============================================================
// BRAND ICONS
// ============================================================

const GithubIcon = ({
  className = "w-5 h-5",
}: {
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


const LinkedinIcon = ({
  className = "w-5 h-5",
}: {
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


// ============================================================
// TECHNOLOGY ICONS
// ============================================================

const ReactIcon = ({
  className = "w-7 h-7",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="-11.5 -10.23174 23 20.46348"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g>
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);


const NextjsIcon = ({
  className = "w-7 h-7",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 180 180"
    fill="none"
    stroke="currentColor"
    strokeWidth="6"
  >
    <circle
      cx="90"
      cy="90"
      r="85"
      stroke="currentColor"
      strokeWidth="10"
    />
    <path
      d="M140.2 140.2L82.5 60.5h-10v59h10V76.8l47.8 66c3.2-3.8 6.1-7.9 8.7-12.3z"
      fill="currentColor"
    />
    <path
      d="M120.5 60.5h10v59h-10z"
      fill="currentColor"
    />
  </svg>
);


const NodejsIcon = ({
  className = "w-7 h-7",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L3 7.5v9L12 22l9-5.5v-9L12 2Z" />
    <path d="M12 22V12" />
    <path d="M12 12l9-5.5" />
    <path d="M12 12L3 16.5" />
    <path
      d="M12 7.5C10 9 9 11 9 13c0 2 1.5 3 3 3.5"
      strokeWidth="1.2"
    />
    <path
      d="M12 7.5c2 1.5 3 3.5 3 5.5c0 2-1.5 3-3 3.5"
      strokeWidth="1.2"
    />
  </svg>
);


const MongoDbIcon = ({
  className = "w-7 h-7",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M12 2C12 2 6 7 6 12C6 17.5 10 20 12 22C14 20 18 17.5 18 12C18 7 12 2 12 2Z" />
    <path d="M12 2V22" />
    <path
      d="M12 7C9.5 9.5 8.5 12 8.5 13.5C8.5 14.5 9.5 15.5 12 16C14.5 15.5 15.5 14.5 15.5 13.5C15.5 12 14.5 9.5 12 7Z"
      fill="currentColor"
      fillOpacity="0.2"
    />
  </svg>
);


// BACKGROUND
// ============================================================

const HeroLandscape = () => (
  <img
    className="hero-landscape opacity-10"
    src="/background.svg"
    alt=""
    aria-hidden="true"
  />
);


const orbitOuterItems = [
  { name: "React.js", icon: <ReactIcon />, tone: "react" },
  { name: "Next.js", icon: <NextjsIcon />, tone: "next" },
  { name: "TypeScript", icon: <SiTypescript />, tone: "typescript" },
  { name: "Node.js", icon: <NodejsIcon />, tone: "node" },
  { name: "Express.js", icon: <SiExpress />, tone: "express" },
  { name: "MongoDB", icon: <MongoDbIcon />, tone: "mongo" },
];

const orbitInnerItems = [
  { name: "JavaScript", icon: <SiJavascript />, tone: "javascript" },
  { name: "HTML5", icon: <span>5</span>, tone: "html" },
  { name: "CSS3", icon: <span>#</span>, tone: "css" },
  { name: "JWT Auth", icon: <span>⌑</span>, tone: "jwt" },
  { name: "Material UI", icon: <span>M</span>, tone: "material" },
  { name: "Figma", icon: <span>F</span>, tone: "figma" },
];


// HERO COMPONENT
// ============================================================

export default function Hero() {

  // ==========================================================
  // SOCIAL LINKS
  // ==========================================================

  const socialLinks = [
    {
      href: "https://github.com/Swathi-0710",
      icon: <GithubIcon className="w-5 h-5" />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/swathi-fullstack",
      icon: <LinkedinIcon className="w-5 h-5" />,
      label: "LinkedIn",
    },
    {
      href: "mailto:swathiyashamk@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
    },
  ];


  // ==========================================================
  // FRAMER MOTION
  // ==========================================================

  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };


  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        type: "spring" as const,
        stiffness: prefersReducedMotion ? 60 : 100,
        damping: prefersReducedMotion ? 18 : 15,
      },
    },
  };


  // ==========================================================
  // RETURN
  // ==========================================================

  return (
    <section
      className="relative  bg-white text-secondary flex items-center pt-8 pb-12 overflow-hidden"
      id="home"
    >

      {/* Background SVG */}

      <div className="hero-background-art">
        <HeroLandscape />
      </div>


      {/* Decorative Grid */}

      <div
        className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#B8860B_1px,transparent_1px),linear-gradient(to_bottom,#B8860B_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"
      />


      {/* Main Container */}

      <div 
      className="container mx-auto px-6 relative z-10"
      >

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center"
        >


          {/* ==================================================
              LEFT CONTENT
          ================================================== */}

          <m.div
            variants={containerVariants}
            initial={false}
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start gap-5 text-left relative z-20"
          >

            {/* Experience Badge */}

            <m.div
              variants={itemVariants}
              className="flex flex-wrap gap-2.5 items-center"
            >

              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50/80 text-[#B8860B] border border-[#B8860B]/20 rounded-full text-xs font-semibold tracking-wide shadow-sm select-none"
              >

                <Briefcase
                  className="w-5 h-5 text-[#B8860B] animate-pulse drop-shadow-[0_0_6px_#B8860B]"
                />

                2 Years Experience

              </span>

            </m.div>


            {/* Name */}

            <m.h1
              variants={itemVariants}
              className="text-4xl md:text-4xl lg:text-5xl font-extrabold tracking-tight font-display leading-[1.05]"
            >

              <span
                className="bg-gradient-to-b from-[#B8860B] via-[#6B5208] to-black bg-clip-text text-transparent"
              >
                Swathi
              </span>

              {" "}

              <span
                className="bg-gradient-to-b from-[#B8860B] via-[#6B5208] to-black bg-clip-text text-transparent"
              >
                D
              </span>

            </m.h1>


            {/* Job Title */}

            <m.h2
              variants={itemVariants}
              className="text-2xl md:text-xl font-bold text-[#B8860B] font-display tracking-wide"
            >
              Frontend & Mobile Developer
            </m.h2>


            {/* Description */}

            <m.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-700 leading-relaxed font-sans max-w-xl"
            >

              Building scalable, responsive, and high-performance web and mobile
              experiences with{" "}

              <span className="text-[#B8860B] font-semibold">
                React.js, Next.js, TypeScript, and Flutter
              </span>

              , backed by{" "}

              <span className="text-gray-800 font-medium">
                Node.js, Express.js, and MongoDB
              </span>

              . Focused on creating{" "}

              <span className="text-[#B8860B] font-semibold">
                modern user experiences
              </span>

              , reusable components, and efficient,
              production-ready solutions.

            </m.p>


            {/* Buttons */}

            <m.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4"
            >

              {/* View Projects */}

              <m.a
                href="#projects"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="inline-flex h-12 w-52 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#B8860B] via-[#6B5208] to-black px-6 font-bold text-white shadow-md shadow-[#B8860B]/15 transition-all duration-300 hover:shadow-lg hover:shadow-[#B8860B]/25"
              >

                <span>
                  View Projects
                </span>

                <ArrowRight className="h-4 w-4" />

              </m.a>


              {/* Download Resume */}

      <m.a
  href="/Swathi_Developer.pdf"
  download="Swathi_Developer.pdf"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="inline-flex h-12 w-52 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-gray-200 bg-white px-6 font-semibold text-secondary transition-all duration-300 hover:border-secondary hover:bg-gray-50"
>
  <span>Download Resume</span>
  <Download className="h-4 w-4 shrink-0" />
</m.a>

            </m.div>


            {/* Social Links */}

            <m.div
              variants={itemVariants}
              className="flex items-center gap-3.5"
            >

              <div className="flex items-center gap-4">

                {socialLinks.map((social) => (

                  <m.a
                    key={social.label}
                    href={social.href}
                    target={
                      social.label !== "Email"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      social.label !== "Email"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.label}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-2xl border border-[#795B09] bg-[#FEFAED] text-[#7C5E09] shadow-md transition-all duration-300 hover:bg-[#7C5E09] hover:text-white hover:shadow-lg hover:shadow-[#7C5E09]/30"
                  >

                    {social.icon}

                  </m.a>

                ))}

              </div>

            </m.div>

          </m.div>


          {/* ==================================================
              RIGHT — TECH STACK ORBIT
          ================================================== */}

          <m.div
            initial={false}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: prefersReducedMotion ? 0.3 : 1,
              ease: "easeOut",
              delay: prefersReducedMotion ? 0 : 0.25,
            }}
            className="lg:col-span-5 flex w-full items-center justify-center relative"
          >
            <div className="orbit-wrap" aria-label="Technology stack">
              <svg className="orbit-constellation" viewBox="0 0 100 100" aria-hidden="true">
                <g stroke="#c98a26" strokeWidth="0.15" fill="none">
                  <line x1="8" y1="12" x2="30" y2="30" />
                  <line x1="92" y1="15" x2="70" y2="32" />
                  <line x1="6" y1="88" x2="28" y2="70" />
                  <line x1="94" y1="86" x2="72" y2="68" />
                </g>
                <g fill="#c98a26" opacity="0.6">
                  <circle cx="8" cy="12" r="0.6" />
                  <circle cx="92" cy="15" r="0.6" />
                  <circle cx="6" cy="88" r="0.6" />
                  <circle cx="94" cy="86" r="0.6" />
                </g>
              </svg>

              <div className="orbit-ring orbit-ring-outer" />
              <div className="orbit-ring orbit-ring-inner" />
              <div className="orbit-hub">&lt;/&gt;</div>

              <div className="orbit-track orbit-track-outer">
                {orbitOuterItems.map((item, index) => (
                  <div
                    className="orbit-satellite"
                    key={item.name}
                    style={{ transform: `rotate(${index * 60}deg)` }}
                  >
                    <div
                      className="orbit-position"
                      style={{ transform: `translate(190px) rotate(-${index * 60}deg)` }}
                    >
                      <div className={`orbit-badge orbit-badge-${item.tone}`}>
                        <div className="orbit-icon">{item.icon}</div>
                        <span>{item.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="orbit-track orbit-track-inner">
                {orbitInnerItems.map((item, index) => (
                  <div
                    className="orbit-satellite"
                    key={item.name}
                    style={{ transform: `rotate(${index * 60}deg)` }}
                  >
                    <div
                      className="orbit-position"
                      style={{ transform: `translate(118px) rotate(-${index * 60}deg)` }}
                    >
                      <div className={`orbit-badge orbit-badge-${item.tone}`}>
                        <div className="orbit-icon orbit-icon-small">{item.icon}</div>
                        <span>{item.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </m.div>

        </div>

      </div>


      {/* ======================================================
          STYLES
      ====================================================== */}

      <style jsx global>{`

        .orbit-wrap {
          position: relative;
          width: min(92vw, 480px);
          aspect-ratio: 1;
        }

        .orbit-constellation {
          position: absolute;
          inset: -6%;
          opacity: 0.55;
          pointer-events: none;
        }

        .orbit-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 1.5px dashed #e7d6b3;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .orbit-ring-outer {
          width: 88%;
          height: 88%;
        }

        .orbit-ring-inner {
          width: 54%;
          height: 54%;
        }

        .orbit-hub {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 5;
          display: flex;
          width: 23%;
          aspect-ratio: 1;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #fdf9f1;
          background: radial-gradient(circle at 32% 28%, #c98a26, #a9701c 55%, #5c3a08);
          box-shadow: 0 0 0 6px rgba(169, 112, 28, 0.12), 0 12px 28px rgba(92, 58, 8, 0.35);
          font-size: clamp(14px, 3.6vw, 20px);
          font-weight: 800;
          transform: translate(-50%, -50%);
        }

        .orbit-track {
          position: absolute;
          inset: 0;
          animation: orbit-spin var(--orbit-duration) linear infinite;
        }

        .orbit-track-outer {
          --orbit-duration: 46s;
        }

        .orbit-track-inner {
          --orbit-duration: 34s;
          animation-direction: reverse;
        }

        .orbit-satellite {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
        }

        .orbit-position {
          position: absolute;
          transform: translate(-50%, -50%);
        }

        .orbit-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          animation: orbit-spin var(--orbit-duration) linear infinite reverse;
          white-space: nowrap;
        }

        .orbit-track-inner .orbit-badge {
          animation-direction: normal;
        }

        .orbit-icon {
          display: flex;
          width: 52px;
          height: 52px;
          align-items: center;
          justify-content: center;
          border: 1px solid #e7d6b3;
          border-radius: 50%;
          color: #5c3a08;
          background: #fffdf9;
          box-shadow: 0 6px 14px rgba(92, 58, 8, 0.1);
          font-size: 24px;
          font-weight: 800;
        }

        .orbit-icon-small {
          width: 42px;
          height: 42px;
          font-size: 19px;
        }

        .orbit-badge-react .orbit-icon { color: #149eca; }
        .orbit-badge-next .orbit-icon { color: #111; }
        .orbit-badge-typescript .orbit-icon { color: #3178c6; }
        .orbit-badge-node .orbit-icon { color: #6d8f18; }
        .orbit-badge-express .orbit-icon { color: #333; }
        .orbit-badge-mongo .orbit-icon { color: #4f8e3b; }
        .orbit-badge-javascript .orbit-icon { color: #9a720d; }
        .orbit-badge-html .orbit-icon { color: #e34f26; }
        .orbit-badge-css .orbit-icon { color: #1572b6; }
        .orbit-badge-jwt .orbit-icon { color: #5c3a08; }
        .orbit-badge-material .orbit-icon { color: #007fff; }
        .orbit-badge-figma .orbit-icon { color: #a259ff; }

        .orbit-badge span {
          padding: 1px 7px;
          border-radius: 8px;
          color: #231a0f;
          background: rgba(253, 249, 241, 0.9);
          font-size: 11px;
          font-weight: 700;
        }

        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 1024px) {
          .orbit-wrap {
            width: min(92vw, 420px);
          }

          .orbit-position {
            transform: translate(clamp(70px, 23vw, 150px), -50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .orbit-track,
          .orbit-badge {
            animation: none;
          }
        }

              `}</style>

    </section>
  );
}