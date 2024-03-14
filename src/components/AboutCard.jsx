/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

export const AboutCard = () => {
  const [selectedTab, setSelectedTab] = useState("skills");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const details = () => {
    if (selectedTab === "skills") {
      return (
        <div className="h-48 w-96 overflow-auto text-xl text-gray-300">
          <ul className="list-disc list-inside">
            <li>HTML, CSS, Javascript, Kotlin, C#</li>
            <li>React, Node.js, Express, MongoDB, SQL</li>
            <li>Git, GitHub, Heroku</li>
          </ul>
        </div>
      );
    }
    if (selectedTab === "education") {
      return (
        <div className="h-48 w-96 overflow-auto text-xl text-gray-300">
          <p>
            <span>Bachelor in Computer Science</span>
            <br />
            <span >University of Tasmania</span>
          </p>
        </div>
      );
    }
  };

  return (
    <div className=" shadow-lg rounded-lg p-4 mx-auto w-full md:max-w-2xl lg:max-w-2xl">
      <div className=" justify-start mb-4">
        <button
          onClick={() => handleTabClick("skills")}
          className={`mr-4 pb-2 ${selectedTab === "skills" ? " text-pink-800 border-b-2 border-red-500 font-medium" : "text-slate-300"}`}
        >
          <h1 className="text-2xl font-bold">Skills</h1>
        </button>
        <button
          onClick={() => handleTabClick("education")}
          className={`mr-4 pb-2 ${selectedTab === "education" ? " text-pink-800 border-b-2 border-red-500 font-medium" : " text-slate-300"}`}
        >
          <h1 className="text-2xl font-bold">Education</h1>
        </button>
      </div>
      <div>{details()}</div>
    </div>
  );
};
