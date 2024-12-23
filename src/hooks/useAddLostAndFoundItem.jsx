import { toast } from "react-toastify";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import Swal from "sweetalert2";

const useAddLostAndFoundItem = () => {
  const axiosInstance = useAxios();
  const { user } = useContext(AuthContext);

  const handleAddLostAndFoundItem = (e) => {
    e.preventDefault();
    const form = e.target;

    const postType = form.postType.value;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const date = form.date.value;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const thumbnail = form.thumbnail.value;

    const data = {
      email: user.email,
      newItem: {
        postType,
        title,
        description,
        category,
        location,
        date,
        displayName,
        email,
        thumbnail,
        status: "not recovered",
      },
    };

    axiosInstance
      .post("/addItems", data)
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            title: "Success",
            text: "Your item added successfully.",
            icon: "success",
          });
          form.reset();
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch(() => toast.error("Something went wrong"));
  };
  return handleAddLostAndFoundItem;
};

export default useAddLostAndFoundItem;
