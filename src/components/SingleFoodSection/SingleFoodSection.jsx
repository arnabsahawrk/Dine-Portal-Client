import useGetSingleFood from "../../hooks/TanstackQuery/useGetSingleFood";
import Loader from "../Loader/Loader";
import FoodDetails from "./FoodDetails";
import PropTypes from "prop-types";

const SingleFoodSection = ({ id }) => {
  const { singleFood, loadingSingleFood } = useGetSingleFood(id);
  return (
    <section className="container mx-auto px-4 py-10">
      {loadingSingleFood ? <Loader /> : <FoodDetails singleFood={singleFood} />}
    </section>
  );
};

SingleFoodSection.propTypes = {
  id: PropTypes.string.isRequired,
};

export default SingleFoodSection;
