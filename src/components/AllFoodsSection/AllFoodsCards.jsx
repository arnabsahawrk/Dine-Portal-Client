import { Button } from "@material-tailwind/react";
import { useState } from "react";
import TopFoodsCards from "../TopFoodsSection/TopFoodsCards";

const AllFoodsCards = () => {
  const [search, SetSearch] = useState("");
  const onChange = ({ target }) => SetSearch(target.value);

  const handleSearch = () => {
    SetSearch("");
  };
  return (
    <div className="space-y-4 md:space-y-6">
      {/* Search Foods  */}
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
      {/* Foods Cards  */}
      <div>
        <TopFoodsCards />
      </div>
    </div>
  );
};

export default AllFoodsCards;
