import { Outlet } from "react-router-dom";
import Nav from "../components/common/Nav/Nav";
import Footer from "../components/common/Footer/Footer";

const MainLayout = () => {
  return (
    <main className="text-pretty">
      <Nav />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
