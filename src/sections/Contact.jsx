import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ContactForm } from "../components/ContactForm";
import { DownloadResumeButton } from "../components/DownloadResumeButton";
import { RippleButton } from "../components/contact/RippleButton";
import { IoMailOutline, IoCallOutline, IoLogoLinkedin } from "react-icons/io5";

export const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const hue = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const emailAddress = "hly5640@gmail.com";
  const phoneNumber = "0493 369 445";
  const linkedIn = "www.linkedin.com/in/linyi-huang";

  const contactMethods = [
    {
      icon: <IoMailOutline className="h-8 w-8" />,
      label: "Email",
      value: emailAddress,
      link: `mailto:${emailAddress}`,
    },
    {
      icon: <IoCallOutline className="h-8 w-8" />,
      label: "Phone",
      value: phoneNumber,
      link: `tel:${phoneNumber}`,
    },
    {
      icon: <IoLogoLinkedin className="h-8 w-8" />,
      label: "LinkedIn",
      value: linkedIn,
      link: `https://${linkedIn}`,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden px-4 py-24"
    >
      <motion.div
        style={{ filter: useTransform(hue, (h) => `hue-rotate(${h}deg)`) }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.25),transparent_60%)]"
      />
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="mt-3 text-sm text-white/70">
            Feel free to reach out if you&apos;d like to collaborate or discuss
            opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target={method.label === "LinkedIn" ? "_blank" : undefined}
                    rel={
                      method.label === "LinkedIn"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className="text-purple-400 group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm mb-1">
                        {method.label}
                      </p>
                      <p className="text-white font-medium">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <DownloadResumeButton />
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <ContactForm />
          </div>
        </div>

        <div className="mt-12 text-center">
          <RippleButton
            onClick={() => {
              window.location.href = `mailto:${emailAddress}`;
            }}
          >
            Send Email
          </RippleButton>
        </div>
      </div>
    </section>
  );
};
