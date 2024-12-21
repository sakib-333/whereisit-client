import { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const regex = /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*\d)).{6,}$/;

const useSignup = () => {
  const { signupUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (e, setPassErrMsg) => {
    e.preventDefault();

    const form = e.target;
    const displayName = form.displayName.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if (regex.test(password)) {
      setPassErrMsg(null);
      signupUser(email, password)
        .then(() => {
          updateUserProfile({ displayName, photoURL }).then(() => {
            toast.success(
              "Thanks for joining us! Your account is ready to go."
            );
            form.reset();
            navigate("/");
          });
        })
        .catch((err) => toast.error(`${err}`));
    } else {
      setPassErrMsg(
        "Must contain at least one lower case, one upper case, one number, and length at least 6 characters."
      );
    }
  };
  return handleSignup;
};

export default useSignup;
