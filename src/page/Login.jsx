import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import LoginLeft from "../section/login/LoginLeft";
import LoginRight from "../section/login/LoginRight";

function Login() {
  return (
    <section className="container max-w-full md:h-screen90 grid md:grid-cols-2">
      <div className="flex justify-end">
        <div className="max-w-2xl content-center w-full">
            <LoginLeft/>
        </div>
      </div>
      <div className="bg-blue-700  hidden md:flex">
        <div className="max-w-2xl content-center w-full">
          <LoginRight/>
        </div>
      </div>
    </section>
  );
}

export default Login;
