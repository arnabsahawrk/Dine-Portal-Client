import Lottie from "lottie-react";
import faqAnimation from "../../assets/json/faq.json";
const FAQPicture = () => {
  const style = {
    height: 300,
  };
  return <Lottie animationData={faqAnimation} style={style} />;
};

export default FAQPicture;
