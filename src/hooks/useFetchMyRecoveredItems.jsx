import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import useAxios from "./useAxios";
import { toast } from "react-toastify";

const useFetchMyRecoveredItems = () => {
  const [myRecovItms, setMyRecovItems] = useState([]);
  const { user, setDataLoading } = useContext(AuthContext);
  const axiosInstance = useAxios();

  useEffect(() => {
    setDataLoading(true);
    axiosInstance
      .post("/allRecovered", { email: user.email })
      .then((res) => {
        setMyRecovItems(res.data);
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => setDataLoading(false));
  }, []);

  return myRecovItms;
};

export default useFetchMyRecoveredItems;
