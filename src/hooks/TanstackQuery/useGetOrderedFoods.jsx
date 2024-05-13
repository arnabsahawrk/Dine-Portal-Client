import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Axios/useAxiosSecure";
import useFirebase from "../useFirebase";

const useGetOrderedFoods = () => {
  const { user } = useFirebase() || {};
  const axiosSecure = useAxiosSecure();
  const getOrderedFoods = async () => {
    try {
      const response = await axiosSecure.get(`/orderedFoods/${user?.email}`);
      const { data } = response;
      return data;
    } catch (error) {
      throw new Error(
        error.response.data.message || "Failed to get ordered foods."
      );
    }
  };

  const { data: orderedFoods, isLoading: loadingOrderedFoods } = useQuery({
    queryKey: ["orderedFoods"],
    queryFn: getOrderedFoods,
  });

  return { orderedFoods, loadingOrderedFoods };
};

export default useGetOrderedFoods;
