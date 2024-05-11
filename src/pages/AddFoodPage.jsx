import { Helmet } from "react-helmet-async";
import CommonBanner from "../components/Banner/CommonBanner";
import AddFoodSection from "../components/AddFoodSection/AddFoodSection";

const AddFoodPage = () => {
  return (
    <>
      <Helmet>
        <title>Dine Portal | Add Food</title>
      </Helmet>
      <section className="bg-pink-50 min-h-[calc(100vh-348px)]">
        <CommonBanner pageTitle={"Add Food"} />
        <AddFoodSection />
      </section>
    </>
  );
};

export default AddFoodPage;
