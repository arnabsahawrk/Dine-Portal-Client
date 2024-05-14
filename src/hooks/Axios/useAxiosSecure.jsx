import axios from "axios";
import useFirebase from "../useFirebase";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOutUser } = useFirebase() || {};

  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    async (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        await logOutUser();
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
