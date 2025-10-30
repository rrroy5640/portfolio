import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Setup horizontal scroll animation with GSAP ScrollTrigger
 * @param {HTMLElement} container - Container element
 * @param {HTMLElement} track - Track element to animate
 * @returns {Function} Cleanup function
 */
export function setupHorizontalScroll(container, track) {
  if (!container || !track) return () => {};

  const setup = () => {
    const totalScroll = Math.max(0, track.scrollWidth - window.innerWidth);
    const anim = gsap.to(track, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=" + totalScroll,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
    return anim;
  };

  const ctx = gsap.context(() => {
    const anim = setup();
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      anim?.scrollTrigger?.kill();
      anim?.kill();
    };
  }, container);

  return () => ctx.revert();
}

/**
 * Wait for fonts to load
 * @returns {Promise<void>}
 */
export async function waitForFonts() {
  if (typeof window === "undefined") return;

  const f = document.fonts;
  if (f && typeof f.ready?.then === "function") {
    try {
      await f.ready;
    } catch (error) {
      console.warn("Font loading error:", error);
    }
  }
}

/**
 * Create SVG stroke animation timeline
 * @param {SVGTextElement} textElement - Text element to animate
 * @param {SVGRectElement} maskRect - Mask rectangle element
 * @param {Object} viewBox - ViewBox dimensions
 * @param {number} delay - Animation delay
 * @returns {gsap.core.Timeline}
 */
export function createSVGStrokeAnimation(
  textElement,
  maskRect,
  viewBox,
  delay = 0.5
) {
  // Initialize
  gsap.set(maskRect, {
    attr: { x: viewBox.x, y: viewBox.y, width: 1, height: viewBox.height },
  });

  const textLen =
    Math.max(1, Math.ceil(textElement.getComputedTextLength())) * 3;
  gsap.set(textElement, {
    attr: {
      "stroke-dasharray": textLen,
      "stroke-dashoffset": textLen,
    },
  });

  const tl = gsap.timeline({ delay });

  // Mask reveal
  tl.to(maskRect, {
    attr: { width: viewBox.width },
    duration: 2.5,
    ease: "power2.out",
  });

  // Stroke animation
  tl.to(
    textElement,
    { attr: { "stroke-dashoffset": 0 }, duration: 2.5, ease: "none" },
    "<"
  );

  // Glow pulse
  tl.to(
    "#glow",
    { attr: { stdDeviation: 5 }, duration: 1.2, yoyo: true, repeat: 1 },
    "<"
  );

  return tl;
}
