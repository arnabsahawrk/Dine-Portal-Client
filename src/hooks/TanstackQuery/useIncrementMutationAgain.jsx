import useAxiosSecure from "../Axios/useAxiosSecure";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useIncrementMutationAgain = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const patchData = async (formData) => {
    try {
      const response = await axiosSecure.patch("/cancelOrder", formData);
      const { data } = response;
      queryClient.invalidateQueries([
        "allFoods",
        "singleFood",
        "topFoods",
        "addedFoods",
        "orderedFoods",
      ]);
      return data;
    } catch (err) {
      throw new Error(
        err.response.data.message || "Failed to cancel order increment"
      );
    }
  };

  const {
    mutateAsync: incrementCancelAsync,
    isPending: pendingCancelIncrement,
  } = useMutation({
    mutationFn: patchData,
  });
  return { incrementCancelAsync, pendingCancelIncrement };
};

export default useIncrementMutationAgain;
