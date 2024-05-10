import { Helmet } from "react-helmet-async";
import HomeBanner from "../components/Banner/HomeBanner";
import FAQSection from "../components/FAQSection/FAQSection";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Dine Portal | Home</title>
      </Helmet>
      <section className="bg-pink-50 min-h-[calc(100vh-348px)]">
        <HomeBanner />
        <FAQSection />
      </section>
    </>
  );
};

export default HomePage;
