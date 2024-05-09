import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto px-4">
      <div className="w-screen h-screen flex flex-col items-center justify-center p-10">
        <img
          className="size-full object-contain"
          src="https://i.postimg.cc/T1Qg4Rqd/404.jpg"
          alt="404"
        />
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Back
        </button>
      </div>
    </section>
  );
};

export default ErrorPage;
