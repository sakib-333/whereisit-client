import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleSignin from "../components/GoogleSignin";
import { Link } from "react-router-dom";
import useSignin from "../hooks/useSignin";
import login from "./assets/login.svg";

const LoginPage = () => {
  const [seePassword, setSeePassword] = useState(false);
  const handleSignin = useSignin();

  return (
    <div className="pt-4 flex text-text bg-background justify-center items-center">
      <div className="card w-full border border-text  max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSignin}>
          <h1 className="text-center font-bold text-xl">Login</h1>
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
            <GoogleSignin />
          </div>
          <p className="text-center">
            <span>Don't have an account? Register </span>
            <Link
              className="text-primary hover:text-secondary"
              to={"/register"}
            >
              here
            </Link>
          </p>
        </form>
      </div>
      <img
        className="max-w-[400px] w-full hidden md:block"
        src={login}
        alt="login"
      />
    </div>
  );
};

export default LoginPage;
