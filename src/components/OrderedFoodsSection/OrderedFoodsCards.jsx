import useGetOrderedFoods from "../../hooks/TanstackQuery/useGetOrderedFoods";
import Loader from "../Loader/Loader";
import OrderedFoodCard from "./OrderedFoodCard";

const OrderedFoodsCards = () => {
  const { orderedFoods, loadingOrderedFoods } = useGetOrderedFoods();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {loadingOrderedFoods ? (
        <Loader />
      ) : (
        orderedFoods?.map((food) => (
          <OrderedFoodCard key={food._id} food={food} />
        ))
      )}
    </div>
  );
};

export default OrderedFoodsCards;
