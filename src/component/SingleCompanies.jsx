import React from "react";

function SingleCompanies({logo, company, description, employees}) {
  return (
    <div
      className="grid gap-5 border-2 border-slate-200 px-10 py-10"
    >
      <div className="flex gap-5">
        <div className="border-solid border-2 p-2">
          <img className="w-10 h-10" src={logo} alt="ball" />
        </div>
        <div className="content-center">
          <h3 className="font-bold text-2xl">{company}</h3>
        </div>
      </div>
      <div className="text-gray-500 font-semibold">
        <p>
          {description}
        </p>
      </div>
      <div className="inline-block">
        <div className="px-4 py-2 bg-green-200 font-semibold text-green-600 inline-block">
          <button>{employees}</button>
        </div>
      </div>
    </div>
  );
}

export default SingleCompanies;
