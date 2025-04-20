import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import profile from "../assets/user.png";
import Swal from "sweetalert2";
import axios from "axios";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [role, setRole] = useState(null)

  const navigate = useNavigate()
 
  {
    /* <h1>{user.email}</h1> */
  }

  useEffect(()=>{
    axios.get(`https://mern-role-auth-crud-server.vercel.app/users/${user?.email}`)
    .then((res)=>{
      console.log("User: ",res.data)
      setRole(res.data.role)
    })
  },[])

  const handleLogout = () =>{
    logOutUser().then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sign Out Successfully",
        showConfirmButton: false,
        timer: 3500,
      });
      navigate("/login");
    });
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
                <span className="badge">{role}</span>
              </a>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link onClick={handleLogout} to="/login">
                <button>LogOut</button>
              </Link>
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
