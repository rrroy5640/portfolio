import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import {
  achievements,
  workExperience,
  contentSections,
} from "../constants/aboutData";

export const AboutMe = () => {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-24 md:grid-cols-2"
    >
      <div className="relative">
        <div className="sticky top-28 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold"
          >
            About Me
          </motion.div>
          <p className="mt-3 text-sm text-white/70">
            I enjoy doing end-to-end work, from requirements clarification to
            architecture design, development and deployment, and finally
            validating value with data.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">
              Abstraction and modeling of real problems
            </li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">
              Data-driven design and optimization
            </li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-3">
              Pursuing clarity, stability, and maintainability
            </li>
          </ul>
          <div className="mt-6 space-y-4">
            <h4 className="text-lg font-semibold text-white mb-3">
              Achievements
            </h4>
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
              >
                <FiCheckCircle className="text-purple-400 text-xl mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h5 className="text-white font-semibold text-sm">
                    {achievement.title}
                  </h5>
                  <p className="text-purple-400 text-xs mt-1">
                    {achievement.organization || achievement.credential}
                  </p>
                  <span className="text-gray-500 text-xs">
                    {achievement.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-10">
        {contentSections.map((section, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-lg font-semibold">{section.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              {section.content}
            </p>
          </motion.article>
        ))}
        {workExperience.map((job, index) => (
          <motion.article
            key={`job-${index}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {job.title}
                </h3>
                <p className="text-purple-400 text-sm">{job.company}</p>
                <p className="text-gray-400 text-xs">{job.location}</p>
              </div>
              <span className="text-xs text-gray-500">{job.period}</span>
            </div>
            <ul className="text-sm text-gray-300 space-y-1 mt-3">
              {job.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">▸</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {job.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
