import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useGetAllFoods from "../../hooks/TanstackQuery/useGetAllFoods";
import Loader from "../Loader/Loader";
import TopFoodCard from "../TopFoodsSection/TopFoodCard";
import useGetSearchFoods from "../../hooks/TanstackQuery/useGetSearchFoods";
import EmptyFoods from "../Empty/EmptyFoods";
import useGetFilterResult from "../../hooks/TanstackQuery/useGetFilterResult";

const AllFoodsCards = () => {
  const { allFoods: foods, loadingAllFoods: loading } = useGetAllFoods();
  const { searchResult, searchAsync, pendingSearch } = useGetSearchFoods();
  const { filterResult, filterAsync, pendingFilter } = useGetFilterResult();
  const [allFoods, setAllFoods] = useState(foods);
  const [loadingAllFoods, setLoadingAllFoods] = useState(loading);
  const [search, SetSearch] = useState("");
  const onChange = ({ target }) => SetSearch(target.value);
  const [clear, setClear] = useState(false);

  //Search
  const handleSearch = async () => {
    await searchAsync(search);
    setClear(true);
  };

  //Filter
  const handleFilter = async (value) => {
    await filterAsync(value);
    setClear(true);
  };

  //Load Search Result Foods
  useEffect(() => {
    setAllFoods(filterResult);
    setLoadingAllFoods(pendingFilter);
  }, [filterResult, pendingFilter]);

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
        <div className="flex justify-center items-center gap-2">
          <Menu>
            <MenuHandler>
              <Button
                size="sm"
                className="bg-[#932584] text-pink-50 font-bold text-sm rounded"
              >
                Filter
              </Button>
            </MenuHandler>
            <MenuList className="bg-pink-50 border border-[#932584] shadow-xl">
              <MenuItem
                onClick={() => handleFilter("low")}
                className="hover:bg-none hover:bg-opacity-0 focus:bg-none focus:bg-opacity-0 active:bg-none active:bg-opacity-0 py-1"
              >
                <Typography
                  variant="paragraph"
                  className="font-medium text-[#932584] font-raleway hover:text-[#d92775]"
                >
                  Low To High Price
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => handleFilter("high")}
                className="hover:bg-none hover:bg-opacity-0 focus:bg-none focus:bg-opacity-0 active:bg-none active:bg-opacity-0 py-1"
              >
                <Typography
                  variant="paragraph"
                  className="font-medium text-[#932584] font-raleway hover:text-[#d92775]"
                >
                  High To Low Price
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => handleFilter("sold")}
                className="hover:bg-none hover:bg-opacity-0 focus:bg-none focus:bg-opacity-0 active:bg-none active:bg-opacity-0 py-1"
              >
                <Typography
                  variant="paragraph"
                  className="font-medium text-[#932584] font-raleway hover:text-[#d92775]"
                >
                  Top Foods On Sold
                </Typography>
              </MenuItem>
            </MenuList>
          </Menu>
          <Button
            onClick={handleClear}
            size="sm"
            className={`bg-[#932584] text-pink-50 font-bold text-sm rounded ${
              clear ? "" : "hidden"
            }`}
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
