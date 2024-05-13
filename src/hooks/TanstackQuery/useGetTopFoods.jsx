import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../Axios/useAxiosCommon";

const useGetTopFoods = (skip = 0, limit = 0) => {
  const axiosCommon = useAxiosCommon();
  const topFoodsFetch = async () => {
    try {
      const response = await axiosCommon.get(
        `/topFoods?skip=${skip}&limit=${limit}`
      );
      const { data } = response;
      return data;
    } catch (err) {
      throw new Error(err.response.data.message || "Failed to get top foods");
    }
  };

  //Tan Stack Query
  const {
    data: topFoods,
    isLoading: loadingTopFoods,
    refetch: refetchTopFoods,
  } = useQuery({
    queryKey: ["topFoods"],
    queryFn: topFoodsFetch,
  });

  return { topFoods, loadingTopFoods, refetchTopFoods };
};

export default useGetTopFoods;
