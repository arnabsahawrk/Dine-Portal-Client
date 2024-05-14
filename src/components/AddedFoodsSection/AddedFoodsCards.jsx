import useGetAddedFoods from "../../hooks/TanstackQuery/useGetAddedFoods";
import Empty from "../Empty/Empty";
import Loader from "../Loader/Loader";
import AddedFoodCard from "./AddedFoodCard";

const AddedFoodsCards = () => {
  const { addedFoods, loadingAddedFoods } = useGetAddedFoods();
  return (
    <>
      {loadingAddedFoods ? (
        <Loader />
      ) : (
        <>
          {addedFoods?.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {addedFoods?.map((food) => (
                <AddedFoodCard key={food._id} food={food} />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </>
      )}
    </>
  );
};

export default AddedFoodsCards;
