export const DownloadResumeButton = () => {
    return (
      <a
        href="/Resume.pdf" 
        download="Resume Linyi Huang.pdf"
        className=" bg-indigo-600 hover:bg-indigo-500 w-44 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
      >
        Download Resume
      </a>
    );
  };