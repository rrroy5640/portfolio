export const Home = () => {
  return (
    <>
      <section className="w-full h-screen bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-evenly bg-black">
        <div className="mx-auto">
          <h1 className="text-3xl text-violet-400">
            Developer
          </h1>
          <h1 className="text-6xl font-bold text-violet-400">
            Hi,
            <br /> I'm Linyi
          </h1>
        </div>
        <div className="justify-center items-center mx-auto">
          <img
            src="/avatar.webp"
            alt="Linyi"
            className=" rounded-full w-32 h-32 md:w-64 md:h-64 border-2 border-white"
          />
        </div>
      </section>
    </>
  );
};
