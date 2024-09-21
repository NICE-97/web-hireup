import React from "react";
import { Link } from 'react-router-dom'

function LoginLeft() {
  return (
    <div className="px-10 my-10 h-144 content-center">
      <div className="grid gap-5 content-between h-full">
        <div>
          <h2 className="text-4xl font-bold">Login</h2>
          <p className="text-2xl text-gray-700 mt-10">
            Sing in to create and apply for jobs
          </p>
        </div>
        <div>
          <form className="grid gap-5 mt-16">
            <div>
              <label className="font-medium">Email</label>
              <input
                className="flex w-full focus:outline-none border-2 mt-2 p-2 focus:border-blue-700"
                type="email"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                className="flex w-full focus:outline-none border-2 mt-2 p-2 focus:border-blue-700"
                type="password"
              />
            </div>
            <button className="flex justify-center bg-blue-700 hover:bg-blue-800 text-white py-3 font-semibold transition duration-300 ease-in-out">
              Login
            </button>
          </form>
        </div>
        <div>
          <hr className="mt-5" />
          <div className="flex gap-2 text-xl mt-5 text-gray-700">
            <div>Don't have an account?</div>
            <Link className="text-blue-700" to="/register">
              Sing Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginLeft;
