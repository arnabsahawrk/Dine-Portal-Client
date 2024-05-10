import { Helmet } from "react-helmet-async";
import Registration from "../components/Authentication/Registration";

const RegistrationPage = () => {
  return (
    <>
      <Helmet>
        <title>Dine Portal | Registration</title>
      </Helmet>
      <section className="bg-pink-50 min-h-[calc(100vh-348px)]">
        <Registration />
      </section>
    </>
  );
};

export default RegistrationPage;
