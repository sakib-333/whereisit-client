import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleSignin from "../components/GoogleSignin";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";
import signupBanner from "./assets/signup.svg";

const RegisterPage = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [passErrMsg, setPassErrMsg] = useState(null);
  const handleSignup = useSignup();

  return (
    <div className="py-4 px-2 flex text-text bg-background justify-center items-center">
      <div className="card w-full max-w-lg shadow-2xl">
        <form
          className="card-body bg-background border border-text rounded-md text-text"
          onSubmit={(e) => handleSignup(e, setPassErrMsg)}
        >
          <h1 className="text-center font-bold text-xl">Register</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
            <div className="form-control">
              <label className="label font-bold">
                <span className="font-bold">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter full name..."
                className="input bg-background border border-text"
                required
                name="displayName"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">
                <span className="font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter email..."
                className="input bg-background border border-text"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">
                <span className="font-bold">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL..."
                className="input bg-background border border-text"
                required
                name="photoURL"
              />
            </div>
            <div className="form-control relative">
              <label className="label font-bold">
                <span className="font-bold">Password</span>
              </label>
              <input
                type={seePassword ? "text" : "password"}
                placeholder="Enter password..."
                className="input bg-background border border-text"
                required
                name="password"
              />
              <button
                className="absolute right-4 top-[52px]"
                type="button"
                onClick={() => setSeePassword((c) => !c)}
              >
                {seePassword ? <FaEye /> : <FaEyeSlash />}
              </button>
              {passErrMsg && (
                <p className="text-red-500 text-justify">{passErrMsg}</p>
              )}
            </div>
            <div className="form-control mt-6 md:col-span-2">
              <button className="btn btn-primary">Register</button>
              <GoogleSignin />
            </div>
          </div>

          <p className="text-center">
            <span>Already have an account? Login </span>
            <Link className="text-primary hover:text-secondary" to={"/login"}>
              here
            </Link>
          </p>
        </form>
      </div>
      <img
        className="max-w-[400px] w-full hidden md:block"
        src={signupBanner}
        alt="banner"
      />
    </div>
  );
};

export default RegisterPage;
