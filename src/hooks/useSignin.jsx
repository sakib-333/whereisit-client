import { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const useSignin = () => {
  const { signinUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const desination = location.state || "/";

  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signinUser(email, password)
      .then(() => {
        toast.success(`Welcome back Glad to see you again.`);
        form.reset();
        navigate(desination);
      })
      .catch((err) => toast.error(`${err}`));
  };
  return handleSignin;
};

export default useSignin;
