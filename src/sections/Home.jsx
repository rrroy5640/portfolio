export const Home = () => {
  return (
    <>
      <section className="w-full h-screen bg-cover bg-center bg-no-repeat bg-fixed flex flex-col-reverse md:flex-row items-center justify-evenly bg-black">
        <div className="mx-auto">
          <h1 className="text-3xl text-violet-400">Developer | AWS solutions Architect</h1>
          <h1 className="text-6xl font-bold text-violet-400">
            Hi,
            <br /> I'm Linyi
          </h1>
        </div>
        <div className="flex flex-col max-w-lg items-center mx-auto lg:pr-16 relative">
          <img
            src="/avatar1.jpg"
            alt="Linyi"
            className="rounded-full w-64 h-64 border-2 border-violet-400 shadow-lg object-cover"
          />
        </div>
      </section>
    </>
  );
};
