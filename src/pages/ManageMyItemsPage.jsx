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
    <div className="p-8">
      <div className="mb-4">
        <Goback />
      </div>
      <div className="overflow-x-auto ">
        <table className="table">
          <thead className="text-center border border-black">
            <tr className="text-primary border border-black">
              <th className="border border-black">#</th>
              <th className="border border-black">Thumbnail</th>
              <th className="border border-black">Category</th>
              <th className="border border-black">Post type</th>
              <th className="border border-black ">Lost Date</th>
              <th className="border border-black">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {myItems.map((item, indx) => (
              <tr key={item._id} className="border border-black">
                <th className="border border-black">{indx + 1}</th>
                <td className="border border-black">
                  <img
                    className="w-12 h-12 rounded-full mx-auto"
                    src={item?.thumbnail}
                    alt="thumbnail"
                  />
                </td>
                <td className="border border-black">{item?.category}</td>
                <td className="border border-black">{item?.postType}</td>
                <td className="border border-black">
                  {formatDate(item?.date)}
                </td>
                <td>
                  <div className="flex gap-1 justify-center">
                    <Link
                      to={`/updateItems/${item?._id}`}
                      className="btn btn-xs btn-warning"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-xs btn-error"
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
