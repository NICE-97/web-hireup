import React from 'react'
import { Link } from 'react-router-dom'

function RegisterLeft() {
  return (
    <div className="px-10 my-10 content-center">
      <div className="grid gap-5 content-between h-full">
        <div>
          <h2 className="text-4xl font-bold">Sing up</h2>
          <p className="text-2xl text-gray-700 mt-10">
            Get started posting and applying for jobs
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
              <label className="font-medium">Name</label>
              <input
                className="flex w-full focus:outline-none border-2 mt-2 p-2 focus:border-blue-700"
                type="text"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                className="flex w-full focus:outline-none border-2 mt-2 p-2 focus:border-blue-700"
                type="password"
              />
            </div>
            <div className="grid grid-cols-[5%_95%] gap-3">
              <input className="w-6 h-6" type="checkbox" />
              <div>I consent to receive marketing emails.</div>
            </div>
            <div className="grid grid-cols-[5%_95%] gap-3 ">
              <input className="w-6 h-6" type="checkbox" />
              <div>By creating an account, I agree to this website's <a href='/' className='text-blue-700'>privacy policy</a> and <a href='/' className='text-blue-700'>terms of service</a></div>
            </div>
            <button className="flex justify-center bg-blue-700 hover:bg-blue-800 text-white py-3 font-semibold transition duration-300 ease-in-out">
              Create an account
            </button>
          </form>
        </div>
        <div>
          <hr className="mt-5" />
          <div className="flex gap-2 text-xl mt-5 text-gray-700">
            <div>Already have an account?</div>
            <Link className="text-blue-700" to="/login">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterLeft
