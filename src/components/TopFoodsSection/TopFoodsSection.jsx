import TopFoodsCards from "./TopFoodsCards";

const TopFoodsSection = () => {
  return (
    <section className="container mx-auto px-4 py-10 space-y-4 md:space-y-6">
      <h1 className="text-[#932584] text-center font-bold text-2xl md:text-4xl underline decoration-double">
        Top Foods
      </h1>
      <TopFoodsCards />
    </section>
  );
};

export default TopFoodsSection;
