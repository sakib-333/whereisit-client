import React from "react";
import { Link } from "react-router-dom";
import useFetchLatestItems from "../hooks/useFetchLatestItems";

const LatestFindAndLostItems = () => {
  const latestItems = useFetchLatestItems();

  return (
    <div className="mt-20 px-4">
      <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl my-8 underline">
        Latest Find & Lost Items
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {latestItems.map((item) => (
          <div key={item._id} className="card card-compact w-full bg-base-100">
            <figure>
              <img
                src={item?.thumbnail}
                className="w-[200px] h-[200px]"
                alt="thumbnail"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item?.title}</h2>
              <div className="flex">
                <p>
                  <strong>Category: </strong>
                  {item?.category}
                </p>
                <p>
                  <strong>Post type: </strong>
                  {item?.postType}
                </p>
              </div>
              <div className="card-actions justify-end">
                <Link to={`/items/${item._id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link
          to={"/allItems"}
          className="px-4 py-2 bg-sky-500 text-white font-bold hover:bg-sky-600 rounded-lg"
        >
          See all
        </Link>
      </div>
    </div>
  );
};

export default LatestFindAndLostItems;
