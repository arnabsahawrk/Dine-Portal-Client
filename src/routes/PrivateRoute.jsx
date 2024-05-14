import { Navigate, useLocation } from "react-router-dom";
import useFirebase from "../hooks/useFirebase";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import Loader from "../components/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useFirebase();
  const location = useLocation();

  if (loading) return <Loader />;
  else if (user) return children;
  else
    toast.error("You Should Log In First.", {
      style: {
        border: "1px solid #932584",
        padding: "16px",
        color: "#932584",
        background: "#fce4ec",
      },
      iconTheme: {
        primary: "#932584",
        secondary: "#fce4ec",
      },
    });

  return <Navigate to="/login" state={location.pathname} replace={true} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
