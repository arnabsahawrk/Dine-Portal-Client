import axios from "axios";
import useFirebase from "../useFirebase";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOutUser } = useFirebase() || {};

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          await logOutUser();
          <Navigate to="/login" />;
        }
      }
    );
  }, [logOutUser]);
  return axiosSecure;
};

export default useAxiosSecure;
