import { Navigate, useLocation } from "react-router-dom";
import useFirebase from "../hooks/useFirebase";
import PropTypes from "prop-types";
import PrivateRouteSkeleton from "../components/Skeleton/PrivateRouteSkeleton";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useFirebase();
  const location = useLocation();

  if (loading) return <PrivateRouteSkeleton />;
  else if (user) return children;

  return <Navigate state={location.pathname} to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
