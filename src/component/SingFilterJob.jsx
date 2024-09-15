import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function SingFilterJob({ title }) {
  const [ showContent, setShowContent ] = useState(false)
  return (
    <div className="px-5">
      <div className="flex justify-between text-xl">
        <h4 className="font-semibold">{ title }</h4>
        <button
          onClick={() => setShowContent(!showContent)}
          className={`content-center transition text-lg duration-700 ${
            showContent ? "rotate-180" : ""
          }`}
        >
          <IoIosArrowDown/>
        </button>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-700 ease-in-out text-gray-700 ${
          showContent
            ? "grid-rows-[1fr] opacity-100 mt-5"
            : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden grid gap-5">
          <div className="flex justify-between text-lg">
            <div className="flex gap-3">
              <input className="w-6 h-full" type="checkbox" />
              <div>Checkbox</div>
            </div>
            <p>(20)</p>
          </div>
          <div className="flex justify-between text-lg">
            <div className="flex gap-3">
              <input className="w-6 h-full" type="checkbox" />
              <div>Checkbox</div>
            </div>
            <p>(20)</p>
          </div>
          <div className="flex justify-between text-lg">
            <div className="flex gap-3">
              <input className="w-6 h-full" type="checkbox" />
              <div>Checkbox</div>
            </div>
            <p>(20)</p>
          </div>
          <div className="flex justify-between text-lg">
            <div className="flex gap-3">
              <input className="w-6 h-full" type="checkbox" />
              <div>Checkbox</div>
            </div>
            <p>(20)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingFilterJob;
