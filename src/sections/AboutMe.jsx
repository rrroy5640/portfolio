import { AboutCard } from "../components/AboutCard";

export const AboutMe = () => {
  return (
    <section className=" flex flex-col md:flex-row w-full h-screen bg-cover bg-center bg-no-repeat bg-fixed items-center justify-evenly bg-slate-700 space-y-8 md:space-y-0 md:space-x-10 py-12">
      <div>
        <h1 className=" w-64 md:w-96 px-8 py-4 text-3xl font-bold underline text-slate-300">
          About Me
        </h1>
        <p className=" w-64 md:w-72 lg:w-96 px-2 text-base font-bold text-slate-300">
          As a developer, I thrive on transforming concepts into compelling
          digital experiences, leveraging expertise in HTML, CSS, JavaScript,
          React, Node.js, and embracing new technologies with enthusiasm. My
          commitment to continuous learning fuels my ability to innovate and
          adapt in a fast-evolving industry. I excel in collaborating with teams
          to deliver custom, high-quality solutions that exceed client
          expectations. My strong communication skills ensure effective dialogue
          within teams and with clients, facilitating a productive and positive
          work environment
        </p>
      </div>
      <div className=" mx-auto justify-center items-center">
        <AboutCard></AboutCard>
      </div>
    </section>
  );
};
