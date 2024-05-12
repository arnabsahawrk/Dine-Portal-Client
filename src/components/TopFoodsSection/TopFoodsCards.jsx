import useGetTopFoods from "../../hooks/TanstackQuery/useGetTopFoods";
import Loader from "../Loader/Loader";
import TopFoodCard from "./TopFoodCard";

const TopFoodsCards = () => {
  const { topFoods, loadingTopFoods } = useGetTopFoods(0, 6);

  return (
    <>
      {loadingTopFoods ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
          {topFoods?.map((food) => (
            <TopFoodCard key={food._id} food={food} />
          ))}
        </div>
      )}
    </>
  );
};

export default TopFoodsCards;
