import React, { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthContext";
import useAxios from "./useAxios";
import { toast } from "react-toastify";

const useFetchMyItems = () => {
  const { user, setDataLoading, myItems, setMyItems } = useContext(AuthContext);
  const axiosInstance = useAxios();

  useEffect(() => {
    setDataLoading(true);
    axiosInstance
      .post("/myItems", { email: user.email })
      .then((res) => {
        setMyItems(res.data);
      })
      .catch(() => toast.error("Something went wrong."))
      .finally(() => setDataLoading(false));
  }, []);
  return myItems;
};

export default useFetchMyItems;
