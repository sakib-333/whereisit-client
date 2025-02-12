import React from "react";
import Banner from "../components/Banner";
import LatestFindAndLostItems from "../components/LatestFindAndLostItems";
import AboutUs from "../components/AboutUs";
import FAQ from "../components/FAQ";
import Review from "../components/Review";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="px-2">
        <LatestFindAndLostItems />
        <AboutUs />
        <Review />
        <FAQ />
      </div>
    </div>
  );
};

export default HomePage;
