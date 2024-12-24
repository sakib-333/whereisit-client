import { useEffect, useState } from "react";
import useAxios from "./useAxios";
import { toast } from "react-toastify";

const useFetchLatestItems = () => {
  const [latestItems, setLatestItems] = useState([]);
  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance
      .post("/latestItems", {})
      .then((res) => {
        setLatestItems(res.data);
      })
      .catch(() => toast.error("Something went wrong."));
  }, []);
  return latestItems;
};

export default useFetchLatestItems;
