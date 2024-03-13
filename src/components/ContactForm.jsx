import { useForm, ValidationError } from "@formspree/react";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xjvnolok");
  if (state.succeeded) {
    return (
      <p className="text-lg text-green-500 px-16 md:px-32">
        Thank you for your message!
      </p>
    );
  }

  return (
    <div className="py-8 w-full mx-auto">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 w-full md:max-w-lg lg:max-w-lg mx-auto px-8"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-2 text-sm text-red-600"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="mt-2 text-sm text-red-600"
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="inline-flex justify-center py-2 px-4 w-full md:w-auto border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};
