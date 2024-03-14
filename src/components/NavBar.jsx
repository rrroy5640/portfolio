import { useState } from "react";
import { Link } from "react-scroll";

export const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="fixed w-full flex justify-between items-center px-8 py-4 bg-gradient-to-b from-slate-800 ">
      <img src="logo.png" className="w-16 h-16"></img>
      <button
        className="text-xl text-white md:hidden"
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
      <ul
        className={`flex flex-col md:flex-row md:items-center absolute md:static bg-purple bg-opacity-20 w-full md:w-auto transition-all duration-300 ease-in ${isNavExpanded ? "top-16" : "top-[-490px]"}`}
      >
        <li className="ml-12 mb-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setIsNavExpanded(false)}
          >
            <button className=" text-indigo-400 h-4 text-2xl">Home</button>
          </Link>
        </li>
        <li className="ml-12 mb-4">
          <Link
            to="aboutme"
            smooth={true}
            duration={500}
            onClick={() => setIsNavExpanded(false)}
          >
            <button className=" text-indigo-400 h-4 text-2xl">About Me</button>
          </Link>
        </li>
        <li className="ml-12 mb-4">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setIsNavExpanded(false)}
          >
            <button className=" text-indigo-400 h-4 text-2xl">Contact</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
