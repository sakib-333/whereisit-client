import React, { useContext, useEffect, useState } from "react";
import useFetchAllItems from "../hooks/useFetchAllItems";
import { AuthContext } from "../provider/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import useSearchItem from "../hooks/useSearchItem";
import NoDataFound from "../components/NoDataFound";
import ItemCard from "../components/ItemCard";

const LostAndFoundItemsPage = () => {
  const { user, dataLoading } = useContext(AuthContext);
  const [allItems, setAllItems] = useState([]);
  const [key, setKey] = useState("");
  const { pgCnt, setPgCnt, setInit, totalPageCount } =
    useFetchAllItems(setAllItems);
  const handleSearchItems = useSearchItem();

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
    <div
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-once="false"
      className="px-4 pb-8"
    >
      <div className="w-full py-8 flex items-center justify-center">
        <input
          onChange={(e) => setKey(e.target.value)}
          type="text"
          placeholder="Post title or location"
          className="input border border-text bg-background w-full max-w-xs"
        />
      </div>
      {dataLoading ? (
        <LoadingSpinner />
      ) : allItems.length === 0 ? (
        <NoDataFound />
      ) : (
        <div className="mx-auto">
          <div className="grid justify-items-center grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center">
            {allItems.map((item) => (
              <ItemCard key={item._id} item={item} />
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
