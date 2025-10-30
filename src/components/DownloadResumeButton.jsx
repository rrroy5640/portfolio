export const DownloadResumeButton = () => {
  return (
    <a
      href="/Resume - Linyi (Roy) Huang - Full-Stack Developer.pdf"
      download="Linyi (Roy) Huang - Full-Stack Developer.pdf"
      className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 group"
    >
      <svg
        className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      Download Resume
      <svg
        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </a>
  );
};
