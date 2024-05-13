import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../Axios/useAxiosCommon";

const useGetSingleFood = (id) => {
  const axiosCommon = useAxiosCommon();
  const getSingleFood = async () => {
    try {
      const response = await axiosCommon.get(`/allFoods/${id}`);
      const { data } = response;
      return data;
    } catch (err) {
      throw new Error(err.response.data.message || "Failed to get single food");
    }
  };

  //Tan Stack Query
  const {
    data: singleFood,
    isLoading: loadingSingleFood,
    refetch: refetchSingleFood,
  } = useQuery({
    queryKey: ["singleFood"],
    queryFn: getSingleFood,
  });
  return { singleFood, loadingSingleFood, refetchSingleFood };
};

export default useGetSingleFood;
