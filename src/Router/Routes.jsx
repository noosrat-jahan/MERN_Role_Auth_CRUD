import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Dashboard from "../Pages/Dashboard";
import Errorpage from "../Pages/Errorpage";
import AllUsers from "../Pages/AllUsers";
import MyProfile from "../Pages/MyProfile";
import Register_user from "../Pages/Register_user";
import DashboardHome from "../Pages/DashboardHome";
import EditUser from "../Pages/EditUser";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "all_users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "register_user",
        element: <Register_user></Register_user>,
      },
      {
        path: "all_users/:id",
        element: <EditUser></EditUser>,
      },
      {
        path: "profile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "*",
    element: <Errorpage></Errorpage>,
  },
]);

export default Routes;
