import { Link } from "react-router-dom";

const KeyFeaturesCards = () => {
  return (
    <>
      {/* Add Food  */}
      <Link to="/addFood">
        <div
          style={{
            backgroundImage: `url('https://matchthemes.com/demowp/dina/wp-content/uploads/2017/02/featured-img-1-2.jpg')`,
          }}
          className="bg-cover bg-center bg-no-repeat h-72 rounded-md relative transition duration-700 transform hover:scale-105"
        >
          <div className="absolute inset-0 bg-pink-50 bg-opacity-25 flex flex-col justify-center items-center space-y-2">
            <h2 className="text-pink-50 font-bold text-2xl uppercase">
              Add Food
            </h2>
            <p className="text-pink-50 font-semibold">Add & Showcase Foods</p>
          </div>
        </div>
      </Link>
      {/* Added Food  */}
      <Link to="/addedFoods">
        <div
          style={{
            backgroundImage: `url('https://matchthemes.com/demowp/dina/wp-content/uploads/2017/02/featured-img-2-1.jpg')`,
          }}
          className="bg-cover bg-center bg-no-repeat h-72 rounded-md relative transition duration-700 transform hover:scale-105"
        >
          <div className="absolute inset-0 bg-pink-50 bg-opacity-25 flex flex-col justify-center items-center space-y-2">
            <h2 className="text-pink-50 font-bold text-2xl uppercase">
              Added Foods
            </h2>
            <p className="text-pink-50 font-semibold">Track & Modify Foods</p>
          </div>
        </div>
      </Link>
      {/* Ordered Food  */}
      <Link to="/orderedFoods">
        <div
          style={{
            backgroundImage: `url('https://matchthemes.com/demowp/dina/wp-content/uploads/2017/02/featured-img-3-1.jpg')`,
          }}
          className="bg-cover bg-center bg-no-repeat h-72 rounded-md relative md:col-span-2 xl:col-auto transition duration-700 transform hover:scale-105"
        >
          <div className="absolute inset-0 bg-pink-50 bg-opacity-25 flex flex-col justify-center items-center space-y-2">
            <h2 className="text-pink-50 font-bold text-2xl uppercase">
              Ordered Foods
            </h2>
            <p className="text-pink-50 font-semibold">
              Manage & Remember Orders
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default KeyFeaturesCards;
