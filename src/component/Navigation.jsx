import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

function Navigation() {
  const [ showContent, setShowContent ] = useState(false)
  return (
    <nav className='container max-w-full border-solid border-b-2 border-slate-200 sticky bg-white'>
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
              <ul className='lg:flex gap-5 text-xl hidden [&>li:not(child)]:content-center text-gray-700'>
                <li className='hover:text-blue-700 transition-all'><Link to="/">Home</Link></li>
                <li className='hover:text-blue-700 transition-all'><Link to="/company">Company</Link></li>
                <li className='hover:text-blue-700 transition-all'><Link to="/browse">Browse</Link></li>
                <li className='hover:text-blue-700 transition-all'><Link to="/">Blog</Link></li>
              </ul>
              <div className='lg:flex gap-2 font-medium hidden'>
                  <button className='px-6 py-4 text-gray-700 hover:text-blue-700 transition duration-300 ease-in-out'>Post a Job</button>
                  <button className='bg-blue-700 hover:bg-blue-800 text-white px-6 py-4 transition duration-300 ease-in-out'>Login</button>
              </div>
              <div className='lg:hidden cursor-pointer'>
                <button onClick={()=>setShowContent(!showContent)} className={`text-3xl content-center p-2 border-2 border-slate-200 transition duration-300 ease-in-out ${showContent ? 'bg-blue-700 text-white' : 'bg-white text-gray-700'}`}>
                  <IoMdMenu />
                </button>
              </div>
            </div>
            <nav className={`grid overflow-hidden transition-all lg:hidden duration-700 ease-in-out text-lg mt-5 gap-5 text-gray-700 font-semibold ${showContent ? 'grid-rows-[1fr] opacity-100 mt-5' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
              <ul className='overflow-hidden flex flex-col gap-3'>
                <li className='hover:text-blue-700 transition-all'><Link to="/">Home</Link></li>
                <li className='hover:text-blue-700 transition-all'><Link to="/company">Company</Link></li>
                <li className='hover:text-blue-700 transition-all'><Link to="/browse">Browse</Link></li>
                <li className='hover:text-blue-700 transition-all'><Link to="/">Blog</Link></li>
                <button className='bg-blue-700 hover:bg-blue-800 text-white px-6 py-4 transition duration-300 ease-in-out'>Login</button>
              </ul>
            </nav>
          </div>
    </nav>
  )
}

export default Navigation

// onClick={()=>setShowContent(!showContent)} className={`content-center transition text-lg duration-700 ${showContent ? "rotate-180" : ""}`}
