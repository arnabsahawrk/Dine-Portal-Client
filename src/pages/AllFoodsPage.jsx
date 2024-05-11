import { Helmet } from "react-helmet-async";
import CommonBanner from "../components/Banner/CommonBanner";
import AllFoodsSection from "../components/AllFoodsSection/AllFoodsSection";

const AllFoodsPage = () => {
  return (
    <>
      <Helmet>
        <title>Dine Portal | All Foods</title>
      </Helmet>
      <section className="bg-pink-50 min-h-[calc(100vh-348px)]">
        <CommonBanner pageTitle={"All Foods"} />
        <AllFoodsSection />
      </section>
    </>
  );
};

export default AllFoodsPage;
