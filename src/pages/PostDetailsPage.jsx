import React from "react";
import lostAndFoundImg from "../assets/lost-and-found.jpg";
import { IoMdArrowRoundBack } from "react-icons/io";
import useGoback from "../hooks/useGoback";

const PostDetailsPage = () => {
  const handleGoback = useGoback();

  return (
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
          src={lostAndFoundImg}
          alt="thumbnail"
        />
        {/* Title start */}
        <h1 className="text-xl">
          <strong>Title:</strong> Found alert
        </h1>
        {/* Title end */}
        {/* Description start */}
        <h1 className="text-xl font-bold">Description:</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          exercitationem, cum aspernatur neque dolores maiores tempora minima
          nisi. Minima molestiae nostrum minus eum corrupti eveniet laborum id
          nisi nam recusandae!
        </p>
        {/* Description start */}
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-4">
          {/* Post type start */}
          <h1 className="text-xl">
            <strong>Post type: </strong>Found
          </h1>
          {/* Post type end */}
          {/* Category start */}
          <h1 className="text-xl">
            <strong>Category: </strong>Pet
          </h1>
          {/* Category end */}
          {/* Location start */}
          <h1 className="text-xl">
            <strong>Location: </strong>Banani, Dhaka
          </h1>
          {/* Location end */}
          {/* Date lost start */}
          <h1 className="text-xl">
            <strong>Date lost: </strong>10/12/2024
          </h1>
          {/* Date lost end */}
          {/* Contact info star */}
          <h1 className="text-xl font-bold md:col-span-2">Contact info:</h1>
          <span>
            <strong>Name: </strong>Sakibur Rahman
          </span>
          <span>
            <strong>Email: </strong>sakib@gmail.com
          </span>
          {/* Contact info end */}
        </div>
        <button className="w-full bg-primary text-white hover:text-black btn">
          Found This!
        </button>
      </div>
    </div>
  );
};

export default PostDetailsPage;
