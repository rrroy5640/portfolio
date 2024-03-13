export const DownloadResumeButton = () => {
    return (
      <a
        href="/Resume.pdf" 
        download="Resume Linyi Huang.pdf"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
      >
        Download Resume
      </a>
    );
  };