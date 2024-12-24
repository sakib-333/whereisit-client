import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import useAxios from "./useAxios";
import { toast } from "react-toastify";

const useFetchItem = (item_id) => {
  const { user, setDataLoading } = useContext(AuthContext);
  const [itemDetails, setItemDetails] = useState({});
  const axiosInstance = useAxios();

  useEffect(() => {
    setDataLoading(true);

    axiosInstance
      .post(`/items/${item_id}`, { email: user.email })
      .then((res) => {
        setItemDetails(res.data);
      })
      .catch(() => toast.error("Something went wrong."))
      .finally(()=>setDataLoading(false));
  }, []);

  return itemDetails;
};

export default useFetchItem;
