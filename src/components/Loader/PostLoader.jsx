import { ScaleLoader } from "react-spinners";

const PostLoader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="sweet-loading mr-5 md:mr-10 py-2">
        <ScaleLoader color="#932584" loading={true} size={30} />
      </div>
    </div>
  );
};

export default PostLoader;
