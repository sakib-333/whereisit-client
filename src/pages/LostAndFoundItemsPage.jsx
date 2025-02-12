import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxios from "../hooks/useAxios";
import LoadingSpinner from "../components/LoadingSpinner";
import NoDataFound from "../components/NoDataFound";
import ItemCard from "../components/ItemCard";

const LostAndFoundItemsPage = () => {
  const [sortingKey, setSortingKey] = useState("all");
  const [searchKey, setSearchKey] = useState("");
  const [selectedPage, setSelectedPage] = useState(0);
  const axiosInstance = useAxios();

  const { data: allItems = [], isLoading } = useQuery({
    queryKey: ["allItems", sortingKey, selectedPage, searchKey],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/allLostAndFountItems?sortingKey=${sortingKey}&pgCnt=${selectedPage}&searchKey=${searchKey}`
      );
      return res.data;
    },
  });

  const { data: pages = [0] } = useQuery({
    queryKey: ["total", sortingKey, searchKey],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/countTotalItems?itemType=${sortingKey}&searchKey=${searchKey}`
      );
      const totalData = Math.ceil(res.data.total / 12);
      const pages = [...Array(totalData).keys()];
      return pages;
    },
  });

  return (
    <div className="w-full py-8 px-2 flex flex-col items-center md:items-start md:flex-row gap-4">
      <div className="w-full max-w-[300px] md:w-2/12 h-20 space-y-3">
        <div>
          <input
            onChange={(e) => {
              setSearchKey(e.target.value);
              setSortingKey("all");
            }}
            type="text"
            placeholder="Post title or location"
            className="input input-sm border border-text bg-background w-full"
          />
        </div>
        <div>
          <select
            onChange={(e) => setSortingKey(e.target.value)}
            className="select select-sm border border-text bg-background w-full"
            defaultValue={""}
          >
            <option value={""} disabled>
              Sort by type
            </option>
            <option value={"all"}>All</option>
            <option value={"lost"}>Lost</option>
            <option value={"found"}>Found</option>
          </select>
        </div>
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : allItems.length ? (
        <div>
          <div className="w-full  gap-3 justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {allItems.map((item) => (
              <ItemCard key={item._id} item={item} />
            ))}
          </div>
          <div className=" flex justify-center mt-4">
            <div className="space-x-1">
              {pages.map((page) => (
                <button
                  onClick={() => setSelectedPage(page)}
                  key={page}
                  className={`btn btn-sm ${
                    selectedPage === page ? "bg-primary" : ""
                  }`}
                >
                  {page + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <NoDataFound />
      )}
    </div>
  );
};

export default LostAndFoundItemsPage;
