import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";

const useSignout = () => {
  const { setLoading, signoutUser } = useContext(AuthContext);

  const handleSignout = () => {
    signoutUser()
      .then(() => toast.success("You’ve logged out successfully"))
      .catch(() => {
        toast.error("Something went wrong");
        setLoading(false);
      });
  };
  return handleSignout;
};

export default useSignout;
