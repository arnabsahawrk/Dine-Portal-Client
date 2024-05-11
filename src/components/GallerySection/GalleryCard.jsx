import PropTypes from "prop-types";

const GalleryCard = ({ feedback }) => {
  console.log(feedback);
  return (
    <div
      style={{
        backgroundImage: `url('https://matchthemes.com/demowp/dina/wp-content/uploads/2017/02/featured-img-1-2.jpg')`,
      }}
      className="bg-cover bg-center bg-no-repeat h-[270px] rounded-md relative transition-transform duration-700 transform hover:scale-105"
    >
      <div className="absolute inset-0 hover:bg-pink-50 hover:bg-opacity-80 transition duration-700 flex flex-col justify-center items-center space-y-2 py-2 px-4 overflow-auto text-[#932584] text-center opacity-0 hover:opacity-100">
        <h4 className="font-bold text-2xl">User: Arnab Saha</h4>
        <p className="font-semibold text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet
          nam, maiores rem voluptates quod non dolorem fugit! Distinctio
          deleniti ipsam accusamus eos maxime sequi culpa qui. Aliquid, eum
          sequi.
        </p>
      </div>
    </div>
  );
};

GalleryCard.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default GalleryCard;
