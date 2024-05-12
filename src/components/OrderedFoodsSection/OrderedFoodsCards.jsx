import OrderedFoodCard from "./OrderedFoodCard";

const handleOrderedCancel = (e) => {
  console.log(e);
};

const OrderedFoodsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {[...Array(4)].map((idx) => (
        <OrderedFoodCard key={idx} handleOrderedCancel={handleOrderedCancel} />
      ))}
    </div>
  );
};

export default OrderedFoodsCards;
