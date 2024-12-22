import React, { useContext, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import useGoback from "../hooks/useGoback";
import DatePicker from "react-datepicker";
import { AuthContext } from "../provider/AuthContext";

const UpdateItemPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const handleGoback = useGoback();
  return (
    <div className="p-4">
      <div>
        <button
          className="px-4 w-fit flex items-center gap-1 py-2 bg-sky-500 text-white font-bold hover:bg-sky-600 rounded-lg"
          onClick={handleGoback}
        >
          <IoMdArrowRoundBack /> <span>Back</span>
        </button>
      </div>
      <div className="max-w-5xl mx-auto p-4 mt-4 border border-black rounded-lg">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-center font-bold">
          Update Item
        </h1>
        <form className="w-full grid lg:grid-cols-2 gap-4 items-center">
          {/* Post type start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Post type</span>
            </div>
            <select
              name="postType"
              required
              defaultValue={""}
              className="select select-bordered"
            >
              <option disabled value={""}>
                Select one
              </option>
              <option value="lost">Lost</option>
              <option value="found">Found</option>
            </select>
          </label>
          {/* Post type start */}

          {/* Title start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Title</span>
            </div>
            <input
              type="text"
              name="title"
              required
              placeholder="Found alert"
              className="input input-bordered w-full"
            />
          </label>
          {/* Title end */}

          {/* Description start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Description</span>
            </div>
            <input
              type="text"
              name="description"
              required
              placeholder="A black dog found"
              className="input input-bordered w-full"
            />
          </label>
          {/* Description end */}

          {/* Category start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Category</span>
            </div>
            <select
              required
              name="category"
              defaultValue={""}
              className="select select-bordered"
            >
              <option disabled value={""}>
                Select one
              </option>
              <option value="pet">Pet</option>
              <option value="documents">Documents</option>
              <option value="phone">Phone</option>
              <option value="wallet">Wallet</option>
              <option value="others">Others</option>
            </select>
          </label>
          {/* Category end */}

          {/* Location start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Location</span>
            </div>
            <input
              required
              type="text"
              name="location"
              placeholder="Banani, Dhaka"
              className="input input-bordered w-full"
            />
          </label>
          {/* Location end */}

          {/* Date start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Date Lost</span>
            </div>
            <DatePicker
              className="w-full h-12 px-1 rounded-lg"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              name="date"
            />
          </label>
          {/* Date end */}

          {/* Display name start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Display name</span>
            </div>
            <input
              type="text"
              required
              name="displayName"
              readOnly
              value={user?.displayName}
              placeholder="Sakibur Rahman"
              className="input input-bordered w-full"
            />
          </label>
          {/* Display name end */}

          {/* Email start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Contact Email</span>
            </div>
            <input
              type="email"
              name="email"
              readOnly
              value={user?.email}
              placeholder="sakib@gmail.com"
              className="input input-bordered w-full"
            />
          </label>
          {/* Email end */}
          {/* Thumbnail start */}
          <label className="form-control w-full lg:col-span-2">
            <div className="label">
              <span className="label-text font-bold">Pick a file</span>
            </div>
            <input
              type="file"
              name="thumbnail"
              required
              className="file-input file-input-bordered w-full"
            />
          </label>
          {/* Thumbnail end */}

          <button
            type="submit"
            className="w-full btn btn-primary lg:col-span-2"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItemPage;
