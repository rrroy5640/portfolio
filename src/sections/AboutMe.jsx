import { AboutCard } from "../components/AboutCard";

export const AboutMe = () => {
  return (
    <section className=" flex flex-col md:flex-row w-full h-screen bg-cover bg-center bg-no-repeat items-center justify-evenly bg-slate-900 space-y-8 md:space-y-0 md:space-x-10 py-12">
      <div>
        <h1 className=" w-64 md:w-96 px-8 py-4 text-3xl font-bold underline text-slate-300">
          About Me
        </h1>
        <p className=" w-64 md:w-72 lg:w-96 px-2 text-base font-bold text-slate-300">
          <ul className=" list-disc list-inside">
            <li>Recent IT graduate from University of Tasmania (UTAS).</li>
            <li>
              Hands-on experience in web and mobile application development.
            </li>
            <li>Certified AWS solutions architect associate.</li>
            <li>
              Proficient in modern development framework e.g. React, .NET,
              Express etc.
            </li>
            <li>
              Actively seeking job and internship opportunities in software and
              web development.
            </li>
            <li>Eager to expand skills and embrace new technologies.</li>
          </ul>
        </p>
      </div>
      <div className=" mx-auto justify-center items-center">
        <AboutCard></AboutCard>
      </div>
    </section>
  );
};
