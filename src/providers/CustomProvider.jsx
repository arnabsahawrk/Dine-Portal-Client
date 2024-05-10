import PropTypes from "prop-types";
import FirebaseContextProvider from "../contexts/FirebaseContextProvider";

const CustomProvider = ({ children }) => {
  return <FirebaseContextProvider>{children}</FirebaseContextProvider>;
};

CustomProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomProvider;
