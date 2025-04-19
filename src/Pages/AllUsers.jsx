import React from "react";

const AllUsers = () => {
  return (
    <div className="ml-5 mx-auto ">
      <h1 className="text-center text-3xl text-blue-600">All users</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
