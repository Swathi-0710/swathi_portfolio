"use client";

import { ShieldCheck, Calendar } from "lucide-react";

export default function Certifications() {
  const certificationsData = [
    {
      title: "Professional Web Development",
      issuer: "Vebbox Solutions",
      date: "2024",
      icon: "🌐",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design"],
    },
    {
      title: "Python",
      issuer: "Vebbox Solutions",
      date: "2023",
      icon: "🐍",
      skills: ["Python Core", "OOP", "Data Structures", "Algorithms"],
    },
    {
      title: "Django",
      issuer: "Vebbox Solutions",
      date: "2023",
      icon: "⚙️",
      skills: ["Django Framework", "REST Framework", "SQLite", "Backend APIs"],
    },
    {
      title: "Git & GitHub",
      issuer: "Vebbox Solutions",
      date: "2023",
      icon: "💻",
      skills: ["Version Control", "Git CLI", "GitHub Flow", "Merge Conflicts"],
    },
    {
      title: "MongoDB",
      issuer: "Vebbox Solutions",
      date: "2024",
      icon: "🍃",
      skills: ["MongoDB Atlas", "NoSQL Queries", "Mongoose ODM", "Data Aggregation"],
    },
    {
      title: "GitHub Actions",
      issuer: "Vebbox Solutions",
      date: "2024",
      icon: "⚡",
      skills: ["CI/CD Pipelines", "Workflows", "Automation", "GitHub API"],
    },
  ];

  return (
    <section id="certifications" style={{ padding: "5rem 0" }}>
      <div className="container">
        <div className="section-eyebrow">Credentials</div>
        <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>
          Certifications.
        </h2>

        <div className="certs-grid">
          {certificationsData.map((cert) => (
            <div
              key={cert.title}
              className="glass cert-card"
              style={{
                padding: "2rem",
                borderRadius: "var(--radius-lg)",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                minHeight: "240px",
              }}
            >
              <div>
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "var(--radius-md)",
                        background: "rgba(154, 113, 21, 0.05)",
                        border: "1px solid rgba(154, 113, 21, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.25rem",
                      }}
                    >
                      {cert.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.2 }}>{cert.title}</h3>
                      <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", fontWeight: 500 }}>{cert.issuer}</p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      padding: "2px 8px",
                      borderRadius: "var(--radius-full)",
                      background: "rgba(0,0,0,0.02)",
                      border: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    <Calendar size={10} /> {cert.date}
                  </div>
                </div>

                {/* Skills tags covered */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "1rem" }}>
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        padding: "3px 8px",
                        borderRadius: "var(--radius-sm)",
                        background: "rgba(154, 113, 21, 0.02)",
                        border: "1px solid rgba(154, 113, 21, 0.06)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  color: "var(--primary)",
                  marginTop: "1.25rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                <ShieldCheck size={12} /> Verified Credential
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 992px) {
          .certs-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .certs-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
