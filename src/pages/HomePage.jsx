import React from "react";
import Banner from "../components/Banner";
import LatestFindAndLostItems from "../components/LatestFindAndLostItems";
import AboutUs from "../components/AboutUs";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="px-2">
        <LatestFindAndLostItems />
        <AboutUs />
      </div>
    </div>
  );
};

export default HomePage;
