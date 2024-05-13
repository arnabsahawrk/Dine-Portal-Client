import PropTypes from "prop-types";

const GalleryCard = ({ feedback }) => {
  const { userName, feedback: description, imageURL } = feedback;
  return (
    <div
      style={{
        backgroundImage: `url(${imageURL})`,
      }}
      className="bg-cover bg-center bg-no-repeat h-[270px] rounded-md relative transition-transform duration-700 transform hover:scale-105"
    >
      <div className="absolute inset-0 hover:bg-pink-50 hover:bg-opacity-80 transition duration-700 flex flex-col justify-center items-center space-y-2 py-2 px-4 overflow-auto text-[#932584] text-center opacity-0 hover:opacity-100">
        <h4 className="font-bold text-2xl">User: {userName}</h4>
        <p className="font-semibold text-base lg:text-lg">{description}</p>
      </div>
    </div>
  );
};

GalleryCard.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default GalleryCard;
