import PropTypes from "prop-types";
import { useState } from "react";
import { Dialog } from "@material-tailwind/react";
import useCancelOrderMutation from "../../hooks/TanstackQuery/useCancelOrderMutation";
import PostLoader from "../Loader/PostLoader";
import toast from "react-hot-toast";
import useIncrementMutationAgain from "../../hooks/TanstackQuery/useIncrementMutationAgain";
import { Link } from "react-router-dom";

const OrderedFoodCard = ({ food }) => {
  const { deleteOrderAsync, pendingOrder } = useCancelOrderMutation();
  const { incrementCancelAsync } = useIncrementMutationAgain();
  const {
    _id,
    foodId,
    foodImage,
    foodName,
    sellerName,
    purchaseDate,
    foodCategory,
    buyerQuantity,
    price,
  } = food || {};
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const handleOrderedCancel = async (id) => {
    try {
      await deleteOrderAsync(id);
      toast.success("Order Canceled.", {
        style: {
          border: "1px solid #932584",
          padding: "16px",
          color: "#932584",
          background: "#fce4ec",
        },
        iconTheme: {
          primary: "#932584",
          secondary: "#fce4ec",
        },
      });
      await incrementCancelAsync({ foodId, buyerQuantity });
    } catch {
      toast.error("Cancel Failed.", {
        style: {
          border: "1px solid #932584",
          padding: "16px",
          color: "#932584",
          background: "#fce4ec",
        },
        iconTheme: {
          primary: "#932584",
          secondary: "#fce4ec",
        },
      });
    }

    handleOpen();
  };

  return (
    <div className="overflow-hidden bg-[#d927754D] rounded-lg hover:shadow-2xl">
      <Link to={`/allFoods/foodDetails/${foodId}`}>
        <img
          className="object-cover w-full h-48"
          src={foodImage}
          alt={foodName}
        />
        <div className="px-4 py-2 text-center">
          <h1 className="text-xl font-bold text-[#932584] uppercase">
            {foodName}
          </h1>
          <ul className="mt-1 text-sm text-[#d92775]">
            <li>Seller: {sellerName}</li>
            <li>Ordered: {purchaseDate || "None"}</li>
            <li>Category: {foodCategory}</li>
            <li>Order Quantity: {buyerQuantity}</li>
            <li>Price: ${price}</li>
          </ul>
        </div>
      </Link>

      <div className="flex items-center justify-center px-4 py-2 bg-[#d927754D]">
        <button
          onClick={handleOpen}
          className="px-4 py-2 text-xs font-semibold text-pink-50 uppercase bg-[#932584] rounded-md"
        >
          Cancel
        </button>
        <Dialog
          open={open}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <div className="bg-pink-50 rounded-lg shadow-lg  px-6 py-8 md:px-8 space-y-6">
            <p className="text-center font-bold text-[#932584] text-2xl md:text-4xl">
              Are You Sure?
            </p>
            {pendingOrder ? (
              <PostLoader />
            ) : (
              <div className="flex justify-center gap-3">
                <button
                  onClick={handleOpen}
                  className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-pink-50 uppercase bg-[#932584] rounded-md"
                >
                  No
                </button>
                <button
                  onClick={() => handleOrderedCancel(_id)}
                  className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-pink-50 uppercase bg-[#d927754D] hover:bg-[#932584] duration-700 transition-colors rounded-md"
                >
                  Yes
                </button>
              </div>
            )}
          </div>
        </Dialog>
      </div>
    </div>
  );
};

OrderedFoodCard.propTypes = {
  food: PropTypes.object.isRequired,
};

export default OrderedFoodCard;
