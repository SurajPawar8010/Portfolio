import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovered = false;
    let isMouseDown = false;
    let isVisible = false;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }

      // Immediately position the precision center dot (zero lag)
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${
        isMouseDown ? 0.6 : 1
      })`;
    };

    const onMouseDown = () => {
      isMouseDown = true;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(0.6)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(0.85)`;
    };

    const onMouseUp = () => {
      isMouseDown = false;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(1)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${
        isHovered ? 1.5 : 1
      })`;
    };

    const onMouseLeave = () => {
      isVisible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible = true;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Event delegation for hoverable items - lightweight & catches dynamically added elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const interactive = target.closest("a, button, input, textarea, select, [role='button'], .interactive-hover");
      if (interactive) {
        isHovered = true;
        ring.classList.add("cursor-hovered");
      } else {
        isHovered = false;
        ring.classList.remove("cursor-hovered");
      }
    };

    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    // Smooth 60-120fps hardware-accelerated lerp loop for the trailing ring
    const render = () => {
      if (isVisible) {
        // High-precision smooth lerp
        const lerpFactor = isHovered ? 0.22 : 0.18;
        ringX += (mouseX - ringX) * lerpFactor;
        ringY += (mouseY - ringY) * lerpFactor;

        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${
          isMouseDown ? 0.85 : isHovered ? 1.5 : 1
        })`;
      }
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Precision Core Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] opacity-0"
        style={{
          backgroundColor: "#38bdf8",
          boxShadow: "0 0 10px #38bdf8",
          willChange: "transform",
          transition: "opacity 0.2s ease"
        }}
      />

      {/* Trailing Aura Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] opacity-0 border border-cyan-400/40 bg-cyan-400/5 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
        style={{
          width: "36px",
          height: "36px",
          willChange: "transform",
          transition: "opacity 0.2s ease, width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background-color 0.25s ease"
        }}
      />
    </>
  );
}
