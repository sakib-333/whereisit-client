import React from "react";
import { motion } from "motion/react";
import user from "../assets/user.png";
import { formatDate } from "../utils/formatDate";
import { BiSitemap } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="text-text p-2 w-full max-w-[300px] bg-background border border-text rounded-md"
    >
      <div className="flex items-center gap-1">
        <img className="w-9 h-9 rounded-full bg-text" src={user} />
        <div>
          <h1 className="font-bold">{item?.displayName}</h1>
          <p className="text-[10px]">{formatDate(item?.date)}</p>
        </div>
      </div>
      <h1 className="text-xl truncate text-text font-bold">{item?.title}</h1>
      <div>
        <img
          className="w-full h-[150px] object-cover"
          src={item?.thumbnail}
          alt="thumbnail"
        />
      </div>
      <div>
        <div className="flex items-center gap-1">
          <BiSitemap /> <p className="text-[10px]">{item?.postType}</p>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-1">
          <IoLocationSharp /> <p className="text-[10px]">{item?.location}</p>
        </div>
      </div>
      <Link
        className="btn-primary p-0 w-full text-center h-[30px] flex items-center justify-center"
        to={`/items/${item._id}`}
      >
        View Details
      </Link>
    </motion.div>
  );
};

export default ItemCard;
