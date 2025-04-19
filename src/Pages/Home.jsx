import React from "react";
import Navbar from "../Components/Navbar";
import auth from "../assets/auth_theme.jpg";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1></h1>
      <div>
        <img src={auth} alt="" className="" />
      </div>
    </div>
  );
};

export default Home;
