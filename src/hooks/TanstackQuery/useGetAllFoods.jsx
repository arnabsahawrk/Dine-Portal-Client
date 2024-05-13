import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../Axios/useAxiosCommon";

const useGetAllFoods = () => {
  const axiosCommon = useAxiosCommon();
  const getAllData = async () => {
    try {
      const response = await axiosCommon.get("/allFoods");
      const { data } = response;
      return data;
    } catch (err) {
      throw new Error(err.response.data.message || "Failed to get all foods");
    }
  };

  const {
    data: allFoods,
    isLoading: loadingAllFoods,
    refetch: refetchAllFoods,
  } = useQuery({
    queryKey: ["allFoods"],
    queryFn: getAllData,
  });
  return { allFoods, loadingAllFoods, refetchAllFoods };
};

export default useGetAllFoods;
