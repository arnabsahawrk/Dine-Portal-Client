import { Helmet } from "react-helmet-async";
import CommonBanner from "../components/Banner/CommonBanner";
import GallerySection from "../components/GallerySection/GallerySection";

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Dine Portal | Gallery</title>
      </Helmet>
      <section className="bg-pink-50">
        <CommonBanner pageTitle={"Feedback & Galley"} />
        <GallerySection />
      </section>
    </>
  );
};

export default GalleryPage;
