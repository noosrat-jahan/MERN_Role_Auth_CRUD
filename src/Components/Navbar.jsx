import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import profile from "../assets/user.png";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  {
    /* <h1>{user.email}</h1> */
  }
  return (
    <div className="h-auto bg-cyan-300 w-full flex justify-end p-4">
      {user ? (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                src={profile}
                alt="User Profile"
                className="border-2 border-blue-700 rounded-full"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Role
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/dashboard">Logout</Link>
            </li>
          </ul>
        </div>
      ) : (
        <Link to="/login" className="btn btn-secondary text-lg">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
