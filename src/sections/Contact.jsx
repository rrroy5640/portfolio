import { ContactForm } from "../components/ContactForm";
import { DownloadResumeButton } from "../components/DownloadResumeButton";
import { IoMailOutline, IoCallOutline, IoLogoLinkedin } from "react-icons/io5";

export const Contact = () => {
  const emailAddress = "hly5640@gmail.com";
  const phoneNumber = "049-336-9445";
  const linkedIn = "www.linkedin.com/in/linyi-huang";

  return (
    <section className="flex flex-col md:flex-row w-full h-screen bg-cover bg-center bg-no-repeat items-center justify-center bg-gradient-to-b from-black to-slate-800 space-y-8 md:space-y-0 md:space-x-10 py-12">
      <div className="flex md:flex-1 flex-col items-start space-y-4  md:pl-16 lg:pl-48">
        <h1 className="text-3xl w-44 font-bold underline text-slate-500">
          Contact Me
        </h1>
        <span className="flex">
          <IoMailOutline className="text-white h-6 w-6 mr-2" />
          <a
            href={`mailto:${emailAddress}`}
            className="text-white hover:text-cyan-300 underline"
          >
            {emailAddress}
          </a>
        </span>
        <span className="flex">
          <IoCallOutline className="text-white h-6 w-6 mr-2" />

          <a
            href={`tel:${phoneNumber}`}
            className="text-white hover:text-cyan-300 underline"
          >
            {phoneNumber}
          </a>
        </span>
        <span className="flex">
          <IoLogoLinkedin className="text-white h-6 w-6 mr-2" />
          <a
            href={`https://${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-300 underline"
          >
            {linkedIn}
          </a>
        </span>
        <DownloadResumeButton />
      </div>
      <ContactForm />
    </section>
  );
};
