"use client";

import {
  Calendar,
  Briefcase,
  LayoutDashboard,
  Network,
  Cable,
  Bug,
  Gauge,
  BarChart3,
  Box,
  FileCode2,
  Zap,
  AirVent,
} from "lucide-react";

export default function Experience() {
  const experienceHighlights = [
    {
      icon: LayoutDashboard,
      title: "Custom Dashboard Development",
      text: "Designed and developed customized monitoring dashboards with intuitive interfaces, interactive layouts, and real-time operational insights.",
    },
    {
      icon: Network,
      title: "2D Diagram Visualization",
      text: "Created and implemented interactive 2D diagrams within dashboards to visually represent systems, equipment, and operational workflows.",
    },
    {
      icon: Cable,
      title: "REST API & WebSocket Integration",
      text: "Integrated REST APIs and WebSocket connections to consume, manage, and display live data across monitoring applications.",
    },
    {
      icon: Bug,
      title: "Debugging & Issue Resolution",
      text: "Identified, analyzed, and resolved UI, functionality, and integration issues to maintain reliable and production-ready applications.",
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      text: "Optimized application performance, responsiveness, rendering, and data handling to deliver smooth dashboard experiences.",
    },
    {
      icon: FileCode2,
      title: "CMS & Welder Monitoring",
      text: "Contributed to a CMS project focused on displaying and managing welder-related operational data through a centralized dashboard.",
    },
    {
      icon: Zap,
      title: "Energy Monitoring Applications",
      text: "Worked on energy-focused applications for monitoring and visualizing operational and consumption-related data in real time.",
    },
    {
      icon: AirVent,
      title: "AC Monitoring & Control",
      text: "Developed AC monitoring functionality with WebSocket-based live data, enabling real-time monitoring and control of AC ON/OFF operations.",
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        {/* Section Title */}
        <h3
          className="bg-gradient-to-b from-[#B8860B] via-[#6B5208] to-black text-[35px] font-bold bg-clip-text text-transparent experience-title"
        >
          Work Experience
        </h3>

        {/* Experience Card */}
        <div
          className="glass exp-timeline-box"
          style={{
            borderRadius: "var(--radius-md)",
          }}
        >
          {/* Header */}
          <div
            className="exp-box-header"
            style={{
              padding: "1.75rem 2rem",
            }}
          >
            <div>
              {/* Company */}
              <div
                className="exp-company-name"
                style={{
                  fontSize: "1.25rem",
                }}
              >
                Sustainabyte Technologies Pvt. Ltd.
              </div>

              {/* Role + Location */}
              <div className="exp-role-title">
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Briefcase
                    size={13}
                    style={{
                      color: "var(--primary)",
                    }}
                  />

                  Frontend Developer
                </span>

                <span
                  style={{
                    margin: "0 6px",
                    color: "var(--text-muted)",
                  }}
                >
                  ·
                </span>

                <span
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  Chennai, India
                </span>
              </div>
            </div>

            {/* Duration */}
            <div
              className="exp-duration"
              style={{
                padding: "4px 12px",
                fontSize: "0.68rem",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Calendar size={12} />
                August 2024 – July 2026
              </span>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="exp-list-grid">
            {experienceHighlights.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={idx}
                  className="exp-list-item"
                  style={{
                    padding: "1.25rem 2rem",
                    fontSize: "0.82rem",
                    alignItems: "flex-start",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="exp-item-bullet"
                    style={{
                      width: "32px",
                      height: "32px",
                      minWidth: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                      background:
                        "linear-gradient(135deg, rgba(184,134,11,0.15), rgba(107,82,8,0.06))",
                      border: "1px solid rgba(184,134,11,0.25)",
                    }}
                  >
                    <Icon
                      size={16}
                      strokeWidth={1.8}
                      style={{
                        color: "#B8860B",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    {/* Highlight Title */}
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "0.86rem",
                        color: "var(--text)",
                      }}
                    >
                      {item.title}
                    </span>

                    {/* Description */}
                    <span
                      style={{
                        color: "var(--text-muted)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}