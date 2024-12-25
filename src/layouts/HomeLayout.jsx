import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const HomeLayout = () => {
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
