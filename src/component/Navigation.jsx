import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

function Navigation() {
  return (
    <nav className='container max-w-full border-solid border-b-2 border-slate-200'>
          <div className='max-w-7xl mx-auto py-6 px-10'>
            <div className='flex justify-between'>
              <div className='flex'>
                <div className='content-center text-2xl text-blue-700'>
                  <FaArrowRight />
                </div>
                <div className='text-4xl font-medium content-center'>
                  HireUp
                </div>
              </div>
              <div className='lg:flex gap-4 text-xl font-medium hidden [&>a:not(child)]:content-center text-gray-700'>
                <a className='hover:text-blue-700 transition-all' href="">Home</a>
                <a className='hover:text-blue-700 transition-all' href="">Company</a>
                <a className='hover:text-blue-700 transition-all' href="">Browse</a>
                <a className='hover:text-blue-700 transition-all' href="">Blog</a>
              </div>
              <div className='lg:flex gap-2 font-medium hidden'>
                  <button className='px-6 py-4 text-gray-700 hover:text-blue-700 transition duration-300 ease-in-out'>Post a Job</button>
                  <button className='bg-blue-700 hover:bg-blue-800 text-white px-6 py-4 transition duration-300 ease-in-out'>Login</button>
              </div>
              <div className='lg:hidden cursor-pointer'>
                <div className='text-3xl content-center p-2 border-2 border-slate-200'>
                  <IoMdMenu />
                </div>
              </div>
            </div>
          </div>
    </nav>
  )
}

export default Navigation
