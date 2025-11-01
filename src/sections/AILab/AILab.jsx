import { motion } from "framer-motion";
import { PipelineFlow } from "./PipelineFlow";
import { CodeSnippet } from "./CodeSnippet";
import { LogTerminal } from "./LogTerminal";
import { PromptCard } from "./PromptCard";
import { CloudArchitecture } from "./CloudArchitecture";
import { aiLabContent } from "../../constants/aiLabData";

export const AILab = () => {
  return (
    <section
      id="ai-lab"
      aria-label="AI Engineering and Cloud Architecture"
      className="relative min-h-screen py-20 px-4 bg-[#0b0b10] overflow-hidden"
    >
      {/* Background subtle gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#131318]/50 via-transparent to-[#131318]/50 pointer-events-none"
      />

      {/* Ambient glow effects */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6"
            role="status"
            aria-label="Active section indicator"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm text-white/70 font-medium tracking-wide">
              AI Engineering Lab
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {aiLabContent.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light tracking-wide"
          >
            {aiLabContent.subtitle}
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent max-w-md mx-auto mt-8"
            aria-hidden="true"
          />
        </header>

        {/* Pipeline Flow */}
        <article className="mb-8 md:mb-12" aria-labelledby="pipeline-title">
          <PipelineFlow />
        </article>

        {/* Structured Prompting Cards */}
        <article className="mb-8 md:mb-12" aria-labelledby="prompting-title">
          <PromptCard />
        </article>

        {/* Step 1: Schema Definition */}
        <article
          className="mb-6 md:mb-8"
          aria-label="Schema Definition Code Example"
        >
          <CodeSnippet snippet={aiLabContent.codeSnippets[0]} delay={0.2} />
        </article>

        {/* Step 2: LLM Execution with Validation */}
        <article
          className="mb-8 md:mb-12"
          aria-label="LLM Execution Code Example"
        >
          <CodeSnippet snippet={aiLabContent.codeSnippets[1]} delay={0.2} />
        </article>

        {/* Execution Log Terminal */}
        <article className="mb-8 md:mb-12" aria-label="Execution Log Terminal">
          <LogTerminal />
        </article>

        {/* Cloud Architecture */}
        <article className="mb-8 md:mb-12" aria-labelledby="architecture-title">
          <CloudArchitecture />
        </article>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-6 md:mt-8"
        >
          <p className="text-white/40 text-sm md:text-base font-light tracking-wider">
            Built for clarity, reliability, and scale.
          </p>
          <p className="text-white/30 text-xs md:text-sm font-light tracking-wider mt-2">
            Minimal surface. Maximum engineering clarity.
          </p>
        </motion.div>

        {/* Decorative bottom elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center gap-2 mt-12"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-white/20"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
