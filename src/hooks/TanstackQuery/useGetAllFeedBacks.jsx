import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../Axios/useAxiosCommon";

const useGetAllFeedBacks = () => {
  const axiosCommon = useAxiosCommon();
  const getAllData = async () => {
    try {
      const response = await axiosCommon.get("/feedback");
      const { data } = response;
      return data;
    } catch (err) {
      throw new Error(
        err.response.data.message || "Failed to get all feedbacks"
      );
    }
  };

  const { data: allFeedbacks, isLoading: loadingFeedbacks } = useQuery({
    queryKey: ["feedback"],
    queryFn: getAllData,
  });
  return { allFeedbacks, loadingFeedbacks };
};

export default useGetAllFeedBacks;
