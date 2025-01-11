import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useFetchData = (key, url) => {
  const axiosInstance = useAxios();
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const res = await axiosInstance.post(url);
      return res.data;
    },
  });
  return { data, isLoading, isError };
};

export default useFetchData;
