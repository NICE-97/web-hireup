import React, { useState } from 'react'
import Banner from '../component/Banner'
import Navigation from '../component/Navigation'
import Footer from '../component/Footer'

import { IoIosPlayCircle } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

import amazon from '../assets/amazon.svg'
import dropbox from '../assets/dropbox.svg'
import hubspot from '../assets/hubspot.svg'
import opentable from '../assets/opentable.svg'
import shopify from '../assets/shopify.svg'
import slack from '../assets/slack.svg'

import askQuestions from '../data/askQuestions';
import SingleQuestions from '../component/SingleQuestions';

function Company() {

  const [ Questions, setQuestions ] = useState(askQuestions)

  return (
    <div>
        <Banner/>
        <Navigation/>
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
        <section className='container max-w-full'>
            <div className='max-w-7xl mx-auto px-10 py-20 grid justify-items-center gap-5'>
                <div className='text-center w-4/5 md:w-3/5 lg:w-2/5 grid gap-5'>
                    <h3 className='uppercase font-semibold text-blue-700'>about hireup</h3>
                    <h1 className='text-4xl font-bold'>Our Team</h1>
                    <p className='text-xl text-gray-700 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus pharetra cursus. Suspendisse sodales porta leo, ac placerat ex pretium quis.</p>
                </div>
                <div className='grid grid-cols-[40%_60%] gap-5 mt-10'>
                    <div className='grid gap-5'>
                        <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b1fdeb442ab_About%20Page%20Image%20(6).webp" alt="" />
                        <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b307ab442a7_About%20Page%20Image%20(5).webp" alt="" />
                    </div>
                    <div>
                        <img className='h-full object-cover' src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b2818b442aa_About%20Page%20Image%20(1).webp" alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b18b1b442b0_About%20Page%20Image%20(7).webp" alt="" />
                    <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b2ba9b442b1_About%20Page%20Image%20(8).webp" alt="" />
                </div>
            </div>
        </section>
        <section className='container max-w-full bg-zinc-100'>
            <div className='max-w-7xl mx-auto px-10 py-20 grid justify-items-center gap-5'>
                <div className='text-center w-4/5 md:w-3/5 lg:w-2/5 grid gap-5'>
                    <h3 className='uppercase font-semibold text-blue-700'>about hireup</h3>
                    <h1 className='text-4xl font-bold'>Frequently asked questions</h1>
                </div>
                <div className='w-4/5 grid gap-5 mt-10'>
                    {Questions.map((item, index) => {
                        return(
                            <SingleQuestions key={`${index}-${item.title}`} {...item}/>
                        )
                    })}
                </div>
            </div>
        </section>
        <section className='container max-w-full'>
            <div className='max-w-7xl mx-auto px-10 py-20 grid justify-items-center gap-5'>
                <div className='text-center w-4/5 md:w-3/5 lg:w-2/5 grid gap-5'>
                    <h1 className='text-4xl font-bold'>Contact us</h1>
                    <p className='text-gray-700 text-xl font-medium'>Questions about Hireup? Get in touch and let us know how we can help.</p>
                </div>
                <div className='grid gap-5 lg:grid-cols-2 mt-10'>
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
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Company