import { Helmet } from "react-helmet-async";
import CommonBanner from "../components/Banner/CommonBanner";
import PurchaseFoodSection from "../components/PurchaseFoodSection/PurchaseFoodSection";

const PurchaseFoodPage = () => {
  return (
    <>
      <Helmet>
        <title>Dine Portal | Purchase Food</title>
      </Helmet>
      <section className="bg-pink-50">
        <CommonBanner pageTitle={"Purchase Food"} />
        <PurchaseFoodSection />
      </section>
    </>
  );
};

export default PurchaseFoodPage;
