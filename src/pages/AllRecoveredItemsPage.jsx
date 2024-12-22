import React from "react";

const AllRecoveredItemsPage = () => {
  return (
    <div className="p-8">
      <div className="overflow-x-auto bg-slate-300">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-slate-100">
            <tr className="text-primary">
              <th>#</th>
              <th>Thumbnail</th>
              <th>Category</th>
              <th>Post type</th>
              <th>Lost Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component"
                />
              </td>
              <td>Found</td>
              <td>Wallet</td>
              <td>10/12/2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRecoveredItemsPage;
