import Swal from "sweetalert2";
import useAxios from "./useAxios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";

const useDeleteItem = () => {
  const axiosInstance = useAxios();
  const { user, setMyItems } = useContext(AuthContext);

  const handleDeleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This item will bd deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axiosInstance
            .post(`/deleteItem/${id}`, { email: user.email })
            .then((res) => {
              if (res.data.deletedCount === 1) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
                setMyItems((currItems) =>
                  currItems.filter((item) => item._id !== id)
                );
              }
            });
        }
      })
      .catch(() => toast.error("Something went wrong."));
  };
  return handleDeleteItem;
};

export default useDeleteItem;
