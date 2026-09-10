"use client";

import { useState, useEffect } from "react";

// Inline custom SVGs to avoid any React 19 / Lucide hydration bugs
const MenuIcon = ({ size = 20 }: { size?: number }) => (
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
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const CloseIcon = ({ size = 20 }: { size?: number }) => (
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
    <line x1="18" x2="6" y1="6" y2="18" />
    <line x1="6" x2="18" y1="6" y2="18" />
  </svg>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "skills", "experience", "projects", "education", "certifications", "github", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-20% 0px -60% 0px", // triggers when section is in viewport middle
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    // { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`nav-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        {/* Logo */}
        <a href="#home" className="logo-link">
          Swathi<span className="logo-dot">.D</span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-right-content">
          <ul className="nav-menu-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`nav-menu-link ${isActive ? "active" : ""}`}
                    style={{
                      color: isActive ? "var(--primary)" : undefined,
                      fontWeight: isActive ? 700 : undefined,
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Active seek status badge */}
          <div className="nav-badge-status" style={{ borderColor: "rgba(34, 197, 94, 0.2)", backgroundColor: "rgba(34, 197, 94, 0.05)" }}>
            <span
              className="nav-badge-pulse animate-pulse-ring"
              style={{
                backgroundColor: "#22C55E",
                boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.7)",
              }}
            />
            <span style={{ color: "#166534" }}>Available for Full-Time Opportunities</span>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="nav-burger-btn"
          aria-label="Toggle Menu"
        >
          {isOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>

      {/* Mobile Links Dropdown */}
      <div className={`nav-mobile-menu ${isOpen ? "open" : ""}`}>
        <ul className="flex flex-col items-center gap-5 list-none w-full" style={{ listStyle: "none", width: "100%", textAlign: "center", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`nav-menu-link ${isActive ? "active" : ""}`}
                  style={{
                    fontSize: "1rem",
                    display: "block",
                    color: isActive ? "var(--primary)" : undefined,
                    fontWeight: isActive ? 700 : undefined,
                  }}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
          <li style={{ marginTop: "1rem", display: "inline-flex", justifyContent: "center" }}>
            <div className="nav-badge-status" style={{ borderColor: "rgba(34, 197, 94, 0.2)", backgroundColor: "rgba(34, 197, 94, 0.05)" }}>
              <span
                className="nav-badge-pulse animate-pulse-ring"
                style={{
                  backgroundColor: "#22C55E",
                  boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.7)",
                }}
              />
              <span style={{ color: "#166534" }}>Available for Full-Time Opportunities</span>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
