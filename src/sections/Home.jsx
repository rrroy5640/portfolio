import { motion } from "framer-motion";
import { ParallaxBackground } from "../components/home/ParallaxBackground";
import { SVGNameAnimation } from "../components/home/SVGNameAnimation";
import { homeContent, animationDelays } from "../constants/homeContent";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-4 pt-28 pb-20"
    >
      <ParallaxBackground />
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
