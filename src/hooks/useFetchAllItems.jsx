import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import useAxios from "./useAxios";
import { toast } from "react-toastify";

const useFetchAllItems = () => {
  const [data, setData] = useState([]);
  const { setDataLoading } = useContext(AuthContext);
  const axiosInstance = useAxios();

  useEffect(() => {
    setDataLoading(true);
    axiosInstance
      .get("/allItems")
      .then((res) => {
        setData(res.data);
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => setDataLoading(false));
  }, []);

  return data;
};

export default useFetchAllItems;
