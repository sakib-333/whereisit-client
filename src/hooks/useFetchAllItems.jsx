import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import useAxios from "./useAxios";
import { toast } from "react-toastify";

const useFetchAllItems = (setAllItems) => {
  const [pgCnt, setPgCnt] = useState(0);
  const [init, setInit] = useState(true);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const { setDataLoading } = useContext(AuthContext);
  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance
      .get("/totalData")
      .then((res) => {
        setTotalPageCount(Math.ceil(res?.data?.totalData) / 9);
      })
      .catch(() => cons.log("Something went wrong"));
  }, []);

  useEffect(() => {
    setDataLoading(true);
    axiosInstance
      .post("/allItems", { pgCnt: pgCnt * 9 })
      .then((res) => {
        setAllItems(res.data);
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => setDataLoading(false));
  }, [init, pgCnt]);

  return { pgCnt, setInit, setPgCnt, totalPageCount };
};

export default useFetchAllItems;
