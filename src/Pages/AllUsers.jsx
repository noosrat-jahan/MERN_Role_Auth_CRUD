import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllUsers = () => {
  const [alluser, setAllUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      console.log(res.data);
      setAllUsers(res.data);
    });
  }, []);

  return (
    <div className=" mx-auto ">
      <h1 className="text-center text-3xl text-blue-600 font-bold font-serif">All users</h1>

      <div className="overflow-x-auto p-5">
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {alluser.map((alluser, idx) => (
              <tr key={alluser._id}>
                <th>{idx + 1}</th>
                <td>{alluser.name}</td>
                <td>{alluser.email}</td>
                <td>{alluser.role}</td>
                <td className="text-purple-600 font-bold"><Link to={`/dashboard/all_users/${alluser._id}`}>Edit User</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
