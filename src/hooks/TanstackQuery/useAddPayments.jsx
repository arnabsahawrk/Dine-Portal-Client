import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../Axios/useAxiosSecure";

const useAddPayments = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const postPaymentData = async (formData) => {
    try {
      const response = await axiosSecure.post("/payments", formData);
      const { data } = response;
      queryClient.invalidateQueries([
        "allFoods",
        "singleFood",
        "topFoods",
        "addedFoods",
        "orderedFoods",
        "feedback",
        "feedbackCount",
        "payments",
      ]);
      return data;
    } catch (err) {
      throw new Error(
        err.response.data.message || "Failed to post payments data"
      );
    }
  };

  const { mutateAsync: paymentAsync } = useMutation({
    mutationFn: postPaymentData,
  });
  return paymentAsync;
};

export default useAddPayments;
