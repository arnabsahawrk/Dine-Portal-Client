import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../Axios/useAxiosSecure";

const useAddOrderMutation = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const postOrderData = async (formData) => {
    try {
      const response = await axiosSecure.post("/orders", formData);
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
      throw new Error(err.response.data.message || "Failed to post order");
    }
  };

  const { mutateAsync: orderAsync, isPending: pendingOrder } = useMutation({
    mutationFn: postOrderData,
  });
  return { orderAsync, pendingOrder };
};

export default useAddOrderMutation;
