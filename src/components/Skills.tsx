"use client";

import { Network } from "lucide-react";

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

import type { IconType } from "react-icons";

interface Skill {
  name: string;
  Icon?: IconType;
  color: string;
  icon?: "rest";
}

const skills: Skill[] = [
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", Icon: SiCss, color: "#1572B6" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "JavaScript", Icon: SiJavascript, color: "#CA9A00" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React JS", Icon: SiReact, color: "#149ECA" },
  { name: "Next JS", Icon: SiNextdotjs, color: "#111111" },
  { name: "Redux", Icon: SiRedux, color: "#764ABC" },
  { name: "Material UI", Icon: SiMui, color: "#007FFF" },
  { name: "Node JS", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express JS", Icon: SiExpress, color: "#111111" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "GitHub", Icon: SiGithub, color: "#111111" },
  { name: "CI/CD Pipeline", Icon: SiGithubactions, color: "#2088FF" },
  { name: "REST API", icon: "rest", color: "#8E6705" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative  overflow-hidden bg-white  "
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/background.svg')] bg-cover bg-center bg-no-repeat opacity-10"
      />

      <div className="container relative z-10">
        {/* Heading */}
        <h2
          className="
             
            text-[25px]
            font-bold
            uppercase
            tracking-wide
            !bg-gradient-to-b
            !from-[#B8860B]
            !via-[#7A5A08]
            !to-[#17130A]
            !bg-clip-text
            !text-transparent
          "
        >
          Technical skills
        </h2>

        {/* Skills */}
        <div
          className="
            grid
            grid-cols-2
            gap-4
            min-[481px]:grid-cols-4
            lg:grid-cols-8
          "
        >
          {skills.map((s) => (
            <div
              key={s.name}
              className="
                relative
                flex
                min-h-36
                flex-col
                items-center
                justify-center
                gap-4
                rounded-2xl
                border
                border-[#6E5408]
                bg-[#FFFDF5]
                shadow-[0_8px_24px_rgba(110,84,8,0.08)]
                px-4
                py-6
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1.5
                hover:bg-[#A9701C]/60
                hover:border-[#6E5408]
                hover:shadow-[0_14px_30px_rgba(110,84,8,0.16)]
              "
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3B2C02]/10  shadow-inner">
                {s.icon === "rest" ? (
                  <Network size={36} color={s.color} strokeWidth={1.6} />
                ) : s.Icon ? (
                  <s.Icon size={32} color={s.color} />
                ) : null}
              </div>

              <span
                className="
                  text-center
                  text-[0.72rem]
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  text-[#3a2e05]
                "
              >
                {s.name}
              </span>
            </div>
          ))}
        </div>
        {/* <div aria-hidden="true" className="h-32" /> */}
      </div>
    </section>
  );
}