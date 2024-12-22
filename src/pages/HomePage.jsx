import React from "react";
import Banner from "../components/Banner";
import LatestFindAndLostItems from "../components/LatestFindAndLostItems";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="px-2">
        <LatestFindAndLostItems />
      </div>
    </div>
  );
};

export default HomePage;
