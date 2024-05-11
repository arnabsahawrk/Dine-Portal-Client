import TopFoodCard from "./TopFoodCard";

const TopFoodsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
      {[...Array(8).keys()].map((idx) => (
        <TopFoodCard key={idx} />
      ))}
    </div>
  );
};

export default TopFoodsCards;
