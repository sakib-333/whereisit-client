import React, { useContext, useState } from "react";
import useFetchMyRecoveredItems from "../hooks/useFetchMyRecoveredItems";
import { AuthContext } from "../provider/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import NoDataFound from "../components/NoDataFound";
import { FaCheck, FaListUl } from "react-icons/fa";
import { FaTableCellsLarge } from "react-icons/fa6";
import Goback from "../components/GoBack";
import useFomatDate from "../hooks/useFomatDate";

const AllRecoveredItemsPage = () => {
  const { dataLoading } = useContext(AuthContext);
  const myRecovItms = useFetchMyRecoveredItems();
  const [viewType, setViewType] = useState("table");
  const formatDate = useFomatDate();

  return dataLoading ? (
    <LoadingSpinner />
  ) : myRecovItms.length === 0 ? (
    <NoDataFound />
  ) : (
    <div className="p-8">
      <Goback />
      <div className="mb-4 flex justify-end">
        <div className="join">
          <button
            onClick={() => setViewType("layout")}
            className="btn join-item"
          >
            {viewType === "layout" && <FaCheck />} <FaListUl />
          </button>
          <button
            onClick={() => setViewType("table")}
            className="btn join-item"
          >
            {viewType === "table" && <FaCheck />}
            <FaTableCellsLarge />
          </button>
        </div>
      </div>
      {viewType === "table" && (
        <div className="overflow-x-auto bg-slate-300">
          <table className="table">
            <thead className="text-center border border-black">
              <tr className="text-primary border border-black">
                <th className="border border-black">#</th>
                <th className="border border-black">Thumbnail</th>
                <th className="border border-black">Post type</th>
                <th className="border border-black">Recovered location</th>
                <th className="border border-black ">Recovered date</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {myRecovItms.map((recovItm, indx) => (
                <tr key={recovItm._id} className="border border-black">
                  <th className="border border-black">{indx + 1}</th>
                  <td className="border border-black">
                    <img
                      className="w-12 h-12 rounded-full mx-auto"
                      src={recovItm?.item?.thumbnail}
                      alt="thumbnail"
                    />
                  </td>
                  <td className="border border-black">
                    {recovItm?.item?.postType}
                  </td>
                  <td className="border border-black">
                    {recovItm?.recovLocation}
                  </td>
                  <td className="border border-black">
                    {formatDate(recovItm?.recovDate)}
                  </td>
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
