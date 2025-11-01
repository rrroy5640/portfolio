import { useCallback, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ParallaxBackground } from "../components/home/ParallaxBackground";
import { SVGNameAnimation } from "../components/home/SVGNameAnimation";
import { homeContent, animationDelays } from "../constants/homeContent";

export const Home = () => {
  const sectionRef = useRef(null);
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);

  const smoothX = useSpring(pointerX, {
    stiffness: 150,
    damping: 35,
    mass: 0.2,
  });
  const smoothY = useSpring(pointerY, {
    stiffness: 150,
    damping: 35,
    mass: 0.2,
  });

  const gradientX = useTransform(smoothX, (v) => `${v * 100}%`);
  const gradientY = useTransform(smoothY, (v) => `${v * 100}%`);

  const spotlight = useMotionTemplate`radial-gradient(120% 120% at ${gradientX} ${gradientY}, rgba(139, 92, 246, 0.2), rgba(12, 12, 20, 0) 65%)`;
  const trail = useMotionTemplate`radial-gradient(95% 95% at ${gradientX} ${gradientY}, rgba(56, 189, 248, 0.16), rgba(12, 12, 20, 0) 70%)`;
  const halo = useMotionTemplate`radial-gradient(65% 65% at ${gradientX} ${gradientY}, rgba(255, 255, 255, 0.12), rgba(12, 12, 20, 0) 70%)`;

  const glowX = useTransform(smoothX, [0, 1], [-220, 220]);
  const glowY = useTransform(smoothY, [0, 1], [-160, 160]);
  const secondaryGlowX = useTransform(smoothX, [0, 1], [160, -160]);
  const secondaryGlowY = useTransform(smoothY, [0, 1], [-200, 200]);
  const primaryTransform = useMotionTemplate`translate(-50%, -50%) translate(${glowX}px, ${glowY}px)`;
  const secondaryTransform = useMotionTemplate`translate(-50%, -50%) translate(${secondaryGlowX}px, ${secondaryGlowY}px)`;

  const updatePointer = useCallback(
    (clientX, clientY) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;

      pointerX.set(Math.min(Math.max(x, 0), 1));
      pointerY.set(Math.min(Math.max(y, 0), 1));
    },
    [pointerX, pointerY]
  );

  const handlePointerMove = useCallback(
    (event) => updatePointer(event.clientX, event.clientY),
    [updatePointer]
  );

  const handleMouseMove = useCallback(
    (event) => updatePointer(event.clientX, event.clientY),
    [updatePointer]
  );

  const handleTouchMove = useCallback(
    (event) => {
      const touch = event.touches?.[0];
      if (!touch) return;
      updatePointer(touch.clientX, touch.clientY);
    },
    [updatePointer]
  );

  const handlePointerLeave = useCallback(() => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  }, [pointerX, pointerY]);

  return (
    <section
      id="home"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onPointerLeave={handlePointerLeave}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-28 pb-20"
    >
      <ParallaxBackground />
      <motion.div
        aria-hidden
        style={{ backgroundImage: trail, opacity: 0.45 }}
        className="pointer-events-none absolute inset-0 z-0"
      />
      <motion.div
        aria-hidden
        style={{ backgroundImage: halo, opacity: 0.3 }}
        className="pointer-events-none absolute inset-0 z-0 mix-blend-screen"
      />
      <motion.div
        aria-hidden
        style={{
          transform: primaryTransform,
          left: "50%",
          top: "45%",
        }}
        className="pointer-events-none absolute z-0 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(147,51,234,0.25),_rgba(12,12,20,0))] blur-[140px]"
      />
      <motion.div
        aria-hidden
        style={{
          transform: secondaryTransform,
          left: "48%",
          top: "68%",
        }}
        className="pointer-events-none absolute z-0 h-[540px] w-[540px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.22),_rgba(12,12,20,0))] blur-[130px]"
      />
      <motion.div
        aria-hidden
        style={{ backgroundImage: spotlight, opacity: 0.45 }}
        className="pointer-events-none absolute inset-0 z-0 mix-blend-screen"
      />
      <div className="mx-auto max-w-4xl text-center z-10">
        <SVGNameAnimation />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: animationDelays.title, duration: 0.6 }}
          className="text-4xl font-bold leading-tight md:text-5xl mt-8"
        >
          {homeContent.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: animationDelays.description, duration: 0.6 }}
          className="mt-4 text-balance text-base text-white/70 md:text-lg"
        >
          {homeContent.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: animationDelays.buttons, duration: 0.6 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          {homeContent.buttons.map((button, idx) => (
            <a
              key={idx}
              href={button.href}
              className={
                idx === 0
                  ? "inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                  : "inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all duration-300 group"
              }
            >
              {button.text}
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
