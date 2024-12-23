import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetchAllItems from "../hooks/useFetchAllItems";
import { AuthContext } from "../provider/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";

const LostAndFoundItemsPage = () => {
  const { dataLoading } = useContext(AuthContext);
  const [allItems, setAllItems] = useState([]);
  const fetchedData = useFetchAllItems();

  useEffect(() => {
    setAllItems(fetchedData);
  }, [fetchedData]);

  useEffect(() => {
    console.log(allItems);
  }, [allItems]);

  return dataLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="px-4 pb-8">
      <form className="w-full border py-8 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {allItems.map((item) => (
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
    </div>
  );
};

export default LostAndFoundItemsPage;
