import { Helmet } from "react-helmet-async";
import CommonBanner from "../components/Banner/CommonBanner";
import AddedFoodsSection from "../components/AddedFoodsSection/AddedFoodsSection";

const AddedFoodsPage = () => {
  return (
    <>
      <Helmet>
        <title>Dine Portal | Added Foods</title>
      </Helmet>
      <section className="bg-pink-50 min-h-[calc(100vh-348px)]">
        <CommonBanner pageTitle={"Added Foods"} />
        <AddedFoodsSection />
      </section>
    </>
  );
};

export default AddedFoodsPage;
