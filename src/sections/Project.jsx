import { ProjectCard } from "../components/ProjectCard";

export const Project = () => {
  return (
    <>
      <section className="w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col-reverse md:flex-row items-center justify-evenly bg-gradient-to-b from-slate-900 to-black">
        <div className="mx-auto">
          <ProjectCard />
        </div>
        <div className=" mx-auto">
          <h1 className=" text-6xl mb-2 text-violet-400 font-bold">Projects</h1>
          <h1 className="text-3xl md:mb-2 font-bold text-violet-400">
            Check out my work
          </h1>
          <p className=" text-xl text-violet-400 w-96 hidden md:block">
            Here are some of my projects that I have worked on. I have
            experience in HTML, CSS, JavaScript, React, Node.js, and other
            cutting-edge technologies.
          </p>
        </div>
      </section>
    </>
  );
};
