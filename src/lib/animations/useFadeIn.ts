import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface UseFadeInOptions {
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  ease?: string;
  triggerOnScroll?: boolean;
}

export function useFadeIn(options: UseFadeInOptions = {}) {
  const {
    delay = 0,
    duration = 1,
    y = 30,
    stagger = 0,
    ease = "power3.out",
    triggerOnScroll = true,
  } = options;

  const elementRef = useRef<any>(null);

  useGSAP(() => {
    if (!elementRef.current) return;

    const el = elementRef.current;
    
    const targets = stagger > 0 ? gsap.utils.toArray(el.children) : el;

    // Initial state
    gsap.set(targets, { autoAlpha: 0, y: y });

    const animationProps = {
      autoAlpha: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease,
      scrollTrigger: triggerOnScroll
        ? {
            trigger: el,
            start: "top 85%", // Triggers when the top of the element hits 85% of viewport
            toggleActions: "play none none reverse",
          }
        : undefined,
    };

    gsap.to(targets, animationProps);

  }, { scope: elementRef });

  return elementRef;
}
