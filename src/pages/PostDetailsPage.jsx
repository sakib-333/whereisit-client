import React, { useContext, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import useGoback from "../hooks/useGoback";
import RecoveryModal from "../components/RecoveryModal";
import { useParams } from "react-router-dom";
import useFetchItem from "../hooks/useFetchItem";
import { AuthContext } from "../provider/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import useFomatDate from "../hooks/useFomatDate";

const PostDetailsPage = () => {
  const { dataLoading } = useContext(AuthContext);
  const handleGoback = useGoback();
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const itemDetails = useFetchItem(id);
  const formatDate = useFomatDate();

  return dataLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="p-4">
      <button
        className="px-4 w-fit flex items-center gap-1 py-2 bg-sky-500 text-white font-bold hover:bg-sky-600 rounded-lg"
        onClick={handleGoback}
      >
        <IoMdArrowRoundBack /> <span>Back</span>
      </button>
      <div className="max-w-5xl mx-auto p-4 mt-4 border border-black space-y-4">
        <img
          className="max-w-sm mx-auto"
          src={itemDetails?.thumbnail}
          alt="thumbnail"
        />
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
          className="w-full bg-primary text-white hover:text-black btn"
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
