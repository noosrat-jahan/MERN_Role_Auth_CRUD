import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Register_user = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      setUser(user);
      navigate("/dashboard/all_users");

      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
      };

      axios
        .post("http://localhost:5000/users", userInfo)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User Registration is Successfull",
              showConfirmButton: false,
              timer: 3500,
            });
            // navigate(from, { replace: true });
          }
        })

        .catch((err) => {
          console.log("Registration Error:", err.message);
        });
    });
  };

  return (
    <div>
      <div className=" mt-2 mx-auto w-8/12 border  shadow-md">
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
              placeholder="Enter Name"
            />
            {errors.name && (
              <span className="text-red-600">Name is required</span>
            )}

            {/* email field  */}
            <label htmlFor="" className="label">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full"
              placeholder="Enter Email"
            />
            {/* errors will return when field validation fails  */}
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}

            <label htmlFor="" className="label">
              Select Role
            </label>

            <select
              {...register("role")}
              defaultValue="Employee"
              className="input input-bordered w-full"
            >
              <option value="Super Admin">Super Admin</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Employee">Employee</option>
              <option value="Staff">Staff</option>
            </select>

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
            {errors.password && (
              <span className="text-red-600">Password is required</span>
            )}

            <input
              type="submit"
              value="Register"
              className="bg-pink-500 h-10 text-white btn"
            />

            {/* <h3 className="text-[#d269cc]">
              Already have an account?{" "}
              <Link to="/login" className="font-bold">
                {" "}
                Sign In{" "}
              </Link>
            </h3> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register_user;
