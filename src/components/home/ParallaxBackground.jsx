import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute -left-20 -top-40 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/40 to-fuchsia-500/40 blur-3xl"
      />
      <motion.div
        style={{ y: y2, rotate }}
        className="absolute -right-20 top-20 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-sky-500/40 to-emerald-500/40 blur-3xl"
      />
    </div>
  );
}
