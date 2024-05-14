import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../Axios/useAxiosCommon";

const useGetTotalFeedbackCount = () => {
  const axiosCommon = useAxiosCommon();
  const feedbackCount = async () => {
    try {
      const response = await axiosCommon.get("/feedback/count");
      const { data } = response;
      return data;
    } catch (err) {
      throw new Error(
        err.response.data.message || "Failed to get feedback count"
      );
    }
  };

  const { data: countFeedback, isLoading: loadingCount } = useQuery({
    queryKey: ["feedbackCount"],
    queryFn: feedbackCount,
  });
  return { countFeedback, loadingCount };
};

export default useGetTotalFeedbackCount;
