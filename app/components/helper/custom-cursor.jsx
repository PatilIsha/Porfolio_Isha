"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, input, textarea, select, label, [role=button], .cursor-pointer";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Skip on touch / coarse-pointer devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.setProperty("--x", `${mouseX}px`);
      dot.style.setProperty("--y", `${mouseY}px`);
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const onDown = () => ring.classList.add("cursor-ring--click");
    const onUp = () => ring.classList.remove("cursor-ring--click");

    const onOver = (e) => {
      if (e.target.closest && e.target.closest(INTERACTIVE)) {
        ring.classList.add("cursor-ring--hover");
      }
    };
    const onOut = (e) => {
      if (e.target.closest && e.target.closest(INTERACTIVE)) {
        ring.classList.remove("cursor-ring--hover");
      }
    };
    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.setProperty("--x", `${ringX}px`);
      ring.style.setProperty("--y", `${ringY}px`);
      raf = requestAnimationFrame(loop);
    };
    loop();

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeave);
    document.body.classList.add("has-custom-cursor");

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeave);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true"></div>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true"></div>
    </>
  );
};

export default CustomCursor;
