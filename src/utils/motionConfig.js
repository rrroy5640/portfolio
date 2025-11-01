// Motion configuration with reduced-motion support

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Get transition settings based on user preferences
export const getTransition = (config = {}) => {
  if (prefersReducedMotion()) {
    return {
      duration: 0.01,
      ...config,
    };
  }
  return config;
};

// Standard animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: getTransition({ duration: 0.6 }),
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: getTransition({ duration: 0.4 }),
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: getTransition({ duration: 0.5 }),
};

// Viewport settings for lazy loading
export const viewportConfig = {
  once: true,
  margin: "-100px",
  amount: 0.3,
};

