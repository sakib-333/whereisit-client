import { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import useAxios from "./useAxios";
import { toast } from "react-toastify";

const useSearchItem = () => {
  const { setDataLoading } = useContext(AuthContext);
  const axiosInstance = useAxios();

  const handleSearchItems = (key, setAllItems) => {
    setDataLoading(true);

    axiosInstance
      .post("/search", { key })
      .then((res) => {
        setAllItems(res.data);
      })
      .catch(() => toast.error("Something went wrong."))
      .finally(() => setDataLoading(false));
  };
  return handleSearchItems;
};

export default useSearchItem;
