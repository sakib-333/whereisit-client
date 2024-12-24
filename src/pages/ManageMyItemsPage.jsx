import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useFetchMyItems from "../hooks/useFetchMyItems";
import { AuthContext } from "../provider/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import NoDataFound from "../components/NoDataFound";

const ManageMyItemsPage = () => {
  const myItems = useFetchMyItems();
  const { dataLoading } = useContext(AuthContext);

  return dataLoading ? (
    <LoadingSpinner />
  ) : myItems.length === 0 ? (
    <NoDataFound />
  ) : (
    <div className="p-8">
      <div className="overflow-x-auto bg-slate-300">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-slate-100">
            <tr className="text-primary">
              <th>#</th>
              <th>Thumbnail</th>
              <th>Category</th>
              <th>Post type</th>
              <th>Lost Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myItems.map((item, indx) => (
              <tr key={item._id}>
                <th>{indx + 1}</th>
                <td>
                  <img
                    className="w-12 h-12 rounded-full"
                    src={item?.thumbnail}
                    alt="thumbnail"
                  />
                </td>
                <td>{item?.category}</td>
                <td>{item?.postType}</td>
                <td>{item?.date}</td>
                <td className="flex gap-1">
                  <Link
                    to={`/updateItems/${item?._id}`}
                    className="btn btn-xs btn-warning"
                  >
                    Update
                  </Link>
                  <button className="btn btn-xs btn-error">Delete</button>
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
