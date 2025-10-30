import { useRef } from "react";
import { useHorizontalScroll } from "../hooks/useGSAPAnimation";
import { pinnedSections } from "../constants/pinnedSections";
import { HorizontalPanel } from "../components/pinned/HorizontalPanel";

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
          {pinnedSections.map((section, idx) => (
            <HorizontalPanel key={idx} section={section} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
