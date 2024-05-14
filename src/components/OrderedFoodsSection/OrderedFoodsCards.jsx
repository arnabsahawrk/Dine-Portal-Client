import useGetOrderedFoods from "../../hooks/TanstackQuery/useGetOrderedFoods";
import Empty from "../Empty/Empty";
import Loader from "../Loader/Loader";
import OrderedFoodCard from "./OrderedFoodCard";

const OrderedFoodsCards = () => {
  const { orderedFoods, loadingOrderedFoods } = useGetOrderedFoods();

  return (
    <>
      {loadingOrderedFoods ? (
        <Loader />
      ) : (
        <>
          {orderedFoods?.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {orderedFoods?.map((food) => (
                <OrderedFoodCard key={food._id} food={food} />
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

export default OrderedFoodsCards;
