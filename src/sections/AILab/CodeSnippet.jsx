import { motion } from "framer-motion";

export const CodeSnippet = ({ snippet, delay = 0 }) => {
  const { title, subtitle, code, language } = snippet;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className="w-full max-w-3xl mx-auto"
    >
      {/* Title & Subtitle */}
      {title && (
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            {title}
          </h4>
          {subtitle && (
            <p className="text-sm text-white/50 ml-4 italic">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Code Block */}
      <div className="relative group">
        {/* Language Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/5 border border-white/10 rounded-md z-10">
          <span className="text-xs font-mono text-white/60 uppercase tracking-wider">
            {language}
          </span>
        </div>

        {/* Code Container */}
        <motion.div
          className="relative bg-[#0d0d12] border border-white/10 rounded-xl p-6 overflow-x-auto"
          whileHover={{ borderColor: "rgba(59, 130, 246, 0.3)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Background Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Code */}
          <pre className="relative text-sm md:text-base leading-relaxed">
            <code className="font-mono text-white/80 whitespace-pre">
              {code}
            </code>
          </pre>

          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              background:
                "radial-gradient(circle at center, rgba(59, 130, 246, 0.05), transparent 70%)",
            }}
          />
        </motion.div>

        {/* Bottom accent line */}
        <motion.div
          className="h-[2px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mt-1 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
        />
      </div>

      {/* Meta info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.5 }}
        className="mt-3 flex items-center gap-4 text-xs text-white/40 font-mono"
      >
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          Type-safe
        </span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          Validated
        </span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          Production-ready
        </span>
      </motion.div>
    </motion.div>
  );
};

