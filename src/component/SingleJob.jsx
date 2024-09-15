import React from "react";
import { CiLocationOn } from 'react-icons/ci'
import { FaCoins } from 'react-icons/fa'

function SingleJob({company, logo, date, position, jobcategory, jobhours, location, salary}) {
  return (
    <div
      className="bg-white px-10 py-5 grid gap-7"
    >
      <div className="flex gap-5">
        <div className="border-solid border-2 p-2">
          <img src={logo} alt="ball" />
        </div>
        <div className="content-center">
          <h3 className="font-semibold text-lg">{company}</h3>
          <h4 className="text-gray-500 font-medium">{date}</h4>
        </div>
      </div>
      <div className="font-bold text-xl">
        <h2>{position}</h2>
      </div>
      <div className="flex gap-2">
        <h2 className="px-4 py-2 bg-blue-100 text-lg text-blue-600 font-semibold">
          {jobcategory}
        </h2>
        <h2 className="px-4 py-2 bg-orange-100 text-lg text-orange-600 font-semibold">
          {jobhours}
        </h2>
      </div>
      <div className="flex font-medium gap-2 text-gray-500 [&>div:not(child)]:content-center">
        <div className="text-2xl">
          <CiLocationOn />
        </div>
        <div>{location}</div>
        <div className="text-2xl">
          <FaCoins />
        </div>
        <div>{salary}</div>
      </div>
    </div>
  );
}

export default SingleJob;
