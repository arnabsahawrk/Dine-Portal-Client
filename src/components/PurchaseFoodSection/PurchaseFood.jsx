import { Dialog, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import useFirebase from "../../hooks/useFirebase";
// import toast from "react-hot-toast";
import useAddOrderMutation from "../../hooks/TanstackQuery/useAddOrderMutation";
import PostLoader from "../Loader/PostLoader";
// import useIncrementMutation from "../../hooks/TanstackQuery/useIncrementMutation";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PaymentCheckout from "./PaymentCheckout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
const PurchaseFood = ({ singleFood }) => {
  // const navigate = useNavigate();
  const { pendingOrder } = useAddOrderMutation();
  // const { incrementAsync } = useIncrementMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  let purchaseDate = new Date().toLocaleDateString();
  const { user } = useFirebase();

  //Payment Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [formData, setFormData] = useState(null);
  const [cardError, setCardError] = useState(null);

  let {
    _id: foodId,
    addedTime,
    foodName,
    description,
    foodCategory,
    foodOrigin,
    userName: sellerName,
    userEmail: sellerEmail,
    imageURL: foodImage,
    quantity,
    sold,
    price,
    userPic: sellerImage,
  } = singleFood;
  const handlePurchaseFood = async (e) => {
    let { quantity: buyerQuantity } = e;
    purchaseDate = new Date().toLocaleString();
    const quantityRemain = parseFloat(quantity - buyerQuantity);
    buyerQuantity = parseFloat(buyerQuantity);
    sold = parseFloat(sold + buyerQuantity);
    const BuyerName = user.displayName || "Anonymous";
    const BuyerEmail = user.email || "None";
    const BuyerPic =
      user.photoURL || "https://i.postimg.cc/NM1cX9cm/profile.png";
    const formData = {
      foodId,
      addedTime,
      foodName,
      description,
      foodCategory,
      foodOrigin,
      sellerName,
      sellerEmail,
      sellerImage,
      quantityRemain,
      sold,
      price,
      foodImage,
      BuyerName,
      BuyerEmail,
      BuyerPic,
      buyerQuantity,
      purchaseDate,
    };

    //Payment Integration
    setFormData(formData);
    handleOpen();

    // try {
    //   await orderAsync(formData);
    //   toast.success("Order Done Successfully.", {
    //     style: {
    //       border: "1px solid #932584",
    //       padding: "16px",
    //       color: "#932584",
    //       background: "#fce4ec",
    //     },
    //     iconTheme: {
    //       primary: "#932584",
    //       secondary: "#fce4ec",
    //     },
    //   });
    //   reset();
    //   navigate("/orderedFoods");
    //   await incrementAsync({ foodId, buyerQuantity });
    // } catch {
    //   toast.error("Order Failed.", {
    //     style: {
    //       border: "1px solid #932584",
    //       padding: "16px",
    //       color: "#932584",
    //       background: "#fce4ec",
    //     },
    //     iconTheme: {
    //       primary: "#932584",
    //       secondary: "#fce4ec",
    //     },
    //   });
    // }
  };
  return (
    <div
      className={`flex flex-col lg:flex-row gap-4 ${
        sellerEmail === user.email ? "" : "bg-[#d927751A] rounded-lg shadow-lg"
      }`}
    >
      {/* Order Details  */}
      <div
        className={`overflow-hidden bg-[#d927754D] rounded-lg shadow-lg p-4 ${
          sellerEmail === user.email ? "w-full max-w-xl mx-auto" : "lg:w-1/2"
        }`}
      >
        <p className="text-[#932584] font-bold underline decoration-double">
          Food Details
        </p>
        <img
          className="object-cover size-48 mx-auto rounded-lg"
          src={foodImage}
          alt={foodName}
        />
        <div className="px-4 py-2 text-center">
          <h1 className="text-xl font-bold text-[#932584] uppercase">
            {foodName}
          </h1>
          <ul className="mt-1 text-sm text-[#d92775]">
            <li>Seller: {sellerName}</li>
            <li>Added: {addedTime}</li>
            <li>Category: {foodCategory}</li>
            <li>Food Origin: {foodOrigin}</li>
            <li>Quantity: {quantity}</li>
            <li>Price: ${price}</li>
          </ul>
        </div>
      </div>
      {/* Buyer Info  */}
      <div
        className={`overflow-hidden bg-[#d927751A] rounded-lg shadow-lg p-4 ${
          sellerEmail === user.email ? "hidden" : "lg:w-1/2"
        }`}
      >
        <p className="text-[#932584] font-bold underline decoration-double">
          Billing
        </p>
        <div className="px-4 py-2 text-center border-b border-[#932584] mb-2 text-[#d92775] font-bold">
          <p className="text-right font-medium">{purchaseDate}</p>
          <h1 className="text-xl font-bold text-[#932584] uppercase">
            {foodName}
          </h1>
          <p>Category: {foodCategory}</p>
          <p>Food Origin: {foodOrigin}</p>
          <p>Price: ${price}</p>
        </div>
        <div className="py-1 text-[#932584] flex flex-col justify-center items-center">
          <p>Name: {user?.displayName || "Anonymous"}</p>
          <p>Email: {user?.email || "None"}</p>
          {/* Form of Order  */}
          <form
            onSubmit={handleSubmit(handlePurchaseFood)}
            className="px-6 py-8 md:px-8 space-y-2 text-left w-full lg:w-2/3"
          >
            {/* Quantity  */}
            <div>
              <label className="block mb-2 text-sm font-medium text-[#932584]">
                Quantity:
              </label>
              <input
                name="quantity"
                className="block w-full px-4 py-2 text-[#932584] bg-[#f8d1e0] border border-[#932584] rounded-lg    focus:border-[#d92775] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-[#d92775] placeholder:text-[#d927754D]"
                type="number"
                placeholder="Enter Food Quantity"
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "Food Quantity is required.",
                  },
                  min: {
                    value: 1,
                    message: "Without add quantity you can't purchase.",
                  },
                  max: {
                    value: quantity,
                    message: "You can't purchase more than remain quantity.",
                  },
                })}
              />
              {errors.quantity && (
                <Typography
                  variant="paragraph"
                  className="text-[#d92775] font-DotGothic16 capitalize italic text-sm"
                >
                  {errors.quantity?.message}
                </Typography>
              )}
            </div>

            {/* Payment Integration  */}
            <div>
              {cardError && (
                <Typography
                  variant="paragraph"
                  className="text-[#d92775] font-DotGothic16 capitalize italic"
                >
                  {cardError}
                </Typography>
              )}
              {pendingOrder ? (
                <PostLoader />
              ) : (
                <button
                  disabled={quantity ? false : true}
                  type="submit"
                  className={`px-4 py-2 text-base tracking-wide text-pink-50 ${
                    quantity ? "bg-[#932584]" : "bg-[#93258480]"
                  }  rounded-md font-bold`}
                >
                  {quantity ? "Purchase" : "Sold Out"}
                </button>
              )}
              <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
              >
                <div className="bg-pink-50 rounded-lg shadow-lg p-6">
                  {/* //TODO: Stripe Form Here  */}
                  <Elements stripe={stripePromise}>
                    <PaymentCheckout
                      formData={formData}
                      handleClose={handleOpen}
                      quantityReset={reset}
                      setCardError={setCardError}
                      cardError={cardError}
                    />
                  </Elements>
                </div>
              </Dialog>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

PurchaseFood.propTypes = {
  singleFood: PropTypes.object.isRequired,
};
export default PurchaseFood;
