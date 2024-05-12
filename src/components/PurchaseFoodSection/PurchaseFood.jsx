import { Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

const PurchaseFood = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  let purchaseDate = new Date().toLocaleDateString();
  const handlePurchaseFood = (e) => {
    const { quantity } = e;
    purchaseDate = new Date().toLocaleString();
    console.log(purchaseDate, quantity);
    reset;
  };
  return (
    <div className="flex flex-col lg:flex-row gap-4 bg-[#d927751A] rounded-lg shadow-lg">
      {/* Order Details  */}
      <div className="overflow-hidden bg-[#d927754D] rounded-lg shadow-lg p-4 lg:w-1/2">
        <p className="text-[#932584] font-bold underline decoration-double">
          Food Details
        </p>
        <img
          className="object-cover size-48 mx-auto rounded-lg"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
          alt="NIKE AIR"
        />
        <div className="px-4 py-2 text-center">
          <h1 className="text-xl font-bold text-[#932584] uppercase">
            NIKE AIR
          </h1>
          <ul className="mt-1 text-sm text-[#d92775]">
            <li>Seller: Arnab Saha</li>
            <li>Added: 12/12/2024, 23:23</li>
            <li>Category: Italian</li>
            <li>Food Origin: European</li>
            <li>Remain: 20</li>
            <li>Price: $50</li>
          </ul>
        </div>
      </div>
      {/* Buyer Info  */}
      <div className="overflow-hidden bg-[#d927751A] rounded-lg shadow-lg p-4 lg:w-1/2">
        <p className="text-[#932584] font-bold underline decoration-double">
          Billing
        </p>
        <div className="px-4 py-2 text-center border-b border-[#932584] mb-2 text-[#d92775] font-bold">
          <p className="text-right font-medium">{purchaseDate}</p>
          <h1 className="text-xl font-bold text-[#932584] uppercase">
            NIKE AIR
          </h1>
          <p>Category: Italian</p>
          <p>Food Origin: BD</p>
          <p>Price: $300</p>
        </div>
        <div className="py-1 text-[#932584] flex flex-col justify-center items-center">
          <p>Name: Arnab Saha</p>
          <p>Email: arnabsahawrk@gmail.com</p>
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
                  max: {
                    value: 4,
                    message: "You can't add more than remain quantity.",
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
            <button
              type="submit"
              className="px-4 py-2 text-base tracking-wide text-pink-50 bg-[#932584]  rounded-md font-bold"
            >
              Purchase
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseFood;
