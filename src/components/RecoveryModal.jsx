import React, { useState } from "react";
import DatePicker from "react-datepicker";

const RecoveryModal = ({ setIsOpen }) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmitModal = (e) => {
    e.preventDefault();
    setIsOpen((c) => !c);
    const form = e.target;
    const recoveredLocation = form.recoveredLocation.value;
    const date = form.date.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const userImage = form.userImage.value;

    // console.log({ recoveredLocation, date, userEmail, userName, userImage });
  };

  return (
    <dialog className="modal modal-open">
      <div className="max-h-[400px] overflow-scroll bg-base-200 rounded-xl w-9/12 max-w-5xl p-8">
        <form onSubmit={handleSubmitModal}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Recovered location</span>
            </div>
            <input
              type="text"
              required
              name="recoveredLocation"
              placeholder="Recovered location"
              className="input input-bordered w-full"
            />
          </label>
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
          <h1 className="font-bold my-2">Recovered person info</h1>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">User enail</span>
            </div>
            <input
              type="text"
              name="userEmail"
              placeholder="Recovered location"
              className="input input-bordered w-full"
              defaultValue={"sakib@gmail.com"}
              readOnly
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">User name</span>
            </div>
            <input
              type="text"
              name="userName"
              placeholder="Recovered location"
              className="input input-bordered w-full"
              defaultValue={"Sakibur Rahman"}
              readOnly
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">User image</span>
            </div>
            <input
              type="text"
              name="userImage"
              placeholder="Recovered location"
              className="input input-bordered w-full"
              defaultValue={"www.my-photo.com"}
              readOnly
            />
          </label>
          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-error"
              onClick={() => setIsOpen((c) => !c)}
            >
              Cancel
            </button>
          </div>
        </form>

        {/* <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div> */}
      </div>
    </dialog>
  );
};

export default RecoveryModal;
