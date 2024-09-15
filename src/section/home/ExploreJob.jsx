import React from 'react'
import iconperson from '../../assets/image/iconperson.svg'
import { IoMdSearch } from "react-icons/io";

function ExploreJob() {
  return (
    <section className='container max-w-full py-20'>
            <div className='max-w-7xl mx-auto px-10 py-40 bg-zinc-100 flex justify-center relative'>
                <div className='border-2 inline-block p-5 bg-white absolute -top-10'>
                    <img src={iconperson} alt="preson" />
                </div>
                <div className='text-center  md:w-3/6 grid gap-5'>
                    <h1 className=' text-4xl font-bold'>Explore a job now!</h1>
                    <p className='text-xl text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus pharetra cursus. Suspendisse sodales porta leo, ac placerat ex pretium quis.</p>
                </div>
                <div className='absolute -bottom-8 border-2  md:w-3/6 px-5 py-2 bg-white'>
                    <div className='flex justify-between'>
                        <div className='content-center text-xl'><IoMdSearch /></div>
                        <div className='p-2 px-2 w-full'>
                            <input className='w-full focus:outline-none' type="text" placeholder='Search'/>
                        </div>
                        <div className='px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-center'>
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default ExploreJob
