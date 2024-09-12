import React from 'react'

function Banner() {
  return (
    <div className='container max-w-full bg-black'>
        <div className='max-w-7xl mx-auto py-4 justify-center px-5 grid sm:grid-flow-col'>
          <div className='grid content-center'>
            <p className='text-white'>Discover over 1,000+ premium webflow components today!</p>
          </div>
          <div className='ml-2 grid justify-items-center'>
            <button className='px-4 py-1 bg-blue-700 text-white hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out'>Unlock More</button>
          </div>
        </div>
    </div>
  )
}

export default Banner
