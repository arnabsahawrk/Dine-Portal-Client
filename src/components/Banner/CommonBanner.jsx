import PropTypes from "prop-types";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CommonBanner = ({ pageTitle }) => {
  const navigate = useNavigate("/");
  return (
    <section
      style={{
        backgroundImage: `url('https://dina.matchthemes.com/wp-content/uploads/slider-1-3.jpg')`,
      }}
      className="bg-cover bg-center bg-no-repeat h-96 relative"
    >
      <div className="bg-black bg-opacity-25 absolute inset-0 flex flex-col justify-center items-center gap-3">
        <h1 className="font-bold uppercase text-3xl md:text-4xl text-pink-50">
          {pageTitle}
        </h1>
        <p className="text-[#932584] font-bold capitalize text-lg flex items-center gap-1">
          <button
            onClick={() => navigate("/")}
            className="hover:text-[#d92775]"
          >
            Home
          </button>
          <FaArrowCircleRight className="text-xl" />
          <button className="text-[#d92775]">{pageTitle}</button>
        </p>
      </div>
    </section>
  );
};

CommonBanner.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default CommonBanner;
