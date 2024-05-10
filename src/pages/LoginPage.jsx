import { Helmet } from "react-helmet-async";
import Login from "../components/Authentication/Login";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Dine Portal | LogIn</title>
      </Helmet>
      <section className="bg-pink-50 min-h-[calc(100vh-348px)]">
        <Login />
      </section>
    </>
  );
};

export default LoginPage;
