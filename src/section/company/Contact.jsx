import React from 'react'
import { FaArrowRight } from "react-icons/fa";

// Motion Control
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

function Contact() {
  return (
    <section className='container max-w-full'>
            <div className='max-w-7xl mx-auto px-10 py-20 grid justify-items-center gap-5'>
                <motion.div 
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0}}
                
                className='text-center w-4/5 md:w-3/5 lg:w-2/5 grid gap-5'>
                    <h1 className='text-4xl font-bold'>Contact us</h1>
                    <p className='text-gray-700 text-xl font-medium'>Questions about Hireup? Get in touch and let us know how we can help.</p>
                </motion.div>
                <motion.div 
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0}}
                
                className='grid gap-5 lg:grid-cols-2 mt-10'>
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
                    <div>
                        <form className='grid gap-5'>
                            <div>
                                <label className='font-medium'>Name</label>
                                <input className='flex w-full focus:outline-none border-2 mt-2 p-2 focus:border-blue-700' type="text" placeholder='Your Name'/>
                            </div>
                            <div>
                                <label className='font-medium'>Email</label>
                                <input className='flex w-full focus:outline-none border-2 mt-2 p-2 focus:border-blue-700' type="text" placeholder='Email'/>
                            </div>
                            <div>
                                <label className='font-medium'>Subject</label>
                                <input className='flex w-full focus:outline-none border-2 mt-2 p-2 focus:border-blue-700' type="text" placeholder='Subject'/>
                            </div>
                            <div>
                                <label className='font-medium'>Message</label>
                                <input className='flex w-full focus:outline-none border-2 mt-2 p-2 pb-36 focus:border-blue-700' type="text" placeholder='Message'/>
                            </div>
                            <button className='flex justify-center bg-blue-700 hover:bg-blue-800 text-white py-3 font-semibold transition duration-300 ease-in-out'>
                                <div className='flex gap-4'>
                                    Submit
                                    <span className='content-center'><FaArrowRight /></span>
                                </div>
                                
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
    </section>
  )
}

export default Contact
