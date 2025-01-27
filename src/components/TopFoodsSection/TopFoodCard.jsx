import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TopFoodCard = ({ food }) => {
  const { _id, imageURL, foodName, foodCategory, quantity, price } = food;
  return (
    <Link to={`/allFoods/foodDetails/${_id}`}>
      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div
          className="w-full h-64 bg-pink-50 bg-center bg-cover rounded-lg shadow-md relative"
          style={{
            backgroundImage: `url(${imageURL})`,
          }}
        >
          <div className="absolute inset-0 bg-pink-50 bg-opacity-25 hover:bg-opacity-0 transition duration-700"></div>
        </div>
        <div className="w-56 -mt-14 overflow-hidden bg-pink-50 rounded-lg shadow-lg md:w-64 z-30">
          <h3 className="py-2 font-bold tracking-wide text-center text-[#932584] uppercase">
            {foodName}
          </h3>
          <ul className="flex justify-between items-center px-3 text-sm text-pink-50 bg-[#932584] py-1">
            <li>{foodCategory}</li>
            <li>Q:{quantity}</li>
          </ul>
          <div className="flex items-center justify-between px-3 py-2 bg-[#d927751A]">
            <span className="font-bold text-[#d92775]">${price}</span>
            <button className="px-2 py-1 text-xs font-semibold text-pink-50 uppercase bg-[#932584] rounded  focus:outline-none">
              Order
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

TopFoodCard.propTypes = {
  food: PropTypes.object.isRequired,
};

export default TopFoodCard;
