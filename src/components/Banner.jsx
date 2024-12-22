import React from "react";
import { motion } from "motion/react";
import bannerImage from "../assets/banner.jpg";
import petImage from "../assets/pet.svg";
import documentImage from "../assets/document.svg";
import phoneImage from "../assets/phone.svg";
import walletImage from "../assets/wallet.svg";
import { easeInOut } from "motion";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="px-4 md:px-12 w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="flex flex-col md:flex-1 space-y-4 mt-8 sm:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Lost Something?
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Found Something?
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
        <div className="flex items-center justify-center md:flex-1 my-8 md:my-0">
          <motion.img
            animate={{
              x: [0, -10, 0],
              transition: { repeat: Infinity, duration: 3, ease: easeInOut },
            }}
            className="w-16 h-16"
            src={petImage}
            alt="pet"
          />
          <div className="flex-col">
            <motion.img
              animate={{
                y: [0, -10, 0],
                transition: { repeat: Infinity, duration: 3, ease: easeInOut },
              }}
              className="w-16 h-16"
              src={documentImage}
              alt="document"
            />
            <motion.img
              animate={{
                y: [20, 30, 20],
                transition: { repeat: Infinity, duration: 3, ease: easeInOut },
              }}
              className="w-16 h-16"
              src={phoneImage}
              alt="phone"
            />
          </div>
          <motion.img
            animate={{
              x: [0, 10, 0],
              transition: { repeat: Infinity, duration: 3, ease: easeInOut },
            }}
            className="w-16 h-16"
            src={walletImage}
            alt="wallet"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
