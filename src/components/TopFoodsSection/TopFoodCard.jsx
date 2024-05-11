import { Link } from "react-router-dom";

const TopFoodCard = () => {
  return (
    <Link to="/allFoods/foodDetails">
      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div
          className="w-full h-64 bg-pink-50 bg-center bg-cover rounded-lg shadow-md relative"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-pink-50 bg-opacity-25 hover:bg-opacity-0 transition duration-700"></div>
        </div>
        <div className="w-56 -mt-14 overflow-hidden bg-pink-50 rounded-lg shadow-lg md:w-64 z-30">
          <h3 className="py-2 font-bold tracking-wide text-center text-[#932584] uppercase">
            Nike Revolt
          </h3>
          <ul className="flex justify-between items-center px-3 text-sm text-pink-50 bg-[#932584] py-1">
            <li>Italian</li>
            <li>Q:20</li>
          </ul>
          <div className="flex items-center justify-between px-3 py-2 bg-[#d927751A]">
            <span className="font-bold text-[#d92775]">$129</span>
            <button className="px-2 py-1 text-xs font-semibold text-pink-50 uppercase bg-[#932584] rounded  focus:outline-none">
              Order
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopFoodCard;
