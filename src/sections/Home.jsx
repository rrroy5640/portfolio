export const Home = () => {
  return (
    <section className="w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col-reverse md:flex-row items-center justify-evenly bg-gradient-to-b from-black to-slate-900">
      <div className="mx-auto text-center md:text-left">
        <h2 className="text-3xl text-violet-400 mb-2">Developer | AWS Solutions Architect</h2>
        <h1 className="text-6xl font-bold text-violet-400 leading-tight">
          Hi,<br /> I&apos;m Linyi
        </h1>
        <p className="mt-4 text-xl text-violet-400">
          Hobart, Tasmania
        </p>
      </div>
      <div className="flex flex-col max-w-lg items-center mx-auto lg:pr-16 relative">
        <img
          src="/avatar1.jpg"
          alt="Linyi"
          className="rounded-full w-64 h-64 border-4 border-violet-400 shadow-xl object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
    </section>
  );
};
