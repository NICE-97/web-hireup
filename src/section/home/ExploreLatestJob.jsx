import React from 'react'
import job from '../../data/jobs'
import { CiLocationOn } from 'react-icons/ci'
import { FaCoins } from 'react-icons/fa'

function ExploreLatestJob() {
  return (
    <section className='container max-w-full bg-zinc-100'>
            <div className='max-w-7xl mx-auto px-10 py-20'>
                <div className='grid md:grid-cols-2'>
                    <div>
                        <h1 className='text-4xl font-bold'>Explore the latest job openings</h1>
                        <p className='text-gray-500 text-xl mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi rhoncus, pharetra leo et, efficitur tortor. Fusce vel convallis magna.</p>
                    </div>
                    <div className='grid justify-end'>
                        <div className='grid content-end mt-5 md:mt-0'>
                            <button className='px-6 py-4 text-white font-semibold bg-blue-700 hover:bg-blue-800'>See All Jobs</button>
                        </div>
                    </div>
                </div>
                <div className='mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
                    {job.map((items, index) => {
                        return(
                            <div key={`${index}-${items.company}`} className='bg-white px-10 py-5 grid gap-7'>
                                <div className='flex gap-5'>
                                    <div className='border-solid border-2 p-2'>
                                        <img src={items.logo} alt="ball" />
                                    </div>
                                    <div className='content-center'>
                                        <h3 className='font-semibold text-lg'>{items.company}</h3>
                                        <h4 className='text-gray-500 font-medium'>{items.date}</h4>
                                    </div>
                                </div>
                                <div className='font-bold text-xl'>
                                    <h2>{items.position}</h2>
                                </div>
                                <div className='flex gap-2'>
                                    <h2 className='px-4 py-2 bg-blue-100 text-lg text-blue-600 font-semibold'>{items.jobcategory}</h2>
                                    <h2 className='px-4 py-2 bg-orange-100 text-lg text-orange-600 font-semibold'>{items.jobhours}</h2>
                                </div>
                                <div className='flex font-medium gap-2 text-gray-500 [&>div:not(child)]:content-center'>
                                    <div className='text-2xl'>
                                        <CiLocationOn />
                                    </div>
                                    <div>
                                        {items.location}
                                    </div>
                                    <div className='text-2xl'>
                                        <FaCoins />
                                    </div>
                                    <div>
                                        {items.salary}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
    </section>
  )
}

export default ExploreLatestJob
