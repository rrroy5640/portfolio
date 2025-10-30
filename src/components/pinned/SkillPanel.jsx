import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

/**
 * Skill Panel component showcasing a skill with associated project
 */
// eslint-disable-next-line react/prop-types
export function SkillPanel({ skill, project, index }) {
  return (
    <div
      className="panel flex h-full w-screen items-center justify-center p-8 md:p-12"
      style={{
        background: `linear-gradient(135deg, ${
          index % 2 === 0
            ? "rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%"
            : "rgba(236, 72, 153, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%"
        })`,
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Side - Skill Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 text-sm font-semibold rounded-full border border-purple-500/30">
                Skill {index + 1}/4
              </span>
              <span className="text-sm text-white/60">Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {skill.skillTitle}
            </h2>
            <p className="text-xl text-purple-300 font-medium">{skill.skill}</p>
            <p className="text-base text-white/80 leading-relaxed">
              {skill.description}
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-3 pt-4">
            <h3 className="text-lg font-semibold text-white">
              Key Capabilities:
            </h3>
            <ul className="space-y-2">
              {skill.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span className="text-sm text-white/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right Side - Project Showcase */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg">
            {project.image ? (
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.src = "/InProgress.png";
                  }}
                />
                {project.url && project.url !== "#" && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6">
                    <div className="text-center mb-4">
                      <p className="text-white text-sm mb-2">
                        Showcase Project
                      </p>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm">{project.tagline}</p>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 text-purple-700 p-3 rounded-full hover:scale-110 transform transition-all duration-300 shadow-lg"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg aspect-video flex items-center justify-center">
                <span className="text-6xl font-bold text-white/20">
                  {project.title.charAt(0)}
                </span>
              </div>
            )}

            {/* Project Info Overlay */}
            <div className="p-6 bg-gradient-to-b from-transparent to-black/40">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-purple-300 text-sm">{project.tagline}</p>
                </div>
                {project.highlight && (
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded border border-purple-500/30">
                    {project.highlight}
                  </span>
                )}
              </div>
              <p className="text-white/70 text-sm mb-3 line-clamp-2">
                {project.summary || project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags?.slice(0, 4).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
