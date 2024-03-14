import { useState } from "react";
import projects from "../projects";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const ProjectCard = () => {
  const [current, setCurrent] = useState(0);

  const nextProject = () => {
    setCurrent((current + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrent((current - 1 + projects.length) % projects.length);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl relative group">
      <button
        onClick={prevProject}
        aria-label="Previous project"
        className="absolute left-0 z-10 m-2"
      >
        <IoIosArrowBack size="24px" />
      </button>
      <a href={projects[current].url} target="_blank" rel="noopener noreferrer">
        <img
          src={projects[current].image}
          alt={`Project ${current + 1}`}
          className="w-64 md:w-72 md:min-w-72"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-white text-lg p-4">
            {projects[current].description}
          </p>
        </div>
      </a>
      <button
        onClick={nextProject}
        aria-label="Next project"
        className="absolute right-0 z-10 m-2"
      >
        <IoIosArrowForward size="24px" />
      </button>
    </div>
  );
};
