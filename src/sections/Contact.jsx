import { ContactForm } from "../components/ContactForm";
import { DownloadResumeButton } from "../components/DownloadResumeButton";

export const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row w-full h-screen bg-cover bg-center bg-no-repeat bg-fixed items-center justify-center bg-cyan-800 space-y-8 md:space-y-0 md:space-x-10 py-12">
      <div className="flex md:flex-1 flex-col items-center space-y-4  md:pl-16 lg:pl-48">
        <h1 className="text-3xl font-bold underline text-slate-700">
          Contact Me
        </h1>
        <DownloadResumeButton />
      </div>
      <ContactForm />
    </section>
  );
};