import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

function SingleQuestions({title, description}) {

  const [ showContent, setShowContent ] = useState(false)

  return (
    <article className='p-6 bg-white'>
        <div className='flex justify-between'>
            <h3 className='font-semibold text-lg'>{title}</h3>
            <div className='grid'>
                <button onClick={()=>setShowContent(!showContent)} className={`content-center transition text-lg duration-700 ${showContent ? "rotate-180" : ""}`}>
                    <IoIosArrowDown />
                </button>
            </div>
        </div>
        <div className={`grid overflow-hidden transition-all duration-700 ease-in-out text-gray-700 ${showContent ? 'grid-rows-[1fr] opacity-100 mt-5' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
            <div className='overflow-hidden'>
                {description}
            </div>
        </div>
    </article>
  )
}

export default SingleQuestions