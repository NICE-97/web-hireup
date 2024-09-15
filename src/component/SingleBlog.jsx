import React from "react";
import { FaArrowRight } from 'react-icons/fa'

function SingleBlog({title, image, info, date}) {
  return (
    <div
      className="p-4 border-2 border-slate-200"
    >
      <div>
        <img
          className="w-full h-60 object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-5">
        <div className="grid gap-5">
          <div>
            <h2 className="px-4 py-2 inline-block bg-blue-100 text-lg text-blue-600">
              {title}
            </h2>
          </div>
          <p className="text-2xl font-bold">{info}</p>
          <p className="uppercase text-gray-500 font-medium">{date}</p>
          <div className="flex gap-4  justify-center py-2 bg-gray-100 font-medium">
            <button>Read More</button>
            <div className="content-center">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
