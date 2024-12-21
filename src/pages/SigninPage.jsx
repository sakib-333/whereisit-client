import Lottie from "lottie-react";
import React, { useState } from "react";
import signinLottie from "../assets/signinLottie.json";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleSignin from "../components/GoogleSignin";
import { Link } from "react-router-dom";
import useSignin from "../hooks/useSignin";

const SigninPage = () => {
  const [seePassword, setSeePassword] = useState(false);
  const handleSignin = useSignin();

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left max-w-sm">
          <Lottie animationData={signinLottie} loop={true} />
        </div>
        <div className="card w-full bg-white max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSignin}>
            <h1 className="text-center font-bold text-xl">Sign in</h1>
            <div className="form-control">
              <label className="label font-bold">
                <span className="label-text font-bold">Email</span>
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign in</button>
              <GoogleSignin />
            </div>
            <p className="text-center">
              <span>Don't have an account? Sign up </span>
              <Link
                className="text-primary hover:text-secondary"
                to={"/signup"}
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

export default SigninPage;
