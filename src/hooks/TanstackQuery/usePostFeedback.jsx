import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../Axios/useAxiosSecure";

const usePostFeedback = () => {
  const axiosSecure = useAxiosSecure();
  const postFeedback = async (formData) => {
    try {
      const response = await axiosSecure.post("/feedback", formData);
      const { data } = response;
      return data;
    } catch (error) {
      throw new Error(
        error.response.data.message || "Failed to post feedback."
      );
    }
  };

  const { mutateAsync: feedbackAsync, isPending: pendingFeedback } =
    useMutation({
      mutationKey: ["feedback"],
      mutationFn: postFeedback,
    });
  return { feedbackAsync, pendingFeedback };
};

export default usePostFeedback;
