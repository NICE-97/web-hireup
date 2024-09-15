import React, { useState } from 'react'
import filterJob from '../../data/filterJob'
import SingFilterJob from '../../component/SingFilterJob'
import SingleJob from '../../component/SingleJob'
import jobs from '../../data/jobs'

import { GoTriangleDown } from "react-icons/go";
import { BsFillInfoCircleFill } from "react-icons/bs";

function Jobs() {
  const [ showSelect, setShowSelect ] = useState(false)
  return (
    <section className='container max-w-full bg-zinc-100'>
            <div className='max-w-7xl mx-auto px-10 py-20 grid md:grid-cols-[30%,70%] gap-10'>
                <div>
                    <div className='grid gap-5'>
                        <div className='flex gap-3 text-xl'>
                            <div className='content-center text-gray-400'>
                                <BsFillInfoCircleFill />
                            </div>
                            <h3 className='uppercase font-medium text-blue-700'>filter jobs</h3>
                        </div>
                        {filterJob.map((item, index) => {
                            return(
                                <div key={`${index}-${item.title}`}>
                                    <SingFilterJob {...item}/>
                                    <hr className='mt-5'></hr>
                                </div>
                            )
                        })}
                        <div className='p-5 bg-red-100'>
                            <div className='text-red-700'>
                                For advanced filtering options, we recommend using Jetboost or Finsweets CMS filter options.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='grid sm:flex justify-between'>
                        <div className='mt-4 font-semibold'>
                            <h4>Showing: 600 filtered jobs</h4>
                        </div>
                        <div className='px-4 py-2 bg-white border-2 font-medium mt-2 sm:mt-0'>
                            <div className='text-gray-700 flex gap-2'>Sort by: 
                                <div className='text-blue-700'>Relevance</div>
                                <button onClick={()=>setShowSelect(!showSelect)} className={`content-center transition duration-700 ${showSelect ? "rotate-180" : ""}`}><GoTriangleDown /></button>
                            </div>
                        </div>
                    </div>
                    <div className={`grid absolute top-20 sm:top-8 sm:right-0 w-customSelect overflow-hidden transition-all duration-700 ease-in-out text-gray-700 ${showSelect ? 'grid-rows-[1fr] opacity-100 mt-5' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                        <div className='overflow-hidden'>
                            <div className='px-4 py-2 bg-white border-2  font-medium grid gap-5'>
                                <div className='text-blue-700'>Most Recent</div>   
                                <div className='text-blue-700'>Salary</div>   
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 grid lg:grid-cols-2 gap-5 min-w-84 sm:min-w-0'>
                        {jobs.map((item, index) => {
                            return(
                                <SingleJob key={`${index}-${item.company}`} {...item}/>
                            )
                        })}
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Jobs
