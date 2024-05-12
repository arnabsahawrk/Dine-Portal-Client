import AddedFoodCard from "./AddedFoodCard";

const AddedFoodsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {[...Array(4)].map((idx) => (
        <AddedFoodCard key={idx} />
      ))}
    </div>
  );
};

export default AddedFoodsCards;
