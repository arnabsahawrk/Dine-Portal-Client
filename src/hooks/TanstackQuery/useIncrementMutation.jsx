import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../Axios/useAxiosSecure";

const useIncrementMutation = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const patchData = async (formData) => {
    try {
      const response = await axiosSecure.patch("/foodSold", formData);
      const { data } = response;
      queryClient.invalidateQueries([
        "allFoods",
        "singleFood",
        "topFoods",
        "addedFoods",
      ]);
      return data;
    } catch (err) {
      throw new Error(err.response.data.message || "Failed to increment");
    }
  };

  const { mutateAsync: incrementAsync, isPending: pendingIncrement } =
    useMutation({
      mutationFn: patchData,
    });
  return { incrementAsync, pendingIncrement };
};

export default useIncrementMutation;
