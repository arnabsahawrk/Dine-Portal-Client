import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FoodDetails = ({ singleFood }) => {
  const {
    addedTime,
    foodName,
    description,
    foodCategory,
    foodOrigin,
    userName,
    userEmail,
    imageURL,
    quantity,
    sold,
    price,
    userPic,
  } = singleFood;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-5 bg-[#d927751A] rounded-lg shadow-lg overflow-auto max-w-xl mx-auto ">
      <img
        className="w-full object-cover h-72 rounded-md"
        src={imageURL}
        alt="Food Details"
      />
      <div className="flex flex-col justify-center items-center">
        <h4 className="text-[#932584] font-semibold text-lg">
          Seller Details:
        </h4>
        <img
          className="size-12 object-cover rounded-md"
          src={userPic}
          alt={userName}
        />
        <h4 className="text-[#d92775]">Name: {userName}</h4>
        <h4 className="text-[#d92775]">Email: {userEmail}</h4>
      </div>
      <p className="text-[#d92775]">Added: {addedTime}</p>
      <h1 className="text-[#932584] font-bold text-2xl lg:text-3xl">
        {foodName}
      </h1>
      <p className="text-[#932584CC] text-center">{description}</p>
      <p className="flex items-center gap-2 lg:gap-4 flex-wrap text-pink-50 text-xs md:text-sm">
        <span className="bg-[#932584] py-1 px-2 rounded-md font-bold">
          Category: {foodCategory}
        </span>
        <span className="bg-[#932584] py-1 px-2 rounded-md font-bold">
          Food Origin: {foodOrigin}
        </span>
      </p>
      <ul className="flex items-center gap-2 lg:gap-4 flex-wrap">
        <li className="bg-[#932584] text-pink-50 rounded-md px-2 py-1 text-sm">
          Quantity: {quantity}
        </li>
        <li className="bg-[#932584] text-pink-50 rounded-md px-2 py-1 text-sm">
          Sold: {sold}
        </li>
      </ul>
      <p className="text-[#932584] font-bold text-3xl">Price: ${price}</p>
      <button
        disabled={quantity ? false : true}
        onClick={() => navigate("/purchaseFood")}
        className={`px-6 py-3 text-base tracking-wide text-pink-50 ${
          quantity ? "bg-[#932584]" : "bg-[#93258480]"
        }  rounded-md font-bold`}
      >
        {quantity ? "Confirm Order" : "Sold Out"}
      </button>
    </div>
  );
};

FoodDetails.propTypes = {
  singleFood: PropTypes.object.isRequired,
};

export default FoodDetails;
