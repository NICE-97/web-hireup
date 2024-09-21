import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";

function LoginRight() {
  return (
    <div className="grid gap-5 content-between pl-10 my-10 h-160 text-white">
      <div>
        <div className="inline-block bg-blue-800 px-4 py-2 rounded-sm">
          <div className="flex gap-2 font-medium">
            <h4 className="text-md bg-white px-2 py-1 text-blue-700">NEW</h4>
            <p className="content-center">Login Page</p>
          </div>
        </div>
        <h1 className="text-7xl font-bold mt-5">Welcome to HireUP.</h1>
      </div>
      <div className="grid grid-cols-[80%_20%] relative mt-20">
        <div>
          <div className="text-xl mb-5">
            “Hireup puts the focus in the right place: on the people who are
            using it.”
          </div>
          <div className="flex gap-5">
            <img
              className="rounded-full w-16 h-16"
              src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8bb62eb44259_Testimonial%20Avatar%20(1).webp"
              alt=""
            />
            <div className="content-center text-xl">
              <div>Sarah Lovelace</div>
              <div>UI Designer</div>
            </div>
          </div>
        </div>
        <div className="text-7xl absolute -top-10 right-0">
          <RiDoubleQuotesR />
        </div>
      </div>
    </div>
  );
}

export default LoginRight;
