import React, { useContext, useState } from "react";
import RecoveryModal from "../components/RecoveryModal";
import { useParams } from "react-router-dom";
import useFetchItem from "../hooks/useFetchItem";
import { AuthContext } from "../provider/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import useFomatDate from "../hooks/useFomatDate";
import Goback from "../components/GoBack";

const PostDetailsPage = () => {
  const { dataLoading } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const itemDetails = useFetchItem(id);
  const formatDate = useFomatDate();

  return dataLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="p-4">
      <Goback />
      <div className="max-w-5xl mx-auto p-4 mt-4 border border-black space-y-4">
        <div className="max-w-sm mx-auto">
          <img
            className="w-full"
            src={itemDetails?.thumbnail}
            alt="thumbnail"
          />
        </div>

        {/* Title start */}
        <h1 className="text-xl">
          <strong>Title:</strong> {itemDetails?.title}
        </h1>
        {/* Title end */}
        {/* Description start */}
        <h1 className="text-xl font-bold">Description:</h1>
        <p className="text-justify">{itemDetails?.description}</p>
        {/* Description start */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Post type start */}
          <h1 className="text-xl">
            <strong>Post type: </strong>
            {itemDetails?.postType}
          </h1>
          {/* Post type end */}
          {/* Category start */}
          <h1 className="text-xl">
            <strong>Category: </strong>
            {itemDetails?.category}
          </h1>
          {/* Category end */}
          {/* Location start */}
          <h1 className="text-xl">
            <strong>Location: </strong>
            {itemDetails?.location}
          </h1>
          {/* Location end */}
          {/* Date lost start */}
          <h1 className="text-xl">
            <strong>Date lost: </strong>
            {itemDetails?.date && formatDate(itemDetails?.date)}
          </h1>
          {/* Date lost end */}
          {/* Contact info star */}
          <h1 className="text-xl font-bold md:col-span-2">Contact info:</h1>
          <span>
            <strong>Name: </strong>
            {itemDetails?.displayName}
          </span>
          <span>
            <strong>Email: </strong>
            {itemDetails?.email}
          </span>
          {/* Contact info end */}
        </div>
        <button
          className="w-full btn-primary text-white btn"
          onClick={() => setIsOpen((c) => !c)}
        >
          {itemDetails?.postType == "lost" ? "Found This!" : "This is Mine!"}
        </button>
      </div>
      {isOpen && <RecoveryModal setIsOpen={setIsOpen} item={itemDetails} />}
    </div>
  );
};

export default PostDetailsPage;
