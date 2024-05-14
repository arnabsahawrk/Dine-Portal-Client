import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../Axios/useAxiosSecure";

const useAddFoodMutation = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const postFoodData = async (formData) => {
    try {
      const response = await axiosSecure.post("/foods", formData);
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
    } catch (error) {
      throw new Error(error.response.data.message || "Failed to add food");
    }
  };

  const { mutateAsync: addFoodAsync, isPending: pendingAddFood } = useMutation({
    mutationFn: postFoodData,
  });
  return { addFoodAsync, pendingAddFood };
};

export default useAddFoodMutation;
