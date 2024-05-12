import OrderedFoodsCards from "./OrderedFoodsCards";

const OrderedFoodsSection = () => {
  return (
    <section className="container mx-auto px-4 py-10 space-y-4 md:space-y-6">
      <h1 className="text-[#932584] text-center font-bold text-2xl md:text-4xl underline decoration-double">
        Ordered Foods
      </h1>
      <OrderedFoodsCards />
    </section>
  );
};

export default OrderedFoodsSection;
