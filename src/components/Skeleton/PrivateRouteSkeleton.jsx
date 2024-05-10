const PrivateRouteSkeleton = () => {
  return (
    <section className="bg-pink-50 min-h-[calc(100vh-348px)]">
      <div className="container px-4 py-10 mx-auto animate-pulse">
        <div className="text-center">
          <p className="w-32 h-2 mx-auto bg-[#932584] rounded-lg"></p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <p className="w-24 h-2 bg-[#932584] rounded-lg"></p>
            <p className="w-24 h-2 bg-[#932584] rounded-lg"></p>
            <p className="w-24 h-2 bg-[#932584] rounded-lg"></p>
            <p className="w-24 h-2 bg-[#932584] rounded-lg"></p>
            <p className="w-24 h-2 bg-[#932584] rounded-lg"></p>
          </div>
        </div>

        <hr className="my-6 bg-[#932584] md:my-10" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="w-24 h-2 bg-[#932584] rounded-lg"></p>

          <p className="w-64 h-2 bg-[#932584] rounded-lg"></p>
        </div>
      </div>
    </section>
  );
};

export default PrivateRouteSkeleton;
