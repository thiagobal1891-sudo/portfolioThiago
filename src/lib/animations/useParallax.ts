import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function useParallax(speed: number = 1) {
  const elementRef = useRef<any>(null);

  useGSAP(() => {
    if (!elementRef.current) return;

    const el = elementRef.current;
    
    // Parallax effect using ScrollTrigger scrub
    gsap.to(el, {
      y: () => -100 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

  }, { scope: elementRef });

  return elementRef;
}
