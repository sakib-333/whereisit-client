import React from "react";
import { Link } from "react-router-dom";

const items = [1, 2, 3, 4, 5, 6];

const LatestFindAndLostItems = () => {
  return (
    <div className="mt-20 px-4">
      <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl my-8 underline">
        Latest Find & Lost Items
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {items.map((item) => (
          <div key={item} className="card card-compact bg-base-100">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <Link className="btn btn-primary">View Details</Link>
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
