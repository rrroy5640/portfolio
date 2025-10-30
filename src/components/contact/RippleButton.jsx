import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Ripple button component with click animation
 */
export function RippleButton({ children, className, onClick }) {
  const [ripples, setRipples] = useState([]);
  const idRef = useRef(0);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipples((r) => [
      ...r,
      {
        id: ++idRef.current,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    ]);
    setTimeout(() => setRipples((r) => r.slice(1)), 500);
    if (onClick) onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative overflow-hidden rounded-xl bg-white px-6 py-3 font-medium text-black shadow transition hover:shadow-lg ${className || ""}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 -z-0" aria-hidden>
        <AnimatePresence>
          {ripples.map((r) => (
            <motion.span
              key={r.id}
              initial={{ opacity: 0.4, scale: 0 }}
              animate={{ opacity: 0, scale: 4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/20"
              style={{ left: r.x, top: r.y }}
            />
          ))}
        </AnimatePresence>
      </span>
    </button>
  );
}
