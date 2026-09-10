"use client";

export default function Marquee() {
  const items = [
    "React.js",
    "Next.js",
    "Flutter",
    "JavaScript",
    "TypeScript",
    "Redux Toolkit",
    "MQTT Protocol",
    "WebSockets",
    "REST APIs",
    "Material UI",
    "Figma",
    "Git & GitHub",
  ];

  // Repeat the list to create a seamless infinite scrolling effect
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-content">
        {repeatedItems.map((item, idx) => (
          <span key={`${item}-${idx}`} className="marquee-item">
            {item} <span className="marquee-item-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
