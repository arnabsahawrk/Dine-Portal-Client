import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section>{/* <div className="container mx-auto px-4"></div> */}</section>
    </>
  );
};

export default HomePage;
