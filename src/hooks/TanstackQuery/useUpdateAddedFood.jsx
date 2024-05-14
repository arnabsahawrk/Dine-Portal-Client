import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../Axios/useAxiosSecure";

const useUpdateAddedFood = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const updateAddedFoods = async ({ _id, formData }) => {
    try {
      const response = await axiosSecure.patch(`/addedFoods/${_id}`, formData);

      const { data } = response;
      queryClient.invalidateQueries([
        "allFoods",
        "singleFood",
        "topFoods",
        "addedFoods",
        "orderedFoods",
        "feedback",
        "feedbackCount",
      ]);
      return data;
    } catch (err) {
      throw new Error(
        err.response.data.message || "Failed to update added food"
      );
    }
  };

  const { mutateAsync: updateFoods, isPending: pendingFoods } = useMutation({
    mutationFn: updateAddedFoods,
  });
  return { updateFoods, pendingFoods };
};

export default useUpdateAddedFood;
