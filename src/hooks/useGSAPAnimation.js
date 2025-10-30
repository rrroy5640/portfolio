import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import {
  setupHorizontalScroll,
  waitForFonts,
  createSVGStrokeAnimation,
} from "../utils/gsap";

/**
 * Hook for horizontal scroll animation
 */
export function useHorizontalScroll() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    if (!container || !track) return;

    return setupHorizontalScroll(container, track);
  }, []);

  return { containerRef, trackRef };
}

/**
 * Hook for SVG stroke animation
 */
export function useSVGStrokeAnimation(options = {}) {
  const svgRef = useRef(null);
  const { delay = 0.5 } = options;

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const svg = svgRef.current;
    if (!svg) return;

    const ctx = gsap.context(async () => {
      const textEl = svg.querySelector("#nameStroke");
      const maskRect = svg.querySelector("#revealRect");
      if (!textEl || !maskRect) return;

      await waitForFonts();

      const vb = svg.viewBox.baseVal || {
        x: 0,
        y: 0,
        width: 1000,
        height: 360,
      };

      createSVGStrokeAnimation(textEl, maskRect, vb, delay);
    }, svgRef);

    return () => ctx.revert();
  }, [delay]);

  return svgRef;
}
