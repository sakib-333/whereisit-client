import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { AuthContext } from "../provider/AuthContext";
import useAxios from "../hooks/useAxios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const RecoveryModal = ({ setIsOpen, item }) => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const axiosInstance = useAxios();
  const { _id } = item;

  const handleSubmitModal = (e) => {
    e.preventDefault();
    setIsOpen((c) => !c);
    const form = e.target;
    const recovLocation = form.recoveredLocation.value;
    const recovDate = form.date.value;
    const recovUserEmail = form.userEmail.value;
    const recovUserName = form.userName.value;
    const recovUserImage = form.userImage.value;

    axiosInstance
      .post(`/updateStatus/${_id}`, { email: user.email })
      .then((res) => {
        if (res.data.acknowledged) {
          const recoveredItem = {
            item,
            recovLocation,
            recovDate,
            recovUserEmail,
            recovUserName,
            recovUserImage,
          };

          axiosInstance
            .post("/recoveredItems", { email: user.email, recoveredItem })
            .then((res) => {
              if (res.data.acknowledged) {
                Swal.fire({
                  title: "Success",
                  text: "Item recovered successfully",
                  icon: "success",
                });
              }
            })
            .catch(() => toast.error("Something went wrong"));
        } else {
          Swal.fire({
            title: "Already recovered",
            text: "Someone has already been recovered this item.",
            icon: "error",
          });
        }
      })
      .catch(() => toast.error("Something went wrong."));

    // console.log(recoveredItem);

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
              <span className="label-text font-bold">Given/Receive Date</span>
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
              defaultValue={user?.email}
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
              defaultValue={user?.displayName}
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
              defaultValue={user?.photoURL}
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
