import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section className="bg-pink-50 py-[63px]">
        {/* <div className="container mx-auto px-4"></div> */}
      </section>
    </>
  );
};

export default HomePage;
