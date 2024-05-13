import { Helmet } from "react-helmet-async";
import CommonBanner from "../components/Banner/CommonBanner";
import PurchaseFoodSection from "../components/PurchaseFoodSection/PurchaseFoodSection";
import { useParams } from "react-router-dom";

const PurchaseFoodPage = () => {
  const { id } = useParams();
  return (
    <>
      <Helmet>
        <title>Dine Portal | Purchase Food</title>
      </Helmet>
      <section className="bg-pink-50">
        <CommonBanner pageTitle={"Purchase Food"} />
        <PurchaseFoodSection id={id} />
      </section>
    </>
  );
};

export default PurchaseFoodPage;
