import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../provider/AuthContext";
import useAddLostAndFoundItem from "../hooks/useAddLostAndFoundItem";
import Goback from "../components/GoBack";

const AddLostAndFoundItemPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const handleAddLostAndFoundItem = useAddLostAndFoundItem();
  return (
    <div className="p-4">
      <div>
        <Goback />
      </div>
      <div className="max-w-5xl mx-auto p-4 mt-4 border border-black rounded-lg">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-center font-bold">
          Add Lost or Found Item
        </h1>
        <form
          className="w-full grid lg:grid-cols-2 gap-4 items-center"
          onSubmit={handleAddLostAndFoundItem}
        >
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
          {/* Post type end */}

          {/* Thumbnail start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Thumbnail</span>
            </div>
            <input
              type="text"
              name="thumbnail"
              placeholder="Thumbnail URL"
              required
              className="input input-bordered w-full"
            />
          </label>
          {/* Thumbnail end */}

          {/* Title start */}
          <label className="form-control w-full lg:col-span-2">
            <div className="label">
              <span className="label-text font-bold">Title</span>
            </div>
            <input
              type="text"
              name="title"
              required
              placeholder="Found/Lost alert"
              className="input input-bordered w-full"
            />
          </label>
          {/* Title end */}

          {/* Description start */}
          <label className="form-control w-full lg:col-span-2">
            <div className="label">
              <span className="label-text font-bold">Description</span>
            </div>
            <textarea
              rows={5}
              type="text"
              name="description"
              required
              placeholder="Clear description of the item."
              className="textarea textarea-bordered w-full"
            ></textarea>
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
              placeholder="Where the item found/lost"
              className="input input-bordered w-full"
            />
          </label>
          {/* Location end */}

          {/* Date start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Date lost/found</span>
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
          {/* Phone number start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Phone number</span>
            </div>
            <input
              type="text"
              name="phone"
              placeholder="Optional"
              className="input input-bordered w-full"
            />
          </label>
          {/* Phone number end */}

          <button
            type="submit"
            className="w-full btn btn-primary lg:col-span-2"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLostAndFoundItemPage;
