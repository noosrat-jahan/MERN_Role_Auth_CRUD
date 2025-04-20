import React from 'react';
import { useForm } from 'react-hook-form';

const EditUser = () => {

     const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        console.log(data);
    }
    

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

export default EditUser;