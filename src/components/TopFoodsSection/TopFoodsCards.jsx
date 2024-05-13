import useGetTopFoods from "../../hooks/TanstackQuery/useGetTopFoods";
import Loader from "../Loader/Loader";
import TopFoodCard from "./TopFoodCard";
import { useNavigate } from "react-router-dom";

const TopFoodsCards = () => {
  const navigate = useNavigate();
  const { topFoods, loadingTopFoods } = useGetTopFoods(0, 8);

  return (
    <>
      {loadingTopFoods ? (
        <Loader />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
            {topFoods?.map((food) => (
              <TopFoodCard key={food._id} food={food} />
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => navigate("/allFoods")}
              className="w-1/2 px-3 sm:px-5 py-2 text-sm tracking-wide text-pink-50 bg-[#932584]  rounded-lg shrink-0 sm:w-auto mt-6"
            >
              See All
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default TopFoodsCards;
