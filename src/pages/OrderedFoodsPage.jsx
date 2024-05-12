import { Helmet } from "react-helmet-async";
import CommonBanner from "../components/Banner/CommonBanner";
import OrderedFoodsSection from "../components/OrderedFoodsSection/OrderedFoodsSection";

const OrderedFoodsPage = () => {
  return (
    <>
      <Helmet>
        <title>Dine Portal | Ordered Foods</title>
      </Helmet>
      <section className="bg-pink-50 min-h-[calc(100vh-348px)]">
        <CommonBanner pageTitle={"Ordered Foods"} />
        <OrderedFoodsSection />
      </section>
    </>
  );
};

export default OrderedFoodsPage;
