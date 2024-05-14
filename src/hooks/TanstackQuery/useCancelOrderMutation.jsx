import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../Axios/useAxiosSecure";

const useCancelOrderMutation = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const deleteOrder = async (id) => {
    try {
      const response = await axiosSecure.delete(`/orders/${id}`);
      const { data } = response;
      queryClient.invalidateQueries([
        "allFoods",
        "singleFood",
        "topFoods",
        "addedFoods",
        "orderedFoods",
        "feedback",
      ]);
      return data;
    } catch (err) {
      throw new Error(err.response.data.message || "Failed to delete order.");
    }
  };

  const { mutateAsync: deleteOrderAsync, isPending: pendingOrder } =
    useMutation({
      mutationFn: deleteOrder,
    });
  return { deleteOrderAsync, pendingOrder };
};

export default useCancelOrderMutation;
