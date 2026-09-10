"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check touch capabilities
    const checkTouch = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    };
    
    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }
    
    setIsTouchDevice(false);
    setIsVisible(true);
    document.body.classList.add("custom-cursor-active");

    const mouse = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let isHovered = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x - 3}px, ${mouse.y - 3}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA";
        
      if (isInteractive) {
        isHovered = true;
        if (ringRef.current) {
          ringRef.current.style.width = "46px";
          ringRef.current.style.height = "46px";
          ringRef.current.style.backgroundColor = "rgba(154, 113, 21, 0.08)";
          ringRef.current.style.borderColor = "rgba(154, 113, 21, 0.85)";
        }
      } else {
        isHovered = false;
        if (ringRef.current) {
          ringRef.current.style.width = "28px";
          ringRef.current.style.height = "28px";
          ringRef.current.style.backgroundColor = "transparent";
          ringRef.current.style.borderColor = "rgba(154, 113, 21, 0.5)";
        }
      }
    };

    const handleMouseLeaveWindow = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const handleMouseEnterWindow = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    // Smooth ring interpolation using requestAnimationFrame
    let animationFrameId: number;
    const animate = () => {
      const dx = mouse.x - ring.x;
      const dy = mouse.y - ring.y;
      
      // Interpolation speed
      ring.x += dx * 0.16;
      ring.y += dy * 0.16;
      
      if (ringRef.current) {
        const offset = isHovered ? 23 : 14;
        ringRef.current.style.transform = `translate3d(${ring.x - offset}px, ${ring.y - offset}px, 0)`;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "28px",
          height: "28px",
          border: "1.5px solid rgba(154, 113, 21, 0.5)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate3d(-100px, -100px, 0)",
          transition: "width 0.2s cubic-bezier(0.25, 1, 0.5, 1), height 0.2s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.2s ease, background-color 0.2s ease, opacity 0.2s ease",
          backgroundColor: "transparent",
        }}
      />
      {/* Inner Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          backgroundColor: "var(--primary)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 100000,
          transform: "translate3d(-100px, -100px, 0)",
          transition: "opacity 0.2s ease",
        }}
      />
    </>
  );
}
