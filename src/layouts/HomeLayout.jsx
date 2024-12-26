import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const HomeLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      document.title = "Home";
    } else {
      document.title = `${pathname.replace("/", "")}`;
    }
  }, [pathname]);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />
      <div className="min-h-screen bg-gray-300">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
