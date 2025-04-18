import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/register",
      element: <Register></Register>,
    },
  ]);

export default Routes;