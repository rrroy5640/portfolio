import { AboutCard } from "../components/AboutCard";

export const AboutMe = () => {
  return (
    <section className="w-full h-screen bg-cover bg-center bg-no-repeat bg-fixed bg-slate-700 flex items-center justify-between">
      <div></div>
      <div className=" pl-16">
        <h1 className=" px-8 py-4 text-3xl font-bold underline text-slate-300">
          About Me
        </h1>
        <p className=" px-2 text-base font-bold w-96 text-slate-300">
          A skilled developer who brings websites and applications to life,
          turning concepts into digital wonders. Experienced in HTML, CSS,
          JavaScript, React, Node.js, and other cutting-edge technologies.
          Focused on delivering customized solutions that wow clients,
          particularly attentive to financial considerations.
        </p>
        <AboutCard></AboutCard>
      </div>
    </section>
  );
};
