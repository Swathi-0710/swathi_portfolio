"use client";

import { useEffect, useState } from "react";
import { GitPullRequest, GitFork, Star, Activity } from "lucide-react";

// Inline SVG replacement for Lucide brand Github icon
const GithubIcon = ({ size = 16, style }: { size?: number; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function GitHubActivity() {
  const [contributions, setContributions] = useState<{ level: number; date: string; count: number }[]>([]);

  useEffect(() => {
    // Generate mock active contribution data for the last 24 weeks (24 * 7 = 168 days)
    const data = [];
    const now = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    for (let i = 167; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      
      // Randomize activity level: 0 (none), 1 (light), 2 (medium), 3 (dark)
      // Weekdays are more active, weekends are less active, some days have 0 activity
      let level = 0;
      let count = 0;
      const rand = Math.random();
      
      if (isWeekend) {
        if (rand > 0.8) {
          level = 1;
          count = Math.floor(Math.random() * 2) + 1;
        } else if (rand > 0.95) {
          level = 2;
          count = Math.floor(Math.random() * 3) + 3;
        }
      } else {
        if (rand > 0.85) {
          level = 0;
          count = 0;
        } else if (rand > 0.5) {
          level = 1;
          count = Math.floor(Math.random() * 2) + 1;
        } else if (rand > 0.15) {
          level = 2;
          count = Math.floor(Math.random() * 4) + 3;
        } else {
          level = 3;
          count = Math.floor(Math.random() * 6) + 7;
        }
      }
      
      const dateString = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
      data.push({ level, date: dateString, count });
    }
    
    setContributions(data);
  }, []);

  const stats = [
    { label: "Total Commits", value: "842", icon: <Activity size={16} /> },
    { label: "Pull Requests", value: "48", icon: <GitPullRequest size={16} /> },
    { label: "Repositories", value: "18", icon: <GitFork size={16} /> },
    { label: "Stars Earned", value: "32", icon: <Star size={16} /> },
  ];

  return (
    <section id="github" style={{ padding: "5rem 0", backgroundColor: "rgba(154, 113, 21, 0.008)" }}>
      <div className="container">
        <div className="section-eyebrow">Open Source</div>
        <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>
          GitHub <span className="gradient-text-alt">Activity.</span>
        </h2>

        <div className="github-layout-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "3.5rem", alignItems: "start" }}>
          {/* Contribution Heatmap Card */}
          <div className="glass github-card" style={{ padding: "2.25rem", borderRadius: "var(--radius-lg)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <GithubIcon size={20} style={{ color: "var(--primary)" }} />
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-primary)" }}>Contributions</h3>
              </div>
              <span className="mono" style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 500 }}>
                @Swathi-0710
              </span>
            </div>

            {/* Grid Container */}
            <div style={{ overflowX: "auto", paddingBottom: "10px" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: "repeat(7, 10px)",
                  gridAutoFlow: "column",
                  gridAutoColumns: "10px",
                  gap: "3.5px",
                  minWidth: "320px",
                }}
              >
                {contributions.map((day, idx) => {
                  let bgColor = "rgba(154, 113, 21, 0.05)"; // level 0 (light theme greyish-gold)
                  if (day.level === 1) bgColor = "rgba(154, 113, 21, 0.25)";
                  else if (day.level === 2) bgColor = "rgba(154, 113, 21, 0.55)";
                  else if (day.level === 3) bgColor = "rgba(154, 113, 21, 0.9)";
                  
                  return (
                    <div
                      key={idx}
                      title={`${day.count} contributions on ${day.date}`}
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: bgColor,
                        borderRadius: "2px",
                        cursor: "pointer",
                        transition: "transform 0.1s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Legend */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.25rem", fontSize: "0.7rem", color: "var(--text-muted)" }}>
              <span>Last 6 months</span>
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <span>Less</span>
                <div style={{ width: "10px", height: "10px", backgroundColor: "rgba(154, 113, 21, 0.05)", borderRadius: "2px" }} />
                <div style={{ width: "10px", height: "10px", backgroundColor: "rgba(154, 113, 21, 0.25)", borderRadius: "2px" }} />
                <div style={{ width: "10px", height: "10px", backgroundColor: "rgba(154, 113, 21, 0.55)", borderRadius: "2px" }} />
                <div style={{ width: "10px", height: "10px", backgroundColor: "rgba(154, 113, 21, 0.9)", borderRadius: "2px" }} />
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Stats & Call to Action */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Stats list */}
            <div className="github-stats-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass"
                  style={{
                    padding: "1.25rem",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-secondary)" }}>{stat.label}</span>
                    <span style={{ color: "var(--primary)", opacity: 0.8 }}>{stat.icon}</span>
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.2 }}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Profile CTA Button */}
            <a
              href="https://github.com/Swathi-0710"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "16px",
                width: "100%",
                borderRadius: "var(--radius-md)",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              <GithubIcon size={18} /> Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 992px) {
          .github-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
