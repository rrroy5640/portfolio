import { motion } from "framer-motion";
import { aiLabContent, animationConfig } from "../../constants/aiLabData";

export const PromptCard = () => {
  const { promptExample } = aiLabContent;
  const { stagger, duration } = animationConfig.prompt;

  const prompts = [
    {
      role: "System",
      content: promptExample.system,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      icon: "⚙️",
      label: "System Prompt",
    },
    {
      role: "Developer",
      content: promptExample.developer,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      icon: "🔧",
      label: "Error Recovery",
    },
    {
      role: "Assistant",
      content: promptExample.assistant,
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      icon: "✓",
      label: "Confirmation",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-4">
      {/* Section Title */}
      <motion.h3
        id="prompting-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold text-center mb-3 text-white"
      >
        Structured Prompting
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center text-white/60 mb-12"
      >
        Schema-driven instructions with built-in error handling
      </motion.p>

      {/* Prompt Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {prompts.map((prompt, index) => (
          <motion.div
            key={prompt.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration, delay: stagger * index }}
            whileHover={{ y: -5 }}
            className="relative group"
          >
            {/* Card */}
            <div
              className={`relative bg-[#131318] border ${prompt.borderColor} rounded-xl p-5 h-full transition-all duration-300`}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${prompt.color} rounded-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{prompt.icon}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-white/90">
                      {prompt.label}
                    </h4>
                    <p className="text-xs text-white/50 font-mono">
                      {prompt.role.toLowerCase()}
                    </p>
                  </div>
                </div>

                {/* Prompt Content */}
                <p className="text-sm text-white/70 leading-relaxed">
                  "{prompt.content}"
                </p>

                {/* Bottom Accent */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${prompt.color} rounded-b-xl`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: stagger * index + 0.3 }}
                />
              </div>
            </div>

            {/* Glow Effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${prompt.color} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}
            />
          </motion.div>
        ))}
      </div>

      {/* Connection Arrows (Desktop only) */}
      <div className="hidden md:flex justify-center items-center gap-4 mt-8">
        {[0, 1].map((i) => (
          <motion.svg
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.4, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 + i * 0.2 }}
            className="w-8 h-8 text-white/30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </motion.svg>
        ))}
      </div>

      {/* Bottom Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-8 text-center"
      >
        <p className="text-sm text-white/40 max-w-2xl mx-auto">
          Each layer builds on the previous: system constraints define the
          structure, recovery logic handles edge cases, and confirmation
          establishes accountability.
        </p>
      </motion.div>
    </div>
  );
};

