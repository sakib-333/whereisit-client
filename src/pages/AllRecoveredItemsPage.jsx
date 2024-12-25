import React, { useContext, useState } from "react";
import useFetchMyRecoveredItems from "../hooks/useFetchMyRecoveredItems";
import { AuthContext } from "../provider/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import NoDataFound from "../components/NoDataFound";
import { FaListUl } from "react-icons/fa";
import { FaTableCellsLarge } from "react-icons/fa6";

const AllRecoveredItemsPage = () => {
  const { dataLoading } = useContext(AuthContext);
  const myRecovItms = useFetchMyRecoveredItems();
  const [viewType, setViewType] = useState("table");

  return dataLoading ? (
    <LoadingSpinner />
  ) : myRecovItms.length === 0 ? (
    <NoDataFound />
  ) : (
    <div className="p-8">
      <div className="mb-4 flex justify-end">
        <div className="join">
          <button
            onClick={() => setViewType("layout")}
            className={`btn join-item ${
              viewType === "layout" ? "bg-slate-400" : ""
            }`}
          >
            <FaListUl />
          </button>
          <button
            onClick={() => setViewType("table")}
            className={`btn join-item ${
              viewType === "table" ? "bg-slate-400" : ""
            }`}
          >
            <FaTableCellsLarge />
          </button>
        </div>
      </div>
      {viewType === "table" && (
        <div className="overflow-x-auto bg-slate-300">
          <table className="table table-zebra">
            {/* head */}
            <thead className="bg-slate-100">
              <tr className="text-primary">
                <th>#</th>
                <th>Thumbnail</th>
                <th>Post type</th>
                <th>Recovered location</th>
                <th>Recovered date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myRecovItms.map((recovItm, indx) => (
                <tr key={recovItm._id}>
                  <th>{indx + 1}</th>
                  <td>
                    <img
                      className="w-12 h-12 rounded-full"
                      src={recovItm.item.thumbnail}
                      alt="thumbnail"
                    />
                  </td>
                  <td>{recovItm.item.postType}</td>
                  <td>{recovItm.recovLocation}</td>
                  <td>{recovItm.recovDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {viewType === "layout" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {myRecovItms.map((recovItm) => (
            <div
              key={recovItm._id}
              className="bg-gray-600 text-white mx-auto p-4 max-w-80 space-y-3"
            >
              <h1 className=" text-xl truncate">{recovItm?.item?.title}</h1>
              <img
                className="w-full aspect-square"
                src={recovItm?.item?.thumbnail}
                alt="thumbnail"
              />
              <div className="flex justify-between">
                <h1 className="text-xs">
                  Post type: <strong>{recovItm?.item?.postType}</strong>
                </h1>
                <h1 className="text-xs">
                  Category: <strong>{recovItm?.item?.category}</strong>
                </h1>
              </div>
              <div className="flex justify-between">
                <h1 className="text-xs">
                  Date: <strong>{recovItm?.recovDate}</strong>
                </h1>
                <h1 className="text-xs">
                  Location: <strong>{recovItm?.recovLocation}</strong>
                </h1>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllRecoveredItemsPage;
