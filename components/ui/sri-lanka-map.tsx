"use client";

import { useEffect, useRef, useState } from "react";

// Coastal perimeter districts in clockwise order starting from Jaffna (north)
const PERIMETER = [
  { name: "Jaffna",       id: "LK-41" },
  { name: "Kilinochchi",  id: "LK-42" },
  { name: "Mullaitivu",   id: "LK-45" },
  { name: "Trincomalee",  id: "LK-53" },
  { name: "Batticaloa",   id: "LK-52" },
  { name: "Ampara",       id: "LK-51" },
  { name: "Hambantota",   id: "LK-33" },
  { name: "Matara",       id: "LK-32" },
  { name: "Galle",        id: "LK-31" },
  { name: "Kalutara",     id: "LK-13" },
  { name: "Colombo",      id: "LK-11" },
  { name: "Gampaha",      id: "LK-12" },
  { name: "Puttalam",     id: "LK-62" },
  { name: "Mannar",       id: "LK-43" },
];

// All district IDs — used to clear the active class before setting new one
const ALL_IDS = [
  "LK-11","LK-12","LK-13","LK-21","LK-22","LK-23",
  "LK-31","LK-32","LK-33","LK-41","LK-42","LK-43",
  "LK-44","LK-45","LK-51","LK-52","LK-53","LK-61",
  "LK-62","LK-71","LK-72","LK-81","LK-82","LK-91","LK-92",
];

function applyStyles(container: HTMLDivElement, activeIndex: number) {
  const activeId = PERIMETER[activeIndex].id;
  ALL_IDS.forEach((id) => {
    const el = container.querySelector(`#${id}`) as SVGPathElement | null;
    if (!el) return;
    if (id === activeId) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

export function SriLankaMap({ svgContent }: { svgContent: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [labelVisible, setLabelVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) applyStyles(containerRef.current, 0);
  }, []);

  useEffect(() => {
    if (containerRef.current) applyStyles(containerRef.current, activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    let tid: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setLabelVisible(false);
      tid = setTimeout(() => {
        setActiveIndex((i) => (i + 1) % PERIMETER.length);
        setLabelVisible(true);
      }, 350);
    }, 2000);
    return () => {
      clearInterval(interval);
      clearTimeout(tid);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-full">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(17,212,82,0.07) 0%, transparent 65%)",
          }}
        />
        <div
          ref={containerRef}
          className="w-full [&>svg]:w-full [&>svg]:h-auto"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      </div>

      <div
        className="text-center transition-opacity duration-300"
        style={{ opacity: labelVisible ? 1 : 0 }}
      >
        <p className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
          {PERIMETER[activeIndex].name} District
        </p>
      </div>
    </div>
  );
}
