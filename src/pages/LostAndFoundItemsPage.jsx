import React from "react";
import { Link } from "react-router-dom";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const LostAndFoundItemsPage = () => {
  return (
    <div className="px-4 pb-8">
      <form className="w-full border py-8 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {items.map((item) => (
          <div key={item} className="card card-compact w-full bg-base-100">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <p>
                <strong>Category: </strong>Pet
              </p>
              <div className="card-actions justify-end">
                <Link to={"/items/5"} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LostAndFoundItemsPage;
