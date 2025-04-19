import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

  const {createUser, setUser, googleSignIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)

    createUser(data.email, data.password)
    .then((result) =>{
      const user = result.user
      console.log(user)
      setUser(user)
      navigate("/dashboard")
    })
  };

  //   console.log(watch("example")) // watch input value by passing the name of it


  const handleGoogleLogin = () =>{
    googleSignIn()
    .then((result)=>{
      const user = result.user 
      setUser(user)
      console.log(user)
    })
  }


  return (
    <div className="mx-auto w-8/12 border  shadow-md">
      {/* /* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <div className="card mx-auto w-full lg:max-w-md shrink-0 ">
        <h1 className="font-bold text-2xl">Register</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body text-black p-0 md:p-4 space-y-2"
        >
          {/* name field  */}
          <label htmlFor="" className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            defaultValue=""
            type="text"
            {...register("name", { required: true })}
            className="input input-bordered w-full"
            placeholder="Enter Your Name"
          />
          {errors.name && <span className="text-red-600">Name is required</span>}


          {/* email field  */}
          <label htmlFor="" className="label">
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input input-bordered w-full"
             placeholder="Enter Your Email"
          />
          {/* errors will return when field validation fails  */}
          {errors.email && <span className="text-red-600">Email is required</span>}

          {/* password field  */}
          <label htmlFor="" className="label">
            Password
          </label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="input input-bordered w-full"
            placeholder="Enter Password"
          />
          {/* errors will return when field validation fails  */}
          {errors.password && <span className="text-red-600">Password is required</span>}

          <input type="submit" value="Sign Up" className="bg-pink-500 h-10 text-white" />

          <h3 className="text-[#d269cc]">
            Already have an account?{" "}
            <Link to="/login" className="font-bold">
              {" "}
              Sign In{" "}
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

export default Register;
