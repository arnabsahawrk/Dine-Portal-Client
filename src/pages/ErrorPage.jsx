import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-pink-50">
      <div className="container min-h-screen px-6 py-12 mx-auto flex flex-col lg:flex-row justify-center items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm font-medium text-[#d92775]">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-[#932584] md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-[#932584]">
            Sorry, the page you are looking for doesn&apos;t exist.Here are some
            helpful links:
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center mt-6 gap-3">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center w-1/2 px-3 sm:px-5 py-2 text-sm text-[#d92775] transition duration-700 bg-none border border-[#932584] rounded-lg gap-x-2 sm:w-auto hover:bg-[#932584] hover:text-pink-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>Go back</span>
            </button>

            <button
              onClick={() => navigate("/")}
              className="w-1/2 px-3 sm:px-5 py-2 text-sm tracking-wide text-pink-50 bg-[#932584]  rounded-lg shrink-0 sm:w-auto"
            >
              Take me home
            </button>
          </div>
        </div>

        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <h2 className="text-[#d92775] text-8xl sm:text-9xl font-DotGothic16 border-y-4 border-[#932584] text-center">
            4 0 4
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
