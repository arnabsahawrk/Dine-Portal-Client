import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Axios/useAxiosSecure";
import useFirebase from "../useFirebase";

const useGetAddedFoods = () => {
  const { user } = useFirebase() || {};
  const axiosSecure = useAxiosSecure();
  const getAddedFoods = async () => {
    try {
      const response = await axiosSecure.get(`/addedFoods/${user?.email}`);
      const { data } = response;
      return data;
    } catch (error) {
      throw new Error(
        error.response.data.message || "Failed to get added foods."
      );
    }
  };

  const { data: addedFoods, isLoading: loadingAddedFoods } = useQuery({
    queryKey: ["addedFoods"],
    queryFn: getAddedFoods,
  });

  return { addedFoods, loadingAddedFoods };
};

export default useGetAddedFoods;
