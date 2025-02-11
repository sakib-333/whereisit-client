import React, { useContext, useState } from "react";
import useFetchMyRecoveredItems from "../hooks/useFetchMyRecoveredItems";
import { AuthContext } from "../provider/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import NoDataFound from "../components/NoDataFound";
import { FaCheck, FaListUl } from "react-icons/fa";
import { FaTableCellsLarge } from "react-icons/fa6";
import Goback from "../components/GoBack";
import useFomatDate from "../hooks/useFomatDate";
import { motion } from "motion/react";
import user from "../assets/user.png";
import { IoLocationSharp } from "react-icons/io5";
import { BiSitemap } from "react-icons/bi";
import { RiDeviceRecoverFill } from "react-icons/ri";

const AllRecoveredItemsPage = () => {
  const { dataLoading } = useContext(AuthContext);
  const myRecovItms = useFetchMyRecoveredItems();
  const [viewType, setViewType] = useState("table");
  const formatDate = useFomatDate();

  console.log(myRecovItms);

  return dataLoading ? (
    <LoadingSpinner />
  ) : myRecovItms.length === 0 ? (
    <NoDataFound />
  ) : (
    <div className="p-8 bg-background text-text">
      <Goback />
      <div className="mb-4 flex justify-end">
        <div className="join">
          <button
            onClick={() => setViewType("layout")}
            className="btn btn-primary join-item"
          >
            {viewType === "layout" && <FaCheck />} <FaListUl />
          </button>
          <button
            onClick={() => setViewType("table")}
            className="btn btn-primary join-item"
          >
            {viewType === "table" && <FaCheck />}
            <FaTableCellsLarge />
          </button>
        </div>
      </div>
      {viewType === "table" && (
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="text-center border border-text">
              <tr className="text-primary border border-text">
                <th className="border border-text">#</th>
                <th className="border border-text">Thumbnail</th>
                <th className="border border-text">Post type</th>
                <th className="border border-text">Recovered location</th>
                <th className="border border-text ">Recovered date</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {myRecovItms.map((recovItm, indx) => (
                <tr key={recovItm._id} className="border border-text">
                  <th className="border border-text">{indx + 1}</th>
                  <td className="border border-text">
                    <img
                      className="w-12 h-12 rounded-full mx-auto"
                      src={recovItm?.item?.thumbnail}
                      alt="thumbnail"
                    />
                  </td>
                  <td className="border border-text">
                    {recovItm?.item?.postType}
                  </td>
                  <td className="border border-text">
                    {recovItm?.recovLocation}
                  </td>
                  <td className="border border-text">
                    {formatDate(recovItm?.recovDate)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {viewType === "layout" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4">
          {myRecovItms.map((recovItm) => (
            // <div
            //   key={recovItm._id}
            //   className="bg-gray-600 text-white mx-auto p-4 max-w-80 space-y-3"
            // >
            //   <h1 className=" text-xl truncate">{recovItm?.item?.title}</h1>
            //   <img
            //     className="w-full aspect-square"
            //     src={recovItm?.item?.thumbnail}
            //     alt="thumbnail"
            //   />
            //   <div className="flex justify-between">
            //     <h1 className="text-xs">
            //       Post type: <strong>{recovItm?.item?.postType}</strong>
            //     </h1>
            //     <h1 className="text-xs">
            //       Category: <strong>{recovItm?.item?.category}</strong>
            //     </h1>
            //   </div>
            //   <div className="flex justify-between">
            //     <h1 className="text-xs">
            //       Date: <strong>{recovItm?.recovDate}</strong>
            //     </h1>
            //     <h1 className="text-xs">
            //       Location: <strong>{recovItm?.recovLocation}</strong>
            //     </h1>
            //   </div>
            // </div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              key={recovItm._id}
              className="text-text p-2 w-full max-w-[300px] bg-background border border-text rounded-md"
            >
              <div className="flex items-center gap-2">
                <img
                  className="w-9 h-9 rounded-full bg-text"
                  src={recovItm?.recovUserImage}
                />
                <div>
                  <h1 className="font-bold">{recovItm?.recovUserName}</h1>
                  <p className="text-[10px]">{recovItm?.recovDate}</p>
                </div>
              </div>
              <h1 className="text-xl truncate text-text font-bold">
                {recovItm?.item?.title}
              </h1>
              <div>
                <img
                  className="w-full h-[150px] object-cover rounded-md"
                  src={recovItm?.item?.thumbnail}
                  alt="thumbnail"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <BiSitemap />{" "}
                  <p className="text-[10px]">{recovItm?.item?.postType}</p>
                </div>
                <div className="flex items-center gap-1">
                  <RiDeviceRecoverFill />{" "}
                  <p className="text-[10px]">{recovItm?.recovUserEmail}</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <IoLocationSharp />{" "}
                  <p className="text-[10px]">{recovItm?.recovLocation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllRecoveredItemsPage;
