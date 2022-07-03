export const Contact = () => {
  return (
    <div className="mt-12">
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-3 bg-base-100">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div className="dark:text-gray-400">
              Vivamus in nisl metus? Phasellus.
            </div>
          </div>
          <img src="./talk.svg" alt="" className="h-52 md:h-64" />
        </div>
        <form
          novalidate=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div>
            <label for="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="input input-bordered input-info w-full p-3 rounded"
            />
          </div>
          <div>
            <label for="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="input input-bordered input-info w-full p-3 rounded dark:bg-gray-800"
            />
          </div>
          <div>
            <label for="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="textarea textarea-accent w-full p-3 rounded dark:bg-gray-800"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-blue-400 dark:text-gray-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
