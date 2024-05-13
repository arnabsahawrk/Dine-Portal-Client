import { useMutation } from "@tanstack/react-query";
import useAxiosCommon from "../Axios/useAxiosCommon";

const useGetSearchFoods = () => {
  const axiosCommon = useAxiosCommon();
  const searchFoods = async (search) => {
    try {
      const response = await axiosCommon.get(`/foods/search?s=${search}`);
      const { data } = response;
      return data;
    } catch (err) {
      throw new Error(
        err.response.data.message || "Failed to get search result."
      );
    }
  };

  const {
    data: searchResult,
    mutateAsync: searchAsync,
    isPending: pendingSearch,
  } = useMutation({
    mutationKey: ["searchFoods"],
    mutationFn: searchFoods,
  });
  return { searchResult, searchAsync, pendingSearch };
};

export default useGetSearchFoods;
