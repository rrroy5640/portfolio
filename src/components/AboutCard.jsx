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
        <div className="h-48 w-64 md:w-72 lg:w-96 overflow-auto text-base text-gray-300">
          <ul className="list-disc list-inside">
            <li>
              HTML, CSS, Javascript, TypeScript, React, Next.js, Redux,
              TailwindCSS
            </li>
            <li>
              C#, ASP.NET Core, Express, Node.js, MongoDB, SQL, RESTful API
            </li>
            <li>AWS, Docker, Git, Jenkins, ECS, Fargate, CI/CD</li>
          </ul>
        </div>
      );
    }
    if (selectedTab === "education") {
      return (
        <div className="h-48 w-64 md:w-72 lg:w-96 overflow-auto text-base text-gray-300">
          <ul className="list-disc list-inside">
            <li>
              <span className="font-bold">University of Tasmania</span>
              <br />
              <span className="italic">Bachelor in Computer Science</span>
            </li>
          </ul>
        </div>
      );
    }
    if (selectedTab === "certification") {
      return (
        <div className="h-48 w-64 md:w-72 lg:w-96 overflow-auto text-base text-gray-300">
          <ul className="list-disc list-inside">
            <li>AWS Solutions Architect Associate</li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div className=" shadow-lg rounded-lg p-4 mx-auto w-full md:max-w-4xl lg:max-w-4xl bg-slate-800">
      <div className=" justify-start mb-4">
        <button
          onClick={() => handleTabClick("skills")}
          className={`mr-4 pb-2 ${selectedTab === "skills" ? " text-violet-500 border-b-2 border-violet-500 font-medium" : "text-slate-300"}`}
        >
          <h1 className="text-xl font-bold">Skills</h1>
        </button>
        <button
          onClick={() => handleTabClick("education")}
          className={`mr-4 pb-2 ${selectedTab === "education" ? " text-violet-500 border-b-2 border-violet-500 font-medium" : " text-slate-300"}`}
        >
          <h1 className="text-xl font-bold">Education</h1>
        </button>
        <button
          onClick={() => handleTabClick("certification")}
          className={`mr-4 pb-2 ${selectedTab === "certification" ? " text-violet-500 border-b-2 border-violet-500 font-medium" : " text-slate-300"}`}
        >
          <h1 className="text-xl font-bold">Certification</h1>
        </button>
      </div>
      <div>{details()}</div>
    </div>
  );
};
