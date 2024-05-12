import PropTypes from "prop-types";

const OrderedFoodCard = ({ handleOrderedCancel }) => {
  return (
    <div className="overflow-hidden bg-[#d927754D] rounded-lg hover:shadow-2xl">
      <img
        className="object-cover w-full h-48"
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
        alt="NIKE AIR"
      />
      <div className="px-4 py-2 text-center">
        <h1 className="text-xl font-bold text-[#932584] uppercase">NIKE AIR</h1>
        <ul className="mt-1 text-sm text-[#d92775]">
          <li>Seller: Arnab</li>
          <li>Ordered: 12/12/2024, 23:23</li>
          <li>Category: Italian</li>
          <li>Food Origin: European</li>
          <li>Price: $50</li>
        </ul>
      </div>

      <div className="flex items-center justify-center px-4 py-2 bg-[#d927754D]">
        <button
          onClick={() => handleOrderedCancel(1)}
          className="px-4 py-2 text-xs font-semibold text-pink-50 uppercase bg-[#932584] rounded-md"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

OrderedFoodCard.propTypes = {
  handleOrderedCancel: PropTypes.func.isRequired,
};

export default OrderedFoodCard;
