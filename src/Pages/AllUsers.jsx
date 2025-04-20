import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const AllUsers = () => {
  const [alluser, setAllUsers] = useState([]);

  useEffect(() => {
    axios.get("https://mern-role-auth-crud-server.vercel.app/users").then((res) => {
      console.log(res.data);
      setAllUsers(res.data);
    });
  }, []);


   const { user } = useContext(AuthContext);
    const [role, setRole] = useState(null);
  
    useEffect(() => {
      axios.get(`https://mern-role-auth-crud-server.vercel.app/users/${user?.email}`).then((res) => {
        console.log("User: ", res.data);
        setRole(res.data.role);
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
              <th className={role=="Admin" || role == "Super Admin" ? "block": "hidden"}>Action</th>
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
                <td className={role=="Admin" || role == "Super Admin" ? "block": "hidden" }><Link className="text-purple-600 font-bold" to={`/dashboard/all_users/${alluser._id}`}>Edit User</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
