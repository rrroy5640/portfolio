import { useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 120], [72, 56]);
  const blur = useTransform(scrollY, [0, 120], ["blur(0px)", "blur(8px)"]);
  const bgOpacity = useTransform(scrollY, [0, 120], [0.2, 0.5]);
  const y = useSpring(useTransform(scrollY, [0, 120], [0, -4]), {
    stiffness: 200,
    damping: 30,
  });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsNavExpanded(false);
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.header
      style={{
        height,
        y,
        backdropFilter: blur,
        backgroundColor: "rgba(255,255,255,0.02)",
      }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 supports-[backdrop-filter]:bg-white/5"
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
        <button
          onClick={() => scrollToSection("home")}
          className="font-semibold tracking-tight text-white hover:opacity-80 transition"
        >
          Linyi-Dev
        </button>
        <nav className="hidden gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="opacity-80 hover:opacity-100 transition text-white"
            >
              {link.label}
            </button>
          ))}
        </nav>
        <button
          className="text-xl z-50 text-white md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isNavExpanded ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      <motion.div
        style={{ opacity: bgOpacity }}
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/40 to-transparent"
      />
      {/* Mobile Navigation */}
      {isNavExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="md:hidden fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-lg flex flex-col items-center justify-center gap-6"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-2xl font-semibold text-white hover:text-purple-400 transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};
