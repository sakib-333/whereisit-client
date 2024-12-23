import React from "react";
import { motion } from "motion/react";
import { easeInOut } from "motion";
import petImage from "../assets/pet.svg";
import documentImage from "../assets/document.svg";
import phoneImage from "../assets/phone.svg";
import walletImage from "../assets/wallet.svg";

const FramerMotion = () => {
  return (
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
  );
};

export default FramerMotion;
