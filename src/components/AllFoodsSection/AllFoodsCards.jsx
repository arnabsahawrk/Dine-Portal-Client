import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useGetAllFoods from "../../hooks/TanstackQuery/useGetAllFoods";
import Loader from "../Loader/Loader";
import TopFoodCard from "../TopFoodsSection/TopFoodCard";
import useGetSearchFoods from "../../hooks/TanstackQuery/useGetSearchFoods";
import EmptyFoods from "../Empty/EmptyFoods";

const AllFoodsCards = () => {
  const { allFoods: foods, loadingAllFoods: loading } = useGetAllFoods();
  const { searchResult, searchAsync, pendingSearch } = useGetSearchFoods();
  const [allFoods, setAllFoods] = useState(foods);
  const [loadingAllFoods, setLoadingAllFoods] = useState(loading);
  const [search, SetSearch] = useState("");
  const onChange = ({ target }) => SetSearch(target.value);
  const [clear, setClear] = useState(false);

  const handleSearch = async () => {
    await searchAsync(search);
    setClear(true);
  };

  //Load Search Result Foods
  useEffect(() => {
    setAllFoods(searchResult);
    setLoadingAllFoods(pendingSearch);
  }, [searchResult, pendingSearch]);

  //Load All Foods
  useEffect(() => {
    setAllFoods(foods);
    setLoadingAllFoods(loading);
  }, [foods, loading]);

  //Clear
  const handleClear = () => {
    setAllFoods(foods);
    setLoadingAllFoods(loading);
    SetSearch("");
    setClear(false);
  };

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Search Foods  */}
      <div className="space-y-2">
        <div className="relative mx-auto flex w-full max-w-[24rem]">
          <input
            type="text"
            placeholder="Search Foods"
            value={search}
            onChange={onChange}
            className="min-w-0 pr-20 block w-full px-4 py-2 text-[#932584] bg-[#f8d1e0] border-2 border-[#932584] rounded-lg    focus:border-[#d92775] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-[#d92775] placeholder:text-[#d927754D]"
          />
          <Button
            onClick={handleSearch}
            size="sm"
            disabled={!search}
            className={`!absolute right-1 top-[5px] rounded text-pink-50 ${
              search ? "bg-[#932584]" : "bg-[#932584CC]"
            }`}
          >
            Search
          </Button>
        </div>
        <div className={`justify-center ${clear ? "flex" : "hidden"}`}>
          <Button
            onClick={handleClear}
            size="sm"
            className="bg-[#932584] text-pink-50 font-bold text-sm rounded"
          >
            Clear
          </Button>
        </div>
      </div>
      {/* Foods Cards  */}
      <div>
        {loadingAllFoods ? (
          <Loader />
        ) : (
          <>
            {allFoods?.length ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
                {allFoods?.map((food) => (
                  <TopFoodCard key={food._id} food={food} />
                ))}
              </div>
            ) : (
              <EmptyFoods />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllFoodsCards;
