import React from "react";
import petImage from "../assets/pet.svg";
import bannerImage from "../assets/banner.jpg";

const FirstSlider = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div className="px-4 md:px-12 w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="flex flex-col md:flex-1 space-y-4 mt-8 sm:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Lost your pet?
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Please let us know?
          </h1>
          <p className="text-xs">
            Connect with your community to reunite items with their rightful
            owners.
          </p>
          <a
            href="#about-us"
            className="px-4 w-fit py-2 bg-sky-500 text-white font-bold hover:bg-sky-600 rounded-lg"
          >
            Learn More
          </a>
        </div>
        <img className="mt-4 md:mt-0 w-40 h-40" src={petImage} alt="pet" />
      </div>
    </div>
  );
};

export default FirstSlider;
