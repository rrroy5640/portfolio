import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { aiLabContent, animationConfig } from "../../constants/aiLabData";
import { getNodeIcon } from "./NodeIcon";

export const CloudArchitecture = () => {
  const { cloudArchitecture } = aiLabContent;
  const { stagger, duration, flowDelay, flowDuration } = animationConfig.cloud;
  const [hoveredNode, setHoveredNode] = useState(null);
  const containerRef = useRef(null);
  const [nodePositions, setNodePositions] = useState({});

  // Calculate actual node positions after render
  useEffect(() => {
    if (!containerRef.current) return;

    const positions = {};
    cloudArchitecture.nodes.forEach((node) => {
      const element = document.getElementById(`node-${node.id}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        positions[node.id] = {
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
        };
      }
    });
    setNodePositions(positions);
  }, [cloudArchitecture.nodes]);

  // Get connection path using actual DOM positions
  const getConnectionPath = (from, to) => {
    const start = nodePositions[from];
    const end = nodePositions[to];

    if (!start || !end) {
      return "";
    }

    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // For very short distances, use straight line
    if (distance < 50) {
      return `M ${start.x} ${start.y} L ${end.x} ${end.y}`;
    }

    // For horizontal connections (same row), use gentle curve
    if (Math.abs(dy) < 20) {
      const controlOffset = Math.min(Math.abs(dx) / 3, 80);
      return `M ${start.x} ${start.y} C ${start.x + controlOffset} ${start.y}, ${end.x - controlOffset} ${end.y}, ${end.x} ${end.y}`;
    }

    // For vertical or diagonal connections, use S-curve
    const controlOffsetX = Math.abs(dx) * 0.4;
    const controlOffsetY = Math.abs(dy) * 0.3;
    
    if (dx > 0) {
      // Moving right
      return `M ${start.x} ${start.y} C ${start.x + controlOffsetX} ${start.y + controlOffsetY}, ${end.x - controlOffsetX} ${end.y - controlOffsetY}, ${end.x} ${end.y}`;
    } else {
      // Moving left
      return `M ${start.x} ${start.y} C ${start.x + controlOffsetX} ${start.y + controlOffsetY}, ${end.x - controlOffsetX} ${end.y - controlOffsetY}, ${end.x} ${end.y}`;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-4">
      {/* Title */}
      <motion.h3
        id="architecture-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold text-center mb-3 text-white"
      >
        {cloudArchitecture.title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center text-white/60 mb-16"
      >
        {cloudArchitecture.description}
      </motion.p>

      {/* Architecture Diagram - Desktop */}
      <div className="hidden lg:block relative" ref={containerRef}>
        {/* SVG for connections - positioned absolutely to cover the entire container */}
        {Object.keys(nodePositions).length > 0 && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
          >
            <defs>
              {/* Flow gradient for animated data packets */}
              <linearGradient
                id="flowGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                <stop offset="20%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="40%" stopColor="rgba(59, 130, 246, 0.8)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 1)" />
                <stop offset="60%" stopColor="rgba(59, 130, 246, 0.8)" />
                <stop offset="80%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
              </linearGradient>

              {/* Glow filter for enhanced visibility */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {cloudArchitecture.connections.map((conn, index) => {
              const path = getConnectionPath(conn.from, conn.to);
              if (!path) return null;

              return (
                <g key={`${conn.from}-${conn.to}-${index}`}>
                  {/* Base connection line with glow */}
                  <motion.path
                    d={path}
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.08 }}
                  />

                  {/* Main connection line */}
                  <motion.path
                    d={path}
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.08 }}
                  />

                  {/* Animated flow - continuous loop */}
                  <motion.path
                    d={path}
                    stroke="url(#flowGradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="40 60"
                    filter="url(#glow)"
                    animate={{
                      strokeDashoffset: [100, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      delay: flowDelay + index * 0.2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </g>
              );
            })}
          </svg>
        )}

        {/* Nodes Grid */}
        <div
          className="relative grid gap-8"
          style={{
            gridTemplateColumns: "repeat(6, 140px)",
            gridTemplateRows: "repeat(2, auto)",
            paddingTop: "40px",
            paddingBottom: "40px",
            justifyContent: "center",
          }}
        >
          {cloudArchitecture.nodes.map((node, index) => (
            <motion.div
              key={node.id}
              id={`node-${node.id}`}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration,
                delay: stagger * index,
                ease: "easeOut",
              }}
              style={{
                gridColumn: node.position.x + 1,
                gridRow: node.position.y + 1,
              }}
              className="flex items-center justify-center"
            >
              <motion.div
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                whileHover={{ scale: 1.08, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl blur-xl"
                  style={{ backgroundColor: node.color }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredNode === node.id ? 0.4 : 0.2,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Node Card */}
                <div
                  className="relative bg-[#131318] border-2 rounded-2xl p-5 min-w-[130px] transition-all duration-300"
                  style={{
                    borderColor:
                      hoveredNode === node.id
                        ? node.color
                        : "rgba(255,255,255,0.1)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="flex justify-center mb-3"
                    style={{ color: node.color }}
                  >
                    {getNodeIcon(node.icon)}
                  </div>

                  {/* Label */}
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {node.label}
                    </h4>
                    <p className="text-xs text-white/50">
                      {node.description}
                    </p>
                  </div>

                  {/* Pulse indicator */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                    style={{ backgroundColor: node.color }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      delay: flowDelay + index * 0.15,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: Vertical Flow */}
      <div className="lg:hidden space-y-6">
        {cloudArchitecture.nodes.map((node, index) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            <div
              className="bg-[#131318] border-2 rounded-xl p-4 flex items-center gap-4"
              style={{ borderColor: `${node.color}40` }}
            >
              <div
                className="flex-shrink-0"
                style={{ color: node.color }}
              >
                {getNodeIcon(node.icon)}
              </div>
              <div className="flex-1">
                <h4 className="text-base font-semibold text-white">
                  {node.label}
                </h4>
                <p className="text-sm text-white/50">{node.description}</p>
              </div>
            </div>

            {/* Arrow for mobile */}
            {index < cloudArchitecture.nodes.length - 1 && (
              <motion.div
                className="flex justify-center my-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <svg
                  className="w-6 h-6 text-white/30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

    </div>
  );
};
