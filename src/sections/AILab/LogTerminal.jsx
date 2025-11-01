import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { aiLabContent, animationConfig } from "../../constants/aiLabData";

export const LogTerminal = () => {
  const { logExamples } = aiLabContent;
  const [visibleLogs, setVisibleLogs] = useState([]);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      logExamples.forEach((log, index) => {
        setTimeout(() => {
          setVisibleLogs((prev) => [...prev, log]);
        }, index * animationConfig.terminal.lineDelay);
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, [isInView, logExamples]);

  const getLevelColor = (level) => {
    switch (level) {
      case "success":
        return "text-green-400";
      case "info":
        return "text-blue-400";
      case "warning":
        return "text-yellow-400";
      case "error":
        return "text-red-400";
      default:
        return "text-white/60";
    }
  };

  const getLevelIcon = (level) => {
    switch (level) {
      case "success":
        return "✓";
      case "info":
        return "→";
      case "warning":
        return "⚠";
      case "error":
        return "✗";
      default:
        return "·";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      onViewportEnter={() => setIsInView(true)}
      className="w-full max-w-3xl mx-auto"
    >
      {/* Terminal Header */}
      <div className="mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-400" />
        <span className="w-2 h-2 rounded-full bg-yellow-400" />
        <span className="w-2 h-2 rounded-full bg-green-400" />
        <span className="ml-3 text-sm font-mono text-white/50">
          execution_log.sh
        </span>
      </div>

      {/* Terminal Window */}
      <motion.div
        className="relative bg-[#0d0d12] border border-white/10 rounded-xl p-6 overflow-hidden"
        whileHover={{ borderColor: "rgba(59, 130, 246, 0.3)" }}
        transition={{ duration: 0.3 }}
      >
        {/* Terminal Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.03) 2px,
              rgba(255,255,255,0.03) 4px
            )`,
          }}
        />

        {/* Log Lines */}
        <div className="relative space-y-2 font-mono text-sm">
          {visibleLogs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-3"
            >
              {/* Icon */}
              <span className={`${getLevelColor(log.level)} flex-shrink-0`}>
                {getLevelIcon(log.level)}
              </span>

              {/* Service Tag */}
              <span className="text-cyan-400 flex-shrink-0 min-w-[80px]">
                [{log.service}]
              </span>

              {/* Message */}
              <span className="text-white/70 flex-1">{log.message}</span>

              {/* Time */}
              <span className="text-white/30 text-xs flex-shrink-0">
                {log.time}ms
              </span>
            </motion.div>
          ))}

          {/* Blinking Cursor */}
          {visibleLogs.length === logExamples.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="flex items-center gap-3 text-white/40"
            >
              <span>→</span>
              <span className="w-2 h-4 bg-white/40" />
            </motion.div>
          )}
        </div>

        {/* Bottom Glow */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(59, 130, 246, 0.05), transparent)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: visibleLogs.length > 0 ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Terminal Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: visibleLogs.length === logExamples.length ? 1 : 0 }}
        transition={{ delay: 0.5 }}
        className="mt-3 flex items-center gap-6 text-xs text-white/40 font-mono"
      >
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          {logExamples.filter((log) => log.level === "success").length} passed
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          {logExamples.length} total
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          {logExamples[logExamples.length - 1]?.time}ms duration
        </span>
      </motion.div>
    </motion.div>
  );
};

