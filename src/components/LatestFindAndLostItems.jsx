import React from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import ItemCard from "./ItemCard";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import LoadingSpinner from "./LoadingSpinner";

const LatestFindAndLostItems = () => {
  const axiosInstance = useAxios();
  const {
    data: latestItems = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["latestItems"],
    queryFn: async () => {
      const res = await axiosInstance.post("/latestItems");
      return res.data;
    },
  });

  if (isError) {
    return (
      <h1 className="text-center text-xl font-bold">Sorry! No data found.</h1>
    );
  }
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="mt-20 px-4" style={{ minHeight: "50vh" }}>
      <Heading title={"Latest Find & Lost Items"} subtitle="" />
      <div className="justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {latestItems.map((item) => (
          <ItemCard item={item} key={item._id} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link to={"/allItems"} className="btn-primary">
          See all
        </Link>
      </div>
    </div>
  );
};

export default LatestFindAndLostItems;
