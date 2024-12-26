import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetchAllItems from "../hooks/useFetchAllItems";
import { AuthContext } from "../provider/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import useSearchItem from "../hooks/useSearchItem";
import NoDataFound from "../components/NoDataFound";
import useFomatDate from "../hooks/useFomatDate";
import { motion } from "motion/react";

const LostAndFoundItemsPage = () => {
  const { dataLoading } = useContext(AuthContext);
  const [allItems, setAllItems] = useState([]);
  const [key, setKey] = useState("");
  const { pgCnt, setPgCnt, setInit, totalPageCount } =
    useFetchAllItems(setAllItems);
  const handleSearchItems = useSearchItem();
  const formatDate = useFomatDate();

  useEffect(() => {
    const timerID = setTimeout(() => {
      if (key !== "") {
        handleSearchItems(key, setAllItems);
      } else {
        setInit((c) => !c);
      }
    }, 1000);

    return () => clearTimeout(timerID);
  }, [key]);

  return (
    <div className="px-4 pb-8">
      <div className="w-full py-8 flex items-center justify-center">
        <input
          onChange={(e) => setKey(e.target.value)}
          type="text"
          placeholder="Post title or location"
          className="input input-bordered bg-gray-100 w-full max-w-xs"
        />
      </div>
      {dataLoading ? (
        <LoadingSpinner />
      ) : allItems.length === 0 ? (
        <NoDataFound />
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
            {allItems.map((item) => (
              <motion.div
                key={item._id}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
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
          <div className="mt-8 w-full flex justify-center">
            <div className="join">
              <button
                className="join-item btn"
                onClick={() => setPgCnt((c) => (c > 0 ? c - 1 : 0))}
              >
                «
              </button>
              <button className="join-item btn">Page {pgCnt + 1}</button>
              <button
                className="join-item btn"
                onClick={() =>
                  setPgCnt((c) => (c + 1 < totalPageCount ? c + 1 : c))
                }
              >
                »
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LostAndFoundItemsPage;
