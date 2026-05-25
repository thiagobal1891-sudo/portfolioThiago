"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({ children, className = "", delay = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Safely extract string if children is an array (e.g. from {variable}.)
  const textContent = Array.isArray(children) ? children.join("") : String(children);
  const words = textContent.split(" ");

  useGSAP(() => {
    if (!containerRef.current) return;

    const wordElements = containerRef.current.querySelectorAll(".word-inner");
    
    gsap.set(wordElements, { yPercent: 110, rotation: 2 });
    
    gsap.to(wordElements, {
      yPercent: 0,
      rotation: 0,
      duration: 1.2,
      stagger: 0.04,
      ease: "power4.out",
      delay: delay,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`${className} flex flex-wrap`} aria-label={String(children)}>
      {words.map((word, index) => (
        <span
          key={index}
          className="word-outer overflow-hidden inline-block mr-[0.25em] pb-4 -mb-4 pt-2 -mt-2"
          aria-hidden="true"
        >
          <span className="word-inner inline-block origin-bottom-left will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </div>
  );
};
