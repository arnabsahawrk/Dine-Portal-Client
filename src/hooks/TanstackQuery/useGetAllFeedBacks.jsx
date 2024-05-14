import { useMutation } from "@tanstack/react-query";
import useAxiosCommon from "../Axios/useAxiosCommon";

const useGetAllFeedBacks = () => {
  const axiosCommon = useAxiosCommon();
  const getAllData = async ({ skip, limit }) => {
    try {
      const response = await axiosCommon.get(
        `/feedback?skip=${skip}&limit=${limit}`
      );
      const { data } = response;
      return data;
    } catch (err) {
      throw new Error(
        err.response.data.message || "Failed to get all feedbacks"
      );
    }
  };

  const {
    mutateAsync: feedbacksAsync,
    data: allFeedbacks,
    isPending: pendingFeedbacks,
  } = useMutation({
    mutationKey: ["feedback"],
    mutationFn: getAllData,
  });
  return { feedbacksAsync, allFeedbacks, pendingFeedbacks };
};

export default useGetAllFeedBacks;
