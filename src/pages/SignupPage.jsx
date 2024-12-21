import React, { useState } from "react";
import signupLottie from "../assets/signupLottie.json";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleSignin from "../components/GoogleSignin";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import useSignup from "../hooks/useSignup";
import { AuthContext } from "../provider/AuthContext";

const SignupPage = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [passErrMsg, setPassErrMsg] = useState(null);
  const handleSignup = useSignup();

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left max-w-sm">
          <Lottie animationData={signupLottie} loop={true} />
        </div>
        <div className="card w-full max-w-sm shrink-0 shadow-2xl">
          <form
            className="card-body bg-white"
            onSubmit={(e) => handleSignup(e, setPassErrMsg)}
          >
            <h1 className="text-center font-bold text-xl">Sign up</h1>
            <div className="form-control">
              <label className="label font-bold">
                <span className="label-text font-bold">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter full name..."
                className="input input-bordered"
                required
                name="displayName"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">
                <span className="label-text font-bold">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL..."
                className="input input-bordered"
                required
                name="photoURL"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">
                <span className="label-text font-bold">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter email..."
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control relative">
              <label className="label font-bold">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type={seePassword ? "text" : "password"}
                placeholder="Enter password..."
                className="input input-bordered"
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign up</button>
              <GoogleSignin />
            </div>
            <p className="text-center">
              <span>Already have an account? Sign in </span>
              <Link
                className="text-primary hover:text-secondary"
                to={"/signin"}
              >
                here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
