"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasFinePointer = typeof window !== "undefined"
      ? window.matchMedia("(hover: hover) and (pointer: fine)").matches
      : false;

    if (!hasFinePointer) {
      document.body.classList.remove("custom-cursor-active");
      return;
    }

    document.body.classList.add("custom-cursor-active");

    const mouse = { x: -100, y: -100 };
    let isHovered = false;
    let animationFrameId = 0;

    const syncCursor = () => {
      if (dotRef.current) {
        const dotSize = 8;
        dotRef.current.style.transform = `translate3d(${mouse.x - dotSize / 2}px, ${mouse.y - dotSize / 2}px, 0)`;
      }

      if (ringRef.current) {
        const ringSize = isHovered ? 46 : 32;
        const offset = ringSize / 2;
        ringRef.current.style.transform = `translate3d(${mouse.x - offset}px, ${mouse.y - offset}px, 0)`;
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          animationFrameId = 0;
          syncCursor();
        });
      }
    };

    const handlePointerOver = (e: PointerEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        !!target.closest("a") ||
        !!target.closest("button") ||
        !!target.closest('[role="button"]') ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA";

      const nextIsHovered = Boolean(isInteractive);
      if (isHovered === nextIsHovered) return;
      isHovered = nextIsHovered;
      setCursorVisualState(isHovered);
      syncCursor();
    };

    const handlePointerLeaveWindow = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const handlePointerEnterWindow = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    const setCursorVisualState = (hovered: boolean) => {
      if (ringRef.current) {
        const ringWidth = hovered ? 46 : 32;
        const ringHeight = hovered ? 46 : 32;
        ringRef.current.style.width = `${ringWidth}px`;
        ringRef.current.style.height = `${ringHeight}px`;
        ringRef.current.style.backgroundColor = hovered ? "rgba(154, 113, 21, 0.08)" : "rgba(154, 113, 21, 0.04)";
        ringRef.current.style.borderColor = hovered ? "rgba(154, 113, 21, 0.9)" : "rgba(154, 113, 21, 0.8)";
        ringRef.current.style.boxShadow = hovered
          ? "0 0 0 1px rgba(154, 113, 21, 0.1), 0 0 25px rgba(184, 134, 11, 0.22)"
          : "0 0 0 1px rgba(154, 113, 21, 0.08), 0 0 16px rgba(184, 134, 11, 0.12)";
      }

      if (dotRef.current) {
        dotRef.current.style.backgroundColor = hovered ? "#B8860B" : "#9A7115";
        dotRef.current.style.boxShadow = hovered
          ? "0 0 0 5px rgba(184, 134, 11, 0.14)"
          : "0 0 0 3px rgba(154, 113, 21, 0.08)";
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerover", handlePointerOver, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeaveWindow);
    window.addEventListener("pointerenter", handlePointerEnterWindow);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerleave", handlePointerLeaveWindow);
      window.removeEventListener("pointerenter", handlePointerEnterWindow);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "32px",
          height: "32px",
          border: "1.5px solid rgba(154, 113, 21, 0.8)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate3d(-100px, -100px, 0)",
          transition: "width 0.2s cubic-bezier(0.25, 1, 0.5, 1), height 0.2s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.2s ease, background-color 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease",
          backgroundColor: "rgba(154, 113, 21, 0.04)",
          boxShadow: "0 0 0 1px rgba(154, 113, 21, 0.08), 0 0 16px rgba(184, 134, 11, 0.12)",
          backdropFilter: "blur(2px)",
        }}
      />
      {/* Inner Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          backgroundColor: "#9A7115",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 100000,
          transform: "translate3d(-100px, -100px, 0)",
          transition: "opacity 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease",
          boxShadow: "0 0 0 3px rgba(154, 113, 21, 0.08)",
        }}
      />
    </>
  );
}
