import React from "react";
import { Link } from "react-router-dom";
import useFetchLatestItems from "../hooks/useFetchLatestItems";
import useFomatDate from "../hooks/useFomatDate";
import { motion } from "motion/react";

const LatestFindAndLostItems = () => {
  const latestItems = useFetchLatestItems();
  const formatDate = useFomatDate();

  return (
    <div className="mt-20 px-4">
      <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl my-8 underline">
        Latest Find & Lost Items
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {latestItems.map((item) => (
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            key={item._id}
            className="bg-gray-600 text-white w-full mx-auto p-4 max-w-80 space-y-3"
          >
            <h1 className=" text-xl truncate">{item?.title}</h1>
            <img
              className="w-full aspect-square"
              src={item?.thumbnail}
              alt="thumbnail"
            />
            <div className="flex justify-between">
              <h1 className="text-xs">Post type: {item?.postType}</h1>
              <h1 className="text-xs">Category: {item?.category}</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-xs">
                {item.postType === "lost" ? "Lost" : "Found"}:{" "}
                {formatDate(item?.date)}
              </h1>
              <h1 className="text-xs">Location: {item?.location}</h1>
            </div>
            <div>
              <Link
                className="px-4 py-1 border border-white hover:text-gray-400"
                to={`/items/${item._id}`}
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link
          to={"/allItems"}
          className="px-4 py-2 bg-gray-600 text-white font-bold hover:bg-gray-500 rounded-lg"
        >
          See all
        </Link>
      </div>
    </div>
  );
};

export default LatestFindAndLostItems;
