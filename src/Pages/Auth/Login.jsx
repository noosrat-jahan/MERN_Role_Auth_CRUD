import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { googleSignIn, signInUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
    .then((result)=>{
        const user = result.user;
        console.log(user);
        setUser(user);
        navigate("/dashboard");
    })
  };

  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
    });
  };
  return (
    <div className="hero-content  w-11/12 mx-auto shadow m-3">
      <Link
        to="/"
        className="btn btn-info mt-2 text-white font-semibold text-lg"
      >
        ⬅️ Back To Home
      </Link>
      <div className="card  w-full lg:max-w-sm shrink-0 shadow-md">
        <form
          onSubmit={handleLogin}
          className="card-body text-black p-0 md:p-4"
        >
          <h1 className="text-3xl text-black font-semibold">Login</h1>

          <div className="form-control mt-5 flex flex-col justify-start">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered "
              required
            />
          </div>
          <div className="form-control mt-5 flex flex-col justify-start">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-[#d269cc] w-full text-white font-semibold">
              Sign In
            </button>
          </div>

          <h3 className="text-[#d269cc]">
            New here?{" "}
            <Link to="/register" className="font-bold">
              {" "}
              Create a New Account{" "}
            </Link>
          </h3>

          <p className="text-black text-xl">OR </p>

          <div className="flex text-[#444444]  w-full justify-center gap-5 mt-3 text-xl">
            <div className=" btn btn-outline w-full">
              <button
                onClick={handleGoogleLogin}
                className="flex items-center gap-3"
              >
                <FcGoogle /> Sign up with Google
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
