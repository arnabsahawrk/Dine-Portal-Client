import { useMutation } from "@tanstack/react-query";
import useAxiosCommon from "../Axios/useAxiosCommon";

const useGetFilterResult = () => {
  const axiosCommon = useAxiosCommon();
  const getFilterResult = async (value) => {
    try {
      const response = await axiosCommon.get(`/foods/filter?f=${value}`);
      const { data } = response;
      return data;
    } catch (err) {
      throw new Error(
        err.response.data.message || "Failed to get filter result"
      );
    }
  };

  const {
    data: filterResult,
    mutateAsync: filterAsync,
    isPending: pendingFilter,
  } = useMutation({
    mutationKey: ["filterFoods"],
    mutationFn: getFilterResult,
  });
  return { filterResult, filterAsync, pendingFilter };
};

export default useGetFilterResult;
