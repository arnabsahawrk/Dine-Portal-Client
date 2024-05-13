import Lottie from "lottie-react";
import emptyAnimation from "../../assets/json/empty.json";
const EmptyPicture = () => {
  const style = {
    height: 300,
  };
  return <Lottie animationData={emptyAnimation} style={style} />;
};

export default EmptyPicture;
