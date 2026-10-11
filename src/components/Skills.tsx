"use client";

import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiGithubactions,
  SiFigma,
} from "react-icons/si";

import { Network, Code2, Layers, Server, Wrench } from "lucide-react";

import type { IconType } from "react-icons";

interface Skill {
  name: string;
  Icon?: IconType;
  color: string;
  percentage: number;
  icon?: "rest";
}

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    title: "Core Languages",
    subtitle: "Foundation of every interface I build",
    icon: <Code2 size={20} />,
    skills: [
      { name: "JavaScript", Icon: SiJavascript, color: "#CA9A00", percentage: 85 },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6", percentage: 75 },
      { name: "HTML", Icon: SiHtml5, color: "#E34F26", percentage: 90 },
      { name: "CSS", Icon: SiCss, color: "#1572B6", percentage: 85 },
    ],
  },
  {
    title: "Frontend Development",
    subtitle: "Scalable, responsive and maintainable UIs",
    icon: <Layers size={20} />,
    skills: [
      { name: "React JS", Icon: SiReact, color: "#149ECA", percentage: 90 },
      { name: "Next JS", Icon: SiNextdotjs, color: "#111111", percentage: 80 },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8", percentage: 85 },
      { name: "Material UI", Icon: SiMui, color: "#007FFF", percentage: 85 },
      { name: "Redux", Icon: SiRedux, color: "#764ABC", percentage: 75 },
    ],
  },
  {
    title: "Backend & APIs",
    subtitle: "Server-side fundamentals and data integration",
    icon: <Server size={20} />,
    skills: [
      { name: "Node JS", Icon: SiNodedotjs, color: "#339933", percentage: 60 },
      { name: "Express JS", Icon: SiExpress, color: "#111111", percentage: 55 },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248", percentage: 55 },
      { name: "REST API", icon: "rest", color: "#8E6705", percentage: 75 },
    ],
  },
  {
    title: "Design & Workflow",
    subtitle: "UI design, version control and delivery",
    icon: <Wrench size={20} />,
    skills: [
      { name: "Figma", Icon: SiFigma, color: "#F24E1E", percentage: 75 },
      { name: "GitHub", Icon: SiGithub, color: "#111111", percentage: 80 },
      { name: "CI/CD Pipeline", Icon: SiGithubactions, color: "#2088FF", percentage: 60 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-white py-20">
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/background.svg')] bg-cover bg-center bg-no-repeat opacity-10"
      />

      <div className="container relative z-10 mx-auto px-5">
        {/* HEADING */}
        <div className="mb-12">
          <h2 className="bg-gradient-to-b from-[#B8860B] via-[#7A5A08] to-[#17130A] bg-clip-text text-[25px] font-bold uppercase tracking-wide text-transparent">
            Technical Skills
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#6b5a2a]">
            A snapshot of the technologies I work with across frontend
            engineering, backend fundamentals, design and delivery workflows.
          </p>
        </div>

        {/* CATEGORY CARDS */}
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.title}
              // Inline padding so a global CSS reset can never remove it
              style={{ padding: "24px" }}
              className="group relative flex min-h-[285px] w-full flex-col overflow-hidden rounded-2xl border border-[#B8860B]/20 bg-white/90 shadow-[0_8px_30px_rgba(110,84,8,0.07)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#B8860B]/40 hover:shadow-[0_16px_40px_rgba(110,84,8,0.16)]"
            >
              {/* TOP RIGHT GLOW */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#B8860B]/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-[#B8860B]/15"
              />

              {/* BOTTOM LEFT GLOW */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-[#B8860B]/5 blur-2xl"
              />

              {/* CATEGORY HEADER */}
              <div
                style={{ paddingBottom: "16px" }}
                className="relative z-10 flex min-h-[58px] items-center gap-3 border-b border-[#B8860B]/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#B8860B]/25 bg-[#FFFDF5] text-[#8E6705] shadow-[0_5px_16px_rgba(184,134,11,0.10)] transition-all duration-300 group-hover:border-[#B8860B]/45 group-hover:bg-[#FFF9E8] group-hover:shadow-[0_6px_20px_rgba(184,134,11,0.20)]">
                  {category.icon}
                </div>

                <div className="min-w-0">
                  <h3 className="text-[16px] font-bold leading-5 text-[#3a2e05]">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-4 text-[#8a7845]">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* SKILLS */}
              <div
                style={{ marginTop: "24px", columnGap: "32px", rowGap: "24px" }}
                className="relative z-10 grid grid-cols-1 sm:grid-cols-2"
              >
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group/skill min-w-0">
                    {/* SKILL HEADER */}
                    <div className="mb-2 flex items-center justify-between">
                      {/* ICON + NAME */}
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#B8860B]/15 bg-[#FFFDF5] shadow-[0_3px_10px_rgba(110,84,8,0.06)] transition-all duration-300 group-hover/skill:-translate-y-0.5 group-hover/skill:border-[#B8860B]/35 group-hover/skill:bg-white group-hover/skill:shadow-[0_5px_16px_rgba(184,134,11,0.18)]">
                          {skill.icon === "rest" ? (
                            <Network size={19} color={skill.color} strokeWidth={1.8} />
                          ) : skill.Icon ? (
                            <skill.Icon size={19} color={skill.color} />
                          ) : null}
                        </div>

                        <span className="truncate text-[13px] font-semibold text-[#3a2e05]">
                          {skill.name}
                        </span>
                      </div>

                      {/* PERCENTAGE */}
                      <span className="ml-2 shrink-0 text-[11px] font-bold text-[#8E6705]">
                        {skill.percentage}%
                      </span>
                    </div>

                    {/* PROGRESS BAR */}
                    <div className="relative h-2 overflow-hidden rounded-full bg-[#EDE6D2] shadow-inner">
                      <div
                        className="h-full rounded-full bg-gradient-to-b from-[#B8860B] via-[#6B5208] to-black opacity-80 shadow-[0_2px_8px_rgba(184,134,11,0.25)] transition-all duration-1000 ease-out group-hover/skill:shadow-[0_3px_12px_rgba(184,134,11,0.45)]"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* BOTTOM GOLD GLOW */}
              <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent transition-all duration-500 group-hover:w-2/3" />
            </div>
          ))}
        </div>

        {/* SKILL LEVEL INDICATOR */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-[#6b5a2a]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#B8860B] shadow-[0_0_8px_rgba(184,134,11,0.5)]" />
            <span>Strong</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D4A72C] shadow-[0_0_8px_rgba(212,167,44,0.4)]" />
            <span>Intermediate</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EDE6D2]" />
            <span>Developing</span>
          </div>
        </div>
      </div>
    </section>
  );
}