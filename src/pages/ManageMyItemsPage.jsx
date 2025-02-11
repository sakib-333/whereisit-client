import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import NoDataFound from "../components/NoDataFound";
import useFomatDate from "../hooks/useFomatDate";
import useDeleteItem from "../hooks/useDeleteItem";
import useFetchMyItems from "../hooks/useFetchMyItems";
import Goback from "../components/GoBack";

const ManageMyItemsPage = () => {
  const myItems = useFetchMyItems();
  const { dataLoading } = useContext(AuthContext);
  const formatDate = useFomatDate();
  const handleDeleteItem = useDeleteItem();

  return dataLoading ? (
    <LoadingSpinner />
  ) : myItems.length === 0 ? (
    <NoDataFound />
  ) : (
    <div className="p-8 bg-background text-text">
      <div className="mb-4">
        <Goback />
      </div>
      <div className="overflow-x-auto ">
        <table className="table">
          <thead className="text-center border border-text">
            <tr className="text-primary border border-text">
              <th className="border border-text">#</th>
              <th className="border border-text">Thumbnail</th>
              <th className="border border-text">Category</th>
              <th className="border border-text">Post type</th>
              <th className="border border-text">Lost Date</th>
              <th className="border border-text">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {myItems.map((item, indx) => (
              <tr key={item._id} className="border border-text">
                <th className="border border-text">{indx + 1}</th>
                <td className="border border-text">
                  <img
                    className="w-12 h-12 rounded-full mx-auto"
                    src={item?.thumbnail}
                    alt="thumbnail"
                  />
                </td>
                <td className="border border-text">{item?.category}</td>
                <td className="border border-text">{item?.postType}</td>
                <td className="border border-text">{formatDate(item?.date)}</td>
                <td className="border border-text">
                  <div className="flex gap-1 justify-center">
                    <Link
                      to={`/updateItems/${item?._id}`}
                      className="btn btn-xs btn-primary"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleDeleteItem(item?._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMyItemsPage;
