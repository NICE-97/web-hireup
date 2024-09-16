import React from 'react'
import { BsFillPersonLinesFill } from "react-icons/bs";

// Motion Control
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

function Feature() {
  return (
    <section className='container max-w-full'>
            <div className='max-w-7xl mx-auto px-10 py-20'>
                <motion.div 
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0}}
                
                className='grid grid-cols-1 lg:grid-cols-2 gap-x-10'>
                    <div>
                        <div className='w-full'>
                            <img className='w-full' src="https://assets.website-files.com/63337525695d8ba70ab44222/6345158a36516a477226909d_Feature%20Image.webp" alt="" />
                        </div>
                        <div className='hidden sm:grid justify-items-center'>
                            <div className='flex relative'>
                                <div className='span absolute -left-12 z-0'></div>
                                <div className='bg-gray-100 px-4 py-4 z-10'>
                                    <div className='text-base font-semibold'>
                                        <h4 className='text-gray-500'>Partnership with <span className='text-gray-800'>Glassdoor</span> and <span className='text-gray-800'>LinkedIn</span></h4>
                                    </div>
                                </div>
                                <div className='span absolute -right-12'></div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-rows-2 mt-10 lg:mt-0'>
                        <div className='grid gap-y-2'>
                            <h3 className='text-blue-700 font-semibold text-2xl'>WHY CHOOSE US</h3>
                            <h1 className='text-4xl font-bold'>Build a custom membership site with locked content.</h1>
                            <p className='text-gray-500 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi rhoncus, pharetra leo et, efficitur tortor. Fusce vel convallis magna, sit amet pulvinar diam. Sed laoreet feugiat consequat.</p>
                        </div>
                        <div>
                            <div className='grid gap-2'>
                                <div className='p-5 bg-gray-50 flex gap-x-5'>
                                    <div className='border-2 border-slate-200 content-center inline-block p-4 text-2xl text-blue-700'>
                                        <BsFillPersonLinesFill />
                                    </div>
                                    <div>
                                        <h3 className='font-semibold'>Add a feature point here</h3>
                                        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                <div className='p-5 bg-gray-50 flex gap-x-5'>
                                    <div className='border-2 border-slate-200 content-center inline-block p-4 text-2xl text-blue-700'>
                                        <BsFillPersonLinesFill />
                                    </div>
                                    <div>
                                        <h3 className='font-semibold'>Add a feature point here</h3>
                                        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                <div className='p-5 bg-gray-50 flex gap-5'>
                                    <div className='border-2 border-slate-200 content-center inline-block p-4 text-2xl text-blue-700'>
                                        <BsFillPersonLinesFill />
                                    </div>
                                    <div>
                                        <h3 className='font-semibold'>Add a feature point here</h3>
                                        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
    </section>
  )
}

export default Feature
