const HomeBanner = () => {
  return (
    <section className="relative">
      <video
        className="w-full h-[60vh] sm:h-[80vh] object-cover"
        preload="metadata"
        autoPlay
        muted
        loop
        poster="https://matchthemes.com/demowp/dina/wp-content/uploads/2019/07/video-dina-img.jpg"
      >
        <source
          src="https://matchthemes.com/demowp/dina/wp-content/uploads/2019/07/video-dina.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-pink-50 bg-opacity-40">
        <div className="container mx-auto px-4 text-pink-50 text-center flex flex-col justify-center items-center h-full gap-3 sm:gap-6">
          <h1 className="text-5xl sm:text-7xl font-extrabold uppercase">
            Welcome
          </h1>
          <p className="text-sm sm:text-base">
            Showcase and savor culinary delights, all in one place
          </p>
          <button className="text-sm sm:text-base border-2 sm:border-4 border-pink-50 py-[10px] px-6 font-bold transition-colors duration-700 hover:bg-[#932584] hover:border-[#932584]">
            All Foods
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
