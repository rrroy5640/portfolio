import { useHorizontalScroll } from "../hooks/useGSAPAnimation";
import { pinnedSections, getProjectById } from "../constants/pinnedSections";
import { SkillPanel } from "../components/pinned/SkillPanel";

export const PinnedHorizontal = () => {
  const { containerRef, trackRef } = useHorizontalScroll();

  return (
    <section id="projects" ref={containerRef} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          ref={trackRef}
          className="flex h-full"
          style={{ width: `${pinnedSections.length * 100}vw` }}
        >
          {pinnedSections.map((skill, idx) => {
            const project = getProjectById(skill.projectId);
            if (!project) {
              console.warn(
                `Project not found for skill: ${skill.skillTitle}, projectId: ${skill.projectId}`
              );
              return null;
            }
            return (
              <SkillPanel
                key={skill.projectId || idx}
                skill={skill}
                project={project}
                index={idx}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
