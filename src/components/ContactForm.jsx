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
        className="w-full px-6 py-3 bg-purple-700/90 hover:bg-purple-600/90 text-white font-semibold rounded-lg border border-purple-500/50 hover:border-purple-400 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};
