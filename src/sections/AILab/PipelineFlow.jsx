import { motion } from "framer-motion";
import { aiLabContent, animationConfig } from "../../constants/aiLabData";

export const PipelineFlow = () => {
  const { nodes } = aiLabContent.pipeline;
  const { stagger, duration, pulseDelay, pulseDuration } = animationConfig.pipeline;

  return (
    <div className="relative w-full max-w-5xl mx-auto pt-0 pb-4">
      {/* Title */}
      <motion.h3
        id="pipeline-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold text-center mb-3 text-white"
      >
        {aiLabContent.pipeline.title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center text-white/60 mb-12"
      >
        {aiLabContent.pipeline.description}
      </motion.p>

      {/* Pipeline Container */}
      <div className="relative">
        {/* Connection Lines */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/10 -translate-y-1/2 hidden md:block">
          {/* Animated pulse line */}
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            initial={{ width: "20%", x: "-100%" }}
            animate={{ x: "500%" }}
            transition={{
              duration: pulseDuration,
              delay: pulseDelay,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Nodes */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-4 relative">
          {nodes.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration,
                delay: stagger * index,
                ease: "easeOut",
              }}
              className="flex flex-col items-center gap-3 relative z-10"
            >
              {/* Node Circle */}
              <motion.div
                className="relative flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-xl"
                  style={{ backgroundColor: node.color }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{
                    duration: 2,
                    delay: pulseDelay + index * 0.15,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
                
                {/* Main Circle */}
                <div
                  className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border-2 bg-[#131318] flex items-center justify-center"
                  style={{ borderColor: node.color }}
                >
                  {/* Inner dot */}
                  <motion.div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: node.color }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      delay: pulseDelay + index * 0.15,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                </div>
              </motion.div>

              {/* Label */}
              <motion.span
                className="text-sm font-medium text-white/80 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: stagger * index + 0.3 }}
              >
                {node.label}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Mobile Connection Indicator */}
        <div className="md:hidden flex justify-center mt-6">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1 }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-blue-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

