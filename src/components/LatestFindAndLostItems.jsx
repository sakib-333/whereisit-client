import React from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import ItemCard from "./ItemCard";
import LoadingSpinner from "./LoadingSpinner";
import useFetchData from "../hooks/useFetchData";

const LatestFindAndLostItems = () => {
  const {
    data: latestItems,
    isLoading,
    isError,
  } = useFetchData("latestItems", "/latestItems");

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-once="false"
      className="mt-20 px-4"
      style={{ minHeight: "50vh" }}
    >
      <Heading title={"Latest Find & Lost Items"} subtitle="" />
      {isLoading && <LoadingSpinner />}
      {isError && (
        <h1 className="text-center text-xl font-bold">Something went wrong.</h1>
      )}
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-once="false"
        className="w-9/12  mx-auto justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
      >
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
