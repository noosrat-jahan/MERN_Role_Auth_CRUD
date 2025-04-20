import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

const EditUser = () => {
  const { id } = useParams();
  console.log(id);

  const [userdata, setUserData] = useState("");

  useEffect(() => {
    axios.get(`https://mern-role-auth-crud-server.vercel.app/users/role/${id}`).then((res) => {
      console.log(res.data);
      setUserData(res.data);
    });
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const updatedInfo = {
      name: data.name,
      email: data.email,
      role: data.role
    }

    axios.put(`https://mern-role-auth-crud-server.vercel.app/users/role/${id}`, updatedInfo)
    .then((res) =>{
      console.log(res.data)
    })
  };

  

  return (
    <div>
      <div className=" mt-2 mx-auto w-8/12 border  shadow-md">
        {/* /* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <div className="card mx-auto w-full lg:max-w-md shrink-0 ">
          <h1 className="font-bold text-2xl">Edit User </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body text-black p-0 md:p-4 space-y-2"
          >
            {/* name field  */}
            <label htmlFor="" className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              defaultValue={userdata.name}
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
              defaultValue={userdata.email}
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
              defaultValue={userdata.role}
              {...register("role")}
              className="input input-bordered w-full"
            >
              <option value="Super Admin">Super Admin</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Employee">Employee</option>
              <option value="Staff">Staff</option>
            </select>

            {/* password field  */}
            {/* <label htmlFor="" className="label">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="input input-bordered w-full"
              placeholder="Enter Password"
            />
            
            {errors.password && (
              <span className="text-red-600">Password is required</span>
            )} */}

            <input
              type="submit"
              value="Update"
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

export default EditUser;
