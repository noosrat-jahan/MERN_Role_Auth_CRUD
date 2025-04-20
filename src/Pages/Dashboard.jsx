import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user)
  const [role, setRole] = useState("");

  useEffect(() => {
    axios.get(`https://mern-role-auth-crud-server.vercel.app/users/${user?.email}`).then((res) => {
      console.log("User: ", res.data);
      setRole(res.data.role);
    });
  }, []);


  return (
    <div className="flex">
      <div className="w-3/12 bg-amber-200 min-h-screen">

        {role === "Admin" ? (
          <ul className="pt-10 space-y-5">
            <li>
              <NavLink to="/" className="bg-cyan-300 p-2  rounded">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="register_user" className="bg-cyan-300 p-2 rounded">
                Register Users
              </NavLink>
            </li>
            <li>
              <NavLink to="all_users" className="bg-cyan-300  p-2 rounded">
                View All Users
              </NavLink>
            </li>
            <li>
              <NavLink to="profile" className="bg-cyan-300 p-2 rounded">
                My Profile
              </NavLink>
            </li>
          </ul>
        ) : (
          <>
            {" "}
            {role === "Super Admin" || role === "Manager" ? (
              <ul className="pt-10 space-y-5">
                <li>
                  <NavLink to="/" className="bg-cyan-300 p-2  rounded">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="all_users" className="bg-cyan-300  p-2 rounded">
                    View All Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="profile" className="bg-cyan-300 p-2 rounded">
                    My Profile
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul className="pt-10 space-y-5">
                <li>
                  <NavLink to="/" className="bg-cyan-300 p-2  rounded">
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="profile" className="bg-cyan-300 p-2 rounded">
                    My Profile
                  </NavLink>
                </li>
              </ul>
            )}
          </>
        )}
      </div>
      <div className="w-9/12 mt-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
