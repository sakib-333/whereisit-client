import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleSignin = () => {
  const { setLoading, signinWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const destination = location.state || "/";

  const handleSigninWithGoogle = () => {
    signinWithGoogle()
      .then(() => {
        toast.success(`Welcome back! Glad to see you again.`);
        navigate(destination);
      })
      .catch((err) => {
        toast.error(`${err}`);
        setLoading(false);
      });
  };
  return (
    <div className="w-full">
      <div className="divider">Or</div>
      <button
        type="button"
        className="w-full flex items-center btn"
        onClick={handleSigninWithGoogle}
      >
        <FcGoogle />
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default GoogleSignin;
