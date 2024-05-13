import useGetSingleFood from "../../hooks/TanstackQuery/useGetSingleFood";
import Loader from "../Loader/Loader";
import PurchaseFood from "./PurchaseFood";
import PropTypes from "prop-types";

const PurchaseFoodSection = ({ id }) => {
  const { singleFood, loadingSingleFood } = useGetSingleFood(id);
  return (
    <section className="container mx-auto px-4 py-10">
      {loadingSingleFood ? (
        <Loader />
      ) : (
        <PurchaseFood singleFood={singleFood} />
      )}
    </section>
  );
};

PurchaseFoodSection.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PurchaseFoodSection;
