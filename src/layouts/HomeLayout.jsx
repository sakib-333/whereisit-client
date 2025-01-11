import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { FaMoon, FaSun } from "react-icons/fa";

const HomeLayout = () => {
  const { pathname } = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      document.title = "Home";
    } else {
      document.title = `${pathname.replace("/", "")}`;
    }
  }, [pathname]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />
      <div className="min-h-screen bg-background mt-16 relative">
        <Outlet />
        <button
          className="fixed p-2 rounded-full bottom-4 right-4 z-20 bg-background text-text"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
