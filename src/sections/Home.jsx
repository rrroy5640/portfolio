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
                  ? "rounded-xl bg-white px-5 py-2 text-sm font-medium text-black shadow hover:shadow-lg transition"
                  : "rounded-xl border border-white/20 px-5 py-2 text-sm font-medium text-white/90 hover:bg-white/5 transition"
              }
            >
              {button.text}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
