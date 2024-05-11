import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="sweet-loading mr-5 md:mr-10 py-10">
        <HashLoader color="#932584" loading={true} size={300} />
      </div>
    </div>
  );
};

export default Loader;
