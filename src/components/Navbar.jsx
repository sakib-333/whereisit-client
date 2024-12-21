import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthContext";
import defaultUserIcon from "../assets/defaultUser.svg";
import { Tooltip } from "react-tooltip";
import useSignout from "../hooks/useSignout";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const handleSignout = useSignout();

  const navItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allItems"}>Lost & Found Items</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-violet-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <h1 className="font-bold text-xl bg-gradient-to-r from-black via-purple-600 to-red-500 text-transparent bg-clip-text">
          WhereIsIt
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end flex gap-2">
        {user ? (
          <>
            <div className="dropdown relative">
              <div tabIndex={0} role="button">
                <img
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user?.displayName}
                  className="w-12 h-12 rounded-full"
                  src={user?.photoURL || defaultUserIcon}
                  alt="photo"
                />

                <Tooltip id="my-tooltip" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box absolute -right-[90px] top-16 z-[10] w-52 p-2 shadow"
              >
                <li>
                  <NavLink to={"/addItems"}>Add Lost & Found Item</NavLink>
                </li>
                <li>
                  <NavLink to={"/allRecovered"}>All Recovered Items</NavLink>
                </li>
                <li>
                  <NavLink to={"/myItems"}>Manage My Items</NavLink>
                </li>
              </ul>
            </div>
            <button className="btn" onClick={handleSignout}>
              Logout
            </button>
          </>
        ) : (
          <Link className="btn bg-primary text-white border-none" to={"/login"}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
