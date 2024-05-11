import { useNavigate } from "react-router-dom";
import TopFoodsCards from "./TopFoodsCards";

const TopFoodsSection = () => {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto px-4 py-10 space-y-4 md:space-y-6">
      <h1 className="text-[#932584] text-center font-bold text-2xl md:text-4xl underline decoration-double">
        Top Foods
      </h1>
      <TopFoodsCards />
      <div className="text-center">
        <button
          onClick={() => navigate("/allFoods")}
          className="w-1/2 px-3 sm:px-5 py-2 text-sm tracking-wide text-pink-50 bg-[#932584]  rounded-lg shrink-0 sm:w-auto mt-6"
        >
          See All
        </button>
      </div>
    </section>
  );
};

export default TopFoodsSection;
