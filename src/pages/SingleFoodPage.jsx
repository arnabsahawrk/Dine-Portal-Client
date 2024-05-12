import { Helmet } from "react-helmet-async";
import CommonBanner from "../components/Banner/CommonBanner";
import SingleFoodSection from "../components/SingleFoodSection/SingleFoodSection";
import { useParams } from "react-router-dom";

const SingleFoodPage = () => {
  const { id } = useParams();
  return (
    <>
      <Helmet>
        <title>Dine Portal | Food Details</title>
      </Helmet>
      <section className="bg-pink-50 min-h-[calc(100vh-348px)]">
        <CommonBanner pageTitle={"Food Details"} />
        <SingleFoodSection id={id} />
      </section>
    </>
  );
};

export default SingleFoodPage;
