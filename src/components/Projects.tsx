import { ArrowUpRight, ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 15 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
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

interface ProjectItem {
  num: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  gitUrl?: string;
}

export default function Projects() {
  const projectsData: ProjectItem[] = [
    {
      num: "01",
      title: "Crypto Research Dashboard",
      description:
        "A modern crypto research dashboard designed to track market trends, analyze token performance, and explore real-time cryptocurrency insights.",
      tags: ["FIGMA", "UI/UX", "CRYPTO"],
      liveUrl:
        "https://www.figma.com/design/WwJVvctqTQhNWMAtWfzPgF/Crypto-Research-Dashboard?node-id=0-1&p=f&t=dfnls6lcwtYVqYRtDl-0",
    },
{
  num: "02",
  title: "Learnify",
  description:
    "A modern e-learning platform designed to help users discover courses, access learning resources, and build their skills through an intuitive and engaging online learning experience.",
  tags: ["REACT.JS", "MATERIAL UI", "CSS"],
  liveUrl: "https://elearnerhub.netlify.app/",
  gitUrl: "https://github.com/Swathi-0710/E-Learning-Website",
},
    {
      num: "03",
      title: "Todo Application",
      description:
        "Automation control center for connected devices, insights, and personalized energy monitoring.",
      tags: ["NEXT JS","TAILWIND CSS", "JWT AUTHENDICATION", "NODE JS","EXPRESS JS","MONGO DB"],
      liveUrl: "https://todo-frontend-gamma-ten.vercel.app/login",
      gitUrl: "https://github.com/Swathi-0710/todo-frontend",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-bg" aria-hidden="true" />
      <div className="projects-shell">
        <div className="projects-heading">
          <p className="projects-kicker">Selected Work</p>
          <h5 className="mb-10 text-[35px] font-bold !bg-gradient-to-b !from-[#B8860B] !via-[#7A5A08] !to-[#17130A] !bg-clip-text !text-transparent">
            Project I&apos;ve Built
          </h5>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => {
            return (
              <article key={project.num} className="project-card">
                <div className="project-body">
                  <div className="project-header">
                   <h3
  className="
    !bg-gradient-to-b
    !from-[#B8860B]
    !via-[#7A5A08]
    !to-[#17130A]
    !bg-clip-text
    !text-transparent
  "
>
  {project.title}
</h3>
                    <ArrowUpRight size={19} strokeWidth={1.8} className="project-arrow" />
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {project.gitUrl ? (
                      <a
                        href={project.gitUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link project-link--muted"
                      >
                        <GithubIcon size={15} />
                        <span>GitHub</span>
                      </a>
                    ) : (
                      <span className="project-link-spacer" />
                    )}

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link project-link--primary"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} strokeWidth={1.8} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
