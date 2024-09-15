import React from 'react'

import { FiCheckCircle } from "react-icons/fi";

function About() {
  return (
    <section className='container max-w-full relative bg-zinc-100'>  
            <div className='max-w-7xl mx-auto px-10 py-20 grid lg:grid-cols-[40%_60%] gap-5'>
                <div className='content-center'>
                    <div className='grid gap-12'>
                        <h3 className='uppercase text-blue-700 font-semibold'>About hireup</h3>
                        <h1 className='text-4xl font-bold'>Who is our audience?</h1>
                        <p className='text-gray-700 text-lg font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus pharetra cursus. Suspendisse sodales porta leo, ac placerat ex pretium quis.</p>
                        <div className='grid gap-5'>
                            <div className='flex gap-2'>
                                <div className='content-center text-blue-500 text-xl'><FiCheckCircle /></div>
                                <span className='content-center font-medium'>Add your feature here</span>
                            </div>
                            <div className='flex gap-2'>
                                <div className='content-center text-blue-500 text-xl'><FiCheckCircle /></div>
                                <span className='content-center font-medium'>Add your feature here</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <div>
                        <img className='h-full object-cover' src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8bf367b442ac_About%20Page%20Image%20(4).webp" alt="" />
                    </div>
                    <div className='grid gap-5'>
                        <img className='w-full md:h-80 lg:h-96 object-cover' src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b053bb442a8_About%20Page%20Image%20(3).webp" alt="" />
                        <img className='w-full h-full object-cover'src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8bd838b442a9_About%20Page%20Image%20(2).webp" alt="" />
                    </div>
                </div>
            </div>
            {/* <div className='grid grid-cols-[60%_40%]'>
                <div className='bg-gray-100 py-96'></div>
                <div className='py-96'></div>
            </div> */}
    </section>
  )
}

export default About
