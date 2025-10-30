import { useForm, ValidationError } from "@formspree/react";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xjvnolok");
  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="text-6xl mb-4">✅</div>
        <p className="text-2xl font-semibold text-green-400 mb-2">
          Message Sent Successfully!
        </p>
        <p className="text-gray-400">
          I&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-2xl font-semibold text-white mb-6">
        Send me a message
      </h3>

      <div>
        <input
          placeholder="Your email address"
          id="email"
          type="email"
          name="email"
          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-2 text-sm text-red-400"
        />
      </div>

      <div>
        <textarea
          placeholder="Your message..."
          id="message"
          name="message"
          rows="6"
          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
          required
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-2 text-sm text-red-400"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 hover:border-white/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group"
      >
        {state.submitting ? (
          <>
            <svg
              className="w-5 h-5 animate-spin"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
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
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </>
        )}
      </button>
    </form>
  );
};
