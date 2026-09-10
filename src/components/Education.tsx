"use client";

import {
  GraduationCap,
  Award,
  CalendarDays,
  MapPin,
} from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="relative min-h-[calc(100vh-92px)] overflow-hidden"
      style={{
        padding: "4rem 0 2.5rem",
        background:
          "linear-gradient(135deg, #fffdf8 0%, #f9f5ec 50%, #f5efe2 100%)",
      }}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full opacity-25 blur-3xl"
        style={{ background: "#D6B45A" }}
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full opacity-15 blur-3xl"
        style={{ background: "#B8860B" }}
      />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#8a6508 1px, transparent 1px), linear-gradient(90deg, #8a6508 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="container relative z-10  px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-3">
          <div className="section-eyebrow mb-3 flex items-center gap-3">
            <span
              className="inline-block h-[2px] w-[22px]"
              style={{ background: "var(--primary)" }}
            />
            Academic Background
          </div>

          <h5
            className="mb-0 text-[30px] font-bold leading-tight md:text-[40px]"
            style={{
              background:
                "linear-gradient(to bottom, #B8860B, #7A5A08, #17130A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Education
          </h5>

          <p
            className="mt-2 max-w-3xl text-[15px] leading-6"
            style={{ color: "var(--text-muted)" }}
          >
            My academic journey built the foundation for my passion in
            technology, design, and software development.
          </p>
        </div>

        {/* Main */}
        <div className="grid min-h-[50px] items-center gap-8 lg:grid-cols-[1.18fr_0.82fr]">
          {/* Education Card */}
          <div className="relative">
            <div
              className="group relative overflow-hidden rounded-[30px] border"
              style={{
                padding: "2.3rem",
                background: "rgba(255,253,248,0.9)",
                borderColor: "rgba(184,134,11,0.13)",
                boxShadow: "0 20px 55px rgba(70,50,10,0.08)",
                backdropFilter: "blur(18px)",
              }}
            >
              {/* Corner shape */}
              <div
                className="absolute -right-16 -top-16 h-44 w-44 rounded-full"
                style={{
                  background: "rgba(184,134,11,0.08)",
                }}
              />

              <div className="relative flex gap-5">
                {/* Graduation icon */}
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                  style={{
                    background: "#FBF5E7",
                    border: "1px solid rgba(184,134,11,0.18)",
                  }}
                >
                  <GraduationCap
                    size={27}
                    strokeWidth={1.8}
                    style={{ color: "#A87500" }}
                  />
                </div>

                <div className="min-w-0 flex-1">
                  {/* Degree label */}
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span
                      className="mono"
                      style={{
                        fontSize: "0.78rem",
                        color: "#9A6D08",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                      }}
                    >
                      Bachelor of Engineering
                    </span>

                    <span
                      className="rounded-md px-2 py-1 text-[9px] font-bold uppercase tracking-wide"
                      style={{
                        color: "#8A6508",
                        background: "#F8F0DD",
                        border: "1px solid #E8D8AE",
                      }}
                    >
                      Completed
                    </span>
                  </div>

                  <h3
                    className="mb-2 text-[24px] font-extrabold leading-tight md:text-[28px]"
                    style={{ color: "#292929" }}
                  >
                    Computer Science and Engineering
                  </h3>

                  <p
                    className="mb-1 text-[15px] font-semibold"
                    style={{ color: "#5D5D5D" }}
                  >
                    As-Salam College of Engineering & Technology
                  </p>

                  <div
                    className="mb-5 flex items-center gap-2 text-[13px]"
                    style={{ color: "#8A8A8A" }}
                  >
                    <MapPin size={14} />
                    Anna University, Chennai
                  </div>

                  {/* Information */}
                  <div className="flex flex-wrap items-center gap-2">
                    <div
                      className="flex items-center gap-2 rounded-xl px-4 py-2.5"
                      style={{
                        background: "#FBF6E9",
                        color: "#856009",
                      }}
                    >
                      <CalendarDays size={15} />
                      <span className="text-[12px] font-bold">
                        2020 – 2024
                      </span>
                    </div>

                    <div
                      className="flex items-center gap-2 rounded-xl px-4 py-2.5"
                      style={{
                        background: "#FBF6E9",
                        color: "#856009",
                      }}
                    >
                      <Award size={15} />
                      <span className="text-[12px] font-bold">
                        CGPA 7.5 / 10
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover line */}
              <div
                className="absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-700 group-hover:w-full"
                style={{
                  background:
                    "linear-gradient(90deg, #B8860B, #D9B95B, transparent)",
                }}
              />
            </div>

            {/* Academic Score — redesigned */}
            <div
              className="absolute -bottom-5 right-8 hidden items-center gap-3 rounded-2xl px-4 py-3 md:flex"
              style={{
                background: "#FFFDF8",
                border: "1px solid rgba(184,134,11,0.14)",
                boxShadow: "0 10px 28px rgba(70,50,10,0.09)",
              }}
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{
                  background: "#FBF3DC",
                  color: "#A87500",
                }}
              >
                <Award size={18} />
              </div>

              <div>
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.08em]"
                  style={{ color: "#999" }}
                >
                  Academic Score
                </p>

                <p
                  className="text-[13px] font-extrabold"
                  style={{ color: "#292929" }}
                >
                  7.5 / 10 CGPA
                </p>
              </div>
            </div>
          </div>

          {/* Illustration Area */}
          <div className="relative flex h-[380px] items-center justify-center">
            {/* Main circle */}
            <div
              className="absolute h-[305px] w-[305px] rounded-full border"
              style={{
                borderColor: "rgba(184,134,11,0.13)",
              }}
            />

            <div
              className="absolute h-[235px] w-[235px] rounded-full border border-dashed"
              style={{
                borderColor: "rgba(184,134,11,0.17)",
              }}
            />

            {/* Soft center */}
            <div
              className="absolute h-[160px] w-[160px] rounded-full"
              style={{
                background: "rgba(184,134,11,0.055)",
              }}
            />

            {/* Small decorative dots */}
            <span
              className="absolute right-[15%] top-[13%] h-2.5 w-2.5 rounded-full"
              style={{ background: "#B8860B" }}
            />

            <span
              className="absolute bottom-[17%] left-[14%] h-2 w-2 rounded-full"
              style={{ background: "#C79B35" }}
            />

            {/* Illustration */}
            <div
              className="relative z-10 h-[315px] w-[315px]"
              style={{
                animation: "educationFloat 5s ease-in-out infinite",
              }}
            >
              <img
                src="/education.svg"
                alt="Education illustration"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Clean Degree Label */}
            <div
              className="absolute right-[3%] top-[16%] z-20 rounded-xl px-5 py-3.5"
              style={{
                background: "#FFFDF8",
                border: "1px solid rgba(184,134,11,0.14)",
                boxShadow: "0 10px 25px rgba(70,50,10,0.08)",
                animation: "badgeFloat 4s ease-in-out infinite",
              }}
            >
              <p
                className="text-[9px] font-bold uppercase tracking-wider"
                style={{ color: "#999" }}
              >
                Degree
              </p>

              <p
                className="mt-0.5 text-[14px] font-extrabold"
                style={{ color: "#856009" }}
              >
                B.E. CSE
              </p>
            </div>

            {/* Clean Year Label */}
            <div
              className="absolute bottom-[12%] left-[2%] z-20 rounded-xl px-4 py-2.5"
              style={{
                background: "#FFFDF8",
                border: "1px solid rgba(184,134,11,0.14)",
                boxShadow: "0 10px 25px rgba(70,50,10,0.08)",
                animation: "badgeFloat 4s ease-in-out 1s infinite",
              }}
            >
              <div className="flex items-center gap-2">
                <CalendarDays
                  size={14}
                  style={{ color: "#A87500" }}
                />

                <span
                  className="text-[12px] font-bold"
                  style={{ color: "#444" }}
                >
                  2020 — 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes educationFloat {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-9px);
          }
        }

        @keyframes badgeFloat {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-5px);
          }
        }

        @media (max-width: 1024px) {
          #education {
            min-height: auto !important;
          }

          .education-floating-image {
            width: 280px !important;
            height: 280px !important;
          }
        }

        @media (max-width: 768px) {
          #education {
            padding-top: 4rem !important;
          }
        }

        @media (max-width: 576px) {
          #education {
            padding: 3.5rem 0 3rem !important;
          }

          .education-floating-image {
            width: 220px !important;
            height: 220px !important;
          }
        }
      `}</style>
    </section>
  );
}